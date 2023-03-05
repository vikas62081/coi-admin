import { Plan } from "../../../../types/models/apps/feature";

let featureList: Plan[] = [
    {
        plan_id: 1045788175600200200,
        plan_name: 'Plan 1',
        plan_description: 'This is Plan 1 description',
        type: 'myCOI_Internal',
        is_admin: true,
        price: 1000,
        expires: '2023-06-15T13:45:30',
        created: '2010-04-15T13:14:30',
        created_by: 1045288155600200200,
        updated: '2010-06-15T13:23:30',
        updated_by: 1045288155600200200,
        is_deleted: false
    },
    {
        plan_id: 1045788175600200200,
        plan_name: 'Plan AB',
        plan_description: 'This is Plan 1 description',
        type: 'Clients',
        is_admin: true,
        price: 1000,
        expires: '2023-06-15T13:45:30',
        created: '2010-02-15T12:12:30',
        created_by: 1045288155600200200,
        updated: '2010-02-15T12:22:30',
        updated_by: 1045288155600200200,
        is_deleted: false
    }
];

export default featureList;
