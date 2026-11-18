const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "public", "resume");
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "Garvit_Arora_Resume_Sanitized.pdf");

// Build a clean, standards-compliant 1-page PDF document with zero phone number data
const lines = [
  { text: "GARVIT ARORA", size: 18, y: 750, bold: true },
  { text: "AI Engineering / Software Development / Business Systems", size: 10, y: 734, bold: false },
  { text: "Location: Gurugram, Haryana, India | Email: garvit286@gmail.com", size: 9, y: 720, bold: false },
  { text: "GitHub: https://github.com/GarvitPro | LinkedIn: https://www.linkedin.com/in/garvit-arora2005", size: 9, y: 707, bold: false },
  { text: "----------------------------------------------------------------------------------------------------", size: 9, y: 694, bold: false },
  { text: "EDUCATION", size: 11, y: 678, bold: true },
  { text: "SRM Institute of Science and Technology, Kattankulathur, Tamil Nadu, India", size: 9.5, y: 663, bold: true },
  { text: "B.Tech in Computer Science and Business Systems | Expected Graduation: 2027 | CGPA: 9.11/10", size: 9, y: 650, bold: false },
  { text: "PROFESSIONAL EXPERIENCE", size: 11, y: 628, bold: true },
  { text: "1. Inventic.ai — AI Engineer Intern (October 2026 - Present | Remote)", size: 9.5, y: 613, bold: true },
  { text: "   - Contributing to the development and implementation of AI-based solutions for practical applications.", size: 8.5, y: 600, bold: false },
  { text: "   - Exploring and applying emerging AI technologies through experimentation and iterative improvement.", size: 8.5, y: 588, bold: false },
  { text: "2. Defence Research and Development Organisation (DRDO - IRDE) — AI & Computer Vision Intern (Jun 2026 - Jul 2026 | Dehradun)", size: 9.5, y: 571, bold: true },
  { text: "   - Developed a Python-based image-processing pipeline to preprocess and enhance underwater periscope imagery.", size: 8.5, y: 558, bold: false },
  { text: "   - Evaluated image restoration and super-resolution techniques under varying conditions and validated workflows.", size: 8.5, y: 546, bold: false },
  { text: "3. Greenheck Pvt. Ltd. — Product & Systems Intern (December 2025 - January 2026 | Gurugram, Haryana)", size: 9.5, y: 529, bold: true },
  { text: "   - Analyzed SAP ERP workflows and applied rule-based validation logic to support data consistency.", size: 8.5, y: 516, bold: false },
  { text: "   - Performed root-cause analysis of Bill of Materials (BOM) configuration issues and designed decision logic.", size: 8.5, y: 504, bold: false },
  { text: "4. Sambandh Health Foundation — Operations & Data Intern (June 2025 | Gurugram, Haryana)", size: 9.5, y: 487, bold: true },
  { text: "   - Cleaned, transformed, and organized multi-source data; conducted EDA and root-cause bottleneck analysis.", size: 8.5, y: 474, bold: false },
  { text: "SELECTED ENGINEERING PROJECTS", size: 11, y: 452, bold: true },
  { text: "- Self-Pruning Neural Network (Python, PyTorch, CIFAR-10): Custom PrunableLinear layers with learnable sigmoid gates", size: 8.5, y: 437, bold: false },
  { text: "  and L1 sparsity penalty. Documented report result at lambda = 1e-4: 54.19% test accuracy, 33.42% sparsity.", size: 8.5, y: 425, bold: false },
  { text: "- AtomQuest Goal Setting & Tracking Portal (Next.js, TypeScript, Tailwind, NextAuth, Recharts, Zod): Hackathon portal", size: 8.5, y: 410, bold: false },
  { text: "  uniting employee goal workflows, manager approvals, quarterly tracking, audit logs, and CSV/XLSX reporting.", size: 8.5, y: 398, bold: false },
  { text: "- Credit Card Fraud Detection (Python, Scikit-learn, Random Forest, SMOTE, Pandas): Imbalance-aware classification", size: 8.5, y: 383, bold: false },
  { text: "  evaluated with precision, recall, F1-score, ROC-AUC, and confusion matrices.", size: 8.5, y: 371, bold: false },
  { text: "- DeepSafe (Python, OpenCV, TensorFlow, Streamlit): Research prototype for face extraction and CNN training pipeline.", size: 8.5, y: 356, bold: false },
  { text: "- Fitness Lifestyle Impact Analyzer (React, TypeScript, Node.js, Express, PostgreSQL, Tableau): Full-stack analytics.", size: 8.5, y: 341, bold: false },
  { text: "TECHNICAL SKILLS", size: 11, y: 319, bold: true },
  { text: "Languages: Python, Java, SQL, C++ | ML & AI: PyTorch, TensorFlow, Scikit-learn, OpenCV, Random Forest, SMOTE, CV, GenAI", size: 8.5, y: 304, bold: false },
  { text: "Analytics & BI: Data Cleaning, EDA, Root Cause Analysis, Tableau, Excel | Enterprise & DB: PostgreSQL, SAP ERP, BOM", size: 8.5, y: 291, bold: false },
  { text: "Web & Tools: Next.js, React, TypeScript, Node.js, Express, Tailwind CSS, Streamlit, Pandas, NumPy, Git, Docker, Jupyter", size: 8.5, y: 278, bold: false },
  { text: "CERTIFICATIONS", size: 11, y: 256, bold: true },
  { text: "- Google Data Analytics (Coursera | June 2026)", size: 8.5, y: 241, bold: false },
  { text: "- Salesforce Tableau Desktop Foundation (Salesforce | March 2026)", size: 8.5, y: 228, bold: false },
  { text: "- Advanced SQL & DBMS (Scaler | May 2025)", size: 8.5, y: 215, bold: false },
  { text: "- SAP Generative AI Developer (SAP | March 2026 - March 2027)", size: 8.5, y: 202, bold: false },
  { text: "[Privacy-Safe Public Web Edition — Direct Phone Number Omitted for Public Distribution]", size: 8, y: 174, bold: false },
];

function escapePdfText(str) {
  return str.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

let contentStream = "BT\n";
for (const line of lines) {
  const font = line.bold ? "/F2" : "/F1";
  contentStream += `${font} ${line.size} Tf\n`;
  contentStream += `1 0 0 1 48 ${line.y} Tm\n`;
  contentStream += `(${escapePdfText(line.text)}) Tj\n`;
}
contentStream += "ET\n";

const objects = [];
objects.push("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
objects.push("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");
objects.push(
  "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n"
);
objects.push(
  "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n"
);
objects.push(
  "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n"
);
objects.push(
  `6 0 obj\n<< /Length ${Buffer.byteLength(contentStream, "utf8")} >>\nstream\n${contentStream}endstream\nendobj\n`
);

let pdf = "%PDF-1.4\n";
const offsets = [0];
for (const obj of objects) {
  offsets.push(Buffer.byteLength(pdf, "utf8"));
  pdf += obj;
}

const xrefOffset = Buffer.byteLength(pdf, "utf8");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let i = 1; i < offsets.length; i++) {
  pdf += String(offsets[i]).padStart(10, "0") + " 00000 n \n";
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

fs.writeFileSync(outFile, pdf, "utf8");
console.log("Generated sanitized resume PDF at:", outFile);
