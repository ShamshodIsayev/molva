import React from "react";
import image from "../../molva/equipment-icon.png";

function EquipmentList() {
  return (
    <ul className="equipment__ul">
      <li>
        Магнитно-резонансные и Компьютерные томографы{" "}
        <img className="equipment__ul_icon" src={image} alt="icon" />
      </li>
      <li>
        Рентгеновские установки{" "}
        <img className="equipment__ul_icon" src={image} alt="icon" />
      </li>
      <li>
        Ультразвуковые сканеры{" "}
        <img className="equipment__ul_icon" src={image} alt="icon" />
      </li>
      <li>
        Реанимационное оборудование{" "}
        <img className="equipment__ul_icon" src={image} alt="icon" />
      </li>
      <li>
        Наркозодыхательные аппараты{" "}
        <img className="equipment__ul_icon" src={image} alt="icon" />
      </li>
      <li>
        Аппараты искусственной вентиляции легких{" "}
        <img className="equipment__ul_icon" src={image} alt="icon" />
      </li>
      <li>
        Мониторы пациенто{" "}
        <img className="equipment__ul_icon" src={image} alt="icon" />
      </li>
    </ul>
  );
}

export default EquipmentList;
