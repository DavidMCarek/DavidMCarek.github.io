import { Resume as IResume } from '@/types/resume';
import styles from './page.module.scss';
import React from 'react';
import Education from '@/components/education';
import SkillGroup from '@/components/skillGroup';
import Experience from '@/components/experience';

const Resume: React.FC = () => {
  const resumeData: IResume = {
    summary: `Seasoned software engineer with over a decade of experience \
    navigating diverse web based technologies across the full tech stack \
    with a focus on delivering impactful solutions at every stage of \
    development.`,
    skillsets: [
      {
        title: 'Languages',
        skills: [
          'TypeScript',
          'JavaScript',
          'C#',
          'Java',
          'c++',
          'SQL',
          'HTML5',
          'SCSS',
          'CSS',
          'Golang',
        ],
      },
      {
        title: 'Frameworks',
        skills: [
          'React',
          'Gatsby',
          'NextJS',
          'Angular',
          'Vue',
          'jQuery',
          '.Net Core',
          '.Net MVC',
          'Symphony',
          'Spring',
          'Node.js',
          'Drupal',
        ],
      },
      {
        title: 'Databases',
        skills: ['MySql', 'MSSQL'],
      },
      {
        title: 'DevOps',
        skills: ['Jenkins', 'TeamCity', 'Docker', 'New Relic', 'CI/CD'],
      },
      {
        title: 'Web Accessibility',
        skills: [
          'Axe dev tools',
          'Lighthouse',
          'WCAG Compliance',
          'Screen Readers',
        ],
      },
      {
        title: 'Testing',
        skills: ['Vitest', 'Jest', 'nUnit'],
      },
      {
        title: 'API Development',
        skills: ['REST', 'GraphQL', 'Swagger', 'Postman', 'JSON'],
      },
      {
        title: 'SCM',
        skills: ['git', 'TFS'],
      },
      {
        title: 'Operating Systems',
        skills: ['Linux', 'MacOS', 'Windows'],
      },
      {
        title: 'Security',
        skills: ['OAuth 2.0', 'Identity Server', 'Threat Modeling'],
      },
    ],
    experience: [
      {
        title: 'Senior Software Engineer',
        company: 'Ad Hoc LLC',
        startDate: 'Jan 2023',
        location: 'Remote',
        bullets: [
          'Increased article engagement on Healthcare.gov by 5% through React-based frontend designs and user-centered UI enhancements.',
          'Delivered highly accessible applications adhering to WCAG standards, using tools like Axe DevTools and Lighthouse to verify compliance.',
          'Successfully onboarded 8 engineers onto the Learn Team, providing comprehensive training and mentorship to accelerate their productivity and integration to the team.',
          'Designed and authored technical solution for scalable site navigation on Healthcare.gov, aligning with new information architecture and stakeholder goals.',
          'Empowered independent teams by reorganizing Akamai NetStorage folder structure separating one single deployment folder into one folder per team.',
        ],
      },
      {
        title: 'Software Engineer 3',
        company: 'Ad Hoc LLC',
        startDate: 'Jun 2021',
        endDate: 'Jan 2023',
        location: 'Remote',
        bullets: [
          'Designed and implemented a new content authoring experience for Healthcare.gov, improving content author delivery rates by 50%, leveraging a decoupled Drupal and Gatsby architecture.',
          'Developed the React-based content rules engine, reducing content author dependency on engineering resources by 70%.',
          'Optimized JavaScript bundle sizes by 80% through tree shaking, cutting load times and improving performance',
          'Collaborated with UX/UI teams to create pixel-perfect, responsive components.',
          'Developed AWS-based content preview systems, reducing editing cycles by 9 minutes.',
          'Reduced deployment times from 25 minutes to 10 minutes through optimized image handling practices and new cloud syncing technologies',
        ],
      },
      {
        title: 'Software Engineer',
        company: 'Ridge Tool Company',
        startDate: 'Jun 2018',
        endDate: 'Jan 2021',
        location: 'Elyria, OH',
        bullets: [
          'Crafted a .NET Core API and corresponding Vue user interface for distributor discount management and validation, enhancing sales workflow efficiency.',
          'Developed a custom .Net MVC CRM (Customer Relationship Management) system to replace Salesforce, reducing operational costs by 40%.',
          'Enhanced the frontend experience by integrating reusable components and ensuring scalability.',
          'Mentored junior developers through frequent pair programming and presentations on topics like dependency injection.',
        ],
      },
    ],
    education: {
      degreeType: 'Bachelor of Science',
      major: 'Computer Science and Engineering',
      honors: 'Summa Cum Laude',
      school: 'The University of Toledo',
    },
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.name}>David Carek</h1>
      <h2 className={styles.section}>Summary</h2>
      <p>{resumeData.summary}</p>
      <h2 className={styles.section}>Skills</h2>
      {resumeData.skillsets.length > 0 && (
        <SkillGroup skillsets={resumeData.skillsets} />
      )}
      <h2 className={styles.section}>Experience</h2>
      {resumeData.experience.map((experience) => (
        <Experience key={experience.startDate} experience={experience} />
      ))}
      <h2 className={styles.section}>Education</h2>
      <Education education={resumeData.education} />
    </main>
  );
};

export default Resume;
