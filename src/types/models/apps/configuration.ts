export interface Configuration {
    configuration_id: string;
    provider_key?: string;
    tenant_name?: string;
    provider_name?: string;
    name?: string;
    default_value?: number;
    description?: string;
    is_encrypted?: boolean;
    is_visible_to_client?: boolean;
    is_system?: boolean;
    is_deleted?: boolean;
    created?: string;
    created_by?: string;
    update?: string;
    updated_by?: string;
}
