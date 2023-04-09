import React, { useEffect, useState } from 'react'
import { Account } from '../../duck/types';
import { IUserRegister } from "../../duck/types";
import { actEditUser } from './duck/action';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { useRef } from 'react';
import { actUserInfo } from '../duck/action';

interface Props {
    account: any
}
export default function InfoDetail({ account }: Props) {

    const [activeEdit, setActiveEdit] = useState(true);

    const [user, setUser] = useState<any>(
        {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: "",
            maNhom: "GP01",
            email: ""
        })

    useEffect(() => {
        console.log(account);

        setUser({
            ...user,
            taiKhoan: { ...account }?.taiKhoan,
            matKhau: { ...account }.matKhau,
            hoTen: { ...account }.hoTen,
            soDT: { ...account }.soDT,
            maLoaiNguoiDung: { ...account }.maLoaiNguoiDung,
            maNhom: "GP01",
            email: { ...account }.email,
        })
    }, [])

    const dispatch: any = useDispatch();
    const handleOnchange = (event: any) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value,
        }
        )
        console.log(user)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch(actEditUser(user, setUser, setActiveEdit))
    }


    const data = useSelector((state: RootState) => state.editUserReducer);
    const renderNoti = () => {
        const { error } = data;

        return error && <div className='text-danger'>
            {error.response.data}
        </div>
    }

    return (
        <div className='info_content'>
            <button className='btn-light-1' onClick={() => {
                setActiveEdit(!activeEdit)
            }}>
                {activeEdit ? <span>Cập nhật</span> : <span>Hủy cập nhật</span>}
            </button>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className='form_input'>
                        <label>Họ và tên:</label>
                        <br />
                        <input
                            type="text"
                            className="input_login" name='hoTen'
                            value={user.hoTen}
                            onChange={handleOnchange}
                            disabled={activeEdit}
                            placeholder="Họ và tên" />
                    </div>
                    <div className='form_input'>
                        <label>Số điện thoại:</label>
                        <br />
                        <input
                            type="text"
                            className="input_login" name='soDT'
                            value={user?.soDT}
                            onChange={handleOnchange}
                            disabled={activeEdit}
                            placeholder="số điện thoại" />
                    </div>
                    <div className='form_input'>
                        <label>Email:</label>
                        <br />
                        <input
                            type="text"
                            className="input_login" name='email'
                            value={user?.email}
                            onChange={handleOnchange}
                            disabled={activeEdit}
                            placeholder="Email" />
                    </div>
                    <div className='form_input'>
                        <label>Tài khoản</label>
                        <br />
                        <input
                            type="text"
                            className="input_login" name='taiKhoan'
                            value={user?.taiKhoan}
                            onChange={handleOnchange}
                            disabled={activeEdit}
                            placeholder="Tài khoản" />
                    </div>
                    <div className='form_input'>
                        <label>Mật khẩu</label>
                        <br />
                        <input
                            type="text"
                            className="input_login" name='matKhau'
                            value={user?.matKhau}
                            onChange={handleOnchange}
                            disabled={activeEdit}
                            placeholder="Mật khẩu" />
                    </div>
                    <button style={activeEdit ? { display: "none" } : {}} className='btn-light-2'>
                        <span>Hoàn thành</span>
                    </button>
                    {renderNoti()}
                </div>
            </form>
        </div>
    )
}
