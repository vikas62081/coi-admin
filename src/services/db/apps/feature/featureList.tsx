import { Feature } from "../../../../types/models/apps/feature";

let featureList: Feature[] = [
    {
        feature_id: 1045788175600200200,
        display_name: 'Multi Factor Authorization',
        feature_name: 'MFA',
        feature_type_id: 'Authorization',
        feature_group_id: 'Authorization',
        parent_feature_id: 'Authorization',
        description: 'Sample Description',
        default_value_type: true,
        default_value: 1,
        allowed_providers: 'allowed providers here',
        provider_key: '',
        provider_name: 'Provider ABC',
        is_visible_to_clients: false,
        is_available_to_host: true,
        created: '2009-06-15T13:45:30',
        created_by: 2045232375600200200,
        updated: '2009-07-11T12:43:20',
        updated_by: 1245232375600222230,
        is_deleted: false,
    },
    {
        feature_id: 3215788175600200200,
        display_name: 'OAuth',
        feature_name: 'OAuth',
        feature_type_id: 'Authorization',
        feature_group_id: 'Authorization',
        parent_feature_id: 'Authorization',
        description: 'Sample Description for OAuth',
        default_value_type: true,
        default_value: 1,
        allowed_providers: 'allowed providers here for OAuth',
        provider_key: '',
        provider_name: 'Provider BBB',
        is_visible_to_clients: false,
        is_available_to_host: true,
        created: '2009-06-15T13:45:30',
        created_by: 1235232375600200200,
        updated: '2009-07-11T12:43:20',
        updated_by: 4444232375600222230,
        is_deleted: false,
    }
];

export default featureList;
