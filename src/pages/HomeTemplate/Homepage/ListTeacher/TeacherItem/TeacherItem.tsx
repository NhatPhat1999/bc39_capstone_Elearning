import React from 'react';
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import avatar_2 from "../../../../../images/avatar_2.png"

    interface Props{
        teacher:any
    }
export default function TeacherItem({ teacher }:Props) {
  return (
      <div className='swiper_content card_2'>
          <div className='card_img'>
              <img src={avatar_2} alt="#" />
          </div>
          <div className='card_info'>
              <h1>
                  {teacher?.hoTen}
              </h1>
              <p>
                Chuyên viên lập trình
              </p>
              <p>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
              </p>
          </div>
      </div>
  )
}
