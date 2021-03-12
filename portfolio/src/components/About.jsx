import React from "react"
import "./About.css";
 
function About() {
  return (
    <div className="page">
      <div className="header">More about Nadia</div>
      <p>
        Hi there! Thanks for stopping by my page. I'm currently a Computer Science undergraduate from 
        the National University of Singapore. My undergraduate journey will be ending really soon and 
        I'm very excited to begin my career as a UX Designer. I love cracking my brain to solve challenging
        user problems; my passion for this UX stems from my desire to reconcile my interest for human
        psychology and my field of study.

        In my leisure time, you can often find me playing Animal Crossing (yes, I know the hype has 
        died down) and Stardew Valley on my Nintendo Switch. I'm also fond of embarking on new "artistic" 
        endeavours — my latest hobbies are embroidery and air-dry clay.

        Currently, I'm looking for new internship opportunities.<br></br>
        <div id="note">
          <i>P.S.: I built this website myself with my very limited React development skills; do let me know if you see any funky bugs. I could've used a portfolio maker but most of the platforms are paid or only catered towards photography portfolios :(</i>
        </div>
      </p>
      <div className="navi">
        <p>Find me here:</p>
        <ul><a href="mailto:nad.atiqah@gmail.com">E-mail</a></ul>
        <ul><a href="https://github.com/walnads">Github</a></ul>
        <ul><a href="https://www.behance.net/s101585956439">Behance</a></ul>
        <ul><a href="https://www.linkedin.com/in/nadia-atiqah/">LinkedIn</a></ul>
      </div>
    </div>
  )
}
 
export default About;