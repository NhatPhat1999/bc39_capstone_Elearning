import api from "../../../../../utils/apiUtils";
import { EDIT_USER_FAIL, EDIT_USER_REQUEST, EDIT_USER_SUCCESS } from "./constant";

const actEditUserRequest = () => (
    {
        type: EDIT_USER_REQUEST,
    }
)

const actEditUserSuccess = (data: object) => (
    {
        type: EDIT_USER_SUCCESS,
        payload: data
    }
)

const actEditUserFail = (error: Object) => (
    {
        type: EDIT_USER_FAIL,
        payload: error,
    }
)

export const actEditUser = (user: object, setUser: Function, setActiveEdit:Function) => {
    return (dispatch: any) => {
        dispatch(actEditUserRequest());

        api.put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', user)
            .then((result: any) => {
                console.log(result);
                dispatch(actEditUserSuccess(result.data));
                alert("Cập nhật thành công !");
                setActiveEdit(true)
                setUser({
                    taiKhoan: result.data?.taiKhoan,
                    matKhau: result.data.matKhau,
                    hoTen: result.data.hoTen,
                    soDT: result.data.soDT,
                    maLoaiNguoiDung: result.data.maLoaiNguoiDung,
                    maNhom: "GP01",
                    email: result.data.email,
                })
            })
            .catch((error: any) => {
                console.log(error);
                dispatch(actEditUserFail(error))
            })
    }
}