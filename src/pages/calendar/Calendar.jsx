// import React from 'react'
// import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import "./calendar.css";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useState } from "react";

export default function Calendar() {
  const [events, setEvents] = useState([
    {
      id: "12315",
      title: "Boar meeting to be held about Network Issues",
      date: "2024-01-17",
    },
    {
      id: "5123",
      title: "Outside Field day",
      date: "2024-01-18",
    },
  ]);
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    // alert(arg.datestr);
    if (title) {
      const newEvent = {
        id: new Date().toISOString(),
        title: title,
        date: selected.dateStr,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  };
  const handleEventDelete = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  return (
    <div className="calendar">
      {/* <Box sx={{ height: 700, width: "90%", ml: "10px" }}> */}
      <FullCalendar
        height="95vh"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,listMonth",
          // right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        initialView="dayGridMonth"
        selectMirror={true}
        dayMaxEvents={true}
        editable={true}
        selectable={true}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventDelete}
        eventContent={renderEventContent}
      />
      {/* </Box> */}
    </div>
  );
}
