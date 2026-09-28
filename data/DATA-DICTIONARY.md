# Beyond Avalon — Data Dictionary (DRAFT)
*Snapshot: September 28, 2026. Draft for the researcher's review. Nothing here has been deposited, published, or uploaded anywhere.*

## Snapshot provenance

| Item | Detail |
|---|---|
| Snapshot date | 2026-09-28 |
| DB1 source | "Avalon Research Database" — Google Sheets `1hyISgNEfu_L75o0j2G6HZeAmXEaqR6_oYJvPGmycBZI`, tab `Sheet1` |
| DB2 source | "Reclaiming Enslaved Names" — Google Sheets `1oBI--IphM1C0GDsz9w79_iPefgJaUcaIkuKm6PhwQQ0`, tab `Sheet1` |
| DB2 Leads source | Same spreadsheet, tab `Enslaved People Research Leads` |
| Method | Read-only export via Sheets API; live sheets untouched |
| Files | `db1-avalon-research-database-20260928.csv`, `db2-reclaiming-enslaved-names-20260928.csv`, `db2-research-leads-20260928.csv` |

Row counts (populated = at least one non-blank cell):

| Table | Sheet rows (excl. header) | Fully empty | Populated |
|---|---|---|---|
| DB1 main | 1,882 | 29 | **1,853** |
| DB2 main | 2,067 | 617 | **1,450** |
| DB2 research leads | 169 | 0 | **169** |

Related tabs in the live spreadsheets NOT included in this snapshot (internal workflow): DB1 `Evidence Color Key` (defines the H1–H8 codes and Status values used below; its content is transcribed in this dictionary), DB1 `Folder Processing Tracker` (file-processing workflow log).

## How to read these tables — verified vs. hypothesis (READ FIRST)

These databases deliberately mix **verified findings** with **working hypotheses, leads, and negative results**. That is by design — but it means no row may be cited as fact on its own authority. The verification level of each row is encoded in several free-text columns, not in a single controlled field:

- **DB1 `Evidence Confidence`** — the primary signal. Values are free text (e.g. `High`, `High (manuscript read in full)`, `Medium — index only`, `Low — cover sheet read only; images unexamined`, `Index-level - not verified against the marriage record`). Read the whole value; the qualifier after the dash is the actual claim.
- **DB1 `H1`–`H8` hypothesis columns** — each cell assesses what the row's source says about one of eight research hypotheses, using the Status codes below. A row can be `Supports` on H3 and `Unresolved` on H5.
- **DB2 `Evidence` / `Notes`** — verification status is stated in prose (e.g. "No supporting source for this identity or relationship has been located. Treat as unverified…"). There is no separate confidence column in DB2.
- **DB2 Leads `Verification Status`** — free text; the overwhelming majority of values begin with "Unverified".

**Thin-evidence convention:** where evidence is thin, cells are left **blank**. A blank cell means "no data," never "no" and never "unknown-person." Do not fill blanks by inference.

### Proposed controlled status column (for the public release — not yet applied)

For any public deposit, add one controlled-vocabulary column, e.g. `record_status`, mapped from the existing free-text signals:

| Value | Meaning | Rough mapping |
|---|---|---|
| `verified` | Source read firsthand; claim confirmed | Evidence Confidence starting with High/Verified, or Thesis Category "Verified findings" |
| `supported` | Affirmative evidence; strength depends on source quality | H-column `Supports` |
| `mixed` | Supports one part, complicates another | H-column `Mixed` |
| `context` | Relevant background, not direct proof | H-column `Context` / Evidence Type "Context" |
| `unresolved` | Bears on the question but does not decide it | H-column `Unresolved` |
| `lead` | Unverified lead, not yet checked against a source | "Lead", "Open leads", Verification Status "Unverified…" |
| `hypothesis` | Working hypothesis under investigation | DB4-linked rows, "Hypothesis under investigation" |
| `negative` | Bounded negative — searched, not found (scope stated in Notes) | Method/negative-control rows |

Do not invent the mapping per row by guesswork; the researcher must approve each row's status or the mapping rule before release.

---

## DB1 — Avalon Research Database (23 columns)

One row = one source read, finding, or research object. Columns are in sheet order.

