import { useDispatch } from "react-redux";
import { AlertBoxProps } from "../reducers/alertbox";

const Dispatcher = () => {
    const dispatch = useDispatch();

    const setAlertBox = (payload: AlertBoxProps) => {
        dispatch({
            type: "SET_ALERT_BOX",
            payload,
        });
    };

    return {
        setAlertBox,
    };
};

export default Dispatcher;
