import { useState } from "react";
import { Github, Linkedin, FileText, Building, MapPin } from "lucide-react";
import JasonTanResume from './assets/Jason_Tan_Resume.pdf';
import profilePic from './assets/profile.jpg';
import futureBuildingsLogo from './assets/FutureBuildings.png';
import eqBankLogo from './assets/eq bank.jpg';
import lifeByDormLogo from './assets/lifebydorm-logo.png';
import langPalLogo from './assets/LangPal.png';
import yorkLogo from './assets/lassonde-logo.png';
import yuBlueprintLogo from './assets/YUBlueprint.png';

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = ["Home", "Experience", "Projects", "Timeline", "Skills", "Contact"];

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
        {activeTab === "Timeline" && <Timeline />}
        {activeTab === "Skills" && <Skills />}
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
          Currently, I am a Software Engineer Intern at EQ Bank for September 2026 to April 2027. I also love building my own projects, like scaling my dorm review platform LifeByDorm for thousands of students or creating helpful AI tools. When I am not coding, I enjoy hitting the gym, playing basketball, or practicing guitar.
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
          <img src={eqBankLogo} alt="EQ Bank Logo" className="w-12 h-12 mt-1 object-contain rounded-md" />
          <div>
            <p className="text-lg">
              <span className="font-bold text-foreground">EQ Bank</span>
              <span className="text-muted ml-1">(September 2026 - Present)</span>
            </p>
            <div className="text-lg text-muted flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
              <span>Software Engineer Intern</span>
              <span className="text-muted/40 hidden sm:inline">•</span>
              <span className="flex items-center gap-1"><MapPin size={16} /> Toronto, Canada</span>
            </div>
            <p className="text-lg text-muted mt-2">Incoming Software Engineer Intern for September 2026 to April 2027.</p>
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

        <div className="mb-8 flex items-start gap-4">
          <img src={futureBuildingsLogo} alt="Future Buildings Logo" className="w-12 h-12 mt-1 object-contain" />
          <div>
            <p className="text-lg">
              <span className="font-bold text-foreground">Future Buildings & Toro Steel Buildings</span>
              <span className="text-muted ml-1">(May 2026 - Aug 2026)</span>
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



function Timeline() {
  const events = [
    {
      year: "2022",
      title: "Grade 10: First Line of Code",
      description: "Took my first coding class in Grade 10, learning the absolute basics of HTML and CSS."
    },
    {
      year: "2023",
      title: "Grade 11: The Struggle",
      description: "Almost failed my Grade 11 programming class and seriously thought coding just wasn't for me."
    },
    {
      year: "Summer 2023",
      title: "Grade 11: The Turning Point",
      description: "Retook programming over the summer. Things finally clicked, and started to fall in love with programming."
    },
    {
      year: "Early 2024",
      title: "Grade 12",
      description: "Took programming again in Grade 12, had a blast, and created a fully visual Blackjack game."
    },
    {
      year: "Fall 2024",
      title: "Started University",
      description: "Began my CS Degree at York University and moved out of my hometown all the way to Toronto."
    },
    {
      year: "2024",
      title: "Zero Motivation",
      description: "Had no motivation, drive, or passion to do anything outside of school. Was actually thinking of switching majors because the state of Computer Science"
    },
    {
      year: "2025",
      title: "Start of 2nd Year University",
      description: "Made a promise to myself I would change my habits and do whatever it takes to achieve my goals"
    },
    {
      year: "Fall 2025",
      title: "First Hackathon",
      description: "Participated in my first hackathon at UofT during the start of 2nd year, which is where I found my spark and fell in love with doing hackathons."
    },
    {
      year: "Fall 2025",
      title: "Won my First Hackathon",
      description: "Was able to get both 1st Place and \"Best Use of Gemini\" in the same hackathon, which really helped boost my confidence and motivation."
    },
    {
      year: "2025",
      title: "Founded LifeByDorm",
      description: "Launched a student app for university housing reviews eventually reaching 10k+ users across Canada.",
      link: { url: "https://lifebydorm.ca", label: "lifebydorm.ca" }
    },
    {
      year: "Winter 2026",
      title: "Internship at Startup",
      description: "Joined a startup based in Seattle Washington where I learnt a lot about working in a fast-paced startup environment, and overall gained lot's of experience."
    },
    {
      year: "Winter 2026",
      title: "The Grind",
      description: "The internship search was brutal. I sent out 500+ applications, faced rejection after rejection, attended several hackathons, and heavily networked. In the final week of my 2nd year, it finally paid off."
    },
    {
      year: "Summer 2026",
      title: "1st Co-op",
      description: "Joined Future Buildings as a Software Engineer Intern, where I learnt alot about integration and backend development. Lots of personal growth!"
    }, {
      year: "Summer 2026",
      title: "Another Search",
      description: "Only sent out ~50 applications, got multiple interviews across a variety of large companies and landed an offer!"
    },
    {
      year: "September 2026 - April 2027",
      title: "2nd Co-op",
      description: "Joining EQ Bank to build and scale AI systems in Downtown Toronto!"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="mb-12">
        {/* Alternating Center Timeline */}
        <div className="relative py-8 z-0">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black/20 via-black/20 to-transparent md:-translate-x-1/2 -z-10"></div>

          <div className="space-y-12">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center justify-between w-full group">
                  {/* Event Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-background border-[3px] border-foreground -translate-x-1/2 z-10 transition-all duration-300 group-hover:bg-foreground group-hover:scale-125"></div>

                  {/* Left Side (Desktop only) */}
                  <div className={`hidden md:flex w-1/2 pr-12 flex-col items-end text-right transition-all duration-300 ${!isLeft ? 'invisible' : ''}`}>
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider uppercase border border-foreground/10 rounded-full bg-foreground/5 text-foreground/70">
                      {event.year}
                    </span>
                    <h3 className="font-bold text-xl text-foreground leading-tight">{event.title}</h3>
                    <p className="text-md text-muted mt-2 leading-relaxed">{event.description}</p>
                    {event.link && (
                      <a href={event.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-sm text-foreground/50 hover:text-foreground transition-colors underline underline-offset-2">
                        {event.link.label} →
                      </a>
                    )}
                  </div>

                  {/* Right Side (Desktop and Mobile) */}
                  <div className={`w-full pl-[60px] md:w-1/2 md:pl-12 flex flex-col items-start text-left transition-all duration-300 ${isLeft ? 'md:invisible' : ''}`}>
                    <div className={isLeft ? "block md:hidden" : "block"}>
                      <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider uppercase border border-foreground/10 rounded-full bg-foreground/5 text-foreground/70">
                        {event.year}
                      </span>
                      <h3 className="font-bold text-xl text-foreground leading-tight">{event.title}</h3>
                      <p className="text-md text-muted mt-2 leading-relaxed">{event.description}</p>
                      {event.link && (
                        <a href={event.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-sm text-foreground/50 hover:text-foreground transition-colors underline underline-offset-2">
                          {event.link.label} →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Journey Continues Indicator */}
            <div className="relative flex items-center justify-center w-full pt-8 pb-4">
              <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-background border-[2px] border-dashed border-foreground/50 -translate-x-1/2 z-10 animate-[spin_6s_linear_infinite]"></div>

              <div className="w-full text-center md:pl-0 pl-[60px] md:mt-12 mt-0 text-left md:text-center">
                <span className="text-muted/70 italic font-serif text-lg tracking-wide">...and the journey continues</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}