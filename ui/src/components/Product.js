import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    minWidth: 275,
    marginBottom: 8
    // marginRight: 16,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  tag: {
    ...theme.typography.button,
    marginRight: 8
  }
});

function Product(props) {
  const { classes, name, tags, setName } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card} onClick={() => setName(name)}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        {tags &&
          tags.map(t => (
            <div key={t.value} className={classes.tag}>
              {t.value}
            </div>
          ))}
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(Product);
