import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";
import Paging from "views/AllPage/Paging.jsx";
import Card from "views/AllPage/Card.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class Jogger extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Quần Jogger</h3>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <p>asdasd</p>
                  <Card url="data:image/jpeg;base64,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" />
                  <Paging />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(Jogger);
