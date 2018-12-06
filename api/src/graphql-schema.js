import { neo4jgraphql } from "neo4j-graphql-js";
import fs from "fs";
import path from "path";

export const typeDefs = fs
  .readFileSync(
    process.env.GRAPHQL_SCHEMA || path.join(__dirname, "schema.graphql")
  )
  .toString("utf-8");

export const resolvers = {
  Query: {
    products: neo4jgraphql,
    hashtags: neo4jgraphql,
    search: (root, args, context) => {
      let session = context.driver.session();
      let query =
        "MATCH(product:Product) WHERE toLower(product.name) CONTAINS toLower($filter) RETURN product LIMIT $limit;";
      return session.run(query, args).then(result => {
        return result.records.map(record => {
          return record.get("product").properties;
        });
      });
    }
  },
  Product: {
    hashtags: neo4jgraphql,
    similar: (product, _, context) => {
      let session = context.driver.session();
      let params = { id: product.id };
      let query = ` MATCH(product:Product) WHERE product.id = $id
                    MATCH (product)-[:Hashtags]->(t:Tag)<-[:Hashtags]-(prod:Product)
                    WITH product, prod, COUNT(*) AS tagOverlap
                    RETURN prod ORDER BY(tagOverlap) DESC LIMIT 2`;

      return session
        .run(query, params)
        .then(result => {
          return result.records.map(record => {
            return record.get("prod").properties;
          });
        })
        .then(items => (items ? items : []));
    }
  }
};
