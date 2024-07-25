//create an array with all the data that you want to render on screen
// figure out how to render one instance of that data
// React component is a building block of React - it's a box that can hold other boxes (turn one project's data into one React component)
// map takes all the data and applies the transformation to all of them

import { Link } from "@remix-run/react"

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
            title: "Generative Art",
            description: "A fullstack generative art project that uses a postgres database hosted on Supabase, an express server hosted on Render, a React frontend deployed on Netlify, and uses Clerk for auth. ",
            image: "/projects/fractalbootcamp.jpeg",
            link: "https://dxr-gen-art.netlify.app",
        },
        {
            title: "Developer Trading Cards",
            description: "Uses the Nolita AI web scraper to scrape Dev.to developer blog profiles and generate a list of skills and attributes that are then displayed in a collectible trading card format",
            image: "",
            link: "https://github.com/fractal-bootcamp/growthhacks.HackerCards"
        },
        {
            title: "Kitchen Gossip",
            description: "A slackbot that pulls recent Github activity and posts a summary about what each user's been cookin' up",
            image: "/projects/kitchengossip.png",
            link: "https://github.com/fractal-bootcamp/hackathon-kitchen-gossip"
        },
        {
            title: "The Windhover",
            description: "Memorizing the poem by Gerard Manley Hopkins",
            image: "/projects/windhover.jpeg",
            link: "/projects/thewindhover",
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
            <div className="border rounded-md p-4 h-full w-full bg-zinc-100 space-y-4">
                {
                    typeof props.link === 'string'
                    ? <Link to={props.link} className="underline text-lg block">{props.title}</Link>
                    : <p className="underline text-lg">{props.title}</p>
                }
                <p>{props.description}</p>
                {props.image && <img src={props.image} alt={props.title} className="w-full rounded-md" />}
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
            <div className="flex flex-col p-8 m-8 border rounded-md bg-white shadow-md">
                <div className="mb-4 ">
                    <h1 className="text-xl">These are some projects I'm working on</h1>
                </div>
                <div className="justify-content:flex-start flex-wrap:wrap grid grid-cols-4 gap-8 p-4 max-w-full md:max-w-full">
                    {projectList.map((projectData, index) =>
                        <Project
                            key={index}
                            title={projectData.title}
                            description={projectData.description}
                            image={projectData.image}
                            link={projectData.link} />
                    )}
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