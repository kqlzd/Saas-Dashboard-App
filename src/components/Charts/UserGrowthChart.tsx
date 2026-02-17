import { Card, Heading } from "@chakra-ui/react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";

const data = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 600 },
  { month: "Mar", users: 800 },
  { month: "Apr", users: 1200 },
  { month: "May", users: 1100 },
  { month: "Jun", users: 1400 },
];

export const UserGrowthChart = ({ isDark }: { isDark: boolean }) => {
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
          User Growth
        </Heading>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={isDark ? "#4A5568" : "#f0f0f0"}
            />
            <XAxis
              dataKey="month"
              stroke={isDark ? "#CBD5E0" : "#666"}
              style={{ fontSize: "12px" }}
            />
            <YAxis
              stroke={isDark ? "#CBD5E0" : "#666"}
              style={{ fontSize: "12px" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#2D3748" : "white",
                border: `1px solid ${isDark ? "#4A5568" : "#e2e8f0"}`,
                borderRadius: "8px",
                color: isDark ? "white" : "black",
              }}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: "#3b82f6", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card.Root>
  );
};
