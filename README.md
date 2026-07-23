# CM\u2014Inspect: Equipment Inspection Checklists

A static, no-build website of digital inspection checklists for condition
monitoring, split into three categories: **Static Equipment**, **Rotating
Equipment**, and **Lube Team**. Built to run on GitHub Pages with no
server or database.

## What's included

```
index.html                         Home / dashboard
static-equipment/
  tank-external.html                Tank External Inspection (CM-TANK-EXT-001)
  tank-internal.html                Tank Internal Inspection (CM-TANK-INT-001)
  structural.html                   Structural Inspection (CM-STRUCT-INSP-001)
rotating-equipment/
  index.html                        Placeholder + instructions for adding checklists
lube-team/
  index.html                        Placeholder + instructions for adding checklists
assets/
  style.css                         Shared design system
  app.js                            Checklist rendering + save/print/export engine
  checklists/
    tank-external-data.js
    tank-internal-data.js
    structural-data.js
```

Each checklist page checks off items, takes notes, flags findings, fills in
the condition-summary and sign-off tables, and **saves automatically** to
the browser's local storage \u2014 nothing is lost on refresh. There's a
print/PDF button (uses a clean print stylesheet) and an export button that
downloads a plain-text summary of flagged items and notes.

## Deploy to GitHub Pages

1. Create a new repo (or use an existing one), e.g. `equipment-inspections`.
2. Copy everything in this folder into the repo root.
3. Commit and push:
   ```
   git add .
   git commit -m "Add equipment inspection checklists"
   git push
   ```
4. In the repo: **Settings \u2192 Pages \u2192 Source** \u2192 select the branch
   (usually `main`) and root folder \u2192 Save.
5. Your site will be live at `https://<username>.github.io/<repo>/` within
   a minute or two.

If this is going into an **existing** GitHub Pages site rather than a new
repo, drop the `static-equipment/`, `rotating-equipment/`, and `assets/`
folders into your existing site, and either replace your homepage with
this `index.html` or link to `static-equipment/tank-external.html` etc.
from your current homepage/nav.

## Adding a rotating equipment or lube team checklist

Every checklist is two files, both following the tank/structural pattern:

1. `assets/checklists/<name>-data.js` \u2014 defines `window.CHECKLIST_DATA`
   with a unique `storageKey`, the document info fields, and sections/items.
2. `rotating-equipment/<name>.html` or `lube-team/<name>.html` \u2014 a thin
   page (copy `static-equipment/tank-external.html`, swap the two
   `<script>` src paths) that loads the data file and calls
   `CM.render(window.CHECKLIST_DATA)`.

Then add a card for it on `index.html` (copy one of the existing
`sheet-card` blocks) and, once you have more than one, replace the
placeholder card on `rotating-equipment/index.html` or
`lube-team/index.html` with real ones. Both pages already list suggested
checklists to start from \u2014 pump, motor, gearbox, compressor, fan and
conveyor drive for rotating equipment; oil sampling, grease routes,
top-ups, filter changes and lube storage for the lube team.

## Known limitation \u2014 local-only storage

Checklist progress is saved with the browser's `localStorage`, so it's
**per device/browser**, not shared between an inspector's phone and the
office desktop, and clearing browser data clears it. That's fine for a
single inspector filling out a form and printing/exporting the result on
the spot. If you want checklists to sync across devices or store a
permanent multi-user history, see the suggestions below.
