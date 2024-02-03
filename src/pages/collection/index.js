import MobAppBar from "../../components/atoms/mobAppBar";
import Footer from "../../components/modules/footer";
import Header from "../../components/modules/header";
import SearchNavbar from "../../components/modules/searchNav";
import DrawerAppBar from "../../components/atoms/appBar";
import { Checkbox, Divider, Grid, Pagination } from "@mui/material";
import { all_products, popular_products } from "../../config/utils/products";
import ProductCards from "../../components/molecules/card";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import { CheckBox } from "@mui/icons-material";
import Slider from "@mui/material/Slider";
import { useEffect } from "react";

export default function Collections() {
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
            <Grid item md={2} xs={12}>
              <div>
                <div>
                  <p className="fs-24 Poppins-SemiBold mb-1 text-primary">
                    Filters :
                  </p>
                  <div className="pe-1">
                    <Divider />
                  </div>
                  {/* <Divider style={{ paddingRight: "10px" }} /> */}
                  <p className="fs-18 Poppins-SemiBold mb-1 text-primary mt-1">
                    Categories
                  </p>

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
                  </div>
                  {/* <p className="fs-18 Poppins-SemiBold my-1 text-primary">
                    Sizes
                  </p>
                  <div>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label="5 inch"
                      />
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label="6 inch"
                      />
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label="7 inch"
                      />
                      <FormControlLabel
                        className="mb-1"
                        control={<Checkbox size="small" />}
                        label="8 inch"
                      />
                    </FormGroup>
                  </div>
                  <div className="pe-1">
                    <Divider />
                  </div> */}
                  <p className="fs-18 Poppins-SemiBold text-primary mt-1">
                    Price
                  </p>
                  <div style={{ paddingRight: "30px", paddingLeft: "8px" }}>
                    <Slider
                      // defaultValue={50}
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
                      // defaultValue={50}
                      max={5}
                      min={1}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                    />
                    <div className="d-flex justify-content-between">
                      <p>1</p>
                      <p>5</p>
                    </div>
                  </div>
                </div>
                {/* <div>
                    <p className="fs-24 Poppins-SemiBold">Filters</p>
                    <div>
                      <p>Price</p>
                    </div>
                  </div> */}
              </div>
            </Grid>
            <Grid item md={10} xs={12}>
              <Grid container columnSpacing={2} rowSpacing={4}>
                {all_products?.map((elem, index) => {
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
              <div className="mt-3">
                <div className="d-flex justify-content-center">
                  <Pagination count={10} color="primary" />
                </div>
              </div>
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
