import { Box, Grid } from "@mui/material";
import logo from "../../../assets/logo.png";
export default function LogoSection() {
  return (
    <Box className="mainContainer ">
      <Grid container className="py-2">
        <Grid item xs={4}>
          <div>
            <img width={100} src={logo} />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
