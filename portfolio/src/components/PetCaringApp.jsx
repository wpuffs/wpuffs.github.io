import React from "react"
import "./Pages.css";
import pca1 from "../assets/pca1.png";
import pca2 from "../assets/pca2.png";
import pca3 from "../assets/pca3.png";
import pca4 from "../assets/pca4.png";
import pca5 from "../assets/pca5.png";
import pca6 from "../assets/pca6.png";
 
function PetCaringApp() {
  return (
    <div className="page">
        <div className="header-image">
            <img src={pca1} width="90%" alt="Pet caring application homepage"/>
        </div>
        <h1><b>Pet Caring Application</b></h1>

        <h2><b>Background</b></h2>
        <p>
            My group and I were tasked with creating a pet caretaking web application for our database module. 
            Although the main focus was on how we implemented the database and managed the data for our website, 
            significant points were also given to how the website looked. We were given a set of requirements 
            that our website had to fulfill, which were:<br/>
            <div className="bulletpoint">
                <ul className="list">
                    <li>users can sign up to be a pet owner and/or a pet caretaker</li>
                    <li>pet owners can indicate the number of pets they have, and the details of their pets 
                        (i.e. type of pet, pet name, and special requirements)</li>
                    <li>pet owners can search for pet caretakers and see their reviews and ratings</li>
                    <li>pet owners can bid for the service of a pet caretaker</li>
                    <li>pet caretakers can indicate their availabilities, rates, and the types of pets 
                        that are able to take care of from a specified list</li>
                    <li>pet caretakers can view and accept bids from pet owners, and apply for leave</li>
                    <li>website administrators can verify caretakers, approve caretakers' leaves, and add new pet categories</li>
                </ul>
            </div>
            There was a lot that needed to be done for the development of the website and the project report, hence, 
            we had to split the work. I was tasked to do the report, prototype of the user interface, and the 
            front-end development of the various webpages.
        </p>

        <h2><b>Initial prototype creation</b></h2>
        <p>
            Since our professor placed more emphasis on whether our website worked rather than the user experience 
            of the website, I quickly created a simple prototype of the website so that the group could quickly 
            start on development. The prototype was created on Adobe XD. I decided on varying shades of orange for 
            the colour scheme. Orange matches our web application as the group felt that the website should 
            be playful and inviting so as to encourage more users to the website.<br/><br/>

            <div className="image-grid">
                <img src={pca1} width="90%" alt=""/>
                <img src={pca2} width="90%" alt=""/>
                <img src={pca3} width="90%" alt=""/>
                <img src={pca4} width="90%" alt=""/>
                <img src={pca5} width="90%" alt=""/>
                <img src={pca6} width="90%" alt=""/>
            </div>
        </p>

        <h2><b>Developing the front-end interface</b></h2>
        <p>
            The group decided to build our web application using Angular, as those who were familiar with any 
            frameworks were most familiar with Angular. As we only had a few weeks to finish the application and the report, 
            our team split into two teams: front-end team and the back-end team. I was part of the front-end team, and there were two of us. 
            Initially, I was just responsible for styling the website -- my team mate would create a HTML file with all 
            the necessary Angular components needed for data handling, and I would just style the components to match 
            the prototype. However, my team mate was slowly became overwhelmed with his academic work and I had to quickly
            pick up Angular to assist him.<br/><br/>
            This was quite challenging as I was already struggling with styling the HTML that were already given to me 
            as my team mate made use of Angular Material components instead of native HTML components (i.e. tables, cards, forms, 
            etc.). Styling the Angular Material components was quite a struggle for me as I was confused on how to override the original 
            styles of the components. Angular Material's Select component, in particular, was incredibly confusing for me as I struggled 
            with removing the label in the form field and subsequently, resizing the height of the component. However, after reading through 
            multiple Stack Overflow posts on customising components and doing some trial and error on my end, I was able to find fixes for all 
            of my styling problems. Other than that, I also faced some difficulties when I had to take on some of my team mate's responsibilities 
            and create the HTML files with the Angular components. One of the biggest issue I faced was with data handling. My other team mate, 
            that was part of the back-end team, was responsible for creating the API that interacted with our database. We had to make use of 
            the API to get and submit data to the database. Although it was confusing at first, after re-reading the documentation, going through
            some Angular data handling tutorials, and referring to existing code, I managed to pull-through.<br/>
        </p>

        <h2><b>Quick reflection</b></h2>
        <p>
            This project was quite fun for me as I finally dabbled in front-end development, something that I was not really interested in 
            pursuing as I preferred back-end development. My supervisor in my previous internship always nagged at me to start learning
            front-end development as he said it was a good skill to have as an UI/UX designer. However, I was always reluctant as I felt that
            HTML/CSS was incredibly confusing. Unlike coding, you never really know what is wrong with the website as there is no
            error codes to guide you, all you know is that your website looks janky and you do not really know where to start to fix. However,
            I quickly learnt that HTML/CSS is pretty much like any other language I have learnt -- there ARE rules to it and once you are 
            familiar with the rules, trying to fix your weird-looking website does not really seem like shooting in the dark anymore.
        </p>
    </div>
  )
}
 
export default PetCaringApp;