
import './HeroSection.css'
function Header() {
    return (
        <header>
            <div className="background-noisy-container">
                <span className='background-noisy' />
                {/* <div className="ultra-gradient">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> */}
                {/* <div className="blending-group-wrapper">
                    <div className='shape-8'></div>
                    <div className='shape-9'></div>
                    <div className='shape-4'></div>
                    <div className='shape-5'></div>
                    <div className='shape-7'></div>
                    <div className='shape-6'></div>
                </div> */}
            </div>
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
                        <p>a web developer freelacer</p>
                    </div>
                    <div className="driven-container">
                        <h1>driven by</h1>
                        <p>empathetic storytelling, human connection, & tech for social good</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
