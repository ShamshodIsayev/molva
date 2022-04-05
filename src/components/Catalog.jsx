import React from "react";
import "../styles/catalog.css";
import banner from "../molva/banners/banners (1).png";
import banner2 from "../molva/banners/banners (2).png";
import banner3 from "../molva/banners/banners (3).png";

function Catalog() {
  return (
    <section className="catalog">
      <div className="catalog__wrapper">
        <img src={banner} alt="banner" />
        <img src={banner2} alt="banner" />
        <img src={banner3} alt="banner" />
      </div>
      <button className="catalog__btn">Перейти в каталог</button>
    </section>
  );
}

export default Catalog;
