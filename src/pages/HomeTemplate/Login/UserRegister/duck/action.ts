import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./constant"
import api from "../../../../../utils/apiUtils"

const actUserRegisterRequest=()=>(
    {
        type: USER_REGISTER_REQUEST,
    }
)

const actUserRegisterSuccess = (data:object) => (
    {
        type: USER_REGISTER_SUCCESS,
        payload:data
    }
)

const actUserRegisterFail = (error:Object) => (
    {
        type: USER_REGISTER_FAIL,
        payload:error,
    }
)

export const actUserRegister = (data: object, navigate: any, setClassCover:Function)=>{
    return (dispatch:any)=>{
        dispatch(actUserRegisterRequest());
        
        api.post('QuanLyNguoiDung/DangKy',data)
        .then((result:any)=>{
            console.log(result);
            dispatch(actUserRegisterSuccess(result.data));
            alert("Đăng kí thành công");
            setClassCover("cover_register")
        })
        .catch((error:any)=>{
            console.log(error);
            dispatch(actUserRegisterFail(error))
        })
    }
}