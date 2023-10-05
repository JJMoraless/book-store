import { CreateNewBook } from "../components/CreateNewBook";
import { TableOfBooks } from "../components/TableOfBooks";

export const InventoryPage = () => {
  return (
    <>
      <TableOfBooks />
      <CreateNewBook />
    </>
  );
};
