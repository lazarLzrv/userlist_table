import { useEffect } from "react";

import { useSelector } from "react-redux";

import DispatcherAlertbox from "../../store/dispatchers/alertbox";
import { RootState } from "../../store/reducers";

import styles from "./styles.module.scss";

const AlertBox = () => {
    const { open, message } = useSelector((state: RootState) => state.alertbox);
    const { setAlertBox } = DispatcherAlertbox();

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                setAlertBox({
                    open: false,
                    message: "",
                });
            }, 1000);
        }
    }, [open]);

    return (
        <>
            <div className={`${open ? styles.open : ""} ${styles.alert_box}`}>
                <p>{message}</p>
            </div>
        </>
    );
};

export default AlertBox;
