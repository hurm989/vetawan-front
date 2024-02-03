// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import ber from "../../modules/header";
// import logo from "../../../assets/logo.png";
// import DropDown from "../dropDown";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import LogoutIcon from "@mui/icons-material/Logout";
// import SearchIcon from "@mui/icons-material/Search";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import "./style.css";
// const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];
// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));
// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));
// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     height: "16px",
//     // border: "1px solid white",
//     // borderRadius: "4px",
//     // [theme.breakpoints.up("md")]: {
//     //   width: "12ch",
//     //   "&:focus": {
//     //     width: "20ch",
//     //   },
//     // },
//   },
// }));
// function DrawerAppBar(props) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} className="p1">
//       <div className="d-flex align-items-center">
//         <div style={{ paddingLeft: "10px" }}>
//           <img src={logo} width="30px" />
//         </div>
//         {/* <Typography variant="h6" className="px-1 Poppins-SemiBold fs-18"> */}
//         <p className="px-1 my-1 Poppins-SemiBold fs-18">Vetawan</p>
//         {/* Vetawan */}
//         {/* </Typography> */}
//       </div>
//       {/* <Divider className="p0" /> */}
//       {/* <List> */}
//       {navItems.map((item) => (
//         <p className="px-1 my-1 Poppins-SemiBold fs-13">{item}</p>
//         // <ListItem key={item} disablePadding>
//         //   <ListItemButton>
//         //     <ListItemText primary={item} />
//         //   </ListItemButton>
//         // </ListItem>
//       ))}
//       {/* </List> */}
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       {/* <Header /> */}
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <AppBar component="nav">
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2, display: { sm: "none" } }}
//             >
//               <MenuIcon />
//             </IconButton>
//             {/* <Typography
//               variant="h6"
//               component="div"
//               sx={{ display: { xs: "none", sm: "block" } }}
//             >
//               <p className="px-1 my-1 Poppins-SemiBold fs-18">Vetawan</p>
//               <img src={logo} alt="" width="60px" />
//             </Typography> */}
//             <Box
//               sx={{ display: { xs: "none", sm: "block", marginLeft: "30px" } }}
//             >
//               <DropDown />
//             </Box>
//             <Box
//               sx={{ display: { xs: "none", sm: "flex", marginLeft: "30px" } }}
//             >
//               {navItems.map((item) => (
//                 <Button
//                   key={item}
//                   sx={{ color: "#fff" }}
//                   style={{
//                     fontFamily: "Poppins-SemiBold",
//                     fontSize: "16px",
//                     margin: "0px 5px",
//                   }}
//                 >
//                   {item}
//                 </Button>
//               ))}
//             </Box>
//             <div style={{ width: "100%" }}>
//               <div className="iconbar d-flex align-items-center">
//                 <div style={{ padding: "0px 10px" }}>
//                   {/* <span onClick={handleClickOpen} className="cursorPointer">
//                     <Search />
//                   </span>
//                   <SearchDialog
//                     open={open}
//                     setOpen={setOpen}
//                     handleClose={handleClose}
//                   /> */}
//                   <Search>
//                     <SearchIconWrapper>
//                       <SearchIcon />
//                     </SearchIconWrapper>
//                     <StyledInputBase
//                       placeholder="Search…"
//                       inputProps={{ "aria-label": "search" }}
//                     />
//                   </Search>
//                 </div>
//                 <div
//                   style={{ padding: "0px 10px" }}
//                   className="d-flex align-items-center"
//                 >
//                   <ShoppingCartIcon
//                     style={{ fontSize: "20px" }}
//                     className="cursorPointer"
//                   />
//                 </div>
//                 <div
//                   className="d-flex align-items-center"
//                   style={{ padding: "0px 10px" }}
//                 >
//                   <LogoutIcon
//                     style={{ fontSize: "20px" }}
//                     className="cursorPointer"
//                   />
//                 </div>
//               </div>
//             </div>
//           </Toolbar>
//         </AppBar>
//         <nav>
//           <Drawer
//             container={container}
//             variant="temporary"
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//             sx={{
//               display: { xs: "block", sm: "none" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </nav>
//         {/* <Box component="main">
//           <Toolbar />
//           <img width="100%" src={banner} alt="" />
//           <Typography>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
//             unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
//             quibusdam, aliquam dolore excepturi quae. Distinctio enim at
//             eligendi perferendis in cum quibusdam sed quae, accusantium et
//             aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus
//             quia corrupti alias distinctio nostrum. Minima ex dolor modi
//             inventore sapiente necessitatibus aliquam fuga et. Sed numquam
//             quibusdam at officia sapiente porro maxime corrupti perspiciatis
//             asperiores, exercitationem eius nostrum consequuntur iure aliquam
//             itaque, assumenda et! Quibusdam temporibus beatae doloremque
//             voluptatum doloribus soluta accusamus porro reprehenderit eos
//             inventore facere, fugit, molestiae ab officiis illo voluptates
//             recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam
//             fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque,
//             eligendi unde aliquid minus quis sit debitis obcaecati error,
//             delectus quo eius exercitationem tempore. Delectus sapiente,
//             provident corporis dolorum quibusdam aut beatae repellendus est
//             labore quisquam praesentium repudiandae non vel laboriosam quo ab
//             perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt
//             commodi nihil corrupti cum non fugiat praesentium doloremque
//             architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore
//             molestiae dicta blanditiis est expedita eius debitis cupiditate
//             porro sed aspernatur quidem, repellat nihil quasi praesentium quia
//             eos, quibusdam provident. Incidunt tempore vel placeat voluptate
//             iure labore, repellendus beatae quia unde est aliquid dolor
//             molestias libero. Reiciendis similique exercitationem consequatur,
//             nobis placeat illo laudantium! Enim perferendis nulla soluta magni
//             error, provident repellat similique cupiditate ipsam, et tempore
//             cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi
//             vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium
//             nulla. Aliquid inventore commodi reprehenderit rerum reiciendis!
//             Quidem alias repudiandae eaque eveniet cumque nihil aliquam in
//             expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur
//             dignissimos numquam at nisi porro a, quaerat rem repellendus.
//             Voluptates perspiciatis, in pariatur impedit, nam facilis libero
//             dolorem dolores sunt inventore perferendis, aut sapiente modi
//             nesciunt.
//           </Typography>
//         </Box> */}
//       </Box>
//     </>
//   );
// }

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default DrawerAppBar;

