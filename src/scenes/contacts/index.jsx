import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import React from "react";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/author")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);
  console.log(tableData);
  console.log("yes");

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "age",
      headerName: "Age",
      width: 200,
    },
    {
      field: "contact_Number",
      headerName: "Phone Number",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
    },
    {
      field: "city",
      headerName: "City",
      width: 200,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      width: 200,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          isRowSelectable={() => false}
          getRowHeight={() => "auto"}
          loading={false}
          rows={tableData}
          columns={columns}
          getRowId={(row) => row.url + row.title}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
