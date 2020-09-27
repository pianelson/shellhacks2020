import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home.js';
import About from './about.js';
import Resources from'./resources.js';
import Chat from './chat.js';

export default function App() {
  return (
    <Router>
      <div>
      <header>
      <nav class="navbar navbar-light bg-light">
   <Link to="/chat" class="mb-0 h1">Luna</Link>
   <nav className="">
   <button className="btn btn-default"
              style={{margin: '10px 10px 10px 0'}}>
                     <Link style={{backgroundColor:"#0000"}}
                     to="/home">Home</Link> </button>
    <button className="btn btn-default"
              style={{margin: '10px 10px 10px 0'}}>
                     <Link style={{backgroundColor:"#0000"}}
                     to="/about">About</Link> </button>
                        <button className="btn btn-default"
              style={{margin: '10px 10px 10px 0'}}>
                     <Link style={{backgroundColor:"#0000"}}
                     to="/resources">Resources</Link> </button>
              <button className="btn btn-default"
              style={{margin: '10px 10px 10px 0', 
                      backgroundColor:"#C9C9EE",
                      textDecorationColor :"#C9C9EE"}}>
                     <Link style={{backgroundColor:"#0000"}}
                     to="/chat">Chat with Luna</Link> </button>
    </nav>
</nav>

      
      </header>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/chat">
            <Chat/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
