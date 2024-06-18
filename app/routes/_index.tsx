import type { MetaFunction } from "@remix-run/node";
import Links from "../components/links";
import React from "react";
import Collections from "./collections._index";
import Poem from "~/components/Poem";
import poems from "~/data/poems";
import { Header } from "../components/Header"
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
      <Links />
    </div>
  )
}
