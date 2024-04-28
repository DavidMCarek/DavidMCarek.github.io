import React from 'react';
import { WorkExperience as WorkExperienceProps } from '../../types';
import ListItem from './ListItem';

function WorkExperience({
    position,
    company,
    location,
    timeframe,
    responsibilities}: WorkExperienceProps) {
    return (
        <>
            <h3 className="resume__sub-header">{position}</h3>
            <h4 className="resume__sub-header-info"><em>{`${company}, ${location} / ${timeframe}`}</em></h4>
            <ul className="resume__list">
                {responsibilities?.map(responsibility =>
                    <ListItem {...responsibility} />)
                }
            </ul>
        </>
    );
}

export default WorkExperience;