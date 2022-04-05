/* eslint-disable no-unused-expressions */
// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Scrollbar } from "swiper";
import "swiper/css";

const logo = require("../../molva/sponsors/image (1).png");
const logo2 = require("../../molva/sponsors/image (2).png");
const logo3 = require("../../molva/sponsors/image (3).png");
const logo4 = require("../../molva/sponsors/image (4).png");
const logo5 = require("../../molva/sponsors/image (5).png");
const logo6 = require("../../molva/sponsors/image (6).png");
const logo7 = require("../../molva/sponsors/image (7).png");
const logo8 = require("../../molva/sponsors/image (8).png");
const logo9 = require("../../molva/sponsors/image (9).png");

function ResultsManufacture() {
  const [perView, setPerView] = useState(6);
  const [activeImg, setActiveImg] = useState("Drager");
  const [manufacture, setManufacture] = useState({ title: "Philips" });

  function myFunction(x) {}

  useEffect(() => {
    if (window.matchMedia("(max-width: 1200px)").matches) {
      setPerView(5);
    } else if (window.matchMedia("(max-width: 780px").matches) {
      setPerView(4);
    } else if (window.matchMedia("(max-width: 500px").matches) {
      setPerView(2);
    }

    var mql = window.matchMedia("(max-width: 600px)");

    mql.onchange = (e) => {
      if (window.matchMedia("(max-width: 500px").matches) {
        setPerView(2);
      }
      if (window.matchMedia("(max-width: 780px").matches) {
        setPerView(4);
      }
      if (window.matchMedia("(max-width: 1200px)").matches) {
        setPerView(5);
      }
    };
  }, []);

  const handleImgClick = (e) => {
    const data = e.target.getAttribute("datatype");
    setActiveImg(data);

    const manufacture = {
      title: data,
      image: e.target.src,
    };

    setManufacture(manufacture);
  };

  return (
    <>
      <div className="manufactures">
        <Swiper
          scrollbar={true}
          slidesPerView={3}
          modules={[Scrollbar]}
          className="mySwiper manufactures__wrapper"
        >
          <SwiperSlide>
            <img
              onClick={handleImgClick}
              className={activeImg === "Drager" ? "active" : ""}
              src={logo}
              alt="manufacture"
              datatype="Drager"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={handleImgClick}
              className={activeImg === "Philips" ? "active" : ""}
              src={logo2}
              alt="manufacture"
              datatype="Philips"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={handleImgClick}
              className={activeImg === "С.П.Гелпик" ? "active" : ""}
              src={logo3}
              alt="manufacture"
              datatype="С.П.Гелпик"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={handleImgClick}
              className={activeImg === "Pentax Medical" ? "active" : ""}
              src={logo4}
              alt="manufacture"
              datatype="Pentax Medical"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={handleImgClick}
              className={activeImg === "Medtronic" ? "active" : ""}
              src={logo5}
              alt="manufacture"
              datatype="Medtronic"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={handleImgClick}
              className={activeImg === "Heinemann" ? "active" : ""}
              src={logo6}
              alt="manufacture"
              datatype="Heinemann"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={handleImgClick}
              className={activeImg === "Olympus" ? "active" : ""}
              src={logo7}
              alt="manufacture"
              datatype="Olympus"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={handleImgClick}
              className={activeImg === "Mindra" ? "active" : ""}
              src={logo8}
              alt="manufacture"
              datatype="Mindra"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={handleImgClick}
              className={activeImg === "GE Healthcare" ? "active" : ""}
              src={logo9}
              alt="manufacture"
              datatype="GE Healthcare"
            />
          </SwiperSlide>
        </Swiper>
        <div className="manufactures__wrapper"></div>

        <div className="manufacture_info">
          <img
            className="ma-img"
            src={manufacture.image ? manufacture.image : logo}
            alt=""
          />
          <div className="manufacture_info_box">
            <h5 className="manufacture_info_title">
              {manufacture ? manufacture.title : ""}
            </h5>
            <p className="manufacture_info_des">
              Клиника дерматологии, Многопрофильный медицинский центр,
              Амбулаторно-хирургический центр с собственным стационаром
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultsManufacture;
