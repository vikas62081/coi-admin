import { Configuration } from "../../../../types/models/apps/configuration";

let configurationList: Configuration[] = [
    {
      "configuration_id": "9630710393924401111",
      "provider_key": "123e4567-e89b-12d3-a456-426655440000",
      "tenant_name" : "Tenant ABC",
      "provider_name": "Empower.Service.Identity",
      "name": "Default time out period",
      "default_value": -1,
      "description": "Default time out period",
      "is_encrypted": false,
      "is_visible_to_client": true,
      "is_system": false,
      "is_deleted": true,
      "created": "2022-08-05 16:32:56 00:00",
      "created_by": "12434e67-e89b-12d3-a456-426655440000",
      "update": "2022-08-05 22:02:15 00:00",
      "updated_by": "856e4567-e89b-12d3-a456-426655440000"
    },
    {
      "configuration_id": "1234710393924402388",
      "provider_key": "1a2e4567-e89b-12d3-a456-426655441234",
      "tenant_name" : "Tenant 123",
      "provider_name": "Empower.Service.Identity",
      "name": "Connection Keys",
      "default_value": -1,
      "description": "Connection Keys",
      "is_encrypted": false,
      "is_visible_to_client": true,
      "is_system": false,
      "is_deleted": true,
      "created": "2022-08-05 16:32:56 00:00",
      "created_by": "43a14e67-e89b-12d3-a456-426655441234",
      "update": "2022-09-01 21:06:15 00:00",
      "updated_by": "1a3e4567-e89b-12d3-a456-426655444123"
    },
    {
      "configuration_id": "1589727490374087121",
      "provider_key": "ca2bad2e-73d6-4dbb-84de-9ab7e4371996",
      "tenant_name" : "Tenant XYZ",
      "provider_name": "Empower.Service.Identity",
      "name": "Secret Passphrase",
      "default_value": -1,
      "description": "Secret Passphrase",
      "is_encrypted": false,
      "is_visible_to_client": true,
      "is_system": false,
      "is_deleted": true,
      "created": "2022-08-05 16:32:56 00:00",
      "created_by": "f3fa21c0-2f93-450c-a84a-8dedf11bba9c",
      "update": "2022-09-12 20:05:15 00:00",
      "updated_by": "b5bb11d4-e45c-4451-97e9-9557bb5cefef"
    }
  ]

export const newConfiguration = {
    "configuration_id": "9630723233924401111",
    "provider_key": "ca2bad2e-73d6-4dbb-84de-9ab7e4371996",
    "tenant_name" : "Tenant Nick",
    "provider_name": "Empower.Service.Identity",
    "name": "Secret Passphrase",
    "default_value": -1,
    "description": "Secret Passphrase",
    "is_encrypted": false,
    "is_visible_to_client": true,
    "is_system": false,
    "is_deleted": true,
    "created": "2022-08-05 16:32:56 00:00",
    "created_by": "f3fa21c0-2f93-450c-a84a-8dedf11bba9c",
    "update": "2022-09-12 20:05:15 00:00",
    "updated_by": "b5bb11d4-e45c-4451-97e9-9557bb5cefef"
};

export const updateOneConfiguration = {
  "configuration_id": "9630710393924401111",
  "provider_key": "123e4567-e89b-12d3-a456-426655440000",
  "tenant_name" : "Tenant SIA",
  "provider_name": "Empower.Service.Identity",
  "name": "Default time out period",
  "default_value": -1,
  "description": "Default time out period",
  "is_encrypted": false,
  "is_visible_to_client": true,
  "is_system": false,
  "is_deleted": true,
  "created": "2022-08-05 16:32:56 00:00",
  "created_by": "12434e67-e89b-12d3-a456-426655440000",
  "update": "2022-08-05 22:02:15 00:00",
  "updated_by": "856e4567-e89b-12d3-a456-426655440000"
};

export const deleteOneConfiguration = "1589727490374087121";

export default configurationList;
