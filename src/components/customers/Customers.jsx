import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Customer from "./Customer";

function Customers() {
  const [activeImg, setActiveImg] = useState(1);
  const [imgNum, setImgNum] = useState(1);

  const [arr, setArr] = useState([]);

  const handleImgClick = (e) => {
    const data = e.target.getAttribute("datatype");
    setActiveImg(data);
    setImgNum(data);
  };

  useEffect(() => {
    const tempArr = [];
    for (let i = 0; i < 29; i++) {
      const num = i + 1;
      tempArr.push(num);
    }
    setArr(tempArr);
  }, []);

  console.log(arr);
  return (
    <div className="customers">
      <div className="customers__wrapper">
        <Swiper
          slidesPerView={3}
          scrollbar={true}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {arr.length
            ? arr.map((el) => {
                return (
                  <SwiperSlide>
                    <img
                      className={+activeImg === +el ? "active" : ""}
                      src={require(`../../molva/customers/image (${el}).png`)}
                      alt="customer"
                      onClick={handleImgClick}
                      datatype={el}
                      key={(Math.random() * 20000).toFixed()}
                    />
                  </SwiperSlide>
                );
              })
            : ""}
        </Swiper>
      </div>

      <Customer num={imgNum} />
    </div>
  );
}

export default Customers;
