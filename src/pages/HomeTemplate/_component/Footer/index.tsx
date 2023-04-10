import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Footer() {
  const { pathname } = useLocation();
  return (
    <footer id='footer' style={pathname === "/login" ? { display: "none" } : {}}>
      <div className='section_content'>
        <div className='footer_main'>
          <div className='contact'>
            <h1>Liên hệ</h1>
            <div className='info'>
              <div>
                <i className="fa-solid fa-phone"></i><a href="tel:+84">0937896347</a>
              </div>
              <div>
                <i className="fa-solid fa-envelope"></i><a href="mailto:
            tonhatphat1403@gmail.com">
                  tonhatphat1403@gmail.com
                </a>
              </div>
              <div>
                <i className="fa-solid fa-location-dot"></i><a>Tp Hồ Chí Minh</a>
              </div>
            </div>
            <div className='social'>
              <div>
                <i className="fa-brands fa-facebook"></i><span>Faccebook</span>
              </div>
              <div>
                <i className="fa-brands fa-instagram"></i><span>Instagram</span>
              </div>
              <div>
                <i className="fa-brands fa-twitter"></i><span>Twitter</span>
              </div>
            </div>
          </div>
          <div className='consulting'>
            <h1>Đăng kí tư vấn</h1>
            <input className='input_1' placeholder='Họ và tên'/>
            <input className='input_1' placeholder='Email'/>
            <input className='input_1' placeholder='Số điện thoại'/>
            <button className='btn-light-1'><span>Đăng kí ngay</span></button>
          </div>
        </div>
        <div className='footer_extra'>
          <p>Copyright © 2021. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
