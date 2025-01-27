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
  Recent = 'Recent',
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
  tags?: Array<Tag>;
}

export interface Skill {
  name: string;
  tags?: Array<Tag>;
}

export interface Skillset {
  title: string;
  skills: Array<Skill>;
  tags?: Array<Tag>;
}

export interface Education {
  degreeType: string;
  major: string;
  honors: string;
  school: string;
}

export interface Resume {
  summary: string;
  skillsets: Array<Skillset>;
  experience: Array<Experience>;
  education: Education;
}
