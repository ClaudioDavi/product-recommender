import React from "react";
import { Item } from "semantic-ui-react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Product from "./Product";
import { Component } from "react";

class ProductList extends Component {
  render() {
    const data = this.props;
    if (data.loading) return <div>Loading...</div>;
    if (data.error) {
      console.log(data);
      return <div>Error!!</div>;
    }
    if (data.products.length === 0) return <div> No Products</div>;
    return (
      <Item.Group divided>
        {data.products.map(p => (
          <Product key={p.id} name={p.name} />
        ))}
      </Item.Group>
    );
  }
}

const ProductListWithData = graphql(
  gql`
    query ProductListQuery($name: String!) {
      products: products(substring: $name, limit: 10) {
        name
        hashtags
        similar {
          name
        }
      }
    }
  `
)(ProductList);

export default ProductListWithData;
