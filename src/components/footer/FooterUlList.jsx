import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faV } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faVk,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import healthLogo from "../../molva/fix/health.png";
import mindray from "../../molva/fix/icon-logo (2).png";

function FooterUlList() {
  return (
    <div className="footer__body">
      <ul className="f__about">
        <li>Акции</li>
        <li>
          <a href="">О компании</a>
        </li>
        <li>
          <a href="">Сервис</a>
        </li>
        <li>
          <a href="">Обучение</a>
        </li>
        <li>
          <a href="">Новости</a>
        </li>
        <li>
          <a href="">Отзывы</a>
        </li>
        <li>
          <a href="">Доставка и оплата</a>
        </li>
      </ul>

      <ul className="f__catalog">
        <li>Каталог</li>
        <li>
          <a href="">Узи</a>
        </li>
        <li>
          <a href="">Рентгены</a>
        </li>
        <li>
          <a href="">Датчики</a>
        </li>
        <li>
          <a href="">Томографы</a>
        </li>
        <li>
          <a href="">Эндоскопия</a>
        </li>
      </ul>

      <ul className="f__contacts">
        <li>Контакты </li>
        <li>
          <a href="">Заказать звонок</a>
        </li>
        <li>
          <a href="">+7 (499) 495-48-21</a>
        </li>
        <li>
          <a href="">Пн-Пт: с 9:00 до 19:00</a>
        </li>
        <li>
          <a href="">г.Москва, ул.Боровая, д.7/7</a>
        </li>
      </ul>

      <ul className="f__social">
        <li>Соц. сети</li>
        <li>
          <a href="">
            <FontAwesomeIcon className="f__body_r_icon" icon={faFacebook} />
            Фейсбук
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon className="f__body_r_icon" icon={faVk} />
            Вконтакте
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon className="f__body_r_icon" icon={faInstagram} />
            Инстаграм
          </a>
        </li>
      </ul>

      <div className="footer__body_logo">
        <div>
          <img src={healthLogo} alt="" />
          <hr />
          <img src={mindray} alt="" />
        </div>
        <p>
          Официальный дистрибьютор медицинского оборудования GE Healthcare и
          mindray в России
        </p>
      </div>
    </div>
  );
}

export default FooterUlList;
