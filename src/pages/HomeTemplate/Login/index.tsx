import React from 'react';
import { useState } from 'react';
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'
import Overlay from './loginOverlay/overlay'

export default function Login() {
  const [classCover, setClassCover] = useState("cover_register");
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
