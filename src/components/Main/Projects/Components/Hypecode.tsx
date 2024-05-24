import HypecodeLogo from "../../../../assets/ProjectsLogo/HypecodeLogo"
import GradientMobile1 from "./Gradient/GradientMobile1.svg";

const Hypecode = () => {
    return (
        <div className="project-grid">
            <div className="info-div">
                <HypecodeLogo />

                <a href="/work/hypecode" className="linky">
                    <div className="gradient-proj hypecode">
                        <h1 className="project-name">Future of <em>fan commerce</em> capabilities in&nbsp;hypecode</h1>
                    </div>
                </a>
                <div className='project-description'>
                    Capturing the long-term vision of purchasing to
                    scale future e-commerce capabilities in hypecode
                    across all monetization offerings
                </div>
                <div className="tags-projects">
                    ux design // future vision // internship
                </div>

            </div>

            <div className="image-animation-div">
                <a href="">
                    <img src="https://assets-global.website-files.com/61233686e9da0579abde1edb/65024bc2ad4667136b74d9cd_iphone-14-(4)-65024bb9a60a3e3d8fd0d4a5%402x.png" loading="lazy"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 282.078125px, 369px"
                        srcSet="https://assets-global.website-files.com/61233686e9da0579abde1edb/65024bc2ad4667136b74d9cd_iphone-14-(4)-65024bb9a60a3e3d8fd0d4a5%402x-p-500.png 500w,
                https://assets-global.website-files.com/61233686e9da0579abde1edb/65024bc2ad4667136b74d9cd_iphone-14-(4)-65024bb9a60a3e3d8fd0d4a5%402x-p-800.png 800w,
                https://assets-global.website-files.com/61233686e9da0579abde1edb/65024bc2ad4667136b74d9cd_iphone-14-(4)-65024bb9a60a3e3d8fd0d4a5%402x-p-1080.png 1080w,
                https://assets-global.website-files.com/61233686e9da0579abde1edb/65024bc2ad4667136b74d9cd_iphone-14-(4)-65024bb9a60a3e3d8fd0d4a5%402x-p-1600.png 1600w,
                https://assets-global.website-files.com/61233686e9da0579abde1edb/65024bc2ad4667136b74d9cd_iphone-14-(4)-65024bb9a60a3e3d8fd0d4a5%402x-p-2000.png 2000w,
                https://assets-global.website-files.com/61233686e9da0579abde1edb/65024bc2ad4667136b74d9cd_iphone-14-(4)-65024bb9a60a3e3d8fd0d4a5%402x-p-2600.png 2600w,
                https://assets-global.website-files.com/61233686e9da0579abde1edb/65024bc2ad4667136b74d9cd_iphone-14-(4)-65024bb9a60a3e3d8fd0d4a5%402x.png 2645w"
                        alt="" className="project-image _83" />

                    <img src={GradientMobile1} alt="" className="gradient-hover" />
                </a>

            </div>


        </div>
    )
}


export default Hypecode