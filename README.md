# Love Live! 8D Personality + MBTI Profiler

A fan-made personality quiz that matches you to a Love Live! school idol based on an 8-dimensional trait model. Supports **Nijigasaki** and **Hasunosora** groups, with multilingual UI (EN / ID / JA).

> Unofficial fan project. No data is collected. All calculations run locally in the browser.

---

## What Is This

You answer 45 questions about your personality. The app scores you across 9 dimensions, derives your MBTI type, then ranks all characters by how closely their personality profile matches yours. Results include a radar chart overlay so you can visually compare your shape against each character's.

Character personalities and MBTI types were analyzed by Claude Opus 4.7 based on canon behavior, official profiles, and community discussion.

---

## How the Scoring Works

### 1. Raw Score Accumulation

Each of the 45 questions targets one of 9 dimensions and carries a `sign` of `+1` or `−1`. Your answer (`−2` Strongly Disagree → `+2` Strongly Agree) is multiplied by the sign and added to that dimension's score:

```
score[dim] += answerValue × sign
```

The sign system ensures that logically equivalent questions (phrased positively or negatively) all point in the correct direction.

### 2. The 9 Dimensions

| Key | Dimension | Positive end | Negative end |
|-----|-----------|-------------|-------------|
| E | Extroversion | Extroverted | Introverted |
| J | Judging | Planned / structured | Spontaneous |
| T | Thinking | Logical / rational | Feeling / emotional |
| C | Confidence | Self-assured | Insecure |
| M | Ambition | Driven / competitive | Content / laid-back |
| O | Optimism | Resilient / optimistic | Anxious / pessimistic |
| A | Agreeableness | Empathetic / caring | Competitive / cold |
| U | Uniqueness | Unconventional | Conventional |
| N | Intuition | Abstract / future-focused | Concrete / present-focused |

E, N, T, J are the four classic MBTI axes. C, M, O, A, U are idol-specific extensions.

### 3. MBTI Derivation

Your 4-letter type is read directly from the sign of 4 dimensions:

```
E > 0 → E, else I
N > 0 → N, else S
T > 0 → T, else F
J > 0 → J, else P
```

### 4. Character Matching

For each of the 24 characters, two similarity signals are computed against your 9D trait vector:

**Euclidean similarity (70% weight)** — how close your profiles are in absolute terms:
```
euclideanSim = exp(−distance² / 400)
```
A value of `1.0` means identical profiles. Decays as distance grows.

**Cosine similarity (30% weight)** — whether you and the character point in the same general direction, regardless of intensity:
```
cosineSim = dot(user, char) / (|user| × |char|)   clamped to [0, 1]
```

**Synergy bonus** — a small extra reward if the character's score on your single strongest dimension shares your polarity:
```
bonus = (charVal / 10) × 5   (max +5 points)
```

**Final match rate:**
```
matchRate = (euclideanSim × 70) + (cosineSim × 30) + synergyBonus
```

The result is the raw computed similarity — no artificial inflation or forced spread. A strong, decisive player whose profile closely matches a character will see a high match rate (85–95%). An ambivalent player who answers mostly neutral will see moderate rates across the board, which is accurate: the algorithm had little signal to work with.

### 5. What the Percentages Mean

| Range | Meaning |
|-------|---------|
| 85–99% | Strong match — your trait profile closely resembles this character |
| 65–84% | Solid match — meaningful overlap in key dimensions |
| 45–64% | Loose match — some similarities, notable differences |
| 25–44% | Poor match — quite different personality profiles |
| < 25% | Strong mismatch — near-opposite in dominant traits |

---

## Credits

Heavily based on [jcver's Gakumas MBTI test](https://jcver.github.io/Gakumas-idolmaster-MBTI-test/) — only the characters and language were changed.

Character assets © Bandai Namco Entertainment Inc. / Sunrise / Project Love Live!
