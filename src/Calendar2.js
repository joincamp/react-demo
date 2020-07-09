import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';


function Calendar2({ events }) {

  const mappedEvents = events.map(event => ({
    title: event.name,
    date: event.start_date_time.format("YYYY-MM-DD"),
  }));
  console.log(mappedEvents);
  return (
    <FullCalendar
      plugins={[ dayGridPlugin, listPlugin ]}
      initialView="dayGridMonth"
      events={mappedEvents}
    />
  );
}

export default Calendar2;
