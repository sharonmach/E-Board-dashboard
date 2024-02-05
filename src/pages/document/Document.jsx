// import React from "react";
import { useState } from "react";
import "./document.css";
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

function createData(document, userName, date, status) {
  return { document, userName, date, status };
}

const rows = [
  createData(
    "Board Minutes",
    "Rebecca Muthoni",
    // 18908424,
    "2 January 2024",
    "Approved"
  ),
  createData(
    "On-boarding minutes",
    "Grace Katuva ",
    // 18908424,
    "2 January 2024",
    "Pending"
  ),
  createData(
    "Progress Minutes",
    "Enoch Gibson",
    // 18908424,
    "12 January 2024",
    "Approved"
  ),
  createData(
    "Planning Minutes",
    "Caleb Kila",
    // 18908421,
    "15 January 2024",
    "Denied"
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
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };
  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select files first");
      return;
    }
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });
    try {
      // Replace this URL with your server-side endpoint for handling file uploads
      const response = await fetch("https://your-upload-endpoint.com/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("Files uploaded successfully");
      } else {
        alert("Failed to upload the files");
      }
    } catch (error) {
      console.error("Error while uploading the files:", error);
      alert("Error occurred while uploading the files");
    }
  };
  return (
    <div className="document">
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 5 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        {/* <Link underline="hover" color="inherit" href="/">
          Documents
        </Link> */}
        <Typography color="text.primary">Documents</Typography>
      </Breadcrumbs>

      <input type="file" multiple onChange={handleFileChange} />
      <Button
        variant="contained"
        color="primary"
        startIcon={<CloudUpload />}
        onClick={handleUpload}
      >
        Upload
      </Button>
      {/* <Button variant="outlined" startIcon={<Delete />}>
        Delete
      </Button> */}

      <div className="Table">
        {/* <h3>Documents Uploaded</h3> */}
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Document</TableCell>
                <TableCell align="left">Uploaded By</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
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
                    {row.document}
                  </TableCell>
                  <TableCell align="left">{row.userName}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell align="left" className="Details">
                    Details
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
