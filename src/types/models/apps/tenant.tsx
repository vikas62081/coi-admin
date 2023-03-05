export interface Tenant {
    tenant_id: string;
    name?: string;
    identifier?: string
    tenant_type?: string;
    configuration_connection_strings?: string;
    language_code?: string;
    time_zone_id?: string;
    theme_id?: number;
    legacy_id?: number;
    parent_id?: number;
    created?: string;
    created_by?: string;
    updated?: string;
    updated_by?: string;
    is_deleted?: boolean;
}
