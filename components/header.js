import Link from "next/link";

export default function header() {
    <nav id="navbar">
        <ul id="navbarList">
            <div className="headerLink">
                <Link href="/about">About</Link>
            </div>
            <div className="headerLink">
                <Link href="/contact">Contact</Link>
            </div>
            <div className="headerLink">
                <Link href="/projects">Projects</Link>
            </div>

        </ul>
    </nav>
}