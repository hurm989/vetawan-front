import { ArrowRight } from "@mui/icons-material";
import { Button, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import "./style.css";
export default function BAButton(props) {
  const {
    value,
    fontSize,
    onClick,
    padding,
    borderRadius,
    className,
    icon,
    margin,
  } = props;
  return (
    <Button
      onClick={onClick}
      fullWidth
      sx={{
        borderRadius: borderRadius ?? "4px",
        fontFamily: "Poppins-SemiBold",
        padding: padding ?? "10px 30px",
        fontSize: fontSize ?? "16px",
        margin: margin ?? "",
      }}
      className={className ?? ""}
      color="primary"
      variant="contained"
      endIcon={icon ? <ArrowForwardIcon /> : false}
    >
      {value}
    </Button>
  );
}
