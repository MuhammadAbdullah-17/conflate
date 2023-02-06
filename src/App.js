import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Homepage from "./Homepage";
import NavbarComponent from "./NavbarComponent";
import Services from "./Services";

function App() {
  return (
    <>
    <NavbarComponent/>
    <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/home" component={Homepage}></Route>
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/Services" component={Services}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        <Redirect path="/" />
      </Switch>
    </>
  );
}

export default App;
