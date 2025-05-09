import { Skillset } from '@/types/resume';

import { ReactElement } from 'react';
import styles from './skillGroup.module.scss';

type Props = Readonly<{
  skillsets: Array<Skillset>;
}>;

export default function SkillGroup({ skillsets }: Props): ReactElement {
  const skillGroupToString = ({ skills }: Skillset) => {
    return skills.join(', ');
  };

  return (
    <ul className={styles.skills}>
      {skillsets.map((skillset) => (
        <li key={skillset.title}>
          <span className={styles.groupTitle}>{skillset.title}:</span>
          {' ' + skillGroupToString(skillset)}
        </li>
      ))}
    </ul>
  );
}
