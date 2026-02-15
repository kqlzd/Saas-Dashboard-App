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
import { IUser } from "../../data/mockUsers";
import { Edit, Search, Trash2 } from "lucide-react";

type TProps = {
  data: IUser[];
  deleteUser: (id: number) => void;
  onEditUser: (user: any) => void;
};

export const Table = ({ data, deleteUser, onEditUser }: TProps) => {
  const [search, setSearch] = useState("");

  const filterData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Box>
      <Box mb={6}>
        <Box mb={6}>
          <Field.Root maxW="400px">
            <InputGroup startElement={<Search size={18} color="gray" />}>
              <Input
                type="text"
                placeholder="Search users..."
                onChange={(e) => setSearch(e.target.value)}
                bg="white"
                borderRadius="lg"
              />
            </InputGroup>
          </Field.Root>
        </Box>
      </Box>

      <Box
        bg="white"
        borderRadius="xl"
        boxShadow="sm"
        borderWidth="1px"
        borderColor="gray.100"
        overflow="hidden"
      >
        <ChakraTable.Root>
          <ChakraTable.Header bg="gray.50">
            <ChakraTable.Row>
              <ChakraTable.ColumnHeader
                fontWeight="semibold"
                color="gray.700"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Actions
              </ChakraTable.ColumnHeader>
              <ChakraTable.ColumnHeader
                fontWeight="semibold"
                color="gray.700"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                ID
              </ChakraTable.ColumnHeader>
              <ChakraTable.ColumnHeader
                fontWeight="semibold"
                color="gray.700"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Name
              </ChakraTable.ColumnHeader>
              <ChakraTable.ColumnHeader
                fontWeight="semibold"
                color="gray.700"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Email
              </ChakraTable.ColumnHeader>
            </ChakraTable.Row>
          </ChakraTable.Header>

          <ChakraTable.Body>
            {filterData.length === 0 ? (
              <ChakraTable.Row>
                <ChakraTable.Cell colSpan={4}>
                  <Text textAlign="center" color="gray.500" py={8}>
                    No users found
                  </Text>
                </ChakraTable.Cell>
              </ChakraTable.Row>
            ) : (
              filterData.map((user) => (
                <ChakraTable.Row
                  key={user.id}
                  _hover={{ bg: "gray.50" }}
                  transition="background 0.2s"
                >
                  <ChakraTable.Cell>
                    <IconButton
                      aria-label="Edit user"
                      variant="ghost"
                      colorScheme="blue"
                      size="sm"
                      onClick={() => onEditUser(user)}
                    >
                      <Edit size={16} />
                    </IconButton>
                    <IconButton
                      aria-label="Delete user"
                      variant="ghost"
                      colorScheme="red"
                      size="sm"
                      onClick={() => deleteUser(user.id)}
                      _hover={{
                        bg: "red.50",
                      }}
                    >
                      <Trash2 size={16} />
                    </IconButton>
                  </ChakraTable.Cell>
                  <ChakraTable.Cell>
                    <Badge colorScheme="gray" borderRadius="md" px={2}>
                      #{user.id}
                    </Badge>
                  </ChakraTable.Cell>
                  <ChakraTable.Cell fontWeight="medium" color="gray.900">
                    {user.name}
                  </ChakraTable.Cell>
                  <ChakraTable.Cell color="gray.600">
                    {user.email}
                  </ChakraTable.Cell>
                </ChakraTable.Row>
              ))
            )}
          </ChakraTable.Body>
        </ChakraTable.Root>
      </Box>

      {filterData.length > 0 && (
        <HStack justify="space-between" mt={4} px={2}>
          <Text fontSize="sm" color="gray.600">
            Showing {filterData.length} of {data.length} users
          </Text>
        </HStack>
      )}
    </Box>
  );
};
