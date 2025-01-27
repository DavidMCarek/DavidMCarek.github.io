import { Resume as IResume, Tag } from '@/types/resume';
import styles from './page.module.scss';
import Card from '@/components/card';
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
    ],
    experience: [
      {
        title: 'Senior Software Engineer',
        company: 'Ad Hoc LLC',
        startDate: 'Jan 2023',
        location: 'Remote',
        bullets: [
          {
            text: "Improved Healthcare.gov's article engagement by 5% through intuitive frontend designs.",
            tags: [Tag.Frontend],
          },
          {
            text: 'Delivered highly accessible applications using WCAG standards and accessibility tools.',
            tags: [Tag.Frontend, Tag.Accessibility],
          },
          {
            text: 'Enhanced deployment processes, reducing JavaScript bundle sizes by 80%.',
            tags: [Tag.Frontend],
          },
          {
            text: 'Successfully onboarded 6 engineers, providing comprehensive training and mentorship to accelerate their productivity and integration to the team.',
            tags: [Tag.Leadership],
          },
          {
            text: 'Designed and authored technical solution for scalable site navigation on Healthcare.gov, aligning with new information architecture and stakeholder goals.',
            tags: [Tag.FullStack, Tag.Leadership],
          },
          {
            text: 'Improved deployment reliability by reorganizing Akamai NetStorage structure to empower independent teams.',
            tags: [Tag.Leadership],
          },
        ],
        tags: [Tag.Recent],
      },
      {
        title: 'Software Engineer 3',
        company: 'Ad Hoc LLC',
        startDate: 'Jun 2021',
        endDate: 'Jan 2023',
        location: 'Remote',
        bullets: [
          {
            text: 'Worked on the Learn team designing and implementing a new content authoring experience for the static content of Healthcare.gov, improving content author delivery times by 50%, leveraging Gatsby, React, TypeScript, SCSS, HTML, GraphQL, NodeJS, Drupal CMS, PHP, JavaScript, MySQL and Docker.',
            tags: [Tag.FullStack, Tag.CMS],
          },
          {
            text: 'Led the development of a React-based content rules engine, reducing content author dependency on engineering resources by 70%.',
            tags: [Tag.Frontend],
          },
          {
            text: 'Optimized JavaScript bundle sizes by 80%, cutting load times and improving performance',
            tags: [Tag.Frontend],
          },
          {
            text: 'Collaborated with UX/UI teams to create pixel-perfect, responsive components.',
            tags: [],
          },
          {
            text: 'Developed AWS-based content preview systems, reducing editing cycles by 9 minutes.',
            tags: [],
          },
        ],
        tags: [Tag.Recent],
      },
      {
        title: 'Software Engineer',
        company: 'Ridge Tool Company',
        startDate: 'Jun 2018',
        endDate: 'Jan 2021',
        location: 'Elyria, OH',
        bullets: [],
        tags: [Tag.Recent],
      },
      {
        title: 'Developer 1',
        company: 'Hyland Software',
        startDate: 'Jan 2018',
        endDate: 'Jun 2018',
        location: 'Westlake, OH',
        bullets: [],
      },
      {
        title: 'Developer Co-op',
        company: 'Ridge Tool Company',
        startDate: 'Jan 2015',
        endDate: 'Dec 2017',
        location: 'Elyria, OH',
        bullets: [],
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
      <Card>
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
      </Card>
    </main>
  );
};

export default Resume;
