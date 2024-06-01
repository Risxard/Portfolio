import EdleneLogo from "./assets/edleneLogo.png"
import gradientDesktop from "./assets/gradient.svg";
import mockup from './assets/mockup.png'

import './Edlenecastro.css'

const EdleneCastro = () => {
    return (
        <div className="project-grid">
            <div className="info-div">
                <img src={EdleneLogo} alt="" className="logo" loading="lazy"/>

                <a href="/work/hypecode" className="linky">
                    <div className="gradient-proj edlenecastro">
                        <h1 className="project-name"><em>Digital experiences</em> that promote&nbsp; <em>healthy eating</em></h1>
                    </div>
                </a>
                <div className='project-description'>
                    Capturing the long-term vision of purchasing to
                    scale future e-commerce capabilities in Edlene Castro
                    across all monetization offerings
                </div>
                <div className="tags-projects">
                    react js // health // client work
                </div>

            </div>

            <div className="image-animation-div">
                <a href="">
                    <img src={mockup} alt="" className="project-image" loading="lazy"/>
                    <img src={gradientDesktop} alt="" className="gradient-hover" loading="lazy"/>
                </a>

            </div>


        </div>
    )
}


export default EdleneCastro