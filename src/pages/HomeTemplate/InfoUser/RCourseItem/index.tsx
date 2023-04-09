import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actUnregisterCourse } from '../../DetailCourse/duck/duckUnregister/action';
import { ICourse } from '../../duck/types';

interface Props {
    RCourse: ICourse;
    taiKhoan: string;
    setState: Function;
    isRCourse: any;
}
export default function RCourseItem({ RCourse, taiKhoan, setState, isRCourse }: Props) {
    const dispatch: Function = useDispatch();
    const handleUnregisterCourse = (maKhoaHoc: any, taiKhoan: any) => {
        const data: {} = {
            maKhoaHoc: maKhoaHoc,
            taiKhoan: taiKhoan,
        };
        dispatch(actUnregisterCourse(data));
        setState(RCourse.maKhoaHoc)
    }
    return (
        <div className={`RCourse_item`}
            style={isRCourse(RCourse.maKhoaHoc) ? {} : { display: "none" }}
        >
            <div className='RCourse_img'>
                <img src={RCourse.hinhAnh} alt="" />
            </div>
            <div className='RCourse_info'>
                <Link to={`/chitietkhoahoc/${RCourse.maKhoaHoc}`} >
                    {RCourse.tenKhoaHoc}
                </Link>
                <p className='moTa'>
                    {RCourse.moTa}
                </p>
                <p className='danhGia'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </p>
                <div><button onClick={() => { handleUnregisterCourse(RCourse.maKhoaHoc, taiKhoan) }} className='btn-light-2'><span>Hủy đăng kí</span></button></div>
            </div>

        </div>
    )
}
