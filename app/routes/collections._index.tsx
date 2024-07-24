import React from "react";
import PoemPage from "./collections.poetry._index";
import { Header } from "~/components/Header";

export default function Collections() {
    return (
        <>
            <Header selected="collections" />
            <div className="flex flex-col p-8 m-8 border rounded-md bg-white shadow-md">
                <div className="justify-content: space-around">
                    <div> collections of poems and concepts </div>

                    <div className="underline p-4 ">
                        <ul>
                            <a href="/collections/poetry">poetry</a>
                        </ul>
                        {/* <ul>
                            <a href="/collections/words">words</a>
                        </ul> */}
                        <ul>
                            <a href="/collections/content">content</a>
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