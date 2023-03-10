import AdminTable from "../AdminTable/adminTable";
const userConfig = [
  {
    title: "ID",
    name: "id",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "One", value: 1 },
      { title: "Two", value: 2 },
    ],
  },
  {
    title: "Action",
    name: "action",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },

  {
    title: "Database",
    name: "database",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Object",
    name: "object",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "object_id",
    name: "objectId",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Log",
    name: "log",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "User",
    name: "user",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
];
const DATA = [
  {
    auditlog_id: 1,
    action_taken: "Update",
    database_name: "testDB",
    object_type: "User",
    object_id: 1001,
    log: "User with id 1001 was updated",
    user_Id: 123,
    created: "2022-01-01",
    created_by: "John Doe",
  },
  {
    auditlog_id: 2,
    action_taken: "Delete",
    database_name: "testDB",
    object_type: "Product",
    object_id: 2001,
    log: "Product with id 2001 was deleted",
    user_Id: 124,
    created: "2022-02-01",
    created_by: "Jane Doe",
  },
  {
    auditlog_id: 3,
    action_taken: "Insert",
    database_name: "testDB",
    object_type: "Order",
    object_id: 3001,
    log: "Order with id 3001 was inserted",
    user_Id: 125,
    created: "2022-03-01",
    created_by: "John Smith",
  },
];

const columns = [
  {
    headerName: "Id",
    field: "auditlog_id",
  },
  { headerName: "Action", field: "action_taken" },
  { headerName: "Database", field: "database_name" },
  {
    headerName: "Object",
    field: "object_type",
  },
  { headerName: "Object Id", field: "object_id" },
  { headerName: "Log", field: "log" },
  { headerName: "User", field: "user_Id" },
  { headerName: "Created", field: "created" },
  { headerName: "Created By", field: "created_by" },
];
function AuditlogMicroservice() {
  return (
    <AdminTable
      rowData={DATA}
      columnData={columns}
      title="Auditlog Microservice"
      onSubmit={(values: any) => console.log(values)}
      formConfig={userConfig}
    />
  );
}

export default AuditlogMicroservice;
