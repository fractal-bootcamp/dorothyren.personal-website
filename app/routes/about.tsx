export default function About() {
    return (
        <>
            <div className="text-md pb-4 pt-4 pl-3 h-screen">
                <div> Hey, I'm Dorothy. This website is a work in progress! </div>
                <br></br>
                <div className="">
                    <img src="/projects/dorothy-cdmx.jpg" alt="Dorothy" className="object-contain h-192 w-96 drop-shadow-md m-auto md:object-scale-down" />
                </div>
                <br></br>
                <div className="pl-3">
                    <button className="border rounded-md p-2 w-16 bg-gray-50 text-sm">
                        <a href="/">Home</a>
                    </button>
                </div>
            </div>
        </>
    );
};