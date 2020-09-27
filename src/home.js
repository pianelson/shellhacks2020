import React from "react";
import { Link } from "react-router-dom";
import luna from './luna.png';
import Footer from './footer.js';

export default function Home() {
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