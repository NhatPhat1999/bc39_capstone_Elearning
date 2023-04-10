import React, { useState, useEffect } from 'react';
import InfoCourse from './InfoCourse';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export default function DetailCourse() {
  const params: any = useParams();
  const {data,loading} = useSelector((state: RootState) => state.detailCourseReducer);
  
  
  return (
    <section id='detail_course'>
      <div className='section_title'>
        <h1>Thông tin khóa học</h1>
      </div>
      <div className='section_content'>
        <InfoCourse id={params.id} data={data} loading={loading}/>
        <div className='info_member'>
          <h1>Bạn nên tham gia khóa học ?</h1>
          <div> <ul>
            <li><i className={`fa-solid fa-check ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}></i>Mới học lập trình, thiếu định hướng & lộ trình học tập</li>
            <li><i className={`fa-solid fa-check ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}></i>Trái ngành học lập trình, chuyển nghề</li>
            <li><i className={`fa-solid fa-check ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}></i>Hoàn thành chương trình trung học phổ thông (12/12)</li>
            <li><i className={`fa-solid fa-check ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}></i>Yếu tư duy lập trình, mất gốc muốn học để xin việc làm</li>
            <li><i className={`fa-solid fa-check ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}></i>Chủ dự án muốn quản lý team dev, startup muốn hiểu rõ việc làm của dev</li>
            <li><i className={`fa-solid fa-check ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}></i>Thêm nghề để kiếm thêm thu nhập ngoài giờ
            </li>
          </ul></div>
        </div>
        <div className='info_standard'>
          <h1>HỌC XONG LÀM VIỆC TẠI ĐÂU ?</h1>
          <div>
            <ul>
              <li><i className={`fa-solid fa-check ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}></i>Apply vào tất cả công ty tuyển dụng Front-End Dev ở vị trí fresher hoặc juinor</li>
              <li><i className={`fa-solid fa-check ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}></i>Các công ty outsourcing - gia công phần mềm</li>
              <li><i className={`fa-solid fa-check ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}></i> Các công ty startup - khởi nghiệp</li>
              <li><i className={`fa-solid fa-check ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}></i>Công ty, tập đoàn trong nước và nước ngoài...</li>
              <li><i className={`fa-solid fa-check ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}></i>Có thể apply ngay vào Fresher, Junior với mức lương khởi điểm từ 7tr5 đến 15tr</li>
              <li><i className={`fa-solid fa-check ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}></i>Nhận các job freelancer về xây dựng front end cho website
              </li>
            </ul>
          </div>
        </div>
        <div className='info_summary'>
          <h1>Lộ trình tổng quang</h1>
          <div className='summary_content'>
            <div className='summary_item'>
              <button className='summary_title' data-toggle="collapse" data-target="#item_1">
                <span  className={`${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>HTML-CSS</span>
              </button>
              <div id='item_1' className={`summary_detail collapse ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>
                <ul>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                </ul>
              </div>
            </div>
            <div className='summary_item'>
              <button className='summary_title' data-toggle="collapse" data-target="#item_2">
                <span  className={`${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>HTML5-CSS3</span>
              </button>
              <div id='item_2' className={`summary_detail collapse ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>
                <ul>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                </ul>
              </div>
            </div>
            <div className='summary_item'>
              <button className='summary_title' data-toggle="collapse" data-target="#item_3">
                <span  className={`${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>Bootstrap</span>
              </button>
              <div id='item_3' className={`summary_detail collapse ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>
                <ul>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                </ul>
              </div>
            </div>
            <div className='summary_item'>
              <button className='summary_title' data-toggle="collapse" data-target="#item_4">
                <span  className={`${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>Git</span>
              </button>
              <div id='item_4' className={`summary_detail collapse ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>
                <ul>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  
                </ul>
              </div>
            </div>
            <div className='summary_item'>
              <button className='summary_title' data-toggle="collapse" data-target="#item_5">
                <span  className={`${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>js</span>
              </button>
              <div id='item_5' className={`summary_detail collapse ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>
                <ul>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  
                </ul>
              </div>
            </div>
            <div className='summary_item'>
              <button className='summary_title' data-toggle="collapse" data-target="#item_6">
                <span  className={`${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>SASS</span>
              </button>
              <div id='item_6' className={`summary_detail collapse ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>
                <ul>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  
                </ul>
              </div>
            </div>
            <div className='summary_item'>
              <button className='summary_title' data-toggle="collapse" data-target="#item_7">
                <span  className={`${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>API</span>
              </button>
              <div id='item_7' className={`summary_detail collapse ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>
                <ul>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  
                </ul>
              </div>
            </div>
            <div className='summary_item'>
              <button className='summary_title' data-toggle="collapse" data-target="#item_8">
                <span  className={`${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>ES6</span>
              </button>
              <div id='item_8' className={`summary_detail collapse ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>
                <ul>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  
                </ul>
              </div>
            </div>
            <div className='summary_item'>
              <button className='summary_title' data-toggle="collapse" data-target="#item_9">
                <span  className={`${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>Reactjs</span>
              </button>
              <div id='item_9' className={`summary_detail collapse ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>
                <ul>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  
                </ul>
              </div>
            </div>
            <div className='summary_item'>
              <button className='summary_title' data-toggle="collapse" data-target="#item_10">
                <span  className={`${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>TypeScript</span>
              </button>
              <div id='item_10' className={`summary_detail collapse ${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`}>
                <ul>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
