import { SimpleGrid } from "@chakra-ui/react";
import { UserGrowthChart } from "../../components/Charts/UserGrowthChart";
import { UserDistributionChart } from "../../components/Charts/UserDistributionChart";
import { ActivityTimeline } from "../../components/ActivityTimeline/ActivityTimeline";
import { RecentUsers } from "../../components/Widgets/RecentUsers";

export const Analytics = () => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} mb={8}>
        <UserGrowthChart />
        <UserDistributionChart />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} mb={8}>
        <ActivityTimeline />
        <RecentUsers />
      </SimpleGrid>
    </>
  );
};
