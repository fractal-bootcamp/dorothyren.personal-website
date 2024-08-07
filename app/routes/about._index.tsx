import { Link } from "@remix-run/react";

export default function About() {
    return (
        <>
            <div className="text-md pb-4 pt-4 pl-3 h-screen">
                <div> 欢迎, I'm Dorothy. This website is a work in progress! </div>
                <br></br>
                <img src="/projects/dorothy-cdmx.jpg" alt="Dorothy" className="object-contain h-192 w-96 drop-shadow-md m-auto md:object-scale-down" />
                <br></br>
                <div className="pl-3">
                    <button className="border rounded-md p-2 w-16 bg-gray-50 text-sm">
                        <Link to="/">Home</Link>
                    </button>
                </div>
            </div>
        </>
    );
};