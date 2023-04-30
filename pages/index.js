export default function home() {
  return (
    <>
      <div id="homeTitleDiv" class="titleDiv homeDiv">
        <h1 id="homeTitleH" class="homeEl titleH Header">Miguel Nieto Lopez</h1>
        <h2 id="homeTitleSubH" class="homeEl titleSubH subHeader">Portfolio</h2>
      </div>
      <div id="homeAboutDiv" class="homeDiv secDiv">
        <h3 id="homeAboutTitle" class="homeEl Header">About Me</h3>
        <div id="homeAboutCon" class="homeDiv homeCon ContentSec"></div>
      </div>
      <div id="homeSkillsDiv" class="homeDiv secDiv">
        <h3 id="homeSkillsTitle" class="homeEl Header">Skills</h3>
        <div id="homeSkillsCon" class="homeDiv homeCon ContentSec"></div>
      </div>
      <div id="homeProjectsDiv" class="homeDiv secDiv">
        <h3 id="homeProjectsDiv" class="homeEl Header">Projects</h3>
        <div id="homeProjectsCon" class="homeDiv homeCon ContentSec"></div>
      </div>
    </>
  )
}