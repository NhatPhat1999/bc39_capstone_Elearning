import React from 'react';
import { ICourse, Account } from '../duck/types';
import { useState, useEffect } from 'react';
import DoughnutChart from './DoughnutChart/DoughnutChart';
import { Navigate, useLocation } from 'react-router-dom';
import RCourseItem from './RCourseItem';
import avatar_1 from "../../../images/avatar_1.png";
import InfoDetail from "./infoDetail/InfoDetail"


export default function InfoUser() {
    const account: Account | null = localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin") || "") : null;

    const [state, setState] = useState<any>(account?.chiTietKhoaHocGhiDanh?.map((course) => course.maKhoaHoc));


    const { pathname } = useLocation();

    const [activeInfo,setActiveInfo]=useState("active");
    const [activeCourse,setActiveCourse]= useState("");

    if (!account) return <Navigate to={"/login"} state={{ pathname: pathname }} />
    return (
        <section className='section' id='InfoUser'>
            <div className='section_title'>
                <h1>Thông tin tài khoản</h1>
            </div>
            <div className='section_content'>
                <div className='section_container'>
                    <div className='info_user'>
                        <div className='info_img'>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div className='info_account'>
                            <h1>{account?.taiKhoan}</h1>
                            <p>{account?.maLoaiNguoiDung === "HV" ? "Học viên" : "Giáo vụ"}</p>
                    </div>
                </div>
                <div className='info_tab'>
                     <button className={`btn-light-2 ${activeInfo}`} onClick={()=>{setActiveInfo("active");setActiveCourse("")}}><span>Thông tin chi tiết</span></button>

                    <button onClick={() => { setActiveInfo(""); setActiveCourse("active") }} className={`btn-light-2 ${activeCourse  }`}><span>Khóa học đã đăng kí</span></button>
                </div>
                <div className={`info_detail ${activeInfo}`}>
                        <InfoDetail account={account}/>
                </div>
                <div className={`info_course ${activeCourse}`}>
                    <div className='info_RChart'>
                        <DoughnutChart RCourse={account?.chiTietKhoaHocGhiDanh} />
                    </div>
                    <div className='list_Rcourse'>
                       <div className='Rcourse_container'>
                                {account?.chiTietKhoaHocGhiDanh?.map((RCourse: ICourse) => {
                                    return <RCourseItem
                                        RCourse={RCourse}
                                        taiKhoan={account.taiKhoan}
                                        setState={
                                            (maKhoaHoc: string) => setState([...state].filter((item: string) => item !== maKhoaHoc))}

                                        isRCourse={(maKhoaHoc: string) => [...state].find((item: String) => item === maKhoaHoc)}
                                    />
                                })}</div>
                    </div>
                </div>
            </div>
        </div>
        </section >
    )
}
