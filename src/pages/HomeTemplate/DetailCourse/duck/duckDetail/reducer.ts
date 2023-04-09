import {DETAIL_COURSE_FAIL,DETAIL_COURSE_REQUEST,DETAIL_COURSE_SUCCESS} from "./constant";
import { Action,State,IDetailCourse } from "../../../duck/types";


const initialState:State<IDetailCourse> ={
    loading:false,
    data:null,
    error:null,
}

const detailCourseReducer =(state=initialState,action:Action):State<IDetailCourse>=>{
    switch (action.type) {
        case DETAIL_COURSE_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case DETAIL_COURSE_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state }
        }

        case DETAIL_COURSE_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        };
    
        default:
            return { ...state }
;
    }
}
export default detailCourseReducer;