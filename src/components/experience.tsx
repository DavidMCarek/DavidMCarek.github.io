import { Experience as IExperience } from '@/types/resume';
import React from 'react';

import styles from './experience.module.scss';

type Props = {
  experience: IExperience;
};

const Experience: React.FC<Props> = ({ experience }) => {
  const experienceToHeadingStr = ({
    title,
    company,
    startDate,
    endDate,
    location,
  }: IExperience) => {
    return `${title} | \
      ${company} | \
      ${startDate} - \
      ${endDate ?? 'Present'} | \
      ${location}`;
  };

  const heading = experienceToHeadingStr(experience);
  return (
    <React.Fragment key={heading}>
      <h3 className={styles.experienceHeading}>{heading}</h3>
      <ul className={styles.experienceBullets}>
        {experience.bullets.map((bullet) => (
          <li key={bullet.text}>{bullet.text}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Experience;
