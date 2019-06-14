import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const AddressForm = props => {
  console.log(props.addressDetails);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            value={props.addressDetails.firtname}
            onChange={event => props.updateDetais(event)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            value={props.addressDetails.lastname}
            onChange={event => props.updateDetais(event)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line"
            fullWidth
            value={props.addressDetails.address}
            onChange={event => props.updateDetais(event)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressForm;
