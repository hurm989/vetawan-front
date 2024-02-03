import { Grid } from "@mui/material";
import SideBar from "../../modules/sideBar";
import "./style.css";
import { useState } from "react";
const SidePannel = () => {
  const [id, setId] = useState(1);
  return (
    <Grid container>
      <Grid xs={2}>
        <div>
          <Grid container>
            <Grid xs={12}>
              <div className="mainBox">
                <p className=" Poppins-SemiBold">Dashboard</p>
              </div>
              <div
                className={`mainBox ${id == 1 ? "colorBox" : ""}`}
                onClick={() => setId(1)}
              >
                <p className=" Poppins-SemiBold">My Orders</p>
              </div>
              <div
                className={`mainBox ${id == 2 ? "colorBox" : ""}`}
                onClick={() => setId(2)}
              >
                <p className=" Poppins-SemiBold">Edit Profile</p>
              </div>
              <div
                className={`mainBoxLast ${id == 3 ? "colorBox" : ""}`}
                onClick={() => setId(3)}
              >
                <p className=" Poppins-SemiBold">Change Password</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid xs={10}>
        <div className="ps-1">
          <SideBar id={id} />
        </div>
      </Grid>
    </Grid>
  );
};
export default SidePannel;
