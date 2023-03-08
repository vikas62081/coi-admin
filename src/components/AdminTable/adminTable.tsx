import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
// import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import AddIcon from "@mui/icons-material/Add";
import AdminHeader from "../AdminHeader/adminHeader";
import CreateUser from "../CreateNewUser/createNewUser";
import MyCoiToggleButton from "./Toggle";

interface AdminTableProps {
  rowData: any[];
  columnData: any[];
  title: string;
  onSubmit: (values: any, isEdit: boolean, closeForm: () => void) => void;
  formConfig: any[];
  onDelete: (selectedRecord: any) => void;
  initialState?: object;
  TABS?: string[];
  activeTab?: any;
  handleTabChange?: (activeTab: any, gridApi: any) => void;
}

const AdminTable: React.FC<AdminTableProps> = ({
  rowData = [],
  columnData = [],
  title = "Configuration Microservice",
  TABS = [],
  activeTab,
  handleTabChange,
  onSubmit,
  initialState = {},
  formConfig,
  onDelete,
}) => {
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
  const deleteModalClose = () => {
    setShowDeleteModal(false);
  };

  const deleteModalShow = () => {
    setShowDeleteModal(true);
  };
  const handleClose = () => {
    setShowDeleteModal(false);
    setIsEdit(false);
    setOpen(false);
    setInitState({});
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const onGridReady = (params: any) => {
    setGridApi(params);
  };
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

  // const columns = gridApi?.api?.getColumnDefs();
  // useEffect(() => {
  //   if (columns) {
  //     const addAction = columns[columns?.length - 1]?.headerName !== "Actions";
  //     if (addAction) {
  //       gridApi.api.setColumnDefs([...columns, ...actions]);
  //     }
  //   }
  // }, [columns]);

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
              onChange={(tab: string) =>
                handleTabChange && handleTabChange(tab, gridApi)
              }
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
          deleteModalShow={deleteModalShow}
          isEdit={isEdit}
          showDeleteModal={showDeleteModal}
          deleteModalClose={deleteModalClose}
          onDeleting={onDelete}
        />
      </Grid>
    </div>
  );
};

export default AdminTable;
