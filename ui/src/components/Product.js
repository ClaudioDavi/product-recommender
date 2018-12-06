import React, { Component } from "react";
import { Item, Grid, Label } from "semantic-ui-react";

class Product extends Component {
  render() {
    return (
      <Item>
        <Item.Content verticalAlign="middle">
          <Item.Header>{this.props.name}</Item.Header>
          <Item.Extra>
            {this.props.hashtags.map(tag => (
              <Label key={tag.value}>{tag.value}</Label>
            ))}
          </Item.Extra>
          {this.props.similar && (
            <Item.Extra>
              You may also like:
              <Grid columns={this.props.similar.length}>
                {this.props.similar.map(prod => (
                  <Grid.Column key={prod.id}>
                    <Item>
                      <Item.Content>{prod.name}</Item.Content>
                    </Item>
                  </Grid.Column>
                ))}
              </Grid>
            </Item.Extra>
          )}
        </Item.Content>
      </Item>
    );
  }
}
export default Product;
