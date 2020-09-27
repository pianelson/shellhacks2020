import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import luna from './luna.png';
import luna1 from './luna1.png';
import Footer from './footer.js';


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

function About() {
  return (
    <div className="about">
    <div class="container">
      <div class="row align-items-center my-5">
      <div class="col-lg-7">
    <h1 class="font-weight-light"
        flex ="justify-center"> About Luna</h1>
    <p>
     Gen Z is said to have more diagnosed cases of anxiety and depression than any other generation, in part
     due to higher levels of media consumption. In turn, a lot of people will post about their struggles with
     their mental health on social media platforms, often without any interaction from their peers. 
     </p> <p>
     Luna is a virtual companion who gives those in need a place to vent. With responses curated to address reoccuring themes identified 
     in social media posts, Luna gives high level feedback and feels like you're talking to a real friend.
     </p>
  
  </div>
            <div class="col-lg-7">
            <button className="btn btn-default"
              style={{margin: '10px 10px 10px 0', 
                      backgroundColor:"#C9C9EE",
                      textDecorationColor :"#C9C9EE"}}>
                     <Link style={{backgroundColor:"#0000"}}
                     to="/chat">Chat with Luna</Link> </button>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src = {luna1}
              alt="woman sitting on the moon"
            />
          </div>
  
  </div></div></div>);
}
function Chat()
{
  return     <h1 class="font-weight-light"
  flex ="justify-center"> Chat with Luna </h1>;
}
function Resources() {
  return (  <div className="resources">
  <div class="container">
    <div class="column align-items-center justify-center my-6">
    <div class="">
  <h1 class="font-weight-light">Helpful Resources</h1>
  <p/>
  <div class ="row">
            <img 
              class="col-lg-6 img-fluid rounded mb-4 mb-lg-0"
              src = {luna1}
              alt="hands"
              sizes= "20vw"
            />
              <img 
              class="col-lg-6 img-fluid rounded mb-4 mb-lg-0"
              src = {luna1}
              alt="hands"
              sizes= "20vw"
            />
          </div>
  <div class= "card shadow rounded mb-4 border-1 p-4 h-100">
   <h5>National Suicide Prevention Lifeline</h5>
   <p> Call 1-800-273-Talk (1-800-273-8255) or go to https://suicidepreventionlifeline.org/</p>
   <p/> </div>  <div class= "card shadow rounded mb-4 border-1 p-4 h-100">
   <h5>Crisis Text Line</h5>
   <p>Text "Hello" to 741741</p>
   <p/></div>  <div class= "card shadow rounded mb-4 border-1 p-4 h-100">
   <h5>YouthLine</h5>
   <p> Text "teen2teen" to 839863, or call 1-877-968-8491 </p>
   <p/></div>  <div class= "card shadow rounded mb-4 border-1 p-4 h-100">
   <h5>Childhelp National Child Abuse Hotline</h5>
   <p> Call 1-800-422-4453 </p>
   <p/></div>  <div class= "card shadow rounded mb-4 border-1 p-4 h-100">
   <h5>National Domestic Violence Hotline</h5>
   <p> Call 1-800-799-7233 </p>
   <p/></div> <div class= "card shadow rounded mb-4 border-1 p-4 h-100">
   <h5>RAINN's (Rape, Abuse & Incest National Network) </h5>
   <p> Call 1-800-656-4673 </p>
   <p/></div>
</div>
</div></div></div>);
}

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">

          <div class="col-lg-7">
            <h1 class="font-weight-light">Welcome</h1>
            <p> <h5 class="font-weight-light">
                Having a hard time processing what you're feeling? Luna is here to help.
                </h5>
            </p>

             <button className="btn btn-default"
              style={{margin: '10px 10px 10px 0', 
                      backgroundColor:"#0000",
                      textEmphasisColor :"#C9C9EE"}}>
                     <Link to="/about"> Why Luna ?</Link> </button>

                     <button className="btn btn-default"
              style={{margin: '10px 10px 10px 0', 
                      backgroundColor:"#C9C9EE",
                      textDecorationColor :"#C9C9EE"}}>
                     <Link to="/chat">Chat with Luna</Link> </button>

          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src = {luna}
              alt="woman sitting on the moon"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
