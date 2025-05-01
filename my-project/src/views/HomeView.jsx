import react from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skip from "../components/Skip";
import Header from "../components/Header";
import Main from "../components/Main";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Footer from "../components/Footer";

const Homeview=()=>{
    return(
    <>
    <h1>Homeview</h1>
    <Skip />
    <Header />
    <Main style="padding:20px;">   
        <Routes>
            <Route path="/intro" element={<Intro />}></Route>
            <Route path="/skill" element={<Skill />}></Route>
        </Routes>
    </Main>
    <Footer />
    </>
    );
};

export default Homeview;