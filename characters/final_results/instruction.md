# Character localization task

## Goal

For each character in `raw_results/nijigasaki.json`, produce a localized JSON file at `final_results/nijigasaki/<character_slug>.json` containing the character description and MBTI reasoning in **English (`en`)**, **Japanese (`ja`)**, and **Indonesian (`id`)**.

Numeric scores must be copied exactly. The `mbti.type` and `color` come from `raw_results`. The `name.ja` (kanji) comes from raw_data; `name.en` and `name.id` use the romaji name.

## Inputs

| Source | Location | Use for |
|---|---|---|
| Analysis | `raw_results/nijigasaki.json` | All MBTI scores, type, fan votes, full reasoning per trait, overall mbti_reasoning |
| Raw text | `raw_data/nijigasaki/<slug>.txt` | Character description (`desc`) — bio, personality, official comments. Only read this for `desc`. |

The 13 characters in `raw_results.characters`:

```
ai_miyashita, ayumu_uehara, emma_verde, kanata_konoe, karin_asaka,
kasumi_nakasu, lanzhu_zhong, mia_taylor, rina_tennoji, setsuna_yuki,
shioriko_mifune, shizuku_osaka, yu_takasaki
```

## Tooling

### jq (Windows)

`jq` is installed via winget. After shell restart, just `jq` works. Until then, use the full path:

```bash
JQ="/c/Users/naufa/AppData/Local/Microsoft/WinGet/Packages/jqlang.jq_Microsoft.Winget.Source_8wekyb3d8bbwe/jq.exe"
```

### Efficient access patterns

**Don't `Read` the whole `raw_results/nijigasaki.json`** — it's ~41k tokens. Always use `jq` to extract one character at a time.

```bash
# List all character slugs
"$JQ" '.characters | keys' raw_results/nijigasaki.json

# Get one character's full analysis (this is what you actually want)
"$JQ" '.characters.setsuna_yuki' raw_results/nijigasaki.json

# Get just the trait scores + type (sanity check before writing)
"$JQ" '.characters.setsuna_yuki | {mbti, traits: .traits | map_values(.score)}' raw_results/nijigasaki.json

# Get only the per-trait reason text for one character
"$JQ" '.characters.setsuna_yuki.traits | map_values(.reason)' raw_results/nijigasaki.json
```

### Reading raw_data

Read `raw_data/nijigasaki/<slug>.txt` once per character. The file contains sections like `(introduction)`, `(nijichizu)`, `(idol.st)`, `(wikipedia)`, `(personality-database.com opinion)`, `(reddit opinion)`, `(Official Comment)`. **For `desc`, the most relevant sections are `(introduction)`, `(nijichizu)`, and `(idol.st) personality:`**. Skip the MBTI debate / fan opinions / official ranking comments — those are already digested into `raw_results`.

If the raw_data file does not exist for a character, base the `desc` on the analysis content in `raw_results.characters.<slug>.mbti_reasoning` instead. Do not fabricate biographical facts.

## Output

One file per character: `final_results/nijigasaki/<slug>.json`. Schema (Setsuna shown as the canonical example below).

The aggregate file `final_results/nijigasaki.json` already exists with `_meta` and Setsuna's full entry — do not modify it. Per-character files are the deliverable.

### Output schema

```json
{
  "color": "#hex",
  "name": { "en": "...", "ja": "...", "id": "..." },
  "desc": { "en": "...", "ja": "...", "id": "..." },
  "mbti": {
    "type": "XXXX",
    "reason": { "en": "...", "ja": "...", "id": "..." },
    "traits": {
      "E": { "score": <int>, "reason": { "en": "...", "ja": "...", "id": "..." } },
      "J": { "score": <int>, "reason": { "en": "...", "ja": "...", "id": "..." } },
      "T": { "score": <int>, "reason": { "en": "...", "ja": "...", "id": "..." } },
      "C": { "score": <int>, "reason": { "en": "...", "ja": "...", "id": "..." } },
      "M": { "score": <int>, "reason": { "en": "...", "ja": "...", "id": "..." } },
      "O": { "score": <int>, "reason": { "en": "...", "ja": "...", "id": "..." } },
      "A": { "score": <int>, "reason": { "en": "...", "ja": "...", "id": "..." } },
      "U": { "score": <int>, "reason": { "en": "...", "ja": "...", "id": "..." } },
      "N": { "score": <int>, "reason": { "en": "...", "ja": "...", "id": "..." } }
    }
  }
}
```

### Trait dimensions (signs matter)

| Key | Positive | Negative |
|---|---|---|
| E | Extroverted | Introverted |
| J | Planned/structured | Spontaneous/flexible |
| T | Logical/rational | Emotional/feeling |
| C | Self-assured | Insecure |
| M | Driven/competitive | Content/laid-back |
| O | Optimistic/resilient | Pessimistic/anxious |
| A | Empathetic/caring | Competitive/cold |
| U | Unconventional/eccentric | Conventional/conforming |
| N | Intuitive/abstract/future-focused | Sensing/concrete/present-focused |

## Language style guide

The audience is fans, not researchers. Tone: **opinionated, observational, a little nerdy** — the way someone who actually likes the franchise and MBTI would talk. Not encyclopedia, not academic.

### Universal rules

