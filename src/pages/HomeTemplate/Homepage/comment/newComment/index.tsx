import React, { useRef } from 'react';
import { useState } from 'react';
import { IComment, Account } from '../../../duck/types';
import avatar_1 from "../../../../../images/avatar_1.png"

interface Props {
    comment: [IComment] | undefined,
    setComment:Function
}

export default function NewComment({ comment,setComment }: Props) {
    const [binhLuan,setBinhLuan]=useState("")
    const account: Account | null = localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin") || "") : null;


    const handleOnchange = (event: any) => {
        console.log(event.target.value);
        const {value } = event.target;
        setBinhLuan(value)
    }
    const handleSubmit = () => {
        const newComment={
            taiKhoan: account?.taiKhoan,
            binhLuan: binhLuan,
        }
        if(newComment.binhLuan===""){
            alert("hãy nhập đánh giá của bạn");
            ;
        }else{
            comment ? localStorage.setItem("comment", JSON.stringify(comment ? [...comment, { ...newComment }] : "")): localStorage.setItem("comment", JSON.stringify([newComment]))

            setComment(comment ? [...comment, { ...newComment }] : [newComment]);
            setBinhLuan("");

            
        }            
    }
    return (
        <div className='new_comment'>
            <div className='Ncomment_img'>
                <img src={avatar_1} alt="" />
            </div>
            <div className='Ncomment_input'>
                <h1>{account?.taiKhoan}</h1>
                <input id='input' disabled={!account} className='input_1' onChange={handleOnchange} value={binhLuan} placeholder='Hãy gửi những đánh giá của bạn'/>
                <div className='Ncomment_button'>
                    <button className='btn-light-1' disabled={!account} onClick={handleSubmit}><span>Đăng</span></button>
                </div>
            </div>
            
        </div>
    )
}
