import { useState } from "react";
import AdminTable from "../AdminTable/adminTable";
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
const TABS = [
  "Permissions",
  "Permission Group",
  "Permission Grant User Role",
  "Permission Grant User",
];
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
const DATA = [
  {
    name: "Tenant 1",
    username: "tenant1",
    email: "tenant1@example.com",
    email_confirmed: true,
    first_name: "Tenant",
    second_name: "One",
    last_name: "Don",
    user_state: "active",
    last_logged_at: "2022-12-01T10:00:00Z",
    phone: "+1 123 456 7890",
    phone_confirmed: true,
    mfa_enabled: false,
    user_roles: ["admin"],
    created: "2022-11-01T10:00:00Z",
    created_by: "system",
    updated: "2022-11-10T10:00:00Z",
    updated_by: "tenant1",
    is_deleted: false,
  },
  {
    name: "Tenant 2",
    username: "tenant2",
    email: "tenant2@example.com",
    email_confirmed: false,
    first_name: "Tenant",
    second_name: "Two",
    last_name: "Don",
    user_state: "inactive",
    last_logged_at: "",
    phone: "+1 123 456 7891",
    phone_confirmed: false,
    mfa_enabled: true,
    user_roles: ["user"],
    created: "2022-11-05T10:00:00Z",
    created_by: "system",
    updated: "",
    updated_by: "",
    is_deleted: false,
  },
  {
    name: "Tenant 3",
    username: "tenant3",
    email: "tenant3@example.com",
    email_confirmed: true,
    first_name: "Tenant",
    second_name: "Three",
    last_name: "Done",
    user_state: "active",
    last_logged_at: "2022-12-15T10:00:00Z",
    phone: "+1 123 456 7892",
    phone_confirmed: true,
    mfa_enabled: true,
    user_roles: ["admin", "user"],
    created: "2022-11-10T10:00:00Z",
    created_by: "tenant1",
    updated: "2022-11-20T10:00:00Z",
    updated_by: "tenant3",
    is_deleted: false,
  },
];
const columns = [
  {
    headerName: "Tenant",
    field: "name",
  },
  { headerName: "Username", field: "username" },
  { headerName: "Email", field: "email" },
  {
    headerName: "Email Confirmed",
    field: "email_confirmed",
  },
  { headerName: "First Name", field: "first_name" },
  { headerName: "Second Name", field: "second_name" },
  { headerName: "Last Name", field: "last_name" },
  { headerName: "User State", field: "user_state" },
  { headerName: "Last logged at", field: "last_logged_at" },
  { headerName: "Phone", field: "phone" },
  { headerName: "Phone confirmed", field: "phone_confirmed" },
  { headerName: "MFA is enabled", field: "mfa_enabled" },
  { headerName: "User Roles", field: "user_roles" },
  { headerName: "Created", field: "created" },
  { headerName: "Created By", field: "created_by" },
  { headerName: "Updated", field: "updated" },
  { headerName: "Updated By", field: "updated_by" },
  { headerName: "Deleted", field: "is_deleted" },
];
function PermissionManagementMicroservice() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [currentForm, setCurrentForm] = useState(userConfig);

  const handleTabChange = (newTab: string, gridApi: any) => {
    setActiveTab(newTab);

    let newUserConfig: any = [];
    let newColumns: any = [];
    if (newTab === TABS[0]) {
      newUserConfig = userConfig;
      newColumns = columns;
    } else if (newTab === TABS[1]) {
      newUserConfig = rolesConfig;
      newColumns = columns.slice(1, 5);
    } else if (newTab === TABS[2]) {
      newUserConfig = userRolesConfig;
      newColumns = columns.slice(4, 10);
    } else if (newTab === TABS[3]) {
      newUserConfig = userRolesConfig;
      newColumns = columns.slice(5, 11);
    }
    setCurrentForm(newUserConfig);
    gridApi.api.setColumnDefs(newColumns);
  };

  return (
    <AdminTable
      rowData={DATA}
      columnData={columns}
      title="Permission Management Microservice"
      TABS={TABS}
      activeTab={activeTab}
      handleTabChange={handleTabChange}
      onSubmit={(values: any) => console.log(values)}
      initialState={initialState}
      formConfig={currentForm}
    />
  );
}

export default PermissionManagementMicroservice;
