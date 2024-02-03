// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./style.css";
import ProductCards from "../../molecules/card";
import { productDetails } from "../../../config/utils/products";
import ReviewCards from "../../molecules/reviewCards";
import { Grid, Paper, Rating } from "@mui/material";

export default function Carousel() {
  return (
    <>
      <Swiper
        className="desktopView"
        spaceBetween={20}
        slidesPerView={3.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ cursor: "pointer" }}
      >
        {/* {productDetails?.map((elem, index) => {
        return <SwiperSlide> ReviewCards</SwiperSlide>;
      })} */}
        <SwiperSlide>
          <div className="p1">
            <ReviewCards />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p1">
            <ReviewCards />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p1">
            <ReviewCards />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p1">
            <ReviewCards />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p1">
            <ReviewCards />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p1">
            <ReviewCards />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p1">
            <ReviewCards />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p1">
            <ReviewCards />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="mobView">
        <Grid container spacing={1} className="px-1">
          <Grid item xs={12}>
            <Paper
              style={{ border: "2px solid #008ace", padding: "10px 20px" }}
            >
              <div className="my-1">
                <div className="d-flex justify-content-between">
                  <Rating readOnly value={5} />
                  <p>01/11/23</p>
                </div>
                <p className="mt-1 Poppins-Medium" style={{ fontSize: "14px" }}>
                  I have ordered many items ,good service, delivery on time
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              style={{ border: "2px solid #008ace", padding: "10px 20px" }}
            >
              <div className="my-1">
                <div className="d-flex justify-content-between">
                  <Rating readOnly value={5} />
                  <p>01/11/23</p>
                </div>
                <p className="mt-1 Poppins-Medium" style={{ fontSize: "14px" }}>
                  I have ordered many items ,good service, delivery on time
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              style={{ border: "2px solid #008ace", padding: "10px 20px" }}
            >
              <div className="my-1">
                <div className="d-flex justify-content-between">
                  <Rating readOnly value={5} />
                  <p>01/11/23</p>
                </div>
                <p className="mt-1 Poppins-Medium" style={{ fontSize: "14px" }}>
                  I have ordered many items ,good service, delivery on time
                </p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
