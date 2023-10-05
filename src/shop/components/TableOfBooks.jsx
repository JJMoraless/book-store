import {
  TrashIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/outline";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks, removeBook } from "../../store/books";

export const TableOfBooks = () => {
  const { books, page, total } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const prevBook = () => {
    if (page === 1) return;
    dispatch(getBooks(page - 1));
  };

  const nextBook = () => {
    dispatch(getBooks(page + 1));
  };

  const onRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="border m-0 p-0 overflow-auto border rounded-4 m-auto shadow-lg p-3 mb-5">
      <p>
        Books <b>{total}</b>
      </p>
      <table className="table m-0">
        <thead>
          <tr className="text-capitalize">
            <th>Title</th>
            <th>Image</th>
            <th>Genre</th>
            <th>Categories</th>
            <th>Seller</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Resume</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>
                  <img src={item.image.secure_url} alt="" width="60px" />
                </td>
                <td>{item.genre}</td>
                <td>{item.categories}</td>
                <td>{item.seller}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>{item.resume}</td>
                <td>
                  <button
                    onClick={() => onRemoveBook(item._id)}
                    className="btn p-0"
                  >
                    <TrashIcon
                      style={{
                        width: "25px",
                        strokeWidth: "1",
                      }}
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button onClick={() => prevBook()} className="btn p-0">
        <ArrowUturnLeftIcon
          style={{
            width: "25px",
            padding: "0px",
            strokeWidth: "1",
            color: "#022b3a",
          }}
        />
      </button>

      <button onClick={() => nextBook()} className="btn p-0">
        <ArrowUturnRightIcon
          style={{
            width: "25px",
            padding: "0px",
            strokeWidth: "1",
            color: "#022b3a",
          }}
        />
      </button>
    </div>
  );
};
