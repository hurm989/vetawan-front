import { Delete } from "@mui/icons-material";
import { Grid } from "@mui/material";
import "./style.css";
export default function TableHeader() {
  return (
    <Grid
      container
      className="px-2 bg-yellow"
      // style={{ display: "none" }}
    >
      <Grid item xs={12} className="bg-primary py-1">
        <Grid container>
          <Grid item xs={2}>
            <div>
              <h4 className="text-light px-2 Poppins-SemiBold">PRODUCT</h4>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <h4 className="text-light px-2 Poppins-SemiBold text-center">
                NAME
              </h4>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              <h4 className="text-light px-2 Poppins-SemiBold text-center">
                UNIT PRICE
              </h4>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              <h4 className="text-light px-2 Poppins-SemiBold text-center">
                QUANTITY
              </h4>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div>
              <h4 className="text-light px-2 Poppins-SemiBold text-center">
                TOTAL
              </h4>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div>
              <h4 className="text-light px-2 Poppins-SemiBold text-center">
                <Delete />
              </h4>
            </div>
          </Grid>
        </Grid>

        {/* <TableHeader /> */}
      </Grid>
    </Grid>
  );
}
