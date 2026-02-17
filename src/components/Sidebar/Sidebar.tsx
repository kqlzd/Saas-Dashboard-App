import { Box, VStack, HStack, Text, Heading } from "@chakra-ui/react";
import { NAV_ITEMS } from "../../consts/consts";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isDark: boolean;
}

export const Sidebar = ({ isDark }: SidebarProps) => {
  return (
    <Box
      as="aside"
      width="240px"
      height="100%"
      bg={isDark ? "gray.800" : "white"}
      borderRight="1px"
      borderColor={isDark ? "gray.700" : "gray.200"}
      py={6}
      px={3}
    >
      <Box px={4} mb={8}>
        <Heading size="md" color={isDark ? "white" : "gray.800"}>
          SaaS App
        </Heading>
      </Box>

      <VStack align="stretch" gap={1}>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              {({ isActive }) => (
                <HStack
                  px={4}
                  py={3}
                  borderRadius="lg"
                  cursor="pointer"
                  bg={
                    isActive
                      ? isDark
                        ? "blue.900"
                        : "blue.50"
                      : "transparent"
                  }
                  color={
                    isActive
                      ? isDark
                        ? "blue.300"
                        : "blue.600"
                      : isDark
                        ? "gray.300"
                        : "gray.700"
                  }
                  fontWeight={isActive ? "semibold" : "normal"}
                  _hover={{
                    bg: isActive
                      ? isDark
                        ? "blue.900"
                        : "blue.50"
                      : isDark
                        ? "gray.700"
                        : "gray.100",
                  }}
                  transition="all 0.2s"
                >
                  <Icon size={20} />
                  <Text fontSize="sm">{item.label}</Text>
                </HStack>
              )}
            </NavLink>
          );
        })}
      </VStack>
    </Box>
  );
};
