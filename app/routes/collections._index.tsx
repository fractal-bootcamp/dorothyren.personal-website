import React from "react";
import PoemPage from "./collections.poetry._index";

export default function Collections() {
    return (
        <div className="pl-4 pt-4">
            <div className="justify-content: space-around">
                <div> collections of poems, words, and concepts that are influential </div>

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
            </div>
        </div >
    );
}