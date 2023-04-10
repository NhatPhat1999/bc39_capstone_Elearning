import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Account } from '../../duck/types';

export default function Navbar() {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    const handleSticky = () => {
      window && window.scrollY > 70 ? setStickyClass("sticky_navbar") : setStickyClass("");
    }
    window.addEventListener('scroll', handleSticky);
  }, [stickyClass]);

  const { pathname, state } = useLocation();
  const account: Account | null = localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin") || "") : null;

  const handleMobile = (className: string[]) => {
    const isACtivemobile = className?.map((item: string) => document.getElementsByClassName(item)
    )

    isACtivemobile?.map((item: any) => className.indexOf(item[0].className) !== -1
      ?
      [...item].map((a: any) => a.className += " show"
      )
      :
      [...item].map((a: any) => a.className = a.className.split(" ").filter((b: any) => b !== "show")
      )
    )
  }

  return (
    <nav id='navbar' className={stickyClass}>
      <div className='logo'>
        <a href='/'>
          <span>&lt;</span>
          Cyber/
          <span>&gt;</span>
        </a>
      </div>

      <div className='menu_mobile'>
        <a onClick={() => { handleMobile(["menu", "account"]) }} >
          <i className="fa-solid fa-bars"></i>
        </a>
      </div>
      <div className='menu'>
        <ul>
          <li className={pathname === "/" ? "menu_item active" : "menu_item"}>
            <Link to={`/`}>
              Trang chủ
            </Link>
          </li>
          <li className={pathname === "/danhsachkhoahoc" ? "menu_item active" : "menu_item"}>
            <Link to={`danhsachkhoahoc`}>
              Khóa học
            </Link>
          </li>
          <li className="menu_item">
            <Link to={`danhsachkhoahoc`}>
              Blog
            </Link>
          </li>
        </ul>
      </div>

      <div className="account" style={localStorage.getItem('userLogin') ? { display: "none" } : {}}>
        <div className='login btn-light-1' style={pathname === "/login" ? { display: "none" } : {}}>
          <Link to={`login`} state={{ pathname: pathname }}
          >
            Đăng nhập
          </Link>
        </div>
      </div>
      <div className='account' style={localStorage.getItem("userLogin") ? {} : { display: "none" }}>
        <div className='info btn-light-1'>
          <Link to={`thongtintaikhoan`}>
            <i className="fa-regular fa-user"></i>
          </Link>
        </div>
        <div className='sign_out' onClick={() => { localStorage.removeItem("userLogin") }}>
          <Link to={pathname}>
            <i className="fa-solid fa-power-off"></i>
          </Link>
        </div>
      </div>
    </nav>
  )
}
