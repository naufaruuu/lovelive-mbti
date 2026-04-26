# Love Live! 8D Personality + MBTI Profiler

A fan-made personality quiz that matches you to a Love Live! school idol based on a 9-dimensional trait model. Supports **μ's**, **Aqours**, **Nijigasaki**, **Hasunosora**, and **Liella!**, with multilingual UI (EN / ID / JA).

> Unofficial fan project. No data is collected. All calculations run locally in the browser.

---

## What Is This

You answer 36 questions framed in school-idol scenarios — forming a club, choreo practice, setlist arguments, first-live nerves, costume decisions. The app scores you across 9 dimensions, derives your MBTI type, then ranks all characters by how closely their personality profile matches yours. Results include a radar chart overlay so you can visually compare your shape against each character's.

Character personalities and MBTI types were analyzed by Claude Opus 4.7 based on canon behavior, official profiles, and community discussion.

---

## The Questions

The quiz is **36 questions, 4 per dimension, balanced 2 positive-sign + 2 negative-sign per dim** to control for "always-agree" bias. Every prompt is reskinned in a school-idol context so it reads like a Love Live quiz, not a generic Big-5 form. Examples:

- **E+** "Sign-up day for the school idol club. You walk straight up to the booth, put your name down, and pull a hesitating friend along with you."
- **J+** "You map practice down to 15-minute blocks: warm-up, vocal drill, choreo run, cool-down. Improvising the order feels wrong."
- **C−** "Backstage before your first live, you're convinced you're the weakest link no matter how much the others reassure you."
- **U+** "The 'safe' choreo would land fine. You pitch the weird one with a dance break nobody's tried at Love Live before."

The earlier 45-question set was generic adult-personality items (work meetings, deadlines, online shopping). It also had two M− items ("passing is fine," "peaceful daily life is enough") that *no* idol in the cast scores low on, so they actively dragged matches toward characters that don't exist. The new set drops those, sign-balances every dimension, and pushes the strongest items onto the axes that actually distinguish Love Live characters: **T, J, U, N, C**.

## How the Scoring Works

### 1. Raw Score Accumulation

Each of the 36 questions targets one of 9 dimensions and carries a `sign` of `+1` or `−1`. Your answer (`−2` Strongly Disagree → `+2` Strongly Agree) is multiplied by the sign and added to that dimension's score:

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

For each character, three signals are computed against your 9D trait vector and blended into a final match rate.

**Cosine similarity (55% weight)** — direction match. Whether you and the character lean the *same way* on each trait, regardless of how strongly. This is the dominant signal because Love Live characters cluster at high-magnitude scores while quiz takers vary widely in how decisively they answer; direction is the more meaningful comparison.

```
rawCos    = dot(user, char) / (|user| × |char|)     range [−1, 1]
cosineNorm = (rawCos + 1) / 2                       remapped to [0, 1]
```

The full `[−1, 1]` range is preserved so anti-matches (opposite personalities) correctly rank low instead of being clipped to neutral.

**Scale-invariant Euclidean similarity (35% weight)** — intensity match. Acts as a tie-breaker once direction is established. The user vector is **rescaled to the character's magnitude before** distance is computed:

```
scale       = |char| / |user|
scaledDist  = √Σ (user[d] × scale − char[d])²
euclideanSim = exp(−scaledDist² / 400)
```

Without this rescaling, mild-answering users (mostly 0/±1 answers) end up "far" from every character — even ones whose direction perfectly matches them — because all idols score at high magnitude. Rescaling makes "I lean Honoka but mildly" map cleanly onto Honoka instead of being penalized for not answering loudly.

**Top-3 dominant alignment bonus** (max ~6 pts) — interpretable reward for matching the user's three strongest traits in direction:

```
for each of user's top-3 traits by |score|:
  if Math.sign(user[d]) === Math.sign(char[d]):
    bonus += min(|char[d]|, |user[d]|) / 10 × 2
```

This replaces the previous single-dim synergy bonus, which could swing 0–5 points based on which trait happened to win by 1 point — opaque and noisy.

**Final match rate:**
```
matchRate = cosineNorm × 55  +  euclideanSim × 35  +  dominantBonus  +  5
```

The `+ 5` baseline keeps strong matches in the satisfying 75–99% range. Capped at 99.9% — never claims a perfect match. A decisive player whose direction closely matches a character will see 90–99%. An ambivalent player who answers mostly neutral will see results clustered around 50–60% across the board, which is accurate — the algorithm had little signal to work with.

### Why the formula was rewritten

The original blend was `euclidean × 70 + clipped_cosine × 30 + synergy_bonus`. Three problems:

1. **Cosine clipped to `[0, 1]`** threw away anti-match signal, so opposite-personality characters scored neutral instead of low.
2. **Euclidean weighted at 70%** without scale-invariance meant mild-answering users got ranked by "which character is least extreme" rather than "who am I most like."
3. **Synergy bonus on a single dim** was unstable — flipping which trait won by one point could swing the top 3.

The new blend (cosine-led, scale-invariant Euclidean, top-3 alignment) fixes all three. Verified across simulated user profiles: strong match → top character at 95–98%, *mild* same-direction match → top character at 95% (was broken before), anti-match → opposite character correctly drops below 10%.

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
