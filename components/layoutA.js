import Header from "./header"
import Footer from "./footer"
export default function LayoutA({children})
{
    return(
        <>
        <Header></Header>
        <h1>test</h1>
        {children}
        <Footer></Footer>
        </>
    )
}