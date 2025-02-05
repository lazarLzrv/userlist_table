// alertbox

type ActionProps = {
    type: "SET_ALERT_BOX";
    payload: {
        open: boolean;
        message: string;
    };
};

export type AlertBoxProps = {
    message: string;
    open: boolean;
};

const initialState = {
    message: "",
    open: false,
};

export default function (
    state: AlertBoxProps = initialState,
    action: ActionProps
) {
    const { type, payload } = action;

    switch (type) {
        case "SET_ALERT_BOX":
            const { open, message } = payload;
            return {
                ...state,
                message,
                open,
            };

        default:
            return state;
    }
}
