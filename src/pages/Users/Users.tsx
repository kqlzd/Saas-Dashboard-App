import { Button, Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Table } from "../../components/Table/Table";
import { useUserStore } from "../../store";
import { useState } from "react";
import { AddUserModal } from "../../components/AddUserModal/AddUserModal";
import { EditUserModal } from "../../components/EditUserModal/EditUserModal";
import { UserPlus, Users as UsersIcon } from "lucide-react";
import { IUser } from "../../data/mockUsers";

export const Users = () => {
  const { users, deleteUser, addUser, updateUser } = useUserStore();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const handleEditUser = (user: IUser) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  return (
    <Box>
      <HStack justify="space-between" mb={8}>
        <VStack align="start" gap={1}>
          <Heading size="2xl">Users</Heading>
          <Text color="gray.600" fontSize="lg">
            Manage your team members and their roles
          </Text>
        </VStack>
        <Button
          colorScheme="blue"
          size="lg"
          onClick={() => setIsAddModalOpen(true)}
          boxShadow="sm"
        >
          Add User
        </Button>
      </HStack>

      <HStack
        mb={6}
        p={4}
        bg="blue.50"
        borderRadius="lg"
        borderLeft="4px"
        borderColor="blue.500"
      >
        <UsersIcon size={20} color="var(--chakra-colors-blue-600)" />
        <Text fontWeight="medium" color="blue.900">
          Total Users: <strong>{users.length}</strong>
        </Text>
      </HStack>

      <Table data={users} deleteUser={deleteUser} onEditUser={handleEditUser} />
      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={addUser}
      />

      <EditUserModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedUser(null);
        }}
        onUpdate={updateUser}
        user={selectedUser}
      />
    </Box>
  );
};
