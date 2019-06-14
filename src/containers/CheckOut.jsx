import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Address from "../components/Address";
import Payment from "../components/Payment";
import Review from "../components/Review";

const steps = ["Shipping address", "Payment details", "Review your order"];

class CheckOut extends React.Component {
  state = {
    activeStep: 0,
    addressDetails: {
      firtname: "",
      lastname: "",
      address: ""
    },
    paymentDetails: {
      cardName: "",
      cardNumber: "",
      expDate: "",
      CVVText: ""
    },
    errorMsg: ""
  };

  updatePaymentDetails = event => {
    const paymentDetails = this.state.paymentDetails;
    switch (event.target.name) {
      case "cardName":
        paymentDetails.cardName = event.target.value;
        break;
      case "cardNumber":
        paymentDetails.cardNumber = event.target.value;
        break;
      case "expDate":
        paymentDetails.expDate = event.target.value;
        break;
      case "CVV":
        paymentDetails.CVVText = event.target.value;
        break;
      default:
        break;
    }
    console.log("addressDetails are ", paymentDetails);
    this.setState({ paymentDetails: paymentDetails, errorMsg: "" });
  };

  updateDetais = event => {
    const addressDetails = this.state.addressDetails;
    switch (event.target.name) {
      case "firstName":
        addressDetails.firtname = event.target.value;
        break;
      case "lastName":
        addressDetails.lastname = event.target.value;
        break;
      case "address1":
        addressDetails.address = event.target.value;
        break;
      default:
        break;
    }
    console.log("addressDetails are ", addressDetails);
    this.setState({ addressDetails: addressDetails, errorMsg: "" });
  };

  getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <Address
            {...this.props}
            addressDetails={this.state.addressDetails}
            updateDetais={this.updateDetais}
          />
        );
      case 1:
        return (
          <Payment
            {...this.props}
            paymentDetails={this.state.paymentDetails}
            updateDetais={this.updatePaymentDetails}
          />
        );
      case 2:
        return <Review {...this.props} addressDetails={this.state.addressDetails} paymentDetails={this.state.paymentDetails}/>;
      default:
        return null;
    }
  };

  validateAddressDetails = () => {
    const addressDetails = this.state.addressDetails;
    if (
      addressDetails.firtname === "" ||
      addressDetails.lastName === "" ||
      addressDetails.address === ""
    ) {
      return false;
    } else return true;
  };

  validatePaymentDetails = () => {
    const paymentDetails = this.state.paymentDetails;
    if (
      paymentDetails.cardName === "" ||
      paymentDetails.cardNumber === "" ||
      paymentDetails.expDate === "" ||
      paymentDetails.CVVText === ""
    ) {
      return false;
    } else return true;
  };

  handleNext = () => {
    if (this.state.activeStep === 0) {
      if (this.validateAddressDetails()) {
        this.setState({ activeStep: this.state.activeStep + 1, errorMsg: "" });
      } else {
        this.setState({ errorMsg: "Please fill all required fields" });
      }
    } else if (this.state.activeStep === 1) {
      if (this.validatePaymentDetails()) {
        this.setState({ activeStep: this.state.activeStep + 1, errorMsg: "" });
      } else {
        this.setState({ errorMsg: "Please fill all required fields" });
      }
    } else {
      this.setState({ activeStep: this.state.activeStep + 1, errorMsg: "" });
    }
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };

  render() {
    const classes = this.props.classes;
    const activeStep = this.state.activeStep;

    return (
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(activeStep)}
                  <br />
                  <Typography style={{ color: "red" }}>
                    {this.state.errorMsg}
                  </Typography>
                  <br />
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </Grid>
      </Container>
    );
  }
}

export default CheckOut;
