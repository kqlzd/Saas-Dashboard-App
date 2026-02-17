import { Card, Heading } from "@chakra-ui/react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Active", value: 540 },
  { name: "Inactive", value: 320 },
  { name: "Pending", value: 140 },
];

const COLORS = ["#22c55e", "#94a3b8", "#f59e0b"];

export const UserDistributionChart = ({ isDark }: { isDark: boolean }) => {
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
          User Status
        </Heading>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent = 0 }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#2D3748" : "white",
                border: `1px solid ${isDark ? "#4A5568" : "#e2e8f0"}`,
                borderRadius: "8px",
                color: isDark ? "white" : "black",
              }}
            />
            <Legend
              formatter={(value) => (
                <span style={{ color: isDark ? "#CBD5E0" : "#4A5568" }}>
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card.Root>
  );
};
