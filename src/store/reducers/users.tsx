// users

import { data } from "../sampleData";

export type UserProps = {
    id?: number;
    name: string;
    email: string;
    phone: string;
};

type StateProps = {
    usersCount: number;
    allUsers: UserProps[];
};

export type SetUsersCountAction = {
    type: "SET_USERS_COUNT";
    payload: number;
};

export type DeleteUserAction = {
    type: "DELETE_USER";
    payload: number;
};

export type UpdateUsersListAction = {
    type: "UPDATE_USERS_LIST";
    payload: UserProps[];
};

// Union type for all possible actions
type ActionProps =
    | SetUsersCountAction
    | DeleteUserAction
    | UpdateUsersListAction;

const initialState = {
    usersCount: 0,
    allUsers: data,
};

export default function (
    state: StateProps = initialState,
    action: ActionProps
) {
    const { type, payload } = action;

    switch (type) {
        case "SET_USERS_COUNT":
            return {
                ...state,
                usersCount: payload,
            };
        case "DELETE_USER":
            return {
                ...state,
                allUsers: state.allUsers.filter(
                    (item: UserProps) => item.id !== payload
                ),
            };
        case "UPDATE_USERS_LIST":
            return {
                ...state,
                allUsers: payload,
            };

        default:
            return state;
    }
}
