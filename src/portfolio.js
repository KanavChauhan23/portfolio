import emoji from "react-easy-emoji";

/* =================== SPLASH SCREEN =================== */
const splashScreen = {
  enabled: false,
  animation: null,
  duration: 2000,
};

/* =================== ILLUSTRATION =================== */
const illustration = {
  animated: true,
};

/* =================== HERO / GREETING =================== */
const greeting = {
  title: "Hello! I'm Kanav Chauhan 👋",
  subTitle: emoji(
    "AI & Full Stack Developer 🚀 | Building Smart Digital Products"
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=16wmeZ41b45X6tye57eGSu7mQlik5QNzl",
};

/* ===================== SOCIALS ===================== */
const socialMediaLinks = {
  github: "https://github.com/KanavChauhan23",
  linkedin: "https://www.linkedin.com/in/kanavchauhan23/",
  youtube: "https://youtube.com/@TranquilpathwayMindset",
  gmail: "kanavchauhan23@gmail.com",
};

/* =================== SKILLS =================== */
const skillsSection = {
  title: "Technical Skills",
  subTitle: "Full Stack, AI, Cloud & Web Technologies",

  skills: [
    emoji("⚡ Python | AI | Machine Learning"),
    emoji("⚡ HTML5, CSS3, Bootstrap, Streamlit"),
    emoji("⚡ APIs & Backend Integrations"),
    emoji("⚡ OpenAI, Groq AI, Google API"),
    emoji("⚡ Git & GitHub Workflow"),
    emoji("⚡ Problem Solving | Communication | Teamwork"),
  ],

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "logos:python" },
    { skillName: "HTML5", fontAwesomeClassname: "vscode-icons:file-type-html" },
    { skillName: "CSS3", fontAwesomeClassname: "vscode-icons:file-type-css" },
    { skillName: "Bootstrap", fontAwesomeClassname: "logos:bootstrap" },
    { skillName: "Streamlit", fontAwesomeClassname: "simple-icons:streamlit" },
    { skillName: "Git", fontAwesomeClassname: "logos:git" },
    { skillName: "AI APIs", fontAwesomeClassname: "logos:openai" },
  ],
};

/* =================== PROJECTS =================== */
const bigProjects = {
  title: "Projects Showcase",
  subtitle: "These are some of my real-world applications",

  projectCards: [
    {
      name: "SmartGhar AI",
      description:
        "AI-powered home renovation planner — provides design, layout, cost estimation and material suggestions.",
      tech: ["Python", "Streamlit", "AI APIs"],
      github: "https://github.com/KanavChauhan23/smartghar-ai",
      live: "https://smartghar-ai.streamlit.app/",
    },
    {
      name: "Free API Dev",
      description:
        "Free backend API service for developers — test endpoints and fetch data easily.",
      tech: ["HTML", "Python", "Render"],
      github: "https://github.com/KanavChauhan23/freeapidev",
      live: "https://freeapidev.onrender.com/",
    },
    {
      name: "AI Resume Analyzer",
      description:
        "AI-based system that analyzes resumes and offers suggestions for improvements.",
      tech: ["Python", "NLP", "Machine Learning", "Streamlit"],
      github: "https://github.com/KanavChauhan23/AI-Resume-Analyzer",
      live: "",
    },
    {
      name: "AI Chess Agent",
      description:
        "Intelligent chess-playing system using AI algorithms and strategy logic.",
      tech: ["Python", "Minimax", "Pygame"],
      github: "https://github.com/KanavChauhan23/ai_chess_agent",
      live: "https://chessbykanavchauhan.streamlit.app/",
    },
    {
      name: "AI Home Renovation Planner",
      description:
        "Home renovation planner with budget estimation and layout visualization.",
      tech: ["Python", "HTML", "CSS", "AI APIs", "Streamlit"],
      github:
        "https://github.com/KanavChauhan23/ai-home-renovation-planner",
      live: "https://ai-home-renovation-kanavchauhan.streamlit.app/",
    },
  ],
};

