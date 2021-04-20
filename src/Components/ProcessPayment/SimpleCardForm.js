import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import "./SimpleCardForm.css";
const SimpleCardForm = ({ handlePaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
      setErrorMessage(error.message);
      setSuccessMessage(null);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setSuccessMessage(paymentMethod.id);
      setErrorMessage(null);
      handlePaymentSuccess(paymentMethod.id);
    }
  };

  return (
    <div className="container">
      <div className="card-style">
        <form onSubmit={handleSubmit}>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: "green" }}>Payment Success</p>}
          <CardElement />
          <button
            className="btn btn-warning my-3 px-5"
            type="submit"
            disabled={!stripe}
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};
export default SimpleCardForm;
