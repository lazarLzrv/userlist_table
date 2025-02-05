import UsersList from "../pages/UsersList";
import FormPage from "../pages/FormPage";

import { ReactNode } from "react";

export type PublicRoutesProps = {
    component: ReactNode;
    path: string;
};

const PublicRoutes = [
    {
        component: UsersList,
        path: "/",
    },
    {
        component: FormPage,
        path: "/create",
    },
    {
        component: FormPage,
        path: "/edit/:id",
    },
];

export default PublicRoutes;
