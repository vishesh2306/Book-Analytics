import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/books")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);
  console.log(tableData);
  console.log("yes");

  const columns = [
    {
      field: "title",
      headerName: "Title",
      width: 200,
    },
    {
      field: "author",
      headerName: "Author",
      width: 200,
    },
    {
      field: "country",
      headerName: "Country",
      width: 200,
    },

    { field: "publisher", headerName: "Publisher", width: 200 },
    { field: "editions_Combined", headerName: "Edition Combined", width: 200 },
    {
      field: "ratings",
      headerName: "Ratings",
      width: 200,
    },
    {
      field: "imprint",
      headerName: "Imprint",
      width: 200,
    },

    {
      field: "publication_Date",
      headerName: "Publication Date",

      width: 200,
    },

    {
      field: "price",
      headerName: "Price",
      width: 200,
    },

    {
      field: "genre",
      headerName: "Genre",
      width: 200,
    },

    {
      field: "volume_Sales",
      headerName: "Volume Sales",
      width: 200,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Records" subtitle="List of Data for Future Reference" />
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

export default Team;
