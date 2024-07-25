import type { MetaFunction } from "@remix-run/node";
// import Links from "../components/Links";
import React from "react";
import Poem from "~/components/Poem";
import poems from "~/data/poems";
import { Header } from "../components/Header"
import { Link } from "react-router-dom";
import Bio from "~/components/Bio";
import { Socials } from "~/components/SocialButtons";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header selected="./" />
      <Bio imageUrl="/socials/dorothy.jpg"
        bioText="Hey there, I'm Dorothy. I've worn a few hats in the tech world, from investor at NextView Ventures and Spark Capital to product manager at Chord Commerce and Carefull. These days I'm a bootcamp student learning fullstack web development at Fractal Tech 👩🏻‍💻, and in my free time I'm picking up contemporary floorwork 🤸🏽‍♀️ and hunting 🏹." />
      <Socials />
    </div>
  )
}

