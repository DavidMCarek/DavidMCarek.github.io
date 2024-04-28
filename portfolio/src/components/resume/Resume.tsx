import ContactInfo from './ContactInfo';
import React from 'react';
import Summary from './Summary';
import WorkExperience from './WorkExperience';
import SoftSkills from './SoftSkills';
import './Resume.scss'

function Resume() {
    const phone = '(440)522-5205';
    const email = 'DMCarek@gmail.com';
    const github = 'github.com/DavidMCarek';
    const address = '4635 Edgewater Dr\r\nSheffield Lake, OH, 44054';

    return (
        <article className="resume">
            <header className="resume__header">
                <h1 className="resume__name">David Carek</h1>
                <hr className="resume__header-divider"></hr>
                <h2 className="resume__title">SOFTWARE ENGINEER</h2>
            </header>
            <main className="resume__main">
            </main>
            <aside className="resume__aside">
                <ContactInfo phone={phone} email={email} github={github} address={address} />
                {/* 
        <section>
            <header>
                <h2 className="resume__section-header">Work Experience</h2>
            </header>
            <h3 className="resume__sub-header">Software Engineer</h3>
            <h4 className="experience__info"><em>Ridge Tool Company, Elyria, OH / Jan 2015 - Dec 2017, Jun 2018 - Present</em></h4>
            <ul className="resume__list">
                <li>Participated in collaborative software development teams with frequent pair programming whenever possible to improve productivity and reduce knowledge isolation</li>
                <li>
                    Developed and tested external and intranet websites and apis utilizing some of the following technologies for each application
                    <ul className="resume__list">
                        <li>360 Insight (Custom CRM): C#, .Net Framework, Javascript, JQuery, Razor, SignalR, CSS, SQL, Entity Framework</li>
                        <li>Shop Floor Payroll: Java Spring</li>
                        <li>Helpdesk Ticket Search: Elasticsearch</li>
                        <li>RIDGIDConnect: Vue, SCSS, Typescript</li>
                        <li>PROAction Pricing Program: .Net Core</li>
                    </ul>
                </li>
                <li>Mentored co-ops to better develop their software skills and knowledge</li>
                <li>Constructed Android base applications for use with Bluetooth enabled products</li>
                <li>Updated legacy codebases like RIDGIDConnect from Web Forms to an MVC API and Vue application as part of a redesign</li>
                <li>Provided stakeholder satisfaction by utilizing a Kanban style workflow for continuous deployments and development</li>
                <li>Utilized frequent unit testing to improve software maintainability</li>
                <li>Implemented procedures for utilizing an instance of Identity Server 4 in order to simplify and secure cross platform communication on applications including 360 Insight and PROAction Pricing Program</li>
                <li>Utilized microservice architecture to provide plugin like functionality to multiple web platforms</li>
                <li>Provided customer support for RIDGIDConnect</li>
                <li>Performed task breakdowns, estimations, and gathered requirements while leading a small project to handle product pricing in Latin America</li>
                <li>Designed and improved existing and new code architecture whenever possible to make future code maintenance easier and improve performance</li>
                <li>Helped design mockups using Adobe XD to provide an improved user experience to the sales team for interacting with the PROAction Pricing Program</li>
            </ul>

            <h3 className="resume__sub-header">Developer I</h3>
            <h4 className="experience__info"><em>Hyland Software, Westlake, OH / Jan 2018 - Jun 2018</em></h4>
            <ul className="resume__list">
                <li>Improved and maintained the OnBase web client</li>
                <li>Performed threat modeling to prevent application vulnerabilities</li>
                <li>Participated in an agile development strategy</li>
                <li>Explored frontend technologies like Angular</li>
            </ul>

            <h3 className="resume__sub-header">Mathematics Tutuor</h3>
            <h4 className="experience__info"><em>Lorain County Community College, Elyria, OH / Oct 2013 - Oct 2014</em></h4>
            <ul className="resume__list">
                <li>Effectively communicated fundamental concepts of mathematics at the collegiate level</li>
            </ul>
        </section>




                    Education
                    The University of Toledo
                    B.S. Computer Science and Engineering
                    Summa Cum Laude Dec 2017
                    GPA 3.915
                    
                    Languages
                    C#
                    HTML
                    CSS
                    Javascript
                    Java
                    C++
                    SCSS
                    SCSS
                    Typescript
                    SQL

                    Frameworks
                    .Net MVC / Web Api
                    .Net Core
                    JQuery
                    Bootstrap
                    Entity Framework
                    SignalR
                    Angular
                    Vue
                    Identity Server

                    Technologies
                    Git
                    Visual Studio
                    Android Studio
                    Firebase
                    Fiddler 4
                    Postman
                    SSMS

                    Architectures                
                    REST
                    Layered
                    Microservice
                */}
            </aside>
        </article>
    );
}

export default Resume;