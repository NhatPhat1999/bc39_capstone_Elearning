import api from "../../../../../../utils/apiUtils";
import {IDetailCourse } from "../../../../duck/types";
import { LIST_COURSE_FAIL, LIST_COURSE_REQUEST, LIST_COURSE_SUCCESS } from "./constant";

const actListCourseRequest=()=>({
        type:LIST_COURSE_REQUEST
});
const actListCourseSuccess=(data:[IDetailCourse])=>({
    type:LIST_COURSE_SUCCESS,
    payload: data,
});
const actListCourseFail = (data: any) => ({
    type: LIST_COURSE_FAIL,
    payload: data,
});

export const actListCourse=()=>{
    return(dispatch:Function)=>{
        dispatch(actListCourseRequest());

        api.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`)
        .then((result:any)=>{
            console.log(result);
            dispatch(actListCourseSuccess(result.data));
            localStorage.setItem("listCourse",JSON.stringify(result.data))
        })
        .catch((error:any)=>{
            console.log(error);
            dispatch(actListCourseFail(error))
        })
    }
}

