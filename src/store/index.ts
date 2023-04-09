import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./reducer";


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnnhencers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnnhencers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export default store;