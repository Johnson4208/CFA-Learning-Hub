# CFA Notes

A personal CFA study space with a Vietnamese reading interface, English terminology, source-linked summaries, visual explanations, practice quizzes, flashcards and private notes.

## Content policy
**Add a learning module only when the user supplies its source document.** Do not seed unrelated lessons, recommended topics or speculative curriculum. Source changes must preserve this rule.

Current library: exactly one source document / one module:
- IFT, *L1 LM1 Organizational Forms, Corporate Issuer Features, and Ownership – Study Notes (2027)*, 12 pages, supplied by the user.
- Eight sections cover the document; each cites source page numbers.
- Eighteen original practice questions and ten flashcards derive exclusively from that document.
- Visuals are custom explanatory diagrams. Added illustrative examples are labeled; the Elo example uses the document's figures.
- Statements about legal forms, tax, direct listings and eligibility are scoped to the source model rather than universal rules.
- The original copyrighted PDF is not republished. This is an independent study aid, not an official CFA Institute or IFT product.

## App
Buildless HTML/CSS/JavaScript. GitHub Pages deploys `master` from repository root. Relative URLs support the project path. No backend or credentials.

## Personal data
Stored in browser localStorage under `cfa-notes-v2`. Data is not sent to GitHub. No cross-device sync. Export JSON backups before clearing browser data or switching devices. PNG/JPEG/WebP note attachments are supported up to 2 MB each; total browser storage quotas still apply. Writes report failures without replacing in-memory saved state.

Migration preserves user-authored/edited notes from `cfa-notes-v1`; old data is retained in the legacy backup field. The old 12 auto-seeded lessons are no longer in the library, quizzes or flashcards. Prior personal progress is archived rather than counted as progress in the new module. Original v1 storage is left intact. Import supports v1 and v2 backup formats.

## Run
Open index.html or serve the repository root with `python -m http.server 8000`.

## Design
Ivory workspace, compact navigation, editorial typography, terracotta accents. One module in the library, a persistent section outline while reading, section-level notes and bookmarks. Responsive mobile layout, labeled form controls, keyboard-accessible dialogs and SVG diagrams with accessible text.
