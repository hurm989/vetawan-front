import { Delete } from "@mui/icons-material";
import { Grid } from "@mui/material";
import Quantity from "../../atoms/quantity";
import "./style.css";
import milkPreventing from "../../../assets/popular/MilkSuckling/1.png";

export default function TableBody() {
  return (
    <Grid container className="px-2">
      <Grid item xs={12} className="py-1">
        <Grid container className="py-2">
          <Grid
            item
            xs={6}
            md={0}
            className="d-noneHeader"
            style={{ margin: "0px 0px 10px 0px" }}
          >
            <div className="bg-primary">
              <h4 className="text-gray px-2 Poppins-SemiBold">PRODUCT</h4>
            </div>
          </Grid>
          <Grid style={{ margin: "0px 0px 10px 0px" }} item xs={6} md={2}>
            <div className="d-flex justify-content-center">
              <img src={milkPreventing} alt="" width="50%" />
              {/* <h4 className="text-gray px-2 Poppins-SemiBold">PRODUCT</h4> */}
            </div>
          </Grid>
          <Grid
            style={{ margin: "0px 0px 10px 0px" }}
            item
            xs={6}
            md={0}
            className="d-noneHeader"
          >
            <div className="bg-primary align-items-center d-flex">
              <h4 className="text-light px-2 Poppins-SemiBold">NAME</h4>
            </div>
          </Grid>
          <Grid style={{ margin: "0px 0px 10px 0px" }} item xs={6} md={4}>
            <div>
              <h4 className="Poppins-SemiBold px-1">
                {" "}
                Milk Sucking Preventers
              </h4>
              <p className="text-gray px-1 fs-14">
                VAWAN Milk sucking preventers offers the solution to a common
                challenge in livestock management.
              </p>
            </div>
          </Grid>
          <Grid
            style={{ margin: "0px 0px 10px 0px" }}
            item
            xs={6}
            md={0}
            className="d-noneHeader"
          >
            <div className="bg-primary ">
              <h4 className="text-light px-2 Poppins-SemiBold ">PRICE</h4>
            </div>
          </Grid>
          <Grid style={{ margin: "0px 0px 10px 0px" }} item xs={6} md={2}>
            <div>
              <p className="text-gray px-1 text-center fs-14">$ 600</p>
            </div>
          </Grid>
          <Grid
            style={{ margin: "0px 0px 10px 0px" }}
            item
            xs={6}
            md={0}
            className="d-noneHeader"
          >
            <div className="align-items-center d-flex bg-primary ">
              <h4 className="text-light px-2 Poppins-SemiBold">QUANTITY</h4>
            </div>
          </Grid>
          <Grid style={{ margin: "0px 0px 10px 0px" }} item xs={6} md={2}>
            <div>
              <h4 className="text-light px-2 Poppins-SemiBold text-center">
                <Quantity />
              </h4>
            </div>
          </Grid>
          <Grid
            style={{ margin: "0px 0px 10px 0px" }}
            item
            xs={6}
            md={0}
            className="d-noneHeader"
          >
            <div className="bg-primary">
              <h4 className="text-light px-2 Poppins-SemiBold ">TOTAL</h4>
            </div>
          </Grid>
          <Grid style={{ margin: "0px 0px 10px 0px" }} item xs={6} md={1}>
            <div>
              <div>
                <p className="text-gray px-1 text-center fs-14">$ 600</p>
              </div>
            </div>
          </Grid>
          <Grid
            style={{ margin: "0px 0px 10px 0px" }}
            item
            xs={6}
            md={0}
            className="d-noneHeader"
          >
            <div className="bg-primary">
              <h4 className="text-light px-2 Poppins-SemiBold">DELETE</h4>
            </div>
          </Grid>
          <Grid style={{ margin: "0px 0px 10px 0px" }} item xs={6} md={1}>
            <div>
              <h4 className="text-light px-2 Poppins-SemiBold text-center cursorPointer">
                <Delete style={{ color: "#898989" }} />
              </h4>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
