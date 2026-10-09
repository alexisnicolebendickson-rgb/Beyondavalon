# Rebrand Changelog — "Beyond Avalon" → "The Counter-Archive: Land, Capital, People"

**Date:** October 9, 2026
**Branch:** `rebrand-counter-archive`
**Status:** NOT DEPLOYED. NOT PUSHED. Branch only.

## What changed

### Site-wide rebrand (37 HTML files)
Every page's visible project name changed from "Beyond Avalon" to "The Counter-Archive":

1. **`<title>` tags** — e.g. `<title>Recent Findings — The Counter-Archive</title>`; index: `<title>The Counter-Archive — Reclaiming the Jones-Perkins Enslaved Kinship Network</title>`
2. **Nav brand** — now reads "The Counter-Archive" with subtitle "Land, Capital, People" beneath (new `.brand-text` / `.brand-sub` spans); `aria-label` updated to "The Counter-Archive home"
3. **Footer brand** — same brand+subtitle treatment
4. **Copyright** — `© 2026 The Counter-Archive · Independent research by Alexis Bendickson`
5. **JSON-LD** (index.html) — `"name": "The Counter-Archive"`
6. **Meta descriptions** — "Beyond Avalon project" → "The Counter-Archive project"; person pages now read "A Counter-Archive person page"
7. **Body prose** — lede ("The Counter-Archive documents the enslaved people…"), about ("The Counter-Archive is led by…"), mentor credit ("on The Counter-Archive project"), QR alt text, data.html lede + citation, source-list labels ("Counter-Archive research notes", "Counter-Archive desk research")

### style.css
- Added `.brand-text` (flex column) and `.brand-sub` (small caps subtitle) rules after the `.brand:hover` rule.

### Header comments only (not visible)
- `app.js`: "Beyond Avalon — shared site behavior" → "The Counter-Archive — shared site behavior"
- `base.css`: "BEYOND AVALON — Design Tokens" → "THE COUNTER-ARCHIVE — Design Tokens"

### findings.html — 3 new entries added (newest first, above the Priscilla Jones entry)
1. Frances B. Jones identified (Oct 9, 2026)
2. Shandy Jones: the plantation birth is back on the table (Oct 9, 2026)
3. A Black church lot inside a 500-acre Jones estate fight (Oct 9, 2026)

All three use `verdict-doc` (Documented) per the draft.

## What was NOT changed
- **URLs**: `https://beyondavalon.app/` and all `beyondavalon` URL references are untouched
- **Data files**: `plantations-data.js`, `black-jones-tree-data.js`, `cemeteries-data.js`, `family-tree-data.js`, `fan-graph-data.js`, `uah-campus-data.js`, `glo-patents-data.js`, `convict-leasing-map-data.js`, `registry-data.js` — provenance comments inside them still say "Beyond Avalon research notes" (historical attribution, left as-is)
- **Findings content**: existing entries were not rewritten (only the MSSA entry's project-name reference was updated for consistency)
- **File paths, links, navigation structure**: unchanged

## Files changed (41 total)
37 HTML files + style.css + app.js + base.css + findings.html (findings counted in the 37)

Full list: archival-violence.html, avalon-boundary.html, black-jones-tree.html, cemeteries.html, convict-leasing-map.html, data.html, debt-labor.html, eminent-domain.html, exploitation.html, family-tree.html, fan-graph.html, findings.html, glo-patents.html, glossary.html, index.html, institutional-knowledge.html, leasing.html, map.html, migration.html, philanthropy.html, scc.html, uah-campus-map.html, uah-knew.html, voyages.html, people/anthony-mary-jones.html, people/christofer-columbus-jones.html, people/columbus-jones.html, people/dora-jones.html, people/elizabeth.html, people/fortune.html, people/index.html, people/nancy-marshall-zachariah-jones.html, people/reuben-jones.html, people/shandy-wesley-jones.html, people/tomietta-jones.html, people/turner-moore.html, people/willie-fay-jones.html, style.css, app.js, base.css

## Git status
- Branch: `rebrand-counter-archive` (created from main @ Oct 9, 2026)
- NOT committed to main. NOT pushed. NOT deployed.
- To review: `git diff main --stat`
- To deploy (requires her explicit go-ahead): merge to main, push, Vercel auto-deploys.
