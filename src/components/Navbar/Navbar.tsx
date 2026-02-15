import {
  Heading,
  HStack,
  Box,
  Flex,
  Input,
  Badge,
  IconButton,
} from "@chakra-ui/react";
import { AvatarComponent } from "../AvatarComponent/AvatarComponent";
import { BellIcon, Menu } from "lucide-react";
import { ToggleButton } from "../ToggleButton/ToggleButton";

interface NavbarProps {
  toggleSideBar: () => void;
}

export const Navbar = ({ toggleSideBar }: NavbarProps) => {
  return (
    <Box
      as="nav"
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      px={6}
      py={3}
      height="64px"
    >
      <Flex justifyContent={"space-between"} align={"center"} height={"100%"}>
        <ToggleButton />
        <HStack gap={4}>
          <Heading size="md" color="gray.800">
            Dashboard
          </Heading>
          <IconButton
            aria-label="Toggle sidebar"
            onClick={toggleSideBar}
            variant="ghost"
          >
            <Menu size={20} />
          </IconButton>
        </HStack>

        <HStack gap={4}>
          <Box position="relative">
            <IconButton aria-label="Notifications" variant="ghost" size="md">
              <BellIcon />
            </IconButton>
            <Badge
              position="absolute"
              top="-1"
              right="-1"
              colorScheme="red"
              borderRadius="full"
              fontSize="xs"
            >
              3
            </Badge>
          </Box>

          <AvatarComponent />
        </HStack>
      </Flex>
    </Box>
  );
};
