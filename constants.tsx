import React from 'react';
import { Experience, Education, Project, Certification } from './types';

export const personalInfo = {
  name: 'Swati Ramesh Mishra',
  location: 'Pune, 410506',
  contact: '8983092716',
  email: 'srpmishra380@gmail.com',
  linkedin: 'https://linkedin.com/in/swati-mishra-52a04b296',
  summary: 'Full Stack Developer Intern with strong knowledge of Java, SQL, HTML, CSS, and JavaScript, and internship exposure to backend development using Flask, Django, and MySQL. Skilled in problem-solving, teamwork, and adaptability, with an eagerness to contribute and grow in any tech role.'
};

export const softSkills: string[] = ['Problem Solving', 'Teamwork', 'Adaptability', 'Communication', 'Time Management', 'Quick Learning'];

export const technicalSkills = {
  Languages: ['Java', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  Database: ['MySQL'],
  'Frameworks/Tools': ['Flask', 'Django', 'Spring Boot', 'Bootstrap', 'Git', 'GitHub', 'IntelliJ IDEA', 'Eclipse'],
  Concepts: ['OOPs', 'Exception Handling', 'JDBC']
};

export const experiences: Experience[] = [
  {
    role: 'Full Stack Development Internship Using Python',
    company: 'Sumago InfoTech Pvt. Ltd.',
    period: 'Dec 2023 – Jan 2024',
    responsibilities: [
      'Built web components using Python, Flask, and Django',
      'Integrated MySQL for efficient backend operations',
      'Collaborated on UI components to enhance user experience'
    ]
  }
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Engineering (Computer Engineering)',
    institution: 'Savitribai Phule Pune University',
    period: '2025',
    details: 'SGPA: 8.18 | CGPA: 7.38'
  },
  {
    degree: 'HSC (Maharashtra State Board, Pune)',
    institution: '',
    period: '2021',
    details: 'Percentage: 71.33%'
  }
];

export const projects: Project[] = [
  {
    title: 'Blockchain-Based E-Voting System Application',
    description: [
      'Developed a secure and transparent e-voting system using Ethereum Blockchain, Solidity, and Ganache.',
      'Designed frontend using HTML, CSS, JavaScript and integrated with smart contracts.',
      'Ensured data immutability, voter anonymity, and real-time voting via Metamask.'
    ]
  },
  {
    title: 'Online Job Portal Management System',
    description: [
      'Built a full-stack web application using Java (Spring Boot), MySQL, HTML, CSS, Bootstrap.',
      'Implemented user login/registration, job listings, resume upload, and job management features.',
      'Applied RESTful APIs, CRUD operations, and MVC architecture for a seamless user experience.'
    ]
  }
];

export const certifications: Certification[] = [
  { name: 'Flask & Django', issuer: 'Udemy' },
  { name: 'Software Engineering', issuer: 'Forage' },
  { name: 'AWS', issuer: 'Brainovision Solutions Pvt. Ltd. in collaboration with AICTE' },
  { name: 'Full Stack Java Developer Training', issuer: 'QSpiders Deccan, Pune (Incubation Program)' }
];

// SVG Icons
export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.1 3.1 0 012.8-1.6c2.1 0 3.8 1.8 3.8 5.3V19z" />
  </svg>
);

export const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

export const CubeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9.75v9.75" />
    </svg>
);

export const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.098a2.25 2.25 0 01-2.25 2.25h-13.5a2.25 2.25 0 01-2.25-2.25V14.15M16.5 18.75h-9M9.75 14.15V6.375a2.25 2.25 0 012.25-2.25h.008a2.25 2.25 0 012.25 2.25v7.775" />
    </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const AcademicCapIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.905 59.905 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-.07.002z" />
    </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.553L16.5 21.75l-.398-1.197a3.375 3.375 0 00-2.456-2.456L12.75 18l1.197-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.197a3.375 3.375 0 002.456 2.456L20.25 18l-1.197.398a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
);

export const ArrowUpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
    </svg>
);

export const CodeBracketIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);

export const DatabaseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
    </svg>
);

export const DevGlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" className="opacity-30" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" className="opacity-30" />
        
        <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" className="globe-spin opacity-50"/>
        <path d="M100 50 A 50 50 0 0 1 100 150" fill="none" stroke="currentColor" strokeWidth="0.5" className="globe-spin opacity-40"/>
        <path d="M50 100 A 50 50 0 0 1 150 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="globe-spin opacity-40"/>

        <g className="orbit-1">
            <text x="20" y="95" fontFamily="monospace" fontSize="12" fill="currentColor" className="opacity-80">{"</>"}</text>
        </g>
        <g className="orbit-2">
             <circle cx="100" cy="40" r="3" fill="currentColor" className="node-pulse opacity-90"/>
        </g>
        <g className="orbit-3">
            <text x="140" y="165" fontFamily="monospace" fontSize="10" fill="currentColor" className="opacity-70">{"{;}"}</text>
        </g>
    </svg>
);

// New Shapes for background decoration
export const BlobShape: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
        <path fill="currentColor" d="M433,300.5Q386.5,351,330.5,391Q274.5,431,212,422Q149.5,413,101.5,364Q53.5,315,53.5,250Q53.5,185,102,143Q150.5,101,213,67Q275.5,33,332,66.5Q388.5,100,432.5,150Q476.5,200,433,300.5Z" />
    </svg>
);

export const GridPattern: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
        <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="2" fill="currentColor"/>
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
);