import { useState } from "react";

interface AddUserFormValues {
  name: string;
  email: string;
}

interface UseAddUserFormProps {
  onAdd: (user: AddUserFormValues) => void;
  onClose: () => void;
}

export const useAddUserForm = ({ onAdd, onClose }: UseAddUserFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const isValid = Boolean(name && email);

  const handleSubmit = () => {
    if (!isValid) return;
    onAdd({ name, email });
    reset();
    onClose();
  };

  const reset = () => {
    setName("");
    setEmail("");
  };

  return {
    name,
    email,
    isValid,
    setName,
    setEmail,
    handleSubmit,
    reset,
  };
};
