import ReactString, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { actUserRegister } from './duck/action';
import { RootState } from '../../../../store';
import { State,IUserRegister } from '../../duck/types';

interface Props{
  setClassCover:Function
}

export default function UserRegister({ setClassCover }:Props) {
  const [user, setUser] = useState<IUserRegister>(
    {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "GP01",
      email: "",
    }
  );
  const dispatch:Function = useDispatch();
  const navigate:Function=useNavigate();
  const data:State<IUserRegister>=useSelector((state:RootState)=>state.userRegisterReducer);

  const handleOnchange=(event:any)=>{
    const {name,value}=event.target;
    setUser({
      ...user,
      [name]:value,
    })
  }

  const handleSubmit=(event:any)=>{
    event.preventDefault();    
    dispatch(actUserRegister(user, navigate, setClassCover))
  }

  const renderNoti = () => {
    const { error } = data;
    console.log(data);
    
    return error && <div className='text-danger'>
      {error.response.data}
    </div>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="login_title">
        <h1>Bạn chưa có tài khoản</h1>
      </div>
      <div className="login_main">
        <div >
          <input type="text" className="input_login" name='hoTen' onChange={handleOnchange} placeholder="Họ và tên" />
        </div>
        <div >
          <input type="text" className="input_login" name='soDT' onChange={handleOnchange} placeholder="số điện thoại" />
        </div>
        <div >
          <input type="text" className="input_login" name='email' onChange={handleOnchange} placeholder="Email" />
        </div>
        <div >
          <input type="text" className="input_login" name='taiKhoan' onChange={handleOnchange} placeholder="Tài khoản" />
        </div>
        <div >
          <input type="password" className="input_login" name='matKhau' onChange={handleOnchange} placeholder="Mật khẩu" />
        </div>
        {renderNoti()}
      </div>
      <div className="login_button">
        <button className='btn-light-2'><span>Đăng kí</span></button>
      </div>
    </form>
  )
}
