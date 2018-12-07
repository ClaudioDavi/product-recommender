import React, { Component } from "react";
import ProductSearch from "./ProductSearch";
import ProductList from "./ProductList";
import ProductSearchList from "./ProductSearchList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  setSearchItem = name => {
    this.setState({ name });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <ProductSearch setSearchItem={this.setSearchItem} name={name} />
        {name ? <ProductSearchList name={name} /> : []}
      </div>
    );
  }
}
export default App;
