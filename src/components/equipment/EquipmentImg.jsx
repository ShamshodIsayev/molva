import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../molva/example-img.png";

function EquipmentImg() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <img
      className="equipment__img"
      src={img}
      alt=""
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    />
  );
}

export default EquipmentImg;
