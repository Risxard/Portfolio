

import EdleneCastro from './Components/EdleneCastro';
import Hypecode from './Components/Hypecode';
import './Projects.css'

const Projects = () => {
    return (
        <div className="projects-section">
            <div className="projects-container">
                <Hypecode/>
                <EdleneCastro/>
            </div>
        </div>
    );
};

export default Projects;
