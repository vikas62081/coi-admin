import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DynamicFormBuilder } from "./create";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import DeleteConfirmation from "../DeleteConfirmation";
export type TuserProps = {
  open: boolean;
  handleClose: () => void;
  isEdit?: boolean;
  onSubmit: (values: any, isEdit: boolean) => void;
  formConfig: any;
  initialState: any;
  handleDelete: (data: any) => void;
  showDeleteModal: boolean;
  onDeleteModalSubmit: () => void;
  onDeleteModalCancel: () => void;
};
function CreateUser({
  open,
  handleClose,
  handleDelete,
  isEdit = false,
  onSubmit,
  formConfig,
  initialState,
  showDeleteModal,
  onDeleteModalSubmit,
  onDeleteModalCancel,
}: TuserProps) {
  const { created, updated } = initialState;
  const getFormHeader = (title = "CREATED BY", timeStamp: string) => {
    return (
      <>
        <Typography variant="caption" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="caption">Empower.Service.Identity</Typography>
        <Typography variant="caption" fontWeight={100}>
          {timeStamp}
        </Typography>
      </>
    );
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
          <Grid container style={{ marginBottom: isEdit ? 5 : 20 }}>
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

          {isEdit && (
            <Grid container style={{ marginBottom: 20 }}>
              <Grid item xs={9}>
                <Grid
                  container
                  xs={9}
                  direction="row"
                  columnSpacing={1}
                  style={{
                    background: "#C6E0F6",
                    color: "#000",
                    borderRadius: 4,
                    padding: 8,
                  }}
                >
                  <Grid sm={6} item container direction="column">
                    {getFormHeader("CREATED BY", created)}
                    <Divider orientation="vertical" />
                  </Grid>

                  <Grid sm={6} item container direction="column">
                    {getFormHeader("UPDATED BY", updated)}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item alignContent="end">
                {!showDeleteModal && (
                  <Button
                    variant="contained"
                    color="warning"
                    style={{ color: "#000", backgroundColor: "#F79577" }}
                    startIcon={<DeleteTwoToneIcon />}
                    onClick={() => handleDelete(initialState)}
                  >
                    Delete record
                  </Button>
                )}
              </Grid>
            </Grid>
          )}
          {showDeleteModal ? (
            <DeleteConfirmation
              onNegative={onDeleteModalCancel}
              onPositive={onDeleteModalSubmit}
            />
          ) : (
            <DynamicFormBuilder
              formConfig={formConfig}
              onSubmit={onSubmit}
              initialState={initialState}
              isEdit={isEdit}
            />
          )}
        </Box>
      </Drawer>
    </div>
  );
}

export default CreateUser;
