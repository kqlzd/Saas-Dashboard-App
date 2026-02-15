import { Dialog, Button, VStack, HStack, Field, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Edit } from "lucide-react";
import { IUser } from "../../data/mockUsers";

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (id: number, user: { name: string; email: string }) => void;
  user: IUser | null;
}

export const EditUserModal = ({
  isOpen,
  onClose,
  onUpdate,
  user,
}: EditUserModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = () => {
    if (name && email && user) {
      onUpdate(user.id, { name, email });
      onClose();
    }
  };

  const handleClose = () => {
    setName("");
    setEmail("");
    onClose();
  };

  if (!user) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => !e.open && handleClose()}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content borderRadius="xl" maxW="md">
          <Dialog.Header borderBottom="1px" borderColor="gray.100" pb={4}>
            <HStack gap={2}>
              <Edit size={24} color="var(--chakra-colors-blue-600)" />
              <Dialog.Title fontSize="xl" fontWeight="bold">
                Edit User
              </Dialog.Title>
            </HStack>
          </Dialog.Header>

          <Dialog.Body pt={6} pb={4}>
            <VStack gap={4} align="stretch">
              <Field.Root>
                <Field.Label fontWeight="medium" fontSize="sm" color="gray.700">
                  Full Name
                </Field.Label>
                <Input
                  placeholder="Enter full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  size="lg"
                  borderRadius="lg"
                />
              </Field.Root>

              <Field.Root>
                <Field.Label fontWeight="medium" fontSize="sm" color="gray.700">
                  Email Address
                </Field.Label>
                <Input
                  placeholder="Enter email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="lg"
                  borderRadius="lg"
                />
              </Field.Root>
            </VStack>
          </Dialog.Body>

          <Dialog.Footer borderTop="1px" borderColor="gray.100" pt={4}>
            <HStack gap={3} width="full" justify="flex-end">
              <Button
                variant="outline"
                onClick={handleClose}
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
                Save Changes
              </Button>
            </HStack>
          </Dialog.Footer>

          <Dialog.CloseTrigger />
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
