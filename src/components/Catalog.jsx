import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/catalog.css";
import banner from "../molva/banners/banners (1).png";
import banner2 from "../molva/banners/banners (2).png";
import banner3 from "../molva/banners/banners (3).png";

function Catalog() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="catalog">
      <div className="catalog__wrapper">
        <img
          src={banner}
          alt="banner"
          data-aos="fade-up"
          data-aos-duration="1300"
          data-aos-anchor-placement="center-bottom"
        />
        <img
          src={banner2}
          alt="banner"
          data-aos-duration="1300"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        />
        <img
          src={banner3}
          alt="banner"
          data-aos-duration="1300"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        />
      </div>
      <button className="catalog__btn">Перейти в каталог</button>
    </section>
  );
}

export default Catalog;
