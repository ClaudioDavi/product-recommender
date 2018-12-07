import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class ProductSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.name
    };
  }
  setName = () => {
    this.props.setSearchItem(this.state.value);
  };

  handleChange = event => {
    if (event) {
      this.setState({
        value: event.target.value
      });
    }
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <TextField
          onChange={this.handleChange}
          value={value}
          fluid="true"
          placeholder="Product Name"
        />
        <Button onClick={this.setName}>Search</Button>
      </div>
    );
  }
}
export default ProductSearch;
