import {
  HStack,
  Box,
  Flex,
  Input,
  IconButton,
  Text,
  VStack,
  Menu,
  Button,
} from "@chakra-ui/react";
import { Menu as MenuIcon, LogOut, User, Search, Sun, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useThemeContext";

interface NavbarProps {
  toggleSideBar: () => void;
}

export const Navbar = ({ toggleSideBar }: NavbarProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Box
      as="nav"
      bg={isDark ? "gray.800" : "white"}
      borderBottom="1px"
      borderColor={isDark ? "gray.700" : "gray.200"}
      px={6}
      height="64px"
      display="flex"
      alignItems="center"
    >
      <Flex justify="space-between" align="center" width="100%">
        <HStack gap={3}>
          <IconButton
            aria-label="Toggle sidebar"
            onClick={toggleSideBar}
            variant="ghost"
            size="sm"
            color={isDark ? "gray.300" : "gray.600"}
            _hover={{ bg: isDark ? "gray.700" : "gray.100" }}
          >
            <MenuIcon size={20} />
          </IconButton>
        </HStack>

        <Box flex={1} maxW="400px" mx={6} position="relative">
          <Box
            position="absolute"
            left={3}
            top="50%"
            transform="translateY(-50%)"
            pointerEvents="none"
            zIndex={1}
          >
            <Search size={16} color={isDark ? "#A0AEC0" : "#A0AEC0"} />
          </Box>
          <Input
            placeholder="Search..."
            size="sm"
            bg={isDark ? "gray.700" : "gray.100"}
            color={isDark ? "white" : "gray.900"}
            border="none"
            borderRadius="md"
            pl={9}
            _placeholder={{ color: isDark ? "gray.400" : "gray.500" }}
            _focus={{
              bg: isDark ? "gray.600" : "gray.200",
              boxShadow: "none",
            }}
          />
        </Box>

        <HStack gap={2}>
          <IconButton
            aria-label="Toggle theme"
            onClick={toggleTheme}
            variant="ghost"
            size="sm"
            color={isDark ? "gray.300" : "gray.600"}
            _hover={{ bg: isDark ? "gray.700" : "gray.100" }}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </IconButton>

          <Menu.Root>
            <Menu.Trigger asChild>
              <Button
                variant="ghost"
                size="sm"
                borderRadius="md"
                px={2}
                _hover={{ bg: isDark ? "gray.700" : "gray.100" }}
              >
                <HStack gap={2}>
                  <Box
                    w={8}
                    h={8}
                    bg="blue.500"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    {user?.name.charAt(0).toUpperCase()}
                  </Box>
                  <VStack
                    align="start"
                    gap={0}
                    display={{ base: "none", md: "flex" }}
                  >
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      color={isDark ? "white" : "gray.800"}
                    >
                      {user?.name}
                    </Text>
                    <Text
                      fontSize="xs"
                      color={isDark ? "gray.400" : "gray.500"}
                      textTransform="capitalize"
                    >
                      {user?.role}
                    </Text>
                  </VStack>
                </HStack>
              </Button>
            </Menu.Trigger>

            <Menu.Content
              borderRadius="md"
              boxShadow="lg"
              minW="200px"
              bg={isDark ? "gray.800" : "white"}
              borderColor={isDark ? "gray.700" : "gray.200"}
            >
              <Box
                px={3}
                py={2}
                borderBottom="1px"
                borderColor={isDark ? "gray.700" : "gray.100"}
              >
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  color={isDark ? "white" : "gray.900"}
                >
                  {user?.name}
                </Text>
                <Text fontSize="xs" color={isDark ? "gray.400" : "gray.500"}>
                  {user?.email}
                </Text>
              </Box>

              <Menu.Item
                value="profile"
                p={3}
                color={isDark ? "white" : "gray.900"}
              >
                <HStack gap={3}>
                  <User size={16} />
                  <Text fontSize="sm">Profile Settings</Text>
                </HStack>
              </Menu.Item>

              <Menu.Separator />

              <Menu.Item
                value="logout"
                color="red.500"
                onClick={handleLogout}
                p={3}
              >
                <HStack gap={3}>
                  <LogOut size={16} />
                  <Text fontSize="sm">Logout</Text>
                </HStack>
              </Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </HStack>
      </Flex>
    </Box>
  );
};
