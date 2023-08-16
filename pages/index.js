import Image from "next/image";
const largeCarMainPage = require("../public/largecarmainpage.jpg");
export default function home() {
  return (
    <div id="homeMain" className="">
      <div id="catImageDiv" className="bg-[url('../public/largecarmainpage.jpg')] bg-center bg-no-repeat m-0 p-0 bg-cover w-full h-96">
      </div>
      <div id="homeTitleDiv" className="TitleDiv HomeDiv text-center mt-10 mb-3 font-serif ">
        <h1 id="homeTitleH" className="HomeEl TitleH Header text-8xl">First Name Last Name</h1>
        <h2 id="homeTitleSubH" className="HomeEl TitleSubH subHeader text-3xl mt-3">MERN fullstack developer</h2>
      </div>
      <div id="homeDescDiv" className="HomeDiv">
        <p id="homeDescPara" className="HomeEl text-center italic text-lg mb-10">
          Motivated and Hard Working Individual who is Always Looking to Improve My Skills and Learn New Technologies
        </p>
      </div>
      <div id="homeSkillsDiv" className="HomeDiv ml-5">
        <div id="homeSkillsLayer1" className="HomeEl HomeSkillsLayers">
          <div id="homeSkillsLayerItemJavascript" className="HomeEl HomeSkillsLayerItems">Javascript</div>
          <div id="homeSkillsLayerDotA" className="HomeEl HomeSkillsLayerDots"></div>
          <div id="homeSkillsLayerItemHTML" className="HomeEl HomeSkillsLayerItems">HTML</div>
          <div id="homeSkillsLayerDotA" className="HomeEl HomeSkillsLayerDots"></div>
          <div id="homeSkillsLayerItemCSS" className="HomeEl HomeSkillsLayerItems">CSS</div>
        </div>
        <div id="homeSkillsLayer2" className="HomeEl HomeSkillsLayers">
          <div id="homeSkillsLayerItemMongoDB" className="HomeEl HomeSkillsLayerItems">MongoDB</div>
          <div id="homeSkillsLayerDotA" className="HomeEl HomeSkillsLayerDots"></div>
          <div id="homeSkillsLayerItemExpressJS" className="HomeEl HomeSkillsLayerItems">ExpressJS</div>
          <div id="homeSkillsLayerDotA" className="HomeEl HomeSkillsLayerDots"></div>
          <div id="homeSkillsLayerItemReactJS" className="HomeEl HomeSkillsLayerItems">ReactJS</div>
          <div id="homeSkillsLayerDotA" className="HomeEl HomeSkillsLayerDots"></div>
          <div id="homeSkillsLayerItemNodeJS" className="HomeEl HomeSkillsLayerItems">NodeJS</div>
        </div>
        <div id="homeSkillsLayer3" className="HomeEl HomeSkillsLayers">
          <div id="homeSkillsLayerItemNextJS" className="HomeEl HomeSkillsLayerItems">NextJS</div>
          <div id="homeSkillsLayerDotA" className="HomeEl HomeSkillsLayerDots"></div>
          <div id="homeSkillsLayerItemSWR" className="HomeEl HomeSkillsLayerItems">SWR</div>
          <div id="homeSkillsLayerDotA" className="HomeEl HomeSkillsLayerDots"></div>
          <div id="homeSkillsLayerItemBootstrap" className="HomeEl HomeSkillsLayerItems">Bootstrap</div>
          <div id="homeSkillsLayerDotA" className="HomeEl HomeSkillsLayerDots"></div>
          <div id="homeSkillsLayerItemCSharp" className="HomeEl HomeSkillsLayerItems">C#</div>
          <div id="homeSkillsLayerDotA" className="HomeEl HomeSkillsLayerDots"></div>
          <div id="homeSkillsLayerItemASPNET" className="HomeEl HomeSkillsLayerItems">ASP.NET</div>
          <div id="homeSkillsLayerDotA" className="HomeEl HomeSkillsLayerDots"></div>
          <div id="homeSkillsLayerItemNETCORE" className="HomeEl HomeSkillsLayerItems">.NET CORE</div>
        </div>
      </div>
    </div>

  )
}