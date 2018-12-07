import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Product from "./Product";

const GET_PRODUCTS = gql`
  {
    products {
      name
      id
    }
  }
`;

export default function() {
  return (
    <Query query={GET_PRODUCTS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        if (!data.products) {
          return null;
        }

        return (
          <div>
            {data.products.map(p => (
              <Product key={p.id} name={p.name} />
            ))}
          </div>
        );
      }}
    </Query>
  );
}
