import api from "../../../../../../utils/apiUtils";
import { IDetailCourse } from "../../../../duck/types";
import { CATEGORY_COURSE_FAIL, CATEGORY_COURSE_REQUEST, CATEGORY_COURSE_SUCCESS } from "./constant";

const actCategoryCourseRequest = () => ({
    type: CATEGORY_COURSE_REQUEST
});
const actCategoryCourseSuccess = (data: [IDetailCourse]) => ({
    type: CATEGORY_COURSE_SUCCESS,
    payload: data,
});
const actCategoryCourseFail = (data: any) => ({
    type: CATEGORY_COURSE_FAIL,
    payload: data,
});

export const actCategoryCourse = (maDanhMuc:string) => {
    return (dispatch: Function) => {
        dispatch(actCategoryCourseRequest());

        api.get(`QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`)
            .then((result: any) => {
                console.log(result);
                dispatch(actCategoryCourseSuccess(result.data));
            })
            .catch((error: any) => {
                console.log(error);
                dispatch(actCategoryCourseFail(error))
            })
    }
}