import React, { useState } from 'react';

interface Props{
    classCover:string;
    setClassCover:Function;
}
export default function Overlay({ classCover, setClassCover }:Props) {
    return (
        <div className={`overlay ${classCover}`}>
            {classCover === "cover_register" ?
                <div className="overlay_content">
                    <h1>Xin chào !!</h1>
                    <p>Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn</p>
                    <button className='btn-light-1' onClick={() => { setClassCover("cover_login") }}><span>Đăng kí</span></button>
                </div> :
                <div className="overlay_content">
                    <h1>Chào mừng trở lại !!</h1>
                    <p>Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
                    <button className='btn-light-1' onClick={() => { setClassCover("cover_register") }}><span>Đăng nhập</span></button>
                </div>}
        </div>
    )
}
