import {
  Table as ChakraTable,
  Input,
  IconButton,
  Box,
  Badge,
  HStack,
  Text,
  Field,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { ICustomer } from "../../data/mockUsers";
import { Edit, Search, Trash2 } from "lucide-react";

type TProps = {
  data: ICustomer[];
  deleteUser: (id: number) => void;
  onEditUser: (user: ICustomer) => void;
  isDark?: boolean;
};

export const Table = ({
  data,
  deleteUser,
  onEditUser,
  isDark = false,
}: TProps) => {
  const [search, setSearch] = useState<string>("");

  const filterData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Box>
      <Box mb={6}>
        <Field.Root maxW="400px">
          <InputGroup
            startElement={
              <Search size={18} color={isDark ? "#194177" : "#A0AEC0"} />
            }
          >
            <Input
              type="text"
              placeholder="Search users..."
              onChange={(e) => setSearch(e.target.value)}
              bg={isDark ? "gray.700" : "white"}
              color={isDark ? "white" : "gray.900"}
              borderColor={isDark ? "gray.600" : "gray.200"}
              borderRadius="lg"
              _placeholder={{ color: isDark ? "gray.400" : "gray.500" }}
            />
          </InputGroup>
        </Field.Root>
      </Box>

      <Box
        borderRadius="xl"
        boxShadow="sm"
        borderWidth="1px"
        borderColor={isDark ? "gray.700" : "gray.100"}
        overflow="hidden"
      >
        <ChakraTable.Root>
          <ChakraTable.Header>
            <ChakraTable.Row bg={isDark ? "gray.800" : "white"}>
              <ChakraTable.ColumnHeader
                fontWeight="semibold"
                color={isDark ? "gray.300" : "gray.700"}
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Actions
              </ChakraTable.ColumnHeader>
              <ChakraTable.ColumnHeader
                fontWeight="semibold"
                color={isDark ? "gray.300" : "gray.700"}
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                ID
              </ChakraTable.ColumnHeader>
              <ChakraTable.ColumnHeader
                fontWeight="semibold"
                color={isDark ? "gray.300" : "gray.700"}
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Name
              </ChakraTable.ColumnHeader>
              <ChakraTable.ColumnHeader
                fontWeight="semibold"
                color={isDark ? "gray.300" : "gray.700"}
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Email
              </ChakraTable.ColumnHeader>
              <ChakraTable.ColumnHeader
                fontWeight="semibold"
                color={isDark ? "gray.300" : "gray.700"}
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Status
              </ChakraTable.ColumnHeader>
            </ChakraTable.Row>
          </ChakraTable.Header>

          <ChakraTable.Body bg={isDark ? "gray.800" : "white"}>
            {filterData.length === 0 ? (
              <ChakraTable.Row bg={isDark ? "gray.800" : "white"}>
                <ChakraTable.Cell colSpan={5}>
                  <Text
                    textAlign="center"
                    color={isDark ? "gray.400" : "gray.500"}
                    py={8}
                  >
                    No users found
                  </Text>
                </ChakraTable.Cell>
              </ChakraTable.Row>
            ) : (
              filterData.map((user) => (
                <ChakraTable.Row
                  key={user.id}
                  bg={isDark ? "gray.800" : "white"}
                  _hover={{ bg: isDark ? "gray.700" : "gray.50" }}
                  transition="background 0.2s"
                >
                  <ChakraTable.Cell>
                    <IconButton
                      aria-label="Edit user"
                      variant="ghost"
                      colorScheme="blue"
                      size="sm"
                      onClick={() => onEditUser(user)}
                      _hover={{
                        bg: isDark ? "blue.900" : "blue.50",
                      }}
                    >
                      <Edit size={16} color={isDark ? "#63B3ED" : "#3182CE"} />
                    </IconButton>
                    <IconButton
                      aria-label="Delete user"
                      variant="ghost"
                      colorScheme="red"
                      size="sm"
                      onClick={() => deleteUser(user.id)}
                      _hover={{
                        bg: isDark ? "red.900" : "red.50",
                      }}
                    >
                      <Trash2
                        size={16}
                        color={isDark ? "#FC8181" : "#E53E3E"}
                      />
                    </IconButton>
                  </ChakraTable.Cell>
                  <ChakraTable.Cell>
                    <Badge
                      colorScheme={isDark ? "gray" : "gray"}
                      borderRadius="md"
                      px={2}
                    >
                      #{user.id}
                    </Badge>
                  </ChakraTable.Cell>
                  <ChakraTable.Cell
                    fontWeight="medium"
                    color={isDark ? "white" : "gray.900"}
                  >
                    {user.name}
                  </ChakraTable.Cell>
                  <ChakraTable.Cell color={isDark ? "white" : "gray.900"}>
                    {user.email}
                  </ChakraTable.Cell>
                  <ChakraTable.Cell>
                    <Badge
                      colorScheme={user.status === "active" ? "green" : "gray"}
                      borderRadius="full"
                      px={3}
                      py={1}
                      textTransform="capitalize"
                    >
                      {user.status}
                    </Badge>
                  </ChakraTable.Cell>
                </ChakraTable.Row>
              ))
            )}
          </ChakraTable.Body>
        </ChakraTable.Root>
      </Box>

      {filterData.length > 0 && (
        <HStack justify="space-between" mt={4} px={2}>
          <Text fontSize="sm" color={isDark ? "gray.400" : "gray.600"}>
            Showing {filterData.length} of {data.length} users
          </Text>
        </HStack>
      )}
    </Box>
  );
};
