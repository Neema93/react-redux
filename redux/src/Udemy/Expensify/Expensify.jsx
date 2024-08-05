import React from "react";
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const ExpenseDashbordPage =() =>(
    <div>
        This is from my Dashbord Componet
    </div>
);

const Expensify = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={ExpenseDashbordPage} />
            </Routes>
        </BrowserRouter>
    );
};
export default Expensify;