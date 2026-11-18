export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  monogram: string;
  issueLabel: string;
  domainTriad: string;
  primaryHeadline: string;
  supportingHeadline: string;
  hometown: string;
  institution: string;
  institutionShort: string;
  institutionLocation: string;
  degree: string;
  expectedGraduation: string;
  cgpa: string;
  aboutHeading: string;
  aboutSubheading: string;
  aboutParagraphs: string[];
  educationQuote: string;
  contactHeading: string;
  contactCopy: string[];
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  technicalInterests: string[];
}

export const profileData: ProfileData = {
  name: "Garvit Arora",
  firstName: "GARVIT",
  lastName: "ARORA.",
  monogram: "GA.",
  issueLabel: "PERSONAL PORTFOLIO / 2026—27",
  domainTriad: "AI ENGINEERING × SOFTWARE × BUSINESS",
  primaryHeadline: "I BUILD THINGS THAT THINK.",
  supportingHeadline:
    "Exploring the space between artificial intelligence, engineering, and real-world impact.",
  hometown: "Gurugram, Haryana, India",
  institution: "SRM Institute of Science and Technology",
  institutionShort: "SRMIST KTR",
  institutionLocation: "Kattankulathur, Tamil Nadu, India",
  degree: "B.Tech in Computer Science and Business Systems",
  expectedGraduation: "2027",
  cgpa: "9.11/10",
  aboutHeading: "MORE THAN JUST CODE.",
  aboutSubheading:
    "Curious about the intelligence behind technology — and the business opportunities it creates.",
  aboutParagraphs: [
    "I'm Garvit Arora, a Computer Science and Business Systems undergraduate at SRM Institute of Science and Technology, Kattankulathur.",
    "Born and raised in Gurugram, Haryana, I've always been interested in the connection between technology and business — especially how artificial intelligence can turn ideas into useful, impactful solutions.",
    "My journey has taken me through AI engineering, computer vision research, enterprise systems, data analytics, and software development.",
    "Through internships and personal projects, I've explored the technical and practical challenges of building intelligent systems.",
    "I'm particularly interested in AI engineering, software development, product innovation, and opportunities that combine technical problem-solving with business thinking.",
  ],
  educationQuote:
    "My academic foundation combines computer science, analytical problem-solving, and business systems — an intersection that continues to shape how I approach technology.",
  contactHeading: "LET'S BUILD SOMETHING MEANINGFUL.",
  contactCopy: [
    "I'm interested in opportunities involving artificial intelligence, software engineering, data-driven problem-solving, and technology-led business innovation.",
    "Whether you're a recruiter, an engineer, or someone working on an ambitious idea, I'd be glad to connect.",
  ],
  email: "garvit286@gmail.com",
  github: "https://github.com/GarvitPro",
  linkedin: "https://www.linkedin.com/in/garvit-arora2005",
  resumeUrl: "/resume/Garvit_Arora_Resume_Sanitized.pdf",
  technicalInterests: [
    "Artificial Intelligence & Deep Learning",
    "Computer Vision & Image Processing",
    "Full-Stack Software Engineering",
    "Enterprise Systems & Decision Logic",
    "Applied Machine Learning & Analytics",
  ],
};
