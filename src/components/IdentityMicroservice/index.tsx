import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createIdentityRoles,
  createIdentityUserRoles,
  createIdentityUsers,
  deleteIdentityRoles,
  deleteIdentityUserRoles,
  deleteIdentityUsers,
  getIdentityRoles,
  getIdentityUserRoles,
  getIdentityUsers,
  updateIdentityRoles,
  updateIdentityUserRoles,
  updateIdentityUsers,
} from "../../redux/actions/Identity";
import AdminTable from "../AdminTable/adminTable";
import { ROLES, USERS, USER_TO_ROLES } from "../constant";

const TABS = [USERS, ROLES, USER_TO_ROLES];
const userConfig = [
  {
    title: "Tenant Name",
    name: "name",
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
    name: "email_confirmed",
    type: "switch",
    required: true,
  },
  {
    title: "First Name",
    name: "first_name",
    type: "text",
    required: true,
    placeholder: "Enter first name",
  },
  {
    title: "Second Name",
    name: "second_name",
    type: "text",
    required: true,
    placeholder: "Enter second name",
  },
  {
    title: "Last Name",
    name: "last_name",
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
    name: "phone_confirmed",
    type: "switch",
    required: true,
  },
  {
    title: "MFA Enabled",
    name: "mfa_enabled",
    type: "switch",
    required: true,
  },
  {
    title: "Deleted",
    name: "is_deleted",
    type: "switch",
    required: true,
  },
];
const rolesConfig = [
  {
    title: "Tenant",
    name: "tenant",
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
    name: "userRole",
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
    name: "userRole",
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

const roleColumn = [
  {
    headerName: "Tenant",
    field: "tenant",
  },
  {
    headerName: "User Role",
    field: "userRole",
  },

  {
    headerName: "Created By",
    field: "createdBy",
  },
  {
    headerName: "Updated By",
    field: "updatedBy",
  },
  {
    headerName: "Deleted",
    field: "deleted",
  },
];
const userRoleColumn = [
  {
    headerName: "User Name",
    field: "username",
  },
  {
    headerName: "User Role",
    field: "userRole",
  },
  {
    headerName: "Created By",
    field: "createdBy",
  },
  {
    headerName: "Updated By",
    field: "updatedBy",
  },
  {
    headerName: "Deleted",
    field: "deleted",
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
const editActionDisabledTabs = [USER_TO_ROLES];
function IdentityMicroservice() {
  const [activeTab, setActiveTab] = useState(USERS);
  const [currentForm, setCurrentForm] = useState(userConfig);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { userList, roleList, userRoleList } = useSelector(
    (state: any) => state.identity,
  );
  const identityService: any = {
    Users: {
      data: userList,
      column: columns,
      form: userConfig,
      get: () => dispatch(getIdentityUsers()),
      create: (values: any) => dispatch(createIdentityUsers(values)),
      update: (values: any) => dispatch(updateIdentityUsers(values)),
      delete: ({ user_id }: any) => dispatch(deleteIdentityUsers(user_id)),
    },
    Roles: {
      data: roleList,
      column: roleColumn,
      form: rolesConfig,
      get: () => dispatch(getIdentityRoles()),
      create: (values: any) => dispatch(createIdentityRoles(values)),
      update: (values: any) => dispatch(updateIdentityRoles(values)),
      delete: ({ role_id }: any) => dispatch(deleteIdentityRoles(role_id)),
    },
    "User to Roles": {
      data: userRoleList,
      column: userRoleColumn,
      form: userRolesConfig,
      get: () => dispatch(getIdentityUserRoles()),
      create: (values: any) => dispatch(createIdentityUserRoles(values)),
      update: (values: any) => dispatch(updateIdentityUserRoles(values)),
      delete: ({ user_role_id }: any) =>
        dispatch(deleteIdentityUserRoles(user_role_id)),
    },
  };
  useEffect(() => {
    dispatch(getIdentityUsers());
    dispatch(getIdentityRoles());
    dispatch(getIdentityUserRoles());
  }, []);

  useEffect(() => {
    setData(identityService[activeTab]?.data ?? []);
  }, [userList, roleList, userRoleList]);

  const handleTabChange = (newTab: string, gridApi: any) => {
    setActiveTab(newTab);

    const { data, column, form, get } = identityService[newTab];
    // get();
    setCurrentForm(form);
    gridApi.api.setColumnDefs(column);
    gridApi.api.setRowData(data);
  };
  const onSubmit = (values: any, isEdit: boolean, closeForm: any) => {
    if (isEdit) {
      identityService[activeTab].update(values);
    } else {
      identityService[activeTab].create(values); // create
    }
    closeForm();
  };

  const onDelete = (row: any) => {
    identityService[activeTab].delete(row);
  };

  return (
    <AdminTable
      rowData={data}
      columnData={columns}
      title="Identity Microservice"
      TABS={TABS}
      activeTab={activeTab}
      handleTabChange={handleTabChange}
      onSubmit={onSubmit}
      onDelete={onDelete}
      // initialState={initialState}
      formConfig={currentForm}
      editActionDisabled={editActionDisabledTabs.includes(activeTab)}
    />
  );
}

export default IdentityMicroservice;
