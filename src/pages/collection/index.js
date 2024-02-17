import MobAppBar from "../../components/atoms/mobAppBar";
import Footer from "../../components/modules/footer";
import Header from "../../components/modules/header";
import SearchNavbar from "../../components/modules/searchNav";
import DrawerAppBar from "../../components/atoms/appBar";
import { Divider, Grid, Pagination, Skeleton } from "@mui/material";
import { all_products } from "../../config/utils/products";
import ProductCards from "../../components/molecules/card";
import { useEffect, useState } from "react";
import Categories from "../../components/modules/categories";
import { Get } from "../../config/apiMethod";
import BAButton from "../../components/atoms/button";
import { CancelOutlined } from "@mui/icons-material";

export default function Collections() {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState();
  const [childData, setChildData] = useState(null);
  const [productLoadin, setProductLoading] = useState(false);
  // const [changeCategory, setChangeCategory] = useState();

  // Function to receive data from the child
  const handleChildData = (dataFromChild) => {
    setChildData(dataFromChild);
    console.log(dataFromChild, "DATAFROMCHILD");
  };
  const getCategory = async () => {
    try {
      setLoading(true);
      const response = await Get(`/store/api/`);
      const exampleCategories = response?.categories.map((category) => {
        const subcategories = response?.subcategories
          .filter((subcategory) => subcategory?.category === category.id)
          .map((subcategory) => subcategory?.subcategory_name);

        return {
          name: category?.category_name,
          subcategories: subcategories,
        };
      });
      setCategories(exampleCategories);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const getAllProducts = async () => {
    setProductLoading(true);
    try {
      const response = await Get(`/store/api/products${childData ?? "/"}`);
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
  console.log(allProducts, "ALLPRODUCTSSSSSS");
  useEffect(() => {
    getCategory();
  }, []);
  useEffect(() => {
    getAllProducts();
  }, [childData]);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <div className="bg-gray py-3">
        <div className="mainContainer ">
          <p className="Poppins-SemiBold" style={{ fontSize: "26px" }}>
            Our Shop
          </p>
          <div style={{ maxHeight: "100px", overflowY: "scroll" }}>
            <div></div>
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className="px-2">
          <Grid container>
            <Grid item md={2} xs={12} style={{ position: "sticky", top: "0" }}>
              <div>
                <div>
                  <div className="d-flex justify-content-between align-items-center pe-1  ">
                    <p className="fs-24 Poppins-SemiBold mb-1 text-primary">
                      Categories :
                    </p>
                    <CancelOutlined
                      className="cursorPointer"
                      onClick={() => setChildData("")}
                    />
                  </div>
                  <div className="pe-1">
                    <Divider />
                  </div>
                  {loading
                    ? [1, 2, 3].map(() => {
                        return (
                          <div className="px-1">
                            {" "}
                            <Skeleton
                              variant="text"
                              sx={{ fontSize: "1rem" }}
                            />
                          </div>
                        );
                      })
                    : categories &&
                      categories.length && (
                        <Categories
                          categories={categories}
                          sendDataToParent={handleChildData}
                        />
                      )}
                  {}

                  {/* 
                  <div>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label="Veterinary Equipments"
                      />
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label="Surgical Instruments"
                      />
                      <FormControlLabel
                        className="mb-1"
                        control={<Checkbox size="small" />}
                        label="Horse Gear"
                      />
                    </FormGroup>
                  </div>
                  <div className="pe-1">
                    <Divider />
                  </div> */}

                  {/* <p className="fs-18 Poppins-SemiBold text-primary mt-1">
                    Price
                  </p>
                  <div style={{ paddingRight: "30px", paddingLeft: "8px" }}>
                    <Slider
                      max={5000}
                      min={1000}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                    />
                    <div className="d-flex justify-content-between mb-1">
                      <p>1000</p>
                      <p>5000</p>
                    </div>
                  </div>
                  <div className="pe-1">
                    <Divider />
                  </div>
                  <p className="fs-18 Poppins-SemiBold text-primary mt-1">
                    Rating
                  </p>
                  <div style={{ paddingRight: "30px", paddingLeft: "8px" }}>
                    <Slider
                      max={5}
                      min={1}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                    />
                    <div className="d-flex justify-content-between">
                      <p>1</p>
                      <p>5</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </Grid>

            <Grid item md={10} xs={12}>
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
                        />
                      );
                    })}
                {/* {} */}
              </Grid>
              {/* <div className="mt-3">
                <div className="d-flex justify-content-center">
                  <Pagination count={10} color="primary" />
                </div>
              </div> */}
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}
