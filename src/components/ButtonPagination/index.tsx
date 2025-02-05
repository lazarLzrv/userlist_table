import { ReactNode } from "react";

import styles from "./styles.module.scss";

type ButtonPaginationProps = {
    className?: string;
    onClick: () => void;
    children: ReactNode;
    disabled?: boolean;
};
const ButtonPagination = ({
    className,
    onClick,
    children,
    disabled,
}: ButtonPaginationProps) => {
    return (
        <>
            <button
                type='button'
                disabled={disabled}
                className={`${className ? className : ""} ${styles.btn}`}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    );
};

export default ButtonPagination;
