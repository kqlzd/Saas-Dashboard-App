import {
  Box,
  Heading,
  Card,
  HStack,
  VStack,
  Text,
  Badge,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { useUserStore } from "../../store";
import { useNavigate } from "react-router-dom";

export const RecentUsers = () => {
  const users = useUserStore((state) => state.users);
  const navigate = useNavigate();

  const recentUsers = users.slice(-5).reverse();

  return (
    <Card.Root bg="white" borderRadius="xl" boxShadow="sm" borderWidth="1px">
      <Card.Body p={6}>
        <HStack justify="space-between" mb={6}>
          <Heading size="md">Recent Users</Heading>
          <Button variant="ghost" size="sm" onClick={() => navigate("/users")}>
            View All
          </Button>
        </HStack>

        <VStack align="stretch" gap={3}>
          {recentUsers.length === 0 ? (
            <Text color="gray.500" textAlign="center" py={4}>
              No users yet
            </Text>
          ) : (
            recentUsers.map((user) => (
              <HStack
                key={user.id}
                p={3}
                borderRadius="lg"
                _hover={{ bg: "gray.50" }}
                transition="background 0.2s"
              >
                <Avatar.Root size="sm">
                  <Avatar.Fallback bg="blue.500" color="white">
                    {user.name.charAt(0).toUpperCase()}
                  </Avatar.Fallback>
                </Avatar.Root>

                <VStack align="start" gap={0} flex={1}>
                  <Text fontWeight="medium" fontSize="sm">
                    {user.name}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    {user.email}
                  </Text>
                </VStack>

                <Badge colorScheme="green" borderRadius="md" fontSize="xs">
                  Active
                </Badge>
              </HStack>
            ))
          )}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};
