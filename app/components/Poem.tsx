// dorothy to write a poem that takes in a Poem {} and renders a Poem that can be flipped back and forth.
import { motion } from "framer-motion"
import { useState } from "react";


interface Poem {
  title: string,
  author: string,
  excerpt: string,
  fulltext: string,
  link: string,
}


function Poem(props: Poem) {

  const [flip, setFlip] = useState(true);

  const transition = { duration: 0.7 };
  const animate = { rotateY: flip ? 0 : 180 };

  return (
    <motion.div
      drag
      dragConstraints={{
        top: -150,
        left: -150,
        right: 150,
        bottom: 150,
      }}>
      <div>
        <motion.div
          onClick={() => setFlip((prevState) => !prevState)}
          transition={transition}
          animate={animate}
          className="max-w-md"
        >
          <motion.div transition={transition} animate={animate} className="w-100 h-100 px-5 py-5 border rounded-md bg-stone-50 hover:bg-orange-50 w-full max-w-lg">
            <motion.div
              transition={transition}
              animate={animate}
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="underline text-md"> {props.title} </div>
              <div className="text-md"> {props.author}  </div>
              <br></br>
              <div>
                {props.excerpt}
              </div>
            </motion.div>
            <motion.div
              transition={transition}
              initial={{ rotateY: 180 }}
              animate={{ rotateY: flip ? 180 : 0 }}
              style={{ backfaceVisibility: "hidden" }}
            >
              <div style={{ whiteSpace: "pre-wrap" }}>{props.fulltext}</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}


export default Poem;