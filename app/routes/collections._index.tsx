import { Link } from "@remix-run/react";

export default function Collections() {
    return (
        <>
            <div className="flex flex-col p-8 m-8 border rounded-md bg-white shadow-md">
                <div className="justify-content: space-around">
                    <div> collections of poems and concepts </div>

                    <div className="underline p-4 ">
                        <ul>
                            <Link to="/collections/poetry">poetry</Link>
                        </ul>
                        {/* <ul>
                            <a href="/collections/words">words</a>
                        </ul> */}
                        <ul>
                            <Link to="/collections/content">content</Link>
                        </ul>
                    </div >
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="pl-3">
                    </div>
                </div>
            </div >
        </>
    );
}