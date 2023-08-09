import Image from 'next/image';
export default function Projects() {
    const makeProjectDiv = () => { 

    }
    return (
        <>
            <div id="projectsTitleDiv">
                <h1 id="projectsH1">Projects</h1>
                <h2 id="projectsH2">Projects created by Firstname Lastname</h2>
            </div>
            <div id="projectsProjectsDiv">
                <div id="catCorpLLCProjectDiv" className='ProjectDiv'>
                    <div id="catCorpLLCProjectDivTitle">
                        <h3 id="catCorpLLCProjectTitle">Cat Corp LLC</h3>
                        <h4 id="catCorpLLCProjectSubtitle">Ficticious software company ran by cats</h4>
                    </div>
                    <div id="catCorpLLCProjectDivBody">
                        <h5 id="catCorpLLCProjectDivBodyAboutTitle">About Project</h5>
                        <p id="catCorpLLCProjectDivBodyAboutP">CatCorp LLC is a website made with ExpressJS, ReactJS, NodeJS, Javascript, CSS, and HTML. It is made of a ExpressJS backend serving the files. I used Babel for JSX support among other features. I used webpack to pack the production model.</p>
                    </div>
                    <iframe src='https://catcorpllc-serverless.vercel.app/' title="CatCorp LLC Website" allowFullScreen={false} name="catcorpllciframe" id="catcorpllciframeid"></iframe>
                </div>
            </div>
        </>
    )
}