import {
  Box,
  Heading,
  Card,
  HStack,
  VStack,
  Text,
  Badge,
  Button,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useCustomerStore } from "../../store";
import { useAuth } from "../../hooks/useAuth";

export const RecentUsers = ({ isDark }: { isDark: boolean }) => {
  const { user } = useAuth();
  const { getCustomersByUserId } = useCustomerStore();
  const navigate = useNavigate();

  const customers = user ? getCustomersByUserId(user.id) : [];
  const recentCustomers = customers.slice(-5).reverse();

  return (
    <Card.Root
      bg={isDark ? "gray.800" : "white"}
      borderRadius="xl"
      boxShadow="sm"
      borderWidth="1px"
      borderColor={isDark ? "gray.700" : "gray.100"}
    >
      <Card.Body p={6}>
        <HStack justify="space-between" mb={6}>
          <Heading size="md" color={isDark ? "white" : "gray.900"}>
            Recent Customers
          </Heading>
          <Button variant="ghost" size="sm" onClick={() => navigate("/users")}>
            View All
          </Button>
        </HStack>

        <VStack align="stretch" gap={3}>
          {recentCustomers.length === 0 ? (
            <Text color="gray.500" textAlign="center" py={4}>
              No customers yet
            </Text>
          ) : (
            recentCustomers.map((customer) => (
              <HStack
                key={customer.id}
                p={3}
                borderRadius="lg"
                _hover={{ bg: isDark ? "gray.700" : "gray.50" }}
                transition="background 0.2s"
              >
                <Box
                  w={10}
                  h={10}
                  bg="blue.500"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontWeight="bold"
                >
                  {customer.name.charAt(0).toUpperCase()}
                </Box>

                <VStack align="start" gap={0} flex={1}>
                  <Text
                    fontWeight="medium"
                    fontSize="sm"
                    color={isDark ? "white" : "gray.900"}
                  >
                    {customer.name}
                  </Text>
                  <Text fontSize="xs" color={isDark ? "gray.400" : "gray.600"}>
                    {customer.email}
                  </Text>
                </VStack>

                <Badge
                  colorScheme={customer.status === "active" ? "green" : "gray"}
                  borderRadius="md"
                  fontSize="xs"
                >
                  {customer.status}
                </Badge>
              </HStack>
            ))
          )}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};
