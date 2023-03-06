import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";

interface DeleteConfirmationProps {
  onCancel: () => void;
  onSubmit: () => void;
  onViewRecord: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  onCancel,
  onSubmit,
  onViewRecord,
}) => {
  const [isRecordDeleted, setIsRecordDeleted] = useState(false);
  const handleSubmit = () => {
    setIsRecordDeleted(true);
    onSubmit();
  };
  return (
    <Box height="70vh">
      <Grid
        direction="column"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={"100%"}
        container
      >
        <Grid item>
          <Typography variant="h5" fontWeight={600}>
            {isRecordDeleted
              ? "Record has been deleted."
              : "Delete this record?"}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            fontWeight={700}
            gutterBottom
            color={"#B6BEC7"}
          >
            Description of ramifications of deleting record.
          </Typography>
        </Grid>

        <Grid container item spacing={5} justifyContent="center" paddingTop={2}>
          {isRecordDeleted ? (
            <>
              <Grid xs={7} item>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  color="secondary"
                  style={{ background: "#0C2744" }}
                  onClick={onViewRecord}
                >
                  View record
                </Button>
              </Grid>
            </>
          ) : (
            <>
              <Grid xs={4} item>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  color="secondary"
                  style={{ background: "#0C2744" }}
                  onClick={onCancel}
                >
                  Cancel
                </Button>
              </Grid>

              <Grid xs={4} item>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  color="secondary"
                  style={{ background: "#FAB49E", color: "#0C2744" }}
                  onClick={handleSubmit}
                >
                  Delete record
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DeleteConfirmation;
