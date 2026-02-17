import { Button, Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Table } from "../../components/Table/Table";
import { useState } from "react";
import { AddUserModal } from "../../components/AddUserModal/AddUserModal";
import { EditUserModal } from "../../components/EditUserModal/EditUserModal";
import { Users as UsersIcon } from "lucide-react";
import { ICustomer } from "../../data/mockUsers";
import { useCustomerStore } from "../../store";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useThemeContext";

export const Users = () => {
  const { user } = useAuth();
  const { getCustomersByUserId, deleteCustomer, addCustomer, updateCustomer } =
    useCustomerStore();
  const { isDark } = useTheme();

  const customers = user ? getCustomersByUserId(user.id) : [];

  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer | null>(
    null,
  );

  const handleEditCustomer = (customer: ICustomer) => {
    setSelectedCustomer(customer);
    setIsEditModalOpen(true);
  };

  const handleAddCustomer = (customerData: { name: string; email: string }) => {
    if (user) {
      addCustomer({
        ...customerData,
        userId: user.id,
        status: "active",
      });
    }
  };

  return (
    <Box>
      <HStack justify="space-between" mb={8}>
        <VStack align="start" gap={1}>
          <Heading size="2xl" color={isDark ? "white" : "gray.900"}>
            Customers
          </Heading>
          <Text color={isDark ? "gray.400" : "gray.600"} fontSize="lg">
            Manage your customers
          </Text>
        </VStack>
        <Button
          colorScheme="blue"
          size="lg"
          onClick={() => setIsAddModalOpen(true)}
          boxShadow="sm"
        >
          Add Customer
        </Button>
      </HStack>

      <HStack
        mb={6}
        p={4}
        bg={isDark ? "blue.900" : "blue.50"}
        borderRadius="lg"
        borderLeft="4px"
        borderColor="blue.500"
      >
        <UsersIcon size={20} color={isDark ? "#63B3ED" : "#2B6CB0"} />
        <Text fontWeight="medium" color={isDark ? "blue.200" : "blue.900"}>
          Total Customers: <strong>{customers.length}</strong>
        </Text>
      </HStack>

      <Table
        data={customers}
        deleteUser={deleteCustomer}
        onEditUser={handleEditCustomer}
        isDark={isDark}
      />

      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddCustomer}
      />

      <EditUserModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedCustomer(null);
        }}
        onUpdate={updateCustomer}
        user={selectedCustomer}
      />
    </Box>
  );
};
