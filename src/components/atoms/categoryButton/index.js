// import * as React from "react";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// export default function CategoryButton() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         id="basic-button"
//         aria-controls={open ? "basic-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//       >
//         Dashboard
//       </Button>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           "aria-labelledby": "basic-button",
//         }}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";

export default function CategoryButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box sx={{ width: 500 }}>
      {/* <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={handleClick("top-start")}>top-start</Button>
          <Button onClick={handleClick("top")}>top</Button>
          <Button onClick={handleClick("top-end")}>top-end</Button>
        </Grid>
      </Grid> */}
      {/* <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Button onClick={handleClick("left-start")}>left-start</Button>
          <br />
          <Button onClick={handleClick("left")}>left</Button>
          <br />
          <Button onClick={handleClick("left-end")}>left-end</Button>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            <Button onClick={handleClick("right-start")}>right-start</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClick("right")}>right</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClick("right-end")}>right-end</Button>
          </Grid>
        </Grid>
      </Grid> */}
      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={handleClick("bottom-start")}>bottom-start</Button>
          {/* <Button onClick={handleClick("bottom")}>bottom</Button>
          <Button onClick={handleClick("bottom-end")}>bottom-end</Button> */}
        </Grid>
      </Grid>
      <Popper
        style={{ zIndex: 2 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper style={{ borderRadius: "0px" }}>
              <Typography sx={{ p: 1 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
}
