import { State,Action, IUserRegister } from "../../../duck/types";
import {USER_REGISTER_FAIL,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS} from "./constant"

const intialState:State<IUserRegister>={
    loading:false,
    data:null,
    error:null,
}
const userRegisterReducer = (state = intialState, action: Action): State<IUserRegister> => {
    switch (action.type) {
        case USER_REGISTER_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }

        case USER_REGISTER_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state }
        }

        case USER_REGISTER_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        };


        default:
            return { ...state };
    }
};
export default userRegisterReducer;