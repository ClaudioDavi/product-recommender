import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = () => ({
  root: {
    border: "1px solid red"
  }
});

function Box({ classes }) {
  return (
    <div classes={classes.root}>
      olar
      <TextField fullWidth label="Buscar" />
      <Button onClick={this.setName} aliginSelf={"flex-end"}>
        Search
      </Button>
    </div>
  );
}

export default withStyles(styles)(Box);
