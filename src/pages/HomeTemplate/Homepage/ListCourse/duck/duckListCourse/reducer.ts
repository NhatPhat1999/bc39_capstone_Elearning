import { State, Action, IDetailCourse} from "../../../../duck/types";
import {LIST_COURSE_FAIL,LIST_COURSE_REQUEST,LIST_COURSE_SUCCESS} from "./constant";

const intialState: State<[IDetailCourse]> = {
    loading: false,
    data: null,
    error: null,
}

const listCourseReducer = (state = intialState, action: Action): State<[IDetailCourse]>=>{
    switch (action.type) {
        case LIST_COURSE_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }

        case LIST_COURSE_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state }
        }

        case LIST_COURSE_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        };


        default:
            return { ...state };
    }
}
export default listCourseReducer;