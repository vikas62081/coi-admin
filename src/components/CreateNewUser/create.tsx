import React, { Fragment, useCallback, useState } from "react";
import Button from "@mui/material/Button";
import {
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Switch,
  SwitchProps,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const DynamicFormBuilder = ({
  formConfig,
  initialState = {},
  onSubmit,
  isEdit = false,
  editActionDisabled = false,
  createActionDisabled = false,
}: any) => {
  const [values, setValues] = useState(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "checkbox")
      setValues({ ...values, [e.target.name]: e.target.checked });
    else setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(values, isEdit);
  };

  const handleReset = useCallback(() => {
    setValues({});
  }, []);
  const hrStyle = {
    width: "202%",
    margin: "16px 0",
    border: "1px #F2F5FA solid",
  };
  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
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
        {formConfig?.map((conf: any, index: number) => (
          <Grid xs={6} item key={conf?.title}>
            {getFormBuilder(conf, values, onChange)}
            {index % 2 === 0 && <hr style={hrStyle} />}
          </Grid>
        ))}
        <Grid container spacing={1}>
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
              disabled={
                (isEdit && editActionDisabled) ||
                (!isEdit && createActionDisabled)
              }
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
              style={{ background: "#0C2744", color: "#ffffff" }}
              type="submit"
              disabled={
                (isEdit && editActionDisabled) ||
                (!isEdit && createActionDisabled)
              }
            >
              {isEdit ? "Save and update" : "Create new record"}
            </Button>
          </Grid>
        </Grid>
        {isEdit && editActionDisabled && (
          <Typography variant="caption">*Edit Action not allowed</Typography>
        )}
        {!isEdit && createActionDisabled && (
          <Typography variant="caption">*Create Action not allowed</Typography>
        )}
      </Grid>
    </form>
  );
};
const getFormBuilder = (object: any, values: any, onChange: any) => {
  const { type, title, choices = [] } = object;
  if (type === "text") {
    return (
      <FormControl fullWidth>
        <Typography gutterBottom fontWeight="600">
          {title}
        </Typography>
        <TextField
          id="select"
          placeholder="Enter value..."
          size="small"
          value={values[object?.name] ?? undefined}
          onChange={onChange}
          {...object}
        />
      </FormControl>
    );
  } else if (type == "select") {
    return (
      <FormControl fullWidth>
        <Typography gutterBottom fontWeight="600">
          {title}
        </Typography>
        <TextField
          id="select"
          select
          onChange={onChange}
          value={values[object?.name] ?? "--select--"}
          defaultValue={"--select--"}
          {...object}
        >
          <MenuItem key="select" value="--select--" disabled>
            Select
          </MenuItem>
          {choices?.map((ch: any) => (
            <MenuItem key={ch?.value} value={ch?.value}>
              {ch?.title}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    );
  } else if (type == "switch") {
    return (
      <FormGroup>
        <Typography fontWeight="600">{title}</Typography>
        <FormControlLabel
          style={{ marginLeft: 2, gap: 5, marginTop: 5, marginBottom: 10 }}
          control={
            <IOSSwitch
              name={object?.name}
              checked={values[object?.name] ?? undefined}
              onChange={onChange}
            />
          }
          label={values[object?.name] ? "YES" : "NO"}
          disabled={object?.disabled}
        />
      </FormGroup>
    );
  }
};

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }: any) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
