import { ReactElement, useRef, Ref, RefObject } from "react";
import { motion } from "framer-motion"


//create an array with all the data that you want to render on screen
// figure out how to render one instance of that data
// React component is a building block of React - it's a box that can hold other boxes (turn one project's data into one React component)
// map takes all the data and applies the transformation to all of them

const poetryList =
    [
        {
            title: "Transformation",
            author: "Adam Zagajewski",
            excerpt: "I've taken long walks, craving one thing only...",
            link: "https://onbeing.org/poetry/transformation/",
        },
        {
            title: "Untitled",
            author: "James Baldwin",
            excerpt: "...think about it, please, a little?",
            link: "https://www.poetryfoundation.org/poems/88936/untitled-56fd7727ab2dd",
        },
        {
            title: "An excerpt from the Farewell, a chapter in The Prophet",
            author: "Kahlil Gibran",
            excerpt: "A little while, and my longing shall gather dust and foam for another body. A little while, a moment of rest upon the wind, and another woman shall bear me.",
            link: "https://poets.org/poem/farewell-2",
        },
        {
            title: "You're",
            author: "Sylvia Plath",
            excerpt: "Bent-backed Atlas, our traveled prawn. Snug as a bud and at home Like a sprat in a pickle jug.",
            link: "https://www.poetryfoundation.org/poems/49010/youre",
        }

    ]

interface PoemProps {
    title: string
    author: string
    excerpt: string
    link: string
    containerReference: RefObject<HTMLDivElement>
}

function Poem(props: PoemProps) {
    //onclick, put a toggle here, if true, show the first side, if false, change to other side
    return (
        <>
            <motion.div
    drag
    dragConstraints={props.containerReference}
    >
            <div>
                <div className = "container px-5 py-5 border rounded-md bg-stone-50 hover:bg-orange-50 w-full max-w-lg">
                <p className="underline text-md"> {props.title} </p>
                <p className= "text-md"> {props.author}  </p>
                <br></br>
                <p> {props.excerpt}</p> 
                </div>
            </div>
            </motion.div>

        </>
    )
}

export default function PoemPage() {
    const draggableContainerReference = useRef<HTMLDivElement>(null)

    return (    
        <motion.div ref={draggableContainerReference} className = "pr-32 pl-16 pb-8 pt-16">
             <h2>poetry is not a luxury ~
                these are excerpts from worthy poems
            </h2>
            <div className="flex flex-wrap mb-4 md:flex md:flex-row pt-12 gap-6">
            {poetryList.map(poemData => {
               return <Poem title={poemData.title} author={poemData.author} excerpt={poemData.excerpt} link={poemData.link} containerReference={draggableContainerReference} />
               
            })}

            </div>
        </motion.div>
    )
}


/*

          <div className="md:flex">
            <h2>poetry is not a luxury ~
                excerpts from poems I love. 
            </h2>
            {poetryList.map(poemDataToReactComponent)}
            </div>


*/



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