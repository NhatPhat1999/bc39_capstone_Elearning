import { State, Action, IDetailCourse } from "../../../../duck/types";
import {CATEGORY_COURSE_FAIL,CATEGORY_COURSE_REQUEST,CATEGORY_COURSE_SUCCESS} from "./constant"

const intialState: State<[IDetailCourse]> = {
    loading: false,
    data: null,
    error: null,
}
const categoryCourseReducer = (state = intialState, action: Action): State<[IDetailCourse]> => {
    switch (action.type) {
        case CATEGORY_COURSE_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }

        case CATEGORY_COURSE_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state }
        }

        case CATEGORY_COURSE_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        };


        default:
            return { ...state };
    }
}
export default categoryCourseReducer;
