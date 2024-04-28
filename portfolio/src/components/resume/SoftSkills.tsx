import React from 'react';
import './Resume.scss'

function SoftSkills() {
    return (
        <section>
            <header>
                <h2 className="resume__section-header">Soft Skills</h2>
            </header>
            <ul className="resume__list resume__list--columns">
                <li>Reframing</li>
                <li>Design</li>
                <li>Lateral thinking</li>
                <li>Questioning</li>
                <li>Introspection</li>
                <li>Open mindedness</li>
                <li>Collaboration</li>
                <li>Curiosity</li>
                <li>Leadership</li>
            </ul>
        </section>
    );
}

export default SoftSkills;