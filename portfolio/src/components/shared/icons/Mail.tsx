import React from 'react';

function Mail({className} : {className: string}) {
    return (
        <svg className={className} viewBox="0 0 24 24">
            <path d="M12 11.016l8.016-5.016h-16.031zM20.016 18v-9.984l-8.016 4.969-8.016-4.969v9.984h16.031zM20.016 3.984q0.797 0 1.383 0.609t0.586 1.406v12q0 0.797-0.586 1.406t-1.383 0.609h-16.031q-0.797 0-1.383-0.609t-0.586-1.406v-12q0-0.797 0.586-1.406t1.383-0.609h16.031z"></path>
        </svg>
    );
}

export default Mail;