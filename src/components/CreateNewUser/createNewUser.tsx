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

const initialState = {
  tenant: "select",
  provider: "select",
  name: "select",
  defaultValue: "",
  description: "",
  encrypted: false,
  visibilityToClient: false,
  system: false,
};
export type TuserProps = {
  open: boolean;
  handleClose: () => void;
};

function CreateUser({ open, handleClose }: TuserProps) {
  const [user, setUser] = useState(initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "checkbox")
      setUser({ ...user, [e.target.name]: e.target.checked });
    else setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(user);
    handleClose();
  };
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
              <Typography variant="h5">CREATE NEW RECORD</Typography>
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
          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={1}
              style={{
                background: "#fff",
                padding: "30px 10px",
                borderRadius: 8,
                color: "#000",
              }}
            >
              <Grid xs={4} item>
                <FormControl fullWidth>
                  <Typography gutterBottom>Tenant</Typography>

                  <TextField
                    id="select"
                    name="tenant"
                    select
                    onChange={handleChange}
                    value={user.tenant}
                    size="small"
                    required
                  >
                    <MenuItem value="select">Select</MenuItem>
                    <MenuItem value="10">Ten</MenuItem>
                    <MenuItem value="20">Twenty</MenuItem>
                  </TextField>
                </FormControl>
              </Grid>
              <Grid xs={4} item>
                <FormControl fullWidth>
                  <Typography gutterBottom>Provider</Typography>

                  <TextField
                    id="provider"
                    name="provider"
                    select
                    onChange={handleChange}
                    value={user.provider}
                    size="small"
                    required
                  >
                    <MenuItem value="select">Select</MenuItem>
                    <MenuItem value="10">Ten</MenuItem>
                    <MenuItem value="20">Twenty</MenuItem>
                  </TextField>
                </FormControl>
              </Grid>
              <Grid xs={4} item>
                <FormControl fullWidth>
                  <Typography gutterBottom>Name</Typography>

                  <TextField
                    id="name"
                    name="name"
                    select
                    onChange={handleChange}
                    value={user.name}
                    size="small"
                    required
                  >
                    <MenuItem value="select">Select</MenuItem>
                    <MenuItem value="10">Ten</MenuItem>
                    <MenuItem value="20">Twenty</MenuItem>
                  </TextField>
                </FormControl>
              </Grid>
              <Grid xs={6} item>
                <FormControl fullWidth>
                  <Typography gutterBottom>Default value</Typography>

                  <TextField
                    id="select"
                    placeholder="Enter default value..."
                    name="defaultValue"
                    value={user.defaultValue}
                    onChange={handleChange}
                    size="small"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid xs={6} item>
                <FormControl fullWidth>
                  <Typography gutterBottom>Description</Typography>
                  <TextField
                    id="select"
                    placeholder="Enter despription..."
                    name="description"
                    value={user.description}
                    onChange={handleChange}
                    size="small"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid xs={4} item>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        name="encrypted"
                        checked={user.encrypted}
                        onChange={handleChange}
                      />
                    }
                    label="Encrypted"
                  />
                </FormGroup>
              </Grid>
              <Grid xs={4} item>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={user.visibilityToClient}
                        name="visibilityToClient"
                        onChange={handleChange}
                      />
                    }
                    label="Visible to client"
                  />
                </FormGroup>
              </Grid>
              <Grid xs={4} item>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={user.system}
                        name="system"
                        onChange={handleChange}
                      />
                    }
                    label="System"
                  />
                </FormGroup>
              </Grid>
              <Grid xs={6} item>
                <Button
                  variant="outlined"
                  fullWidth
                  size="large"
                  color="secondary"
                  type="reset"
                  style={{
                    color: "#0C2744",
                    border: "none",
                    backgroundColor: "#F2F5FA",
                  }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid xs={6} item>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  color="secondary"
                  style={{ background: "#0C2744" }}
                  type="submit"
                >
                  Create new record
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Drawer>
    </div>
  );
}

export default CreateUser;
