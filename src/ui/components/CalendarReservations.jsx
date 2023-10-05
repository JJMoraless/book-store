import PropTypes from "prop-types";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "bootstrap-icons/font/bootstrap-icons.css";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { useEffect, useState } from "react";

export const CalendarReservations = ({ reservations }) => {
  const [reservationsFilter, setReservationsFilter] = useState([]);

  useEffect(() => {
    if (!reservations) return;

    const reservationsFiltered = reservations?.map((el) => {
      const originalEndDate = new Date(el.return_date);
      const endDatePlus = new Date(el.return_date);
      endDatePlus.setHours(originalEndDate.getHours() + 6);

      return {
        start: new Date(el.start_date),
        end: endDatePlus,
        title: " 🧙‍♂️  Reserved",
        backgroundColor: "#E85B47",
        borderColor: "#F5F3F2",
      };
    });

    setReservationsFilter(reservationsFiltered);
  }, [reservations]);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, bootstrap5Plugin]}
      themeSystem={"bootstrap5"}
      initialView="dayGridMonth"
      events={reservationsFilter}
      timeZone={"UTC"}
      locale={"es"}
      displayEventTime={false}
    />
  );
};

CalendarReservations.propTypes = {
  reservations: PropTypes.array,
};
