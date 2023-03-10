
class App extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       langLogos : {
        "javascript": 
        {
            "name": "Javascript",
            "img": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            "desc": "Javascript Logo" 
        },
        "html":
        {
            "name": "HTML",
            "img": "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
            "desc": "HTML Logo"
        },
        "css":
        {
            "name": "CSS",
            "img": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
            "desc": "CSS Logo"
        },
        "bootstrap":
        {
            "name": "Bootstrap",
            "img": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
            "desc":"Bootstrap logo"
        },
        "jquery":
        {
            "name": "JQuery",
            "img": "https://upload.wikimedia.org/wikipedia/en/9/9e/JQuery_logo.svg",
            "desc": "JQuery logo"
        },
        "redux":
        {
            "name": "Redux",
            "img": "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
            "desc": "Redux logo"
        },
        "react":
        {
            "name": "React",
            "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
            "desc": "React Logo"
        },
        "node":
        {
            "name": "NodeJS",
            "img":"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
            "desc": "NodeJS Logo"
        },
        "babel":
        {
            "name": "Babel",
            "img":"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
            "desc": "Babel Logo"
        },
        "webpack":
        {
            "name": "Webpack",
            "img": "https://raw.githubusercontent.com/webpack/media/3e52c178e6ad2428585a2cbf5d22d6dbe0697f0f/logo/logo-on-white-bg.svg",
            "desc": "Webpack Logo"
        },
        "sql":
        {
            "name": "SQL",
            "img": "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
            "desc": "SQL Logo"
        },
        "mongodb":
        {
            "name": "MongoDB",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
            "desc": "MongoDB Logo"
        },
        "Mongoose":
        {
            "name": "Mongoose",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXU7OThk_FsW2_Jtca19h1wUYqgq50zlnTlDxN7TJ4xf9b54jhqrxE2NmQaPhqlo00BAE&usqp=CAU",
            "desc": "Mongoose Logo"
        }
    },
      }
   }
  logoGridItem(index){
    let id = Object.keys(this.state.langLogos)[index] + "logoGridItem";
    return(
      <img class="logoGridItem" id={id} src={Object.values(this.state.langLogos)[index]}>
      </img>
    )
  }
   logoGrid(){
    for (i = 0; i < langLogos.length(); i++)
      {
  
      }
  }
  render(){
    return(
      <div id="appMain">
        {console.writeLine(langLogos)}
        <div id="logoGrid">
        </div>
      </div>);
  }
}