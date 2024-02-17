import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./style.css";

import { Get } from "../../../config/apiMethod";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [navFlags, setNavFlags] = useState();
  const navigate = useNavigate();
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(false);
  const getCategory = async () => {
    try {
      setLoading(true);
      const response = await Get(`/store/api/`);

      setCategories(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);
  const toggleNav = (categoryId) => {
    console.log(categoryId, "TOGGLE");
    setNavFlags(categoryId);
    setOpenNav(true);
  };

  return (
    <>
      <div className={`navbar`}>
        <div className="banner mainContainer px-1">
          <p
            style={{ marginRight: "10px", padding: "20px 30px 20px 0px" }}
            className="text-ligh fs-17   cursorPointer py-1 px-3 mobViewNav"
            onClick={() => navigate("/")}
          >
            Home
          </p>
          {categories?.categories?.map((category) => (
            <p
              key={category.id}
              style={{ marginRight: "10px", padding: "20px 30px" }}
              className={`text-ligh fs-17 cursorPointer py-1 px-3 ${
                category.id === navFlags ? "active" : ""
              }`}
              onMouseOver={() => toggleNav(category.id)}
              onMouseLeave={() => {
                setOpenNav(false);
              }}
            >
              {category.category_name}
            </p>
          ))}
          <p
            style={{ marginRight: "10px", padding: "20px 30px" }}
            className="text-ligh fs-17 cursorPointer py-1 px-3 mobViewNav"
            onClick={() => navigate("/contact-us")}
          >
            Contact Us
          </p>
        </div>
      </div>
      <div
        style={{
          background: "#F5F5F6",
          position: "absolute",
          width: "100%",
          border: "1px solid gray",
        }}
        onMouseOver={() => setOpenNav(true)}
        onMouseLeave={() => {
          setOpenNav(false);
        }}
        className={`myDiv ${openNav ? "open" : ""}`}
      >
        {openNav && (
          <div className="p1">
            <Grid container className="mainContainer">
              {categories?.subcategories
                .filter((subcat) => subcat.category === navFlags)
                .map((subcat, index) => (
                  <Grid item xs={4} key={index}>
                    <p className="text-primary fs-16 my-1 cursorPointer catLink Poppins-Medium">
                      {subcat.subcategory_name}
                    </p>
                  </Grid>
                ))}
            </Grid>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
