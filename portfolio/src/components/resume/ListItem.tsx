import React from 'react';
import { ListItem as ListItemProps } from '../../types';

function ListItem({label, items}: ListItemProps) {
    return (
        <>
            <li>
                {label}
                {items && 
                    <ul className="resume__list">
                        {items.map(item => <ListItem {...item} />)}
                    </ul>}
            </li>
        </>
    );
}

export default ListItem;