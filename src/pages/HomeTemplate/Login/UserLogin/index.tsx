import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actUserLogin } from './duck/action';
import { useLocation, useNavigate } from 'react-router-dom';
import { RootState } from '../../../../store';
import { State, IUserLogin } from '../../duck/types';


export default function UserLogin() {
  const [user, setUser] = useState<IUserLogin>({
    taiKhoan: "",
    matKhau: "",
  });
  const { pathname, state } = useLocation();
  const dispatch: Function = useDispatch();
  const navigate: Function = useNavigate();
  
  const data: State<IUserLogin> = useSelector((state: RootState) => state.userLoginReducer);


  const handleOnchange = (event: any) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(actUserLogin(user, navigate, state.pathname));
  }

  const renderNoti = () => {
    const { error } = data;
    return error && <div className='text-danger'>
      {error.response.data}
    </div>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="login_title">
        <h1>Bạn đã đăng kí tài khoản
        </h1>
      </div>
      <div className="login_main">
        <div >
          <input type="text" className="input_login" name='taiKhoan' onChange={handleOnchange} placeholder="Tài khoản" />
        </div>
        <div >
          <input type="password" className="input_login" name='matKhau' onChange={handleOnchange} placeholder="Mật khẩu" />
        </div>
        <p>
          Quên mật khẩu ?
        </p>
        {renderNoti()}
      </div>
      <div className="login_button">
        <button className='btn-light-2'>
          <span>Đăng nhập</span>
        </button>
      </div>
    </form>
  )
}
