import Link from "next/link";
import { useRouter } from "next/router";
export default function Header() {

    const getCurrentURL = () => {
        let x = useRouter().route;
        return x;
    }
    const location = getCurrentURL()
    const addToHeader = [["Home", "/"], ["Projects", "/projects"], ["About", "/about"], ["Contact", "/contact"]];
    return (
        <nav id="navbar" className="flex flex-row basis-auto h-20 place-content-center">
            <div id="leftnavbarspace" className="flex-auto basis-1/12 h-full"></div>
            <ul className="flex-auto flex-column flex-nowrap h-full basis-1/6 ">
                <li className="text-5xl leading-[5rem] text-center align-middle h-full">Portfolio</li>
            </ul>
            <ul id="navbarList" className="flex flex-auto basis-10/12 flex-row flex-nowrap h-full text-center align-middle place-content-center">
                {addToHeader.filter(x => x[1] != location).map(x =>
                    <li className="navbarItem flex-auto basis-auto flex-nowarp flex-column h-full w-full" id={x[0] + "NavbarItem"} key={x[0] + "NavbarItem"}>
                        <Link href={x[1]} className="text-5xl leading-[5rem] text-center align-middle h-full">{x[0]}</Link>
                    </li>
                )}
            </ul>
            <div id="navbarblankspace" className="flex-auto basis-1/12 h-full">

            </div>
        </nav>
    )
}