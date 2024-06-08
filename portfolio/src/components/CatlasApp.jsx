import React from "react"
import "./Pages.css";
import FigmaEmbed from './FigmaEmbed';
import catlas1 from "../assets/catlas1.png";
import catlas2 from "../assets/catlas2.png";
 
function CatlasApp() {
  return (
    <div className="page">
        <div className="header-image">
            <img src={catlas1} width="90%" alt="Catlas application homepage"/>
        </div>
        <h1><b>Catlas Application</b></h1>

        <h2><b>Background</b></h2>
        <p>
        Take a leisurely walk around your neighborhood and you might find yourself encountering some of the local stray cats. Ever wonder who looks after these feline wanderers? We've pinpointed a devoted group of community heroes: the cat feeders. These compassionate individuals invest their time and effort into caring for these cats. <u>But what challenges do they face in their efforts, and how can we help make their task easier?</u>
        </p>

        <h2><b>Finding the problem</b></h2>
        <p>
        We conducted a preliminary survey targeted at cat feeders and enthusiasts to identify their main problems regarding cat feeding.
        <div className="bulletpoint">
            <ul className="list">
                <li>34% mentioned difficulties in locating cats.</li>
                <li>25% cited not having enough time to clean up the mess.</li>
                <li>18% mentioned the cats not eating the food.</li>
                <li>25% cited not having enough time to clean up the mess.</li>
            </ul>
        </div>
        Out of those who have never fed cats before,
        <div className="bulletpoint">
            <ul className="list">
                <li>26% attributed their hesitancy to not knowing what food to serve the cats with.</li> 
            </ul>
        </div>

        </p>

        <h2><b>Finding the solution</b></h2>
        <h3><i><b>Are there existing solutions?</b></i></h3>
        <p>
            Before the team delved into creating a solution for the feeder's problems, we took a look into the solutions on the market to see what was lacking and how our app could value-add:
            <div className="bulletpoint">
                <ul className="list">
                    <li><b>Semtpati</b>: A Turkish application maintained by Istanbul volunteers and Istanbul Metropolitan Municipality aimed to keep track of registered stray animals and determine their needs, encourage adoption of stray animals, and support the decision-making processes of local governments.</li> 
                    <li><b>OneService</b>: A Singaporean application maintained by Singapore government enables citizens to report municipal issues, like a dead or injured animals, by just sending an image and tagging the location.</li> 
                </ul>
            </div>
            Some of the features of these apps could be adapted in our solution. However, they were still lacking and didn't address the feeding problems that many of our interviewers faced. How can the app help to track which cats have eaten? How can we help feeders coordinate feeding times? These are main issues that we wanted to tackle. 
        </p>
        <h3><i><b>Understanding the current process</b></i></h3>
        <p>
            Before we could create a solution, we needed to understand their process. Through this, we would be able to understand uncover which steps in their process could be improved, and where our solution could slot into the process. For this, we conducted two contextual inquiry interviews. Through the interviews, we aimed to understand two main questions:
            <div className="bulletpoint">
                <ul className="list">
                    <li>How do people go about feeding stray cats?</li>
                    <li>What difficulties do people face when feeding stray cats?</li>
                </ul>
            </div>
            We carried out contextual inquiries with two frequent stray cat feeders. To supplement our research, we also conducted user interviews with our other stray cat feeders. Here are the findings:
            <div className="bulletpoint">
                <ul className="list">
                    <li>We confirmed the challenges highlighted in our preliminary surveys, including the complexities of locating stray cats and concerns related to overfeeding.</li>
                    <li>We observed a divergence of perspectives regarding the financial implications of cat feeding, with some participants expressing it as a significant cost burden while others deemed it manageable. This nuanced understanding underscored the importance of considering individual circumstances and behaviors when designing solutions.</li>
                    <li>Our findings also revealed a discrepancy between the perception of cat feeding as a charitable act and the hostility encountered by feeders in certain situations. This discrepancy highlighted the need for solutions that not only address practical challenges but also navigate social dynamics.</li>
                    <li>Moreover, our interviews uncovered a lack of awareness regarding the legal aspects of feeding stray cats, further emphasizing the importance of education and clarity in our design approach.</li>
                </ul>
            </div>
        </p>

        <h2><b>Designing the solution</b></h2>
        <p>
        Based on our analysis of the data gathered, the following are the key user tasks that the will support:
        <div className="bulletpoint">
            <ul className="list">
                <li>Features to coordinate with local community cat feeders: Cat feeder coordination e.g. create posts to coordinate their feeding sessions, crowdsource donations for cat food, indicate if the cat has been fed for the day and if their water bowls have been refilled</li>
                <li>Features to indicate cat’s preferred and recommended diet: Cat’s diet e.g. create posts to inform other feeders of cat’s food preferences and recommend cheaper and healthier cat food options</li>
                <li>Features to track the approximate location of local community cats: Cat overall well-being e.g. uploading pictures of cats, indicating when they see a certain cat etc., and report if the cats are missing or injured</li>
            </ul>
        </div>
        </p>
        <h2><i><b>Early stages of Catlas</b></i></h2>
        <p>The team had to create <b>individual</b> low-fi prototypes at the beginning, allowing us to fully unleash our creativity. We then selected the best elements from each prototype to develop our final hi-fi prototype.</p>
        <div className="header-image">
            <img src={catlas2} width="90%" alt="Catlas lo-fi prototype"/>
        </div><br></br>
        <h3><b>Testing our solution</b></h3>
        <p>We conducted usability tests with 2 to 3 participants on each of our individual prototypes. Our goal for the test was to review the usability of our app when users perform three key tasks: locating and update cat statuses, donate to crowdsource and reporting cat abuse.<br></br>
        Although each of our individual prototype had it's own unique issues, generally, there were a few common issues that participants complained about:
        <div className="bulletpoint">
            <ul className="list">
                <li>Some elements were not intuitive or recognizable elements, causing user confusion</li>
                <li>Designs of certain pages were jam-packed with information which made users overwhelmed</li>
                <li>Navigating to or around certain features were too complicated</li>
            </ul>
        </div>
        Hence, when creating our hi-fi prototype, we ensured to focus on improving navigation & content presentation to prevent user confusion and information overload. We also made sure to use intuitive and unambiguous icons and buttons to enhance user understanding and interaction.
        </p>
        <h2><i><b>Our final creation, our baby</b></i></h2>
        <p>Not loading? Click this link to view our <u><a href="https://www.figma.com/proto/X835swGWhI2UAFFChnkHM9/11_G2-Hi-Fi-Prototype?node-id=487-57&t=fQLQd7n9H7h3zObG-1">prototype</a></u> on Figma</p>
        <FigmaEmbed />
        <p></p>
        <h2><i><b>Lastly, a quick reflection</b></i></h2>
        <p>I genuinely enjoyed working on this project and was incredibly grateful when our team won a prize 
            for our work. The idea originally came to me during a hackathon, but with only a day to develop 
            the app, the initial version wasn't as refined as it is now. Our team did an excellent job 
            conceptualizing the app, and the final product looks amazing. If I could revisit the app, 
            one change I would make is to introduce the concept of groups, similar to Facebook groups. 
            One thing I realised when spending more time in the feeder community is that some feeders prefer not 
            to make their cat information public to avoid attracting unwanted attention. 
            Implementing groups would allow only sincere and trusted individuals to access sensitive 
            information, enhancing privacy and security for the feeders and their cats. </p>
    </div>
  )
}
 
export default CatlasApp;