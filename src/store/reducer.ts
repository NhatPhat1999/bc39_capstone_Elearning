import { combineReducers } from "redux";
import userLoginReducer from "../pages/HomeTemplate/Login/UserLogin/duck/reducer";
import userRegisterReducer from "../pages/HomeTemplate/Login/UserRegister/duck/reducer";
import userInfoReducer from "../pages/HomeTemplate/InfoUser/duck/reducer";
import detailCourseReducer from "../pages/HomeTemplate/DetailCourse/duck/duckDetail/reducer";
import listCourseReducer from "../pages/HomeTemplate/Homepage/ListCourse/duck/duckListCourse/reducer";
import listCategoryReducer from "../pages/HomeTemplate/Homepage/ListCourse/duck/duckCategory/reducer";
import categoryCourseReducer from "../pages/HomeTemplate/Homepage/ListCourse/duck/duckCategoryCourse/reducer";
import editUserReducer from "../pages/HomeTemplate/InfoUser/infoDetail/duck/reducer";

const rootReducer = combineReducers({
    userLoginReducer,
    userRegisterReducer,
    userInfoReducer,
    detailCourseReducer,
    listCourseReducer,
    listCategoryReducer,
    categoryCourseReducer,
    editUserReducer,
});

export default rootReducer;
