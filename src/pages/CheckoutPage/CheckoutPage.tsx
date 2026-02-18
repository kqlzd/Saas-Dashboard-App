import { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { StripeProvider } from "../../providers/stripe-provider";
import { Button } from "@chakra-ui/react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/success",
      },
    });

    if (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button type="submit" disabled={!stripe || !elements}>
        Pay
      </Button>
    </form>
  );
};

export const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  if (!clientSecret) return <div>Loading...</div>;

  return (
    <StripeProvider clientSecret={clientSecret}>
      <CheckoutForm />
    </StripeProvider>
  );
};
