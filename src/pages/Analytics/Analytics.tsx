import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";
import { UserGrowthChart } from "../../components/Charts/UserGrowthChart";
import { UserDistributionChart } from "../../components/Charts/UserDistributionChart";
import { ActivityTimeline } from "../../components/ActivityTimeline/ActivityTimeline";
import { RecentUsers } from "../../components/Widgets/RecentUsers";
import { useTheme } from "../../hooks/useThemeContext";

export const Analytics = () => {
  const { isDark } = useTheme();

  return (
    <Box>
      <Box mb={8}>
        <Heading size="2xl" mb={2} color={isDark ? "white" : "gray.900"}>
          Analytics
        </Heading>
        <Text color={isDark ? "gray.400" : "gray.600"} fontSize="lg">
          View your business insights and statistics
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} mb={8}>
        <UserGrowthChart isDark={isDark} />
        <UserDistributionChart isDark={isDark} />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
        <ActivityTimeline isDark={isDark} />
        <RecentUsers isDark={isDark} />
      </SimpleGrid>
    </Box>
  );
};
