import SisTeaLogo from "./assets/SisTeaLogo.png"
import mockup from './assets/mockup.png'

import './SisTea.css'

const SisTea = () => {
    return (
        <div className="project-grid SisTea">
            <div className="info-div">

                <img src={SisTeaLogo} alt="" className="logo" loading="lazy"/>

                <a href="/work/SisTea" className="linky">
                    <div className="gradient-proj sistea">
                        <h1 className="project-name"><em>Helping</em> nonverbal children&nbsp;communicate</h1>
                    </div>
                </a>
                <div className='project-description'>
                    I contributed to the MVP development of the SisTEA app,
                     which is dedicated to aiding communication for nonverbal autistic children.
                </div>
                <div className="tags-projects">
                    REACT NATIVE // MVP // NON-PROFITS
                </div>

            </div>

            <div className="image-animation-div">
                <a href="">
                    <img src={mockup} alt="" className="project-image" loading="lazy"/>

                    <img src="https://assets-global.website-files.com/61233686e9da0579abde1edb/6322934725d383faf74785aa_hover%20thing.png" loading="lazy" width="550" height="350" alt=""
                        srcSet="https://assets-global.website-files.com/61233686e9da0579abde1edb/6322934725d383faf74785aa_hover%20thing-p-500.png 500w,
                     https://assets-global.website-files.com/61233686e9da0579abde1edb/6322934725d383faf74785aa_hover%20thing-p-800.png 800w,
                     https://assets-global.website-files.com/61233686e9da0579abde1edb/6322934725d383faf74785aa_hover%20thing-p-1080.png 1080w,
                      https://assets-global.website-files.com/61233686e9da0579abde1edb/6322934725d383faf74785aa_hover%20thing.png 1282w"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 42vw, (max-width: 991px) 344px, 450px" className="gradient-hover sistea" />
                </a>
            </div>


        </div>
    )
}


export default SisTea