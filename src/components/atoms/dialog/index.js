// import React, { useEffect, useRef } from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import {
//   popularProducts,
//   productDetails,
// } from "../../../config/utils/products";
// import { Grid } from "@mui/material";

// export default function ScrollDialog(props) {
//   const { handleClose, open, index } = props;

//   const handleCancel = () => {
//     // Perform any additional actions if needed
//     handleClose(); // Close the modal by calling the parent's handleClose function
//   };

//   const descriptionElementRef = useRef(null);

//   useEffect(() => {
//     if (open) {
//       const { current: descriptionElement } = descriptionElementRef;
//       if (descriptionElement !== null) {
//         descriptionElement.focus();
//       }
//     }
//   }, [open]);
//   const { img, name } = props;
//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       scroll={"paper"}
//       aria-labelledby="scroll-dialog-title"
//       aria-describedby="scroll-dialog-description"
//     >
//       <DialogTitle
//         style={{
//           fontSize: "20px",
//           fontFamily: "Poppins-SemiBold",
//           color: "#192a3e",
//         }}
//         id="scroll-dialog-title"
//       >
//         Product Details
//       </DialogTitle>
//       <DialogContent dividers={"paper" === "paper"}>
//         <DialogContentText
//           id="scroll-dialog-description"
//           ref={descriptionElementRef}
//           tabIndex={-1}
//         >
//           {/* Your content here */}
//           <Grid container alignItems="center">
//             <Grid md={6} xs={12}>
//               <div className="d-flex justify-content-center mb-1 p1">
//                 <img width="100%" src={img[1]} />
//               </div>
//             </Grid>
//             <Grid md={6} xs={12}>
//               <h2 className="p1">{name}</h2>
//               <p className="p1">
//                 {/* {elem?.disscription[2]?.MedicationAndSupplementDelivery} */}
//               </p>
//             </Grid>
//           </Grid>
//           {/* {popularProducts.map((elem, i) => {
//             return (
//               <>
//                 {i == index ? (
//                   <Grid container alignItems="center">
//                     <Grid xs={6}>
//                       <div className="d-flex justify-content-center mb-1 p1">
//                         <img width="100%" src={elem?.img[0]} />
//                       </div>
//                     </Grid>
//                     <Grid xs={6}>
//                       <h2 className="p1">{elem?.name}</h2>
//                       <p className="p1">
//                         {elem?.disscription[2]?.MedicationAndSupplementDelivery}
//                       </p>
//                     </Grid>
//                   </Grid>
//                 ) : (
//                   ""
//                 )}
//               </>
//             );
//           })} */}
//         </DialogContentText>
//       </DialogContent>
//       <DialogActions>
//         <Button
//           onClick={handleCancel}
//           style={{ fontFamily: "Poppins-SemiBold", fontSize: "16px" }}
//           className="Poppins-SemiBold text-primary"
//         >
//           Cancel
//         </Button>
//         <Button
//           onClick={handleClose}
//           style={{ fontFamily: "Poppins-SemiBold", fontSize: "16px" }}
//           className="Poppins-SemiBold text-primary"
//         >
//           Add to Cart
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider, Grid, Rating, useScrollTrigger } from "@mui/material";
import Quantity from "../quantity";
import imgmine from "../../../assets/bestSellers/Hanging/hanging.png";
import BAButton from "../button";
import { ArrowForward } from "@mui/icons-material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export default function BAScrollDialog(props) {
  const {
    productName,
    imgArr,
    prodPrice,
    prodCode,
    imgsign,
    prodDisc,
    stock,
    product_id,
  } = props;
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [count, setCount] = React.useState(0);
  const [imgIndex, setImgIndex] = React.useState(0);
  const navigate = useNavigate();

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  console.log(imgArr, "ALLARRAY");

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        fullWidth
        size="large"
        style={{
          fontFamily: "Poppins-SemiBold",
          fontSize: "14px",
          padding: "5px",
        }}
        onClick={handleClickOpen("paper")}
      >
        Quick View
      </Button>
      {/* <Button onClick={handleClickOpen("paper")}>scroll=paper</Button> */}
      {/* <Button onClick={handleClickOpen("body")}>scroll=body</Button> */}
      <Dialog
        maxWidth="md"
        fullWidth={true}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {/* <Grid container>
          <Grid item sx={6}>
            <div style={{ height: "500px" }}>
              <img src="" alt="" />
            </div>
          </Grid>
          <Grid item sx={6}>
            <div>
              <p>Product Name</p>
            </div>
          </Grid>
        </Grid> */}
        <div style={{ border: "2px solid #192a3e" }}>
          <DialogTitle id="scroll-dialog-title">
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <Grid container>
                <Grid xs={5}>
                  <div
                    className="d-flex align-items-center"
                    style={{ height: "100%" }}
                  >
                    <p
                      style={{
                        fontFamily: "Poppins-Semibold",
                        cursor: "pointer",
                        padding: "0px 5px",
                      }}
                      onClick={() => {
                        if (imgIndex > 0) {
                          setImgIndex(imgIndex - 1);
                        }
                      }}
                    >
                      <NavigateNextIcon />
                    </p>
                    <div style={{ width: "300px" }}>
                      <img
                        src={`https://vetawan.vercel.app/${imgsign}`}
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <p
                      style={{
                        fontFamily: "Poppins-Semibold",
                        cursor: "pointer",
                        fontSize: "20px",
                        padding: "0px 5px",
                      }}
                      onClick={() => {
                        setImgIndex(imgIndex + 1);
                      }}
                    >
                      <NavigateBefore />
                    </p>
                  </div>
                  <Grid container>
                    <Grid xs={2}>
                      {/* <div style={{ height: "30px", width: "30px" }}>
                      <img src={imgmine} width="100%" height="100%" />
                    </div> */}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={7}>
                  <div className="p1">
                    <p className="text-primary fs-22 Poppins-SemiBold">
                      {productName}
                    </p>
                    <p className="text-primary fs-14">{prodDisc}</p>
                    <p className="text-primary fs-14">
                      Product Code: {prodCode}
                    </p>
                    <h2 className="text-primary">$ {prodPrice}</h2>
                    <div>
                      <Rating readOnly value={5} />
                    </div>
                    <div style={{ margin: "20px 0px 10px 0px" }}>
                      <Divider />
                    </div>

                    <div>
                      <Grid container>
                        <p className="fs-16 text-primary Poppins-Medium">
                          Variant
                        </p>
                        <Grid xs={12} className="mt-1">
                          <Grid container>
                            <Grid xs={2}>
                              <div style={{ padding: "0px 10px 0px 0px" }}>
                                <div
                                  style={{
                                    border: "1px solid gray",
                                    cursor: "pointer",
                                  }}
                                >
                                  <p className="fs-12 text-center">20ml</p>
                                </div>
                              </div>
                            </Grid>
                            <Grid xs={2}>
                              <div style={{ padding: "0px 10px 0px 0px" }}>
                                <div
                                  style={{
                                    border: "1px solid gray",
                                    cursor: "pointer",
                                  }}
                                >
                                  <p className="fs-12 text-center">20ml</p>
                                </div>
                              </div>
                            </Grid>
                            <Grid xs={2}>
                              <div style={{ padding: "0px 10px 0px 0px" }}>
                                <div
                                  style={{
                                    border: "1px solid gray",
                                    cursor: "pointer",
                                  }}
                                >
                                  <p className="fs-12 text-center">20ml</p>
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>

                    {/* <div className="my-1">
                    <Divider />
                  </div> */}
                    {/* <div>
                    <Grid container>
                      <p className="fs-16 text-primary Poppins-Medium">
                        Quantity
                      </p>
                      <Grid xs={12} className="mt-1"></Grid>
                    </Grid>
                  </div> */}
                    <div className="mt-1">
                      <Divider />
                    </div>
                    <div className="mt-2">
                      <Grid container justifyContent="end" alignItems="center">
                        <Grid xs={6}>
                          <p className="fs-16 text-primary Poppins-Medium">
                            Quantity
                          </p>
                          <Grid container>
                            <div className="d-flex align-items-center">
                              <p
                                onClick={() => {
                                  if (count > 0) {
                                    setCount(count - 1);
                                  }
                                }}
                                className="cursorPointer fs-18 text-primary"
                              >
                                -
                              </p>
                              <p
                                style={{ width: "50px" }}
                                className="mx-1 text-primary Poppins-SemiBold text-center"
                              >
                                {count}
                              </p>
                              <p
                                onClick={() => {
                                  if (count < stock) {
                                    setCount(count + 1);
                                  }
                                }}
                                className="cursorPointer fs-18 text-primary"
                              >
                                +
                              </p>
                            </div>
                          </Grid>
                        </Grid>
                        <Grid xs={6}>
                          <BAButton fontSize="12px" value="Add to cart" />
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Grid>
                <Grid xs={12}>
                  <div
                    className="d-flex justify-content-end align-items-center cursorPointer"
                    style={{ padding: "15px 10px 0px 10px" }}
                  >
                    <p
                      onClick={() => {
                        navigate(`/details/${product_id}`);
                        window.location.reload();
                      }}
                      className="text-primary fs-12"
                      style={{ paddingRight: "5px" }}
                    >
                      View all details
                    </p>
                    <ArrowForward style={{ fontSize: "12px" }} />
                  </div>
                </Grid>
              </Grid>

              {/* {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")} */}
            </DialogContentText>
          </DialogContent>
        </div>
        {/* <DialogActions>
          <Button
            style={{ fontFamily: "Poppins-Semibold" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            style={{ fontFamily: "Poppins-Semibold" }}
            onClick={handleClose}
          >
            Add to Cart
          </Button>
        </DialogActions> */}
      </Dialog>
    </React.Fragment>
  );
}
