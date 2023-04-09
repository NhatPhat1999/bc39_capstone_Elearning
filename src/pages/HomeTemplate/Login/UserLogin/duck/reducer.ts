import { USER_LOGIN_FAIL,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS } from "./constant";
import { Action, State, IUserLogin } from "../../../duck/types"

const intialState: State<IUserLogin> = {
    loading: false,
    data: null,
    error: null,
}

const userLoginReducer = (state = intialState, action: Action): State<IUserLogin> => {
    switch (action.type) {
        case USER_LOGIN_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }

        case USER_LOGIN_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state }
        }

        case USER_LOGIN_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        };


        default:
            return { ...state };
}
};
export default userLoginReducer;

