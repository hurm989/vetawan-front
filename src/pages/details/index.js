import MobAppBar from "../../components/atoms/mobAppBar";
import SearchNavbar from "../../components/modules/searchNav";
import DrawerAppBar from "../../components/atoms/appBar";
import BADivider from "../../components/atoms/divider";
import Carousel from "../../components/atoms/carousel";
import ProductCards from "../../components/molecules/card";
import {
  Button,
  Grid,
  Rating,
  TextField,
  TextareaAutosize,
  useScrollTrigger,
} from "@mui/material";
import { bestsellers_products } from "../../config/utils/products";
import Footer from "../../components/modules/footer";
import {
  ArrowLeft,
  ArrowRight,
  NoteAddOutlined,
  NotesRounded,
} from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import BAButton from "../../components/atoms/button";
import BAInput from "../../components/atoms/input";
import "./style.css";
import { useEffect, useState } from "react";
import Quantity from "../../components/atoms/quantity";
import milkPreventing from "../../assets/popular/MilkSuckling/1.png";
import milkPreventTwo from "../../assets/popular/MilkSuckling/2.png";
import milkPreventThree from "../../assets/popular/MilkSuckling/3.png";
import milkPreventFour from "../../assets/popular/MilkSuckling/4.png";
import { Get } from "../../config/apiMethod";
import { useParams } from "react-router-dom";

