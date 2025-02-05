import { ReactNode } from "react";

import styles from "./styles.module.scss";

const MainTitle = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <h3 className={styles.title}>{children}</h3>
        </>
    );
};

export default MainTitle;
