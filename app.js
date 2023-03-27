import {LogoGrid} from "LogoGrid.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    }
  render() {
    return (
      <div id="Main">
        <LogoGrid />
      </div>
    );
  }
}

const node = ReactDOM.createRoot(document.getElementById("root"));
node.render(<App/>)