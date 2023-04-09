import api from "../../../../../utils/apiUtils";
import { DETAIL_COURSE_FAIL, DETAIL_COURSE_REQUEST, DETAIL_COURSE_SUCCESS } from "./constant";
import { IDetailCourse } from "../../../duck/types";

const actDetailCourseRequest = () => ({ type: DETAIL_COURSE_REQUEST });
const actDetailCourseSucess = (data: IDetailCourse) => ({ type: DETAIL_COURSE_SUCCESS, payload: data });
const actDetailCourseFail = (data: Object) => ({ type: DETAIL_COURSE_FAIL, payload: data });

export const actDetailCourse = (maKhoaHoc:string)=>{
    return(dispatch:Function)=>{
        dispatch(actDetailCourseRequest());

        api.get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
        .then((result:any)=>{
            console.log(result);
            dispatch(actDetailCourseSucess(result.data));    
        })
        .catch((error:any)=>{
            console.log(error);
            dispatch(actDetailCourseFail(error))
        })
    }
};
