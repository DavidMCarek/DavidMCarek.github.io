export interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  location: string;
  bullets: Array<string>;
}

export interface Skillset {
  title: string;
  skills: Array<string>;
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
