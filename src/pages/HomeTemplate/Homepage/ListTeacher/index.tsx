import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store'
import TeacherItem from './TeacherItem/TeacherItem';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Loading from '../../Loading';



interface Teacher {
    taiKhoan: string;
    hoTen: string;
    maLoaiNguoiDung: string;
    tenLoaiNguoiDung: string;
}
export default function ListTeacher() {
    const {data,loading} = useSelector((state: RootState) => state.listCourseReducer);

    let ListDetailTeacher = data?.map((item) => item.nguoiTao);
    let listIndex = ListDetailTeacher?.map((item) => {
        return ListDetailTeacher?.findIndex(teacher => teacher.taiKhoan === item.taiKhoan)
    });
    listIndex = listIndex?.filter((item, index) => {
        return listIndex?.indexOf(item) === index;
    })
    let ListTeacher = listIndex?.map((item: any) => {
        return ListDetailTeacher ? ListDetailTeacher[item] : []
    });
    // loại bỏ đối tượng === null
    ListTeacher = ListTeacher?.filter((item: any) => item.taiKhoan !== null);
    console.log(ListTeacher);

    return (
        <section id='list_teacher' className='homepage'>
            <div className='section_title'>
                <h1>
                    Các chuyên gia lập trình tại <span>&lt;Cyber/&gt;</span>
                </h1>
            </div>
            <div className='section_content'>
               {loading?<Loading/>:
                    <Swiper id='list_teacher'
                        slidesPerView={1}
                        spaceBetween={0}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        rewind={true}
                        breakpoints={{
                            550: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            850: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },
                            1300: {
                                slidesPerView: 4,
                                spaceBetween: 0,
                            },
                            1496:{
                                slidesPerView: 5,
                                spaceBetween: 0,
                            }
                        }}
                        modules={[Pagination]}
                        className="mySwiper">
                        {ListTeacher?.map((teacher: any) =>
                            <SwiperSlide>
                                <TeacherItem teacher={teacher} />
                            </SwiperSlide>
                        )}
                    </Swiper>}
            </div>
        </section>
    )
}
