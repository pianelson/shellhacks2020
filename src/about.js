import React from "react";
import {Link} from "react-router-dom";
import luna1 from './luna1.png';

export default function About() {
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