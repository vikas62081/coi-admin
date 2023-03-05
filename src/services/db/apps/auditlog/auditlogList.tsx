import { Auditlog } from "../../../../types/models/apps/auditlog";

let auditlogList: Auditlog[] = [
    {
        auditlog_id: 1122710393924402388,
        action_taken: 'UPDATE',
        database_name: 'Empower.Service.Configuration',
        object_type: 'configuration_entries',
        object_id: 2211710393924402211,
        log: `{
            "configuration_id" : "1234567",
            "provider_key" : "123e4567-e89b-12d3-a456-426655440000",
            "provider_name" : "Empower.Service.Identity",
            "name" : "Default time out period",
            "default_value" : "-1",
            "description" : "Default time out period",
            "is_encrypted" : "0",
            "is_visible_to_client" : "1",
            "is_system" : "0",
            "is_deleted" : "0",
            "created" : "2022-08-05 16:32:56 00:00",
            "created_by" : "12434e67-e89b-12d3-a456-426655440000",
            "updated" : "2022-08-05 22:02:15 00:00",
            "updated_by" : "856e4567-e89b-12d3-a456-426655440000"
            }`,
        user_id: '123e4567-e89b-12d3-a456-426655440000',
        created: '2022-08-05 22:02:15 00:00',
        created_by: 'Empower.Service.Identity'
    },
    {
        auditlog_id: 2222710393924402322,
        action_taken: 'POST',
        database_name: 'Empower.Service.Configuration',
        object_type: 'configuration_entries',
        object_id: 3311710393924402233,
        log: `{
            "configuration_id" : "1234567",
            "provider_key" : "123e4567-e89b-12d3-a456-426655440000",
            "provider_name" : "Empower.Service.Identity",
            "name" : "Default time out period",
            "default_value" : "-1",
            "description" : "Default time out period",
            "is_encrypted" : "0",
            "is_visible_to_client" : "1",
            "is_system" : "0",
            "is_deleted" : "0",
            "created" : "2022-08-05 16:32:56 00:00",
            "created_by" : "12434e67-e89b-12d3-a456-426655440000",
            "updated" : "2022-08-05 22:02:15 00:00",
            "updated_by" : "856e4567-e89b-12d3-a456-426655440000"
            }`,
        user_id: '432e4567-e89b-12d3-a456-426655440123',
        created: '2021-08-05 22:02:15 00:00',
        created_by: 'Empower.Service.Identity'
    },
    {
        auditlog_id: 2233710393924402333,
        action_taken: 'UPDATE',
        database_name: 'Empower.Service.Configuration',
        object_type: 'configuration_entries',
        object_id: 1234710393924404321,
        log: `{
            "configuration_id" : "1234567",
            "provider_key" : "123e4567-e89b-12d3-a456-426655440000",
            "provider_name" : "Empower.Service.Identity",
            "name" : "Default time out period",
            "default_value" : "-1",
            "description" : "Default time out period",
            "is_encrypted" : "0",
            "is_visible_to_client" : "1",
            "is_system" : "0",
            "is_deleted" : "0",
            "created" : "2022-08-05 16:32:56 00:00",
            "created_by" : "12434e67-e89b-12d3-a456-426655440000",
            "updated" : "2022-08-05 22:02:15 00:00",
            "updated_by" : "856e4567-e89b-12d3-a456-426655440000"
            }`,
        user_id: '234e4567-e89b-12d3-a456-426655440234',
        created: '2021-06-07 22:02:15 00:00',
        created_by: 'Empower.Service.Identity'
    }
];

export default auditlogList;
