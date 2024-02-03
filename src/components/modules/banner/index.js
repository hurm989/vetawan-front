import { Box, Grid } from "@mui/material";
import { bannerData } from "../../../config/utils/utils";
import "./style.css";
export default function Banner() {
  return (
    <Box
      className="bannerColor"
      style={{ marginTop: "50px", marginBottom: "10px" }}
    >
      <Grid
        container
        className="mainContainer d-flex align-items-center  py-2"
        style={{ minHeight: "150px" }}
      >
        {bannerData.map((elem, index) => {
          return (
            <Grid key={index} item className="px-2 " sm={6} xs={12} md={3}>
              <Grid
                container
                className="margin-banner"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12} md={2}>
                  <div className="d-flex justify-content-center">
                    <span>{elem?.icon}</span>
                  </div>
                </Grid>
                <Grid item xs={12} md={10}>
                  {/* <div> */}
                  <div className="d-flex flex-column align-center-banner">
                    <h3 className="fs-14">{elem?.title}</h3>
                    <p className="fs-14 text-gray">{elem?.disc}</p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
