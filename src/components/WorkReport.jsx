import React from "react";
import "../styles/work-report.css";

function WorkReport() {
  return (
    <section className="worked-report">
      <h2 className="worked-report__title">Компания MEDFORD</h2>

      <div className="worked-report__container report__container">
        <div className="worked-report__block">
          <h3 className="worked-report__block_title">10</h3>
          <p className="worked-report__block_des">
            лет на рынке мед оборудования
          </p>
        </div>
        <div className="worked-report__block">
          <h3 className="worked-report__block_title">
            500<span>млн. руб.</span>
          </h3>
          <p className="worked-report__block_des">годовой оборот компании</p>
        </div>
        <div className="worked-report__block">
          <h3 className="worked-report__block_title">20</h3>
          <p className="worked-report__block_des">штатных сотрудника</p>
        </div>
      {/* </div>

      <div className="worked-report__container"> */}
        <div className="worked-report__block">
          <h3 className="worked-report__block_title">
            1.5<span>тыс.</span>
          </h3>
          <p className="worked-report__block_des">
            единиц установленного оборудования
          </p>
        </div>
        <div className="worked-report__block">
          <h3 className="worked-report__block_title">
            3<span>тыс.</span>
          </h3>
          <p className="worked-report__block_des">клиентов в базе</p>
        </div>
        <div className="worked-report__block">
          <h3 className="worked-report__block_title">+25%</h3>
          <p className="worked-report__block_des">новых сотрудников в год</p>
        </div>
      </div>
    </section>
  );
}

export default WorkReport;
