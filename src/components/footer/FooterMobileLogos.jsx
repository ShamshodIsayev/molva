import healthLogo from "../../molva/fix/health.png";
import mindray from "../../molva/fix/icon-logo (2).png";
import React from "react";

function FooterMobileLogos() {
  return (
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
  );
}

export default FooterMobileLogos;
