import Link from "next/link";
import { useRouter } from "next/router";
export default function Header() {
    
    const getCurrentURL = () => {
        let x = useRouter().route;
        return x;
    }
    const location = getCurrentURL()
    const addToHeader = [["Home", "/"], ["Projects", "/projects"], ["About", "/about"], ["Contact", "/contact"]];
    return(
        <nav id="navbar">
        <ul>
            <li>Portfolio</li>
        </ul>
        <ul id="navbarList">
            {addToHeader.filter(x => x[1] != location).map(x => 
                <li className="navbarItem" id={x[0] + "NavbarItem"} key={x[0] + "NavbarItem"}>
                    <Link href={x[1]}>{x[0]}</Link>
                </li>
            )}
        </ul>
    </nav>
    )
}