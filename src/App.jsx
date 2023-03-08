import React from "react";
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Menu from "./Menu";
import MainContainer from './container/manage_info/MainContainer';
import { BrowserRouter } from "react-router-dom";
import CreateContainer from "./container/create_container/CreateContainer";

const apiurl = 'http://192.168.1.151:5000';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Menu />}></Route>
                    <Route exact path="/root" element={<MainContainer apiurl={apiurl} />}></Route>
                    <Route exact path="/createcontainer" element={<CreateContainer />} ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;