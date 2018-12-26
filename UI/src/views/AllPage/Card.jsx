import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";

const style = {
  ...imagesStyles,
  cardTitle
};
class Cards extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <Card style={{ width: "20rem" }}>
          <a href="#">
          <img
            style={{ height: "300px", width: "100%", display: "block" }}
            className={classes.imgCardTop}
            src={ this.props.url }
            alt="Card-img-cap"
          />
          <CardBody>
            <h4 className={classes.cardTitle}>Quần Jogger nam</h4>
            <h5>190,000 vnd</h5>
          </CardBody>
          </a>
        </Card>

    );
  }
}

export default withStyles(style)(Cards);
