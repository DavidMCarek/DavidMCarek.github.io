import { Skillset } from '@/types/resume';

import styles from './skillGroup.module.scss';

type Props = {
  skillsets: Array<Skillset>;
};

const SkillGroup: React.FC<Props> = ({ skillsets }) => {
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
};

export default SkillGroup;
