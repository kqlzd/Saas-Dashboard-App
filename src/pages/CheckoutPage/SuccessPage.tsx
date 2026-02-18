import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <Box style={{ textAlign: "center", padding: "50px" }}>
      <Heading>Payment Successful!</Heading>
      <Text>Your payment has been processed successfully.</Text>
      <Button onClick={() => navigate("/")}>Go to Dashboard</Button>
    </Box>
  );
};
