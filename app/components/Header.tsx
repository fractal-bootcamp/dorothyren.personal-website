import { motion } from "framer-motion"

export function Header({ selected = "" }: { selected: string; }) {
    return (
        <>
            <div className="flex flex-row p-1 justify-center flex-wrap items-center space-x-1 sm:space-x-2">
                <HeaderButton target="./" title="home" selected={selected} />
                <HeaderButton target="projects" title="projects" selected={selected} />
                <HeaderButton target="collections" title="collections" selected={selected} />
            </div>
        </>
    );
}

type HeaderButtonProps = {
    target: string,
    title: string,
    selected: string
}


function HeaderButton({ target, title, selected = "" }: HeaderButtonProps) {
    const conditionalStyles = (target === selected) ?
        "bg-amber-300 text-lime-900" :
        "bg-indigo-400 text-white"

    const buttonClass = `${conditionalStyles} 
      hover:bg-yellow-200 
      hover:text-yellow-950
      md:py-2
      md:px-4
  
      text-xs
      sm:text-base
  
      rounded`
    return (
        <div className="py-8 p-3">
            <a href={"/" + target}>
                <motion.button
                    className={buttonClass}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.90 }}
                >
                    {title}
                </motion.button>
            </a>
        </div>
    )
}