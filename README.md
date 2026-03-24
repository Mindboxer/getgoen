# Get Goen — Portfolio Site

Visual storytelling from Japan.
Cinematic video and photography, rooted in place.

---

## Project structure

```
getgoen/
├── index.html                        # Home page
├── css/
│   └── style.css                     # All styles
├── js/
│   └── main.js                       # Site interactivity
├── work/
│   ├── index.html                    # Full project index (TODO)
│   ├── aizome/
│   │   └── index.html                # Project page (TODO)
│   ├── shugendo/
│   │   └── index.html                # Project page (TODO)
│   ├── temple-art-kyoto/
│   │   └── index.html                # Project page (TODO)
│   ├── danjiri/
│   │   └── index.html                # Project page (TODO)
│   └── gzo-experience/
│       └── index.html                # Case study page (TODO)
└── assets/
    ├── images/
    │   ├── goen-logo.png             # Distressed mark
    │   ├── og-image.jpg              # Social share card 1200×630px (TODO)
    │   └── projects/                 # One folder per project
    │       ├── aizome/
    │       ├── shugendo/
    │       ├── temple-art-kyoto/
    │       ├── danjiri/
    │       └── gzo-experience/
    └── video/
        └── previews/                 # Short silent clips for grid hover
            ├── aizome.mp4            (TODO)
            ├── shugendo.mp4          (TODO)
            ├── temple-art-kyoto.mp4  (TODO)
            ├── danjiri.mp4           (TODO)
            └── gzo-experience.mp4    (TODO)
```

---

## Content plan

### Home page work grid (curated, 5 items)

| Slot     | Project                     | Type                   | Status      |
|----------|-----------------------------|------------------------|-------------|
| Featured | Aizome — The Floating World | Documentary            | In progress |
| 2        | Shugendo                    | Documentary            | TODO        |
| 3        | Temple + Art, Kyoto         | Documentary / Cultural | TODO        |
| 4        | Danjiri artisan profile     | Documentary            | TODO        |
| 5        | GZO Experience              | Case study / Spotlight | TODO        |

Music / performance work included selectively where visually strong.
No special framing needed — let the work speak.

### Services (framed around client goals)

1. **Tell a story** — documentary, cultural, artisan craft
2. **Build a brand** — campaign film, identity, full creative coverage
3. **Enter Japan** — bilingual production, cultural translation

### Brand voice

- "We" framing throughout (studio-ready, not locked to solo)
- Founder visible in About section
- Open to consulting positioning (GZO case study demonstrates this)

---

## Running locally

Open the `getgoen/` folder in Cursor.
Install the Live Preview extension and open `index.html`.
No build step required.

---

## Git workflow

```bash
git add .
git commit -m "describe what changed"
git push
```

Commit after each meaningful change — new section, content update, bug fix.
Work directly on `main` for now.
Use a feature branch for experimental changes:

```bash
git checkout -b experiment-name
# make changes
git checkout main
git merge experiment-name
```

---

## Deployment

GitHub Pages — push to `main` branch to publish.
Custom domain to be configured once ready.

---

## Launch checklist

### Before launch
- [ ] Set up Git and push to GitHub
- [ ] Replace hero placeholder with real video embed
- [ ] Add real project thumbnails (assets/images/projects/)
- [ ] Add hover preview clips (assets/video/previews/)
- [ ] Create og-image.jpg (1200×630px)
- [ ] Fill in meta description and Open Graph tags
- [ ] Update canonical URL in index.html
- [ ] Write About copy
- [ ] Finalise services copy
- [ ] Test on mobile
- [ ] Check all links work

### After launch
- [ ] Set up custom domain
- [ ] Add individual project pages (work/[slug]/index.html)
- [ ] Add full work index page (work/index.html)
- [ ] Add GZO Experience case study page
- [ ] Submit sitemap to Google Search Console
