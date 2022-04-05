import React, { useState, useEffect } from "react";

function Customer({ num }) {
  const [src, setSrc] = useState(1);

  useEffect(() => {
    setSrc(num);
  }, [num]);

  return (
    <div className="customer">
      <img src={require(`../../molva/customers/image (${src}).png`)} alt="" />

      <ul className="customer__ul">
        <li>+ Департамент здравоохранения г. Москвы</li>
        <li>+ Министерство строительства МО</li>
        <li>+ ГКБ им. Боткина</li>
        <li className="black">
          + Институт АК и ГИН им. Кулакова <span>Не уверен</span>
        </li>
        <li className="black">
          + Клиника Здоровья <span>Не уверен</span>
        </li>
        <li>+ Экспресс лаборатория г. Владикавказ</li>
        <li>+ Мир Здоровья г.Кострома</li>
        <li>+ Виктори Клиник г.Якутск</li>
        <li>+ Перенатальный центр г.Хабаровск</li>
        <li className="red">
          + Минестерство здравоохранения Калужской области
          <span>сайта нет, лого не понятно какое брать с поиска</span>
        </li>
        <li>+ Институт им, Бакулева</li>
        <li>+ МЕДСИ</li>
        <li>+ Лапино</li>
        <li>+ Мать и Дитя</li>
        <li>+ ЦМД сеть</li>
        <li>+ Лабкевст сеть</li>
        <li>+ Институт репродуктивной медицины ВЕМЕОТ</li>
        <li>+ Министерство здравоохранения Тульской области</li>
        <li>+ Мин зд Оренбуржской области</li>
        <li>+ РАСУДМ</li>
        <li className="red">
          + Центр эпидемиологии <span>Они в каждом городе есть</span>
        </li>
        <li className="red">
          + И по здравоохранению г. Санкт-Петербурга <span>Их много есть</span>
        </li>
        <li className="red">
          + ФМБА
          <span>
            {/* Такжe не понятно что брать. */}
            Их много, а сайта не нешел нормального
          </span>
        </li>
        <li>+ МОНИАГ</li>
      </ul>
    </div>
  );
}

export default Customer;
