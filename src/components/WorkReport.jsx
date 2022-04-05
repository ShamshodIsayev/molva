import React, { useEffect } from "react";
import "../styles/work-report.css";
import AOS from "aos";
import "aos/dist/aos.css";

function WorkReport() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="worked-report">
      <h2 className="worked-report__title">Компания MEDFORD</h2>

      <div
        className="worked-report__container report__container"
        data-aos="fade-right"
      >
        <div className="worked-report__block">
          <h3
            className="worked-report__block_title"
            data-aos="flip-down"
            data-aos-offset="300"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
          >
            10
          </h3>
          <p className="worked-report__block_des">
            лет на рынке мед оборудования
          </p>
        </div>
        <div className="worked-report__block">
          <h3
            className="worked-report__block_title"
            data-aos="flip-down"
            data-aos-offset="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-sine"
          >
            500<span>млн. руб.</span>
          </h3>
          <p className="worked-report__block_des">годовой оборот компании</p>
        </div>
        <div className="worked-report__block">
          <h3
            className="worked-report__block_title"
            data-aos="flip-down"
            data-aos-offset="300"
            data-aos-delay="400"
            data-aos-easing="ease-in-sine"
          >
            20
          </h3>
          <p className="worked-report__block_des">штатных сотрудника</p>
        </div>

        <div className="worked-report__block">
          <h3
            className="worked-report__block_title"
            data-aos="flip-down"
            data-aos-offset="200"
            data-aos-delay="500"
            data-aos-easing="ease-in-sine"
          >
            1.5<span>тыс.</span>
          </h3>
          <p className="worked-report__block_des">
            единиц установленного оборудования
          </p>
        </div>
        <div className="worked-report__block">
          <h3
            className="worked-report__block_title"
            data-aos="flip-down"
            data-aos-offset="200"
            data-aos-delay="600"
            data-aos-easing="ease-in-sine"
          >
            3<span>тыс.</span>
          </h3>
          <p className="worked-report__block_des">клиентов в базе</p>
        </div>
        <div className="worked-report__block">
          <h3
            className="worked-report__block_title"
            data-aos="flip-down"
            data-aos-offset="200"
            data-aos-delay="700"
            data-aos-easing="ease-in-sine"
          >
            +25%
          </h3>
          <p className="worked-report__block_des">новых сотрудников в год</p>
        </div>
      </div>
    </section>
  );
}

export default WorkReport;
