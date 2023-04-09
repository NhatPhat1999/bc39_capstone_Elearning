import { State, Action, ICategory } from "../../../../duck/types";
import {LIST_CATEGORY_FAIL,LIST_CATEGORY_REQUEST,LIST_CATEGORY_SUCCESS} from "./constant";

const intialState: State<[ICategory]> = {
    loading: false,
    data: null,
    error: null,
}

const listCategoryReducer = (state = intialState, action: Action): State<[ICategory]> => {
    switch (action.type) {
        case LIST_CATEGORY_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }

        case LIST_CATEGORY_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state }
        }

        case LIST_CATEGORY_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        };


        default:
            return { ...state };
    }
}
export default listCategoryReducer;