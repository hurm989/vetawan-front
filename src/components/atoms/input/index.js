import { Input, TextField } from "@mui/material";

export default function BAInput(props) {
  const { label, placeHolder } = props;
  return (
    <TextField
      placeholder={placeHolder ?? ""}
      style={{
        backgroundColor: "",
        borderRadius: "0px",
        // padding: padding ?? "",
      }}
      fullWidth
      id="outlined-basic"
      label={label}
      variant="outlined"
    />
  );
}
