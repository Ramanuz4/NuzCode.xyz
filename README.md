# NuzCode Website — Simple Editing Guide

Welcome! This guide explains how to add a new game to the Portfolio page and how to create a new page.

## 1. Folder map

- `index.html` — homepage.
- `pages/portfolio.html` — the portfolio grid where all game tiles are listed.
- `pages/games/` — individual game detail pages.
- `assets/images/logos/` — game logos.
- `assets/images/games/` — game screenshots and artwork.
- `css/site.css` — homepage and shared site styling.
- `css/content.css` — styling for About, Portfolio, Contact, Skills, and Resume pages.
- `css/game.css` — styling for individual game pages.
- `js/site.js` — shared interactions such as the theme toggle and clock.
- `js/game.js` — game-page interactions, if used.

## 2. Add a new game to the Portfolio page

You will do two things:
1. Create the game's detail page.
2. Add a clickable card for it in `pages/portfolio.html`.

### Step A — Add the game's images

1. Put the game's logo in `assets/images/logos/`, for example `my game logo.png`.
2. Put screenshots in `assets/images/games/`, for example `my-game-1.png`.
3. Use simple filenames without unusual symbols if possible.

### Step B — Create a folder and detail page

Inside `pages/games/`, create a folder for the game. Example:

`pages/games/MyNewGame/mynewgame.html`

Copy an existing detail page, such as `pages/games/KitchenChaos/kitchenchaos.html`, into the new folder and edit the title, description, logo, screenshots, features, controls, and links.

**Important:** Because the new HTML file is nested inside `pages/games/MyNewGame/`, asset paths usually start with `../../../assets/` and styles/scripts use `../../../css/` and `../../../js/`. For example:

```html
<link rel="stylesheet" href="../../../css/game.css">
<script src="../../../js/site.js" defer></script>
<img src="../../../assets/images/logos/my game logo.png" alt="My New Game logo">
<img src="../../../assets/images/games/my-game-1.png" alt="My New Game screenshot">
```

Copy the full structure of an existing game page first so the shared header, footer, theme toggle, and layout remain consistent.

### Step C — Add a card to `pages/portfolio.html`

Open `pages/portfolio.html` and find the `<div class="game-grid">` section. Inside it, copy one existing `<a class="game-card" ...> ... </a>` block and edit:
- `href` — path to your new detail page.
- image `src` — path to the new game logo.
- image `alt` — accessible description of the logo.
- `<h3>` — game title.
- `<p>` — short game description.

Example card (adapt paths and text to your game):

```html
<a class="game-card" href="games/MyNewGame/mynewgame.html">
  <img src="../assets/images/logos/my game logo.png" alt="My New Game logo">
  <div class="game-card-body">
    <h3>My New Game</h3>
    <p>A short, interesting description of what the player does in this game.</p>
    <span class="card-link">Explore project ↗</span>
  </div>
</a>
```

Since `portfolio.html` is inside `pages/`, the logo path starts with `../assets/`, and the detail-page link starts with `games/`.

Save the files and refresh the browser. The new game should appear as a clickable tile on the Portfolio page.

## 3. Add a new standalone page

1. Create an HTML file in `pages/`, such as `pages/press.html`.
2. Copy a similar existing page (`about.html` or `skills.html`) and change the title and content.
3. Use `../css/site.css` and `../css/content.css` for styles, and `../js/site.js` for shared interactions.
4. Link to it from the homepage `index.html` or from another page.

Example link from `index.html`:

```html
<a class="tile" href="pages/press.html">
  <span class="tile-label">Press</span>
  <span class="arrow">↗</span>
</a>
```

## 4. Change the homepage profile picture

The profile photo is just an image, not a link. Replace the image file at `assets/images/profile/pfp 2.jpg` with your preferred photo (keep the same filename), or update the `src` in `index.html` to point to a different image. The picture itself does not navigate to another page.

## 5. Preview your changes

- Open the project folder in VS Code.
- Use the Live Server extension to launch `index.html`.
- Navigate to Portfolio and click the new game card.
- Test on desktop and mobile widths.
- Check every image and link before publishing.

## 6. Quick checklist

- [ ] Logo added to `assets/images/logos/`
- [ ] Screenshots added to `assets/images/games/`
- [ ] Detail page created under `pages/games/`
- [ ] Paths use the correct number of `../` segments
- [ ] New game card added to `pages/portfolio.html`
- [ ] Game description, controls, features, and external links updated
- [ ] Tested in browser

Tip: Always copy the closest existing page and edit it instead of starting from a blank file. This keeps the design consistent.
