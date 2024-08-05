import React from "react";
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const ExpenseDashbordPage = () => (
    <div>
        This is from my Dashbord Componet
    </div>
);
const AddExpensePage = () => (
    <div>
        This is from create Expense
    </div>
);
const EditExpensePage = () => (
    <div>
        This is from Edit Expense
    </div>
);
const HelpPage = () => (
    <div>
        This is from Help
    </div>
);
const Expensify = () => {
    return (
        <BrowserRouter>
        
            <Routes>
                <Route path="/" Component={ExpenseDashbordPage} />
                <Route path="/create" Component={AddExpensePage} />
                <Route path="/edit" Component={EditExpensePage} />
                <Route path="/help" Component={HelpPage} />
            </Routes>
        </BrowserRouter>
    );
};
export default Expensify;