// pagination

export type CurrentPageProps = {
    currentPage: number;
};

type ActionProps = {
    type: "SET_CURRENT_PAGE";
    payload: number;
};

const initialState = {
    currentPage: 1,
};

export default function (
    state: CurrentPageProps = initialState,
    action: ActionProps
) {
    const { type, payload } = action;

    switch (type) {
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: payload,
            };

        default:
            return state;
    }
}
