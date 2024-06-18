import React from "react";
import PoemPage from "./collections.poetry._index";

export default function Collections() {
    return (
        <div className="pl-4 pt-4">
            <div className="justify-content: space-around">
                <div> collections of poems, words, and concepts </div>

                <div className="underline p-4 ">
                    <ul>
                        <a href="/collections/poetry">poetry</a>
                    </ul>
                    <ul>
                        <a href="/collections/words">words</a>
                    </ul>
                    <ul>
                        <a href="/collections/content">content</a>
                    </ul>
                </div >
                <br></br>
                <br></br>
                <br></br>
                <div className="pl-3">
                    <button className="border rounded-md p-2 w-16 bg-gray-50 text-sm">
                        <a href="/">Home</a>
                    </button>
                </div>
            </div>
        </div >
    );
}