const allImg = [
  milkPreventing,
  milkPreventTwo,
  milkPreventThree,
  milkPreventFour,
];
export const ViewAllDetails = () => {
  const [showReview, setShowReview] = useState(false);
  const [renderImg, setRenderImg] = useState(0);
  const [product, setProduct] = useState();
  const [allProducts, setAllProducts] = useState();
  const [productLoadin, setProductLoading] = useState(false);
  const params = useParams();
  const getAllProducts = async () => {
    setProductLoading(true);
    try {
      const response = await Get(`/store/api/products`);
      // console.log(response.products, "ALLPRODUCTSSSS");
      setAllProducts(response.products);
      setProductLoading(false);
      // setAllProducts(response)
      // const exampleCategories = response?.categories.map((category) => {
      //   const subcategories = response?.subcategories
      //     .filter((subcategory) => subcategory?.category === category.id)
      //     .map((subcategory) => subcategory?.subcategory_name);

      //   return {
      //     name: category?.category_name,
      //     subcategories: subcategories,
      //   };
      // });
      // setCategories(exampleCategories);
    } catch (error) {
      // setLoading(false);
      setProductLoading(false);
    }
  };
  const getProduct = async () => {
    // setProductLoading(true);
    try {
      const response = await Get(`/store/api/product/${params?.id}`);
      // console.log(response.products, "ALLPRODUCTSSSS");
      setProduct(response.single_product);
    } catch (error) {
      // setLoading(false);
      // setProductLoading(false);
    }
  };
  useEffect(() => {
    getProduct();
    getAllProducts();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {" "}
      {console.log(product, "PRODUCTSS")}
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
      <div className="mainContainer">
        <div className="my-5">
          <Grid container>
            <Grid item md={6} xs={12}>
              <div
                style={{ height: "400px" }}
                className="d-flex align-items-center justify-content-between"
              >
                <ArrowLeft
                  onClick={() => {
                    if (renderImg > 0) {
                      setRenderImg(renderImg - 1);
                    }
                  }}
                  className="cursorPointer"
                  style={{ fontSize: "52px" }}
                />
                <div className="text-center">
                  <img
                    src={`https://vetawan.vercel.app/${product?.image}`}
                    width="80%"
                  />
                </div>
                <ArrowRight
                  onClick={() => {
                    if (renderImg < allImg?.length - 1) {
                      setRenderImg(renderImg + 1);
                    }
                  }}
                  className="cursorPointer"
                  style={{ fontSize: "52px" }}
                />
              </div>
              <div className="px-1">
                <Grid container>
                  {/* <Grid item xs={3} onClick={() => setRenderImg(i)}>
                    <div className="cursorPointer">
                      <img src={e} width="100%" />
                    </div>
                  </Grid> */}
                  <Grid item xs={3}>
                    <div className="cursorPointer">
                      <img
                        src={`https://vetawan.vercel.app/${product?.image}`}
                        width="100%"
                      />
                    </div>
                  </Grid>
                  {/* {allImg.map((e, i) => {
                    return (
                      <Grid item xs={3} onClick={() => setRenderImg(i)}>
                        <div className="cursorPointer">
                          <img src={e} width="100%" />
                        </div>
                      </Grid>
                    );
                  })} */}

                  {/* <Grid item xs={3}>
                    <div className="cursorPointer">
                      <img src={milkPreventing} width="100%" />
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="cursorPointer">
                      <img src={milkPreventing} width="100%" />
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      className="cursorPointer"
                      style={{ border: "1px solid gray" }}
                    >
                      <img src={milkPreventing} width="100%" />
                    </div>
                  </Grid> */}
                </Grid>
                {/* <img src={milkPreventing} width="100%" /> */}
              </div>
            </Grid>
            <Grid item md={6} xs={12} style={{ height: "400px" }}>
              <div className="d-flex flex-column justify-content-end">
                <div>
                  <Rating value={5} />
                  <p className="Poppins-SemiBold" style={{ fontSize: "2rem" }}>
                    {product?.product_name ?? "-"}
                  </p>
                  <p className="Poppins-Regular fs-14">
                    Produc Code : IMT42469-GREY-S
                  </p>
                  <p className="Poppins-Medium fs-24 mb-1">
                    {" "}
                    {product?.price ?? "-"}
                  </p>
                </div>
                <div className="mb-3">
                  <Grid container>
                    <Grid xs={12} className="mt-1">
                      <p className="fs-16 text-primary Poppins-Medium">
                        Variant
                      </p>
                      <Grid container>
                        <Grid xs={2}>
                          <div style={{ padding: "0px 10px 0px 0px" }}>
                            <div
                              style={{
                                border: "1px solid gray",
                                cursor: "pointer",
                              }}
                            >
                              <p className="fs-12 text-center">2 inch</p>
                            </div>
                          </div>
                        </Grid>
                        <Grid xs={2}>
                          <div style={{ padding: "0px 10px 0px 0px" }}>
                            <div
                              style={{
                                border: "1px solid gray",
                                cursor: "pointer",
                              }}
                            >
                              <p className="fs-12 text-center">5 inch</p>
                            </div>
                          </div>
                        </Grid>
                        <Grid xs={2}>
                          <div style={{ padding: "0px 10px 0px 0px" }}>
                            <div
                              style={{
                                border: "1px solid gray",
                                cursor: "pointer",
                              }}
                            >
                              <p className="fs-12 text-center">8 inch</p>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
                <div className="mb-1">
                  <p className="text-primary fs-12">Quantity</p>
                  <Quantity />
                </div>
                <BAButton fontSize="12px" value="Add to cart" />
                <div className="mt-3">
                  <p className="fs-18">{product?.product_description ?? "-"}</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="mt-5" style={{ marginTop: "100px" }}>
          <div className="d-flex flex-column px-2 my-1">
            <p
              className="Poppins-SemiBold text-primary reviwes"
              // style={{ fontSize: "24px" }}
            >
              You may also like
            </p>
          </div>
          <div>
            <Grid container columnSpacing={2} rowSpacing={4} className="px-2">
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
        </div>
        <div className="mb-5">
          <div className="d-flex align-items-center justify-content-between px-2 my-1">
            <p className="Poppins-SemiBold text-primary reviwes">Reviews</p>
            <Button
              onClick={() => setShowReview(true)}
              //   onClick={() => navigate("/collection")}
              variant="outlined"
              size="large"
              endIcon={<EditIcon />}
              style={{ fontFamily: "Poppins-SemiBold", fontSize: "14px" }}
            >
              Write a Review
            </Button>
          </div>

          <BADivider />
          <div
            className="my-2 text-center"
            style={{
              display: !showReview ? "block" : "none",
              //   transition: "all 5s ease",
            }}
          >
            <Rating value={5} readOnly />
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={4}>
                <BAButton
                  onClick={() => setShowReview(true)}
                  value="Be the first to write a review"
                />
              </Grid>
            </Grid>
          </div>
          <div
            className="my-1 px-2"
            style={{ display: showReview ? "block" : "none" }}
          >
            <p className="fs-22 Poppins-SemiBold">Write a Review</p>
            <p className="Poppins-Medium">How do you rate this product?</p>
            <Grid container>
              <Grid item xs={24}>
                <div className="my-1">
                  <Rating readOnly value={5} />
                </div>
                <div className="my-1">
                  <p className="Poppins-Regular fs-20">Title: </p>
                  <Grid container>
                    <Grid item xs={12}>
                      <BAInput />
                    </Grid>
                  </Grid>
                </div>
                <div className="my-1">
                  <p className="Poppins-Regular fs-20">Review: </p>
                  <Grid container>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        fullWidth
                        rows={4}
                      />
                    </Grid>
                  </Grid>
                </div>
                <div className="my-1">
                  <Grid container justifyContent="end">
                    <Grid item xs={2}>
                      <BAButton
                        onClick={() => setShowReview(false)}
                        value="Add Review"
                      />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="mb-5">
          <div className="d-flex flex-column px-2 my-1">
            <p
              className="Poppins-SemiBold text-primary fs-22"
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
      </div>
      <Footer />
    </>
  );
};
