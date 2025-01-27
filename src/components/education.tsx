import { Education as IEducation } from '@/types/resume';

import styles from './education.module.scss';

type Props = {
  education: IEducation;
};

const Education: React.FC<Props> = ({ education }) => {
  return (
    <p>
      <span className={styles.degreeType}>{education.degreeType}:</span>{' '}
      {education.major}
      {', '}
      <span className={styles.honors}>{education.honors}</span>
      {'. '}
      {education.school}
    </p>
  );
};

export default Education;
