// import { Box, Grid } from "@mui/material";
// import banner from "../../../assets/banner.jpeg";
// export default function HeroSection() {
//   return (
//     <Box>
//       <Grid
//         style={{ minHeight: "400px", backgroundColor: "#F7F7F7" }}
//         className="mb-5"
//         container
//       >
//         <Grid item xs={12}>
//           <img src={banner} height="100%" width="100%" alt="" />
//         </Grid>
//         {/* <Grid item md={8} xs={12} display="flex" justifyContent="center"> */}
//         {/* <h2 className="fs-17 Poppins-Medium">UP TO 50% OFF</h2> */}
//         {/* </Grid> */}
//       </Grid>
//     </Box>
//   );
// }
import { Box, Grid } from "@mui/material";
import "./style.css"; // Import a CSS file for styling
import BannerSlider from "../../atoms/slider";

export default function HeroSection() {
  return (
    <Box className="mainContainer">
      <div style={{ margin: "20px 0px" }}>
        <Grid container>
          <Grid item xs={12}>
            {/* <div> */}
            <BannerSlider />
            {/* </div> */}
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
