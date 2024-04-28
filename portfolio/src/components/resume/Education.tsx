import React from 'react';
import { Education as EducationProps } from '../../types';
import ListItem from './ListItem';

function Education({location, degree, items}: EducationProps) {
    return (
        <>
            <h3 className="resume__sub-header">{location}</h3>
            <h4 className="resume__sub-header-info"><em>{degree}</em></h4>
            <ul className="resume__list">
                {items.map(item => <ListItem {...item} />)}
            </ul>
        </>
    );
}

export default Education;