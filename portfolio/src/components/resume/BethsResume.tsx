import ContactInfo from './ContactInfo';
import React from 'react';
import './Resume.scss'
import { ContactInfo as ContactInfoProps, Education as EducationProps, Header, Project as ProjectProps, WorkExperience as WorkExperienceProps } from '../../types';
import WorkExperience from './WorkExperience';
import Project from './Project';
import Education from './Education';

function BethsResume() {
    const header: Header = {
        name: "Bethany Carek",
        title: "MECHANICAL ENGINEER"
    };

    const contactInfo: ContactInfoProps = {
        phone: '(440)654-3751',
        email: 'Bethany.E.Klein@gmail.com',
        address: '5340 Sanctuary Ln.\r\nSheffield Village, OH, 44054'
    };

    const software: string[] = [
        "MATLAB",
        "SolidWorks",
        "AutoCAD",
        "Inventor",
        "Job BOSS",
        "MSC Adams",
        "Infor SyteLine"
    ];

    const work: WorkExperienceProps[] = [
        {
            company: "LEWCO",
            location: "Port Clinton, OH",
            position: "Systems Design Engineer",
            timeframe: "August 2021 - Present",
            responsibilities: [
                {
                    label: "Led an independent project to update conveyor guardrail installation documentation",
                    items: [
                        { label: "Utilized AutoCAD to update installation diagrams" },
                        { label: "Performed measurement and analysis to determine the guardrail length that was required to meet stakeholder constraints" }
                    ]
                },
                { 
                    label: "Established documentation for various business needs including the following",
                    items: [
                        { label: "Preventative maintenance forms for conveyors" },
                        { label: "Spare parts lists for conveyors and their systems" }
                    ]
                },
                { label: "Created and updated AutoCAD drawings for conveyor systems based on client requirements" },
                {
                    label: "Led a team through the inventory process",
                    items: [
                        { label: "Delegated responsibilities to team members and communicated with auditors to ensure proper counting of product" }
                    ]
                },
            ],
        },
        {
            company: "Invacare Corporation",
            location: "Elyria, OH",
            position: "Mechanical Engineering Intern",
            timeframe: "January 2020 - July 2020",
            responsibilities: [
                { label: "Gained exposure to FDA design controls with current Invacare products" },
                { label: "Performed FMEA on a wheelchair brace to determine the cause of failure" },
                { label: "Implemented design changes to enhance products" },
                { label: "Worked on stack-ups to determine correct minimum and maximum height of an electric lift" }
            ],
        },
        {
            company: "The Technology House",
            location: "Solon, OH",
            position: "Mechanical Engineering Intern",
            timeframe: "May 2019 - August 2019",
            responsibilities: [
                { label: "Created a 5S plan to eliminate waste and organize all necessary items for the shipping department" },
                { label: "Collaborated with various departments to ensure on-time delivery of products" },
                { label: "Gained exposure to various additive manufacturing processes, such as injection molding, Carbon DLS, cast urethane molding, SLA and SLS" }
            ],
        },
        {
            company: "Le Chaperone Rouge",
            location: "Avon, OH",
            position: "Substitute Teacher",
            timeframe: "May 2017 - February 2019",
            responsibilities: undefined
        }
    ];

    const projects: ProjectProps[] = [
        {
            title: "Invacare Senior Design Project",
            duration: "Fall 2020 - Spring 2021",
            responsibilities: [
                { label: "Worked collaboratively with team members to decrease vibrations transferred from a compressor to the rest of the frame of the oxygen concentrator" },
                { label: "Gained proficiency in MSC Adams and SolidWorks through modeling an oxygen concentrator compressor and mounting system" },
                { label: "Developed and executed simulation tests utilizing accelerometers and a microphone to determine physical and audible vibration system characteristics" },
                { label: "Utilized experimental test data to redesign the compressor mounting system mitigating vibrations to an acceptable level" }
            ]
        }
    ];

    const education: EducationProps[] = [
        {
            location: "Cleveland State University",
            degree: "B.S. Mechanical Engineering",
            items: [
                { label: "Graduated Spring 2021" },
                { label: "GPA 3.3" }
            ]
        },
        {
            location: "Wright State University",
            degree: "Undergraduate Coursework",
            items: [
                { label: "Fall 2016 - Spring 2018" }
            ]
        }
    ];

    const courses: string[] = [
        "Calculus 1 - 3",
        "Linear Algebra",
        "Differential Equations",
        "Physics 1 & 2",
        "Kinematics",
        "Statics & Dynamics",
        "Machine Analysis",
        "Machine Design 1 & 2",
        "Strength of Materials",
        "Electrical Engineering Concepts",
        "Intro & Applied Thermodynamics",
        "Fluid Mechanics",
        "Fluid Power Systems Lab",
        "Engineering Materials & Manufacturing Processes",
        "Engineering Measurements",
        "Linear Control Systems"
    ];

    const awards: string[] = [
        "Recipient Swagelock Scholar-Engineer Scholarship",
        "Recipient Wright State University Academic Admissions Scholarship",
        "Dalton Memorial Scholarship",
        "MCS Parker Hannifin Engineering Scholarship",
        "Dean's List Recognition Fall 2016, Fall 2018, Spring 2019"
    ];

    return (
        <article className="resume">
            <header className="resume__header">
                <h1 className="resume__name">{header.name}</h1>
                <hr className="resume__header-divider"></hr>
                <h2 className="resume__title">{header.title}</h2>
            </header>
            <main className="resume__main">
                <section>
                    <h2 className="resume__section-header">Work Experience</h2>
                    {work.map((exp, index) => 
                        <WorkExperience {...exp} key={`work-experience-${index}`} />
                    )}
                </section>
                <section>
                    <h2 className="resume__section-header">Software</h2>
                    <ul className="resume__list resume__list--columns">
                        {software.map((program, index) => <li key={`program-${index}`} className="resume__horizontal-list-item">{program}</li>)}
                    </ul>
                </section>
                <section>
                    <h2 className="resume__section-header">Projects</h2>
                    {projects.map((proj, index) =>
                        <Project {...proj} key={`project-${index}`}/>
                    )}
                </section>
            </main>
            <aside className="resume__aside">
                <ContactInfo {...contactInfo} />
                <section>
                    <h2 className="resume__section-header">Education</h2>
                    {education.map((edu, index) => <Education {...edu} />)}
                </section>
                <section>
                    <h2 className="resume__section-header">Relevant Coursework</h2>
                    <ul className="resume__list">
                        {courses.map((course, index) => <li key={`course-${index}`}>{course}</li>)}
                    </ul>
                </section>
                <section>
                    <h2 className="resume__section-header">Honors & Awards</h2>
                    <ul className="resume__list">
                        {awards.map((award, index) => <li key={`award-${index}`}>{award}</li>)}
                    </ul>
                </section>
            </aside>
        </article>
    );
}

export default BethsResume;