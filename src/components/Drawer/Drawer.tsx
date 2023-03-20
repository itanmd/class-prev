import { Drawer, Box, Typography } from "@mui/material";

const transitionDuration = 1000;
export const MuiDrawer = () => {
  return (
    <Drawer
      anchor="right"
      open={true}
      transitionDuration={{
        enter: transitionDuration,
        exit: transitionDuration,
      }}
    >
      <Box
        className="Box"
        p={2}
        width="600px"
        textAlign="center"
        role="presentation"
      >
        <Typography variant="h6" component="div">
          Workout of the day
        </Typography>
      </Box>
    </Drawer>
  );
};
export default MuiDrawer;
