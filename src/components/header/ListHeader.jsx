import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function ListHeader() {
  const [menuStatus, setMenuStatus] = useState(false);

  const handleClickBtn = (e) => {
    setMenuStatus(!menuStatus);
  };

  return (
    <div
      className={
        menuStatus ? "header__nav_container active" : "header__nav_container"
      }
    >
      <ul className="header__nav_ul_info">
        <li>г. Москва, ул. Боровая, д. 7/7</li>
        <li>+7 (499) 495-48-21</li>
        <li>Доставка и оплата</li>
      </ul>

      <ul className="header__ul">
        <li className="header__ul_li">
          <a href="">О компании</a>
        </li>
        <li className="header__ul_li">
          <a href="">Каталог</a>
        </li>
        <li className="header__ul_li">
          <a href="">Сервис</a>
        </li>
        <li className="header__ul_li">
          <a href="">Акции</a>
        </li>
        <li className="header__ul_li">
          <a href="">Новости</a>
        </li>
        <li className="header__ul_li">
          <a href="">Вакансии</a>
        </li>
        <li className="header__ul_li">
          <a href="">Контакты</a>
        </li>
      </ul>
      <div className="overlay" onClick={handleClickBtn}></div>
      <FontAwesomeIcon
        className="header__bars"
        onClick={handleClickBtn}
        icon={faBars}
      />
      <FontAwesomeIcon
        className="header__xmark"
        onClick={handleClickBtn}
        icon={faXmark}
      />
    </div>
  );
}

export default ListHeader;
