import {
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@mui/material";
import BAInput from "../../components/atoms/input";
import BAButton from "../../components/atoms/button";
import "./style.css";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";
import Header from "../../components/modules/header";
import LogoSection from "../../components/modules/logoSection";
import Footer from "../../components/modules/footer";
import MobAppBar from "../../components/atoms/mobAppBar";
import DrawerAppBar from "../../components/atoms/appBar";

export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {/* <Header /> */}
      {/* <div className="marginHeader">
        <Header />
      </div> */}
      <div className="mobAppBar">
        <MobAppBar />
      </div>
      {/* <div>
        <SearchNavbar />
      </div> */}
      <div
        className="appbar"
        style={{ position: "sticky", top: 0, zIndex: 20 }}
      >
        <DrawerAppBar />
      </div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="headerHeight"
        style={{ margin: "2rem 0" }}
      >
        <Grid item md={4} sm={10} xs={12} className="px-1">
          <Paper className="px-2">
            <div className="d-flex align-items-center justify-content-center">
              <h1 className="py-1 pt-1 text-primary Poppins-SemiBold">
                Sign In
              </h1>
            </div>
            <div className="py-1">
              <InputLabel
                style={{
                  color: "#192a3e",
                  fontFamily: "Poppins-SemiBold",
                  padding: "0px 0px 5px 0px",
                }}
                className="text-primary"
                htmlFor="outlined-adornment-password"
              >
                Email
              </InputLabel>
              <BAInput />
            </div>
            <div className="py-1">
              <InputLabel
                style={{
                  color: "#192a3e",
                  fontFamily: "Poppins-SemiBold",
                  padding: "0px 0px 5px 0px",
                }}
                className="text-primary"
                htmlFor="outlined-adornment-password"
              >
                Password
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <div className="py-2 text-center">
              <BAButton value="Sign In" fontSize="18px" />
            </div>
            <p className="pb-1 fs-14 text-center">
              Need an account?{" "}
              <Link to="/signup" style={{ color: "#008ace" }}>
                Sign Up
              </Link>
            </p>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
