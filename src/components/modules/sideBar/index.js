import React from "react";
import { Grid, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import "./style.css";
import BAInput from "../../atoms/input";
import BAButton from "../../atoms/button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import DataTable from "../../atoms/table/index,";
const SideBar = ({ id }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Grid container style={{ minHeight: "350px" }}>
        {id == 1 ? (
          <Grid xs={12}>
            <div className="mainCon">
              <p className="text-primary Poppins-SemiBold">Edit your profile</p>
            </div>
            <div className="box">
              <div className="p1">
                <Grid container>
                  <Grid xs={6}>
                    <div className="pe-1">
                      <BAInput placeHolder="Enter First Name" />
                    </div>
                  </Grid>
                  <Grid xs={6}>
                    <div className="ps-1">
                      <BAInput placeHolder="Enter Last Name" />
                    </div>
                  </Grid>
                  <Grid xs={6} className="mt-1">
                    <div className="pe-1">
                      <BAInput placeHolder="Enter Phone Number" />
                    </div>
                  </Grid>
                  <Grid xs={6} className="mt-1">
                    <div className="ps-1">
                      <BAInput placeHolder="Enter Email" />
                    </div>
                  </Grid>
                  <Grid xs={12} className="mt-1">
                    <div className="">
                      <BAInput placeHolder="Enter Address" />
                    </div>
                  </Grid>
                  <Grid xs={4} className="mt-1">
                    <div className="pe-1">
                      <BAInput placeHolder="Enter City" />
                    </div>
                  </Grid>
                  <Grid xs={4} className="mt-1">
                    <div className="px-1">
                      <BAInput placeHolder="Enter State" />
                    </div>
                  </Grid>
                  <Grid xs={4} className="mt-1">
                    <div className="ps-1">
                      <BAInput placeHolder="Enter Country" />
                    </div>
                  </Grid>
                  <Grid xs={12}>
                    <Grid columnGap={10} xs={2} className="mt-2">
                      <BAButton
                        // onClick={() => navigate("/collection")}
                        value="Save"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        ) : id == 2 ? (
          <Grid xs={12}>
            <div className="mainCon">
              <p className="text-primary Poppins-SemiBold">
                Change Your Password
              </p>
            </div>
            <div className="box">
              <div className="p1">
                <Grid container>
                  <Grid xs={12} className="mt-1">
                    <OutlinedInput
                      fullWidth
                      placeholder="Current Password"
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
                  </Grid>
                  <Grid xs={12} className="mt-1">
                    <OutlinedInput
                      fullWidth
                      placeholder="New Password"
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
                  </Grid>
                  <Grid xs={12} className="mt-1">
                    <OutlinedInput
                      fullWidth
                      placeholder="Confirm Password"
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
                  </Grid>

                  <Grid xs={12}>
                    <Grid columnGap={10} xs={2} className="mt-2">
                      <BAButton
                        // onClick={() => navigate("/collection")}
                        value="Save"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        ) : id === 3 ? (
          <Grid xs={12}>
            <div className="mainCon">
              <p className="text-primary Poppins-SemiBold">My Order History</p>
            </div>
            <div className="box">
              <div className="p1">
                <Grid container>
                  <Grid xs={12} className="mt-1">
                    <DataTable />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </div>
  );
};
export default SideBar;
