import { BrowserRouter } from "react-router-dom";

import PopUp from "./components/PopUp";
import AlertBox from "./components/AlertBox";
import MainRoute from "./routing/MainRoute";

import "./styles/globals.scss";

function App() {
    return (
        <>
            <BrowserRouter>
                <MainRoute />
                <PopUp />
                <AlertBox />
            </BrowserRouter>
        </>
    );
}

export default App;
