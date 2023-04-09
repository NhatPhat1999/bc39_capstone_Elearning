import api from "../../../../utils/apiUtils";
import { USER_INFO_FAIL, USER_INFO_REQUEST, USER_INFO_SUCCESS } from "./constant";
import { IUserInfo, ICourse, Account } from "../../duck/types";

const actUserInfoRequest=()=>({type:USER_INFO_REQUEST});
const actUserInfoSuccess=(data:IUserInfo<ICourse>)=>({type:USER_INFO_SUCCESS,payload:data});
const actUserInfoFail=(data:Object)=>({type:USER_INFO_FAIL,payload:data});

interface Props{
    setUser:any;
}

export const actUserInfo = ()=>{
    return(dispatch:Function)=>{
        dispatch(actUserInfoRequest());
        
        api.post('QuanLyNguoiDung/ThongTinNguoiDung')
        .then((result:any)=>{
            const account: Account | null = localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin") || "") : null;

            dispatch(actUserInfoSuccess(result.data));

            localStorage.setItem("userLogin", JSON.stringify({...result.data, accessToken:account?.accessToken}));

        })
        .catch((error:any)=>{
            console.log(error);
            dispatch(actUserInfoFail(error));
        })
    }
}