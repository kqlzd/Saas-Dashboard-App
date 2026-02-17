import {
  Dialog,
  Input,
  Button,
  VStack,
  HStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { UserPlus } from "lucide-react";
import { useAddUserForm } from "../../hooks/useAddUser";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (user: { name: string; email: string }) => void;
}

export const AddUserModal = ({ isOpen, onClose, onAdd }: AddUserModalProps) => {
  const { name, email, setName, setEmail, handleSubmit } = useAddUserForm({
    onAdd,
    onClose,
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => !e.open && onClose()}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content borderRadius="xl" maxW="md">
          <Dialog.Header borderBottom="1px" borderColor="gray.100" pb={4}>
            <HStack gap={2}>
              <UserPlus size={24} color="var(--chakra-colors-blue-600)" />
              <Dialog.Title fontSize="xl" fontWeight="bold">
                Add New User
              </Dialog.Title>
            </HStack>
          </Dialog.Header>

          <Dialog.Body pt={6} pb={4}>
            <VStack gap={4} align="stretch">
              <Box>
                <Text mb={2} fontWeight="medium" fontSize="sm" color="gray.700">
                  Full Name
                </Text>
                <Input
                  placeholder="Enter full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  size="lg"
                  borderRadius="lg"
                  _focus={{
                    borderColor: "blue.500",
                    boxShadow: "0 0 0 1px var(--chakra-colors-blue-500)",
                  }}
                />
              </Box>

              <Box>
                <Text mb={2} fontWeight="medium" fontSize="sm" color="gray.700">
                  Email Address
                </Text>
                <Input
                  placeholder="Enter email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="lg"
                  borderRadius="lg"
                  _focus={{
                    borderColor: "blue.500",
                    boxShadow: "0 0 0 1px var(--chakra-colors-blue-500)",
                  }}
                />
              </Box>
            </VStack>
          </Dialog.Body>

          <Dialog.Footer borderTop="1px" borderColor="gray.100" pt={4}>
            <HStack gap={3} width="full" justify="flex-end">
              <Button
                variant="outline"
                onClick={onClose}
                size="lg"
                borderRadius="lg"
              >
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                onClick={handleSubmit}
                size="lg"
                borderRadius="lg"
                disabled={!name || !email}
              >
                Add User
              </Button>
            </HStack>
          </Dialog.Footer>

          <Dialog.CloseTrigger />
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
