// PopularCard.js
import React, { useState } from "react";
import { Card, Grid, Rating } from "@mui/material";
import "./style.css"; // Import your CSS file
import BAButton from "../../atoms/button";
// import ScrollDialog from "../../atoms/dialog";

export default function PopularCard(props) {
  // const [open, setOpen] = React.useState(false);
  // const [scroll, setScroll] = React.useState("paper");

  // const handleClickOpen = (scrollType, ind) => () => {
  //   setOpen(true);
  //   setScroll(scrollType);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const { imgproduct, name } = props;

  return (
    <Grid item md={2} sm={6} xs={12} className="mainContainer popularCards">
      <Card className="popular-card">
        <Grid container>
          <Grid item xs={12} style={{ minHeight: "120px" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <img width="170px" src={imgproduct[0]} alt="Product" />
            </div>
            <button
              // onClick={handleClickOpen("paper")}
              style={{ backgroundColor: "#192a3e" }}
              className="quick-view-button Poppins-Medium"
            >
              Quick View
            </button>
          </Grid>
        </Grid>
      </Card>
      <Grid container className="mt-1">
        <Grid item xs={12}>
          <div className="container">
            <p className="text text-primary Poppins-Medium">{name}</p>
          </div>
          <Rating readOnly value={4} />
        </Grid>
      </Grid>
      {/* <ScrollDialog
        // indexNo={index}
        img={imgproduct}
        name={name}
        setOpen={setOpen}
        open={open}
        handleClose={handleClose}
      /> */}
      <div>{/* <ScrollDialog */}</div>
      <div></div>
    </Grid>
  );
}
