import React from "react";
import PoemPage from "./collections.poetry._index";

export default function Collections() {
    return (
        <div className="justify-content: space-around">
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8", justifyContent: "space-between", textDecoration: "underline" }}>
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
    );
}