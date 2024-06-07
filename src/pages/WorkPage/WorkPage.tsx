import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/HeroSection/HeroSection";
import Main from "../../components/Main/Main";

import gradientDesktop from '../../components/Main/Projects/Components/Hypecode/assets/mockup.png'



import './WorkPage.css'

const homeHero: React.FC = () => {
    return (
        <div className="div-case-hero">


            <div className="grid-case-header">
                <img src={gradientDesktop} alt="" className="img-case ins aaa" loading="lazy" />



                <div className="div-case-description">
                    <h1 className="proj-title">Shaping<em> </em>the <em>Digital Future</em></h1>
                    <p id="w-node-d15f5581-967d-e021-6219-c23528f150cc-1e722471" className="subtitle-case">
                        Realizing the long-term vision to enhance and expand technological capabilities with HypeCode,
                        providing comprehensive solutions across design, development, and cybersecurity.</p>

                </div>


            </div>

            <div className="line-divider-full"></div>

            <div className="grid-project-info">
                <div className="grid-box">
                    <div className="h-gridelems">
                        <strong>Role</strong>
                    </div>
                    <div className="info-p">Front-end eveloper <br /> UX Designer</div>
                </div>

                <div className="grid-box">
                    <div className="h-gridelems">
                        <strong>Timeline</strong>
                    </div>
                    <div className="info-p">Mar - Mai 2024</div>
                </div>

                <div className="grid-box">
                    <div className="h-gridelems">
                        <strong>team</strong>
                    </div>
                    <div className="info-p">Richardson souza
                    </div>
                </div>

                <div className="grid-box">
                    <div className="h-gridelems">
                        <strong>Skills</strong>
                    </div>
                    <div className="info-p">
                        Clean code
                        <br />
                        Mobile First
                        <br />
                        Design patterns
                        <br />
                    </div>
                </div>

                <div className="grid-box">
                    <div className="h-gridelems">
                        <strong>Tools</strong>
                    </div>
                    <div className="info-p">React <br />
                        Javascript
                        <br />
                        Figma
                        <br />
                        DatoCMS
                        <br />
                        FormSubmit
                    </div>
                </div>
            </div>
        </div>

    );
};



function Work() {
    return (
        <div className='Work page'>
            <Header HeroComponent={homeHero} />
            <Main />
            <Footer />
        </div>
    );
}

export default Work;
