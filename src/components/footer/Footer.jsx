// @ts-nocheck
import React from "react";
import logo from "../../molva/header/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import {
  faFacebook,
  faVk,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../../styles/footer.css";
import FooterUlList from "./FooterUlList";
import FooterMobileLogos from "./FooterMobileLogos";

function Footer() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 767px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <footer className="footer">
      {isBigScreen && (
        <>
          <div className="footer__head">
            <div className="footer__head_left">
              <img src={logo} alt="" />
              <span>
                MEDFORD – обслуживание, продажа и ремонт медицинского
                оборудования в Москве © 2009 - 2020
              </span>
            </div>
            <div className="footer__head_right">
              <button>
                <FontAwesomeIcon className="f__head_r_icon" icon={faDownload} />
                Скачать электронный каталог
              </button>
            </div>
          </div>
          <hr className="footer__hr" />
          <FooterUlList />
        </>
      )}

      {isTabletOrMobile && (
        <>
          <div className="f__mob_head">
            <img src={require("../../molva/icons/medford.png")} alt="" />
            <div className="f__mob_icons">
              <FontAwesomeIcon className="f__body_r_icon" icon={faFacebook} />
              <FontAwesomeIcon className="f__body_r_icon" icon={faVk} />
              <FontAwesomeIcon className="f__body_r_icon" icon={faInstagram} />
            </div>
          </div>
          <hr className="footer__hr" />
          <FooterMobileLogos />

          <div className="footer__head_right">
            <button>
              <FontAwesomeIcon className="f__head_r_icon" icon={faDownload} />
              Скачать электронный каталог
            </button>
          </div>

          <hr className="footer__hr" />

          <span className="f__mob_des">
            MEDFORD – обслуживание, продажа и ремонт медицинского оборудования в
            Москве © 2009 - 2020
          </span>

          <span className="f__mob_des">
            dev by <a href="">Kims</a>
          </span>
        </>
      )}
    </footer>
  );
}

export default Footer;
