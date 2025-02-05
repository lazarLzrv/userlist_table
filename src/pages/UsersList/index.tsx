import { useLayoutEffect, useState, useEffect, ChangeEvent } from "react";
import { useSelector } from "react-redux";

import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

import Button from "../../components/Button";
import MainTitle from "../../components/MainTitle";
import Pagination from "../../components/Pagination";

import DispatcherPopUp from "../../store/dispatchers/popup";
import DispatcherUsers from "../../store/dispatchers/users";

import { RootState } from "../../store/reducers";

import { UserProps } from "../../store/reducers/users";

import styles from "./styles.module.scss";

const Index = () => {
    const { togglePopUp } = DispatcherPopUp();
    const { setUsersCount } = DispatcherUsers();

    const { allUsers } = useSelector((state: RootState) => state.users);
    const { currentPage } = useSelector((state: RootState) => state.pagination);

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState<UserProps[]>([
        {
            id: 0,
            name: "",
            email: "",
            phone: "",
        },
    ]);

    const setVisibleUsers = (currentPage = 1) => {
        const currentBatch =
            currentPage > 1 ? (currentPage - 1) * 10 : currentPage;
        const visibleUsers = allUsers.slice(currentBatch - 1, currentBatch + 9);
        setFilteredUsers(visibleUsers);
    };

    useLayoutEffect(() => {
        if (searchTerm.length === 0) {
            setUsersCount(allUsers.length);
            setVisibleUsers();
        } else {
            setUsersCount(filteredUsers.length);
        }
    }, [searchTerm, allUsers]);

    useEffect(() => {
        setFilteredUsers(allUsers);
        setVisibleUsers(currentPage);
    }, [allUsers]);

    useEffect(() => {
        setVisibleUsers(currentPage);
    }, [currentPage]);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setSearchTerm(value);

        if (value) {
            const filteredData = allUsers.filter(({ name }: { name: string }) =>
                name.toLowerCase().includes(value.toLowerCase())
            );

            setFilteredUsers(filteredData);
        } else {
            setFilteredUsers(allUsers);
        }
    };

    return (
        <div className={styles.container}>
            <MainTitle>Users list</MainTitle>

            <div className={styles.top}>
                <input
                    type='text'
                    placeholder='Search by name'
                    value={searchTerm}
                    onChange={handleSearch}
                    className={styles.searchInput}
                />
                <Button link='/create' className={styles.create}>
                    <FaPlusCircle /> Create
                </Button>
            </div>

            <table className={styles.list}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>actions</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredUsers.map(({ name, email, phone, id }) => {
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>
                                    <div className={styles.btn_wrapper}>
                                        <Button
                                            link={`/edit/${id}`}
                                            className={styles.edit}
                                        >
                                            <FaPen />
                                        </Button>
                                        <Button
                                            className={styles.delete}
                                            onClick={() =>
                                                id &&
                                                togglePopUp({
                                                    open: true,
                                                    id,
                                                })
                                            }
                                        >
                                            <FaTrash />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Pagination />
        </div>
    );
};

export default Index;
