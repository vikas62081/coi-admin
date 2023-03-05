export interface Permission {
    permission_id: number;
    permission_group_id?: number;
    name?: string
    display_name?: string;
    description?: string;
    parent_id?: number;
    is_enabled?: boolean;
    tenancy_type?: string;
    is_deleted? : boolean;
}

export interface PermissionGroup {
    permission_group_id: number;
    name?: string;
    display_name?: string;
    description?: string;
    parent_id?: number;
    is_enabled?: boolean;
    tenancy_type?: string;
    is_deleted? : boolean;
    created?: string;
    created_by?: number;
}

export interface PermissionRoleGrant {
    permission_id: number;
    role_id?: number;
    access_grant?: boolean;
    created?: string;
    created_by?: number;
    updated?: string;
    updated_by?: number;
    is_deleted?: boolean;
}

export interface PermissionUserGrant {
    permission_id: number;
    user_id?: number;
    access_grant?: boolean;
    created?: string;
    created_by?: number;
    updated?: string;
    updated_by?: number;
    is_deleted?: boolean;
}
