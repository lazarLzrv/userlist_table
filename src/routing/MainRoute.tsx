import { Routes, Route } from "react-router-dom";

import PublicRoutes from "./PublicRoutes";

const MainRouter = () => {
    return (
        <div className='App'>
            <Routes>
                {PublicRoutes.map((item) => {
                    const { path, component: Component } = item;
                    return (
                        <Route key={path} path={path} element={<Component />} />
                    );
                })}

                <Route path='*' element={<h1>Not found!</h1>} />
            </Routes>
        </div>
    );
};

export default MainRouter;
