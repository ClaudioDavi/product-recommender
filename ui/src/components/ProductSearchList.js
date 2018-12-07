import React from "react";
import { Item } from "semantic-ui-react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Product from "./Product";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

const GET_PRODUCTS = gql`
  query search($filter: String!) {
    search(filter: $filter) {
      name
      id
      similar {
        name
      }
      tags {
        value
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
            <ListItem>
              {data.search.map(p => (
                <Product key={p.id} name={p.name} similar={p.similar} />
              ))}
            </ListItem>
            <div>
              <Typography variant="overline" gutterBottom>
                Você vai curtir também:
              </Typography>

              {data.search.map(p =>
                p.similar.map(s => <Product key={s.id} name={s.name} />)
              )}
            </div>
            {data.search.map(p =>
              p.tags.map(t => (
                <Typography variant="overline" gutterBottom>
                  {t.value}
                </Typography>
              ))
            )}
          </div>
        );
      }}
    </Query>
  );
}
