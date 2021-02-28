import React from "react"
import "./Pages.css";
import ufa2 from "../assets/ufa2.png";
 
function UniversityFinderApp() {
  return (
    <div className="page">
        <div className="header-image">
            <img src={ufa2} width="90%" alt="University finder mobile application homepage"/>
        </div>
        <h1><b>University Finder Mobile Application</b></h1>

        <h2><b>The problem</b></h2>
        <p>
            For this individual project, I had to create a mobile application based on a statistic from the Government website. Basically, we had to find a statistic from any Government agency that highlighted certain problems that we were facing (i.e. Dengue cases rising, etc.) and create an app that could alleviate or improve the lives of people involved in the statistic. We also had to use the stages in the Design Thinking process to create our mobile application.<br/><br/>
            The statistic I chose was regarding the <a href="https://data.gov.sg/dataset/intake-enrolment-and-graduates-by-institutions">intake and enrolment of students into tertiary educations over the years</a>. I found that more and more students are enrolling in local universities over the years. This was consistent with the Government's plan in 2012 to increase the cohort participation rate to 40% by 2020. However, I soon realized that despite the Government's <b>plan to increase the university participation rate</b>, many prospective university students <b>still do not have a website or app that helps students compare university degrees</b>. For example, prospective students in the UK have websites like UniversityFinder and UCAS to help them compare different university courses. <br/><br/>
            Then, to understand more regarding the troubles of prospective university students when searching for university courses and whether the "issue" indicated was a problem to begin with, I interviewed a 3rd-year polytechnic student, a polytechnic graduate serving National Service, and a full-time working adult seeking to resume his studies. This also begins the "Empathise" phase of the Design Thinking process.
        </p>

        <h2><b>The "Empathise" stage</b></h2>
        <p>
            My user interview set out to understand the troubles of these prospective students when researching for university courses. I also wanted to better understand their background and how their background could have affected some of their troubles. Some of the guiding questions I used for the interview are written below.<br/><br/>
            
            <b>Questions for Getting to know the user</b>
            <div className="bulletpoint">
                <ul className="list">
                    <li>Please tell me about yourself and briefly explain why you are planning to go to university</li>
                    <li>Do you already have any university courses in mind? If yes, why did you consider those university courses?</li>
                </ul>
            </div><ul></ul>

            <b>Questions for Gathering user behaviour</b>
            <div className="bulletpoint">
                <ul className="list">
                    <li>What are the steps that you do when comparing between university courses?</li>
                    <li>What kind of websites do you use when comparing between university courses?</li>
                    <li>Do you have instances where you are not sure whether to consider this university course or another university course?</li>
                    <li>What criteria do you consider when selecting a university course? Is it just course curriculum or do you consider the actual university culture, amenities, etc. also?</li>
                    <li>Tell me your experience when comparing university courses</li>
                </ul>
            </div><ul></ul>

            The interview really gave me a lot of insights into some of the problems that these prospective students encountered which I, myself, did not encounter when conducting my own university research. Here is a summary of the notable responses gathered from the interview:<br/><br/>

            <div class="key-para">
            All of the prospective students, regardless of their background, used the same steps and same websites when conducting their research and comparing the different university courses. For all of them, they relied on university course suggestions from their friends, lecturers, and family members to "narrow" down the number of university courses they had to consider and compare. When comparing the university courses, all of the interviewees relied on the course website itself for information on the particular university course to make a decision. They mentioned that it was <b>tedious to compare the different university courses</b> as each university website had a different layout and some information was just easier to search for in one university website over the other university website. Furthermore, many of them also consulted forums on Reddit or HardwareZone to gather opinions and experiences from others to determine which university course was better. Hence, a typical "session" would end up with them having multiple tabs open as all the information is on various websites and pages.<br/><br/>
            In all, many found their experience comparing between university courses to be very tedious. Furthermore, the part-time degree goer noted that since there was no website that consolidated all the same type of degrees that were available from all the universities in Singapore (regardless of whether it is a private or local university), he <b>almost missed out on a degree from a private university</b> that was suitable for him.
            </div>
        </p>

        <h2><b>The "Define" & "Ideate" phase</b></h2>
        <p>
            From the insights gathered, I embarked on the "Define" phase. I analyzed the problems that were affecting the interviewees and crafting POVs (Point of View) and subsequently, How Might We (HMW) questions. The POVs and HMW questions would help me ensure that I do not stray from answering the user's needs when brainstorming for ideas in the "Ideation" phase. The POV I thought of was "A prospective university student needs to be able to compare between different university courses without having to open multiple tabs and webpages because it is very tedious and they might lose track of what information they found on which webpage." Then, some of the HMW questions I've thought of was:<br/><br/>
            <div className="bulletpoint">
                <ul className="list">
                    <li>How might we consolidate all important information needed when comparing between various university courses?</li>
                    <li>How might we make it easier for prospective university students to find all opinions or experiences regarding a university course online?</li>
                    <li>How might we present other possible university courses, that they might not have known existed, to prospective students?</li>
                </ul>
            </div><ul></ul>
            With these questions in mind, I finally brainstormed some features for the mobile app. The features include: comparing two university courses based on a set of criteria and revealing the best out of the two, revealing which university course faired better in which criteria, choosing the criteria in which the universities will be compared against, consolidating all relevant information regarding the university course, and recommending other relevant university courses based on the university courses that the user has chosen. 
        </p>

        <h2><b>The "Prototype" phase</b></h2>
        <p>
            After that, embarked on the "Prototype" phase to create my low-fi prototype.<br/><br/>
            <div className="images">
                <img src="" alt=""/>
            </div>
        </p>

        <h2><b>The "Test" phase</b></h2>
        <p>
            After creating a functional low-fi prototype on Moqups, I conducted a usability test with the same set of interviewees I had in the previous user interview. For the interview, I wanted to understand whether the app was easy to use (i.e. was the interface understandable, did the steps make sense, etc.) and whether they are able to decide which university course was best for them after having used the app. Hence, the task scenario and task for the users were:<br/><br/>
            <div class="key-para">
            You are a polytechnic student studying Computer Engineering and you are about to graduate in a few months. You have not decided on a specific degree course yet but you do know that you intend to continue studying the same subject in university. Your internship supervisor has advised you to enter NUS Computer Engineering since the course is more established and fresh graduates' pay and employability are the highest. However, your lecturer advised you to enter SUTD Computer Engineering instead as he heard that the pay and employability of SUTD graduates' are the highest. Due to the conflicting information, you're extremely confused. Your task is to use the app to compare a few degree courses that you already have in mind and make a decision.</div><br/>
            I also instructed the users to talk aloud when using the app, so that I am able to understand the thought process of the users. After the usability test, I asked the users some questions about their experience using the app, was there anything in the app that they found confusing when trying to complete the task, and was there anything in the app that they liked.
        </p>

        <h2><b>The "Ideate" & "Prototype" phase (again)</b></h2>
        <p>
            Then, from the usability test, I gathered that: 
            <div className="bulletpoint">
                <ul className="list">
                    <li>How might we consolidate all important information needed when comparing between various university courses?</li>
                    <li>How might we make it easier for prospective university students to find all opinions or experiences regarding a university course online?</li>
                    <li>How might we present other possible university courses, that they might not have known existed, to prospective students?</li>
                </ul>
            </div><ul></ul> 
            Hence, I have included the suggestions in the mid-fi prototype.
        </p>


        <h2><b>The "Test" phase (again)</b></h2>
        <p>
            After constructing the mid-fi prototype, I was instructed by the teaching team to conduct a heuristic evaluation. Heuristic evaluations help to identify usability problems in user interfaces by comparing them with widely accepted usability principles. The best practice is to use established heuristics like Nielsen’s 10 general principles for interaction design and Schneiderman’s 8 golden rules of interface design while combining them with other relevant design guidelines and market research. However, as my app is meant to be a web app and not a native Android or iPhone app, I was unable to apply any of Android or iOS design guidelines to my current user interface. Hence, I employed Nielsen’s and Schneiderman’s heuristics to evaluate my current user interface.<br/><br/>
            
            From Nielsen's heuristic, I found that:
            <div className="bulletpoint">
                <ul className="list">
                    <li>How might we consolidate all important information needed when comparing between various university courses?</li>
                    <li>How might we make it easier for prospective university students to find all opinions or experiences regarding a university course online?</li>
                    <li>How might we present other possible university courses, that they might not have known existed, to prospective students?</li>
                </ul>
            </div><ul></ul> 
            As for Schneiderman's heuristic:
            <div className="bulletpoint">
                <ul className="list">
                    <li>How might we consolidate all important information needed when comparing between various university courses?</li>
                    <li>How might we make it easier for prospective university students to find all opinions or experiences regarding a university course online?</li>
                    <li>How might we present other possible university courses, that they might not have known existed, to prospective students?</li>
                </ul>
            </div><ul></ul>
            Then, based on the heuristic evaluation, I created my final product.
        </p>

        <h2><b>The final product</b></h2>
        <p>
            <div className="images">
                <img src="" alt=""/>
            </div>
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
 
export default UniversityFinderApp;