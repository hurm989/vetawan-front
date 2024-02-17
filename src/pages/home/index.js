// import ProductCards from "../../components/atoms/card";
import { Button, Grid, Paper, Rating } from "@mui/material";
import Footer from "../../components/modules/footer";
import ProductCards from "../../components/molecules/card";
import {
  bestsellers_products,
  horse_gear,
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
import BASimpleSlider from "../../components/atoms/slider";
import MobAppBar from "../../components/atoms/mobAppBar";
import { CategoryCard } from "../../components/modules/categoryCard";
import { useEffect, useState } from "react";
import { Get } from "../../config/apiMethod";

export default function Home() {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState();
  const [allProductsSurg, setAllProductsSurg] = useState();
  const [allProductsVet, setAllProductsVet] = useState();
  const [allProductsPrac, setAllProductsPrac] = useState();
  const [productLoadin, setProductLoading] = useState(false);

  const getAllPopHorseGear = async () => {
    setProductLoading(true);
    try {
      const response = await Get(
        `/store/api/products/horse-gear/?is_popular=${true}`
      );
      console.log(response, "POPULARPRODUCT");
      setAllProducts(response.products);
      setProductLoading(false);
    } catch (error) {
      // setLoading(false);
      setProductLoading(false);
    }
  };
  const getAllPopVeter = async () => {
    setProductLoading(true);
    try {
      const response = await Get(
        `/store/api/products/veterinary-equipments/?is_popular=${true}`
      );
      console.log(response, "POPULARPRODUCT");
      setAllProductsVet(response.products);
      setProductLoading(false);
    } catch (error) {
      // setLoading(false);
      setProductLoading(false);
    }
  };
  const getAllPopSurg = async () => {
    setProductLoading(true);
    try {
      const response = await Get(
        `/store/api/products/surgical-instruments/?is_popular=${true}`
      );
      console.log(response, "POPULARPRODUCT");
      setAllProductsSurg(response.products);
      setProductLoading(false);
    } catch (error) {
      // setLoading(false);
      setProductLoading(false);
    }
  };
  const getAllPopPrac = async () => {
    setProductLoading(true);
    try {
      const response = await Get(
        `/store/api/products/surgical-instruments/?is_popular=${true}`
      );
      console.log(response, "POPULARPRODUCT");
      setAllProductsPrac(response.products);
      setProductLoading(false);
    } catch (error) {
      // setLoading(false);
      setProductLoading(false);
    }
  };
  useEffect(() => {
    getAllPopSurg();
    getAllPopPrac();
    getAllPopHorseGear();
    getAllPopVeter();
  }, []);
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
        <CategoryCard catgeoryName="Surgical Instrument" />
      </div>

      <div className="mainContainer">
        <div
          className="d-flex flex-column px-2 "
          style={{ margin: "30px 0px 30px 0px" }}
        >
          {allProductsSurg?.length ? (
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
          ) : (
            ""
          )}

          {/* </div> */}
          {/* <p className="text-primary fs-18 mb-2 sloganbestselleer">
            Unleash Happiness: Elevate Your Pet's Lifestyle with Our Premium
            Collection!
          </p> */}
          <Grid container columnSpacing={2} rowSpacing={4}>
            {productLoadin
              ? [1, 2, 3, 4].map((elem, i) => {
                  return (
                    <ProductCards
                      productName={elem?.product_name}
                      description={elem?.short_description}
                      oldPrice={elem?.oldPrice}
                      newPrice={elem?.price}
                      image={elem?.image}
                      prodCode={elem?.product_code ?? "-"}
                      rating={0}
                      product_id={elem?.product_id}
                    />
                  );
                })
              : allProductsSurg?.map((elem, index) => {
                  return (
                    <ProductCards
                      productName={elem?.product_name}
                      description={elem?.short_description}
                      oldPrice={elem?.oldPrice}
                      newPrice={elem?.price}
                      image={elem?.image}
                      prodCode={elem?.product_code ?? "-"}
                      rating={5}
                      stock={elem?.stock ?? ""}
                      product_id={elem?.product_id}
                    />
                  );
                })}
          </Grid>
        </div>
        <div
          className="d-flex flex-column px-2 "
          style={{ margin: "30px 0px 30px 0px" }}
        >
          {allProductsVet?.length ? (
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
          ) : (
            ""
          )}

          <Grid container columnSpacing={2} rowSpacing={4}>
            {productLoadin
              ? [1, 2, 3, 4].map((elem, i) => {
                  return (
                    <ProductCards
                      productName={elem?.product_name}
                      description={elem?.short_description}
                      oldPrice={elem?.oldPrice}
                      newPrice={elem?.price}
                      image={elem?.image}
                      prodCode={elem?.product_code ?? "-"}
                      rating={0}
                    />
                  );
                })
              : allProductsVet?.map((elem, index) => {
                  return (
                    <ProductCards
                      productName={elem?.product_name}
                      description={elem?.short_description}
                      oldPrice={elem?.oldPrice}
                      newPrice={elem?.price}
                      image={elem?.image}
                      prodCode={elem?.product_code ?? "-"}
                      rating={5}
                      stock={elem?.stock ?? ""}
                      product_id={elem?.product_id}
                    />
                  );
                })}
          </Grid>
        </div>
        <div
          className="d-flex flex-column px-2 "
          style={{ margin: "30px 0px 30px 0px" }}
        >
          {allProducts?.length ? (
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
          ) : (
            ""
          )}

          <Grid container columnSpacing={2} rowSpacing={4}>
            {productLoadin
              ? [1, 2, 3, 4].map((elem, i) => {
                  return (
                    <ProductCards
                      productName={elem?.product_name}
                      description={elem?.short_description}
                      oldPrice={elem?.oldPrice}
                      newPrice={elem?.price}
                      image={elem?.image}
                      prodCode={elem?.product_code ?? "-"}
                      rating={0}
                    />
                  );
                })
              : allProducts?.map((elem, index) => {
                  return (
                    <ProductCards
                      productName={elem?.product_name}
                      description={elem?.short_description}
                      oldPrice={elem?.oldPrice}
                      newPrice={elem?.price}
                      image={elem?.image}
                      prodCode={elem?.product_code ?? "-"}
                      rating={5}
                      stock={elem?.stock ?? ""}
                      product_id={elem?.product_id}
                    />
                  );
                })}
          </Grid>
        </div>
        <div
          className="d-flex flex-column px-2 "
          style={{ margin: "30px 0px 30px 0px" }}
        >
          {allProductsPrac?.length ? (
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
          ) : (
            ""
          )}

          <Grid container columnSpacing={2} rowSpacing={4}>
            {productLoadin
              ? [1, 2, 3, 4].map((elem, i) => {
                  return (
                    <ProductCards
                      productName={elem?.product_name}
                      description={elem?.short_description}
                      oldPrice={elem?.oldPrice}
                      newPrice={elem?.price}
                      image={elem?.image}
                      prodCode={elem?.product_code ?? "-"}
                      rating={0}
                    />
                  );
                })
              : allProductsPrac?.map((elem, index) => {
                  return (
                    <ProductCards
                      productName={elem?.product_name}
                      description={elem?.short_description}
                      oldPrice={elem?.oldPrice}
                      newPrice={elem?.price}
                      image={elem?.image}
                      prodCode={elem?.product_code ?? "-"}
                      rating={5}
                      stock={elem?.stock ?? ""}
                      product_id={elem?.product_id}
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
        </div>

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
                rating={5}
                stock={elem?.stock ?? ""}
                product_id={elem?.product_id}
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
