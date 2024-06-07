import React from 'react';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/HeroSection/HeroSection";
import Main from "../../components/Main/Main";

import './HomePage.css'

const homeHero: React.FC = () => {
    return (
        <div className="main-text home">
            <div className="title-name">
                <span><em>R</em>ichard</span>
                <span></span>
            </div>
            <div className="heading">
                <p>is a web developer front-end giving life to digital
                    experiences that simplify, uplift, and nurture human
                    connection.</p>
            </div>
            <div className="div-container">
                <div className="currently-container">
                    <h1>currently</h1>
                    <p>a web developer front-end @freelancer</p>
                </div>
                <div className="driven-container">
                    <h1>driven by</h1>
                    <p>empathetic storytelling, human connection, & tech for social good</p>
                </div>
            </div>
        </div>
    );
};

function Home() {
    return (
        <div className='Home page'>
            <Header HeroComponent={homeHero} />
            <Main />
            <Footer />
        </div>
    );
}

export default Home;
