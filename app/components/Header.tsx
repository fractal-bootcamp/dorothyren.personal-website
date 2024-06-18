import Links from "~/components/links";

export function Header() {
    return (
        <header>
            <div className="text-2xl shadow-md pb-4 pt-4 pl-3">Dorothy Ren</div>
            <div className="pl-4 pt-3">
                <nav>
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
                    <br></br>
                    <br></br>
                </nav>
            </div>
        </header >

    );
};

