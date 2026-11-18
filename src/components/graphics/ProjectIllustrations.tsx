"use client";

import React from "react";
import { NeuralNetworkGraphic } from "./NeuralNetworkGraphic";

export function ProjectIllustration({
  type,
}: {
  type: "pruning" | "atomquest" | "fraud" | "deepsafe" | "fitness";
}) {
  if (type === "pruning") {
    return <NeuralNetworkGraphic />;
  }

  if (type === "atomquest") {
    return (
      <div className="relative w-full overflow-hidden border border-ink-paper/20 bg-white/85 p-5 text-ink-paper shadow-sm">
        {/* Browser window header */}
        <div className="mb-4 flex items-center justify-between border-b border-ink-paper/15 pb-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-paper/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-violet" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-paper/30" />
            <span className="ml-2 font-mono text-[10px] tracking-[0.16em] text-ink-paper/70 uppercase">
              ATOMQUEST // ROLE-SCOPED GOAL PORTAL
            </span>
          </div>
          <span className="bg-violet/15 px-2 py-0.5 font-mono text-[9px] font-semibold tracking-wider text-violet-deep uppercase">
            NEXT.JS + ZOD + RECHARTS
          </span>
        </div>

        <svg
          viewBox="0 0 640 260"
          className="w-full h-auto"
          role="img"
          aria-label="Editorial architectural mockup of AtomQuest goal setting and approval workflows"
        >
          {/* Left Column: Role Workflow Pipeline */}
          <rect x="12" y="12" width="185" height="68" fill="#F3EEE6" stroke="#151419" strokeWidth="1.2" />
          <text x="24" y="32" fill="#8B5CF6" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
            01 / EMPLOYEE WORKFLOW
          </text>
          <text x="24" y="48" fill="#151419" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            Goal Creation & Zod Form
          </text>
          <text x="24" y="64" fill="#151419" opacity="0.7" fontSize="8.5" fontFamily="monospace">
            Quarterly KPIs + Weights
          </text>

          <line x1="104" y1="80" x2="104" y2="96" stroke="#8B5CF6" strokeWidth="1.5" />

          <rect x="12" y="96" width="185" height="68" fill="#151419" stroke="#151419" strokeWidth="1.2" />
          <text x="24" y="116" fill="#B69DFF" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
            02 / MANAGER APPROVAL
          </text>
          <text x="24" y="132" fill="#F7F5F2" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            Review & Sign-Off Queue
          </text>
          <text x="24" y="148" fill="#A1A1AA" fontSize="8.5" fontFamily="monospace">
            Audit Log + Notifications
          </text>

          <line x1="104" y1="164" x2="104" y2="180" stroke="#8B5CF6" strokeWidth="1.5" />

          <rect x="12" y="180" width="185" height="68" fill="#F3EEE6" stroke="#151419" strokeWidth="1.2" />
          <text x="24" y="200" fill="#8B5CF6" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
            03 / HR ADMIN & EXPORT
          </text>
          <text x="24" y="216" fill="#151419" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            Analytics & CSV / XLSX
          </text>
          <text x="24" y="232" fill="#151419" opacity="0.7" fontSize="8.5" fontFamily="monospace">
            Org-Wide Quarterly Tracking
          </text>

          {/* Right Panel: Quarterly Analytics & Approval Matrix */}
          <rect x="220" y="12" width="408" height="236" fill="#FAF7F2" stroke="#151419" strokeWidth="1.2" />
          <line x1="220" y1="44" x2="628" y2="44" stroke="rgba(21,20,25,0.15)" />
          <text x="236" y="32" fill="#151419" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
            QUARTERLY ACHIEVEMENT & APPROVAL ANALYTICS (RECHARTS LAYER)
          </text>

          {/* Quarterly Bar Chart */}
          {[
            { q: "Q1", h1: 72, h2: 56, x: 265 },
            { q: "Q2", h1: 94, h2: 80, x: 345 },
            { q: "Q3", h1: 110, h2: 96, x: 425 },
            { q: "Q4", h1: 124, h2: 112, x: 505 },
          ].map((bar) => (
            <g key={bar.q}>
              <rect
                x={bar.x}
                y={195 - bar.h1}
                width="20"
                height={bar.h1}
                fill="#151419"
              />
              <rect
                x={bar.x + 24}
                y={195 - bar.h2}
                width="20"
                height={bar.h2}
                fill="#8B5CF6"
              />
              <text
                x={bar.x + 22}
                y="214"
                textAnchor="middle"
                fill="#151419"
                fontSize="9"
                fontFamily="monospace"
              >
                {bar.q}
              </text>
            </g>
          ))}
          <line x1="245" y1="195" x2="595" y2="195" stroke="#151419" strokeWidth="1" />
          <text x="245" y="234" fill="#151419" fontSize="8" fontFamily="monospace">
            ■ DEFINED OBJECTIVES   ■ APPROVED & VERIFIED MILESTONES
          </text>
        </svg>
      </div>
    );
  }

  if (type === "fraud") {
    return (
      <div className="relative w-full overflow-hidden border border-white/15 bg-ink-charcoal/90 p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 font-mono text-[10px] tracking-[0.18em] text-text-muted uppercase">
          <span>PIPELINE // SMOTE + RANDOM FOREST CLASSIFIER</span>
          <span className="text-violet-lilac">METRICS: PRECISION · RECALL · F1 · ROC-AUC</span>
        </div>

        <svg
          viewBox="0 0 640 260"
          className="w-full h-auto"
          role="img"
          aria-label="Illustrative diagram of imbalanced transaction classification, SMOTE resampling, and evaluation metrics"
        >
          {/* Left: Feature Space & Decision Boundary */}
          <rect x="14" y="14" width="360" height="232" fill="#0B0B0F" stroke="rgba(255,255,255,0.12)" />
          <text x="28" y="34" fill="#A1A1AA" fontSize="8.5" fontFamily="monospace">
            FEATURE SPACE PARTITION // SMOTE MINORITY RESAMPLING
          </text>

          {/* Majority Class Cluster */}
          {[
            [65, 180], [82, 165], [95, 195], [110, 175], [125, 155], [75, 145],
            [140, 185], [155, 165], [105, 140], [130, 205], [168, 190], [88, 210],
            [118, 162], [148, 148], [175, 170], [190, 195], [160, 212], [102, 188],
          ].map(([cx, cy], idx) => (
            <circle
              key={`maj-${idx}`}
              cx={cx}
              cy={cy}
              r="3.5"
              fill="rgba(247,245,242,0.3)"
            />
          ))}

          {/* Non-linear Ensemble Decision Boundary */}
          <path
            d="M 190 235 Q 205 125 345 65"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeDasharray="5 4"
          />

          {/* Anomaly / Minority Class + SMOTE Synthetic Nodes */}
          {[
            { x: 255, y: 88, syn: false },
            { x: 285, y: 74, syn: true },
            { x: 310, y: 105, syn: false },
            { x: 272, y: 118, syn: true },
            { x: 330, y: 82, syn: false },
            { x: 298, y: 92, syn: true },
          ].map((pt, i) => (
            <g key={`min-${i}`}>
              <circle
                cx={pt.x}
                cy={pt.y}
                r={pt.syn ? "5" : "6"}
                fill={pt.syn ? "none" : "#8B5CF6"}
                stroke="#B69DFF"
                strokeWidth="1.5"
              />
            </g>
          ))}

          <text x="28" y="232" fill="#A1A1AA" fontSize="7.5" fontFamily="monospace">
            ● MAJORITY (LEGITIMATE)   ● FLAGGED ANOMALY   ○ SMOTE SYNTHETIC SAMPLE
          </text>

          {/* Right: Imbalance Evaluation Matrix Schematic */}
          <rect x="392" y="14" width="234" height="232" fill="#0B0B0F" stroke="rgba(139,92,246,0.4)" />
          <text x="408" y="36" fill="#B69DFF" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
            EVALUATION FRAMEWORK
          </text>

          <rect x="408" y="52" width="96" height="62" fill="#17171D" stroke="rgba(255,255,255,0.15)" />
          <text x="456" y="78" textAnchor="middle" fill="#F7F5F2" fontSize="10" fontFamily="monospace">
            TRUE POS (TP)
          </text>
          <text x="456" y="96" textAnchor="middle" fill="#B69DFF" fontSize="8" fontFamily="monospace">
            Recall Focus
          </text>

          <rect x="514" y="52" width="96" height="62" fill="#17171D" stroke="rgba(255,255,255,0.1)" />
          <text x="562" y="78" textAnchor="middle" fill="#A1A1AA" fontSize="10" fontFamily="monospace">
            FALSE POS (FP)
          </text>
          <text x="562" y="96" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="monospace">
            Precision Cost
          </text>

          <rect x="408" y="124" width="96" height="62" fill="#17171D" stroke="rgba(139,92,246,0.45)" />
          <text x="456" y="150" textAnchor="middle" fill="#8B5CF6" fontSize="10" fontFamily="monospace">
            FALSE NEG (FN)
          </text>
          <text x="456" y="168" textAnchor="middle" fill="#F7F5F2" fontSize="8" fontFamily="monospace">
            Critical Risk
          </text>

          <rect x="514" y="124" width="96" height="62" fill="#17171D" stroke="rgba(255,255,255,0.15)" />
          <text x="562" y="150" textAnchor="middle" fill="#F7F5F2" fontSize="10" fontFamily="monospace">
            TRUE NEG (TN)
          </text>
          <text x="562" y="168" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="monospace">
            Specificity
          </text>

          <text x="408" y="212" fill="#F7F5F2" fontSize="8.5" fontFamily="monospace">
            PRIMARY METRICS:
          </text>
          <text x="408" y="228" fill="#B69DFF" fontSize="8" fontFamily="monospace">
            ROC-AUC · F1-SCORE · PR-CURVE
          </text>
        </svg>
      </div>
    );
  }

  if (type === "deepsafe") {
    return (
      <div className="relative w-full overflow-hidden border border-white/15 bg-ink-charcoal/90 p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 font-mono text-[10px] tracking-[0.18em] text-text-muted uppercase">
          <span>PROTOTYPE // OPENCV FACE EXTRACTION + TENSORFLOW CNN</span>
          <span className="text-violet-lilac">STATUS: RESEARCH PROTOTYPE</span>
        </div>

        <svg
          viewBox="0 0 640 260"
          className="w-full h-auto"
          role="img"
          aria-label="Abstract geometric facial landmark wireframe and CNN preprocessing pipeline diagram"
        >
          {/* Left: Abstract Geometric Wireframe Mesh (No real person photo) */}
          <rect x="14" y="12" width="250" height="236" fill="#0B0B0F" stroke="rgba(139,92,246,0.45)" />
          {/* Bounding box corners */}
          <path d="M 44 42 L 64 42 M 44 42 L 44 62" stroke="#8B5CF6" strokeWidth="2" />
          <path d="M 234 42 L 214 42 M 234 42 L 234 62" stroke="#8B5CF6" strokeWidth="2" />
          <path d="M 44 218 L 64 218 M 44 218 L 44 198" stroke="#8B5CF6" strokeWidth="2" />
          <path d="M 234 218 L 214 218 M 234 218 L 234 198" stroke="#8B5CF6" strokeWidth="2" />

          {/* Abstract Low-Poly Wireframe Mesh */}
          <polygon
            points="139,48 184,78 192,135 168,192 139,210 110,192 86,135 94,78"
            fill="rgba(139,92,246,0.06)"
            stroke="#B69DFF"
            strokeWidth="1.2"
          />
          <line x1="139" y1="48" x2="139" y2="210" stroke="rgba(182,157,255,0.35)" strokeDasharray="3 3" />
          <line x1="86" y1="135" x2="192" y2="135" stroke="rgba(182,157,255,0.35)" strokeDasharray="3 3" />
          <polyline points="94,78 139,112 184,78" fill="none" stroke="#8B5CF6" strokeWidth="1" />
          <polyline points="86,135 139,156 192,135" fill="none" stroke="#8B5CF6" strokeWidth="1" />

          {/* Landmark vertices */}
          {[
            [139, 48], [184, 78], [94, 78], [116, 105], [162, 105],
            [139, 132], [118, 168], [160, 168], [139, 210],
          ].map(([x, y], idx) => (
            <circle key={idx} cx={x} cy={y} r="3" fill="#F7F5F2" stroke="#8B5CF6" strokeWidth="1.5" />
          ))}

          {/* Horizontal Scan Line */}
          <line x1="30" y1="126" x2="248" y2="126" stroke="#8B5CF6" strokeWidth="2" />
          <text x="46" y="234" fill="#B69DFF" fontSize="8" fontFamily="monospace">
            OPENCV ROI EXTRACTION // ABSTRACT MESH
          </text>

          {/* Right: Pipeline Breakdown & Prototype Transparency Box */}
          <rect x="284" y="12" width="342" height="110" fill="#0B0B0F" stroke="rgba(255,255,255,0.14)" />
          <text x="300" y="34" fill="#F7F5F2" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
            01 // TRAINING & PREPROCESSING PIPELINE
          </text>
          <text x="300" y="56" fill="#A1A1AA" fontSize="9" fontFamily="monospace">
            • OpenCV Face Bounding Box & Crop
          </text>
          <text x="300" y="74" fill="#A1A1AA" fontSize="9" fontFamily="monospace">
            • NumPy Normalization & Tensor Resizing
          </text>
          <text x="300" y="92" fill="#A1A1AA" fontSize="9" fontFamily="monospace">
            • TensorFlow CNN Feature Extraction Code
          </text>

          <rect x="284" y="138" width="342" height="110" fill="#17171D" stroke="rgba(139,92,246,0.5)" />
          <text x="300" y="160" fill="#B69DFF" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
            02 // STREAMLIT DEMONSTRATION INTERFACE
          </text>
          <text x="300" y="182" fill="#F7F5F2" fontSize="9" fontFamily="monospace">
            • Interactive Media Upload & Inspection UI
          </text>
          <text x="300" y="200" fill="#A1A1AA" fontSize="8.5" fontFamily="monospace">
            • NOTE: Demo UI generates simulated predictions
          </text>
          <text x="300" y="216" fill="#A1A1AA" fontSize="8.5" fontFamily="monospace">
            • Documented honestly as a research prototype
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden border border-ink-paper/20 bg-white/85 p-5 text-ink-paper">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-ink-paper/15 pb-3 font-mono text-[10px] tracking-[0.18em] text-ink-paper/70 uppercase">
        <span>STACK // REACT · TYPESCRIPT · NODE/EXPRESS · POSTGRESQL · TABLEAU</span>
        <span className="text-violet-deep font-semibold">VISUAL REPORTING</span>
      </div>

      <svg
        viewBox="0 0 640 260"
        className="w-full h-auto"
        role="img"
        aria-label="Illustrative full-stack architecture and Tableau visual reporting schematic for Fitness Lifestyle Impact Analyzer"
      >
        <rect x="14" y="14" width="290" height="232" fill="#F3EEE6" stroke="#151419" strokeWidth="1.2" />
        <text x="28" y="36" fill="#8B5CF6" fontSize="9" fontFamily="monospace" fontWeight="bold">
          RELATIONAL & API ARCHITECTURE
        </text>

        <rect x="28" y="54" width="262" height="44" fill="#FFFFFF" stroke="#151419" />
        <text x="40" y="74" fill="#151419" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
          React + TypeScript Frontend
        </text>
        <text x="40" y="88" fill="#151419" opacity="0.65" fontSize="8" fontFamily="monospace">
          Typed Lifestyle Input & Reporting Views
        </text>

        <rect x="28" y="114" width="262" height="44" fill="#151419" />
        <text x="40" y="134" fill="#F7F5F2" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
          Node.js + Express Backend API
        </text>
        <text x="40" y="148" fill="#B69DFF" fontSize="8" fontFamily="monospace">
          REST Routing & Aggregation Controllers
        </text>

        <rect x="28" y="174" width="262" height="44" fill="#FFFFFF" stroke="#151419" />
        <text x="40" y="194" fill="#151419" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
          PostgreSQL Relational Database
        </text>
        <text x="40" y="208" fill="#151419" opacity="0.65" fontSize="8" fontFamily="monospace">
          Structured Lifestyle & Activity Records
        </text>

        {/* Right: Tableau Visual Reporting Canvas */}
        <rect x="322" y="14" width="304" height="232" fill="#FAF7F2" stroke="#151419" strokeWidth="1.2" />
        <text x="338" y="36" fill="#151419" fontSize="9" fontFamily="monospace" fontWeight="bold">
          TABLEAU VISUAL REPORTING INTERFACE
        </text>

        {/* Multi-axis Trend Lines (Illustrative) */}
        <polyline
          points="344,185 390,152 436,164 482,118 528,128 574,86 604,94"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="2.5"
        />
        <polyline
          points="344,205 390,190 436,178 482,162 528,148 574,135 604,122"
          fill="none"
          stroke="#151419"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />
        <line x1="344" y1="215" x2="608" y2="215" stroke="#151419" strokeWidth="1" />
        <line x1="344" y1="60" x2="344" y2="215" stroke="#151419" strokeWidth="1" />
        <text x="344" y="234" fill="#151419" fontSize="8" fontFamily="monospace">
          ILLUSTRATIVE DASHBOARD SCHEMATIC // MULTIVARIATE TRENDS
        </text>
      </svg>
    </div>
  );
}
