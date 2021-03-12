import React from "react"
import "./Pages.css";
import survey1 from "../assets/survey1.png";
import survey9 from "../assets/survey9.png";

function RedesignGVWebsite() {
  return (
    <div className="page">
        <div className="header-image">
            <img src={survey9} width="90%" alt="Redesigning Golden Village's purchasing user flow"/>
        </div>
        <h1><b>Redesigning Golden Village's Website</b></h1>

        <h2><b>Background</b></h2>
        <p>
            For this group project, we had to redesign the user interface of an existing website to improve the general user experience of a specific task in the website. Unlike all the other UX projects in my portfolio, this one is more unique as it focused more on collecting and analysing quantitative data rather than qualitative data. Hence, we had to use a Qualtrics survey and create a prototype website to collect information, and subsequently perform statistical analysis on the data.
        </p>   

        <h2><b>The problem</b></h2>
        <p>
            My group and I settled on redesigning and improving Golden Village's website. In particular, the user flow when the user's goal is to purchase movie tickets using the "Quick Buy" function. We settled on this website as we felt that improving the website could affect a significant number of people. Golden Village is one of the most popular movie theatres in Singapore. Furthermore, there are only a few ways in which you can purchase their movie tickets online, and the most common way is through their website. When you Google "Golden village movie tickets", the Golden Village website is one of the first few results. Moreover, even if the user tries to purchase tickets from third party websites or apps like Popcorn, the website or app will still redirect the user to the Golden Village website.<br/><br/>
            There were a many issues that we found with the movie ticket purchasing user flow that could be improved on, however, we were encouraged to only focus one or two issues due to the fact that we only had 3 members in our team (we were supposed ot have five). Hence, our team decided to focus one main problem: <b>unoptimized layout leading to unnecessary cursor movement</b> selecting options for the movie.
        </p>

        <h2><b>Our proposed solution</b></h2>
        <p>
            The current implementation makes use of long dropdown menus for uses to select the options for the movie (i.e. movie title, movie theatre, and move timings). However, long dropdown menus are  inefficient based on Hick’s Law. Furthermore, the fact that the options of the dropdown menus are in an arbitrary order, makes scanning the input more tedious for the user. For our proposed solution, we decided to improve on the long dropdown menu by changing the order of the options and also introducing keyboard input. This would make scanning easier & accessible for visually-impaired users. Although these ideas are not novel, we believe that the novelty of our solution bears little bearing on the actual usability. Furthermore, we are interested to find out whether our proposed solution does make a difference.
        </p>

        <h2><b>Our experiment design</b></h2>
        <p>
            <h3>The research question</h3>
            Is the new proposed auto-complete search implementation better than the existing drop-down search implementation in reducing task timing and increasing ease-of-use for booking two movie tickets from Golden Village’s website?
            <br/><br/>
            <h3>The experiment variables</h3>
            Now that we have our research question, we have to determine the independent and dependent variables for our experiment. In our draft experiment design, we thought of the dependent variables: user-friendliness, speed, optimization, and attention. However, we had to replace optimization and attention as it would require complex software such as eye-tracking. Our independent variables, however, stayed the same. In the end, we had the following variables as our independent and dependent variables:<br/>
            <div className="bulletpoint">
                <ul className="list">
                    <li>Independent variables: Cinema search bar, movie chosen (that is, index of the movie on the list), ticket type chosen (same concept as movie chosen)</li>
                    <li>Dependent variables: User-friendliness, speed, and cognitive load</li>
                </ul>
            </div><ul></ul> 
            For every independent variable, we have two levels. For cinema search bar, we have autocomplete vs. dropdown. Next, for movie chosen, we have a movie whose name comes first alphabetically vs. a movie whose name comes last alphabetically. Thus, we have "21 Bridges" vs. "Unhinged" for "movie chosen". As ticket type chosen follows the same logic as movie chosen, we have "Partner Rewards" vs. "Standard Price".<br/><br/>
            We will be measuring user-friendliness and cognitive load using a set of established questionnaires that has been proven to work, which is, System Usability Scale (SUS) and Single Ease Question (SEQ). As for speed, we have used Qualtric's timing feature to take note of how slow or fast the user finishes the question. Initially, we were supposed to implement logging.js on our prototype website to take note of the user's time taken. However, we were unable to do so. Hence, I suggested the idea of using Qualtric's timing feature and implemented it.<br/><br/>
      
            <h3>The counterbalancing strategy & arrangement conditions</h3>
            Next, we had to decide the counterbalancing strategy and the arrange factorial conditions for our independent variables (IV). For the IVs "Cinema search bar" and "Movie chosen", we have decided on within-subjects and a full counterbalancing strategy as within-subjects can minimize the random noise caused by differences in subjects. Furthermore, since we only have 2 levels for each IV, full conterbalancing would have the same number of arrangements as partial counterbalancing. As for the IV "Ticket type chosen", we have chosen between-subjects instead of within-subjects as we had to take into account the increased cost of experiment and fatigue for the participants. Then, we have the following arrange factorial conditions:<br/><br/>
            <table>
            <tr>
                <th>No.</th>
                <th>Cinema search bar</th>
                <th>Movie chosen</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Autocomplete</td>
                <td>21 Bridges</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Autocomplete</td>
                <td>Unhinged</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Dropdown</td>
                <td>21 Bridges</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Dropdown</td>
                <td>Unhinged</td>
            </tr>
            </table><br/>
            Hence, each participant would be exposed to four different combinations during the experiment; the arrangement of each combination, however, would differ for each participant. Lastly, our group had to determine the trial tasks for the participants. Our trial task is relatively simple and straightforward, the participants has to purchase two movie tickets with specific movie and timing information we would give. 
        </p>

        <h2><b>Our survey questions</b></h2>
        <p>
            We used Qualtrics to for our survey questionnaire. Based on our arrangement sequences and our Keystroke-Level Model (KLM) of our trial task, each participant would take approximately 25 minutes for our survey (including breaks and lag time). The survey is divided into 8 sections: introductory blurb, consent form, training tutorial, screening questions, UX trial questions, post-questionnaire, and conclusion blurb. If you're interested, you can try out our full survey  <a style={{textDecoration: 'underline'}} href="https://nus.syd1.qualtrics.com/jfe/form/SV_dbWcUGT3nB3hNwF">here</a>.<br/><br/>

            <div className="images">
                <img src={survey1} width="100%" alt=""/>
            </div>
        </p>

        <h2><b>Our results analysis</b></h2>
        <p>
        <h3>The analysis goals</h3>
        We had two main questions we wanted answers to from our analysis:
        <div className="bulletpoint">
            <ul className="list">
                <li>Is the time taken to book a movie longer using the drop-down search method than the  auto-complete search method?</li>
                <li>Is the drop-down search method easier to use than the auto-complete search method?</li>
            </ul>
        </div><ul></ul>

        <h3>The preparation & preprocessing of data</h3>
        Firstly, sensitive or private information about the participant such as IP address and name were removed from the raw survey data. Next, irrelevant columns that were generated by Qualtrics, like survey start date, were removed as well. After all the irrelevant and sensitive information were removed, the SUS scores, SEQ scores, and time taken had to be calculated for each participant arrangement. In particular, SUS scores had to be calculated based on the following method:
        <div className="bulletpoint">
            <ul className="list">
                <li>For each of the odd numbered questions, subtract 1 from the score.</li>
                <li>For each of the even numbered questions, subtract their value from 5.</li>
                <li>Take these new values which you have found, and add up the total score. Then multiply this by 2.5.</li>
            </ul>
        </div><ul></ul>
        As for the time taken per trial had to be calculated based on the following formula: Page Submit - First Click. Since there were 3 trial tasks per participant arrangement, we had to take the average time taken for each participant arrangement. Lastly, the SUS scores, SEQ scores, and time taken were then arranged into a long data table whilst the pre-questionnaire and post-questionnaire answers were arranged into a wide data table.
        <br/><br/>

        <h3>The preliminary analysis</h3>
        Firstly, we analysed the speed. To analyse speed, we had to perform a logarithmic transformation on the Time Taken data to as the data is very skewed and has a histogram that is not symmetric. We had to do this as the subsequent statistical analysis methods require data to first be more normal in distribution (so as to detect outliers more easily, stabilize variance, and check for normality of the errors). After doing so, we found out that the <b>drop-down method is 3 seconds faster than the autocomplete method on average</b>. Secondly, we analysed the user-friendliness by looking at the data of the SUS scores. We found that for both methods, our <b>mean SUS scores were below the industry standards</b>. For context, the industry standard is 68, but the drop-down method and autocomplete method scored 34 and 35 respectively. Lastly, we analysed the cognitive load by considering the SEQ scores. Our findings showed us that the <b>auto-complete method had a higher SEQ score than the drop-down method</b>. However, the difference was marginal as the auto-complete method had a score of 4.9 while the drop-down method had a score of 4.7. In all, the preliminary analysis showed us that the difference in usability between the two methods are marginally small. However, further analysis should still be done to determine the significance of the differences.<br/><br/>

        <h3>The statistical tests</h3>
        Since our experiment is a mixed design, with one between-subjects IV and two within-subjects IV, <b>Linear Mixed Effects Model was used as our statistical test</b>. We had to perform the statistical test on each of our DVs, hence, the Response for each test would change accordingly. The Linear Mixed Effects Model test revealed to us that there were <b>no significant effects</b> between the drop-down and autocomplete method. The details of one of our statistical tests on the user-friendliness DV can be seen below.<br/><br/>
        <div className="key-para"> We conducted a Linear Mixed Effects Model to test how the movie chosen (within-subjects), cinema search bar (within-subjects) and Ticket Type (between-subjects) affected user-friendliness when purchasing movie tickets. The analysis showed that participants had i) no significant difference in perceived user-friendliness when using dropdown search method than when using the autocomplete search method, F(1, 21) = 0.7713, p = 0.3897, ii)  no significant difference in user-friendliness when selecting the movie “21 Bridges” than “Unhinged”, F(1, 21) = 0.1141, p = 0.7389, no significant difference in user-friendliness between the ticket type “Standard Price” and “Partner Reward”, F(1, 7) = 1.9337, p = 0.2063. There were also no significant interactions between i) movie chosen and search method (p = 0.6651), ii) search method and ticket type chosen (p = 0.1352), iii) movie chosen and ticket type chosen (p = 0.7389), and iv) search method, ticket type chosen, and movie chosen (p = 0.9202).</div>
        </p><br/>

        <h2><b>The conclusion</b></h2>
        <p>
            We did not find significant effects from changing different things from the current website. The conclusion is that the <b>test is not successful in determining if there is an improvement in user-friendliness and time taken</b> for movie-goers to book movie tickets on a website that uses an autocomplete search bar as compared to a website that uses a dropdown list. However, this is inconclusive to whether autocomplete search bars are better than dropdown lists for movie booking websites as there could be many variables that have contributed to the unsuccessful experiment.
        </p>

        <h2><b>A quick reflection</b></h2>
        <p>
            In hindslight, there were lots of improvements that could have been made to our experiment. Firstly, we could have increase the variability for the between-subjects groups by either having participants that were of different age groups and occupation, as all our participants were university students between the ages of 21 and 25. Alternatively, we could have had participants of varying skills in technology as all our participants indicated being good with technology. Overall, since we had to work with a lot less members than expected, I felt that the quality of our project suffered. The group had a lot of ideas for the experiment, like measuring accuracy on top of the three DVs we already had. We wanted to see if our new method would decrease the number of mistakes users made while completing the test. Moreover, we also had other IVs in mind as we were plannint to make bigger improvements for the purchasing user flow. Some of the improvements we wanted to make were reorganizing the steps for the purchasing process and switching the layout for the purchasing form pages. However, we were advised by the teaching team to tackle a smaller issue as a bigger change would mean more IVs, which could be a problem due to our small team size. Hence, I was slightly disappointed at what our project could have been. Despite that, I still learnt a lot regarding statistical analysis in the context of UX experiments, that I had not picked up from any of the previous UX modules and internships.
        </p>
    </div>
  )
}
 
export default RedesignGVWebsite;