import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Users, Activity, DollarSign, TrendingUp } from "lucide-react";

export const Dashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "150",
      icon: Users,
      color: "blue",
      trend: "+12%",
    },
    {
      title: "Active Sessions",
      value: "42",
      icon: Activity,
      color: "green",
      trend: "+8%",
    },
    {
      title: "Revenue",
      value: "$12,450",
      icon: DollarSign,
      color: "purple",
      trend: "+23%",
    },
  ];

  return (
    <Box>
      {/* Header */}
      <Box mb={8}>
        <Heading size="2xl" mb={2}>
          Dashboard
        </Heading>
        <Text color="gray.600" fontSize="lg">
          Welcome back! Here's what's happening today.
        </Text>
      </Box>

      {/* Stats Cards */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} mb={8}>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card.Root
              key={stat.title}
              bg="white"
              borderRadius="xl"
              boxShadow="sm"
              borderWidth="1px"
              borderColor="gray.100"
              _hover={{
                boxShadow: "md",
                transform: "translateY(-2px)",
                transition: "all 0.2s",
              }}
            >
              <Card.Body p={6}>
                <HStack justify="space-between" mb={4}>
                  <Box
                    p={3}
                    bg={`${stat.color}.50`}
                    borderRadius="lg"
                    color={`${stat.color}.600`}
                  >
                    <Icon size={24} />
                  </Box>
                  <HStack
                    gap={1}
                    color="green.600"
                    fontSize="sm"
                    fontWeight="medium"
                  >
                    <TrendingUp size={16} />
                    <Text>{stat.trend}</Text>
                  </HStack>
                </HStack>

                <VStack align="start" gap={1}>
                  <Text fontSize="sm" color="gray.600" fontWeight="medium">
                    {stat.title}
                  </Text>
                  <Text fontSize="3xl" fontWeight="bold" color="gray.900">
                    {stat.value}
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          );
        })}
      </SimpleGrid>

      {/* Recent Activity */}
      <Card.Root
        bg="white"
        borderRadius="xl"
        boxShadow="sm"
        borderWidth="1px"
        borderColor="gray.100"
      >
        <Card.Body p={6}>
          <Heading size="md" mb={4}>
            Recent Activity
          </Heading>
          <Text color="gray.600">
            Your recent activity and notifications will appear here.
          </Text>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};
