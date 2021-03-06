import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TeamUlList() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="team__statis_container">
      <div className="team__statis_block">
        <h3
          className="team__statis_title"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="500"
        >
          32
        </h3>
        <span className="team__statis_des">Общее кол-во сотрудников</span>
      </div>
      <div className="team__statis_block">
        <h3
          className="team__statis_title"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="500"
        >
          8
        </h3>
        <span className="team__statis_des">Отдел сервиса</span>
      </div>
      <div className="team__statis_block">
        <h3
          className="team__statis_title"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="500"
        >
          6
        </h3>
        <span className="team__statis_des">Отдел продаж</span>
      </div>
      <div className="team__statis_block">
        <h3
          className="team__statis_title"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="500"
        >
          3
        </h3>
        <span className="team__statis_des">Отдел бухгалтерии</span>
      </div>
      <div className="team__statis_block">
        <h3
          className="team__statis_title"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="500"
        >
          3
        </h3>
        <span className="team__statis_des">Отдел маркетинга</span>
      </div>

      <div className="team__statis_block">
        <h3
          className="team__statis_title"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="500"
        >
          32
        </h3>
        <span className="team__statis_des">Отдел логистики</span>
      </div>
      <div className="team__statis_block">
        <h3
          className="team__statis_title"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="500"
        >
          8
        </h3>
        <span className="team__statis_des">Отдел IT разработок</span>
      </div>
      <div className="team__statis_block">
        <h3
          className="team__statis_title"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="500"
        >
          6
        </h3>
        <span className="team__statis_des">Отдел юристов</span>
      </div>
      <div className="team__statis_block">
        <h3
          className="team__statis_title"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="500"
        >
          3
        </h3>
        <span className="team__statis_des">Отдел HR</span>
      </div>
      <div className="team__statis_block">
        <h3
          className="team__statis_title"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="500"
        >
          3
        </h3>
        <span className="team__statis_des">Менеджмент</span>
      </div>
    </div>
  );
}

export default TeamUlList;
