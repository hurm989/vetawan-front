import { Grid, Paper, Rating } from "@mui/material";
import FAWANAutomaticDrencher from "../../../assets/FawanAutomaticDrencher.png";
export default function ReviewCards() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper style={{ border: "2px solid #192a3e", padding: "10px 20px" }}>
          <div className="my-1">
            <div className="d-flex justify-content-between">
              <Rating readOnly value={5} />
              <p>01/11/23</p>
            </div>
            <p className="mt-1 Poppins-Medium" style={{ fontSize: "16px" }}>
              I have ordered many items ,good service, delivery on time
            </p>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}
