import { ReactElement } from "react";


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

    ]

interface PoemProps {
    title: string
    author: string
    excerpt: string
    link: string
}

function Poems(props: PoemProps) {
    return (
        <>
            <div>
                <div className = "container px-5 py-5 border rounded-md bg-stone-50 hover:bg-orange-50 w-full max-w-lg">
                <p className="underline text-md"> {props.title} </p>
                <p className= "text-md"> {props.author}  </p>
                <br></br>
                <p> {props.excerpt}</p> 
                </div>
            </div>
        </>
    )
}

function poemDataToReactComponent(poemData: {
    title: string;
    author: string;
    excerpt: string;
    link: string;
}): ReactElement {
    return <Poems title={poemData.title} author={poemData.author} excerpt={poemData.excerpt} link={poemData.link} />
}

export default function PoemPage() {
    return (
        <div className = "pr-32 pl-16 pb-8 pt-16">
             <h2>poetry is not a luxury ~
                excerpts from poems I love. 
            </h2>
            <div className="flex flex-wrap mb-4 md:flex md:flex-row pt-12 gap-6">
            {poetryList.map(poemDataToReactComponent)}

            </div>
        </div>
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