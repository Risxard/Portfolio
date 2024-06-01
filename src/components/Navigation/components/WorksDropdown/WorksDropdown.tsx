
interface WorksComponentProps {
    active: boolean;
}


const WorksComponent: React.FC<WorksComponentProps> = ({ active }) => {
    const worksArray = [
        {
            title: "HypeCode",
            workUrl: "www.richardsonsouza.com"
        },
        {
            title: "Edlene Castro",
            workUrl: "www.edlenecastro.com.br"
        },
        {
            title: "Gymme",
            workUrl: "www.edlenecastro.com.br"
        },
        {
            title: "Suprime Video",
            workUrl: "www.edlenecastro.com.br"
        }
    ]


    return (
        <div className={`menu-drop-down`} style={{ display: active ? 'flex' : 'none' }}>
            {worksArray.map((work, index) => {
                return (
                    <a href="" key={index}>{work.title}</a>
                )
            })}
        </div>
    );
}

export default WorksComponent;
