import { Box, Grid, Paper } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CategoryButton from "../../atoms/categoryButton";
import "./style.css";
import { ArrowRight } from "@mui/icons-material";
import { useState } from "react";
export default function Navbar() {
  const [isCategory, setIsCategory] = useState(false);
  const [isVet, setIsVet] = useState(false);

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 2 }}>
      <Box className="bg-dark">
        <Box className="mainContainer">
          <Grid
            container
            className="bg-dark "
            alignItems="start"
            justifyContent="start"
          >
            <Grid className="d-none" item md={3}>
              <div
                onMouseOver={() => {
                  setIsCategory(true);
                  setIsVet(!isVet);
                }}
                // onMouseLeave={() => setIsCategory(false)}
                className="d-flex text-light bg-primary p2 cursorPointer"
              >
                <MenuIcon />
                <p className="Poppins-SemiBold fs-18 ps-1">CATEGORIES</p>
              </div>
            </Grid>
            <Grid item xl={1}>
              <div className="d-flex text-light p2 cursorPointer ">
                <p className="Poppins-SemiBold fs-18">Home</p>
              </div>
            </Grid>
            <Grid item xl={1}>
              <div className="d-flex text-light p2 cursorPointer ">
                <p className="Poppins-SemiBold fs-18">Product</p>
              </div>
            </Grid>
            <Grid item xl={1}>
              <div className="d-flex text-light p2 cursorPointer ">
                <p className="Poppins-SemiBold fs-18">Shop</p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* {isCategory ? ( */}
      <Grid className="mainContainer" container>
        {isCategory ? (
          <Grid id="categoryDiv" item xs={3}>
            <Paper style={{ borderRadius: "0px" }}>
              <div
                onMouseOver={() => {
                  setIsVet(true);
                }}
                onMouseLeave={() => setIsVet(false)}
                // onMouseLeave={() => setIsVet(false)}
                className="d-flex align-items-center justify-content-between p2"
              >
                <p>Vet quip naming</p>
                <ArrowRight />
              </div>
              <div className="d-flex align-items-center justify-content-between p2">
                <p>Flex Material</p>
                <ArrowRight />
              </div>
            </Paper>
          </Grid>
        ) : null}
        {isVet ? (
          <Grid item xs={3}>
            <Paper style={{ borderRadius: "0px" }}>
              <div className="d-flex align-items-center justify-content-between p2">
                <p>Syringes - Spritzen</p>
              </div>
              <div className="d-flex align-items-center justify-content-between p2">
                <p>Feeding Drenchers - Eingabespritze</p>
              </div>
              <div className="d-flex align-items-center justify-content-between p2">
                <p>Vaccinators - Impfstoff Spritze</p>
              </div>
              <div className="d-flex align-items-center justify-content-between p2">
                <p>Bolus Applicator - Bolus Applikator </p>
              </div>
              <div className="d-flex align-items-center justify-content-between p2">
                <p>Trocar and Canola - Trokar und Kanüle</p>
              </div>
              <div className="d-flex align-items-center justify-content-between p2">
                <p>Assisted Calving Tools - Geburtshilfe Instrumente</p>
              </div>
              <div className="d-flex align-items-center justify-content-between p2">
                <p>Mastitis Instruments - Mastitis-Instrumente</p>
              </div>
              <div className="d-flex align-items-center justify-content-between p2">
                <p>Bull Holding - Viehbändigung und -anbindung</p>
              </div>
            </Paper>
          </Grid>
        ) : null}

        {/* <Grid item xs={3}>
          <Paper style={{ borderRadius: "0px" }}>
            <div className="d-flex align-items-center justify-content-between p2">
              <p>Vet quip naming</p>
              <ArrowRight />
            </div>
            <div className="d-flex align-items-center justify-content-between p2">
              <p>Flex Material</p>
              <ArrowRight />
            </div>
          </Paper>
        </Grid> */}
      </Grid>
      {/* ) : null} */}
    </div>
  );
}
