---
layout: default
title: Leaderboards
permalink: /leaderboards/
---

## Leaderboards

The CLIPTrace 2026 leaderboards will open with the competition platform. No official participant results have been released yet.

<div class="status-card">
  <span>STATUS</span>
  <strong>Competition platform coming soon</strong>
  <p>Development and final standings will be published here after the corresponding phases begin.</p>
</div>

---

## Score columns

| Column | Meaning |
|:--|:--|
| Detection Accuracy | Fraction of all phase checkpoints classified correctly |
| Feature Recovery | Mean clamped cosine similarity over truly backdoored checkpoints |
| Final Score | `100 x (0.30 x Detection + 0.70 x Recovery)` |

---

## Tie-breaking

Equal Final Scores are ordered by:

1. higher Feature Recovery Score;
2. higher Detection Accuracy;
3. earlier valid submission reaching the score.

Leaderboard entries remain provisional until format checks and any requested reproducibility verification are complete.
