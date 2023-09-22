import { useParams } from "react-router-dom";
import { getBookById } from "../helpers";

export const BookPage = () => {
  const { id } = useParams();
  const book = getBookById(id);
  



  return <h1>BookPage</h1>;
};
