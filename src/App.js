import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home'
import Portfolio from './Pages/Portfolio/Portfolio'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
