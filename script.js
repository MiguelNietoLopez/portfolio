class App extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       langLogos = {
       }
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
        {}
        <div id="logoGrid">
        </div>
      </div>);
  }
}