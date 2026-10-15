# NuzCode Website — Editing Guide

## Main folders
- `index.html` — homepage and its tile layout.
- `pages/portfolio.html` — portfolio grid.
- `pages/games/` — individual game pages.
- `assets/images/logos/` — game logos.
- `assets/images/games/` — screenshots and artwork.
- `assets/images/profile/` — profile picture.
- `assets/resume/Ramanuz-Kashyap-Resume.pdf` — resume PDF opened by the homepage Resume tile.
- `css/site.css`, `css/content.css`, `css/game.css` — site styles.
- `js/site.js`, `js/game.js` — shared and game-page scripts.

## Add a game
1. Add the logo to `assets/images/logos/` and screenshots to `assets/images/games/`.
2. Copy an existing folder in `pages/games/` and edit its HTML content and image/link paths.
3. In `pages/portfolio.html`, copy an existing `<a class="game-card">` and update its destination, image, title, and description. Because the portfolio file is inside `pages/`, image paths start with `../assets/` and game-page paths start with `games/`.
4. Open `index.html` with VS Code Live Server and test the portfolio link.

## Add a page
1. Copy a similar existing page in `pages/`, then edit its title and content.
2. Use `../css/` and `../assets/` paths from pages in the `pages/` folder.
3. Add a link to it from the homepage or another relevant page.

## Change the profile photo
Replace `assets/images/profile/pfp 2.jpg` with another image using the same filename, or change the image `src` in `index.html`. The photo is image-only and is not a link.

## Run locally
Open the folder in VS Code and launch `index.html` with Live Server. This is a static site; no build command is needed.
