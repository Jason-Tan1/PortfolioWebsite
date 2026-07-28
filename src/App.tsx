import { useState } from "react";
import { Github, Linkedin, FileText, Building } from "lucide-react";
import JasonTanResume from './assets/Jason_Tan_Resume.pdf';

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = ["Home", "Experience", "Projects", "Skills", "Contact"];

  return (
    <div className="container-narrow">
      <nav className="flex mb-16 space-x-6 text-lg">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`transition-colors relative flex flex-col items-center justify-center ${activeTab === item ? 'text-foreground' : 'text-muted hover:text-foreground'}`}
          >
            <span className={`${activeTab === item ? 'font-medium' : ''}`}>{item}</span>
            <span className="font-medium invisible h-0 block overflow-hidden" aria-hidden="true">{item}</span>
          </button>
        ))}
      </nav>

      <main className="animate-in fade-in duration-500">
        <h1 className="text-5xl font-extrabold tracking-tight mb-10">Jason Tan</h1>
        {activeTab === "Home" && <Home />}
        {activeTab === "Experience" && <Experience />}
        {activeTab === "Projects" && <Projects />}
        {activeTab === "Skills" && <Skills />}
        {activeTab === "Contact" && <Contact />}
      </main>
    </div>
  );
}

function Home() {
  return (
    <div>
      <p className="text-xl leading-relaxed mb-6">
        Hey! I am a Software Engineer studying Computer Science at York University. I am deeply passionate about full stack development, AI integration, and building backend infrastructure that solves real problems.
      </p>
      <p className="text-xl leading-relaxed mb-6">
        Currently, I work as a Software Engineer Intern at Future Buildings making backend systems that automate daily workflows. I also love building my own projects, like scaling my housing platform LifeByDorm for thousands of students or creating helpful AI tools. When I am not coding, I enjoy hitting the gym, playing basketball, or practicing guitar.
      </p>
      <div className="flex space-x-8 text-lg">
        <a href="https://github.com/Jason-Tan1" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-foreground transition-colors">
          <Github size={18} />
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/jasontan5" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-foreground transition-colors">
          <Linkedin size={18} />
          <span>LinkedIn</span>
        </a>
        <a href={JasonTanResume} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-foreground transition-colors">
          <FileText size={18} />
          <span>Resume</span>
        </a>
      </div>
    </div >
  );
}

function Experience() {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-2xl mb-6">Currently:</h2>

        <div className="mb-8">
          <p className="text-lg"><span className="font-bold text-foreground">Future Buildings & Toro Steel Buildings</span> (May 2026 - Present)</p>
          <p className="text-lg text-muted">Software Engineer Intern</p>
          <p className="text-lg text-muted mt-2">Developing backend APIs and internal tools to automate lead routing and workflows for 250+ sales reps and 3,500,000+ leads.</p>
        </div>

        <div className="mb-4">
          <p className="text-lg"><span className="font-bold text-foreground">LifeByDorm</span> (Oct 2025 - Present)</p>
          <p className="text-lg text-muted">Founder</p>
          <p className="text-lg text-muted mt-2">Founded a student app for university housing reviews, managing all development and growth to reach 8,000+ active users across 100+ universities with 150+ authentic user reviews.</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl mb-6">Previously:</h2>

        <div className="mb-4">
          <p className="text-lg"><span className="font-bold text-foreground">LangPal</span> (Feb 2026 - April 2026)</p>
          <p className="text-lg text-muted">Software Engineer Intern</p>
          <p className="text-lg text-muted mt-2">Contributed in developing FastAPI backend infrastructure and custom middleware to integrate real-time speech AI models into a Flutter-based language learning app.</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl mb-6">Education and Clubs:</h2>

        <div className="mb-8">
          <p className="text-lg"><span className="font-bold text-foreground">York University</span> (Expected April 2028)</p>
          <p className="text-lg text-muted">B.Sc. Computer Science (Honours)</p>
        </div>

        <div className="mb-4">
          <p className="text-lg"><span className="font-bold text-foreground">YU Blueprint</span> (Jan 2026 - Present)</p>
          <p className="text-lg text-muted">Software Developer</p>
          <p className="text-lg text-muted mt-2">Blueprint is a student-run organization that makes technology accessible to local non profit organizations and small businesses</p>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <div className="mb-12">
        <p className="text-lg"><span className="font-bold text-foreground">Happy Nutrition Academy</span> (Riipen Advanced Ontario)</p>
        <p className="text-lg text-muted mb-2">Engineered a full-scale migration to a custom full-stack application with an integrated RAG-based AI chatbot to deliver personalized nutritional solutions.</p>
      </div>

      <div className="mb-12">
        <p className="text-lg"><span className="font-bold text-foreground">TenantShield</span> (1st Place & Best Use of Gemini, York University Hackathon)</p>
        <p className="text-lg text-muted mb-2">Built an AI-powered application that automates real-time detection of unsafe housing conditions using computer vision and LLMs.</p>
        <a href="https://github.com/Jason-Tan1/TenantShield" target="_blank" rel="noopener noreferrer" className="text-sm underline text-muted hover:text-foreground">View Project</a>
      </div>

      <div className="mb-12">
        <p className="text-lg"><span className="font-bold text-foreground">Visual Debugger</span> (CTRL HACK DEL 2026, York University Hackathon)</p>
        <p className="text-lg text-muted mb-2">Published an open-source VS Code extension utilizing the Gemini API as an intelligent agent to catch runtime errors and automate code fixes.</p>
        <a href="https://github.com/Jason-Tan1/VisualDebugger" target="_blank" rel="noopener noreferrer" className="text-sm underline text-muted hover:text-foreground">View Source</a>
      </div>

      <div className="mb-12">
        <p className="text-lg"><span className="font-bold text-foreground">OutTheGroupChat</span> (NewHacks 2025, University of Toronto Hackathon)</p>
        <p className="text-lg text-muted mb-2">Developed a collaborative AI-driven itinerary planner that helps groups organize trips using the Gemini API and ElevenLabs for voice summaries.</p>
        <a href="https://github.com/Jason-Tan1/OutTheGroupChat" target="_blank" rel="noopener noreferrer" className="text-sm underline text-muted hover:text-foreground">View Source</a>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Languages:</h2>
        <p className="text-lg text-muted">Java, TypeScript, JavaScript, Python, C, SQL, HTML/CSS</p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frameworks:</h2>
        <p className="text-lg text-muted">Node.js, React.js, Express.js, FastAPI, Next.js, React Native, Tailwind CSS</p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tools/Cloud:</h2>
        <p className="text-lg text-muted">RESTful APIs, Git, Jira, AWS (EC2, RDS, Lambda, S3), PostgreSQL, JUnit, Agile</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <p className="text-lg text-muted mb-8 leading-relaxed">
        I'm always looking for new opportunities to build impactful products. Whether you want to collaborate on a project or discuss a potential role, my inbox is always open. Let's connect!
      </p>
      <div className="space-y-2">
        <p className="text-lg">
          Email: <a href="mailto:jasontanwork1@gmail.com" className="underline hover:text-foreground transition-colors">jasontanwork1@gmail.com</a>
        </p>
      </div>
    </div>
  );
}