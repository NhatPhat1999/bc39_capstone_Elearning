import api from "../../../../../utils/apiUtils";
import { actUserInfo } from "../../../InfoUser/duck/action";

export const actUnregisterCourse = (data: Object) => {
    return (dispatch: Function) => {
        console.log(data);

        api.post(`QuanLyKhoaHoc/HuyGhiDanh`, data)
            .then((result: any) => {
                console.log(result);
                alert(result.data);
                dispatch(actUserInfo());
            })
            .catch((error: any) => {
                console.log(error);
                alert(error.response.data)
            })
    }
}