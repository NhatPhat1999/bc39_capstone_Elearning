import { IUserRegister,State, Action } from "../../../duck/types"; 
import { EDIT_USER_FAIL,EDIT_USER_REQUEST,EDIT_USER_SUCCESS } from "./constant";

const intialState: State<any> = {
    loading: false,
    data: null,
    error: null,
}

const editUserReducer = (state = intialState, action: Action): State<any> => {
    switch (action.type) {
        case EDIT_USER_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }

        case EDIT_USER_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state }
        }

        case EDIT_USER_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        };


        default:
            return { ...state };
    }
};
export default editUserReducer;