import HypecodeLogo from "./assets/HypecodeLogo"
import gradientDesktop from "./assets/gradient.svg";
import mockup from './assets/mockup.png'

import './Hypecode.css'

const Hypecode = () => {
    return (
        <div className="project-grid Hypecode">
            <div className="info-div">
                <HypecodeLogo />

                <a href="./work/hypecode" className="linky">
                    <div className="gradient-proj hypecode">
                        <h1 className="project-name">Future of <em>fan commerce</em> capabilities in&nbsp;Hypecode</h1>
                    </div>
                </a>
                <div className='project-description'>
                    Capturing the long-term vision of purchasing to
                    scale future e-commerce capabilities in Hypecode
                    across all monetization offerings
                </div>
                <div className="tags-projects">
                    ux design // react js // client work
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


export default Hypecode