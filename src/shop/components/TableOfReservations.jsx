

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReservations } from "../../store/reservations";

export const TableOfReservations = () => {
  const { reservations } = useSelector((state) => state.reservations);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  }, []);

  return (
    <div className="border m-0 p-0 overflow-auto border rounded-4 m-auto shadow-lg p-3 mb-5">
      <p>{/* Books <b>{total}</b> */}</p>
      <table className="table m-0">
        <thead>
          <tr className="text-capitalize">
            <th>book</th>
            <th>title</th>
            <th>start date</th>
            <th>return date</th>
          </tr>
        </thead>
        <tbody>
          {reservations?.map((item) => {
            return (
              <tr key={item._id}>
                <td>
                  <img
                    src={item.book_details.image.secure_url}
                    alt=""
                    width="40px"
                  />
                </td>
                <td>{item.book_details.title}</td>
                <td>{item.start_date}</td>
                <td>{item.return_date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
