import AdminTable from "../AdminTable/adminTable";
const userConfig = [
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
    title: "Type",
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
    title: "Nickname",
    name: "nickname",
    type: "text",
    required: true,
    placeholder: "Enter nickname",
  },
  {
    title: "Configuration Connection",
    name: "configurationConnection",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Language Name",
    name: "languageName",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Time Zone",
    name: "timeZone",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Theme Name",
    name: "themeName",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Central Client's ID",
    name: "centralClientId",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Enterprise Parent Tenant",
    name: "enterpriseParentTenant",
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
    required: false,
  },
];
const DATA = [
  {
    name: "Tenant 1",
    tenant_type: "Type A",
    identifier: "Nick 1",
    configuration_connection_strings: "conn_string_1",
    language_code: "English",
    time_zone_id: "UTC",
    theme_id: "Dark",
    legacy_id: "client_1",
    parent_id: "Enterprise 1",
    created: "2022-01-01",
    created_by: "User 1",
    updated: "2022-02-01",
    updated_by: "User 2",
    is_deleted: false,
  },
  {
    name: "Tenant 2",
    tenant_type: "Type B",
    identifier: "Nick 2",
    configuration_connection_strings: "conn_string_2",
    language_code: "German",
    time_zone_id: "CET",
    theme_id: "Light",
    legacy_id: "client_2",
    parent_id: "Enterprise 2",
    created: "2022-03-01",
    created_by: "User 3",
    updated: "2022-04-01",
    updated_by: "User 4",
    is_deleted: false,
  },
  {
    name: "Tenant 3",
    tenant_type: "Type C",
    identifier: "Nick 3",
    configuration_connection_strings: "conn_string_3",
    language_code: "Spanish",
    time_zone_id: "CST",
    theme_id: "Dark",
    legacy_id: "client_3",
    parent_id: "Enterprise 3",
    created: "2022-05-01",
    created_by: "User 5",
    updated: "2022-06-01",
    updated_by: "User 6",
    is_deleted: false,
  },
  {
    name: "Tenant 4",
    tenant_type: "Type D",
    identifier: "Nick 4",
    configuration_connection_strings: "conn_string_4",
    language_code: "French",
    time_zone_id: "EST",
    theme_id: "Light",
    legacy_id: "client_4",
    parent_id: "Enterprise 4",
    created: "2022-07-01",
    created_by: "User 7",
    updated: "2022-08-01",
    updated_by: "User 8",
    is_deleted: false,
  },
  {
    name: "Tenant 5",
    tenant_type: "Type E",
    identifier: "Nick 5",
    configuration_connection_strings: "conn_string_5",
    language_code: "Italian",
    time_zone_id: "PST",
    theme_id: "Dark",
    legacy_id: "client_5",
    parent_id: "Enterprise 5",
    created: "2022-09-01",
    created_by: "User 9",
    updated: "2022-10-01",
    updated_by: "User 10",
    is_deleted: false,
  },
];
const columns = [
  {
    headerName: "Tenant",
    field: "name",
  },
  { headerName: "Type", field: "tenant_type" },
  { headerName: "Nikename", field: "identifier" },
  {
    headerName: "Configuration Connection",
    field: "configuration_connection_strings",
  },
  { headerName: "Language name", field: "language_code" },
  { headerName: "Time zone", field: "time_zone_id" },
  { headerName: "Theme name", field: "theme_id" },
  { headerName: "Central client's id", field: "legacy_id" },
  { headerName: "Enterprise parent tenant", field: "parent_id" },
  { headerName: "Created", field: "created" },
  { headerName: "Created By", field: "created_by" },
  { headerName: "Updated", field: "updated" },
  { headerName: "Updated By", field: "updated_by" },
  { headerName: "Deleted", field: "is_deleted" },
];
function TenantManagement() {
  return (
    <AdminTable
      rowData={DATA}
      columnData={columns}
      title="Tenant Management"
      onSubmit={(values: any) => console.log(values)}
      // initialState={initialState}
      formConfig={userConfig}
    />
  );
}

export default TenantManagement;
