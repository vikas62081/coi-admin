import ActionCellRenderer from "../AdminTable/ActionCellRenderer";
import AdminTable from "../AdminTable/adminTable";
import ComingSoonPlaceholder from "../common/ComingSoon/ComingSoonPlaceholder";

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
function IdentityMicroservice() {
  return (
    <AdminTable
      rowData={DATA}
      columnData={columns}
      title="Identity Microservice"
    />
  );
}

export default IdentityMicroservice;
