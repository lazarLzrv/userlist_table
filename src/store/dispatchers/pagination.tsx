import { useDispatch } from "react-redux";

const Dispatcher = () => {
    const dispatch = useDispatch();

    const setCurrentPage = (payload: number) => {
        dispatch({
            type: "SET_CURRENT_PAGE",
            payload,
        });
    };

    return {
        setCurrentPage,
    };
};

export default Dispatcher;
