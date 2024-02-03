import { Badge, Grid } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../../assets/logo.png";
import "./style.css";
import BADivider from "../../atoms/divider";
import BAButton from "../../atoms/button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export default function SearchNavbar() {
  const navigate = useNavigate();
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#192a3e",
  }));
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    border: "2px solid #192a3e",
    width: "100%",
    // width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1.5, 1, 1.5, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      height: "25px",
      color: "#192a3e",
      fontSize: "20px",
      borderRadius: "0px",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#192a3e",
    },
  }));
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className="px-1"
      >
        <Grid item md={1} xs={12}>
          <div className="d-flex align-items-center justify-content-center">
            <img alt className="imgWidth py-1" src={logo} />
          </div>
        </Grid>
        <Grid item lg={6} md={5} xs={12}>
          <div className="searchbar">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search here.."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
        </Grid>
        <Grid item lg={5} md={6} xs={12}>
          <Grid container alignItems="center" justifyContent="end">
            <Grid md={6} xs={12}>
              <div className="dblock">
                <div className="d-flex justify-content-center px-2">
                  <div className="cursorPointer d-flex align-item-center justify-content-center pe-1">
                    <AccountCircleOutlinedIcon
                      style={{ fontSize: "45px", color: "#192a3e" }}
                      className="cursorPointer"
                    />
                    <div className="d-flex flex-column">
                      <p
                        onClick={() => navigate("/dashboard")}
                        className="fs-12 text-gray"
                      >
                        Dashboard
                      </p>
                      <p
                        onClick={() => navigate("/signin")}
                        className="fs-14 text-primary Poppins-Medium"
                      >
                        Log in
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => navigate("/cart")}
                    className="d-flex align-item-center justify-content-center"
                  >
                    <div className="ps-1 d-flex align-items-end">
                      <Badge
                        badgeContent={4}
                        color="danger"
                        className="text-light"
                      >
                        <ShoppingCartOutlinedIcon
                          style={{ fontSize: "45px", color: "green" }}
                          className="cursorPointer"
                        />
                      </Badge>
                      <div className="d-flex flex-column justify-content-end">
                        <p className="fs-12">0.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid md={5} xs={12}>
              <div className="px-1 btnMob">
                <BAButton padding="15px 5px" icon={true} value="Checkout" />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <BADivider />
    </>
  );
}
