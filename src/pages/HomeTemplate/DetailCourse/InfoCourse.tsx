import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { actDetailCourse } from './duck/duckDetail/action';

import { Account } from '../duck/types';
import { actRegisterCourse } from './duck/duckRegister/action';
import { actUnregisterCourse } from './duck/duckUnregister/action';
import avatar_2 from "../../../images/avatar_2.png"


interface Props {
    id: string,
    data:any
}
export default function InfoCourse({ id, data }: Props) {
    const account: Account | null = localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin") || "") : null;

    const [state, setState] = useState<any>(account?.chiTietKhoaHocGhiDanh?.map((course) => course.maKhoaHoc));

    const dispatch: Function = useDispatch();
   

    useEffect(() => {
        dispatch(actDetailCourse(id));
    }, [])

    const handleRegisterCourse = (maKhoaHoc: any, taiKhoan: any) => {
        const data: {} = {
            maKhoaHoc: maKhoaHoc,
            taiKhoan: taiKhoan,
        }
        dispatch(actRegisterCourse(data));
        setState([...state, id])
    }

    const handleUnregisterCourse = (maKhoaHoc: any, taiKhoan: any) => {
        const data: {} = {
            maKhoaHoc: maKhoaHoc,
            taiKhoan: taiKhoan,
        }
        dispatch(actUnregisterCourse(data));
        setState([...state].filter((item: string) => item !== id))
    }

    const isRCourse = state?.find((maKhoaHoc: String) => maKhoaHoc === id
    );

    

    return (
        <div className='info_course card_3'>
            <div className='card_img'>
                <img src={data?.hinhAnh} alt="" />
            </div>
            <div className='stiker_card'>
                <span className={data?.danhMucKhoaHoc.maDanhMucKhoahoc}>{data?.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
            </div>
            <div className='card_info'>
                <h1 className={data?.danhMucKhoaHoc.maDanhMucKhoahoc}>{data?.tenKhoaHoc}</h1>
                <p>400.000 VND</p>
                <div className='info_button'>
                    <button className={`${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`} style={isRCourse ? { display: "none" } : {}} onClick={() => { handleRegisterCourse(data?.maKhoaHoc, account?.taiKhoan) }}>
                        <span>Đăng kí</span>
                    </button>

                    <button className={`${data?.danhMucKhoaHoc.maDanhMucKhoahoc}`} style={isRCourse ? {} : { display: "none" }} onClick={() => { handleUnregisterCourse(data?.maKhoaHoc, account?.taiKhoan) }}>
                        <span>Hủy đăng kí</span>
                    </button>
                </div>
                <div className='extra_info'>
                    <p><span>Giảng viên:</span> <img src={avatar_2} alt="" /> {data?.nguoiTao.hoTen}</p>
                    <p><span>Ngày khai giảng:</span> {data?.ngayTao}</p>
                    <p><span>Số lượng:</span> {data?.soLuongHocVien} học viên</p>
                    <p><span>Mô tả:</span> {data?.moTa}</p>
                    <p className={data?.danhMucKhoaHoc.maDanhMucKhoahoc}><span>Đánh giá</span> <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i></p>
                </div>
            </div>




        </div>
    )
}
