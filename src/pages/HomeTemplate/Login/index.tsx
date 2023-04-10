import React from 'react';
import { useState } from 'react';
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'
import Overlay from './loginOverlay/overlay';
import { Account } from '../duck/types';
import { Navigate } from 'react-router-dom';


export default function Login() {
  const [classCover, setClassCover] = useState("cover_register");
  const account: Account | null = localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin") || "") : null;

  if (account) {
    alert("Bạn đã đăng nhập !")
    return <Navigate to="/" replace/>
  }else{
    return (
      <section className='section' id='login'>
        <div className='section_content'>
          {classCover === "cover_register" ?
            <div className={`form_login ${classCover}`}>
              <UserLogin />
            </div> :
            <div className={`form_login ${classCover}`}>
              <UserRegister setClassCover={setClassCover} />
            </div>}
          <Overlay classCover={classCover} setClassCover={setClassCover} />
        </div>
      </section>
    )
  }

 
}
