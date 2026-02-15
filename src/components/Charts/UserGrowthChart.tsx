import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box, Heading, Card } from "@chakra-ui/react";

const data = [
  { month: "Jan", users: 40 },
  { month: "Feb", users: 55 },
  { month: "Mar", users: 70 },
  { month: "Apr", users: 85 },
  { month: "May", users: 110 },
  { month: "Jun", users: 150 },
];

export const UserGrowthChart = () => {
  return (
    <Card.Root bg="white" borderRadius="xl" boxShadow="sm" borderWidth="1px">
      <Card.Body p={6}>
        <Heading size="md" mb={6}>
          User Growth
        </Heading>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#666" style={{ fontSize: "12px" }} />
            <YAxis stroke="#666" style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
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
