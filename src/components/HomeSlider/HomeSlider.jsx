import React, { useEffect } from "react";
import "../../styles/main-slider.css";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeSlider() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="main-slider"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-delay="500"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1300"
    >
      <div className="main-slider__info">
        <h2 className="main-slider__info_title">О компании</h2>
        <p className="main-slider__info_des">
          Холдинг Medford Medical Solutions Co., Ltd. был основан в 2009 году.
          Основными видами деятельности нашей организации стали поставки и
          сервисно-техническое обслуживание высокотехнологичного медицинского
          оборудования. С момента основания, наша компания специализируется на
          ультразвуковых диагностических сканерах и, на сегодняшний день, мы по
          праву обладаем поистине колоссальным опытом в этом направлении.{" "}
        </p>
      </div>
    </section>
  );
}

export default HomeSlider;
