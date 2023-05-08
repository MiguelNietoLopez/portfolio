export default function home() {
  return (
    <>
      <div id="homeTitleDiv" className="titleDiv homeDiv">
        <h1 id="homeTitleH" className="homeEl titleH Header">Miguel Nieto Lopez</h1>
        <h2 id="homeTitleSubH" className="homeEl titleSubH subHeader">Portfolio</h2>
      </div>
      <div id="homeAboutDiv" className="homeDiv secDiv">
        <h3 id="homeAboutTitle" className="homeEl Header">About Me</h3>
        <div id="homeAboutCon" className="homeDiv homeCon ContentSec"></div>
      </div>
      <div id="homeSkillsDiv" className="homeDiv secDiv">
        <h3 id="homeSkillsTitle" className="homeEl Header">Skills</h3>
        <div id="homeSkillsCon" className="homeDiv homeCon ContentSec"></div>
      </div>
      <div id="homeProjectsDiv" className="homeDiv secDiv">
        <h3 id="homeProjectsDiv" className="homeEl Header">Projects</h3>
        <div id="homeProjectsCon" className="homeDiv homeCon ContentSec"></div>
      </div>
    </>
  )
}