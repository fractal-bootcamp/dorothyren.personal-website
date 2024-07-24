import { ReactElement } from "react";
import { Header } from "~/components/Header";


//create an array with all the data that you want to render on screen
// figure out how to render one instance of that data
// React component is a building block of React - it's a box that can hold other boxes (turn one project's data into one React component)
// map takes all the data and applies the transformation to all of them

// export default function Projects() {
//     return (
//         <div className="pl-4 pt-4">
//             <div className="justify-content: space-around">
//                 <div> Projects I'm working on </div>

//                 <div className=" p-4 ">
//                     <ul>
//                         <a className="underline" href="/projects/thewindhover">The Windhover</a>
//                     </ul>
//                     <ul>
//                         <a className="underline" href="/projects/generative-art">A Generative Art Project</a>
//                         <h3>A generative art project that uses the canvas API to create a fractal landscape</h3>
//                     </ul>
//                 </div >
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <div className="pl-3">
//                     <button className="border rounded-md p-2 w-16 bg-gray-50 text-sm">
//                         <a href="/">Home</a>
//                     </button>
//                 </div>
//             </div>
//         </div >
//     );
// }

const projectList =
    [
        {
            title: "The Windhover",
            description: "Memorizing the poem by Gerard Manley Hopkins",
            image: "/projects/fractalbootcamp.jpeg",
            link: "/projects/thewindhover",
        },
        {
            title: "Generative Art",
            description: "A fullstack generative art project that uses a postgres database hosted on Supabase, a server hosted on Render, and a frontend deployed on Netlify",
            image: "/projects/fractalbootcamp.jpeg",
            link: "https://dxr-gen-art.netlify.app",
        },
        {
            title: "Developer Trading Cards",
            description: "Uses the Nolita AI web scraper to scrape Dev.to developer blog profiles and generate a list of skills and attributes that are then displayed in a collectible trading card format",
            image: "/projects/fc-realmofdreams.jpeg",
        },

    ]

interface ProjectProps {
    title: string
    description: string
    image?: string
    link?: string
}

export function Project(props: ProjectProps) {
    return (
        <>
            <div className="border rounded-md p-4 h-full w-full">
                <a href={props.link} className="underline text-lg">{props.title}</a>
                <br></br>
                <br></br>
                <p> {props.description} </p>
                <img src={props.image} alt={props.title} className="w-full" />
            </div>
        </>
    )
}

// function projectDataToReactComponent(projectData: ProjectProps): ReactElement {
//     return <Project title={projectData.title} description={projectData.description} image={projectData.image} link={projectData.link} />
// }

export default function ProjectPage() {
    return (
        <>
            <div className="justify-content:flex-start flex-wrap:wrap grid grid-cols-4 gap-4 p-4 max-w-[400px] md:max-w-[800px]">
                <h2>Some projects I'm working on</h2>
                {projectList.map((projectData, index) =>
                    <Project
                        key={index}
                        title={projectData.title}
                        description={projectData.description}
                        image={projectData.image}
                        link={projectData.link} />
                )}
            </div>
            <div className="pl-3">
                <div className="flex justify-center margin-bottom-30px fixed bottom-10 w-full">
                    <button className="border rounded-md p-2 w-16 bg-gray-50 text-sm">
                        <a href="/">Home</a>
                    </button>
                </div>
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