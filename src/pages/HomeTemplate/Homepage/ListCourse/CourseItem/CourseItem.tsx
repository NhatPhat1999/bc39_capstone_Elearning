import * as React from 'react';
import { Link } from 'react-router-dom';
import { IDetailCourse } from '../../../duck/types';
import avatar_2 from "../../../../../images/avatar_2.png"

export interface Props {
    Course: IDetailCourse
}

export function CourseItem({ Course }: Props) {
    return (
        <Link to={`/chitietkhoahoc/${Course.maKhoaHoc}`} className='card_1 course_item'>
            <div>
                <div className='card_img'>
                    <img src={Course.hinhAnh} alt="#" />
                    <div className='overlay'></div>
                </div>
                <div className='stiker_card'>
                    <span className={Course.danhMucKhoaHoc.maDanhMucKhoahoc}>{Course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
                </div>
                <div className='card_info'>
                    <h1>{Course.tenKhoaHoc}</h1>
                    <p>
                        <img src={avatar_2} alt="" /> <span>{Course.nguoiTao.hoTen}</span>
                    </p>
                    <p>400.000 VND</p>
                </div>
            </div>
        </Link>
    );
}
