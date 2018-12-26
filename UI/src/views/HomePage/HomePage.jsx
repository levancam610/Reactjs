import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import styles from "assets/css/HomePage.css";
// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import Carousel from "components/Carousel/Carousel.jsx";

const dashboardRoutes = [];

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { open1: false };
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }
  listenScrollEvent() {
    if (window.scrollY > 600) {
      this.setState({ open1: true });
    } else {
      this.setState({ open1: false });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Carousel />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <TeamSection open={this.state.open1} />
            <ProductSection open={this.state.open1} />
            <WorkSection open={this.state.open1} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle, styles)(HomePage);
