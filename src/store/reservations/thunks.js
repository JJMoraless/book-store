import { bookStoreApi } from "../../helpers/request";
import { setReservationsByUser } from "./reservationSlice";

export const getReservations = () => {
  return async (dispatch) => {
    const reservations = await bookStoreApi.get("users/my_reservations");
    dispatch(
      setReservationsByUser({
        reservations: reservations.data.data.reservations[0].reservations,
      })
    );
  };
};
