import Github from '../shared/icons/Github'
import Location from '../shared/icons/Location'
import Mail from '../shared/icons/Mail'
import Phone from '../shared/icons/Phone'
import {ContactInfo as ContactInfoProps} from '../../types'
import React from 'react';

import './ContactInfo.scss'

function ContactInfo({
    phone,
    email,
    github,
    address
} : ContactInfoProps) {
    return (
        <section className="contact-info">
            <Phone className={"contact-info__phone-icon"} />
            <div>{phone}</div>
            <Mail className={"contact-info__mail-icon"} />
            <div>{email}</div>
            {github && (
                <>
                    <Github className={"contact-info__github-icon"} />
                    <div>{github}</div>
                </>)}
            <Location className={"contact-info__location-icon"} />
            <address>{address}</address>
        </section>
    );
}

export default ContactInfo;