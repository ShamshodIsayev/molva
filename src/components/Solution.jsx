import React from "react";
import "../styles/solution.css";
import leftFirst from "../molva/solutions/image 63.png";
import rightFirst from "../molva/solutions/image 62.png";
import leftMain from "../molva/solutions/image 59.png";
import rightMain from "../molva/solutions/image 64.png";

function Solution() {
  return (
    <section className="solution">
      <h2 className="solution__title">Внутренние IT решения</h2>
      <div className="solution__container">
        <div className="left">
          <div className="solution__block">
            <div className="solution__left">
              <img className="solution__left_img" src={leftFirst} alt="" />
              <h5 className="solution__left_title">Внешняя коммуникация</h5>
              <p className="solution__left_des">
                Более 7500 проектов с клиентами
              </p>
            </div>
            <div className="solution__right">
              <img className="solution__right__img" src={leftMain} alt="" />
            </div>
          </div>

          <div className="solution__info_text">
            <p className="solution__info_des">
              Мы динамично развиваемся и используем современные IT решения для
              управления проектами и коммуникации внутри команды.{" "}
            </p>
          </div>
        </div>

        <div className="right">
          <div className="solution__block">
            <div className="solution__left">
              <img className="solution__left_img" src={rightFirst} alt="" />
              <h5 className="solution__left_title">Внутренняя коммуникация</h5>
              <p className="solution__left_des">
                Более 9000 задач сотрудников MEDFORD
              </p>
            </div>
            <div className="solution__right">
              <img className="solution__right__img" src={rightMain} alt="" />
            </div>
          </div>

          <div className="solution__info_text">
            <p className="solution__info_des">
              Внедряя информационные системы мы работаем эффективнее и быстрее.
              Для нас является ценностью время наших сотрудников и клиентов.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="solution__info_wrapper"></div> */}
    </section>
  );
}

export default Solution;
