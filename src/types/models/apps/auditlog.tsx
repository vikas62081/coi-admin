export interface Auditlog {
    auditlog_id: number;
    action_taken?: string;
    database_name?: string
    object_type ?: string;
    object_id ?: number;
    log?: string;
    user_id?: string;
    created?: string;
    created_by?: string;
}
