import React, { Component } from "react";
import ProductSearch from "./ProductSearch";
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
      <>
        {!name ? (
          <ProductSearch setSearchItem={this.setSearchItem} />
        ) : (
          <ProductSearchList setName={this.setSearchItem} name={name} />
        )}
      </>
    );
  }
}
export default App;
