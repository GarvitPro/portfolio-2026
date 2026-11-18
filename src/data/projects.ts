export interface ProjectMetric {
  label: string;
  value: string;
  note: string;
}

export interface ProjectEntry {
  slug: string;
  index: string;
  title: string;
  subtitle?: string;
  category: string;
  statusBadge: string;
  theme: "dark" | "paper";
  githubUrl?: string;
  demoUrl?: string;
  demoOperational?: boolean;
  technologies: string[];
  summary: string;
  technicalDetails: string[];
  metrics?: ProjectMetric[];
  visualType: "pruning" | "atomquest" | "fraud" | "deepsafe" | "fitness";
  visualDisclaimer: string;
  caseStudy: {
    overview: string;
    problem: string;
    approach: string;
    architectureSteps: { step: string; title: string; detail: string }[];
    implementation: string[];
    outcomes: string[];
    reflections: string[];
  };
}

export const projectsData: ProjectEntry[] = [
  {
    slug: "self-pruning-neural-network",
    index: "01",
    title: "SELF-PRUNING NEURAL NETWORK",
    subtitle: "Learnable Gating & Sparsity Regularization on CIFAR-10",
    category: "Deep Learning / AI Research",
    statusBadge: "Documented Research Experiment",
    theme: "dark",
    githubUrl: "https://github.com/GarvitPro/self-pruning-network",
    technologies: [
      "Python",
      "PyTorch",
      "Neural Networks",
      "CIFAR-10",
      "Sparsity Regularization",
    ],
    summary:
      "Implemented a self-pruning neural network to explore how learnable gates and sparsity regularization influence neural network complexity and classification performance.",
    technicalDetails: [
      "Implements a feed-forward classifier trained and evaluated on the CIFAR-10 dataset.",
      "Custom PrunableLinear layers introduce learnable gate scores for individual weights.",
      "A sigmoid transformation produces gate values that control the effective weights used by the network.",
      "An L1 sparsity penalty encourages gates to reduce the influence of less useful connections.",
      "Experiments investigate how different regularization strengths affect classification accuracy and sparsity.",
    ],
    metrics: [
      {
        label: "Regularization Strength",
        value: "λ = 1e-4",
        note: "Documented report benchmark configuration",
      },
      {
        label: "Test Accuracy",
        value: "54.19%",
        note: "Evaluated on CIFAR-10 test split at λ = 1e-4",
      },
      {
        label: "Achieved Sparsity",
        value: "33.42%",
        note: "Pruned weight connections documented in report",
      },
    ],
    visualType: "pruning",
    visualDisclaimer:
      "FIG 04.01 — ILLUSTRATIVE DIAGRAM OF LEARNABLE GATE PRUNING METHOD (W_eff = W ⊙ σ(g)); METRICS REFLECT DOCUMENTED λ = 1e-4 EXPERIMENT.",
    caseStudy: {
      overview:
        "An experimental PyTorch investigation into self-pruning neural architectures using continuous learnable gate parameters and L1 sparsity regularization on CIFAR-10.",
      problem:
        "Neural networks can contain many parameters. This experiment investigates whether learned gating can increase sparsity while retaining useful predictive performance.",
      approach:
        "Build a custom gate-controlled neural network in PyTorch using custom PrunableLinear layers and evaluate different sparsity penalties across controlled training runs.",
      architectureSteps: [
        {
          step: "01",
          title: "CIFAR-10 Input Vectorization",
          detail:
            "32×32×3 RGB image tensors flattened and normalized for feed-forward classification.",
        },
        {
          step: "02",
          title: "PrunableLinear Gated Weights",
          detail:
            "Each weight matrix W is paired with learnable gate parameters g, producing effective weights via sigmoid gating σ(g).",
        },
        {
          step: "03",
          title: "Joint Cross-Entropy + L1 Gate Penalty",
          detail:
            "Loss function combines classification loss with λ · ||σ(g)||₁ to drive non-essential connection gates toward zero.",
        },
        {
          step: "04",
          title: "Threshold Pruning & Evaluation",
          detail:
            "At λ = 1e-4, documented test accuracy reaches 54.19% while achieving 33.42% weight sparsity.",
        },
      ],
      implementation: [
        "Designed custom PyTorch nn.Module subclass (PrunableLinear) maintaining separate weight and gate parameter tensors.",
        "Applied sigmoid activation to gate scores during the forward pass to compute effective weights dynamically.",
        "Formulated an L1 regularization term over active gate probabilities scaled by hyperparameter lambda (λ).",
        "Evaluated sparsity-versus-accuracy trade-offs across multiple regularization settings on the CIFAR-10 benchmark.",
      ],
      outcomes: [
        "Documented experimental result at λ = 1e-4: 54.19% test accuracy on CIFAR-10 with 33.42% connection sparsity.",
        "Demonstrated how learnable gating integrates directly into gradient-based optimization without manual layer-by-layer heuristics.",
        "Established clear empirical trade-off curves showing how stronger L1 penalties increase sparsity while impacting classification capacity.",
      ],
      reflections: [
        "Balancing task loss against sparsity regularization requires careful schedule tuning so gates do not collapse before features stabilize.",
        "Future extensions could apply PrunableConv2d layers to convolutional backbones for higher baseline vision accuracy on CIFAR-10.",
      ],
    },
  },
  {
    slug: "atomquest",
    index: "02",
    title: "ATOMQUEST",
    subtitle: "Goal Setting & Tracking Portal",
    category: "Full-Stack / Enterprise Software",
    statusBadge: "Hackathon Application & Interactive Demo",
    theme: "paper",
    githubUrl: "https://github.com/GarvitPro/atomquest-hackathon-submit",
    demoUrl: "https://atomquest-eight.vercel.app",
    demoOperational: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "NextAuth",
      "Recharts",
      "React Hook Form",
      "Zod",
    ],
    summary:
      "Developed a hackathon-based organizational goal-setting and tracking portal that brings together employee workflows, manager approvals, quarterly achievement tracking, and analytics.",
    technicalDetails: [
      "Built a Next.js and TypeScript web application modeling organizational goal lifecycles across Employee, Manager, and HR personas.",
      "Implemented structured goal creation and validation with React Hook Form and Zod schemas.",
      "Created manager approval workflows, quarterly achievement tracking views, audit logging, and notification feeds.",
      "Integrated Recharts data visualization dashboards and CSV/XLSX reporting export features.",
      "Distinguishes implemented client/demo workflow functionality from architecture prepared for future database-backed enterprise deployment.",
    ],
    visualType: "atomquest",
    visualDisclaimer:
      "FIG 04.02 — EDITORIAL INTERFACE SCHEMATIC OF THE HACKATHON DEMONSTRATION PORTAL (EMPLOYEE → MANAGER → HR WORKFLOWS).",
    caseStudy: {
      overview:
        "A hackathon-built organizational goal-setting and performance tracking portal integrating role-based workflows, approvals, analytics dashboards, and structured exports.",
      problem:
        "Organizational goal tracking often fragments across spreadsheets and disconnected approval chains, making quarterly progress visibility and auditability difficult for employees, managers, and HR teams.",
      approach:
        "Design a unified Next.js + TypeScript portal with strict Zod schema validation, role-based demonstration workflows, interactive Recharts analytics, and tabular export utilities.",
      architectureSteps: [
        {
          step: "01",
          title: "Role-Scoped Entry & Session Context",
          detail:
            "NextAuth-configured architecture supporting distinct views for Employees, Managers, and HR Administrators.",
        },
        {
          step: "02",
          title: "Validated Goal Authoring",
          detail:
            "React Hook Form + Zod validation enforces structured objectives, quarterly milestones, and measurable weightings.",
        },
        {
          step: "03",
          title: "Approval & Audit Pipeline",
          detail:
            "Manager review queues with status transitions, timestamped audit logs, and automated workflow notifications.",
        },
        {
          step: "04",
          title: "Analytics & Tabular Exports",
          detail:
            "Recharts visual reporting paired with CSV/XLSX data export for administrative review.",
        },
      ],
      implementation: [
        "Developed modular Next.js App Router views with TypeScript interfaces for goals, approvals, audit trails, and notifications.",
        "Built interactive analytics dashboards using Recharts to visualize goal completion distributions across quarters.",
        "Implemented form validation rules with Zod and React Hook Form to prevent malformed goal submissions.",
        "Engineered CSV/XLSX export capabilities and documented the boundary between the hackathon demonstration layer and future persistent database integration.",
      ],
      outcomes: [
        "Delivered a complete, deployable hackathon prototype hosted on Vercel demonstrating multi-role organizational workflows.",
        "Combined clean UI engineering with practical enterprise concepts like audit logs, manager sign-offs, and exportable reports.",
      ],
      reflections: [
        "Building for a hackathon highlighted the value of end-to-end workflow clarity—showing how data moves from an employee submission to a manager's approval queue.",
        "Next architectural steps involve connecting the demonstration state layer to a production PostgreSQL/Prisma persistence backend.",
      ],
    },
  },
  {
    slug: "credit-card-fraud-detection",
    index: "03",
    title: "CREDIT CARD FRAUD DETECTION",
    subtitle: "Imbalance-Aware Classification on Transactional Data",
    category: "Machine Learning / Financial Technology",
    statusBadge: "Machine Learning Experiment",
    theme: "dark",
    githubUrl: "https://github.com/GarvitPro/Credit-Card-Fault-Detection",
    technologies: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "SMOTE",
      "Pandas",
      "NumPy",
    ],
    summary:
      "Developed and evaluated machine learning approaches for detecting potentially fraudulent credit card transactions in highly imbalanced transactional datasets.",
    technicalDetails: [
      "Addresses extreme class imbalance in financial transaction datasets where fraudulent instances represent a tiny fraction of records.",
      "Performs exploratory data analysis, data preprocessing, and feature scaling on numerical transaction features.",
      "Applies SMOTE (Synthetic Minority Over-sampling Technique) to address minority class under-representation during training.",
      "Trains and compares classification models including Random Forest classifiers.",
      "Evaluates performance using fraud-relevant metrics: precision, recall, F1-score, ROC-AUC, and confusion matrices rather than raw accuracy alone.",
    ],
    visualType: "fraud",
    visualDisclaimer:
      "FIG 04.03 — ILLUSTRATIVE ANIMATION OF CLASS-IMBALANCE CLUSTERING, SMOTE RESAMPLING & DECISION BOUNDARY PARTITIONING.",
    caseStudy: {
      overview:
        "A supervised machine learning workflow investigating class-imbalance mitigation and ensemble classification for detecting anomalous financial transactions.",
      problem:
        "Fraudulent transactions are uncommon compared with legitimate transactions, making classification challenging and rendering naive accuracy metrics misleading.",
      approach:
        "Prepare transaction data, address class imbalance with SMOTE, train ensemble classification models, and evaluate performance with precision, recall, F1-score, ROC-AUC, and confusion matrices.",
      architectureSteps: [
        {
          step: "01",
          title: "Exploratory Data Analysis & Scaling",
          detail:
            "Inspect feature distributions, normalize transaction amount and time variables, and isolate class skew.",
        },
        {
          step: "02",
          title: "SMOTE Minority Resampling",
          detail:
            "Synthesize balanced training distributions in feature space to prevent majority-class dominance.",
        },
        {
          step: "03",
          title: "Random Forest & Model Comparison",
          detail:
            "Fit ensemble tree classifiers and benchmark against baseline classification approaches.",
        },
        {
          step: "04",
          title: "Imbalance-Aware Evaluation",
          detail:
            "Analyze Confusion Matrices, Precision-Recall balance, F1-score, and ROC-AUC curves.",
        },
      ],
      implementation: [
        "Executed data preprocessing and feature scaling pipelines using Pandas, NumPy, and Scikit-learn.",
        "Integrated SMOTE from imbalanced-learn within the training workflow to mitigate severe majority-class bias.",
        "Trained Random Forest classifiers and compared decision behavior across resampled and baseline splits.",
        "Structured evaluation around confusion matrices, precision, recall, F1-score, and ROC-AUC to reflect the operational cost of false negatives versus false positives.",
      ],
      outcomes: [
        "Produced a complete, reproducible machine learning experiment demonstrating imbalance-aware classification methodology.",
        "Highlighted why recall, precision, F1-score, and ROC-AUC are essential when evaluating rare-event detection models.",
      ],
      reflections: [
        "Resampling must be strictly confined to training partitions to prevent data leakage into validation and test sets.",
        "Future work includes cost-sensitive threshold tuning and gradient-boosted trees with calibrated probability outputs.",
      ],
    },
  },
  {
    slug: "deepsafe",
    index: "04",
    title: "DEEPSAFE",
    subtitle: "Deepfake Detection Research Prototype",
    category: "Computer Vision / Deep Learning",
    statusBadge: "Research Prototype (Training Pipeline + Demo UI)",
    theme: "dark",
    githubUrl: "https://github.com/GarvitPro/DeepSafe-AI-Fake-Detection",
    technologies: ["Python", "OpenCV", "TensorFlow", "Streamlit", "NumPy"],
    summary:
      "Developed a computer vision research prototype exploring facial-media preprocessing and deepfake classification using a CNN-based training pipeline and an interactive demonstration interface.",
    technicalDetails: [
      "Implements automated face detection and region-of-interest extraction using OpenCV.",
      "Includes image preprocessing utilities and CNN model architecture/training scripts built with TensorFlow.",
      "Provides a Streamlit web interface for demonstrating the upload and inspection workflow.",
      "Transparency Note: The repository contains the CNN model-training code and OpenCV preprocessing pipeline, while the current Streamlit demonstration UI generates simulated predictions rather than performing validated trained-model inference.",
    ],
    visualType: "deepsafe",
    visualDisclaimer:
      "FIG 04.04 — ORIGINAL ABSTRACT WIREFRAME LANDMARK & PREPROCESSING SCHEMATIC. PROTOTYPE UI CURRENTLY USES SIMULATED DEMO OUTPUTS.",
    caseStudy: {
      overview:
        "An exploratory computer vision prototype combining OpenCV facial extraction, TensorFlow CNN training scripts, and a Streamlit demonstration frontend.",
      problem:
        "Synthetic facial media requires structured preprocessing pipelines that can isolate facial regions consistently before feeding frames into convolutional classification architectures.",
      approach:
        "Build a modular Python pipeline combining OpenCV face localization and cropping with a TensorFlow CNN training architecture, paired with an interactive Streamlit prototype interface.",
      architectureSteps: [
        {
          step: "01",
          title: "Media Ingestion & Frame Decoding",
          detail:
            "Load input imagery and convert color spaces into normalized NumPy arrays.",
        },
        {
          step: "02",
          title: "OpenCV Face Localization & Cropping",
          detail:
            "Detect facial bounding boxes, extract aligned face regions, and resize tensors for CNN input.",
        },
        {
          step: "03",
          title: "TensorFlow CNN Training Pipeline",
          detail:
            "Convolutional feature extraction layers and binary classification head coded in TensorFlow.",
        },
        {
          step: "04",
          title: "Streamlit Demonstration Interface",
          detail:
            "Interactive prototype UI illustrating the user flow (currently operating with simulated demonstration predictions).",
        },
      ],
      implementation: [
        "Programmed OpenCV face-detection and image-preprocessing routines to isolate facial crops from raw input images.",
        "Authored TensorFlow convolutional neural network architecture and training pipeline scripts for real-versus-synthetic classification experiments.",
        "Built a Streamlit interactive prototype interface to demonstrate the end-to-end inspection workflow.",
        "Documented the current engineering state transparently: separating the implemented training/preprocessing code from the Streamlit demonstration layer's simulated predictions.",
      ],
      outcomes: [
        "Established a working computer vision preprocessing and CNN training codebase in Python, OpenCV, and TensorFlow.",
        "Created an interactive Streamlit demonstration interface for presenting the deepfake inspection workflow concept.",
      ],
      reflections: [
        "Bridging the gap between offline CNN training scripts and production inference requires serializing validated model checkpoints and benchmarking generalization across unseen compression artifacts.",
        "Next engineering milestone is replacing the Streamlit demo's simulated prediction step with live inference against a validated model checkpoint.",
      ],
    },
  },
  {
    slug: "fitness-lifestyle-impact-analyzer",
    index: "05",
    title: "FITNESS LIFESTYLE IMPACT ANALYZER",
    subtitle: "Full-Stack Lifestyle Analytics & Visual Reporting",
    category: "Full Stack / Data Visualization",
    statusBadge: "Full-Stack Analytics Application",
    theme: "paper",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tableau",
    ],
    summary:
      "Developed a fitness and lifestyle analytics application combining full-stack web development with data visualization to make lifestyle-related information easier to understand.",
    technicalDetails: [
      "Built interactive frontend application components using React and TypeScript.",
      "Developed RESTful backend services using Node.js and Express.",
      "Used PostgreSQL for structured relational application data management.",
      "Incorporated Tableau dashboards for visual reporting and multidimensional exploration.",
      "Designed reporting interfaces to support clear data interpretation across lifestyle metrics.",
    ],
    visualType: "fitness",
    visualDisclaimer:
      "FIG 04.05 — ILLUSTRATIVE ANALYTICS DASHBOARD SCHEMATIC (REACT + NODE/EXPRESS + POSTGRESQL + TABLEAU REPORTING).",
    caseStudy: {
      overview:
        "A full-stack analytics and visual reporting application uniting a React + TypeScript frontend, Node.js/Express API, PostgreSQL database, and Tableau dashboards.",
      problem:
        "Raw lifestyle and activity logs are difficult to interpret in isolation without structured relational storage and clear visual reporting interfaces.",
      approach:
        "Combine a type-safe React + TypeScript web interface and Node.js/Express + PostgreSQL backend with Tableau visual reporting dashboards.",
      architectureSteps: [
        {
          step: "01",
          title: "React & TypeScript Frontend",
          detail:
            "Structured input views and modular dashboard containers built with strongly typed components.",
        },
        {
          step: "02",
          title: "Node.js & Express API Layer",
          detail:
            "Backend routing and controller logic handling data ingestion and query aggregation.",
        },
        {
          step: "03",
          title: "PostgreSQL Relational Storage",
          detail:
            "Normalized relational schema managing structured lifestyle and activity attributes.",
        },
        {
          step: "04",
          title: "Tableau Visual Reporting",
          detail:
            "Interactive analytical views designed to surface patterns and support data interpretation.",
        },
      ],
      implementation: [
        "Engineered frontend interfaces in React and TypeScript to capture and present lifestyle analytics cleanly.",
        "Constructed backend endpoints with Node.js and Express connected to a PostgreSQL relational database.",
        "Integrated Tableau dashboards to provide visual reporting and exploratory data analysis views.",
      ],
      outcomes: [
        "Demonstrated end-to-end integration across frontend web development, relational database management, and BI data visualization.",
        "Created an accessible reporting structure that translates tabular lifestyle records into visual trends.",
      ],
      reflections: [
        "Pairing custom full-stack applications with dedicated visualization tools like Tableau accelerates analytical reporting while maintaining application flexibility.",
      ],
    },
  },
];
