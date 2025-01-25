import { Resume as IResume, Skill, SkillGroup, Tag } from '@/types/resume';
import styles from './page.module.scss';
import Card from '@/components/card';

const Resume: React.FC = () => {
  const resumeData: IResume = {
    summary: `Seasoned software engineer with over a decade of experience \
    navigating diverse web based technologies across the full tech stack \
    with a focus on delivering impactful solutions at every stage of \
    development.`,
    allSkills: [
      {
        title: 'Languages',
        skills: [
          { name: 'TypeScript', tags: [Tag.Frontend, Tag.FullStack, Tag.OOP] },
          { name: 'JavaScript', tags: [Tag.Frontend, Tag.FullStack, Tag.OOP] },
          { name: 'C#', tags: [Tag.Backend, Tag.FullStack, Tag.OOP] },
          { name: 'Java', tags: [Tag.Backend, Tag.FullStack, Tag.OOP] },
          { name: 'c++', tags: [Tag.Backend, Tag.OOP] },
          { name: 'SQL', tags: [Tag.Backend, Tag.FullStack] },
          { name: 'HTML5', tags: [Tag.Frontend, Tag.FullStack] },
          { name: 'SCSS', tags: [Tag.Frontend, Tag.FullStack] },
          { name: 'CSS', tags: [Tag.Frontend, Tag.FullStack] },
          { name: 'GoLang', tags: [Tag.Backend, Tag.FullStack] },
        ],
        tags: [Tag.Languages],
      },
      {
        title: 'Frameworks',
        skills: [
          { name: 'React', tags: [Tag.Frontend, Tag.FullStack] },
          { name: 'Gatsby', tags: [Tag.Frontend, Tag.FullStack] },
          { name: 'NextJS', tags: [Tag.Frontend, Tag.FullStack] },
          { name: 'Angular', tags: [Tag.Frontend, Tag.FullStack] },
          { name: 'Vue', tags: [Tag.Frontend, Tag.FullStack] },
          { name: 'jQuery', tags: [Tag.Frontend, Tag.FullStack] },
          { name: '.Net Core', tags: [Tag.Backend, Tag.FullStack] },
          { name: '.Net MVC', tags: [Tag.Backend, Tag.FullStack] },
          { name: 'Symphony', tags: [Tag.Backend, Tag.FullStack] },
          { name: 'Spring', tags: [Tag.Backend, Tag.FullStack] },
          { name: 'Node.js', tags: [Tag.Backend, Tag.FullStack] },
          { name: 'Android' },
        ],
        tags: [Tag.Frameworks],
      },
      {
        title: 'Relational Databases',
        skills: [{ name: 'MySql' }, { name: 'MSSQL' }],
        tags: [Tag.Backend, Tag.FullStack],
      },
      {
        title: 'DevOps',
        skills: [
          { name: 'Jenkins' },
          { name: 'TeamCity' },
          { name: 'Docker' },
          { name: 'New Relic' },
          { name: 'CI/CD' },
        ],
        tags: [Tag.Backend, Tag.FullStack],
      },
      {
        title: 'Web Accessibility',
        skills: [
          { name: 'Axe dev tools' },
          { name: 'Lighthouse' },
          { name: 'WCAG Compliance' },
          { name: 'Screen Readers' },
        ],
        tags: [Tag.Frontend, Tag.FullStack, Tag.Accessibility],
      },
      {
        title: 'Testing',
        skills: [
          { name: 'Vitest', tags: [Tag.Frontend] },
          { name: 'Jest', tags: [Tag.Frontend] },
          { name: 'nUnit', tags: [Tag.FullStack, Tag.Backend] },
        ],
        tags: [Tag.Testing],
      },
      {
        title: 'API Development',
        skills: [
          { name: 'REST' },
          { name: 'GraphQL' },
          { name: 'Swagger' },
          { name: 'Postman' },
          { name: 'JSON' },
        ],
      },
      {
        title: 'SCM',
        skills: [{ name: 'git' }, { name: 'TFS' }],
      },
      {
        title: 'Operating Systems',
        skills: [{ name: 'Linux' }, { name: 'MacOS' }, { name: 'Windows' }],
      },
      {
        title: 'Security',
        skills: [{ name: 'OAuth 2.0' }, { name: 'Identity Server' }],
      },
      {
        title: 'Architectures',
        skills: [{ name: 'Monolith' }, { name: 'Microservices' }],
      },
      {
        title: 'Content Management Systems',
        skills: [{ name: 'Drupal' }],
      },
      {
        name: 'Elasticsearch',
      },
    ],
    experience: [
      {
        title: 'Senior Software Engineer',
        company: 'Ad Hoc LLC',
        startDate: 'Jan 2023',
        location: 'Remote',
        bullets: [],
      },
      {
        title: 'Software Engineer 3',
        company: 'Ad Hoc LLC',
        startDate: 'Jun 2021',
        endDate: 'Jan 2023',
        location: 'Remote',
        bullets: [],
      },
      {
        title: 'Software Engineer',
        company: 'Ridge Tool Company',
        startDate: 'Jun 2018',
        endDate: 'Jan 2021',
        location: 'Remote',
        bullets: [],
      },
      {
        title: 'Developer 1',
        company: 'Hyland Software',
        startDate: 'Jan 2018',
        endDate: 'Jun 2018',
        location: 'Remote',
        bullets: [],
      },
      {
        title: 'Developer Co-op',
        company: 'Ridge Tool Company',
        startDate: 'Jan 2015',
        endDate: 'Dec 2017',
        location: 'Remote',
        bullets: [],
      },
    ],
    education: '',
  };

  return (
    <main className={styles.main}>
      <Card>
        <h1 className={styles.name}>David Carek</h1>
        <h2 className={styles.section}>Summary</h2>
        <p>{resumeData.summary}</p>
        <h2 className={styles.section}>Skills</h2>
        {resumeData.allSkills.length > 0 && (
          <ul className={styles.skills}>
            {resumeData.allSkills.map((skill) => {
              if (Object.hasOwn(skill, 'title')) {
                const skillCategory = (skill as SkillGroup).title;
                const skills = (skill as SkillGroup).skills
                  .map((skill) => skill.name)
                  .join(', ');
                return (
                  <li key={skillCategory}>{`${skillCategory}: ${skills}`}</li>
                );
              } else
                return (
                  <li key={(skill as Skill).name}>{(skill as Skill).name}</li>
                );
            })}
          </ul>
        )}
        <h2 className={styles.section}>Experience</h2>
      </Card>
    </main>
  );
};

export default Resume;
