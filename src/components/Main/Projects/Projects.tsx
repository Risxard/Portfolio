import { useEffect } from 'react';
import EdleneCastro from './Components/EdleneCastro/EdleneCastro';
import Hypecode from './Components/Hypecode/Hypecode';
import SisTea from './Components/SisTea/SisTea';
import './Projects.css';

const Projects = () => {
    useEffect(() => {
        const targets = document.querySelectorAll('.project-grid');

        if (targets.length > 0) {
            const myObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.7 });

            targets.forEach(target => {
                myObserver.observe(target);
            });

            return () => {
                myObserver.disconnect();
            };
        }
    }, []);

    return (
        <div className="projects-section" >
            <div className="projects-container">
                <Hypecode />
                <SisTea />
                <EdleneCastro />

            </div>
        </div>
    );
};

export default Projects;
