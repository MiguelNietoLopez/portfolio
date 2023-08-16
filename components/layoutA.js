import Header from "./header"
import Footer from "./footer"
import '../styles/globals.css'
export default function LayoutA({children})
{
    return(
        <main className="flex flex-auto flex-col flex-nowrap">
        <Header></Header>
        {children}
        <Footer></Footer>
        </main>
    )
}