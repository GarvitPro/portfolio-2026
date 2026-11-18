export interface SkillItem {
  name: string;
  source: "resume" | "project" | "both";
  linkedProjectSlug?: string;
  linkedProjectTitle?: string;
  linkedExperience?: string;
}

export interface SkillCategory {
  id: string;
  index: string;
  title: string;
  coordinates: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    index: "01",
    title: "Programming Languages",
    coordinates: "SECTOR 01 // CORE SYNTAX",
    skills: [
      {
        name: "Python",
        source: "both",
        linkedProjectSlug: "self-pruning-neural-network",
        linkedProjectTitle: "Self-Pruning Neural Network, Fraud Detection & DeepSafe",
        linkedExperience: "DRDO — IRDE & Inventic.ai",
      },
      {
        name: "Java",
        source: "resume",
      },
      {
        name: "SQL",
        source: "both",
        linkedProjectSlug: "fitness-lifestyle-impact-analyzer",
        linkedProjectTitle: "Fitness Lifestyle Impact Analyzer",
      },
      {
        name: "C++",
        source: "resume",
      },
    ],
  },
  {
    id: "ml-ai",
    index: "02",
    title: "Machine Learning & Artificial Intelligence",
    coordinates: "SECTOR 02 // INTELLIGENT SYSTEMS",
    skills: [
      {
        name: "PyTorch",
        source: "project",
        linkedProjectSlug: "self-pruning-neural-network",
        linkedProjectTitle: "Self-Pruning Neural Network",
      },
      {
        name: "TensorFlow",
        source: "project",
        linkedProjectSlug: "deepsafe",
        linkedProjectTitle: "DeepSafe",
      },
      {
        name: "Scikit-learn",
        source: "both",
        linkedProjectSlug: "credit-card-fraud-detection",
        linkedProjectTitle: "Credit Card Fraud Detection",
      },
      {
        name: "OpenCV",
        source: "project",
        linkedProjectSlug: "deepsafe",
        linkedProjectTitle: "DeepSafe",
      },
      {
        name: "Random Forest",
        source: "both",
        linkedProjectSlug: "credit-card-fraud-detection",
        linkedProjectTitle: "Credit Card Fraud Detection",
      },
      {
        name: "Classification",
        source: "both",
        linkedProjectSlug: "credit-card-fraud-detection",
        linkedProjectTitle: "Credit Card Fraud Detection & CIFAR-10 Pruning",
      },
      {
        name: "SMOTE",
        source: "both",
        linkedProjectSlug: "credit-card-fraud-detection",
        linkedProjectTitle: "Credit Card Fraud Detection",
      },
      {
        name: "Model Evaluation",
        source: "both",
        linkedProjectSlug: "self-pruning-neural-network",
        linkedProjectTitle: "Self-Pruning NN & Credit Card Fraud Detection",
      },
      {
        name: "Computer Vision",
        source: "both",
        linkedProjectSlug: "deepsafe",
        linkedProjectTitle: "DeepSafe",
        linkedExperience: "DRDO — IRDE",
      },
      {
        name: "Deep Learning",
        source: "both",
        linkedProjectSlug: "self-pruning-neural-network",
        linkedProjectTitle: "Self-Pruning Neural Network & DeepSafe",
      },
      {
        name: "Generative AI",
        source: "resume",
        linkedExperience: "Inventic.ai & SAP Generative AI Track",
      },
    ],
  },
  {
    id: "data-analytics",
    index: "03",
    title: "Data Analytics",
    coordinates: "SECTOR 03 // ANALYTICAL RIGOR",
    skills: [
      {
        name: "Data Cleaning",
        source: "resume",
        linkedExperience: "Sambandh Health Foundation",
      },
      {
        name: "Data Preprocessing",
        source: "both",
        linkedProjectSlug: "credit-card-fraud-detection",
        linkedProjectTitle: "Credit Card Fraud Detection & DeepSafe",
      },
      {
        name: "Exploratory Data Analysis",
        source: "both",
        linkedProjectSlug: "credit-card-fraud-detection",
        linkedProjectTitle: "Credit Card Fraud Detection",
        linkedExperience: "Sambandh Health Foundation",
      },
      {
        name: "Data Quality Validation",
        source: "resume",
        linkedExperience: "Greenheck Pvt. Ltd. & Sambandh",
      },
      {
        name: "Root Cause Analysis",
        source: "resume",
        linkedExperience: "Greenheck Pvt. Ltd. & Sambandh",
      },
      {
        name: "Business Data Analysis",
        source: "resume",
        linkedExperience: "Greenheck Pvt. Ltd.",
      },
    ],
  },
  {
    id: "data-visualization",
    index: "04",
    title: "Data Visualization",
    coordinates: "SECTOR 04 // VISUAL REPORTING",
    skills: [
      {
        name: "Tableau",
        source: "both",
        linkedProjectSlug: "fitness-lifestyle-impact-analyzer",
        linkedProjectTitle: "Fitness Lifestyle Impact Analyzer",
      },
      {
        name: "Excel",
        source: "resume",
      },
      {
        name: "Dashboard Development",
        source: "both",
        linkedProjectSlug: "atomquest",
        linkedProjectTitle: "AtomQuest & Fitness Lifestyle Impact Analyzer",
      },
      {
        name: "Visual Reporting",
        source: "both",
        linkedProjectSlug: "fitness-lifestyle-impact-analyzer",
        linkedProjectTitle: "Fitness Lifestyle Impact Analyzer",
      },
    ],
  },
  {
    id: "databases-enterprise",
    index: "05",
    title: "Databases & Enterprise Systems",
    coordinates: "SECTOR 05 // ENTERPRISE ARCHITECTURE",
    skills: [
      {
        name: "SQL",
        source: "both",
        linkedProjectSlug: "fitness-lifestyle-impact-analyzer",
        linkedProjectTitle: "Fitness Lifestyle Impact Analyzer",
      },
      {
        name: "PostgreSQL",
        source: "project",
        linkedProjectSlug: "fitness-lifestyle-impact-analyzer",
        linkedProjectTitle: "Fitness Lifestyle Impact Analyzer",
      },
      {
        name: "Relational Database Design",
        source: "both",
        linkedProjectSlug: "fitness-lifestyle-impact-analyzer",
        linkedProjectTitle: "Fitness Lifestyle Impact Analyzer",
      },
      {
        name: "SAP ERP",
        source: "resume",
        linkedExperience: "Greenheck Pvt. Ltd.",
      },
      {
        name: "Bill of Materials",
        source: "resume",
        linkedExperience: "Greenheck Pvt. Ltd.",
      },
    ],
  },
  {
    id: "dev-tools-web",
    index: "06",
    title: "Developer Tools & Project-Demonstrated Stack",
    coordinates: "SECTOR 06 // FULL-STACK & TOOLING",
    skills: [
      {
        name: "Next.js",
        source: "project",
        linkedProjectSlug: "atomquest",
        linkedProjectTitle: "AtomQuest",
      },
      {
        name: "React",
        source: "project",
        linkedProjectSlug: "atomquest",
        linkedProjectTitle: "AtomQuest & Fitness Lifestyle Impact Analyzer",
      },
      {
        name: "TypeScript",
        source: "project",
        linkedProjectSlug: "atomquest",
        linkedProjectTitle: "AtomQuest & Fitness Lifestyle Impact Analyzer",
      },
      {
        name: "Node.js",
        source: "project",
        linkedProjectSlug: "fitness-lifestyle-impact-analyzer",
        linkedProjectTitle: "Fitness Lifestyle Impact Analyzer",
      },
      {
        name: "Express",
        source: "project",
        linkedProjectSlug: "fitness-lifestyle-impact-analyzer",
        linkedProjectTitle: "Fitness Lifestyle Impact Analyzer",
      },
      {
        name: "Tailwind CSS",
        source: "project",
        linkedProjectSlug: "atomquest",
        linkedProjectTitle: "AtomQuest",
      },
      {
        name: "Streamlit",
        source: "project",
        linkedProjectSlug: "deepsafe",
        linkedProjectTitle: "DeepSafe",
      },
      {
        name: "Pandas",
        source: "both",
        linkedProjectSlug: "credit-card-fraud-detection",
        linkedProjectTitle: "Credit Card Fraud Detection",
      },
      {
        name: "NumPy",
        source: "both",
        linkedProjectSlug: "credit-card-fraud-detection",
        linkedProjectTitle: "Credit Card Fraud Detection & DeepSafe",
      },
      {
        name: "Git",
        source: "both",
      },
      {
        name: "GitHub",
        source: "both",
      },
      {
        name: "Docker",
        source: "resume",
      },
      {
        name: "Jupyter Notebook",
        source: "both",
        linkedProjectSlug: "credit-card-fraud-detection",
        linkedProjectTitle: "Credit Card Fraud Detection",
      },
    ],
  },
];
