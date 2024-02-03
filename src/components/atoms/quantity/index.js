import { Box, Grid } from "@mui/material";
import { useState } from "react";

export default function Quantity() {
  const [count, setCount] = useState(0);
  return (
    <Box border="1px solid lightGray">
      <Grid container className="">
        <Grid item xs={3}>
          <p
            className="text-gray cursorPointer fs-20 px-1"
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
          >
            -
          </p>
        </Grid>
        <Grid item xs={6} className="text-center ">
          <p className="text-gray fs-20">{count}</p>
        </Grid>
        <Grid item xs={3} className="text-end px-1">
          <p
            className="text-gray cursorPointer fs-20"
            onClick={() => setCount(count + 1)}
          >
            +
          </p>
        </Grid>
      </Grid>
    </Box>
  );
}
