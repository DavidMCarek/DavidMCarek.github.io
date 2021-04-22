import React from 'react';

function WorkExperience() {
    return (
        <section>
            <header>
                <h2>Work Experience</h2>
            </header>
            <h3>Software Engineer</h3>
            <h4>Ridge Tool Company, Elyria, OH / Jan 2015 - Dec 2017, Jun 2018 - Present</h4>
            <ul>
                <li>Participated in collaborative software development teams with frequent pair programming whenever possible to improve productivity and reduce knowledge isolation</li>
                <li>
                    Developed and tested external and intranet websites and apis utilizing some of the following technologies for each application
                    <ul>
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

            <h3>Developer I</h3>
            <h4>Hyland Software, Westlake, OH / Jan 2018 - Jun 2018</h4>
            <ul>
                <li>Improved and maintained the OnBase web client</li>
                <li>Performed threat modeling to prevent application vulnerabilities</li>
                <li>Participated in an agile development strategy</li>
                <li>Explored frontend technologies like Angular</li>
            </ul>

            <h3>Mathematics Tutuor</h3>
            <h4>Lorain County Community College, Elyria, OH / Oct 2013 - Oct 2014</h4>
            <ul>
                <li>Effectively communicated fundamental concepts of mathematics at the collegiate level</li>
            </ul>
        </section>
    );
}

export default WorkExperience;