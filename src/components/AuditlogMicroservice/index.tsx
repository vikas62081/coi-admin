import AdminTable from "../AdminTable/adminTable";
import ComingSoonPlaceholder from "../common/ComingSoon/ComingSoonPlaceholder";
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
    />
  );
}

export default AuditlogMicroservice;
