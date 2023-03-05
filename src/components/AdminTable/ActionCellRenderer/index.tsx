import {
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState, useEffect, useRef, useCallback } from "react";
import MoreIcon from "@mui/icons-material/More";
const ITEM_HEIGHT = 48;
import ViewListTwoToneIcon from "@mui/icons-material/ViewListTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

export const useComponentWillMount = (func: any) => {
  const willMount = useRef(true);
  if (willMount.current) {
    func();
  }
  willMount.current = false;
};

// function ActionCellRenderer(props: any) {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const open = Boolean(anchorEl);
//   const handleClick = (event: any) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const [editing, setEditing] = useState(false);
//   const [disabled, setDisabled] = useState(false);

//   // custom hook
//   useComponentWillMount(() => {
//     const editingCells = props.api.getEditingCells();
//     if (editingCells.length !== 0) {
//       setDisabled(true);
//     }
//   });

//   useEffect(() => {
//     props.api.addEventListener("rowEditingStarted", onRowEditingStarted);
//     props.api.addEventListener("rowEditingStopped", onRowEditingStopped);

//     return () => {
//       props.api.removeEventListener("rowEditingStarted", onRowEditingStarted);
//       props.api.removeEventListener("rowEditingStopped", onRowEditingStopped);
//     };
//   }, []);

//   function onRowEditingStarted(params: any) {
//     if (props.node === params.node) {
//       setEditing(true);
//     } else {
//       setDisabled(true);
//     }
//   }

//   function onRowEditingStopped(params: any) {
//     if (props.node === params.node) {
//       if (isEmptyRow(params.data)) {
//         deleteRow(true);
//       } else {
//         setEditing(false);
//       }
//     } else {
//       setDisabled(false);
//     }
//   }

//   function startEditing() {
//     props.api.startEditingCell({
//       rowIndex: props.rowIndex,
//       colKey: props.column.colId,
//     });
//     handleClose();
//   }

//   function stopEditing(bool: boolean) {
//     props.api.stopEditing(bool);
//   }

//   function deleteRow(force = false) {
//     const { data } = props;
//     let confirm = true;
//     debugger;
//     if (!force) {
//       confirm = window.confirm(
//         `are you sure you want to delete this row: ${JSON.stringify(data)})`,
//       );
//     }
//     handleClose();
//     if (confirm) {
//       props.api.updateRowData({ remove: [data] });
//       props.api.refreshCells({ force: true });
//     }
//   }

//   function isEmptyRow(data: any) {
//     const dataCopy = { ...data };
//     delete dataCopy.id;
//     return !Object.values(dataCopy).some((value) => value);
//   }

//   return (
//     <div>
//       {editing ? (
//         <Grid container spacing={1}>
//           <Grid item>
//             <Button
//               variant="contained"
//               onClick={() => stopEditing(false)}
//               disabled={disabled}
//               size="small"
//             >
//               Update
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button
//               variant="outlined"
//               onClick={() => stopEditing(true)}
//               disabled={disabled}
//               size="small"
//             >
//               Cancel
//             </Button>
//           </Grid>
//         </Grid>
//       ) : (
//         <>
//           <IconButton
//             aria-label="more"
//             id="long-button"
//             aria-controls={open ? "long-menu" : undefined}
//             aria-expanded={open ? "true" : undefined}
//             aria-haspopup="true"
//             onClick={handleClick}
//             disabled={disabled}
//           >
//             <MoreIcon />
//           </IconButton>
//           <Menu
//             id="long-menu"
//             MenuListProps={{
//               "aria-labelledby": "long-button",
//             }}
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//             PaperProps={{
//               style: {
//                 maxHeight: ITEM_HEIGHT * 4.5,
//               },
//             }}
//           >
//             <MenuItem onClick={startEditing}>
//               <ListItemIcon>
//                 <EditIcon />
//               </ListItemIcon>
//               <ListItemText>Edit</ListItemText>
//             </MenuItem>

//             <MenuItem onClick={() => deleteRow()}>
//               <ListItemIcon>
//                 <DeleteIcon />
//               </ListItemIcon>
//               <ListItemText>Delete</ListItemText>
//             </MenuItem>
//           </Menu>
//         </>
//       )}
//     </div>
//   );
// }
// export default ActionCellRenderer;

const ActionCellRenderer = (props: any) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { onEditing, onDeleting, data, selected, rowIndex } = props;
  const [showEditButton, setShowEditButton] = useState(false);

  const handleMouseEnter = () => {
    setShowEditButton(true);
  };

  const handleMouseLeave = () => {
    setShowEditButton(false);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleEditing = useCallback(() => {
    onEditing(data);
    handleClose();
  }, []);
  const handleDeleting = useCallback(() => {
    onDeleting(data);
    handleClose();
  }, []);

  // if (rowIndex !== selected) return <></>;

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreIcon className="action-icon" />
      </IconButton>

      <Grid>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          // PaperProps={{
          //   elevation: 0,
          //   sx: {
          //     overflow: "visible",
          //     filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          //     mt: 1.5,
          //     "& .MuiAvatar-root": {
          //       width: 32,
          //       height: 32,
          //       ml: -0.5,
          //       mr: 1,
          //     },
          //     "&:before": {
          //       content: '""',
          //       display: "block",
          //       position: "absolute",
          //       top: 0,
          //       right: 14,
          //       width: 10,
          //       height: 10,
          //       bgcolor: "background.paper",
          //       transform: "translateY(-50%) rotate(45deg)",
          //       zIndex: 0,
          //     },
          //   },
          // }}
          // anchorOrigin={{
          //   vertical: 'top',
          //   horizontal: 'left',
          // }}
          // transformOrigin={{
          //   vertical: 'top',
          //   horizontal: 'left',
          // }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <MenuItem>
            <ListItemText>Actions</ListItemText>
            <MoreIcon />
          </MenuItem>
          <MenuItem onClick={handleEditing}>
            <ListItemIcon>
              <ViewListTwoToneIcon />
            </ListItemIcon>
            <ListItemText>View full record</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleDeleting}>
            <ListItemIcon>
              <DeleteForeverTwoToneIcon />
            </ListItemIcon>
            <ListItemText>Delete Record</ListItemText>
          </MenuItem>
        </Menu>
      </Grid>
    </div>
  );
};
export default ActionCellRenderer;
