import { Box, Grid, Paper } from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import LoginIcon from "@mui/icons-material/Login";
import "./style.css";
import LanguageIcon from "@mui/icons-material/Language";
import { Phone } from "@mui/icons-material";
export default function Header() {
  return (
    // <Paper style={{ borderRadius: "0px" }} className="pt-1">
    <Box className="head" padding="4px 0px">
      {/* <div className="d-flex justify-content-end px-1">
        <LanguageIcon style={{ color: "#a2a9b1" }} />
        <p
          className="cursorPointer fs-12 text-gray"
          style={{ paddingTop: "5px" }}
        >
          English/EUR
        </p>
      </div> */}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className="px-2"
      >
        <Grid md={6} xs={12} className="my-1">
          <div className="d-flex align-items-center availablity">
            <p
              style={{ padding: "4px 0px 0px 0px", fontWeight: "bold" }}
              className="fs-12 text-primary"
            >
              Premium Quality Veterinary Equipment & Horse Gear
              {/* Goods available on stock shipped within 3 business days */}
            </p>
          </div>
        </Grid>
        <Grid md={6} xs={12} className="my-1">
          <Grid container>
            <Grid xs={12}>
              <div className="d-flex align-items-center contactus">
                <div className="d-flex px-1">
                  <Phone fontSize="16px" style={{ color: "#192a3e" }} />
                  <p className="cursorPointer fs-12 text-primary">
                    +44 744 512 2464
                  </p>
                </div>
                <div className="d-flex px-1">
                  <LanguageIcon
                    fontSize="18px"
                    style={{ color: "#192a3e", paddingRight: "5px" }}
                  />
                  <p className="cursorPointer fs-12 text-primary">
                    English/EUR
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    // </Paper>
  );
}
