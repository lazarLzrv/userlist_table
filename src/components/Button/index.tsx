import { ReactNode } from "react";

import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

type ButtonProps = {
    className?: string;
    onClick?: () => void;
    link?: string;
    children: ReactNode;
    disabled?: boolean;
    type?: "submit" | "button" | "reset";
};

const Button = ({
    className,
    onClick,
    link,
    children,
    disabled,
    type = "button",
}: ButtonProps) => {
    return (
        <>
            {link ? (
                <Link
                    className={`${className ? className : ""} ${styles.btn}`}
                    to={link}
                >
                    {children}
                </Link>
            ) : (
                <button
                    disabled={disabled}
                    type={type}
                    className={`${className ? className : ""} ${styles.btn}`}
                    onClick={onClick}
                >
                    {children}
                </button>
            )}
        </>
    );
};

export default Button;
