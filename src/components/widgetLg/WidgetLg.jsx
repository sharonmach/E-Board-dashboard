// // import React from 'react'
// import { Button } from "@mui/material";
// import "./widgetLg.css";

// export default function WidgetLg() {
//   return (
//     <div className="widgetLg">
//       <h3 className="widgetLgTitle">Newest Members</h3>
//       {/* <ul className="widgetLgList">
//         <li className="widgetLgListItem">
//           <img
//             src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//             alt=""
//             className="widgetLgImg"
//           />
//           <div className="widgetLgUser">
//             <span className="widgetLgUsername">Sharon Macharia</span>
//             <span className="widgetLgUserTitle">Software Engineer</span>
//           </div>
//           <button className="widgetLgButton">
//             <Visibility className="widgetLgIcon" />
//             Display
//           </button>
//         </li>
//       </ul> */}
//       <table className="widgetLgTable">
//         <tr className="widgetLgTr">
//           <th className="widgetLgTh">Customer</th>
//           <th className="widgetLgTh">Date</th>
//           <th className="widgetLgTh">Amount</th>
//           <th className="widgetLgTh">Status</th>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src="https://images.gr-assets.com/authors/1561336084p8/4123863.jpg"
//               alt=""
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Federico Kereki</span>
//           </td>
//           <td className="widgetLgDate">14 May 2022</td>
//           <td className="widgetLgAmount">$2100.00</td>
//           <td className="widgetLgStatus">
//             <Button type="Approved" />
//           </td>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src="https://media-exp1.licdn.com/dms/image/C4D03AQFsohsj7miS2w/profile-displayphoto-shrink_800_800/0/1651377283409?e=1657756800&v=beta&t=rHN6C2GAljYKMZKQkAhR5DZyXfGtPv2r3PCo0Zqw7aU"
//               alt=""
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Ikechi Fortune</span>
//           </td>
//           <td className="widgetLgDate">12 May 2022</td>
//           <td className="widgetLgAmount">$1202.00</td>
//           <td className="widgetLgStatus">
//             <Button type="Declined" />
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// }
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import "./widgetLg.css";

function createData(name, userId, date, status) {
  return { name, userId, date, status };
}

const rows = [
  createData("Rebecca Muthoni", 18908424, "2 January 2024", "Approved"),
  createData("Grace Katuva ", 18908424, "2 January 2024", "Pending"),
  createData("Enoch Gibson", 18908424, "12 January 2024", "Approved"),
  createData("Caleb Kila", 18908421, "15 January 2024", "Denied"),
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

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Members Presentation</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">User ID</TableCell>
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
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.userId}</TableCell>
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
  );
}
