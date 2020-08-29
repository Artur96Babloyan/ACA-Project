import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "firebase/auth";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AdressForm';
import PaymentForm from './PymentForm';
import Review from './Revieu';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

let steps = ['Shipping address', 'Payment details', 'Review your order'];
export default function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [inputChecked, setInputchecked] = React.useState(false);

  const input1Checked = (isChecked) => {
    console.log(isChecked)
    setInputchecked(!isChecked)
    console.log(inputChecked)

  }

  const getStepContent = (step, props) => {


    switch (step) {
      case 0:
        return <AddressForm getCheck={input1Checked} getname={props.onGetname} />;
      case 1:

        return <PaymentForm />;
      case 2:
        return <Review data={props.dataid} value={props.value} />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {

    if (inputChecked) {

      setActiveStep(activeStep + 2);
      steps = ['Shipping address', '', 'Review your order'];
    } else {
      setActiveStep(activeStep + 1);
      steps = ['Shipping address', 'Payment details', 'Review your order'];

    }

  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep >= steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>

                <Button onClick={props.onClose} variant="contained" color="primary">
                  Ok
                </Button>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  {getStepContent(activeStep, props)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}