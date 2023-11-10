import '../styles/Project.css';

function Project(props) {
    return (
        <div>
            {props.projects.map((project) => (
                <div className="cardFormat">
                    <img className="imageFormat" src={project.image} />
                    <div>
                        <h5>Name: {project.name}</h5>
                        <p>Description: {project.description}</p>
                        <a href="#">{project.deployedApp}</a>
                        <a href="#">{project.repo}</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;