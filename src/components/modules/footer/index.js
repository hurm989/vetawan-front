import { Box, Divider, Grid, TextField } from "@mui/material";
import "./style.css";
import {
  CustomerService,
  GetInTouch,
  informationLink,
} from "../../../config/utils/utils";
import {
  Face2Outlined,
  Facebook,
  FacebookOutlined,
  FacebookTwoTone,
  Instagram,
  Phone,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import BADivider from "../../atoms/divider";
import logo from "../../../assets/logo.png";
import paymentcard from "../../../assets/payment.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <Box className="footerBackground">
      <Grid container className="footerHeight d-flex align-items-center py-1">
        <Grid item xs={12}>
          <Box className="mainContainer">
            <Grid container>
              <Grid className="text-light px-2" item md={4} xs={12}>
                <div
                  className="d-flex justify-content-between flex-column"
                  style={{ width: "87%" }}
                >
                  <div className="d-flex align-items-end mb-2">
                    <img alt="" src={logo} width={"100px"} />
                    <p
                      style={{
                        padding: "0px 5px 0px 5px",
                        fontWeight: "bold",
                      }}
                      className="fs-14 text-yellow Poppins-SemiBold"
                    >
                      Premium Quality Veterinary Equipment & Horse Gear
                      {/* Veterinary Practice Veterinary Equipment & Horse Gear */}
                      {/* Goods available on stock shipped within 3 business days */}
                    </p>
                  </div>
                  {/* <h1 className="">
                    Vetawan
                    <span className="text-primary">.</span>
                  </h1> */}
                  <p
                    className="fs-14"
                    style={{ fontWeight: "bold", lineHeight: "1.3rem" }}
                  >
                    Vetawan is a pioneering force, offering services in
                    veterinary instruments and animal reproduction technologies,
                    revolutionizing global veterinary practices.
                    {/* Address: 62 Goodwin Road Slough Berkshire SL2 2EU United
                    Kingdom */}
                    {/* Premium Quality Veterinary Equipment & Horse Gear */}
                    {/* <a href="">www.geentech.com</a> */}
                  </p>
                  {/* <a
                    style={{ color: "white" }}
                    target="_blank"
                    href="https://www.geentech.com/"
                  >
                    www.geentech.com
                  </a> */}
                  <p className="Poppins-SemiBold text-red fs-14 py-2">
                    Got Question? Call us 24/7
                    <br /> +44 744 512 2464
                  </p>
                </div>
              </Grid>
              <Grid className="text-light px-2" item md={2} xs={12}>
                <h3 className="pt-2 fs-18 mb-1">Information</h3>
                {informationLink.map((index, elem) => {
                  return (
                    <div
                      key={elem}
                      className=""
                      style={{ paddingBottom: "5px" }}
                    >
                      <a className="fs-14 cursorPointer">{index}</a>
                    </div>
                  );
                })}
                <div>
                  <img src={paymentcard} width="100px" />
                </div>
              </Grid>
              <Grid className="text-light px-2" item md={3} xs={12}>
                <div className="desktopView mt-1">
                  {/* <div className="d-flex"> */}
                  <h3
                    className="fs-18 mb-1"
                    style={{ padding: "10px 0px 0px 40px" }}
                  >
                    Customer Service
                  </h3>
                  <div>
                    {CustomerService.map((index, elem) => {
                      return (
                        <div key={elem} style={{ paddingBottom: "5px" }}>
                          <a className="fs-14 cursorPointer">{index}</a>
                        </div>
                      );
                    })}
                  </div>
                  {/* </div> */}
                </div>
              </Grid>
              <Grid
                className="text-light px-2"
                item
                md={3}
                xs={12}
                // justifyContent="end"
              >
                {/* <div className="d-flex justify-content-end flex-column align-items-center"> */}
                {/* <div className="d-flex justify-content-between flex-column"> */}
                <h3 className="pt-2 fs-18 mb-1" style={{ textAlign: "start" }}>
                  Get In Touch
                </h3>
                {GetInTouch.map((index, elem) => {
                  return (
                    <div
                      key={elem}
                      // className={elem == "info@geentech.com" ? "pb-1" : ""}
                    >
                      <span className="fs-14">{index}</span>
                    </div>
                  );
                })}
                <Facebook style={{ fontSize: "30px" }} className="pe-1" />
                <Twitter style={{ fontSize: "30px" }} className="pe-1" />
                <Instagram style={{ fontSize: "30px" }} className="pe-1" />
                <WhatsApp style={{ fontSize: "30px" }} className="pe-1" />
                <p className="text-yellow fs-14">info@geentech.com</p>
                <p className="fs-14 text-yellow">+44 744 512 2464</p>
                {/* </div> */}
                {/* </div> */}
              </Grid>
            </Grid>
            <div className="px-2 mb-2">
              <BADivider backgroundColor="whitesmoke" />
            </div>

            <p className="text-light Poppins-SemiBold text-blue px-1 fs-14 text-center">
              Copyright © 2023 Vetawan - All Rights Reserved.
            </p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
