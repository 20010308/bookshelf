import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./component/Login/Login";
import AdminLayout from "./pages/AdminLayout";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<Login/>}/>
                <Route path="/admin" element={<AdminLayout/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
