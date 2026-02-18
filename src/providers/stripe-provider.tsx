import { PropsWithChildren } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY!);

interface StripeProviderProps extends PropsWithChildren {
  clientSecret?: string;
}

export const StripeProvider = ({
  children,
  clientSecret,
}: StripeProviderProps) => {
  const options = clientSecret ? { clientSecret } : undefined;

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
};
