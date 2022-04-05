import React from "react";
import PlannerBlock from "./PlannerBlock";
import PlannerLogo from "./PlannerLogo";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "../../styles/planner.css";

function Planner() {
  return (
    <div className="planner">
      <Swiper
        modules={[Scrollbar]}
        mousewheel={true}
        className="planner__container"
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        scrollbar={{ draggable: true }}
      >
        {/* <div className="planner__container">
          <PlannerBlock />
        </div> */}
        <SwiperSlide>
          <figure className="planner_block">
            <h3 className="planner_block__title september">Сентябрь 2010</h3>
            <hr className="planner_block__hr" />
            <h5 className="planner_block__head">Подать заявку / Звонок</h5>
            <p className="planner_block__des">
              Заявка на оформление лизинга или рассрочки.
              <br /> Предварительное одобрение.
            </p>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="planner_block">
            <h3 className="planner_block__title">Март 2011</h3>
            <hr className="planner_block__hr" />
            <h5 className="planner_block__head">Оформление документов</h5>
            <p className="planner_block__des">
              Бесплатная помощь в сборе документов. Подписание договора
            </p>
          </figure>
        </SwiperSlide>
        <SwiperSlide className="plan_last">
          <figure className="planner_block plan_last">
            <h3 className="planner_block__title">Январь 2012</h3>
            <hr className="planner_block__hr" />
            <h5 className="planner_block__head">Оформление документов</h5>
            <p className="planner_block__des">
              Вы сэкономите на налоге на прибыль до 20 % от общей стоимости
              лизингового контракта.
            </p>
          </figure>
        </SwiperSlide>
        <SwiperSlide >
          <figure className="planner_block ">
            <h3 className="planner_block__title ">Апрель 2012</h3>
            <hr className="planner_block__hr" />
            <h5 className="planner_block__head">Оформление документов</h5>
            <p className="planner_block__des">
              Вы сэкономите на налоге на прибыль до 20 % от общей стоимости
              лизингового контракта.
            </p>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="planner_block plan_last">
            <h3 className="planner_block__title">Апрель 2012</h3>
            <hr className="planner_block__hr" />
            <h5 className="planner_block__head">Оформление документов</h5>
            <p className="planner_block__des">
              Вы сэкономите на налоге на прибыль до 20 % от общей стоимости
              лизингового контракта.
            </p>
          </figure>
        </SwiperSlide>
        ...
      </Swiper>
      <PlannerLogo />
    </div>
  );
}

export default Planner;
