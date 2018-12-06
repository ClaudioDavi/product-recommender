import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";

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
      <Input
        onChange={this.handleChange}
        value={value}
        fluid
        placeholder="Product Name"
      >
        <input />
        <Button onClick={this.setName}>Search</Button>
      </Input>
    );
  }
}
export default ProductSearch;
