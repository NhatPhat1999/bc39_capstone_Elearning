import React, { useEffect } from 'react'

export default function Banner() {
  return (
    <section id='banner' className='section'>
      <div className='banner_content'>
        <div className='banner_main'>
          <h1>Khởi đầu sự nghiệp</h1>
        </div>
       <div className='banner_hr'>
          <hr />
       </div>
        <div className='banner_extra'>
          <div>
            <p>Cùng <span>&lt;Cyber/&gt;</span> trở thành</p>
          </div>
          <div>
            <p>lập trình viên chuyên nghiệp</p>
          </div>
        </div>
        <div className='banner_button'>
          <button className='btn-light-1'><a href="">Đăng kí & tư vấn</a></button>
        </div>
      </div>
      <div className='banner_arrow'>
        <p><i className="fa-solid fa-chevron-down"></i><i className="fa-solid fa-chevron-down"></i><i className="fa-solid fa-chevron-down"></i></p>
      </div>
    </section>
  )
}

