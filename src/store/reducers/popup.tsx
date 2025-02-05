// popup

export type PopupProps = {
    open: boolean;
    id: number;
};
type ActionProps = {
    type: "TOGGLE_POPUP";
    payload: {
        open: boolean;
        id: number;
    };
};

const initialState = {
    open: false,
    id: 0,
};

export default function (
    state: PopupProps = initialState,
    action: ActionProps
) {
    const { type, payload } = action;

    switch (type) {
        case "TOGGLE_POPUP":
            const { open, id } = payload;
            return {
                ...state,
                open,
                id,
            };

        default:
            return state;
    }
}
