import React from "react";
import "../styles/equipment.css";
import EquipmentImg from "./equipment/EquipmentImg";
import EquipmentList from "./equipment/EquipmentList";

function Equipment() {
  return (
    <>
      <section className="equipment">
        <h2 className="equipment__title">Поставка медицинского оборудования</h2>
        <p className="equipment__des">
          Продажа и обслуживание медицинского оборудования для лучевой
          дианостики и реанимации
        </p>
        <div className="equipment__container">
          <EquipmentImg />
          <EquipmentList />
        </div>
      </section>

      <hr className="equipment__hr" />
    </>
  );
}

export default Equipment;