- **Preserve all MBTI terminology** (Ni, Fe, Ti, Si, Se, dominant, tertiary, inferior, etc.) in every language. Do not "simplify" these out — the audience expects them.
- **Preserve concrete examples** (third-floor dive, pillow-Kasumi, spicy bread, "Setsuna Scarlet Storm", rainy-day reframe). They are the anchor that carries meaning across languages.
- **Don't add new claims** that aren't in `raw_results` reasoning. You are localizing, not re-analyzing.
- **Keep franchise terms in English**: "school idol", "club", character names. Don't translate "school idol" to "アイドル学校" or "idola sekolah".
- **Don't change scores or types**.
- **Match paragraph length** across the three languages roughly. Per-trait reasons are 2–4 sentences. Overall `mbti.reason` is a single paragraph (~5–10 sentences).

### English (`en`)

- Casual conversational, contractions OK ("isn't", "she's"), em-dashes for asides.
- Scare-quotes around fan phrases or the character's own catchphrases.
- Punchy closer sentence per paragraph when natural.

### Japanese (`ja`)

- Mix です・ます with casual sentence enders (〜だけど、〜って、〜じゃない、〜感じ).
- 〜系, 〜タイプ for character-trait shorthand is natural.
- Em-dashes (——) for rhythmic asides.
- MBTI function names stay in English letters: Ni, Fe, Ti, Se. Don't use 直観/感情 substitutes.
- Quote katakana/symbolic phrases with 「 」.

### Indonesian (`id`) — read this carefully

This is the language most likely to come out badly if you translate literally. Target register: **casual-but-thoughtful Indonesian, the way Indonesian MBTI Twitter actually writes.** Not formal academic. Not stiff English-with-Indonesian-suffixes.

**Particles to use in moderation**: `sih`, `kok`, `nih`, `ya`, `dong`, `kan`, `aja`, `gitu`. Sprinkle, don't pile on.

**Pronouns**: prefer `aku`/`-ku`/`buatku`/`menurutku` over `gue` (more universal across regions). Don't switch within a paragraph.

**Common calques to AVOID — and what to use instead**:

| Awkward calque | Natural Indonesian |
|---|---|
| `fisikalitas Se` | `sisi fisik Se` |
| `tumpukan ENFJ` (function stack) | `stack ENFJ` |
| `altruistic-mission` | `misi yang altruistik` |
| `reframe positif` | `ngubah cara pandangnya jadi positif` |
| `arketipal` | `pakem` / `pola tokoh klasik` |
| `pola pikir Ni-Fe khas misionaris` | `Pola mikir kayak gini ciri khas Ni-Fe yang "misionaris"` |
| `"Skala misi yang jadi penentu."` (terse) | `"Yang jadi pembeda akhirnya ya skala misinya."` |
| `dijelaskan sebagai` | `dijelasin lewat` / `dijelasin sebagai` |
| `dalam tumpukan` | `di stack` |
| `secara abstrak` (academic) | `yang abstrak` |
| `peringkat dropping` | `peringkat turun` |
| `optimisme yang otomatis` | `optimisme yang ngalir otomatis` |

**Self-check**: re-read your Indonesian output once. If a sentence sounds like English grammar with Indonesian words plugged in, rewrite it. Ask: would an Indonesian fan on Twitter actually say it this way? If no, fix it.

**Don't over-translate franchise/MBTI terms**: keep `school idol`, `passion`, `blind spot`, `tunnel vision`, `presence`, `trial-and-error`, `stack`, `Ni`, `Fe`, etc. as-is.

**One or two English loanwords per paragraph is the natural ceiling.** Don't pile English nouns just because Indonesian has them — but don't go puritan and force a clunky equivalent either.

## Workflow per character

1. `jq '.characters.<slug>' raw_results/nijigasaki.json` to get full analysis.
2. Read `raw_data/nijigasaki/<slug>.txt` (only the intro/nijichizu/personality sections) to grab character facts for `desc`.
3. Draft `desc.en` from raw text (3–4 sentences capturing who they are, their hook, their secret/twist if any).
4. Draft `mbti.reason.en` by paraphrasing the `mbti_reasoning` field — same argument structure, casual register.
5. Draft each `traits.<KEY>.reason.en` by paraphrasing the corresponding `reason` from raw_results — keep concrete examples, drop the formal "She is..." constructions.
6. Translate all `en` text to `ja` — natural Japanese, not literal.
7. Translate all `en` text to `id` — natural Indonesian per the guide above.
8. Re-read the Indonesian once. Fix any sentence that sounds translated.
9. Write `final_results/nijigasaki/<slug>.json`.
10. Validate: `jq empty final_results/nijigasaki/<slug>.json && echo ok`.

## Canonical example: setsuna_yuki

Saved as `final_results/nijigasaki/setsuna.json`. Read the file to understand the example 

```

## Final checks before saving each file

1. `jq empty <file>` exits clean (valid JSON).
2. All 9 traits present (E, J, T, C, M, O, A, U, N), scores match `raw_results` exactly.
3. `mbti.type` matches `raw_results`.
4. No empty strings in any `reason` or `desc` field.
5. Indonesian re-read once. Sounds like a person, not Google Translate.
6. Concrete examples from `raw_results` are still present in all three languages.
