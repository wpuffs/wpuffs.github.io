import React from "react"
import "./Pages.css";

import FigmaEmbed from './FigmaEmbed';
import currentflowjoel from "../assets/currentflowjoel.png";
import currentflowsusan from "../assets/currentflowsusan.png";
import idealflowjoel from "../assets/idealflowjoel.png";
import idealflowsusan from "../assets/idealflowsusan.png";
import ntfgh from "../assets/ntfgh.png";

function ERApp() {
    return (
        <div className="page">
        <div className="header-image">
            <img src={ntfgh} width="90%" alt="NTFGH ED application homepage"/>
        </div>
        <h1><b>Enhance, Engage, Empower: Transforming the Emergency Department Patient Experience</b></h1>

        <h2><b>The business problem</b></h2>
        <p>The emergency department consistently suffers the poorest ratings in patient experience—and it’s no surprise why. Patients here often endure the longest wait times, with an average of 2 hours and 38 minutes* spent waiting and a staggering 9 hours and 41 minutes* for total turnaround time. These delays aren’t just numbers; they directly impact patient satisfaction. In fact, 32% of patient feedback is tied to frustrations with waiting times, unclear processes, and poor wayfinding.
        <br/><br/>
        So the question becomes: <u>How can we transform this chaotic process into a seamless, transparent, and patient-centered journey?</u>
        </p>

        <h2><b>Finding the solution</b></h2>
        <h3><i><b>Who is this solution for?</b></i></h3>
        <p>This solution is designed for ambulatory patients—individuals who are well enough to walk into the emergency department but still require timely and efficient care. These patients often face the brunt of long wait times and unclear processes, leading to frustration and dissatisfaction.
        <br/><br/>
        Two key personas illustrate the needs of these patients: 
        <div className="bulletpoint">
            <ul className="list">
                <li><b>Joel a.k.a <i>"Atas Ah Beng"</i></b>, a 28-year-old engineer, is tech-savvy and seeks quick treatment to avoid worsening his condition, but he’s frustrated by long wait times and a lack of updates on his progress. </li>
                <li><b>Mdm Susan a.k.a <i>"Kan Chiong Ah Ma"</i></b>, a 71-year-old retiree, has limited comfort with technology and struggles with unclear processes in the emergency department and fears missing her turn if she steps away for basic needs like using the restroom.</li>
            </ul>
        </div>
        </p>
        
        <h3><i><b>The current patient flow</b></i></h3>
        <p>Currently, the patient journey in the emergency department is fragmented and opaque. 
            From check-in to discharge, patients are often left in the dark about wait times, next steps, and their overall progress. 
            This lack of transparency exacerbates frustration and contributes to poor patient satisfaction.</p>
        
        <h4>The current flow for Joel a.k.a "Atas Ah Beng"</h4>
        <div className="header-image">
            <img src={currentflowjoel} width="90%" alt="Current flow for Joel persona"/>
        </div><br></br>

        <h4>The current flow for Mdm Susan a.k.a "Kan Chiong Ah Ma"</h4>
        <div className="header-image">
            <img src={currentflowsusan} width="90%" alt="Current flow for Susan persona"/>
        </div><br></br>
        
        <h3><i><b>Diving into current innovations</b></i></h3>
        <p>
            Before diving into a solution, we looked to other industries that face similar challenges with notorious waiting times. 
            The airline industry, for example, has revolutionized check-in processes through self-service apps like those used by Scoot and AirAsia. 
            Passengers can now check in hours before their flight—from home—avoiding long physical queues altogether.
            <br/><br/>
            In addition to exploring solutions from other industries, we also examined innovations emerging within healthcare itself. These advancements provided valuable insights that we could adapt and integrate into our solution to create a smoother patient journey. Firstly, AI-powered chatbot tools, such as Clearstep, have revolutionized how patients access care. This smart triage system helps users identify their symptoms and directs them to the most appropriate healthcare resources, streamlining the initial assessment process.
            Secondly, self-service vital signs machines allow patients to measure their own vitals with minimal assistance from nurses. These machines are already in use at Ng Teng Fong Hospital and other hospitals across Singapore, significantly speeding up the triage process.
            Lastly, medication dispensing machines could further reduce wait times for ED patients, particularly those with chronic conditions who do not require new prescriptions or pharmacist consultations. By enabling patients to collect their medication directly, these machines eliminate unnecessary delays and improve overall efficiency.
            By incorporating these innovations, we aimed to create a more seamless and patient-centered experience in the emergency department.</p>

        <h2><b>Designing the ideal patient flow</b></h2>
        <p>Our solution, or our ideal patient flow, reimagines the ED experience by giving patients the clarity and control they need to make the right decisions.
        <div className="bulletpoint">
            <ul className="list">
            <li><b>Pre-Questionnaire</b>: Before receiving a queue number, patients complete a pre-questionnaire on the app to assess their condition. This not only helps recommend the most appropriate care setting—potentially redirecting non-urgent cases away from the ED—but also streamlines triage by providing nurses with essential information upfront, reducing triage time.</li>
            <li><b>Pre-Check-In</b>: For patients who still need to visit the ED, the app provides a queue number that can be activated upon arrival. Payments can also be made in advance through the app, eliminating the need to wait at the counter. Additionally, pre-filled admission information speeds up the process, as nurses no longer need to manually collect details from patients.</li>
            <li><b>Self-Service Vital Signs</b>: Upon arrival, patients can use self-service vital signs machines to measure their own vitals with minimal assistance from nurses. This reduces the workload on staff and speeds up the triage process, ensuring patients move through the system more efficiently.</li>
            <li><b>Real-Time Updates</b>: Patients can track their entire journey—from triage to discharge—through real-time updates delivered via the <u>app on their phones</u> or through <u>kiosks available at the emergency department</u>. This dual approach ensures that tech-savvy patients can stay informed on the go, while elderly or less tech-savvy patients can easily access updates at the kiosks. Notifications include estimated wait times, next steps, and reminders for tasks like filling out ward preferences or insurance forms if admission is required.</li>
            <li><b>Medication Dispensing</b>: For patients with chronic conditions who do not require new prescriptions, medication dispensing machines allow them to collect their medication directly. This eliminates the need for pharmacist consultations and reduces wait times, ensuring a faster discharge process.</li>
            </ul>
        </div>
        This streamlined, patient-centered approach not only reduces frustration and empowers patients with actionable information, but it also helps them make the most of their waiting time. By addressing overcrowding through the pre-questionnaire’s redirection capabilities and speeding up processes like triage, admission, payment and even medication collection, the solution tackles the root causes of long wait times, creating a more efficient and satisfying experience for both patients and staff.
        </p>

        <h2><b>The ideal patient flow</b></h2>
        <h4>The current flow for Joel a.k.a "Atas Ah Beng"</h4>
        <div className="header-image">
            <img src={idealflowjoel} width="90%" alt="Current flow for Joel persona"/>
        </div><br></br>

        <h4>The current flow for Mdm Susan a.k.a "Kan Chiong Ah Ma"</h4>
        <div className="header-image">
            <img src={idealflowsusan} width="90%" alt="Current flow for Susan persona"/>
        </div>

        <p>View an enactment of how the patients would interact with the solution:     <a href="https://drive.google.com/file/d/1QiYuPzDz1dacFuy_yWQ8yPp43Rvtqjq2/view?usp=drive_link">(1)</a>,     <a href="https://drive.google.com/file/d/13HO0apNnW3MTBWhV2i7uyOwnfkxR9JZJ/view?usp=drive_link">(2)</a>,     <a href="https://drive.google.com/file/d/1XKTwvgkX_H1uSxYD7X4TJ1BsO8kEG5Pw/view?usp=drive_link">(3).</a></p>

        <h3><i><b>The app prototype</b></i></h3>
        <p>Not loading? Click this link to view our <u><a href="https://www.figma.com/proto/VVjYJFJoApXLmD8udhmeut/ntfgh?page-id=0%3A1&node-id=4-2&starting-point-node-id=4%3A2&t=mEtIZo0Mf8wRPPaT-1">prototype</a></u> on Figma</p>
        <FigmaEmbed
            src="https://embed.figma.com/proto/VVjYJFJoApXLmD8udhmeut/ntfgh?page-id=0%3A1&node-id=4-2&starting-point-node-id=4%3A2&embed-host=share" />
        <p></p>

        <h2><i><b>What have I learnt?</b></i></h2>
        <p>This project was a milestone for me, as it was the first time I worked directly with subject matter experts like emergency department nurses and patient service associates. Their firsthand insights were invaluable in shaping a solution that was both innovative and practical. It was also the first project where I presented to actual stakeholders (i.e. NTFGH management) and I was thrilled that they believed in the solution and its potential impact. 
            <br/><br/>Collaborating with experts taught me the importance of empathy and user-centered design, while presenting to stakeholders boosted my confidence in communicating complex ideas. This experience reinforced my belief in the power of cross-disciplinary collaboration and showed me how thoughtful design can make a real difference in high-stakes environments like the emergency department. I’m proud to have contributed to a solution that improves the experiences of both patients and healthcare providers.</p>
    </div>
    );
}

export default ERApp;
