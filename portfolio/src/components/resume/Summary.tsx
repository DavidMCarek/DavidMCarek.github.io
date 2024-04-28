import React from 'react'
import './Resume.scss'

function Summary() {
    return (
        <section>
            <header>
                <h2 className="resume__section-header">Summary</h2>
            </header>
            <ul className="resume__list">
                <li>Software Engineer with experience primarily based in the .NET tech stack</li>
                <li>Focused on web design and development with a keen eye for technical debt</li>
            </ul>
        </section>
    );
}

export default Summary;