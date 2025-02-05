import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { FaArrowLeft } from "react-icons/fa";

import Button from "../../components/Button";
import MainTitle from "../../components/MainTitle";

import DispatcherUsers from "../../store/dispatchers/users";

import userSchema from "../../validations/userSchema";

import styles from "./styles.module.scss";
import { RootState } from "../../store/reducers";
import { UserProps } from "../../store/reducers/users";

const Index = () => {
    const { allUsers } = useSelector((state: RootState) => state.users);
    const { updateUsersList } = DispatcherUsers();

    const { id } = useParams();
    const navigate = useNavigate();

    const initial = { name: "", email: "", phone: "" };
    const [state, setState] = useState<UserProps>(initial);

    useEffect(() => {
        if (id && allUsers.length > 0) {
            const currentUser =
                allUsers.find((item) => item.id === Number(id)) || initial;
            setState(currentUser);
        }
    }, [id, allUsers]);

    const onSubmit = (
        values: UserProps,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        let updatedList: UserProps[] = [];

        setSubmitting(false);
        if (id) {
            updatedList = allUsers.map((item) =>
                item.id === Number(id) ? values : item
            );
        } else {
            updatedList = [...allUsers, { ...values, id: allUsers.length + 1 }];
        }

        updateUsersList(updatedList);
        navigate("/");
    };

    return (
        <div className={styles.container}>
            <MainTitle>
                <Button link='/' className={styles.back}>
                    <FaArrowLeft />
                </Button>
                {id ? "Edit User" : "Create User"}
            </MainTitle>

            <Formik
                enableReinitialize
                initialValues={state}
                validationSchema={userSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className={styles.input_group}>
                            <label>Name:</label>
                            <Field type='text' name='name' />
                            <ErrorMessage name='name' component='div' />
                        </div>

                        <div className={styles.input_group}>
                            <label>Email:</label>
                            <Field type='email' name='email' />
                            <ErrorMessage name='email' component='div' />
                        </div>

                        <div className={styles.input_group}>
                            <label>Phone:</label>
                            <Field type='text' name='phone' />
                            <ErrorMessage name='phone' component='div' />
                        </div>

                        <Button type='submit' disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Index;
