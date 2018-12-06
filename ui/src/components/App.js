import React, { Component } from "react";
import ProductSearch from "./ProductSearch";
import ProductList from "./ProductList";

class App extends Component {
  constructor(props) {
    this.state = {
      name: "Açaí"
    };
  }
  setSearchItem = name => {
    this.setState({ name });
    console.log("state set");
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <ProductSearch setSearchItem={this.setSearchItem} name={name} />
        <ProductList name={name} />
      </div>
    );
  }
}
export default App;
