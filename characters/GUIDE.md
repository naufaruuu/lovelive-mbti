# Character MBTI & Trait Analysis — Instructions for Fresh Session

## TASK

Given raw character data (official source text + fan votes), produce:
1. **MBTI type** (plus flag if dissenting from majority fan vote)
2. **9 trait scores** on scale -10 to +10, each with reason
3. **mbti_reasoning** — the case for the type, including steelman of runner-up
4. Append to JSON file in consistent schema (see example JSON from prior sessions)

## SOURCE WEIGHT HIERARCHY

Weight sources in this order:

1. **Official comments / in-character text** (highest signal) — what the character actually says when the writers aren't filtered through fan interpretation. Ranking polls, monthly messages, character introductions, anime/game dialogue quotes. One clean official-comment diagnostic often outweighs dozens of fan votes.

2. **Raw character descriptions** (idol.st, wikipedia, namu.wiki, nijichizu) — factual behavior patterns. Treat as primary evidence.

3. **Reddit essays** — fans articulate arc-structure and specific textual details well. Their opinions are transparent enough that the observations behind them are usually real. Useful for character-arc-shape analysis.

4. **PDB opinions** — mixed bag. Good when doing structural function analysis; bad when stereotype-anchored. Screen for:
   - Known INFP/INFJ/INTP **bias** (N-inflation) — fans over-type intuitive
   - Stereotype-anchored arguments ("tech-savvy = INTP", "edgy = ISTP")
   - Vs. genuine function analysis with scene citations

5. **Fan vote counts** — calibration signal only. Weight by direction-relative-to-stereotype-pull:
   - Lopsided-against-stereotype-pull = reliable
   - Lopsided-with-stereotype-pull = suspect
   - Close margin (~55/45) = genuinely contested, treat both sides seriously

## THE CORE MISTAKE TO AVOID

**Aesthetic projection.** Don't let a character's vibe do work that should be done by their behavior.

- "Sleepy/dreamy floaty girl" reads INFP/INTP but could be ISFJ caretaker
- "Tech-girl with logical board" reads INTJ/INTP but could be INFP doing emotional problem-solving through tech
- "Cool mature onee-san" reads ESTP/ENFJ but could be ISFP in constructed-persona mode
- "Artistic identity-arc character" reads INFJ but could be ISFJ expressing through craft

**Rule: Describe behavior, then type. Never type, then describe behavior.**

## THE 5 KEY DIAGNOSTICS

Work through these BEFORE committing to a type:

### 1. Relationship to own emotions (T vs F)
- **T-dom**: analyzes own feelings as logical puzzle ("I feel X, yet data suggests Y, why?")
- **F-dom**: feels emotions directly, struggles to *express* them, not to *identify* them

### 2. Conform or protect? (Fe vs Fi)
- **Fe**: hides unusual interests because "afraid to be seen as oddball" — shame-around-deviation
- **Fi**: protects unusual interests as private identity — pride-in-deviation

### 3. How do they express care? (function stack diagnostic)
- **Te**: structural solutions — create organization, hire pros, mandate participation (control)
- **Fe**: relational enabling — help others express themselves
- **Si-Fe**: hands-on concrete service — cook, clean, tutor, remember
- **Fi**: wanting authentic mutual recognition / helping-from-internalized-value

### 4. Concrete or visionary planning? (S vs N + J/P details)
- **Si-Te**: proven methods, track records, traditional forms
- **Ni-Te**: imagine structure, then build it
- **Ni-Fe**: cultural mission, change how people relate
- **Se-Fi**: aesthetic identity construction

### 5. Default energy around new people (E vs I)
- **E+**: actively approaches, initiates bonds (costless)
- **E near 0**: warm when approached
- **I**: "doesn't like being around many people" — even if sociable, default is costly/depleting

## TRAIT SCORING RULES

### Rule 1: Separate persona from baseline
If text says "seems X but actually Y," score Y. Score surface as noise.
- Applies to: Karin (sexy-persona vs introvert-core), Kasumi (black-hearted-facade vs good-hearted), Mia (cocky-facade vs insecure), Shizuku (perfect-mask vs hidden-self)

### Rule 2: M (Ambition) = the WANT, not the WORK
- Hard worker + low M: tries at what's in front of her, didn't choose the path
- High M: wants to win, drives competitively, actively pursues
- Kanata works hard but dream is "nap with audience" → low M
- Ayumu works hard but follows Yu's suggestion → low M

### Rule 3: C (Confidence) is baseline, not presentation
- External confidence built on underlying insecurity → moderate, not high
- Built-on-old-insecurity but earned → moderate positive
- "Seems X but actually Y" applies here strongly

### Rule 4: U (Uniqueness) requires external + internal alignment
- External only (unique backstory, standard personality) → modest
- Internal only (weird inside, presents normally) → modest
- Both align → high
- Emma: Swiss+freckles+8-siblings external, standard-wholesome internal → slight negative
- Tsuzuri: weird interests, weird speech, weird cognition → +9

