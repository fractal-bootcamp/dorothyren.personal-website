import type { MetaFunction } from "@remix-run/node";
// import Links from "../components/Links";
import React from "react";
import Collections from "./collections._index";
import Poem from "~/components/Poem";
import poems from "~/data/poems";
import { Header } from "../components/Header"
import { Link } from "react-router-dom";
import Bio from "~/components/Bio";
import { Socials } from "~/components/SocialButtons";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header selected="" />
      <Bio imageUrl="/socials/dorothy.jpg"
        bioText="fill in bio text here" />
      <Socials />
    </div>
  )
}
