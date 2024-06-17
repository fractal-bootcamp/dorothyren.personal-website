import type { MetaFunction } from "@remix-run/node";
import About from './about';
import Links from "./links";
import React from "react";
import Collections from "./collections._index";
import Poem from "~/components/Poem";
import poems from "~/data/poems";


const Header = () => {
  return (
    <header>
      <h1>dorothy ren</h1>
      <h4 className="shadow-sm">probably rolling around in dirt</h4>
      <nav>
      <ul>
       <a href="/poem">
         Poem
       </a>
     </ul>
        <ul>
          <a href="/about">
            About
          </a>
        </ul>
        <a href="/projects">
          Projects
        </a>
        <ul>
        <a href="/collections">
          Collections
        </a>
        </ul>
        <Links />
      </nav>
    </header>
    
  );
};


export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
      <Poem {...poems[0]} />
    </div>
  )
}
