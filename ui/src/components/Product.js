import React, { Component } from "react";
import { Item, Grid, Label } from "semantic-ui-react";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

import ListItemText from "@material-ui/core/ListItemText";

class Product extends Component {
  render() {
    console.log(this.props);
    return (
      <ListItem alignItems="flex-start">
        <ListItemText primary={this.props.name} />
      </ListItem>
    );
  }
}
export default Product;
