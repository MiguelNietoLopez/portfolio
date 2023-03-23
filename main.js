export class mainBody extends React.Component{
  constructor(props)
  {
    super(props);
  }
  render(){
      return(
      <div id="mainBody">
        <h1 id="nameTitle">Miguel Nieto Lopez</h1>
        <h2 id="nameSubtitle">Web Developer</h2>
        <div id="aboutSection" class="sectionDiv">
          <h3 id="aboutMeTitle" class="sectionTitle">About Me</h3>
          <p id="aboutMePara" class="sectionParagraph">I am a self taught web developer with experience with Javascript, HTML, CSS, and many javascript web development libraries</p>
        </div>
      </div>
    );
  }
}