import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Working from "./components/Working"
import Creater from "./components/Creater"
import {BrowserRouter as Router,  Switch, Route} from "react-router-dom"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <Nav/>
      <Switch>
       <Route exact path="/"><Home/></Route>
       <Route path="/working"><Working/></Route>
       <Route path="/creater"><Creater/></Route>
       <Route path="/contact"><Contact/></Route>
      </Switch>
    <Footer/>
    </Router>

  
  );
}

export default App

