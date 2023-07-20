import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "../pages/Login";
import Home from "../pages/Home";
import BillingPage from "../pages/BillingPage";
import EntryPage from "../pages/EntryPage";
import UpdateEntry from "../pages/UpdateEntry";
import DeleteEntry from "../pages/DeleteEntry";

function AllRoutes() {
    return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/home/billing-page" element={<BillingPage/>}/>
            <Route path="/home/entry-page" element={<EntryPage/>}/>
            <Route path="/home/update-entry" element={<UpdateEntry/>}/>
            <Route path="/home/delete-entry" element={<DeleteEntry/>}/>
        </Routes>
       </BrowserRouter> 
    );
}

export default AllRoutes;