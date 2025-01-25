export enum Tag {
  Frontend = 'Frontend',
  FullStack = 'Full Stack',
  Backend = 'Backend',
  Leadership = 'Leadership',
  OOP = 'Object Oriented Programming',
  Languages = 'Languages',
  Frameworks = 'Frameworks',
  Accessibility = 'Accessibility',
  Testing = 'Testing',
  DevOps = 'DevOps',
  Cloud = 'Cloud Technologies',
  CMS = 'Content Management Systems',
  Security = 'Security',
}

export interface ResumeBullet {
  text: string;
  tags: Array<Tag>;
  details?: string;
}

export interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  location: string;
  bullets: Array<ResumeBullet>;
}

export interface Skill {
  name: string;
  tags?: Array<Tag>;
}

export interface SkillGroup {
  title: string;
  skills: Array<Skill>;
  tags?: Array<Tag>;
}

export interface Resume {
  summary: string;
  allSkills: Array<SkillGroup | Skill>;
  experience: Array<Experience>;
  education: string;
}
