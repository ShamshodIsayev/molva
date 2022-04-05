import React, { useState } from "react";
import { Scrollbar, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "../styles/certificate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import cerImg1 from "../molva/certificates/Group 75.png";
import cerImg2 from "../molva/certificates/Group 76.png";
import cerImg3 from "../molva/certificates/Group 77.png";
import cerImg4 from "../molva/certificates/Group 426.png";
import CertificatePopUp from "./certificates/CertificatePopUp";

function Certificate() {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [popUp, setPopUp] = useState(false);
  const [propData, setPropData] = useState("");

  const handleImgClick = (e) => {
    const src = e.target.src;
    setPropData(src);
    setPopUp(true);
  };

  return (
    <section className="certificate">
      {popUp ? <CertificatePopUp data={propData} setProp={setPopUp} /> : ""}
      <h2 className="certificate__title">Сертификаты и дипломы</h2>
      <p className="certificate__des">
        C 2010 года мы получили более 50 сертификатов
      </p>
      <Swiper
        modules={[Navigation, Autoplay]}
        mousewheel={true}
        className="certificate__container"
        spaceBetween={170}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 1500,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        scrollbar={{ draggable: true }}
        controller={{ control: controlledSwiper }}
      >
        <SwiperSlide>
          <div className="certificate__container">
            <div className="div">
              <img className="cert__img" src={cerImg1} alt="" />
              <FontAwesomeIcon
                className="glass_icon"
                icon={faMagnifyingGlass}
              />
            </div>
            <div className="div">
              <img
                className="cert__img"
                src={cerImg2}
                alt=""
                onClick={handleImgClick}
              />
              <FontAwesomeIcon
                className="glass_icon"
                icon={faMagnifyingGlass}
              />
            </div>
            <div className="cert_img_pre div">
              <img
                className="cert__img "
                src={cerImg3}
                alt=""
                onClick={handleImgClick}
              />
              <FontAwesomeIcon
                className="glass_icon"
                icon={faMagnifyingGlass}
              />
            </div>
            <div className="cert_img_last div">
              <img
                className="cert__img "
                src={cerImg4}
                alt=""
                onClick={handleImgClick}
              />
              <FontAwesomeIcon
                className="glass_icon"
                icon={faMagnifyingGlass}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="certificate__container">
            <div className="cert_img_first div">
              <img
                className="cert__img cert_img_first"
                src={cerImg1}
                alt=""
                onClick={handleImgClick}
              />
              <FontAwesomeIcon
                className="glass_icon"
                icon={faMagnifyingGlass}
              />
            </div>
            <div className="cert_img_second div">
              <img
                className="cert__img "
                src={cerImg2}
                alt=""
                onClick={handleImgClick}
              />
              <FontAwesomeIcon
                className="glass_icon"
                icon={faMagnifyingGlass}
              />
            </div>
            <div className="div">
              <img
                className="cert__img "
                src={cerImg3}
                alt=""
                onClick={handleImgClick}
              />
              <FontAwesomeIcon
                className="glass_icon"
                icon={faMagnifyingGlass}
              />
            </div>
            <div className="div">
              <img
                className="cert__img "
                src={cerImg4}
                alt=""
                onClick={handleImgClick}
              />
              <FontAwesomeIcon
                className="glass_icon"
                icon={faMagnifyingGlass}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Certificate;
