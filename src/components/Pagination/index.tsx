import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CurrentPageProps } from "../../store/reducers/pagination";

import Dispatcher from "../../store/dispatchers/pagination";

import {
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
    FaAngleLeft,
    FaAngleRight,
} from "react-icons/fa";

import ButtonPagination from "../ButtonPagination";

import styles from "./styles.module.scss";
import { RootState } from "../../store/reducers";

const Pagination = () => {
    const { currentPage } = useSelector((state: RootState) => state.pagination);
    const { usersCount } = useSelector((state: RootState) => state.users);
    const { setCurrentPage } = Dispatcher();

    const [pages, setPages] = useState<number[]>([]);

    useLayoutEffect(() => {
        const totalPages = Math.ceil(usersCount / 10);
        const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        setPages(pages);
    }, [usersCount]);

    return (
        <>
            <ul className={styles.pagination}>
                <li>
                    <ButtonPagination
                        disabled={currentPage === 1}
                        onClick={() => {
                            setCurrentPage(1);
                        }}
                    >
                        <FaAngleDoubleLeft />
                    </ButtonPagination>
                </li>

                <li>
                    <ButtonPagination
                        disabled={currentPage === 1}
                        onClick={() => {
                            setCurrentPage(currentPage - 1);
                        }}
                    >
                        <FaAngleLeft />
                    </ButtonPagination>
                </li>

                {pages.map((item, i) => {
                    return (
                        <li key={item}>
                            <ButtonPagination
                                key={item}
                                className={
                                    currentPage === i + 1 ? styles.current : ""
                                }
                                onClick={() => {
                                    setCurrentPage(i + 1);
                                }}
                            >
                                {item}
                            </ButtonPagination>
                        </li>
                    );
                })}
                <li>
                    <ButtonPagination
                        disabled={currentPage === pages.length}
                        onClick={() => {
                            setCurrentPage(currentPage + 1);
                        }}
                    >
                        <FaAngleRight />
                    </ButtonPagination>
                </li>

                <li>
                    <ButtonPagination
                        disabled={currentPage === pages.length}
                        onClick={() => {
                            setCurrentPage(pages.length);
                        }}
                    >
                        <FaAngleDoubleRight />
                    </ButtonPagination>
                </li>
            </ul>
        </>
    );
};

export default Pagination;
