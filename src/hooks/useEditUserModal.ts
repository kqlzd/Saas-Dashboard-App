import { useEffect, useState } from "react";
import { IUser } from "../data/mockUsers";

interface UseEditUserModalProps {
  onUpdate: (id: number, user: { name: string; email: string }) => void;
  onClose: () => void;
  user: IUser | null;
}

export const useEditUserModal = ({
  onUpdate,
  onClose,
  user,
}: UseEditUserModalProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

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

  return {
    handleSubmit,
    handleClose,
    setName,
    setEmail,
    name,
    email,
    isValid: Boolean(name && email),
  };
};
