// import ProductCards from "../../components/atoms/card";
import { Button, Grid, Paper, Rating } from "@mui/material";
import Footer from "../../components/modules/footer";
import ProductCards from "../../components/molecules/card";
import {
  bestsellers_products,
  popularProducts,
  popular_products,
  productDetails,
  productDetailsNew,
} from "../../config/utils/products";
import Banner from "../../components/modules/banner";
import HeroSection from "../../components/modules/heroSection";
import BAButton from "../../components/atoms/button";
import Header from "../../components/modules/header";
import LogoSection from "../../components/modules/logoSection";
import Navbar from "../../components/modules/navbar";
import DrawerAppBar from "../../components/atoms/appBar";
import NewsLetter from "../../components/modules/newsLetter";
import Carousel from "../../components/atoms/carousel";
import BADivider from "../../components/atoms/divider";
import ReviewCards from "../../components/molecules/reviewCards";
import { Link, useNavigate } from "react-router-dom";
import PopularCard from "../../components/molecules/popularCard";
import BannerSlider from "../../components/atoms/slider";
import SearchNavbar from "../../components/modules/searchNav";
// import SimpleSlider from "../../components/atoms/slider";
import BASimpleSlider from "../../components/atoms/slider";
import MobAppBar from "../../components/atoms/mobAppBar";
import { CategoryCard } from "../../components/modules/categoryCard";
// import { DemoCarousel } from "../../components/atoms/carousel";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="marginHeader">
        <Header />
      </div>
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
      <div className="navbarClass mainContainer">
        <HeroSection />
      </div>
      <Banner />

      <div className="mainContainer">
        {/* <Grid container> */}
        {/* <Grid xs={6} className="mb-3"> */}
        <CategoryCard catgeoryName="Surgical Instrument" />
        {/* </Grid> */}
        {/* <Grid xs={6} className="mb-3">
            <CategoryCard catgeoryName="Horse Gears" />
          </Grid>
          <Grid xs={6}>
            <CategoryCard catgeoryName="Veterinary Equipments" />
          </Grid>
          <Grid xs={6}>
            <CategoryCard catgeoryName="Premium Quality" />
          </Grid> */}
        {/* <Grid xs={6}>
            <CategoryCard />
          </Grid> */}
        {/* </Grid> */}
      </div>

      <div className="mainContainer">
        <div
          className="d-flex flex-column px-2 "
          style={{ margin: "30px 0px 30px 0px" }}
        >
          {/* <div className="d-flex align-items-center justify-content-between"> */}
          <Grid
            style={{ marginBottom: "20px" }}
            container
            justifyContent="space-between"
          >
            <Grid md={6} xs={12}>
              <p
                style={{ fontSize: "1.8rem" }}
                className="Poppins-SemiBold text-primary bestsellers"
              >
                Popular Surgical Instrument
              </p>
            </Grid>
            <Grid md={6} xs={12}>
              <p
                style={{ textDecoration: "underline" }}
                className="text-primary text-end d-hidden"
              >
                <Button
                  onClick={() => navigate("/collection")}
                  variant="outlined"
                  size="large"
                  style={{ fontFamily: "Poppins-SemiBold", fontSize: "14px" }}
                >
                  View All
                </Button>
              </p>
            </Grid>
          </Grid>
          {/* </div> */}
          {/* <p className="text-primary fs-18 mb-2 sloganbestselleer">
            Unleash Happiness: Elevate Your Pet's Lifestyle with Our Premium
            Collection!
          </p> */}
          <Grid container columnSpacing={2} rowSpacing={4}>
            {popular_products?.map((elem, index) => {
              return (
                <ProductCards
                  productName={elem?.productName}
                  description={elem?.description}
                  oldPrice={elem?.oldPrice}
                  newPrice={elem?.newPrice}
                  image={elem?.img ? elem?.img[0] : ""}
                  prodCode={elem?.prod_code ?? "-"}
                />
              );
            })}
          </Grid>
        </div>
        <div
          className="d-flex flex-column px-2 "
          style={{ margin: "30px 0px 30px 0px" }}
        >
          {/* <div className="d-flex align-items-center justify-content-between"> */}
          <Grid
            style={{ marginBottom: "20px" }}
            container
            justifyContent="space-between"
          >
            <Grid md={6} xs={12}>
              <p
                style={{ fontSize: "1.8rem" }}
                className="Poppins-SemiBold text-primary bestsellers"
              >
                Popular Veterinary Equipment
              </p>
            </Grid>
            <Grid md={6} xs={12}>
              <p
                style={{ textDecoration: "underline" }}
                className="text-primary text-end d-hidden"
              >
                <Button
                  onClick={() => navigate("/collection")}
                  variant="outlined"
                  size="large"
                  style={{ fontFamily: "Poppins-SemiBold", fontSize: "14px" }}
                >
                  View All
                </Button>
              </p>
            </Grid>
          </Grid>
          {/* </div> */}
          {/* <p className="text-primary fs-18 mb-2 sloganbestselleer">
            Unleash Happiness: Elevate Your Pet's Lifestyle with Our Premium
            Collection!
          </p> */}
          <Grid container columnSpacing={2} rowSpacing={4}>
            {popular_products?.map((elem, index) => {
              return (
                <ProductCards
                  productName={elem?.productName}
                  description={elem?.description}
                  oldPrice={elem?.oldPrice}
                  newPrice={elem?.newPrice}
                  image={elem?.img ? elem?.img[0] : ""}
                  prodCode={elem?.prod_code ?? "-"}
                />
              );
            })}
          </Grid>
        </div>
        <div
          className="d-flex flex-column px-2 "
          style={{ margin: "30px 0px 30px 0px" }}
        >
          {/* <div className="d-flex align-items-center justify-content-between"> */}
          <Grid
            style={{ marginBottom: "20px" }}
            container
            justifyContent="space-between"
          >
            <Grid md={6} xs={12}>
              <p
                style={{ fontSize: "1.8rem" }}
                className="Poppins-SemiBold text-primary bestsellers"
              >
                Popular Horse Gears
              </p>
            </Grid>
            <Grid md={6} xs={12}>
              <p
                style={{ textDecoration: "underline" }}
                className="text-primary text-end d-hidden"
              >
                <Button
                  onClick={() => navigate("/collection")}
                  variant="outlined"
                  size="large"
                  style={{ fontFamily: "Poppins-SemiBold", fontSize: "14px" }}
                >
                  View All
                </Button>
              </p>
            </Grid>
          </Grid>
          {/* </div> */}
          {/* <p className="text-primary fs-18 mb-2 sloganbestselleer">
            Unleash Happiness: Elevate Your Pet's Lifestyle with Our Premium
            Collection!
          </p> */}
          <Grid container columnSpacing={2} rowSpacing={4}>
            {popular_products?.map((elem, index) => {
              return (
                <ProductCards
                  productName={elem?.productName}
                  description={elem?.description}
                  oldPrice={elem?.oldPrice}
                  newPrice={elem?.newPrice}
                  image={elem?.img ? elem?.img[0] : ""}
                  prodCode={elem?.prod_code ?? "-"}
                />
              );
            })}
          </Grid>
        </div>
        <div
          className="d-flex flex-column px-2 "
          style={{ margin: "30px 0px 30px 0px" }}
        >
          {/* <div className="d-flex align-items-center justify-content-between"> */}
          <Grid
            style={{ marginBottom: "20px" }}
            container
            justifyContent="space-between"
          >
            <Grid md={6} xs={12}>
              <p
                style={{ fontSize: "1.8rem" }}
                className="Poppins-SemiBold text-primary bestsellers"
              >
                Popular Veterinary Practices
              </p>
            </Grid>
            <Grid md={6} xs={12}>
              <p
                style={{ textDecoration: "underline" }}
                className="text-primary text-end d-hidden"
              >
                <Button
                  onClick={() => navigate("/collection")}
                  variant="outlined"
                  size="large"
                  style={{ fontFamily: "Poppins-SemiBold", fontSize: "14px" }}
                >
                  View All
                </Button>
              </p>
            </Grid>
          </Grid>
          {/* </div> */}
          {/* <p className="text-primary fs-18 mb-2 sloganbestselleer">
            Unleash Happiness: Elevate Your Pet's Lifestyle with Our Premium
            Collection!
          </p> */}
          <Grid container columnSpacing={2} rowSpacing={4}>
            {popular_products?.map((elem, index) => {
              return (
                <ProductCards
                  productName={elem?.productName}
                  description={elem?.description}
                  oldPrice={elem?.oldPrice}
                  newPrice={elem?.newPrice}
                  image={elem?.img ? elem?.img[0] : ""}
                  prodCode={elem?.prod_code ?? "-"}
                />
              );
            })}
          </Grid>
        </div>
        <div
          style={{ marginBottom: "20px" }}
          className="d-flex flex-column px-2 my-2"
        >
          <p
            style={{ fontSize: "1.8rem" }}
            className="Poppins-SemiBold text-primary bestsellers"
            // style={{ fontSize: "32px" }}
          >
            Best Sellers
          </p>
          {/* <p className="text-primary fs-18 sloganbestselleer">
            Paws, Claws, and Everything in Between – Elevating Every Step of
            Your Pet's Journey!
          </p> */}
        </div>
        {/* productName: "FAWAN Manual Drencher", description: "Plastic
        Body,Long-lasting ,Sterilizable 120c°", oldPrice: 500, newPrice: 400, */}
        <Grid container columnSpacing={2} rowSpacing={4} className="px-2">
          {bestsellers_products?.map((elem, index) => {
            return (
              <ProductCards
                productName={elem?.productName}
                description={elem?.description}
                oldPrice={elem?.oldPrice}
                newPrice={elem?.newPrice}
                image={elem?.img ? elem?.img[0] : ""}
                imgArr={elem?.img}
                prodCode={elem?.prod_code ?? "-"}
              />
            );
          })}
        </Grid>
        <Grid container className="d-flex justify-content-center my-5">
          <Grid item xs={12} md={2}>
            <div className="px-2">
              <BAButton
                onClick={() => navigate("/collection")}
                value="See More"
              />
            </div>
          </Grid>
        </Grid>
        <div className="d-flex flex-column px-2 my-1">
          <p
            className="Poppins-SemiBold text-primary reviwes"
            // style={{ fontSize: "24px" }}
          >
            Customer Reviews
          </p>
        </div>
        <BADivider />
        <div className="px-2 my-1">
          <Carousel />
        </div>
      </div>

      <NewsLetter />

      <Footer />
    </>
  );
}
