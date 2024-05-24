import { ChevronDown } from 'lucide-react';
import Logo from '../../../assets/Logo/Logo';
import './Navigation.css'
import { useEffect, useState } from 'react';
import hamMenu from '../../../assets/ham-menu.png'
import WorksComponent from './components/WorksDropdown/WorksDropdown';

function Navigation() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);

    function handleactive() {
        setActive(!active);
    }

    function handleMenu() {
        setShowMenu(!showMenu);

        if (showMenu) {
            setShowMenu(false);
        }
    }


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const navMenu = document.querySelector('.nav-menu');
            const hamMenu = document.querySelector('.ham-menu');

            if (navMenu && !navMenu.contains(event.target as Node) && hamMenu && !hamMenu.contains(event.target as Node)) {
                setShowMenu(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    return (
        <div className='Navigation'>
            <div>
                <Logo />
                <img src={hamMenu} alt="" className='ham-menu' onClick={handleMenu} />
            </div>

            <nav className={`nav-menu${showMenu ? ' active' : ''}`} >
                <div className='drop-down-btn' onClick={handleactive}>
                    work
                    <ChevronDown strokeWidth={3} />
                </div>
                <WorksComponent active={active} />
                <a href="">about</a>
                <a href="">resume</a>
            </nav>
        </div>
    );
}

export default Navigation;
