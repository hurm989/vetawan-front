// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
import { Chip, Grid, IconButton, Rating } from "@mui/material";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import "./style.css";
// export default function ProductCards(props) {
//   const { headingTwo, headingOne, img } = props;
//   const [isHovered, setIsHovered] = React.useState(false);
//   const theme = useTheme();

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <Grid item md={4} sm={6} xs={12}>
//       <Card
//         sx={{
//           display: "flex",
//           position: "relative",
//           backgroundColor: "#F7F7F7",
//         }}
//         className="cardHeight"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <Grid
//           item
//           xs={6}
//           className="px-1 d-flex justify-content-center flex-column"
//           style={{
//             width: "100%",
//             objectFit: "contain",
//           }}
//         >
//           <CardMedia
//             className="blur-image cursorPointer"
//             component="img"
//             sx={{
//               width: "100%",
//               transition: "filter 0.3s",
//               "&:hover": {
//                 filter: "blur(2px)",
//               },
//               backgroundColor: "whitesmoke",
//             }}
//             // image="https://wpthemesgrid.com/themes/free/eshop/images/list/shop-list5.jpg"
//             image={img}
//             alt={headingOne}
//           />
//           <IconButton
//             className="add-to-cart-icon"
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "25%",
//               transform: "translate(-50%, -50%)",
//               opacity: isHovered ? 1 : 0,
//               transition: "opacity 0.3s",
//               zIndex: 1,
//               backgroundColor: "#008ace",
//               color: "white",
//             }}
//           >
//             <AddShoppingCartIcon />
//           </IconButton>
//         </Grid>
//         <Grid
//           item
//           xs={6}
//           className="px-1 d-flex justify-content-center flex-column"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             flexDirection: "column",
//           }}
//         >
//           <h4 className="fs-14 text-gray">
//             {headingOne} <br />
//           </h4>

//           <div className="my-1">
//             <Chip
//               // label={headingTwo}
//               label="$40"
//               color="primary"
//               style={{ padding: "0px 10px", color: "white" }}
//             />
//           </div>
//         </Grid>
//       </Card>
//     </Grid>
//   );
// }

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BAButton from "../../atoms/button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BAScrollDialog from "../../atoms/dialog";
import "./style.css";
import { Box } from "@mui/system";
export default function ProductCards(props) {
  const {
    productName,
    description,
    oldPrice,
    newPrice,
    image,
    imgArr,
    prodCode,
    rating,
    stock,
    product_id,
  } = props;
  return (
    <Grid item md={3}>
      <Box className="card">
        <Grid container className="p1">
          <Grid xs={12}>
            <div
              style={{ minHeight: "60px" }}
              // style={{
              //   whiteSpace: "nowrap",
              //   width: "100%",
              //   overflow: "hidden",
              //   textover: "ellipsis",
              // }}
              className="bgRow d-flex justify-content-center align-items-center h-100"
            >
              <p
                style={{ fontSize: "0.9rem" }}
                className="text-center Poppins-SemiBold text-primary px-2"
              >
                {productName}
                {/* {productName?.length > 19
                  ? productName?.slice(0, 18) + "..."
                  : productName} */}
              </p>
              {/* <p className="text-center fs-12 Poppins-SemiBold">Code</p> */}
            </div>
          </Grid>
          <Grid xs={12}>
            <div className="bgRow py-1 marginRow">
              <Grid container>
                <Grid item xs={12}>
                  <div style={{ height: "150px" }} className="p1">
                    <img
                      width="100%"
                      height="100%"
                      style={{ objectFit: "contain" }}
                      src={`https://vetawan.vercel.app/${image}`}
                      alt={productName}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div
                    style={{ minHeight: "50px" }}
                    className="px-1 Poppins-Medium text-primary"
                  >
                    <p style={{ fontSize: "0.8rem" }}>
                      {description?.length > 40
                        ? description.slice(0, 60) + "..."
                        : description}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="px-1 Poppins-Medium">
                    <Rating
                      name="read-only"
                      value={rating}
                      readOnly
                      className="mt-1"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="px-1 d-flex align-items-center">
                    <s className="text-gray fs-12">Rs. {oldPrice}</s>
                    <p className="fs-16 ps-2">Rs. {newPrice}</p>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="px-1 mt-1">
                    <BAScrollDialog
                      productName={productName}
                      imgArr={imgArr ?? ""}
                      prodPrice={newPrice}
                      prodCode={prodCode}
                      imgsign={image}
                      prodDisc={description}
                      stock={stock}
                      product_id={product_id}
                    />
                    {/* <Button
                      variant="outlined"
                      fullWidth
                      size="large"
                      style={{
                        fontFamily: "Poppins-SemiBold",
                        fontSize: "14px",
                        padding: "5px",
                      }}
                    >
                      Quick View
                    </Button> */}
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Box>
      <div></div>
    </Grid>
  );
}
