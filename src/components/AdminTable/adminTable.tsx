import {
  Button,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ITEM_HEIGHT = 48;

export const useComponentWillMount = (func: any) => {
  const willMount = useRef(true);
  if (willMount.current) {
    func();
  }
  willMount.current = false;
};

function AdminTable(props: any) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [editing, setEditing] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // custom hook
  useComponentWillMount(() => {
    const editingCells = props.api.getEditingCells();
    if (editingCells.length !== 0) {
      setDisabled(true);
    }
  });

  useEffect(() => {
    props.api.addEventListener("rowEditingStarted", onRowEditingStarted);
    props.api.addEventListener("rowEditingStopped", onRowEditingStopped);

    return () => {
      props.api.removeEventListener("rowEditingStarted", onRowEditingStarted);
      props.api.removeEventListener("rowEditingStopped", onRowEditingStopped);
    };
  }, []);

  function onRowEditingStarted(params: any) {
    if (props.node === params.node) {
      setEditing(true);
    } else {
      setDisabled(true);
    }
  }

  function onRowEditingStopped(params: any) {
    if (props.node === params.node) {
      if (isEmptyRow(params.data)) {
        deleteRow(true);
      } else {
        setEditing(false);
      }
    } else {
      setDisabled(false);
    }
  }

  function startEditing() {
    props.api.startEditingCell({
      rowIndex: props.rowIndex,
      colKey: props.column.colId,
    });
    handleClose();
  }

  function stopEditing(bool: boolean) {
    props.api.stopEditing(bool);
  }

  function deleteRow(force = false) {
    const { data } = props;
    let confirm = true;
    debugger;
    if (!force) {
      confirm = window.confirm(
        `are you sure you want to delete this row: ${JSON.stringify(data)})`,
      );
    }
    handleClose();
    if (confirm) {
      props.api.updateRowData({ remove: [data] });
      props.api.refreshCells({ force: true });
    }
  }

  function isEmptyRow(data: any) {
    const dataCopy = { ...data };
    delete dataCopy.id;
    return !Object.values(dataCopy).some((value) => value);
  }

  return (
    <div>
      {editing ? (
        <Grid container spacing={1}>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => stopEditing(false)}
              disabled={disabled}
              size="small"
            >
              Update
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              onClick={() => stopEditing(true)}
              disabled={disabled}
              size="small"
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      ) : (
        <>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            disabled={disabled}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
              },
            }}
          >
            <MenuItem onClick={startEditing}>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText>Edit</ListItemText>
            </MenuItem>

            <MenuItem onClick={() => deleteRow()}>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText>Delete</ListItemText>
            </MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
}
export default AdminTable;