| # | Column | Definition |
|---|---|---|
| 1 | Document Title | Working title of the source, finding, or research object, assigned by the researcher. Free text. |
| 2 | Document Type | Compiler-assigned descriptive label for what kind of thing the row is (e.g. `Primary source`, `Census transcription`, `WPA narrative (oral history)`, `Deed-page transcription (AI transcript, handwriting unverified)`, `Finding Aid / Index Pointer (Lead)`). Free text, very granular — not a controlled vocabulary. The qualifier in parentheses is part of the meaning. |
| 3 | Source | The archive, publication, collection, or informant the row derives from. Free text. May name living correspondents (see privacy flag list). |
| 4 | Evidence | What the source says, in the researcher's words or as transcribed. Free text; may contain direct quotations. |
| 5 | Why It Is Important | The researcher's assessment of the row's significance to the project. Interpretive — not a source claim. |
| 6 | Connections | Related people, places, records, and project threads. Free text; used for FAN-cluster linkage. May name living people (see privacy flag list). |
| 7 | Conclusions | What the researcher concludes from this row. Interpretive; check `Evidence Confidence` before citing. |
| 8 | Questions | Open questions the row raises. Research notes, not findings. |
| 9 | Citation | Source citation in a loose APA-like format. May contain personal email addresses (see privacy flag list). |
| 10 | File | Filenames the row consolidates or draws on (backtick-quoted, e.g. `` `1860-U.S.-Federal-Census-Slave-Schedules-…pdf` ``), sometimes mixed with public source URLs. These are filenames in the project's Drive/staging library — not hyperlinks, not Drive IDs. 34 of 1,711 non-empty cells also contain a public URL (archive.org, ADAH digital collections, uah.edu, etc.). |
| 11–18 | H1–H8 | Hypothesis assessments (see below). |
| 19 | Evidence Type | Compiler-assigned label for the kind of evidence (e.g. `Chancery manuscript — firsthand read of page images`, `Index-level extraction of a primary record`, `Verified finding`, `Context`, `Family history narrative`). Free text; overlaps with Document Type. The dash-qualifier carries the verification claim. |
| 20 | Thesis Category | Mixed-use column: some rows carry status-like values (`Supports`, `Verified findings`, `Unresolved`, `Open leads`, `Lead`, `Context`), others carry topic labels (`Plantation kinship, land & economy`, `Chancery records`, `H3`, `Federal claims records`). Free text — read each value literally; do not assume two identical strings were applied under identical criteria. |
| 21 | Notes | Working notes: transcription caveats, do-not-merge warnings, read-level notes (e.g. "Several index entries only partially legible; readings uncertain"). |
| 22 | Evidence Confidence | The row's verification level in the researcher's own words. Free text with many variants (`High`, `Medium — index only`, `Low — cover sheet read only; images unexamined`, `A (manuscript firsthand)`, …). 37 rows are blank. This is the most important column for judging whether a row is citable. |
| 23 | Source Fingerprint | A researcher-assigned slug identifying the source object (e.g. `surname-files-john-haywood-jones-masonic-1866`, `hoksbergen-deneefe-2026-keeping-up-with-the-joneses`). Provenance key, not a locator — it does not resolve to a file or URL on its own. |

### H1–H8 hypothesis columns

Each column tests the row's source against one research hypothesis. Definitions transcribed from the live `Evidence Color Key` tab:

| Code | Hypothesis | What counts |
|---|---|---|
| H1 | Institutional knowledge / erasure | Institutional notice, memorialization, omission, disturbance, or erasure |
| H2 | Legal-archival erasure | Law, property, probate, bureaucracy, archival naming, archival silences |
| H3 | Black Jones lineage | Identifies, distinguishes, or connects Black Jones individuals and families |
| H4 | Shandy parentage | Bears specifically on Shandy's identity, mother, age, father, or descendants |
| H5 | APJ children hypothesis | Bears on whether Alexander P. Jones fathered children with an enslaved woman |
| H6 | Plantation kinship / economy | Jones-Donnell-Haywood-Perkins kinship, landholding, plantation commerce, transatlantic business |
| H7 | Black agency / post-emancipation | Enslaved or freedpeople's action, family formation, claims, work, politics, education, community life |
| H8 | Patrol / KKK / racial violence | Slave patrols, KKK, racial terror, coercion, organized white violence |

**Cell values** (from the same key tab):

| Value | Meaning |
|---|---|
| `Supports` | The source adds affirmative evidence; strength still depends on source quality |
| `Refutes` | The source contradicts a proposed connection or shows a separate identity/case |
| `Mixed` | Supports one part while complicating or contradicting another |
| `Context` | Relevant background, but not direct proof of the hypothesis |
| `Unresolved` | Bears on the question but does not decide it |

