import { FC } from 'react';
import './HeroSection.css'


interface HeaderProps {
    HeroComponent: FC;
}


const Header: FC<HeaderProps> = ({ HeroComponent }) => {
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




            <div className="container-centralizer">
                <HeroComponent />
            </div>


        </header>
    );
}

export default Header;
