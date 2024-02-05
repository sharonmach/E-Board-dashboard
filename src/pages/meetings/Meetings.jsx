// import React from "react";
import { useState } from "react";
// import "./document.css";
import { Button, TextField } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { Delete } from "@mui/icons-material";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Breadcrumbs,
  Typography,
  Link,
} from "@mui/material";

function createData(
  meetingType,
  date,
  attendees,
  location,
  guestSpeaker,
  agenda,
  followUp
) {
  return {
    meetingType,
    date,
    attendees,
    location,
    guestSpeaker,
    agenda,
    followUp,
  };
}

const rows = [
  createData(
    "Staff Meeting",
    25,
    "15 Jan 2024",
    "OnSite",
    "Benjamin Mwendwa-ICT CS",
    // 18908421,
    "E-Board demo",
    "Follow up with finance"
  ),
  createData(
    "Innovation Meeting",
    25,
    "15 Jan 2024",
    "OnSite",
    "Benjamin Mwendwa-ICT CS",
    // 18908421,
    "E-Board demo",
    "Follow up with finance"
  ),
  createData(
    "Board of Directors Meeting",
    25,
    "15 Jan 2024",
    "OnSite",
    "Benjamin Mwendwa-ICT CS",
    // 18908421,
    "E-Board demo",
    "Follow up with finance"
  ),
  createData(
    "Committee Meeting",
    25,
    "15 Jan 2024",
    "OnSite",
    "Benjamin Mwendwa-ICT CS",
    // 18908421,
    "E-Board demo",
    "Follow up with finance"
  ),
  createData(
    "Brainstorming Meeting",
    25,
    "15 Jan 2024",
    "OnSite",
    "Benjamin Mwendwa-ICT CS",
    // 18908421,
    "E-Board demo",
    "Follow up with finance"
  ),
  createData(
    "Training Meeting",
    25,
    "15 Jan 2024",
    "OnSite",
    "Benjamin Mwendwa-ICT CS",
    // 18908421,
    "E-Board demo",
    "Follow up with finance"
  ),
  createData(
    "Progress Updates Meeting",
    25,
    "15 Jan 2024",
    "OnSite",
    "Benjamin Mwendwa-ICT CS",
    // 18908421,
    "E-Board demo",
    "Follow up with finance"
  ),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};
export default function Document() {
  return (
    <div className="document">
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 5 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        {/* <Link underline="hover" color="inherit" href="/">
          Documents
        </Link> */}
        <Typography color="text.primary">Meetings</Typography>
      </Breadcrumbs>

      <div className="Table">
        {/* <h3>Documents Uploaded</h3> */}
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Meeting Type</TableCell>
                <TableCell align="left">Attendees</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Location</TableCell>
                <TableCell align="left">Guest Speaker</TableCell>
                <TableCell align="left">Agenda</TableCell>
                <TableCell align="left">Follow Up</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.meetingType}
                  </TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.attendees}</TableCell>
                  <TableCell align="left">{row.location}</TableCell>
                  <TableCell align="left">{row.guestSpeaker}</TableCell>
                  <TableCell align="left">{row.agenda}</TableCell>
                  <TableCell align="left">{row.followUp}</TableCell>
                  {/* <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>
                      {row.location}
                    </span>
                  </TableCell>
                  <TableCell align="left" className="Details">
                    Details
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
