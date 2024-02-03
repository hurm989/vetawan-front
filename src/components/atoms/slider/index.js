// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./style.css"; // Import your CSS file
// import banner from "../../../assets/banner.jpeg";
// import { Card, Grid } from "@mui/material";
// import BAButton from "../button";

// const BannerSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <>
//       <Slider {...settings}>
//         <div style={{ position: "relative" }}>
//           <img src={banner} className="slider-image" alt="Banner 1" />
//           <Card>
//             <div className="offer-container">
//               <p className="offer-text">Free Shipping</p>
//               <p className="py-2 fs-18 text-gray">
//                 Take the Weight Off Your Wallet with Free Shipping!
//               </p>
//               <Grid container>
//                 <Grid xs={5}>
//                   <div>
//                     <BAButton value="Order Now" />
//                   </div>
//                 </Grid>
//               </Grid>
//             </div>
//           </Card>
//         </div>
//         <div style={{ position: "relative" }}>
//           <img src={banner} className="slider-image" alt="Banner 1" />
//           <Card>
//             <div className="offer-container">
//               <p className="offer-text">Free Shipping</p>
//               <p className="py-2 fs-18 text-gray">
//                 Take the Weight Off Your Wallet with Free Shipping!
//               </p>
//               <Grid container>
//                 <Grid xs={5}>
//                   <div>
//                     <BAButton value="Order Now" />
//                   </div>
//                 </Grid>
//               </Grid>
//             </div>
//           </Card>
//         </div>
//         <div style={{ position: "relative" }}>
//           <img src={banner} className="slider-image" alt="Banner 1" />
//           <Card>
//             <div className="offer-container">
//               <p className="offer-text">Free Shipping</p>
//               <p className="py-2 fs-18 text-gray">
//                 Take the Weight Off Your Wallet with Free Shipping!
//               </p>
//               <Grid container>
//                 <Grid xs={5}>
//                   <div>
//                     <BAButton value="Order Now" />
//                   </div>
//                 </Grid>
//               </Grid>
//             </div>
//           </Card>
//         </div>
//         {/* Add more slides as needed */}
//       </Slider>
//       {/* <img src={banner} className="slider-image" alt="Banner 1" /> */}
//     </>
//   );
// };

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./style.css"; // Import your CSS file
import banner from "../../../assets/banner.jpeg";
// // import bannerTwo from "../../../assets/bannerTwo.jpeg";
import bannerTwo from "../../../assets/bannerTwo.jpeg";
import bannerFin from "../../../assets/1.png";
import bannerFinTwo from "../../../assets/2.png";
import bannerFinOne from "../../../assets/3.png";
// import bannerNewOne from "../../../assets/bannerNew1.png";
// import bannerNewTwo from "../../../assets/bannerNew2.png";
// import { Card, Grid } from "@mui/material";
// import bannerFin from "../../../assets/Dairy-01.jpg";
// import bannerFinTwo from "../../../assets/Horse Gears-02.jpg";
// import BAButton from "../button";

// const BannerSlider = () => {
//   //   const settings = {
//   //     dots: true,
//   //     infinite: true,
//   //     speed: 500,
//   //     slidesToShow: 1,
//   //     slidesToScroll: 1,
//   //   };
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 3000, // Set autoplay interval to 5000 milliseconds (5 seconds)
//   };

//   return (
//     <>
//       <Slider {...settings} className="popularCards">
//         <div>
//           <img src={bannerTwo} className="slider-image" alt="Banner 1" />
//         </div>
//         <div>
//           <img src={banner} className="slider-image" alt="Banner 1" />
//         </div>
//       </Slider>
//     </>
//   );
// };

// export default BannerSlider;
// {
//   /* <Card>
//             <div className="offer-container">
//               <p className="offer-text">Horse Gear</p>
//               <p className="py-2 fs-18 text-gray">
//                 Unleash the Power of Elegance: Equipping Your Noble Steed <br />{" "}
//                 with Premium Horse Gear.
//               </p>
//               <Grid container>
//                 <Grid xs={5}>
//                   <div>
//                     <BAButton value="Order Now" />
//                   </div>
//                 </Grid>
//               </Grid>
//             </div>
//           </Card> */
// }
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const BASimpleSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const intervalId = setInterval(() => {
      if (slider) {
        slider.slickNext();
      }
    }, 3000); // Change this value to adjust the autoplay interval

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    // <div className="mainContainer">
    <Slider ref={sliderRef} {...settings}>
      <div>
        <img
          style={{ maxWidth: "100%", height: "auto", margin: "auto" }}
          className="slider-image"
          src={bannerFinOne}
          alt=""
        />
      </div>
      <div>
        <img
          style={{ maxWidth: "100%", height: "auto", margin: "auto" }}
          className="slider-image"
          width="100%"
          src={bannerFinTwo}
          alt=""
        />
      </div>
      <div style={{ maxWidth: "100%", height: "auto", margin: "auto" }}>
        <img
          className="slider-image"
          style={{ width: "100%", height: "auto" }}
          src={bannerFin}
          alt=""
        />
      </div>
    </Slider>
    // </div>
  );
};

export default BASimpleSlider;

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }} // Hide on smaller screens
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }} // Hide on smaller screens
      onClick={onClick}
    />
  );
};
