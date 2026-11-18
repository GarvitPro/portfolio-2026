export interface ExperienceEntry {
  id: string;
  index: string;
  organization: string;
  shortName: string;
  role: string;
  duration: string;
  location: string;
  theme: "dark" | "paper";
  editorialType: "network" | "vision" | "blueprint" | "data";
  visualCaption: string;
  responsibilities: string[];
  skillsDemonstrated: string[];
}

export const experiencesData: ExperienceEntry[] = [
  {
    id: "inventic-ai",
    index: "01",
    organization: "Inventic.ai",
    shortName: "INVENTIC.AI",
    role: "AI Engineer Intern",
    duration: "October 2026 – Present",
    location: "Remote",
    theme: "dark",
    editorialType: "network",
    visualCaption:
      "FIG 03.A — ARTISTIC REPRESENTATION OF INTERCONNECTED AI INFERENCE & EXPERIMENTATION WORKFLOWS",
    responsibilities: [
      "Contributing to the development and implementation of AI-based solutions for practical applications and real-world challenges.",
      "Exploring and applying emerging artificial intelligence technologies.",
      "Working on AI projects requiring technical problem-solving, experimentation, and iterative improvement.",
      "Gaining practical experience in a remote AI engineering environment.",
    ],
    skillsDemonstrated: [
      "Artificial Intelligence",
      "Applied AI Engineering",
      "Technical Experimentation",
      "Iterative Prototyping",
      "Problem-Solving",
    ],
  },
  {
    id: "drdo-irde",
    index: "02",
    organization: "Defence Research and Development Organisation — IRDE",
    shortName: "DRDO — IRDE",
    role: "AI & Computer Vision Intern",
    duration: "June 2026 – July 2026",
    location: "Dehradun, Uttarakhand",
    theme: "paper",
    editorialType: "vision",
    visualCaption:
      "FIG 03.B — ILLUSTRATIVE CONCEPT DIAGRAM OF IMAGE PREPROCESSING & SUPER-RESOLUTION PIPELINE STAGES (NON-CONFIDENTIAL SCHEMATIC)",
    responsibilities: [
      "Developed a Python-based image-processing pipeline to preprocess and enhance underwater periscope imagery.",
      "Evaluated image restoration and super-resolution techniques under varying image conditions.",
      "Compared experimental outputs to assess processing quality and validate workflows.",
      "Identified suitable image-enhancement approaches through structured experimentation.",
      "Collaborated with research team members to translate technical requirements into image-processing workflows.",
    ],
    skillsDemonstrated: [
      "Python",
      "Image Processing",
      "Computer Vision",
      "Image Restoration",
      "Experimental Evaluation",
      "Technical Research",
    ],
  },
  {
    id: "greenheck",
    index: "03",
    organization: "Greenheck Pvt. Ltd.",
    shortName: "GREENHECK",
    role: "Product & Systems Intern",
    duration: "December 2025 – January 2026",
    location: "Gurugram, Haryana",
    theme: "dark",
    editorialType: "blueprint",
    visualCaption:
      "FIG 03.C — ABSTRACT BLUEPRINT OF RULE-BASED ERP VALIDATION & BOM DECISION LOGIC",
    responsibilities: [
      "Analyzed SAP ERP workflows and applied rule-based validation logic to support data consistency.",
      "Performed root-cause analysis of Bill of Materials configuration issues.",
      "Identified recurring data-validation gaps and workflow issues.",
      "Designed and tested decision logic for manufacturing configuration scenarios.",
      "Collaborated with engineering stakeholders to translate business requirements into structured validation workflows.",
    ],
    skillsDemonstrated: [
      "SAP ERP",
      "Enterprise Systems",
      "Business Process Analysis",
      "BOM",
      "Data Validation",
      "Root Cause Analysis",
      "Rule-Based Systems",
    ],
  },
  {
    id: "sambandh",
    index: "04",
    organization: "Sambandh Health Foundation",
    shortName: "SAMBANDH",
    role: "Operations & Data Intern",
    duration: "June 2025",
    location: "Gurugram, Haryana",
    theme: "paper",
    editorialType: "data",
    visualCaption:
      "FIG 03.D — ILLUSTRATIVE DATA-JOURNALISM GRAPHIC DEPICTING MULTI-SOURCE CLEANING & EDA PIPELINE",
    responsibilities: [
      "Cleaned, transformed, and organized data collected from multiple sources.",
      "Improved data quality for reporting and operational analysis.",
      "Conducted exploratory data analysis.",
      "Investigated data inconsistencies and reporting bottlenecks using root-cause analysis.",
      "Supported structured reporting and data-informed operational decision-making.",
    ],
    skillsDemonstrated: [
      "Data Cleaning",
      "EDA",
      "Data Quality",
      "Operational Analytics",
      "Reporting",
      "Root Cause Analysis",
    ],
  },
];
