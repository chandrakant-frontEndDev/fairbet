import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../authentication/Login';
import Registrantion from '../authentication/Registrantion';
import ContactUs from '../components/contactUs/ContactUs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/index/Index';
import Gallary from '../components/pages/Gallary';
import LatestGameResult from '../components/pages/LatestGameResult';
import Page404 from '../components/pages/Page404';
import Schedule from '../components/pages/schedule/Schedule';
import Standings from '../components/pages/Standings';
import Promotions from '../components/promotions/Promotions';
import Result from '../components/results/Result';
import warningBar from "../assets/images/ie8-panel/warning_bar_0000_us.jpg";
import Cricket from '../components/index/sportTabs/Cricket';
import Soccer from '../components/index/sportTabs/Soccer';
import Tennis from '../components/index/sportTabs/Tennis';
import Football from '../components/index/sportTabs/Football';
import Volleyball from '../components/index/sportTabs/Volleyball';
import Baseball from '../components/index/sportTabs/Baseball';
import LiveCard from '../components/index/sportTabs/LiveCard';
import LiveCasino from '../components/index/sportTabs/LiveCasino';
import SlotGames from '../components/index/sportTabs/SlotGames';
import AboutUs from '../components/aboutUs/AboutUs';
import Wallet from '../components/wallet/Wallet';

const Index = () => {
    return (
        <>
            <BrowserRouter basename='/fairbet/'>
                <div className="ie-panel"><a href="http://windows.microsoft.com/en-US/internet-explorer/"><img src={warningBar} height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today." /></a></div>
                <div className="preloader loaded">
                    <div className="preloader-body">
                        <div className="preloader-item"></div>
                    </div>
                </div>
                <div className="page animated" style={{ animationDuration: "500ms" }}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Registrantion />} />
                        <Route path='/results' element={<Result />} />
                        <Route path='/promotions' element={<Promotions />} />
                        <Route path='/contact-us' element={<ContactUs />} />
                        <Route path='*' element={<Page404 />} />
                        <Route path='/gallery' element={<Gallary />} />
                        <Route path='/latest-game-results' element={<LatestGameResult />} />
                        <Route path='/standings' element={<Standings />} />
                        <Route path='/schedule' element={<Schedule />} />
                        <Route path='/cricket' element={<Cricket />} />
                        <Route path='/soccer' element={<Soccer />} />
                        <Route path='/tennis' element={<Tennis />} />
                        <Route path='/football' element={<Football />} />
                        <Route path='/volleyball' element={<Volleyball />} />
                        <Route path='/baseball' element={<Baseball />} />
                        <Route path='/liveCard' element={<LiveCard />} />
                        <Route path='/liveCasino' element={<LiveCasino />} />
                        <Route path='/slotGames' element={<SlotGames />} />
                        <Route path="/aboutUs" element={<AboutUs />} />
                        <Route path="/aboutUs" element={<AboutUs />} />
                        <Route path="/wallet" element={<Wallet />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    )
}

export default Index
