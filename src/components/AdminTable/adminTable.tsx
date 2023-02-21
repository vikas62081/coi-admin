import { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
// import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import AddIcon from "@mui/icons-material/Add";
import AdminHeader from "../AdminHeader/adminHeader";
import CreateUser from "../CreateNewUser/createNewUser";
import MyCoiToggleButton from "./Toggle";

function AdminTable({
  rowData = [],
  columnData = [],
  title = "Configuration Microservice",
  TABS,
  activeTab,
  handleTabChange,
  onSubmit,
  initialState,
  formConfig,
}: any) {
  const [gridApi, setGridApi] = useState();
  const [open, setOpen] = useState<boolean>(false);

  const defColumnDefs = {
    flex: 1,
    editable: true,
    sortable: true,
    // filter: true, // enable if you want select option to be filtered
    filter: "agTextColumnFilter",
    floatingFilter: true,
    suppressMenu: true,
    minWidth: 120,
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
              {title}
            </Typography>
            <MyCoiToggleButton
              options={TABS}
              active={activeTab}
              onChange={(tab: string) => handleTabChange(tab, gridApi)}
            />
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
        <Grid className={"ag-theme-alpine"} style={{ height: 600 }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnData}
            defaultColDef={defColumnDefs}
            onGridReady={onGridReady}
            editType="fullRow"
            suppressClickEdit={true}
            // stopEditingWhenCellsLoseFocus={true}
          />
        </Grid>

        <CreateUser
          open={open}
          handleClose={handleClose}
          onSubmit={onSubmit}
          initialState={initialState}
          formConfig={formConfig}
          // isEdit={true}
        />
      </Grid>
    </div>
  );
}

export default AdminTable;
