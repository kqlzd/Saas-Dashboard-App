import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { Heading, Card } from "@chakra-ui/react";
import { COLORS } from "../../consts/consts";

const data = [
  { name: "Active", value: 120 },
  { name: "Inactive", value: 30 },
];

export const UserDistributionChart = () => {
  return (
    <Card.Root bg="white" borderRadius="xl" boxShadow="sm" borderWidth="1px">
      <Card.Body p={6}>
        <Heading size="md" mb={6}>
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
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card.Root>
  );
};
