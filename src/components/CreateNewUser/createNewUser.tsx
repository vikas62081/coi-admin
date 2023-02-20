import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { DynamicFormBuilder } from "./create";

export type TuserProps = {
  open: boolean;
  handleClose: () => void;
  isEdit?: boolean;
  onSubmit: (values: any) => void;
  formConfig: any;
  initialState: any;
};
function CreateUser({
  open,
  handleClose,
  isEdit = false,
  onSubmit,
  formConfig,
  initialState,
}: TuserProps) {
  return (
    <div>
      <Drawer
        anchor="right"
        variant="temporary"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#081D35",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ width: 750, padding: 3 }}>
          <Grid container style={{ paddingBottom: 10 }}>
            <Grid item xs={10}>
              <Typography variant="h5">
                {isEdit ? "EDIT RECORD" : "CREATE NEW RECORD"}
              </Typography>
              <Typography variant="caption" gutterBottom>
                SUBHEAD
              </Typography>
            </Grid>
            <Grid item alignContent="end">
              <Button
                variant="text"
                style={{ color: "#fff" }}
                startIcon={<CloseIcon />}
                onClick={handleClose}
              >
                Close
              </Button>
            </Grid>
          </Grid>
          <DynamicFormBuilder
            formConfig={formConfig}
            onSubmit={onSubmit}
            initialState={initialState}
            isEdit={isEdit}
          />
        </Box>
      </Drawer>
    </div>
  );
}

export default CreateUser;
