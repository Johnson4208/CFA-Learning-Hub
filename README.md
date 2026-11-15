# CFA Notes

A Vietnamese personal CFA learning notebook, built with plain HTML, CSS and JavaScript for GitHub Pages.

## Features
- Twelve original introductory examples across ten CFA topic groups, with SVG illustrations.
- Add and edit notes, formulas, examples and image attachments (PNG/JPEG/WebP, up to 2 MB).
- Add a three-option question and explanation to each note.
- Search, topic filters, bookmarks and understood status.
- Randomized quizzes with explanations, wrong-answer review and local history.
- Flashcards and interactive compound interest calculator.
- JSON backup/restore including images and learning progress.
- Responsive layout and keyboard accessible controls.

## Storage
Notes and progress are stored in localStorage on the current browser, not in GitHub. There is no login or cloud synchronization. Export a backup before clearing browser data or switching devices. GitHub Pages serves the public application and the sample lessons; personal notes are not published to the repo. Browser storage capacity is limited, particularly for images. The app reports save failures without replacing the last saved state.

## Run
Open `index.html`, or use `python -m http.server 8000` in this directory and visit http://localhost:8000. No build or server backend required.

## Deploy
GitHub Pages: Settings → Pages → Deploy from a branch → master → / (root) → Save.

## Educational content
The seed lessons and questions are original simplified learning examples, not official CFA Institute exam content or a complete curriculum. The initial focus is basic concepts commonly studied at Level I. Personal notes may be tagged Level I, II or III.

Public further reading:
- https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/time-value-money
- https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/fixed-income-bond-valuation-prices-and-yields
