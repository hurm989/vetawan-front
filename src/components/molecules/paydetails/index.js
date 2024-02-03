import { Grid } from "@mui/material";
import BADivider from "../../atoms/divider";
import BAButton from "../../atoms/button";
import { useNavigate } from "react-router-dom";

export default function PayDetails() {
  const navigate = useNavigate();
  return (
    <>
      <Grid container className="d-flex justify-content-end px-2">
        <Grid item md={3} xs={12} className="px-2">
          <div className="fs-15 d-flex justify-content-between text-gray py-1">
            <p>Card Subtotal</p>
            <p>$300.00</p>
          </div>
        </Grid>
      </Grid>
      <Grid container className="d-flex justify-content-end px-2">
        <Grid item md={3} xs={12} className="px-2">
          <div className="fs-15 d-flex justify-content-between text-gray py-1">
            <p>Shipping</p>
            <p>Free</p>
          </div>
        </Grid>
      </Grid>
      <Grid container className="d-flex justify-content-end px-2">
        <Grid item md={3} xs={12} className="px-2">
          <div className="fs-15 d-flex justify-content-between text-gray py-1">
            <p>You Save</p>
            <p>$20.00</p>
          </div>
        </Grid>
      </Grid>
      <Grid container className="d-flex justify-content-end px-2">
        <Grid item md={3} xs={12} className="px-2">
          <BADivider />
        </Grid>
      </Grid>
      <Grid container className="d-flex justify-content-end px-2">
        <Grid item md={3} xs={12} className="px-2">
          <div className="fs-15 d-flex justify-content-between text-gray py-1">
            <p>You Pay</p>
            <p>$280.00</p>
          </div>
        </Grid>
      </Grid>
      <Grid container className="d-flex justify-content-end px-2 mb-1">
        <Grid item md={3} xs={12} className="px-2">
          <BAButton value="Checkout" />
        </Grid>
      </Grid>
      <Grid container className="d-flex justify-content-end px-2">
        <Grid item md={3} xs={12} className="px-2">
          <BAButton onClick={() => navigate("/")} value="Continue Shopping" />
        </Grid>
      </Grid>
    </>
  );
}
