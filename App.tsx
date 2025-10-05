import React, { useState, useEffect } from 'react';
import Section from './components/Section';
import Card from './components/Card';
import Timeline from './components/Timeline';
import { 
  personalInfo, 
  softSkills, 
  technicalSkills, 
  experiences, 
  education, 
  projects, 
  certifications, 
  MailIcon, 
  PhoneIcon, 
  LinkedInIcon, 
  CubeIcon, 
  BriefcaseIcon,
  MenuIcon,
  XIcon,
  AcademicCapIcon,
  SparklesIcon,
  BlobShape,
  GridPattern,
  ArrowUpIcon,
  DevGlobeIcon,
  CodeBracketIcon,
  DatabaseIcon
} from './constants';
import { Certification, Project } from './types';

const SkillPill: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="bg-red-500/10 text-red-800 text-sm font-medium px-3 py-1.5 rounded-full shadow-sm">{skill}</span>
);

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
    <a 
      href={href} 
      onClick={onClick}
      className="text-slate-700 hover:text-red-600 transition-colors duration-300 font-medium tracking-wide relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
    >
        {children}
    </a>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-red-600 tracking-wider">
          Swati Mishra
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <NavLink key={link.href} href={link.href}>{link.label}</NavLink>)}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <XIcon className="w-6 h-6 text-slate-800" /> : <MenuIcon className="w-6 h-6 text-slate-800" />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="flex flex-col items-center space-y-6 py-8">
          {navLinks.map(link => <NavLink key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</NavLink>)}
        </div>
      </div>
    </header>
  );
};


