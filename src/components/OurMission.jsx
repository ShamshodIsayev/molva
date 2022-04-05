import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/mission.css";

function OurMission() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const titles = [
    "Запрос врачей",
    "Заводы",
    "Поиск решений",
    "Лучевая диагностика",
    "Аппарат",
    "Доставка",
    "Обучение",
    "Ремонт",
    "Счастливые врачи",
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="mission">
      <h2 className="mission__title">Наша миссия</h2>

      <div
        className="mission__container"
        data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-delay="500"
        data-aos-easing="ease-in-sine"
      >
        {num.map((el, i) => {
          return (
            <React.Fragment key={Math.random()}>
              <div className="mission__block">
                <img
                  className="mission__block_img"
                  src={require(`../molva/icons/${i + 1}.png`)}
                  alt="icon"
                />
                <h5 className="mission__block_title">{titles[i]}</h5>
              </div>
              <div className="mission_block_icon">
                {i + 1 === num.length ? (
                  ""
                ) : (
                  <FontAwesomeIcon
                    className="mission__arrow"
                    icon={faArrowRightLong}
                  />
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default OurMission;
