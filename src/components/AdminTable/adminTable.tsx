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
import ActionCellRenderer from "./ActionCellRenderer";

function AdminTable({
  rowData = [],
  columnData = [],
  title = "Configuration Microservice",
  TABS,
  activeTab,
  handleTabChange,
  onSubmit,
  initialState = {},
  formConfig,
}: any) {
  const [gridApi, setGridApi] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState(false);
  const [initState, setInitState] = useState(initialState);
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
  const allowEditing = (data: any) => {
    setInitState(data);
    setIsEdit(true);
    setOpen(true);
  };
  const onEditing = (data: any) => {
    allowEditing(data);
  };

  const onDeleting = (data: any) => {
    alert(JSON.stringify(data));
  };
  const actions = [
    {
      headerName: "Actions",
      cellRenderer: ActionCellRenderer,
      cellRendererParams: {
        onEditing,
        onDeleting,
      },
      pinned: "right",
      width: 10,
      filter: false,
      editable: false,
      sortable: false,
    },
  ];

  const onGridReady = (params: any) => {
    setGridApi(params);
  };

  const columns = gridApi?.api?.getColumnDefs();
  useEffect(() => {
    if (columns) {
      const addAction = columns[columns?.length - 1]?.headerName !== "Actions";
      if (addAction) {
        gridApi.api.setColumnDefs([...columns, ...actions]);
      }
    }
  }, [columns]);
  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
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
            rowSelection={"single"}

            // stopEditingWhenCellsLoseFocus={true}
          />
        </Grid>

        <CreateUser
          open={open}
          handleClose={handleClose}
          onSubmit={onSubmit}
          initialState={initState}
          formConfig={formConfig}
          isEdit={isEdit}
        />
      </Grid>
    </div>
  );
}

export default AdminTable;
