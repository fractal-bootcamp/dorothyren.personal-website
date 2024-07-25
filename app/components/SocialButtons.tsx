import { motion } from "framer-motion"

// <motion.div 
// className="flex justify-center items-center bg-blue-100 m-5 p-5 rounded-lg w-[180px] text-center    
// hover:bg-yellow-200 
// hover:text-yellow-950"

// >
//     <a href={targetUrl} target="_blank" >
//         <div className="mb-5 text-center">{title}</div>
//         <img src = {avatarUrl} className = "w-[120px] rounded-lg text-center"/>
//     </a>
// </motion.div>

const SingleSocialBadge = ({ title, targetUrl, imageUrl }: { title: string, targetUrl: string, imageUrl: string }) => {
    return (
        <motion.div
            className="
        flex flex-col justify-center 
        bg-zinc-100 m-2 p-2 rounded-lg w-[50px]
        border border-zinc-300
        text-zinc-500
        hover:bg-yellow-200 
        hover:text-yellow-950"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.90 }}
        >
            <a href={targetUrl} target="_blank" rel="noopener noreferrer">
                <div className="flex flex-row justify-center items-center">
                    <img src={imageUrl} className="w-[30px]" />
                </div>
                {/* <div className="flex flex-row justify-center items-center ">
                    {title}
                </div> */}
            </a>
        </motion.div>
    )

}


export const Socials = () => {
    return (
        <div className="fixed bottom-0 right-0 flex flex-row m-5 justify-center items-end ">
            <SingleSocialBadge title="gh" targetUrl="https://github.com/dxren" imageUrl="/socials/github.svg" />
            <SingleSocialBadge title="li" targetUrl="https://www.linkedin.com/dorothyxren" imageUrl="/socials/linkedin.svg" />
            <SingleSocialBadge title="x" targetUrl="https://www.x.com/dorothyxren" imageUrl="/socials/twitter-x.svg" />
        </div>
    )

}