import React from "react";
import luna1 from './luna1.png';

export default function Resources() {
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
  