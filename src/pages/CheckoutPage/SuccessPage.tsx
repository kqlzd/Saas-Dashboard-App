import { useNavigate } from "react-router-dom";

export const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Payment Successful!</h1>
      <p>Your payment has been processed successfully.</p>
      <button onClick={() => navigate("/")}>Go to Dashboard</button>
    </div>
  );
};
