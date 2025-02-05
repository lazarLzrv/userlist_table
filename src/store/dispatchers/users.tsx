import { useDispatch } from "react-redux";
import { UserProps } from "../reducers/users";

const Dispatcher = () => {
    const dispatch = useDispatch();

    const setUsersCount = (payload: number) => {
        dispatch({
            type: "SET_USERS_COUNT",
            payload,
        });
    };
    const deleteUser = (payload: number) => {
        dispatch({
            type: "DELETE_USER",
            payload,
        });
    };
    const updateUsersList = (payload: UserProps[]) => {
        dispatch({
            type: "UPDATE_USERS_LIST",
            payload,
        });
    };

    return {
        setUsersCount,
        deleteUser,
        updateUsersList,
    };
};

export default Dispatcher;
