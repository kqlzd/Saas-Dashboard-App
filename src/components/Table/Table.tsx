import { Table as ChakraTable, Input } from "@chakra-ui/react";
import { useState } from "react";
import { IUser } from "../../data/mockUsers";
import { RemoveFormattingIcon } from "lucide-react";

type TProps = {
  data: IUser[];
};

export const Table = ({ data }: TProps) => {
  const [search, setSearch] = useState("");

  const filterData = data.filter((item: any) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Input type="text" onChange={(e) => setSearch(e.target.value)} />
      <ChakraTable.Root>
        <ChakraTable.Header>
          <ChakraTable.Row>
            <ChakraTable.ColumnHeader>ID</ChakraTable.ColumnHeader>
            <ChakraTable.ColumnHeader>Name</ChakraTable.ColumnHeader>
            <ChakraTable.ColumnHeader>Email</ChakraTable.ColumnHeader>
          </ChakraTable.Row>
        </ChakraTable.Header>

        <ChakraTable.Body>
          {filterData.map((user: any) => (
            <ChakraTable.Row key={user.id}>
              <RemoveFormattingIcon cursor="pointer" />
              <ChakraTable.Cell>{user.id}</ChakraTable.Cell>
              <ChakraTable.Cell>{user.name}</ChakraTable.Cell>
              <ChakraTable.Cell>{user.email}</ChakraTable.Cell>
              <ChakraTable.Cell>{user.email}</ChakraTable.Cell>
            </ChakraTable.Row>
          ))}
        </ChakraTable.Body>
      </ChakraTable.Root>
    </>
  );
};
