import { Box, Button, Grid, Typography } from "@mui/material";

const DeleteConfirmation = ({ onNegative, onPositive }: any) => {
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
            Delete this record?
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
          <Grid xs={4} item>
            <Button
              variant="contained"
              fullWidth
              size="large"
              color="secondary"
              style={{ background: "#0C2744" }}
              onClick={onNegative}
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
              onClick={onPositive}
            >
              Delete record
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DeleteConfirmation;
