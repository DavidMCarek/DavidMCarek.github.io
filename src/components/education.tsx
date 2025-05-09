import { Education as IEducation } from '@/types/resume';

import { ReactElement } from 'react';
import styles from './education.module.scss';

type Props = Readonly<{
  education: IEducation;
}>;

export default function Education({ education }: Props): ReactElement {
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
}
