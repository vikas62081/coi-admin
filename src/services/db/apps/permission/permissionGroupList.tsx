import { PermissionGroup } from "../../../../types/models/apps/permission";

let permissionGroupList: PermissionGroup[] = [
    {
        permission_group_id: 2099788175600200200,
        name: 'permission_group_1',
        display_name: "Permission Group 1",
        description: "This is Group 1 Permissions",
        parent_id: 9994788175600200200,
        is_enabled: true,
        tenancy_type: "host",
        is_deleted : false
    },
    {
        permission_group_id: 2099388175600200299,
        name: 'permission_group_xyp',
        display_name: "Permission Group XYZ",
        description: "Permission of Group XYZ",
        parent_id: 9994788175600200123,
        is_enabled: true,
        tenancy_type: "host",
        is_deleted : false
    },
    {
        permission_group_id: 1000388175600200299,
        name: 'permission_group_team1',
        display_name: "Permission Group Team1",
        description: "Permission of Group Team1",
        parent_id: 1000788175600200123,
        is_enabled: true,
        tenancy_type: "host",
        is_deleted : false
    }
];

export default permissionGroupList;
