import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import Create from "./pages/Create";
import Dashboard from "./pages/Dashboard";
import YTPreview from "./pages/YTPreview";
import Login from "./components/Login";

export default function App() {

    const {pathname}= useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    },[pathname])
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<Create />} />
                <Route path="/create/:id" element={<Create />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/preview" element={<YTPreview />} />
                <Route path="/login" element={<Login />} />



            </Routes>
            <Footer />
        </>
    );
}