### Rule 5: O (Optimism) is resilience, not cheerfulness
- Ask: what do they expect will happen?
- "Happy affect" ≠ optimism
- High O: positive baseline AND bounces back (Ai, Yu)
- High O, quieter: collapsed club and came back (Setsuna)
- Low O: "students should do things they can succeed at" = expects failure (Shioriko)

### Rule 6: Read traits against neighbors, not in isolation
- Ai's E=9 only means something compared to someone's E=-7
- Glance at nearest comparisons — "is this person more or less [trait] than that one?"
- Absolute scores drift; relative grounding corrects

## WORKFLOW

For each new character:

1. **Read entire raw source before typing** — don't start forming opinions from the first paragraph
2. **Extract 4-5 behavioral data points** — not aesthetic descriptors, actual things they DO
3. **Answer the 5 diagnostics above**
4. **Propose a type, stress-test against 1-2 neighbors**
   - ISFJ vs INFJ (both Fe, introverted, J)
   - INTP vs INFP (the tech-vs-emotion trap)
   - ESTP vs ISFP (Se-Fi axis reversal)
   - ENFP vs ESFP (Ne vs Se)
   - ENFJ vs ESFJ (Ni vs Si)
5. **Score 9 traits** against absolute meaning AND relative to existing cast
6. **Separate persona from baseline** — apply Rule 1 strictly
7. **Write mbti_reasoning with legitimate runner-up case**
   - Don't dismiss the minority fan vote — steelman it briefly
   - Flag real uncertainty honestly ("55/45 confidence" is better than false certainty)
8. **Append to JSON** using same schema — validate syntax

## JSON SCHEMA REFERENCE

```json
"character_key": {
  "name": "Full Name",
  "kanji": "漢字名",
  "color": "#hexcode",
  "mbti": "XXXX",
  "fan_votes": { "TYPE1": N, "TYPE2": N, ... },
  "dissents_from_fan_majority": true,  // only if dissenting
  "traits": {
    "E": { "score": N, "reason": "..." },
    "J": { "score": N, "reason": "..." },
    "T": { "score": N, "reason": "..." },
    "C": { "score": N, "reason": "..." },
    "M": { "score": N, "reason": "..." },
    "O": { "score": N, "reason": "..." },
    "A": { "score": N, "reason": "..." },
    "U": { "score": N, "reason": "..." },
    "N": { "score": N, "reason": "..." }
  },
  "mbti_reasoning": "Long paragraph making the case, steelmanning runner-up, noting uncertainty if real."
}
```

### Trait dimensions:
- **E**: Extroversion (positive = extroverted, negative = introverted)
- **J**: Judging (positive = planned/structured, negative = spontaneous/flexible)
- **T**: Thinking (positive = logical/rational, negative = emotional/feeling)
- **C**: Confidence (positive = self-assured, negative = insecure)
- **M**: Ambition (positive = driven/competitive, negative = content/laid-back)
- **O**: Optimism (positive = optimistic/resilient, negative = pessimistic/anxious)
- **A**: Agreeableness/Empathy (positive = empathetic/caring, negative = competitive/cold)
- **U**: Uniqueness (positive = unconventional/eccentric, negative = conventional/conforming)
- **N**: Intuition (positive = intuitive/abstract/future-focused, negative = sensing/concrete/present-focused)

## HONESTY CHECKPOINTS

- If a lopsided fan vote points one way and your analysis points another, stress-test HARDER — you could be right or wrong
- If you're defending a call by citing details rather than re-reading the overall pattern, you're rationalizing — go back to the source fresh
- Flag confidence levels: "ISFJ but INFJ is defensible" is better than false certainty
- Large dissents (rejecting 70%+ majorities or rejecting top-3-of-4-options) need explicit confidence hedging in the mbti_reasoning

## CHARACTER FAMILY CROSS-REFERENCES

When typing a new character, compare to existing analyzed characters in the same type family. If the new character fits the family pattern, that's confirming evidence. If they break the pattern significantly, stress-test the call.

Reference calls across both analyzed casts (Hasunosora + Nijigasaki) give examples of multiple expressions per type — don't force-diversify by mistyping, and don't pattern-match too rigidly either. A type family can contain different flavors (missionary/visionary/pastor/broken-knight ENFJs, devoted-friend/sleepy-caretaker/disciplined-performer/disciplined-athlete ISFJs).

## REFERENCE PHILOSOPHY QUOTES

- "M measures the WANT, not the WORK."
- "Shame-around-deviation points Fe. Pride-in-deviation points Fi."
- "If you can say 'her core arc is X' and X is emotional/relational/values-driven, it's an F character regardless of the cool tech she uses."
- "No single detail should anchor the whole profile. Make yourself list 3+ data points before typing."
- "Type on function stacks, not vibes."
- "When you find yourself reaching for evidence, you're already rationalizing. Go back to the raw source and read it fresh."