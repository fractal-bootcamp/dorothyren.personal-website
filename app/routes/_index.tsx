import type { MetaFunction } from "@remix-run/node";
import About from './about';
import Links from "./links";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Header = () => {
  return (
    <header>
      <h1>Dorothy Ren</h1>
      <h4 className="shadow-sm">probably rolling around in dirt</h4>
      <nav>
        <ul>
          <Links />
          <a href="/about">
            About
          </a>
        </ul>
        <a href="/projects">
          Projects
        </a>
      </nav>
    </header>
  );
};


export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
    </div>
  )
}
