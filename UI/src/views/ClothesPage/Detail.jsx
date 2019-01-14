import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import profile from "assets/img/faces/christian.jpg";
import Button from 'components/CustomButtons/Button.jsx';
import style from "assets/css/JoggerPage.css";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import Gallery from 'react-grid-gallery';
import { Link } from "react-router-dom";
class Jogger extends React.Component {
  render() {
    const IMAGES =
      [{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
      },
        {
          src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
          thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 320,
        },
        {
          src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
          thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 320,
        },
        {
          src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
          thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 320,
        },
        {
          src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
          thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 320,
        },
        {
          src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
          thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 320
        }]

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
          <div className="Content">
            <div className={classes.section}>
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
              <GridContainer spacing={32}>
                <GridItem xs={12} md={5}>
                  <Gallery images={IMAGES} />
                </GridItem>
                <GridItem xs={12} md={5}>
                  <div>
                    <p>giới thiệu sản phẩm</p>
                    <h3>
                      <b>190.000</b>
                    </h3>
                    <Link to="/Orderclothes">
                      <Button type="button">Đặt mua</Button>
                    </Link>
                    <Button color="facebook">
                      <i className={" fab fa-facebook-square"} /> Share · 2.2k
                    </Button>
                  </div>
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

export default withStyles(profilePageStyle, style)(Jogger);
