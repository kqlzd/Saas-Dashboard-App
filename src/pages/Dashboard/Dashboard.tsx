import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Users, Activity, DollarSign, TrendingUp } from "lucide-react";
import { UserGrowthChart } from "../../components/Charts/UserGrowthChart";
import { UserDistributionChart } from "../../components/Charts/UserDistributionChart";
import { RecentUsers } from "../../components/Widgets/RecentUsers";
import { useCustomerStore } from "../../store";
import { ActivityTimeline } from "../../components/ActivityTimeline/ActivityTimeline";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useThemeContext";

export const Dashboard = () => {
  const { user } = useAuth();
  const { getCustomersByUserId } = useCustomerStore();

  const { isDark } = useTheme();

  const customers = user ? getCustomersByUserId(user.id) : [];
  const activeCustomers = customers.filter((c) => c.status === "active");

  const stats = [
    {
      title: "Total Customers",
      value: customers.length.toString(),
      icon: Users,
      color: "blue",
      trend: "+12%",
    },
    {
      title: "Active Customers",
      value: activeCustomers.length.toString(),
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
    <Box bg={isDark ? "gray.900" : "gray.50"} minH="100vh" p={6}>
      <Box mb={8}>
        <Heading size="2xl" mb={2} color={isDark ? "white" : "gray.900"}>
          Dashboard
        </Heading>
        <Text color={isDark ? "gray.400" : "gray.600"} fontSize="lg">
          Welcome back, {user?.name}! Here's your overview.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} mb={8}>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Box
              key={stat.title}
              bg={isDark ? "gray.800" : "white"}
              p={6}
              borderRadius="xl"
              boxShadow="sm"
              borderWidth="1px"
              borderColor={isDark ? "gray.700" : "gray.100"}
              _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              <HStack justify="space-between" mb={4}>
                <Box
                  p={3}
                  bg={isDark ? `${stat.color}.900` : `${stat.color}.50`}
                  borderRadius="lg"
                  color={`${stat.color}.400`}
                >
                  <Icon size={24} />
                </Box>
                <HStack
                  gap={1}
                  color="green.400"
                  fontSize="sm"
                  fontWeight="medium"
                >
                  <TrendingUp size={16} />
                  <Text>{stat.trend}</Text>
                </HStack>
              </HStack>

              <VStack align="start" gap={1}>
                <Text
                  fontSize="sm"
                  color={isDark ? "gray.400" : "gray.600"}
                  fontWeight="medium"
                >
                  {stat.title}
                </Text>
                <Text
                  fontSize="3xl"
                  fontWeight="bold"
                  color={isDark ? "white" : "gray.900"}
                >
                  {stat.value}
                </Text>
              </VStack>
            </Box>
          );
        })}
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} mb={8}>
        <UserGrowthChart isDark={isDark} />
        <UserDistributionChart isDark={isDark} />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
        <RecentUsers isDark={isDark} />
        <ActivityTimeline isDark={isDark} />
      </SimpleGrid>
    </Box>
  );
};
