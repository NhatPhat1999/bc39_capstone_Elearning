import api from "../../../../../../utils/apiUtils";
import { ICategory } from "../../../../duck/types";
import { LIST_CATEGORY_FAIL, LIST_CATEGORY_REQUEST, LIST_CATEGORY_SUCCESS } from "./constant";


const actListCategoryRequest = () => ({
    type: LIST_CATEGORY_REQUEST
});
const actListCategorySuccess = (data: [ICategory]) => ({
    type: LIST_CATEGORY_SUCCESS,
    payload: data,
});
const actListCategoryFail = (data: any) => ({
    type: LIST_CATEGORY_FAIL,
    payload: data,
});

export const actListCategory=()=>{
    return (dispatch:Function)=>{
        dispatch(actListCategoryRequest());

        api.get(`QuanLyKhoaHoc/LayDanhMucKhoaHoc`)
        .then((result:any)=>{
            console.log(result);
            dispatch(actListCategorySuccess(result.data));
        })
        .catch((error:any)=>{
            console.log(error);
            dispatch(actListCategoryFail(error));            
        })
    }
}
