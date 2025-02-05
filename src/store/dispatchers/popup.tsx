import { useDispatch } from "react-redux";
import { PopupProps } from "../reducers/popup";

const Dispatcher = () => {
    const dispatch = useDispatch();

    const togglePopUp = (payload: PopupProps) => {
        dispatch({
            type: "TOGGLE_POPUP",
            payload,
        });
    };

    return {
        togglePopUp,
    };
};

export default Dispatcher;
