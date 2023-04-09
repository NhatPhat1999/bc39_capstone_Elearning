import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./constant";
import api from "../../../../../utils/apiUtils";
import { IUserLogin } from "../../../duck/types";
import { actUserInfo } from "../../../InfoUser/duck/action";

const actUserLoginRequest=()=>({type:USER_LOGIN_REQUEST});
const actUserLoginSuccess = (data: IUserLogin) => ({ type: USER_LOGIN_SUCCESS,payload:data });
const actUserLoginFail = (data: object) => ({ type: USER_LOGIN_FAIL, payload: data });

export const actUserLogin = (data: object,navigate:any,pathname:string)=>{
    return (dispatch:Function)=>{
        dispatch(actUserLoginRequest());

        api.post('QuanLyNguoiDung/DangNhap',data)
        .then((result:any)=>{
            dispatch(actUserLoginSuccess(result.data));
            localStorage.setItem("userLogin",JSON.stringify(result.data));
            dispatch(actUserInfo());
            alert("Đăng nhập thành công");
            
            navigate(pathname,{replace:true,state:{pathname:pathname}})
        })
        .catch((error:any)=>{
            dispatch(actUserLoginFail(error)) 
        })
    }
}