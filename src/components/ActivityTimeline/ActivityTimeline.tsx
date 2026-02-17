import { Box, Heading, Card, VStack, HStack, Text } from "@chakra-ui/react";
import { UserPlus, UserMinus, UserCog, Clock } from "lucide-react";

const activities = [
  {
    id: 1,
    action: "New user added",
    user: "Ali Məmmədov",
    time: "2 minutes ago",
    icon: UserPlus,
    color: "green",
  },
  {
    id: 2,
    action: "User updated",
    user: "Ayşə Həsənova",
    time: "15 minutes ago",
    icon: UserCog,
    color: "blue",
  },
  {
    id: 3,
    action: "User deleted",
    user: "Rəşad Quliyev",
    time: "1 hour ago",
    icon: UserMinus,
    color: "red",
  },
];

export const ActivityTimeline = ({ isDark }: { isDark: boolean }) => {
  return (
    <Card.Root
      bg={isDark ? "gray.800" : "white"}
      borderRadius="xl"
      boxShadow="sm"
      borderWidth="1px"
      borderColor={isDark ? "gray.700" : "gray.100"}
    >
      <Card.Body p={6}>
        <Heading size="md" mb={6} color={isDark ? "white" : "gray.900"}>
          Recent Activity
        </Heading>

        <VStack align="stretch" gap={4}>
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <HStack key={activity.id} gap={4} align="start">
                <Box
                  p={2}
                  bg={isDark ? `${activity.color}.900` : `${activity.color}.50`}
                  borderRadius="lg"
                  color={`${activity.color}.400`}
                >
                  <Icon size={18} />
                </Box>

                <VStack align="start" gap={0} flex={1}>
                  <Text
                    fontWeight="medium"
                    fontSize="sm"
                    color={isDark ? "white" : "gray.900"}
                  >
                    {activity.action}
                  </Text>
                  <Text fontSize="sm" color={isDark ? "gray.400" : "gray.600"}>
                    {activity.user}
                  </Text>
                  <HStack
                    gap={1}
                    fontSize="xs"
                    color={isDark ? "gray.500" : "gray.500"}
                  >
                    <Clock size={12} />
                    <Text>{activity.time}</Text>
                  </HStack>
                </VStack>
              </HStack>
            );
          })}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};
