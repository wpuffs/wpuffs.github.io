import React from "react"
import "./About.css";
 
function About() {
  return (
    <div className="page">
      <div className="header">More about Nadia</div>
      <p>
      Hi there! Thanks for stopping by my page. I'm a Computer Science graduate from the National 
      University of Singapore. For over a year, I've been working as a business analyst in a bank, 
      but now I'm taking a leap of faith to pursue a career I've always dreamt of: User Experience (UX).<br></br><br></br>

      My inspiration for joining the UX field ignited during my first UX talk. We met a UX professional 
      from ThoughtWorks who shared her project of designing a health booklet for illiterate mothers. 
      She had to brainstorm extensively to create illustrations and content that these mothers could 
      understand, helping them track their babies' progress and vaccination schedules. This project 
      deeply inspired me to use design, psychology, and technology to help people.<br></br><br></br>

      Besides UX, I’ve always had a passion for design. When I was younger, I used Photoshop and 
      Illustrator to create designs on Tumblr. In polytechnic, I took on "commissions" from friends 
      to design their websites. During university, I was part of two publicity committees in my 
      residential college, where I designed the yearbook, posters, and even created interactive 
      displays in the college's lifts.<br></br><br></br>

      In my leisure time, you can often find me playing Animal Crossing (yes, I know the hype has 
      died down) and Stardew Valley on my Nintendo Switch. I'm also fond of embarking on new 
      "artistic" endeavours — my latest hobbies are embroidery and air-dry clay. <br></br><br></br>
      Currently, I'm looking for new full-time UX opportunities.<br></br>
        <div id="note">
          <i>P.S.: I built this website myself with my very limited React development skills; do let me know if you see any funky bugs.</i>
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