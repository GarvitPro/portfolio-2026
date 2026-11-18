"use client";

import React from "react";

export function NeuralNetworkGraphic({
  sparsityProgress = 1,
}: {
  sparsityProgress?: number;
}) {
  const inputNodes = [35, 85, 135, 185, 235];
  const hidden1Nodes = [25, 68, 111, 154, 197, 240];
  const hidden2Nodes = [40, 90, 140, 190, 230];
  const outputNodes = [65, 135, 205];

  return (
    <div className="relative w-full overflow-hidden border border-white/15 bg-ink-charcoal/90 p-5 md:p-6">
      {/* Header metadata bar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 font-mono text-[10px] tracking-[0.18em] text-text-muted uppercase">
        <span>ARCH // PRUNABLE-LINEAR FEED-FORWARD (CIFAR-10)</span>
        <span className="text-violet-lilac">W_eff = W ⊙ σ(g) | L1 PENALTY λ = 1e-4</span>
      </div>

      {/* Neural network & accuracy vs sparsity SVG */}
      <svg
        viewBox="0 0 640 270"
        className="w-full h-auto"
        role="img"
        aria-label="Illustrative diagram of self-pruning neural network weights and documented accuracy vs sparsity trade-off"
      >
        <defs>
          <linearGradient id="activeEdge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#B69DFF" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* Background Grid Lines inside SVG */}
        <g stroke="rgba(255,255,255,0.04)" strokeWidth="1">
          {[40, 90, 140, 190, 240].map((y) => (
            <line key={y} x1="0" y1={y} x2="640" y2={y} />
          ))}
          {[60, 175, 290, 400, 460, 580].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="270" />
          ))}
        </g>

        {/* Layer 1 -> Layer 2 Connections */}
        {inputNodes.map((y1, i) =>
          hidden1Nodes.map((y2, j) => {
            const isPruned = (i + j) % 3 === 0;
            return (
              <line
                key={`l1-${i}-${j}`}
                x1="60"
                y1={y1}
                x2="175"
                y2={y2}
                stroke={isPruned ? "rgba(161,161,170,0.16)" : "url(#activeEdge)"}
                strokeWidth={isPruned ? "0.8" : "1.5"}
                strokeDasharray={isPruned ? "3 3" : undefined}
                opacity={isPruned ? Math.max(0.12, 1 - sparsityProgress * 0.85) : 0.9}
              />
            );
          })
        )}

        {/* Layer 2 -> Layer 3 Connections */}
        {hidden1Nodes.map((y1, i) =>
          hidden2Nodes.map((y2, j) => {
            const isPruned = (i * 2 + j) % 3 === 0;
            return (
              <line
                key={`l2-${i}-${j}`}
                x1="175"
                y1={y1}
                x2="290"
                y2={y2}
                stroke={isPruned ? "rgba(161,161,170,0.16)" : "url(#activeEdge)"}
                strokeWidth={isPruned ? "0.8" : "1.6"}
                strokeDasharray={isPruned ? "3 3" : undefined}
                opacity={isPruned ? Math.max(0.12, 1 - sparsityProgress * 0.85) : 0.9}
              />
            );
          })
        )}

        {/* Layer 3 -> Output Connections */}
        {hidden2Nodes.map((y1, i) =>
          outputNodes.map((y2, j) => {
            const isPruned = (i + j * 2) % 4 === 0;
            return (
              <line
                key={`l3-${i}-${j}`}
                x1="290"
                y1={y1}
                x2="400"
                y2={y2}
                stroke={isPruned ? "rgba(161,161,170,0.18)" : "url(#activeEdge)"}
                strokeWidth={isPruned ? "0.8" : "1.8"}
                strokeDasharray={isPruned ? "3 3" : undefined}
                opacity={isPruned ? Math.max(0.15, 1 - sparsityProgress * 0.8) : 0.95}
              />
            );
          })
        )}

        {/* Input Nodes */}
        {inputNodes.map((y, idx) => (
          <g key={`in-${idx}`}>
            <circle cx="60" cy={y} r="6" fill="#0B0B0F" stroke="#F7F5F2" strokeWidth="1.5" />
            <circle cx="60" cy={y} r="2" fill="#8B5CF6" />
          </g>
        ))}

        {/* Hidden 1 Nodes */}
        {hidden1Nodes.map((y, idx) => (
          <g key={`h1-${idx}`}>
            <circle cx="175" cy={y} r="6.5" fill="#17171D" stroke="#8B5CF6" strokeWidth="1.6" />
            <circle cx="175" cy={y} r="2.5" fill="#B69DFF" />
          </g>
        ))}

        {/* Hidden 2 Nodes */}
        {hidden2Nodes.map((y, idx) => (
          <g key={`h2-${idx}`}>
            <circle cx="290" cy={y} r="6.5" fill="#17171D" stroke="#8B5CF6" strokeWidth="1.6" />
            <circle cx="290" cy={y} r="2.5" fill="#F7F5F2" />
          </g>
        ))}

        {/* Output Nodes */}
        {outputNodes.map((y, idx) => (
          <g key={`out-${idx}`}>
            <circle cx="400" cy={y} r="7.5" fill="#8B5CF6" stroke="#F7F5F2" strokeWidth="1.5" />
          </g>
        ))}

        {/* Layer Captions */}
        <text x="60" y="262" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="monospace">
          INPUT x
        </text>
        <text x="175" y="262" textAnchor="middle" fill="#B69DFF" fontSize="8" fontFamily="monospace">
          GATE σ(g₁)
        </text>
        <text x="290" y="262" textAnchor="middle" fill="#B69DFF" fontSize="8" fontFamily="monospace">
          GATE σ(g₂)
        </text>
        <text x="400" y="262" textAnchor="middle" fill="#F7F5F2" fontSize="8" fontFamily="monospace">
          LOGITS ŷ
        </text>

        {/* Right Side: Documented Experiment Telemetry Box */}
        <rect
          x="442"
          y="22"
          width="180"
          height="220"
          fill="#0B0B0F"
          stroke="rgba(139,92,246,0.45)"
          strokeWidth="1"
        />
        <text x="456" y="44" fill="#B69DFF" fontSize="8.5" fontFamily="monospace" letterSpacing="1.5">
          DOCUMENTED REPORT
        </text>
        <text x="456" y="58" fill="#A1A1AA" fontSize="8" fontFamily="monospace">
          CONFIG: λ = 1e-4
        </text>

        {/* Sparsity Bar */}
        <text x="456" y="90" fill="#A1A1AA" fontSize="8" fontFamily="monospace">
          WEIGHT SPARSITY
        </text>
        <text x="456" y="114" fill="#F7F5F2" fontSize="22" fontWeight="bold" fontFamily="sans-serif">
          33.42%
        </text>
        <rect x="456" y="122" width="150" height="5" fill="#24232D" />
        <rect x="456" y="122" width="50.1" height="5" fill="#8B5CF6" />

        {/* Test Accuracy Bar */}
        <text x="456" y="155" fill="#A1A1AA" fontSize="8" fontFamily="monospace">
          TEST ACCURACY (CIFAR-10)
        </text>
        <text x="456" y="179" fill="#B69DFF" fontSize="22" fontWeight="bold" fontFamily="sans-serif">
          54.19%
        </text>
        <rect x="456" y="187" width="150" height="5" fill="#24232D" />
        <rect x="456" y="187" width="81.3" height="5" fill="#B69DFF" />

        <text x="456" y="222" fill="#A1A1AA" fontSize="7.5" fontFamily="monospace">
          --- PRUNED GATE (σ(g) → 0)
        </text>
        <text x="456" y="234" fill="#8B5CF6" fontSize="7.5" fontFamily="monospace">
          ─── ACTIVE WEIGHT CONNECTION
        </text>
      </svg>
    </div>
  );
}
