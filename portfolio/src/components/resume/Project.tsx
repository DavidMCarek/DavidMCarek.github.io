import React from 'react';
import { Project as ProjectProps } from '../../types';
import ListItem from './ListItem';

function Project({title, duration, responsibilities}: ProjectProps) {
    return (
        <>
            <h3 className="resume__sub-header">{`${title} (${duration})`}</h3>
            <ul className="resume__list">
                {responsibilities.map(responsibility => <ListItem {...responsibility} />)}
            </ul>
        </>
    );
}

export default Project;