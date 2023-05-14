export default function HomeGrid(){
        const props = React.useState()
      fetch("./languagesToRender.json").then(res => { 
        return res.json()
      }).then(data => {
        console.log(data);
        this.setState({langLogos: data})
    
      })
      this.logoGridCreate = this.logoGridCreate.bind(this);
        let obj = this.state.langLogos;
        let keys = Object.keys(obj);
        let test = keys.map(key => {
          return (<div id={key + " div"} class="gridContainer">
            <img id={key + " img"} class="logoGridItem" src={obj[key].img} alt={obj[key].desc}></img>
            <div class="hoverOverlay" id={key + " hoverOverlay"}>{obj[key].name}</div>
          </div>);
        });
        return (
          <div id="skillsDiv" class="sectionDiv">
            <h3 id="skillsTitle">I know ...</h3>
            <div id="logoGrid">
              {this.logoGridCreate()}
            </div>
          </div>
        );
     
}