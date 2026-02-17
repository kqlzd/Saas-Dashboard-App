import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  Text,
  Card,
  Field,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { toaster } from "../../components/ui/toaster";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("mock-users") || "[]");
      const user = users.find(
        (u: any) => u.email === email && u.password === password,
      );

      if (user) {
        login(user);
        toaster.create({
          title: "Login successful",
          description: `Welcome back, ${user.name}!`,
          type: "success",
          duration: 3000,
          meta: { closable: true },
        });
        navigate("/");
      } else {
        toaster.create({
          title: "Login failed",
          description: "Invalid email or password",
          type: "error",
          duration: 4000,
          meta: { closable: true },
        });
      }

      setLoading(false);
    }, 500);
  };

  return (
    <Box
      minH="100vh"
      bg="gray.50"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Card.Root
        maxW="md"
        w="full"
        mx={4}
        bg="white"
        borderRadius="2xl"
        boxShadow="xl"
      >
        <Card.Body p={8}>
          <VStack gap={2} mb={8}>
            <Box
              w={16}
              h={16}
              bg="blue.500"
              borderRadius="2xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={2}
            >
              <Lock size={32} color="white" />
            </Box>
            <Heading size="xl">Welcome Back</Heading>
            <Text color="gray.600">Sign in to your account</Text>
          </VStack>

          <VStack gap={5} align="stretch">
            <Field.Root>
              <Field.Label>Email Address</Field.Label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="lg"
              />
            </Field.Root>

            <Button
              colorScheme="blue"
              size="lg"
              onClick={handleLogin}
              loading={loading}
              mt={2}
            >
              Sign In
            </Button>
          </VStack>

          <Box mt={6} p={4} bg="blue.50" borderRadius="lg">
            <Text fontSize="sm" fontWeight="medium" mb={2}>
              Demo Credentials:
            </Text>
            <VStack align="stretch" gap={1} fontSize="sm">
              <Text>
                <strong>Admin:</strong> admin@test.com / admin123
              </Text>
              <Text>
                <strong>User:</strong> user@test.com / user123
              </Text>
            </VStack>
          </Box>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};