// import "./style.css";
// import { Grid } from "@mui/material";

// const DrawerAppBar = () => {
//   return (
//     <Grid container style={{ background: "#192a3e", minHeight: "100px" }}>
//       <p className="text-light">aslkdjaslkdjaskldj</p>
//     </Grid>
//   );
// };

// export default DrawerAppBar;

// import React, { useState } from "react";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./style.css";
import BADivider from "../divider";
import { horseGear, syringes } from "../../../config/utils/utils";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [navFlags, setNavFlags] = useState();

  const toggleNav = (e = "home") => {
    console.log(e, "TOGGLE");
    setNavFlags(e);
    setOpenNav(true);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className={`navbar`}>
        <div className="banner mainContainer px-1">
          <p
            style={{ marginRight: "10px", padding: "20px 30px 20px 0px" }}
            className="text-ligh fs-17   cursorPointer py-1 px-3 mobViewNav"
            // onMouseOver={() => toggleNav("syringes")}
            // onMouseLeave={() => {
            //   setOpenNav(false);
            // }}
            onClick={() => navigate("/")}
          >
            Home
          </p>
          {/* <p
            style={{ marginRight: "10px", padding: "20px 30px 20px 0px" }}
            className="text-ligh fs-17 cursorPointer py-1 px-3"
            onMouseOver={() => toggleNav("syringes")}
            onMouseLeave={() => {
              setOpenNav(false);
            }}
          >
            About Us
          </p> */}
          <p
            style={{ marginRight: "10px", padding: "20px 30px 20px 0px" }}
            className="text-ligh fs-17 cursorPointer py-1 px-3"
            onMouseOver={() => toggleNav("syringes")}
            onMouseLeave={() => {
              setOpenNav(false);
            }}
          >
            Veterinary Equipments
          </p>
          <p
            style={{ marginRight: "10px", padding: "20px 30px" }}
            className="text-ligh fs-17   cursorPointer py-1 px-3 "
            // onMouseOver={() => toggleNav("syringes")}
            // onMouseLeave={() => {
            //   setOpenNav(false);
            // }}
          >
            Surgical Instruments
          </p>
          <p
            style={{ marginRight: "10px", padding: "20px 30px" }}
            className="text-ligh fs-17 cursorPointer py-1 px-3"
            onMouseOver={() => toggleNav("horseGear")}
            onMouseLeave={() => {
              setOpenNav(false);
            }}
          >
            Horse Gear
          </p>
          <p
            style={{ marginRight: "10px", padding: "20px 30px" }}
            className="text-ligh fs-17 cursorPointer py-1 px-3"
            // onMouseOver={() => toggleNav("horseGear")}
            // onMouseLeave={() => {
            //   setOpenNav(false);
            // }}
          >
            Veterinary Practice
          </p>
          <p
            style={{ marginRight: "10px", padding: "20px 30px" }}
            className="text-ligh fs-17 cursorPointer py-1 px-3 mobViewNav"
            // onMouseOver={() => toggleNav("horseGear")}
            // onMouseLeave={() => {
            //   setOpenNav(false);
            // }}
          >
            Contact Us
          </p>
        </div>
      </div>
      <div
        style={{
          background: "#F5F5F6",
          position: "absolute",
          width: "100%",
          border: "1px solid gray",
          // boxShadow: "2px -4px 18px -4px rgba(0,0,0,0.75);",
          // opacity: 0.4,
        }}
        onMouseOver={() => setOpenNav(true)}
        onMouseLeave={() => {
          setOpenNav(false);
        }}
        className={`myDiv ${openNav ? "open" : ""}`}
      >
        {openNav && (
          <div className="p1">
            <Grid container className="mainContainer">
              {navFlags === "syringes"
                ? syringes.map((elem, index) => {
                    return (
                      <Grid item xs={4}>
                        <p className="text-primary fs-16 my-1 cursorPointer catLink Poppins-Medium">
                          {elem}
                        </p>
                      </Grid>
                    );
                  })
                : navFlags === "horseGear"
                ? horseGear.map((elem, inedx) => {
                    return (
                      <Grid item xs={4}>
                        <p className="text-primary fs-16 my-1 cursorPointer catLink Poppins-Medium">
                          {elem}
                        </p>
                      </Grid>
                    );
                  })
                : ""}
            </Grid>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
