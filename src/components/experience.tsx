import { Experience as IExperience } from '@/types/resume';
import { ReactElement } from 'react';

import styles from './experience.module.scss';

type Props = Readonly<{
  experience: IExperience;
}>;

export default function Experience({ experience }: Props): ReactElement {
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
    <div className={styles.printGroup} key={heading}>
      <h3 className={styles.experienceHeading}>{heading}</h3>
      <ul className={styles.experienceBullets}>
        {experience.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
