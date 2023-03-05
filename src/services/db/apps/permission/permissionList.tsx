import { Permission } from "../../../../types/models/apps/permission";

let permissionList: Permission[] = [
    {
        permission_id: 1045788175600200200,
        permission_group_id: 2000788175600200200,
        name: 'Permission_AB',
        display_name: "Permission AB",
        description: "Permission of Company AB",
        parent_id: 1234788175600200200,
        is_enabled: true,
        tenancy_type: "host",
        is_deleted : false
    },
    {
        permission_id: 1012388175600200200,
        permission_group_id: 2012388175600200200,
        name: 'Permission_123',
        display_name: "Permission 123",
        description: "Permission of Company 123",
        parent_id: 1234788175600200123,
        is_enabled: true,
        tenancy_type: "host",
        is_deleted : false
    }
];

export default permissionList;
