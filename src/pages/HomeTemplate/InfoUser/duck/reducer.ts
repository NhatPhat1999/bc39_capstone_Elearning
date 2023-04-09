import { IUserInfo, State, ICourse, Action } from "../../duck/types";
import { USER_INFO_FAIL, USER_INFO_REQUEST, USER_INFO_SUCCESS } from "./constant";

const intialState:State<IUserInfo<ICourse>>={
    loading:false,
    data:null,
    error:null,
}

const userInfoReducer=(state=intialState,action:Action):State<IUserInfo<ICourse>>=>{
    switch (action.type) {
        case USER_INFO_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        
        case USER_INFO_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;

            return { ...state }
        }

        case USER_INFO_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        };
        default:
           return{...state}
    }
};
export default userInfoReducer;