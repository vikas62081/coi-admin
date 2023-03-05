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
  onDeleting,
}: any) {
  const [gridApi, setGridApi] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
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
  const onDeleteModalCancel = () => {
    setShowDeleteModal(false);
  };
  const onDeleteModalSubmit = () => {};
  // const actions = [
  //   {
  //     headerName: "Actions",
  //     cellRenderer: ActionCellRenderer,
  //     cellRendererParams: {
  //       onEditing,
  //       onDeleting,
  //     },
  //     pinned: "right",
  //     width: 10,
  //     filter: false,
  //     editable: false,
  //     sortable: false,
  //   },
  // ];

  const onGridReady = (params: any) => {
    setGridApi(params);
  };

  // const columns = gridApi?.api?.getColumnDefs();
  // useEffect(() => {
  //   if (columns) {
  //     const addAction = columns[columns?.length - 1]?.headerName !== "Actions";
  //     if (addAction) {
  //       gridApi.api.setColumnDefs([...columns, ...actions]);
  //     }
  //   }
  // }, [columns]);

  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
    setShowDeleteModal(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
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
            // onRowSelected={({data}) => allowEditing(data)}
            onRowDoubleClicked={({ data }) => allowEditing(data)}

            // stopEditingWhenCellsLoseFocus={true}
          />
          <div
            style={{
              height: "56px",
              background: "#CBD5E1",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <Grid item textAlign="end" style={{ padding: 10 }}>
              <Button
                onClick={handleOpen}
                variant="outlined"
                size="medium"
                style={{ color: "#081D35", background: "#FFFF" }}
                startIcon={<AddIcon />}
              >
                Create new record
              </Button>
            </Grid>
          </div>
        </Grid>

        <CreateUser
          open={open}
          handleClose={handleClose}
          onSubmit={(...arg) => onSubmit(...arg, handleClose)}
          initialState={initState}
          formConfig={formConfig}
          handleDelete={handleDelete}
          isEdit={isEdit}
          showDeleteModal={showDeleteModal}
          onDeleteModalCancel={onDeleteModalCancel}
          onDeleteModalSubmit={onDeleteModalSubmit}
        />
      </Grid>
    </div>
  );
}

export default AdminTable;
