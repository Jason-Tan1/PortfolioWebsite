import { useState } from "react";
import { Github, Linkedin, FileText, Building, MapPin } from "lucide-react";
import JasonTanResume from './assets/Jason_Tan_Resume.pdf';
import profilePic from './assets/profile.jpg';
import futureBuildingsLogo from './assets/FutureBuildings.png';
import lifeByDormLogo from './assets/lifebydorm-logo.png';
import langPalLogo from './assets/LangPal.png';
import yorkLogo from './assets/lassonde-logo.png';
import yuBlueprintLogo from './assets/YUBlueprint.png';

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = ["Home", "Experience", "Projects", "Goals", "Skills", "Reflections", "Contact"];

  return (
    <div className="container-narrow">
      <nav className="flex flex-wrap mb-16 space-x-6 text-lg gap-y-4">
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
        {activeTab === "Goals" && <Goals />}
        {activeTab === "Skills" && <Skills />}
        {activeTab === "Reflections" && <Reflections />}
        {activeTab === "Contact" && <Contact />}
      </main>
    </div>
  );
}

function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="flex-1">
        <p className="text-xl leading-relaxed mb-6">
          Hey! I am a Software Engineer studying Computer Science at York University. I am deeply passionate about full stack development, AI integration, and building backend infrastructure that solves real problems.
        </p>
        <p className="text-xl leading-relaxed mb-6">
          Currently, I work as a Software Engineer Intern at Future Buildings making backend systems that automate daily workflows. I also love building my own projects, like scaling my dorm review platform LifeByDorm for thousands of students or creating helpful AI tools. When I am not coding, I enjoy hitting the gym, playing basketball, or practicing guitar.
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
      </div>
      <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 overflow-hidden rounded-2xl shadow-sm border border-black/10">
        <img src={profilePic} alt="Jason Tan" className="w-full h-full object-cover" />
      </div>
    </div >
  );
}

