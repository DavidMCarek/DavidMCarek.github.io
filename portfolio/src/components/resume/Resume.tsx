import React from 'react';
import Summary from './Summary';
import WorkExperience from './WorkExperience';
import SoftSkills from './SoftSkills';
import './Resume.scss'

function Resume() {
    return (
        <article className="resume">
            <header>
                <h1>David Carek</h1>
                <hr></hr>
                <h2>SOFTWARE ENGINEER</h2>
            </header>
            <Summary />
            <WorkExperience />
            <SoftSkills />
        </article>
    );
}

export default Resume;