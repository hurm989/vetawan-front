import { Box, Divider, Grid } from "@mui/material";
import TableHeader from "../../components/molecules/tableHeader";
import { Delete, DeleteOutline } from "@mui/icons-material";
import BADivider from "../../components/atoms/divider";
import TableBody from "../../components/molecules/tableBody";
import BAButton from "../../components/atoms/button";
import PayDetails from "../../components/molecules/paydetails";
import "./style.css";
import Footer from "../../components/modules/footer";
import Banner from "../../components/modules/banner";
import DrawerAppBar from "../../components/atoms/appBar";
import Header from "../../components/modules/header";
import MobAppBar from "../../components/atoms/mobAppBar";
import SearchNavbar from "../../components/modules/searchNav";

export default function Cart() {
  return (
    <>
      {/* <div className="marginHeader">
        <Header />
      </div> */}
      <div className="mobAppBar">
        <MobAppBar />
      </div>
      <div>
        <SearchNavbar />
      </div>
      <div
        className="appbar"
        style={{ position: "sticky", top: 0, zIndex: 20 }}
      >
        <DrawerAppBar />
      </div>
      {/* <DrawerAppBar /> */}
      <div className="bg-gray py-3">
        <div className="mainContainer ">
          <p className="Poppins-SemiBold" style={{ fontSize: "26px" }}>
            My Cart
          </p>
          <div style={{ maxHeight: "100px", overflowY: "scroll" }}>
            <div></div>
          </div>
        </div>
      </div>
      <Box className="mainContainer">
        <div className="mt-5">
          <div className="displayNone">
            <TableHeader />
          </div>
          <TableBody />
          <Box className="px-2">
            <BADivider />
          </Box>
          <TableBody />
          <Box className="px-2">
            <BADivider />
          </Box>
          <TableBody />
          <Box className="px-2">
            <BADivider />
          </Box>
        </div>
        <PayDetails />
      </Box>
      <Banner />
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}
