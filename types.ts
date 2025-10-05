
export interface Experience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Project {
  title: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}
