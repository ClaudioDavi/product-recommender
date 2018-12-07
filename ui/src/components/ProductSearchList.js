import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Product from "./Product";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  ad: {
    background: "#fbffce"
  }
};

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

function Box({ name, setName, classes }) {
  return (
    <Query query={GET_PRODUCTS} variables={{ filter: name }}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        if (!data.search) {
          return null;
        }

        return (
          <Grid container spacing={16}>
            <Grid item sm={12} md={12}>
              <br />
              <Button onClick={() => setName("")} color="secondary">
                Voltar
              </Button>
            </Grid>
            <Grid item sm={7} md={7}>
              <Typography variant="overline" gutterBottom>
                Sua busca por "{name}"
              </Typography>
              {data.search.map(p => (
                <Product setName={setName} key={p.id} {...p} />
              ))}
            </Grid>
            <Grid item sm={5} md={5} className={classes.ad}>
              <Typography variant="overline" gutterBottom>
                Você vai curtir também:
              </Typography>

              {data.search.map(p =>
                p.similar.map(s => (
                  <Product setName={setName} key={s.id} {...s} />
                ))
              )}
            </Grid>
          </Grid>
        );
      }}
    </Query>
  );
}

export default withStyles(styles)(Box);
