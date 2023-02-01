import { useState } from "react";
import "./App.css";
import { sidebarData } from "../mockedData";
import { Button, Grid, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ActionCellRenderer from "../components/AdminTable/adminTable";
import CreateUser from "../components/CreateNewUser/createNewUser";
import AdminHeader from "../components/AdminHeader/adminHeader";
import { Link } from "react-router-dom";
import { SideBarReact } from "../__npm/NavigationSideBar/SideBar/SideBarReact";

const DATA = [
  {
    make: "Toyota",
    model: "Celica",
    price: 35000,
    date: "09-02-2022",
    available: true,
  },
  {
    make: "Ford",
    model: "Mondeo",
    price: 32000,
    date: "11-02-2022",
    available: false,
  },
  {
    make: "Porsche",
    model: "Boxter",
    price: 72000,
    date: "10-02-2022",
    available: true,
  },
  {
    make: "Mers",
    model: "Mers",
    price: 92000,
    date: "12-02-2022",
    available: true,
  },
];

function App() {
  const [gridApi, setGridApi] = useState();
  const rowData = DATA;
  const [open, setOpen] = useState<boolean>(false);
  const columns = [
    {
      headerName: "Make",
      field: "make",
    },
    { headerName: "Price", field: "price" },
    { headerName: "Model", field: "model" },
    { headerName: "Date", field: "date" },
    {
      headerName: "Action",
      colId: "action",
      editable: false,
      sortable: false,
      cellRenderer: ActionCellRenderer,
    },
  ];

  const defColumnDefs = {
    flex: 1,
    editable: true,
    sortable: true,
    // filter: true, // enable if you want select option to be filtered
    filter: "agTextColumnFilter",
    floatingFilter: true,
    suppressMenu: true,
  };

  const onGridReady = (params: any) => {
    setGridApi(params);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="App">
      <Grid style={{ paddingLeft: 16 }}>
        <AdminHeader />
        <Grid container>
          <Grid item sm={11}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Configuration Microservice
            </Typography>
          </Grid>
          <Grid item textAlign="end">
            <Button
              onClick={handleOpen}
              variant="outlined"
              size="small"
              style={{ color: "white" }}
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          </Grid>
        </Grid>
        {/* <div className={"ag-theme-alpine"} style={{ height: 600 }}> */}
        <Grid className={"ag-theme-alpine"} style={{ height: 600 }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columns}
            defaultColDef={defColumnDefs}
            onGridReady={onGridReady}
            editType="fullRow"
            suppressClickEdit={true}
            // stopEditingWhenCellsLoseFocus={true}
          />
        </Grid>
        {/* </div> */}
        <CreateUser open={open} handleClose={handleClose} />
      </Grid>
    </div>
  );
}

export default App;
