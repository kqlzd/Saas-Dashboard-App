import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import { NAV_ITEMS } from "../../consts/consts";
import { useState } from "react";

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<any>(false);
  return (
    <>
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
            const isActive = activeItem === item.id;

            return (
              <HStack
                key={item.id}
                px={4}
                py={3}
                borderRadius="lg"
                cursor="pointer"
                bg={isActive ? "blue.50" : "transparent"}
                color={isActive ? "blue.600" : "gray.700"}
                fontWeight={isActive ? "semibold" : "normal"}
                _hover={{ bg: isActive ? "blue.50" : "gray.100" }}
                onClick={() => setActiveItem(item.id)}
                transition="all 0.2s"
              >
                <Icon size={20} />
                <Text fontSize="sm">{item.label}</Text>
              </HStack>
            );
          })}
        </VStack>
      </Box>
    </>
  );
};
