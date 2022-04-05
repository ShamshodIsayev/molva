import React from "react";
import ServiceCategory from "./ServiceCategory";
import "../../styles/service.css";
import iconLogo from "../../molva/fix/icon-logo (1).png";
import iconLogo2 from "../../molva/fix/icon-logo (2).png";

function Service() {
  return (
    <>
      <section className="service">
        <h2 className="service__title">
          Ремонт и обслуживание медицинского оборудования
        </h2>
        <p className="service__des">
          MEDFORD — официальный представитель и специализированный сервисный
          центр медицинской техники Mindray и GE Healthcare в Российской
          Федерации. Мы предоставляем полный спектр услуг по сервисному
          обслуживанию, диагностике и ремонту медоборудования.
        </p>

        <div className="service__block">
          <img
            className="service__block_img"
            src={iconLogo}
            alt="service block"
          />
          <hr className="service__block_hr" />
          <img
            className="service__block_img"
            src={iconLogo2}
            alt="service block"
          />
          <span className="service__block_span">
            Лицензия Росздравнадзора №ФС-99-04-000387
          </span>
        </div>
        <ServiceCategory />
      </section>

      <hr className="service__hr" />
    </>
  );
}

export default Service;