In practice, cells usually read `Unresolved — <explanation>` (e.g. `Unresolved — no institutional-memory content in this record`), i.e. the Status code plus a researcher note after an em dash. **Blank = not assessed** (4,466 of 14,824 H-cells are blank). A small number of cells contain legacy affirmative values `Yes` / `TRUE` (116 cells across H1–H8); the exact distinction between these and `Supports` is **unconfirmed** — do not treat them as equivalent without the researcher's word.

---

## DB2 — Reclaiming Enslaved Names (7 columns)

One row = one person believed to have been enslaved (or a method/negative-control row — see caveat). Columns in sheet order.

| # | Column | Definition |
|---|---|---|
| 1 | First Name | Given name as recorded in the source. Blank where the source gives no name (thin-evidence convention). 84 rows have no first or last name at all — these are method rows, negative controls, or name-fragment rows; read `Evidence`/`Notes` before using. |
| 2 | Last Name | Surname as recorded, if the source gives one. Most enslaved people are recorded without surnames; blank is normal. |
| 3 | Age | Age or age range as recorded (e.g. `22`, `24-35`, `under 10`, `13+`). Blank for 974 of 1,450 rows — age not stated in the source. Values are transcribed as found, not normalized. |
| 4 | Race | Race descriptor. Values mix source language with researcher annotation, e.g. `Black`, `Black ("colored" per source)`, `Black (enslaved)`, `B`, `Brown`, `Yellow`, `mulatto (per source)`, `White` (9 rows — read Notes; these are not errors, they are context rows), `Enslaved (Black)`, `Not specified in will (enslaved)`. Blank for 724 rows. Source terms like "negro"/"colored" appear inside quoted annotations to preserve what the record actually said; they are not the researcher's language. |
| 5 | Sex | `M`/`F` or `Male`/`Female`, sometimes with a basis note (`Male (typical for name)`, `F (per note context)`). Blank for 642 rows. Never inferred beyond what the value states. |
| 6 | Evidence | The source for this person's inclusion, in a compact pipe-separated form: finding | record description | citation (e.g. `Lead — via scholarship; the act not yet read firsthand in this pass | Manumission act, Dec 11, 1820 | Hoksbergen & DeNeefe, Alabama Review 79.3 (July 2026)`). |
| 7 | Notes | Working notes including do-not-merge warnings and identity caveats (e.g. "Treat as unverified and do not merge with Evalina Love Jones."). |

**Identity discipline:** names that look alike are not the same person until a source says so. The `Notes` column carries the do-not-merge warnings — they are load-bearing. Anyone reusing this table must preserve them.

---

## DB2 Research Leads tab (10 columns)

One row = an unconfirmed lead: a name that *might* belong in DB2 once verified. The overwhelming majority are unverified — this tab is a to-search list, not a finding.

| # | Column | Definition |
|---|---|---|
| 1 | Name | Name as encountered in the lead source. |
| 2 | Name Variant | Alternate spellings or renderings. |
| 3 | Associated Enslaver or Property | Enslaver, plantation, or property named alongside. |
| 4 | Date or Range | Date or date range of the lead. |
| 5 | Location | Place associated with the lead. |
| 6 | Source Lead | Where the lead came from. |
| 7 | Record Needed | What record would confirm or kill the lead. |
| 8 | Verification Status | Free text; nearly all values begin `Unverified —` with specifics (e.g. `Unverified — new lead, not found in live enslaved database…`). A few read `cautious lead` or `Lead`. |
| 9 | Source Citation or URL | Citation or link for the lead source. |
| 10 | Source-Only Notes | Notes that belong to the lead-handling workflow (e.g. "Consecutive placement does not prove kinship."). |

---

## Data-quality caveats (for reusers)

1. **No single status column exists yet.** Verification level must be read from `Evidence Confidence` (DB1), H-column Status codes (DB1), or prose in `Evidence`/`Notes` (DB2). See the proposed `record_status` convention above.
2. **Free-text coded columns.** `Document Type`, `Evidence Type`, `Thesis Category`, `Evidence Confidence`, and `Verification Status` are researcher-assigned free text, not controlled vocabularies. Identical strings were not necessarily applied under identical criteria.
3. **Blank = no data.** Never "no," never "unknown person," never filled by inference.
4. **Legacy values.** `Yes`/`TRUE` in H-columns predate the current Status vocabulary; meaning unconfirmed.
5. **Method rows.** DB2 contains negative-control and method rows with no person (84 nameless rows); the Leads tab is unverified by definition.
6. **Living people.** Both databases name living correspondents, interviewees, and descendants. See `PRIVACY-FLAGS.md` — the public release must apply the researcher's scrub rules first.
7. **Snapshot, not a feed.** This export is dated 2026-09-28. The live sheets keep changing; cite the snapshot date.
