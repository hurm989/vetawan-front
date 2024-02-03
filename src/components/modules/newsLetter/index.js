import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import BAInput from "../../atoms/input";
import BAButton from "../../atoms/button";
import "./style.css";
export default function NewsLetter(props) {
  const { heading, disc, btnName, placeHolder, mdInp, mdBtn } = props;
  return (
    <>
      <div className="marginTopnews">
        <Grid
          container
          className="mainContainer "
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <h2 className="Poppins-SemiBold text-center text-primary">
              {heading ?? "NEWSLETTER"}
            </h2>
            <p className="Poppins-Medium text-center fs-14 text-primary px-2">
              {disc ??
                "Subscribe to our newsletter and get 10% off your first purchase"}
            </p>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="my-1"
          >
            <Grid item md={mdInp ?? 5} xs={12}>
              {/* <Grid container> */}
              <div className="d-flex justify-content-center newsLetter paddingNews">
                <BAInput
                  placeHolder={placeHolder ?? "Enter an email"}
                  borderRadius="20px"
                />
              </div>

              {/* </Grid> */}
            </Grid>
            <Grid item md={mdBtn ?? 2} xs={12}>
              <div className="paddingNews">
                <BAButton
                  className="btnNews"
                  // borderRadius="0px 30px 30px 0px"
                  padding="14px 0px"
                  value={btnName ?? "Subscribe"}
                />
              </div>
            </Grid>
          </Grid>{" "}
          <Grid xs={12}>
            <div
              style={{
                display: "flex",
                // flexDirection: "column",
                justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Veterinary Equipment"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Sugrical Instruments"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Horse Gear"
                />
              </FormGroup>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
