import { Divider } from "@mui/material";

export default function BADivider(props) {
  const { backgroundColor } = props;
  return <Divider sx={{ backgroundColor: backgroundColor ?? "" }} />;
}
