import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminTable from "../AdminTable/adminTable";
import { userConfig } from "./form_config";
import { columns } from "./column_config";
import {
  getConfigurations,
  createConfiguration,
  updateConfiguration,
  deleteConfiguration,
} from "../../redux/actions/Configuration";
import { AppState } from "../../redux/store";
import { Configuration } from "../../types/models/apps/configuration";
import { Button, Box } from "@mui/material";
import { color } from "@mui/system";
import {
  deleteOneConfiguration,
  newConfiguration,
  updateOneConfiguration,
} from "../../services/db/apps/configuration/configurationList";

const ConfigurationMicroservice = () => {
  const dispatch = useDispatch();

  const { configurationList }: { configurationList: Configuration[] } =
    useSelector<AppState, AppState["configuration"]>(
      ({ configuration }) => configuration,
    );

  useEffect(() => {
    dispatch(getConfigurations());
  }, [dispatch]);

  const onSubmit = (values: any, isEdit: boolean, closeForm: any) => {
    if (isEdit) {
      dispatch(updateConfiguration(values));
    } else {
      dispatch(createConfiguration(values));
    }
    closeForm();
  };
  const onDeleting = ({ configuration_id }: any) => {
    console.log(configuration_id);
    dispatch(deleteConfiguration(configuration_id));
  };
  return (
    <>
      <AdminTable
        rowData={configurationList}
        columnData={columns}
        title="Configuration Microservice"
        onSubmit={onSubmit}
        initialState={{}}
        formConfig={userConfig}
        onDeleting={onDeleting}
      />
    </>
  );
};

export default ConfigurationMicroservice;
