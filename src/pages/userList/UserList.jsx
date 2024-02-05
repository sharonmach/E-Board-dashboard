import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline, Edit } from "@mui/icons-material";
import { IconButton, Tooltip, Button, Box } from "@mui/material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const [pageSize, setPageSize] = useState(5);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "username",
      headerName: "User Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      type: "boolean",
      editable: true,
    },
    {
      field: "role",
      headerName: "Role",
      width: 160,
      editable: true, // If you want to allow editing
      type: "singleSelect", // Specify the type as singleSelect
      valueOptions: ["Admin", "Manager", "HR"],
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link> */}
            <IconButton>
              <Link to={"/user/" + params.row.id}>
                <Edit className="userListEdit" />
              </Link>
            </IconButton>
            <IconButton>
              <DeleteOutline
                className="userListDelete"
                onClick={() => handleDelete(params.row.id)}
              />
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      {/* <Link to="/newUser">
        <Button className="useraddList" variant="contained">
          Add New User
        </Button>
      </Link> */}
      <Link to="/newUser">
        <button className="userAddButton">Add New User</button>
      </Link>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          rowsPerPageOptions={[5, 10, 20]}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => {
            console.log("New PageSize:", newPageSize);
            setPageSize(newPageSize);
          }}
          // autoHeight={60}
          checkboxSelection
        />
      </Box>
    </div>
  );
}
