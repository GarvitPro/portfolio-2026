export interface CertificationEntry {
  id: string;
  index: string;
  title: string;
  issuer: string;
  date: string;
  statusNote?: string;
  domainTag: string;
  graphicMotif: "analytics" | "tableau" | "database" | "genai";
}

export const certificationsData: CertificationEntry[] = [
  {
    id: "google-data-analytics",
    index: "01",
    title: "Google Data Analytics",
    issuer: "Coursera",
    date: "June 2026",
    domainTag: "DATA ANALYTICS & PIPELINES",
    graphicMotif: "analytics",
  },
  {
    id: "salesforce-tableau",
    index: "02",
    title: "Salesforce Tableau Desktop Foundation",
    issuer: "Salesforce",
    date: "March 2026",
    domainTag: "VISUAL INTELLIGENCE & BI",
    graphicMotif: "tableau",
  },
  {
    id: "advanced-sql-dbms",
    index: "03",
    title: "Advanced SQL & DBMS",
    issuer: "Scaler",
    date: "May 2025",
    domainTag: "RELATIONAL ARCHITECTURE",
    graphicMotif: "database",
  },
  {
    id: "sap-generative-ai",
    index: "04",
    title: "SAP Generative AI Developer",
    issuer: "SAP",
    date: "March 2026 – March 2027",
    statusNote: "Active / Scheduled Validity Window (Mar 2026 – Mar 2027)",
    domainTag: "ENTERPRISE GENERATIVE AI",
    graphicMotif: "genai",
  },
];
