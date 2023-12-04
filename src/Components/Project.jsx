export default function Project(props) {
    const projects = props.data;
    // Maps through data from props passed through the portfolio page and to render a separate <div> for each.
    return (
        <>
            <section>
                {projects.map((project) => (
                    <div key={project.id}>
                        <h4>{project.title}</h4>
                        <a href={project.href}>
                            <img
                                src={project.src}
                                alt={project.alt}
                                className='project-img'
                            />
                        </a>
                        <a href={project.repo}>
                            <img
                                src='src/assets/images/GitHub-logo.png'
                                alt='github logo'
                                className='git-hub'
                            />
                        </a>
                    </div>
                ))}
            </section>
        </>
    );
};