import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import { NAV_ITEMS } from "../../consts/consts";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Box
      as="aside"
      width="240px"
      height="100vh"
      bg="white"
      borderRight="1px"
      borderColor="gray.200"
      py={6}
      px={3}
    >
      <VStack align="stretch" gap={2}>
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
                  bg={isActive ? "blue.50" : "transparent"}
                  color={isActive ? "blue.600" : "gray.700"}
                  fontWeight={isActive ? "semibold" : "normal"}
                  _hover={{ bg: isActive ? "blue.50" : "gray.100" }}
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
