import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./BrabdsSlider.css";

const brandsData = [
  { src: "/b1.webp", name: "Brand 1", cars: 5 },
  { src: "/b2.webp", name: "Brand 2", cars: 8 },
  { src: "/b3.webp", name: "Brand 3", cars: 12 },
  { src: "/b4.webp", name: "Brand 4", cars: 3 },
  { src: "/b5.webp", name: "Brand 5", cars: 7 },
  { src: "/b6.webp", name: "Brand 6", cars: 10 },
  { src: "/b7.webp", name: "Brand 6", cars: 10 },
  { src: "/b8.webp", name: "Brand 6", cars: 10 },
  { src: "/b4.webp", name: "Brand 6", cars: 10 },
  { src: "/b10.webp", name: "Brand 6", cars: 10 },
  { src: "/b11.webp", name: "Brand 6", cars: 10 },
  { src: "/b12.webp", name: "Brand 6", cars: 10 },
  { src: "/b10.webp", name: "Brand 6", cars: 10 },
  { src: "/b14.webp", name: "Brand 6", cars: 10 },
  { src: "/b16.webp", name: "Brand 6", cars: 10 },
  { src: "/b17.webp", name: "Brand 6", cars: 10 },
  { src: "/b18.webp", name: "Brand 6", cars: 10 },
  { src: "/b19.webp", name: "Brand 6", cars: 10 },
  { src: "/b20.webp", name: "Brand 6", cars: 10 },
  { src: "/b22.webp", name: "Brand 6", cars: 10 },
  { src: "/b21.webp", name: "Brand 6", cars: 10 },
  // ... Add more data as needed
];

const BrandsSlider = () => {
  return (
    <div className="bg-class-sliders">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={10}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {brandsData.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="brand-1">
              <a href="#!">
                <img src={brand.src} alt={brand.name} />
                <p>{brand.name}</p>
                <p>{brand.cars} Cars</p>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandsSlider;
