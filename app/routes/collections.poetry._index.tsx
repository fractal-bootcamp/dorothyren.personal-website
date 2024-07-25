import { ReactElement, useRef, Ref, RefObject, useState } from "react";
import { filterProps, motion } from "framer-motion"
import poems from "~/data/poems";
import Poem from "~/components/Poem";
import { Header } from "~/components/Header";

//create an array with all the data that you want to render on screen
// figure out how to render one instance of that data
// React component is a building block of React - it's a box that can hold other boxes (turn one project's data into one React component)
// map takes all the data and applies the transformation to all of them


// interface PoemExcerptProps {
//     title: string
//     author: string
//     excerpt: string
//     link: string
//     containerReference: RefObject<HTMLDivElement>
// }

// function PoemExcerpt(props: PoemExcerptProps) {
//     return (
//         <>
//         <motion.div
//     drag
//     dragConstraints={props.containerReference}
//     >
//             <div>
//                 <div className = "container px-5 py-5 border rounded-md bg-stone-50 hover:bg-orange-50 w-full max-w-lg">
//                 <p className="underline text-md"> {props.title} </p>
//                 <p className= "text-md"> {props.author}  </p>
//                 <br></br>
//                 <p> {props.excerpt}</p> 
//                 </div>
//             </div>
//         </motion.div>
//         </>
//     )
// }

// interface PoemFullProps {
//     title: string
//     author: string
//     fulltext: string
//     containerReference: RefObject<HTMLDivElement>
// }

// function PoemFull(props: PoemFullProps){
// return (
//     <>
//     <motion.div
// drag
// dragConstraints={props.containerReference}
// >
//         <div>
//             <div className = "container px-5 py-5 border rounded-md bg-stone-50 hover:bg-orange-50 w-full max-w-lg">
//             <p>{props.fulltext} </p>
//             </div>
//         </div>
//     </motion.div>
//     </>
// )
// }

export default function PoemPage() {
    const draggableContainerReference = useRef<HTMLDivElement>(null)

    return (
        <>
            <Header selected="collections" />
            <div className="App">
                <div className="pl-16 pt-16">
                    <h1 className="italic">tap to reveal</h1>
                    <motion.div ref={draggableContainerReference} className="pr-32 pl-16 pb-8 pt-8">
                        <div className="flex flex-wrap mb-4 md:flex md:flex-row pt-12 gap-6">
                            {poems.map(poemData => {
                                return <Poem {...poemData} />
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
    //else return other side html 
}