const Hero: React.FC = () => {
  const [subtitle, setSubtitle] = useState('');
  const roles = ['Full Stack Developer', 'Java Specialist', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
        const currentRole = roles[roleIndex];
        let newSubtitle = '';
        if (isDeleting) {
            newSubtitle = currentRole.substring(0, charIndex - 1);
            setCharIndex(charIndex - 1);
        } else {
            newSubtitle = currentRole.substring(0, charIndex + 1);
            setCharIndex(charIndex + 1);
        }
        setSubtitle(newSubtitle);

        if (!isDeleting && charIndex === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }
    };
    const typingSpeed = isDeleting ? 100 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
            <div className="relative text-center lg:text-left">
                <CodeBracketIcon aria-hidden="true" className="hidden lg:block absolute -top-10 -left-16 w-16 h-16 text-red-300/60 transform -rotate-12" style={{ animation: 'float 6s ease-in-out infinite' }} />
                <DatabaseIcon aria-hidden="true" className="hidden lg:block absolute -bottom-16 right-4 w-12 h-12 text-red-300/50 transform rotate-12" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }} />
                <CubeIcon aria-hidden="true" className="hidden lg:block absolute top-1/2 -right-12 w-10 h-10 text-red-300/40 transform" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '0.5s' }} />

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
                    Hi, I'm <span className="text-red-600">{personalInfo.name.split(' ')[0]}</span>
                </h1>
                <h2 className="mt-4 text-2xl sm:text-4xl font-semibold text-slate-700">
                    I am a <span className="text-red-500">{subtitle}</span>
                    <span className="inline-block w-1 h-8 sm:h-10 ml-1 bg-red-500 animate-pulse" aria-hidden="true"></span>
                </h2>
                <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6">
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-600 hover:text-red-600 transition-colors transform hover:scale-110">
                    <LinkedInIcon className="w-8 h-8" />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="text-slate-600 hover:text-red-600 transition-colors transform hover:scale-110">
                    <MailIcon className="w-9 h-9" />
                    </a>
                    <a href={`tel:+91${personalInfo.contact}`} aria-label="Phone" className="text-slate-600 hover:text-red-600 transition-colors transform hover:scale-110">
                    <PhoneIcon className="w-7 h-7" />
                    </a>
                </div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
                <DevGlobeIcon className="w-full max-w-md h-auto text-red-400" />
            </div>
        </div>
    </div>
  );
}


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        <Section id="about" title="About Me" animationDelay="delay-100">
          <BlobShape className="hidden md:block absolute -top-1/4 -left-32 w-[28rem] h-[28rem] text-red-200/50 -z-10 rotate-45 pointer-events-none" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed">{personalInfo.summary}</p>
          </div>
        </Section>
        
        <Section id="skills" title="My Skills" animationDelay="delay-200">
            <GridPattern className="hidden md:block absolute -bottom-20 -right-20 w-80 h-80 text-slate-300/60 -z-10 pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                    <Card key={category}>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{category}</h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {skills.map(skill => <SkillPill key={skill} skill={skill} />)}
                        </div>
                    </Card>
                ))}
                <Card>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {softSkills.map(skill => <SkillPill key={skill} skill={skill} />)}
                    </div>
                </Card>
            </div>
        </Section>
        
        <Section id="experience" title="Experience & Education" animationDelay="delay-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center gap-3">
                  <BriefcaseIcon className="w-7 h-7 text-red-500" />
                  Work Experience
              </h3>
              <Timeline items={experiences} />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center gap-3">
                    <AcademicCapIcon className="w-8 h-8 text-red-500" />
                    Education
                </h3>
                <Timeline items={education} />
            </div>
          </div>
        </section>
        
        <Section id="projects" title="My Projects" animationDelay="delay-400">
            <BlobShape className="hidden md:block absolute -bottom-1/3 -right-32 w-[28rem] h-[28rem] text-red-200/50 -z-10 -rotate-[30deg] pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project: Project, index) => (
                    <Card key={project.title}>
                      <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 bg-red-100 p-3 rounded-full text-red-500">
                              {index === 0 ? <CubeIcon className="w-7 h-7"/> : <BriefcaseIcon className="w-7 h-7"/>}
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                              <ul className="list-disc list-inside space-y-2 text-slate-600">
                                  {project.description.map((desc, i) => <li key={i}>{desc}</li>)}
                              </ul>
                          </div>
                      </div>
                    </Card>
                ))}
            </div>
        </Section>
        
        <Section id="certifications" title="Certifications" animationDelay="delay-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert: Certification) => (
                    <Card key={cert.name} className="text-center flex flex-col items-center justify-center p-8">
                        <div className="bg-red-100 p-3 rounded-full text-red-500 mb-4">
                            <SparklesIcon className="w-7 h-7"/>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{cert.name}</h3>
                        <p className="text-red-600 font-medium mt-1">{cert.issuer}</p>
                    </Card>
                ))}
            </div>
        </Section>
      </main>
      <footer className="bg-slate-800 text-slate-300 pt-16 sm:pt-24 fade-in delay-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="relative inline-block -mt-32 sm:-mt-40 mb-8">
                  <a href="#" className="block bg-red-500 text-white rounded-full p-3 shadow-lg hover:bg-red-600 transition-transform transform hover:-translate-y-1" aria-label="Back to top">
                      <ArrowUpIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </a>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-white">{personalInfo.name}</h3>
              <p className="mt-4 max-w-xl mx-auto text-slate-400">
                  Let's connect and build something amazing together. Feel free to reach out.
              </p>

              <div className="mt-8 flex items-center justify-center space-x-6">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-red-400 transition-colors transform hover:scale-110">
                      <LinkedInIcon className="w-7 h-7" />
                  </a>
                  <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="text-slate-400 hover:text-red-400 transition-colors transform hover:scale-110">
                      <MailIcon className="w-8 h-8" />
                  </a>
                  <a href={`tel:+91${personalInfo.contact}`} aria-label="Phone" className="text-slate-400 hover:text-red-400 transition-colors transform hover:scale-110">
                      <PhoneIcon className="w-6 h-6" />
                  </a>
              </div>

              <div className="mt-12 sm:mt-16 border-t border-slate-700 py-6">
                  <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Swati Ramesh Mishra. All rights reserved.</p>
              </div>
          </div>
      </footer>
    </>
  );
}

export default App;