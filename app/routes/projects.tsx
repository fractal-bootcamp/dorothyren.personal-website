import { ReactElement } from "react";


//create an array with all the data that you want to render on screen
// figure out how to render one instance of that data
// React component is a building block of React - it's a box that can hold other boxes (turn one project's data into one React component)
// map takes all the data and applies the transformation to all of them

const projectList =
    [
        {
            title: "Fractal Bootcamp",
            description: "Spending Summer 2024 learning how to code",
            image: "projects/fractalbootcamp.jpeg",
        },
        {
            title: "Infinite Play",
            description: "A weekend retreat series for movement and play",
            image: "/projects/infiniteplay.jpg",
        },
        {
            title: "Full Circle Showcase",
            description: "A show series for pole dance performances at Full Circle Brooklyn",
            image: "projects/fc-realmofdreams.jpeg",
        },

    ]

interface ProjectProps {
    title: string
    description: string
    image: string
}

export function Project(props: ProjectProps) {
    return (
        <>
            <div>
                <p className="underline text-lg"> {props.title} </p>
                <p> {props.description} </p>
                <img src={props.image} alt={props.title} />
            </div>
        </>
    )
}

function projectDataToReactComponent(projectData: {
    title: string;
    description: string;
    image: string;
}): ReactElement {
    return <Project title={projectData.title} description={projectData.description} image={projectData.image} />
}

export default function ProjectPage() {
    return (
        <>
            <div className="justify-content:flex-start flex-wrap:wrap grid grid-cols-4 gap-4 p-4 max-w-[400px] md:max-w-[800px]">
                <h2>Some projects I'm working on</h2>
                {projectList.map(projectDataToReactComponent)}
            </div>
            <div className="pl-3">
                <button className="border rounded-md p-2 w-16 bg-gray-50 text-sm">
                    <a href="/">Home</a>
                </button>
            </div>
        </>
    )
}



// export default function ProjectsDeployment() {

//     const deployedData - projectList.map(
//         (item) => {
//             return (
//                 < Projects name={ } description={ } image={ } />

// }



/*
({title, description, image}:
    {
     title: string;
     description: string;
     image: string;
    }
) {

}*/