function Experience() {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-2xl mb-6">Currently:</h2>

        <div className="mb-8 flex items-start gap-4">
          <img src={futureBuildingsLogo} alt="Future Buildings Logo" className="w-12 h-12 mt-1 object-contain" />
          <div>
            <p className="text-lg">
              <span className="font-bold text-foreground">Future Buildings & Toro Steel Buildings</span>
              <span className="text-muted ml-1">(May 2026 - Present)</span>
            </p>
            <div className="text-lg text-muted flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
              <span>Software Engineer Intern</span>
              <span className="text-muted/40 hidden sm:inline">•</span>
              <span className="flex items-center gap-1"><MapPin size={16} /> Greater Toronto Area, Canada</span>
            </div>
            <p className="text-lg text-muted mt-2">Developing backend APIs and internal tools to automate lead routing and workflows for 250+ sales reps and 3,500,000+ leads.</p>
          </div>
        </div>

        <div className="mb-4 flex items-start gap-4">
          <img src={lifeByDormLogo} alt="LifeByDorm Logo" className="w-12 h-12 mt-1 object-contain" />
          <div>
            <p className="text-lg"><span className="font-bold text-foreground">LifeByDorm</span> (Oct 2025 - Present)</p>
            <p className="text-lg text-muted">Founder</p>
            <p className="text-lg text-muted mt-2">Founded a student app for university housing reviews, managing all development and growth to reach 10,000+ active users across 100+ universities with 250+ authentic user reviews.</p>
            <a href="https://lifebydorm.ca" target="_blank" rel="noopener noreferrer" className="text-sm underline text-muted hover:text-foreground mt-2 inline-block">lifebydorm.ca</a>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl mb-6">Previously:</h2>

        <div className="mb-4 flex items-start gap-4">
          <img src={langPalLogo} alt="LangPal Logo" className="w-12 h-12 mt-1 object-contain" />
          <div>
            <p className="text-lg">
              <span className="font-bold text-foreground">LangPal</span>
              <span className="text-muted ml-1">(Feb 2026 - April 2026)</span>
            </p>
            <div className="text-lg text-muted flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
              <span>Software Engineer Intern</span>
              <span className="text-muted/40 hidden sm:inline">•</span>
              <span className="flex items-center gap-1"><MapPin size={16} /> Seattle, Washington</span>
            </div>
            <p className="text-lg text-muted mt-2">Contributed in developing FastAPI backend infrastructure and custom middleware to integrate real-time speech AI models into a Flutter-based language learning app.</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl mb-6">Education and Clubs:</h2>

        <div className="mb-8 flex items-start gap-4">
          <img src={yorkLogo} alt="York University Logo" className="w-12 h-12 mt-1 object-contain" />
          <div>
            <p className="text-lg">
              <span className="font-bold text-foreground">York University</span>
              <span className="text-muted ml-1">(Expected April 2028)</span>
            </p>
            <div className="text-lg text-muted flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
              <span>B.Sc. Computer Science (Honours)</span>
              <span className="text-muted/40 hidden sm:inline">•</span>
              <span className="flex items-center gap-1"><MapPin size={16} /> Toronto</span>
            </div>
          </div>
        </div>

        <div className="mb-4 flex items-start gap-4">
          <img src={yuBlueprintLogo} alt="YU Blueprint Logo" className="w-12 h-12 mt-1 object-contain" />
          <div>
            <p className="text-lg">
              <span className="font-bold text-foreground">YU Blueprint</span>
              <span className="text-muted ml-1">(Jan 2026 - Present)</span>
            </p>
            <div className="text-lg text-muted flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
              <span>Software Developer</span>
              <span className="text-muted/40 hidden sm:inline">•</span>
              <span className="flex items-center gap-1"><MapPin size={16} /> Toronto</span>
            </div>
            <p className="text-lg text-muted mt-2">Blueprint is a student-run organization that makes technology accessible to local non profit organizations and small businesses</p>
          </div>
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

function Goals() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">SMART Goals & Progress</h2>

      <div className="mb-12">
        <h3 className="text-xl font-bold text-foreground mb-4">1. Improving Communication in Professional Environments</h3>
        <p className="text-lg text-muted mb-2"><strong className="text-foreground">What:</strong> I want to improve how I communicate my thoughts and ideas in professional environments by speaking more clearly and confidently with coworkers and managers.</p>
        <p className="text-lg text-muted mb-2"><strong className="text-foreground">Why:</strong> Strong communication skills are important in professional settings for team discussions, project updates, and collaborating effectively with others. Improving this skill will help me contribute more confidently during meetings and explain my ideas more clearly.</p>
        <p className="text-lg text-muted mb-4"><strong className="text-foreground">How:</strong> I will volunteer to share updates and summaries during team meetings, organize project notes before discussions with coworkers or managers, and work with my team lead to practice presenting project progress professionally. I will also regularly ask coworkers and supervisors for feedback on my communication skills and personal growth throughout the work term.</p>
        <div className="bg-muted/10 p-4 rounded-lg">
          <p className="text-sm font-semibold text-foreground mb-1">Progress Update:</p>
          <p className="text-sm text-muted">Currently tracking progress by actively organizing my notes before daily standups and I have successfully volunteered to lead two project update meetings this month.</p>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-bold text-foreground mb-4">2. Asking the Right Questions</h3>
        <p className="text-lg text-muted mb-2"><strong className="text-foreground">What:</strong> I want to improve my ability to ask better and more effective questions when being assigned tasks or working through problems.</p>
        <p className="text-lg text-muted mb-2"><strong className="text-foreground">Why:</strong> I've noticed that while I do ask questions when given tasks, they are not always the right questions to fully understand the problem or expectations. Improving this skill will help me better understand tasks upfront, communicate more effectively with coworkers, and complete work more efficiently without wasting unnecessary time.</p>
        <p className="text-lg text-muted mb-4"><strong className="text-foreground">How:</strong> I will take time to think through tasks before asking questions, focus on clarifying requirements and expected outcomes, and ask coworkers or supervisors for feedback on whether my questions are effective. I will also practice summarizing my understanding of tasks during discussions to make sure I fully understand what needs to be done before starting work.</p>
        <div className="bg-muted/10 p-4 rounded-lg">
          <p className="text-sm font-semibold text-foreground mb-1">Progress Update:</p>
          <p className="text-sm text-muted">I have started writing down my questions before approaching my team lead and I am actively practicing summarizing task requirements back to them to ensure alignment.</p>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-bold text-foreground mb-4">3. Learning Practical, Real-World Skills</h3>
        <p className="text-lg text-muted mb-2"><strong className="text-foreground">What:</strong> I want to learn as many practical, real-world skills as possible that are relevant to my field and future career.</p>
        <p className="text-lg text-muted mb-2"><strong className="text-foreground">Why:</strong> While school provides important foundational knowledge, I believe many practical skills are learned through real-world experience and hands-on work. Developing these skills during my internship will help me better prepare for full-time roles after graduation and make it easier to apply my previous knowledge in professional environments.</p>
        <p className="text-lg text-muted mb-4"><strong className="text-foreground">How:</strong> I will actively take on new tasks and responsibilities, ask questions when learning unfamiliar processes, and observe how experienced coworkers approach real-world problems. I will also seek feedback regularly, document what I learn throughout the internship, and apply new skills in projects and day-to-day work whenever possible.</p>
        <div className="bg-muted/10 p-4 rounded-lg">
          <p className="text-sm font-semibold text-foreground mb-1">Progress Update:</p>
          <p className="text-sm text-muted">I'm currently documenting my learnings in a weekly journal and have taken on an unfamiliar backend routing task this sprint to push my practical knowledge.</p>
        </div>
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

function Reflections() {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Purpose of this ePortfolio</h2>
        <p className="text-lg text-muted mb-4">
          The primary purpose of this ePortfolio is to document my professional growth, technical journey, and hands-on experiences during my undergraduate studies and co-op terms. It serves as a comprehensive reflection of my skill development in software engineering, showcasing my ability to solve real-world problems, adapt to professional environments, and continuously learn. This portfolio is designed to present my achievements and competencies to future employers, academic coordinators, and professional contacts.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Reflections & Critiques</h2>
        <h3 className="text-xl font-bold text-foreground mb-4">Week 11 Final Reflection</h3>
        <p className="text-lg text-muted mb-4">
          Reflecting on my current co-op term, I have significantly improved my backend infrastructure skills and ability to integrate AI into production environments. One critique of my early work was that I often jumped into implementation without asking enough clarifying questions. As noted in my goals, I have actively worked on this by taking time to outline requirements and summarizing tasks back to my team lead before beginning development. This shift has drastically reduced rework and improved my communication within professional settings.
        </p>
        <p className="text-lg text-muted mb-4">
          Through continuous peer review and feedback, I have also learned the importance of writing maintainable, well-documented code. Moving forward, I aim to maintain this level of professionalism and intentionality in all my technical projects.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Undergraduate Competencies</h2>
        <div className="grid gap-4">
          <div className="bg-muted/10 p-4 rounded-lg">
            <h4 className="text-lg font-bold text-foreground mb-2">Technical Application & Problem Solving</h4>
            <p className="text-md text-muted">Demonstrated through my work at Future Buildings and my various hackathon projects (e.g., TenantShield, Happy Nutrition). I have applied classroom algorithms and data structures to real-world scalable applications.</p>
          </div>
          <div className="bg-muted/10 p-4 rounded-lg">
            <h4 className="text-lg font-bold text-foreground mb-2">Professional Communication</h4>
            <p className="text-md text-muted">Evidenced by my SMART goals tracking, where I actively led project update meetings and improved my professional dialogue with managers and peers.</p>
          </div>
          <div className="bg-muted/10 p-4 rounded-lg">
            <h4 className="text-lg font-bold text-foreground mb-2">Continuous Learning & Adaptability</h4>
            <p className="text-md text-muted">Shown through my initiative in learning new frameworks (FastAPI, Next.js) and integrating cutting-edge AI (Gemini, RAG models) into projects outside of standard coursework.</p>
          </div>
        </div>
      </div>
    </div>
  );
}