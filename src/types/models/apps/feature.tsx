export interface Feature {
    feature_id: number;
    display_name?: string;
    feature_name?: string;
    feature_type_id?: string;
    feature_group_id?: string;
    parent_feature_id?: string;
    description?: string;
    default_value_type?: boolean;
    default_value?: number;
    allowed_providers?: string;
    provider_key?: string;
    provider_name?: string;
    is_visible_to_clients?: boolean;
    is_available_to_host?: boolean;
    created?: string;
    created_by?: number;
    updated?: string;
    updated_by?: number;
    is_deleted?: boolean;
}

export interface FeatureType {
    feature_type_id: number;
    type_name?: string;
    description?: string;
    created?: string;
    created_by?: number;
    updated?: string;
    updated_by?: number;
    is_deleted?: boolean;
}

export interface FeatureGroup {
    feature_group_id: number;
    group_name?: string;
    description?: string;
    created?: string;
    created_by?: number;
    updated?: string;
    updated_by?: number;
    is_deleted?: boolean;
}

export interface Plan {
    plan_id: number;
    plan_name?: string;
    plan_description?: string;
    type?: string;
    is_admin?: boolean;
    price?: number;
    expires?: string;
    created?: string;
    created_by?: number;
    updated?: string;
    updated_by?: number;
    is_deleted?: boolean;
}

export interface PlanFeature {
    id: number;
    plan_id?: number;
    feature_id?: number;
    value?: string;
    created?: string;
    created_by?: number;
    updated?: string;
    updated_by?: number;
    is_deleted?: boolean;
}

export interface Subscription {
    id: number;
    tenant_id?: number;
    plan_id?: number;
    expiration?: string;
    value?: string;
    created?: string;
    created_by?: number;
    updated?: string;
    updated_by?: number;
    is_deleted?: boolean;
}