/* =================== EXPERIENCE =================== */
const workExperiences = {
  title: "Experience",
  experienceCards: [
    {
      role: "Web Designing Summer Trainee",
      company: "Solitaire Infosys Inc",
      duration: "May 2024 – Jun 2024",
      details: [
        "Completed a 3-week web designing program in collaboration with CGC Landran.",
        "Learned HTML, CSS, JavaScript, React fundamentals.",
        "Built responsive layouts and practical UI pages.",
      ],
    },
  ],
};

/* =================== CERTIFICATIONS =================== */
const certifications = {
  title: "Certifications & Courses",
  cards: [
    {
      title: "GPT-3 AI for Developers",
      issuer: "Infosys Springboard",
    },
    {
      title: "Cyber Security Awareness Quiz",
      issuer: "MyGov India",
    },
    {
      title: "CSS (Basic) Certificate",
      issuer: "HackerRank",
    },
    {
      title: "UiPath Automation",
      issuer: "UiPath Academy",
    },
    {
      title: "Software Conceptual Design",
      issuer: "NPTEL IIT Bombay",
    },
    {
      title: "AWS Academy Cloud Operations",
      issuer: "Amazon Web Services",
    },
    {
      title: "Computer Networking",
      issuer: "Scaler Academy",
    },
    {
      title: "Vertex AI Studio",
      issuer: "Google Cloud Skills Boost",
    },
    {
      title: "Oracle Cloud HCM Associate",
      issuer: "Oracle",
    },
  ],
};

/* =================== WHY HIRE ME =================== */
const whyHireMe = {
  title: "Why Hire Me?",
  points: [
    "Strong AI + Web Development Skills",
    "Fast Learner & Team Player",
    "Problem-Solving Mindset",
    "Good Communication & Professional Work Ethic",
    "Driven by Innovation & Quality",
  ],
};

/* =================== CONTACT =================== */
const contactInfo = {
  title: "Contact Me",
  subtitle: "Let’s build something great together!",
  email: "kanavchauhan23@gmail.com",
};

const isHireable = true;

/* =================== OPEN SOURCE =================== */
const openSource = {
  showGithubProfile: true,
  display: true,
};

/* =================== EDUCATION =================== */
const educationInfo = {
  display: true,

  schools: [
    {
      schoolName: "Chandigarh Group of Colleges, Landran",
      subHeader: "B.Tech in Computer Science Engineering",
      duration: "2022 - 2026",
      desc: "Focused on AI, Web Development, and Cloud Computing.",
      descBullets: [
        "Completed multiple real-world projects",
        "Continuously improving skills through online courses and practice",
      ],
    },
  ],
};


/* =================== TECH STACK =================== */
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "75%",
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "AI / ML",
      progressPercentage: "80%",
    },
  ],
  displayCodersrank: false,
};

/* =================== ACHIEVEMENTS =================== */
const achievementSection = {
  title: "Achievements & Certifications",
  subtitle: "My Certifications and Professional Learning",

  achievementsCards: [
    {
      title: "AWS Academy Cloud Operations",
      subtitle: "Amazon Web Services",
      footerLink: [
        {
          name: "Certificate",
          url: "",
        },
      ],
    },
    {
      title: "GPT-3 for Developers",
      subtitle: "Infosys Springboard",
      footerLink: [
        {
          name: "Certificate",
          url: "",
        },
      ],
    },
    {
      title: "NPTEL Software Conceptual Design",
      subtitle: "IIT Bombay",
      footerLink: [
        {
          name: "Certificate",
          url: "",
        },
      ],
    },
    {
      title: "NVIDIA AI on Jetson Nano",
      subtitle: "NVIDIA",
      footerLink: [
        {
          name: "Certificate",
          url: "",
        },
      ],
    },
  ],

  display: true,
};


/* =================== BLOGS =================== */
const blogSection = {
  title: "Blogs",
  subtitle: "Coming soon...",
  displayMediumBlogs: false,
  blogs: [],
  display: false,
};

/* =================== TALKS =================== */
const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false,
};

/* =================== PODCAST =================== */
const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false,
};

/* =================== RESUME SECTION =================== */
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true,
};

/* =================== TWITTER =================== */
const twitterDetails = {
  userName: "",
  display: false,
};

export {
  illustration,
  splashScreen,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  resumeSection,
  twitterDetails,
  certifications,
  whyHireMe,
  contactInfo,
  isHireable,
};


