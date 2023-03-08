let userList = [
  {
    user_id: "1",
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
    user_id: "2",
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
    user_id: "3",
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

export default userList;
