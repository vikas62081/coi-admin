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
const initialState = {
  tenantName: "--select--",
  username: "--select--",
  email: "viksas@gmail.com",
  emailConfirmed: true,
  firstName: "First",
  secondName: "",
  lastName: "",
  phone: "",
  phoneConfirmed: true,
  mfaEnabled: true,
  deleted: false,
};
const TABS = ["Users", "Roles", "User to Roles"];
const userConfig = [
  {
    title: "Tenant Name",
    name: "tenantName",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "One", value: 1 },
      { title: "Two", value: 2 },
    ],
  },
  {
    title: "Username",
    name: "username",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Email",
    name: "email",
    type: "text",
    required: true,
    placeholder: "Enter email",
  },
  {
    title: "Email Confirmed",
    name: "emailConfirmed",
    type: "switch",
    required: true,
  },
  {
    title: "First Name",
    name: "firstName",
    type: "text",
    required: true,
    placeholder: "Enter first name",
  },
  {
    title: "Second Name",
    name: "secondName",
    type: "text",
    required: true,
    placeholder: "Enter second name",
  },
  {
    title: "Last Name",
    name: "lastName",
    type: "text",
    required: true,
    placeholder: "Enter last name",
  },
  {
    title: "Phone",
    name: "phone",
    type: "text",
    required: true,
    placeholder: "Enter phone number",
  },
  {
    title: "Phone Confirmed",
    name: "phoneConfirmed",
    type: "switch",
    required: true,
  },
  {
    title: "MFA Enabled",
    name: "mfaEnabled",
    type: "switch",
    required: true,
  },
  {
    title: "Deleted",
    name: "deleted",
    type: "switch",
    required: true,
  },
];
const rolesConfig = [
  {
    title: "Tenant",
    name: "tenantName",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "One", value: 1 },
      { title: "Two", value: 2 },
    ],
  },
  {
    title: "User Role",
    name: "username",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Deleted",
    name: "deleted",
    type: "switch",
    required: true,
  },
];
const userRolesConfig = [
  {
    title: "User Name",
    name: "username",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "One", value: 1 },
      { title: "Two", value: 2 },
    ],
  },
  {
    title: "User Role",
    name: "userrole",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Deleted",
    name: "deleted",
    type: "switch",
    required: true,
  },
];
function AdminTable({
  rowData = [],
  columnData = [],
  title = "Configuration Microservice",
}: any) {
  const [gridApi, setGridApi] = useState();
  const [open, setOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [currentForm, setCurrentForm] = useState(userConfig);

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    let newUserConfig: any = [];
    if (newTab === TABS[0]) {
      newUserConfig = userConfig;
    } else if (newTab === TABS[1]) {
      newUserConfig = rolesConfig;
    } else if (newTab === TABS[2]) {
      newUserConfig = userRolesConfig;
    }
    setCurrentForm(newUserConfig);
  };
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
              onChange={handleTabChange}
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
          onSubmit={(values) => console.log(values)}
          initialState={initialState}
          formConfig={currentForm}
          // isEdit={true}
        />
      </Grid>
    </div>
  );
}

export default AdminTable;
