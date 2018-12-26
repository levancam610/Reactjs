import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Grid from '@material-ui/core/Grid';
import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Hot category</h2>
        <div>
          <Grid container justify="center" spacing={24}>
            <Grid item xs={12} sm={12} md={3}>
              <a href="#">
                <Card style={{ width: "20rem" }}>
                  <img
                    style={{ height: "350px", width: "100%", display: "block" }}
                    className={classes.imgCardTop}
                    src={team1}
                    alt="Card-img-cap"
                  />
                  <CardBody>
                    <h4 className={classes.cardTitle}>Quần Jogger</h4>
                  </CardBody>
                </Card>
              </a>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <a href="#">
                <Card style={{ width: "20rem" }}>
                  <img
                    style={{ height: "350px", width: "100%", display: "block" }}
                    className={classes.imgCardTop}
                    src={team2}
                    alt="Card-img-cap"
                  />
                  <CardBody>
                    <h4 className={classes.cardTitle}>Quần Jogger</h4>
                  </CardBody>
                </Card>
              </a>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <a href="#">
                <Card style={{ width: "20rem" }}>
                  <img
                    style={{ height: "350px", width: "100%", display: "block" }}
                    className={classes.imgCardTop}
                    src={team3}
                    alt="Card-img-cap"
                  />
                  <CardBody>
                    <h4 className={classes.cardTitle}>Quần Jogger</h4>
                  </CardBody>
                </Card>
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
