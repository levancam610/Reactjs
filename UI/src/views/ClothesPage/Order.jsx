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
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },

});

function getSteps() {
  return ['Thông tin cá nhân', 'Thông tin sản phẩm', 'Xác nhận đơn hàng'];
}

class Order extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const steps = getSteps();
    const { activeStep } = this.state;
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    var formStep = "";
    switch (activeStep) {
      case 0:
        formStep = (
          <form className="formOrder" >
            <GridContainer spacing={24}>
              <GridItem xs={12} sm={12} md={4}>
                <TextField
                  id="name"
                  label="Họ tên"
                  className={classes.textField}
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <TextField
                  id="phone"
                  label="Số điện thoại"
                  className={classes.textField}
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <TextField
                  id="email"
                  label="Email"
                  className={classes.textField}
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  id="address"
                  label="Địa chỉ giao hàng"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  id="note"
                  label="Ghi chú"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  type="textarea"
                  fullWidth
                />
              </GridItem>
            </GridContainer>
          </form>
        );
        break;
      case 1:
        formStep = (
          <form className="formOrder" >
            <GridContainer spacing={24}>
              <GridItem xs={12} sm={12} md={4}>
                <TextField
                  id="name"
                  label="Họ tên"
                  className={classes.textField}
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <TextField
                  id="phone"
                  label="Số điện thoại"
                  className={classes.textField}
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <TextField
                  id="email"
                  label="Email"
                  className={classes.textField}
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  id="address"
                  label="Địa chỉ giao hàng"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  id="note"
                  label="Ghi chú"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  type="textarea"
                  fullWidth
                />
              </GridItem>
            </GridContainer>
          </form>
        );
        break;
      case 2:
        formStep = (
          <form className="formOrder">
            <GridContainer spacing={24}>
              <GridItem xs={12} sm={12} md={4}>
                <img src="data:image/jpeg;base64,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"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <p>
                  <b>Quần jogger nam</b>
                </p>
                <p>Giá sản phẩm: 190.000 vnđ</p>
                <p>Số lượng: 1</p>
                <p>Phí ship: 25.000 vnd</p>
                <p>Thời gian giao: 2-3 ngày (nội thành hcm)</p>
                <p>Tổng cộng: 215.000 vnđ</p>
              </GridItem>
            </GridContainer>
          </form>
        );
        break;
    }
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
              <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map(label => {
                    return (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                <div>
                  {this.state.activeStep === steps.length ? (
                    <div>
                      <Typography className={classes.instructions}>
                        All steps completed
                      </Typography>
                      <Button onClick={this.handleReset}>Reset</Button>
                    </div>
                  ) : (
                    <div>
                      {formStep}
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                          className={classes.backButton}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          onClick={this.handleNext}
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle, style)(Order);
