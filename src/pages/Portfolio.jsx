import Project from '../Components/Project';
import data from '../assets/data/project-data';

export default function Portfolio() {
    // Renders projects, passes imported data as a prop to the Project component
    return (
        <>
            <h2>Portfolio</h2>
            <Project data={data} />
        </>
    );
}
