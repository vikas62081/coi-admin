import AdminTable from "../AdminTable/adminTable";
import React, { useState, useEffect } from "react";
import jwtAxios from "../../services/auth/jwt-auth";
import { Tenant } from "../../types/models/apps/tenant";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import {
  createTenant,
  deleteTenant,
  getTenants,
  updateTenant,
} from "../../redux/actions/Tenant";
import {
  deleteOneTenant,
  newTenant,
  updateOneTenant,
} from "../../services/db/apps/tenant/tenantList";
import { Box, Button } from "@mui/material";

const userConfig = [
  {
    title: "Tenant",
    name: "name",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Windows by Anderson", value: "Windows by Anderson" },
      { title: "Two", value: 2 },
    ],
  },
  {
    title: "Type",
    name: "tenant_type",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Nickname",
    name: "identifier",
    type: "text",
    required: true,
    placeholder: "Enter nickname",
  },
  {
    title: "Configuration Connection",
    name: "configuration_connection_strings",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Language Name",
    name: "language_code",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Time Zone",
    name: "time_zone_id",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Theme Name",
    name: "theme_id",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Central Client's ID",
    name: "legacy_id",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Enterprise Parent Tenant",
    name: "parent_id",
    type: "select",
    required: true,
    size: "small",
    choices: [
      { title: "Option1", value: 1 },
      { title: "Option2", value: 2 },
    ],
  },
  {
    title: "Deleted",
    name: "is_deleted",
    type: "switch",
    required: false,
  },
];

const columns = [
  {
    headerName: "Tenant",
    field: "name",
  },
  { headerName: "Type", field: "tenant_type" },
  { headerName: "Nikename", field: "identifier" },
  {
    headerName: "Configuration Connection",
    field: "configuration_connection_strings",
  },
  { headerName: "Language name", field: "language_code" },
  { headerName: "Time zone", field: "time_zone_id" },
  { headerName: "Theme name", field: "theme_id" },
  { headerName: "Central client's id", field: "legacy_id" },
  { headerName: "Enterprise parent tenant", field: "parent_id" },
  { headerName: "Created", field: "created" },
  { headerName: "Created By", field: "created_by" },
  { headerName: "Updated", field: "updated" },
  { headerName: "Updated By", field: "updated_by" },
  { headerName: "Deleted", field: "is_deleted" },
];
const TenantManagement = () => {
  const dispatch = useDispatch();

  const { tenantList }: { tenantList: Tenant[] } = useSelector<
    AppState,
    AppState["tenant"]
  >(({ tenant }) => tenant);

  useEffect(() => {
    dispatch(getTenants());
  }, [dispatch]);

  const onSubmit = (values: any, isEdit: boolean, closeForm: any) => {
    if (isEdit) {
      dispatch(updateTenant(values));
    } else {
      dispatch(createTenant(values));
    }
    closeForm();
  };
  const onDelete = ({ tenant_id }: any) => {
    dispatch(deleteTenant(tenant_id));
  };
  return (
    <>
      <AdminTable
        rowData={tenantList}
        columnData={columns}
        title="Tenant Management"
        onSubmit={onSubmit}
        // initialState={initialState}
        formConfig={userConfig}
        onDelete={onDelete}
      />
    </>
  );
};

export default TenantManagement;
