import { useLocation } from "@remix-run/react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

// List of routes that the nav bar will point to. When re matches the current URL, highlight this button.  -- ssebexen
const ROUTES: Array<{target: string, title: string, re: RegExp}> = [
  {target: '/', title: 'home', re: /^\/$/},
  {target: '/projects', title: 'projects', re: /^\/projects.*$/},
  {target: '/collections', title: 'collections', re: /^\/collections.*$/}
];

export function Header({ }: { selected: string; }) {
    const currentPath = useLocation().pathname;
    const routes = ROUTES;
    return (
        <>
            <div className="flex flex-row p-1 justify-center flex-wrap items-center space-x-1 sm:space-x-2">
                {routes.map(route => <HeaderButton key={route.target} {...route} currentPath={currentPath} />)}
            </div>
        </>
    );
}

type HeaderButtonProps = {
    target: string;
    title: string;
    currentPath: string;
    re: RegExp;
}


function HeaderButton({ target, title, currentPath, re }: HeaderButtonProps) {
    const conditionalStyles = (() => {
        const STYLE_ACTIVE = "bg-amber-300 text-lime-900";
        const STYLE_INACTIVE = "bg-indigo-400 text-white";
        return re.test(currentPath) ? STYLE_ACTIVE : STYLE_INACTIVE;
    })();

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
            <Link to={target}>
                <motion.button
                    className={buttonClass}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.90 }}
                >
                    {title}
                </motion.button>
            </Link>
        </div>
    )
}