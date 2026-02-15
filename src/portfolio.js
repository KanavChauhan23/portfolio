/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kanav Chauhan",
  title: "Hi all, I'm Kanav",
  subTitle: emoji(
    "A passionate AI & Full Stack Developer 🚀 building smart digital products with Python / HTML / CSS / Streamlit / AI APIs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=16wmeZ41b45X6tye57eGSu7mQlik5QNzl", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KanavChauhan23",
  linkedin: "https://www.linkedin.com/in/kanavchauhan23/",
  gmail: "kanavchauhan23@gmail.com",
  youtube: "https://youtube.com/@TranquilpathwayMindset",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI & FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop AI-powered applications with Python and modern AI APIs"
    ),
    emoji("⚡ Build responsive web applications with HTML5, CSS3, Bootstrap, and Streamlit"),
    emoji(
      "⚡ Integration of third party services such as OpenAI, Groq AI, and Google APIs"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Chandigarh Group of Colleges, Landran",
      logo: require("./assets/images/stanfordLogo.png"), // You can replace with your college logo
      subHeader: "B.Tech in Computer Science Engineering",
      duration: "2022 - 2026",
      desc: "Focused on AI, Web Development, and Cloud Computing.",
      descBullets: [
        "Completed multiple real-world projects in AI and web development",
        "Continuously improving skills through online courses and practice"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "AI / ML",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Designing Summer Trainee",
      company: "Solitaire Infosys Inc",
      companylogo: require("./assets/images/quoraLogo.png"), // You can replace with actual company logo
      date: "May 2024 – Jun 2024",
      desc: "Completed a 3-week web designing program in collaboration with CGC Landran.",
      descBullets: [
        "Learned HTML, CSS, JavaScript, React fundamentals",
        "Built responsive layouts and practical UI pages"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: false // HIDDEN - Set to false to hide this section
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "REAL-WORLD APPLICATIONS THAT I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "SmartGhar AI",
      projectDesc: "AI-powered home renovation planner — provides design, layout, cost estimation and material suggestions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://smartghar-ai.streamlit.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/KanavChauhan23/smartghar-ai"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Free API Dev",
      projectDesc: "Free backend API service for developers — test endpoints and fetch data easily.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://freeapidev.onrender.com/"
        },
        {
          name: "GitHub",
          url: "https://github.com/KanavChauhan23/freeapidev"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "AI Resume Analyzer",
      projectDesc: "AI-based system that analyzes resumes and offers suggestions for improvements using NLP and Machine Learning.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/KanavChauhan23/AI-Resume-Analyzer"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "AI Chess Agent",
      projectDesc: "Intelligent chess-playing system using AI algorithms, Minimax strategy, and Pygame for visualization.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://chessbykanavchauhan.streamlit.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/KanavChauhan23/ai_chess_agent"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "AI Home Renovation Planner",
      projectDesc: "Home renovation planner with budget estimation and layout visualization powered by AI.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ai-home-renovation-kanavchauhan.streamlit.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/KanavChauhan23/ai-home-renovation-planner"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Academy Cloud Operations",
      subtitle:
        "Successfully completed AWS Academy Cloud Operations certification from Amazon Web Services.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "GPT-3 AI for Developers",
      subtitle:
        "Completed advanced certification course on GPT-3 AI development from Infosys Springboard.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Infosys Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "NPTEL Software Conceptual Design",
      subtitle: "Completed certification from IIT Bombay on Software Conceptual Design principles.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "NPTEL Logo",
      footerLink: [
        {name: "Certification", url: ""}
      ]
    },
    {
      title: "NVIDIA AI on Jetson Nano",
      subtitle: "Completed NVIDIA certification on AI development using Jetson Nano platform.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "NVIDIA Logo",
      footerLink: [
        {name: "Certification", url: ""}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // HIDDEN - Set false to hide this section
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // HIDDEN - Set false to hide this section
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-XXXXXXXXXX", // Add your phone number here
  email_address: "kanavchauhan23@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
