import React from "react";
import img1 from "../../molva/fix/1.png";
import img2 from "../../molva/fix/2.png";
import img3 from "../../molva/fix/3.png";
import img4 from "../../molva/fix/4.png";
import img5 from "../../molva/fix/5.png";
import img6 from "../../molva/fix/6.png";

function ServiceCategory() {
  return (
    <ul className="service_list">
      <li className="service__list_container">
        <img className="service__list_img" src={img1} alt="" />
        <div className="service__list_info">
          <h6 className="service__list_title">Эксплуатация</h6>
          <p className="service__list_des">
            Устанавливаем и вводим в эксплуатацию оборудование
          </p>
        </div>
      </li>
      <li className="service__list_container">
        <img className="service__list_img" src={img2} alt="" />
        <div className="service__list_info">
          <h6 className="service__list_title">Тестирование</h6>
          <p className="service__list_des">
            Проводим предпродажное тестирование техники
          </p>
        </div>
      </li>
      <li className="service__list_container">
        <img className="service__list_img" src={img3} alt="" />
        <div className="service__list_info">
          <h6 className="service__list_title">Обучение</h6>
          <p className="service__list_des">
            Обучаем персонал работе с новым оборудованием
          </p>
        </div>
      </li>
      <li className="service__list_container">
        <img className="service__list_img" src={img4} alt="" />
        <div className="service__list_info">
          <h6 className="service__list_title">Диагностика</h6>
          <p className="service__list_des">
            Проводим экспертизы и техническую диагностику
          </p>
        </div>
      </li>
      <li className="service__list_container">
        <img className="service__list_img" src={img5} alt="" />
        <div className="service__list_info">
          <h6 className="service__list_title">Ремонт</h6>
          <p className="service__list_des">
            Ремонтируем ультразвуковые датчики
          </p>
        </div>
      </li>
      <li className="service__list_container">
        <img className="service__list_img" src={img6} alt="" />
        <div className="service__list_info">
          <h6 className="service__list_title">Гарантия</h6>
          <p className="service__list_des">
            Обслуживаем в рамках гарантии и не только
          </p>
        </div>
      </li>
    </ul>
  );
}

export default ServiceCategory;
