import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";
const stripePromise = loadStripe(
  "pk_test_51If7iDI35VN0MuVo5U1uuQPT2nG0HHmzUYPhNQ4rnP8jP4VVvlXtkzrjnTSFIsqLKQ5oJiXhLdtR8nRAshl7tND600rrAC30LV"
);
const ProcessPayment = ({ handlePaymentSuccess }) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handlePaymentSuccess={handlePaymentSuccess} />
    </Elements>
  );
};

export default ProcessPayment;
