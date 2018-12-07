import React from "react";
import { Item } from "semantic-ui-react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Product from "./Product";

const GET_PRODUCTS = gql`
  query search($filter: String!) {
    search(filter: $filter) {
      name
      id
      similar {
        name
      }
    }
  }
`;

export default function({ name }) {
  return (
    <Query query={GET_PRODUCTS} variables={{ filter: name }}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        {
          console.log({ data });
        }

        if (!data.search) {
          return null;
        }

        return (
          <div>
            <Item.Group divided>
              {data.search.map(p => (
                <Product key={p.id} name={p.name} hashtags={p.hashtags} />
              ))}
            </Item.Group>
            <Item.Group divided>
              <Item.Extra>
                Você vai curtir também:
                {data.search.map(p =>
                  p.similar.map(s => <Product key={s.id} name={s.name} />)
                )}
              </Item.Extra>
            </Item.Group>
          </div>
        );
      }}
    </Query>
  );
}
