import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Add, Remove } from "@material-ui/icons";

const MenuItem = props => (
  <Card className={props.classes.card}>
    <CardMedia
      className={props.classes.cardMedia}
      image={require(`../assets/images/${props.item.imgSrc}.jpeg`)}
      title={props.item.name}
    />
    <CardContent className={props.classes.cardContent}>
      <Typography gutterBottom variant="h5" component="h2">
        {props.item.name}
      </Typography>
      <Typography>
        Price: {props.item.price}
        <br />
        {props.count > 0 && (
          <React.Fragment>
            <React.Fragment>Total: {props.count}</React.Fragment>
            <br />
            <React.Fragment>
              Cost (INR): {props.count * props.item.price}
            </React.Fragment>
          </React.Fragment>
        )}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        variant="contained"
        color="primary"
        className={props.classes.button}
        onClick={() => props.addItem(props.item.id)}
      >
        <Add className={props.classes.rightIcon} />
      </Button>
      <Button
        disabled={props.count === 0 ? true : false}
        variant="contained"
        color="secondary"
        className={props.classes.button}
        onClick={() => props.removeItem(props.item.id)}
      >
        <Remove className={props.classes.rightIcon} />
      </Button>
    </CardActions>
  </Card>
);

export default MenuItem;
