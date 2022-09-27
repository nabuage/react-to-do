import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./functionBased/components/TodoContainer";
import About from "./functionBased/pages/About";
import "./functionBased/App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import NotMatch from "./functionBased/pages/NotMatch";
import Navbar from "./functionBased/components/Navbar";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<TodoContainer />} />
                <Route path="/about/*" element={<About />} />
                <Route path="*" element={<NotMatch />} />
            </Routes>
        </HashRouter>        
    </React.StrictMode>,
    document.getElementById("root"));