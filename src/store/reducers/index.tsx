import { combineReducers } from "redux";
import popup from "./popup";
import pagination from "./pagination";
import users from "./users";
import alertbox from "./alertbox";

export const rootReducer = combineReducers({
    popup,
    pagination,
    users,
    alertbox,
});

export type RootState = ReturnType<typeof rootReducer>;
