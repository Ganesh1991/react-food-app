import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const PaymentForm = props => (
  <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Payment method
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="cardName"
          name="cardName"
          label="Name on card"
          fullWidth
          value={props.paymentDetails.cardName}
          onChange={event => props.updateDetais(event)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="cardNumber"
          name="cardNumber"
          label="Card number"
          fullWidth
          value={props.paymentDetails.cardNumber}
          onChange={event => props.updateDetais(event)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="expDate"
          name="expDate"
          label="Expiry date"
          fullWidth
          value={props.paymentDetails.expDate}
          onChange={event => props.updateDetais(event)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="cvv"
          label="CVV"
          name="CVV"
          helperText="Last three digits on signature strip"
          fullWidth
          value={props.paymentDetails.CVVText}
          onChange={event => props.updateDetais(event)}
        />
      </Grid>
    </Grid>
  </React.Fragment>
);

export default PaymentForm;
