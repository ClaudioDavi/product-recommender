import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    // border: '1px solid red',
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

class ProductSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }
  setName = e => {
    e.preventDefault();
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
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <form onSubmit={this.setName}>
          <Typography variant="h1">PROODLE</Typography>
          <br />
          <br />
          <TextField
            onChange={this.handleChange}
            value={value}
            fluid="true"
            fullWidth
            placeholder="Product Name"
          />
          <br />
          <br />
          <Button variant="contained" color="primary" type="submit">
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(ProductSearch);
