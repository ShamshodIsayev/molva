import React from "react";
import { SwiperSlide } from "swiper/react";

function PlannerBlock() {
  return (
    <>
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
      <SwiperSlide>
        <figure className="planner_block">
          <h3 className="planner_block__title">Январь 2012</h3>
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
    </>
  );
}

export default PlannerBlock;
