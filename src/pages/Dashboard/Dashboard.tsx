import { Box, Heading, Text, SimpleGrid, Card } from "@chakra-ui/react";

export const Dashboard = () => {
  return (
    <Box>
      <Heading size="xl" mb={6}>
        Dashboard
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        <Card.Root>
          <Card.Body>
            <Heading size="md" mb={2}>
              Total Users
            </Heading>
            <Text fontSize="3xl" fontWeight="bold" color="blue.600">
              150
            </Text>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body>
            <Heading size="md" mb={2}>
              Active Sessions
            </Heading>
            <Text fontSize="3xl" fontWeight="bold" color="green.600">
              42
            </Text>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body>
            <Heading size="md" mb={2}>
              Revenue
            </Heading>
            <Text fontSize="3xl" fontWeight="bold" color="purple.600">
              $12,450
            </Text>
          </Card.Body>
        </Card.Root>
      </SimpleGrid>

      <Box mt={8}>
        <Text color="gray.600">
          Welcome to your dashboard. Here you can see an overview of your
          application.
        </Text>
      </Box>
    </Box>
  );
};
