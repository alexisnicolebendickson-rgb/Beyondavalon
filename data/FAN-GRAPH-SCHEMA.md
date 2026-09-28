> **Published 2026-09-28 — addendum:** the pilot now holds 100 edges (E100, the unverified 1794 candidacy lead, was split out of E57 after this spec was written). Confidence counts in the published file: 58 confirmed_primary, 25 confirmed_secondary, 11 lead, 2 unresolved, 4 do_not_merge. Everything else below is unchanged from the spec.

---

# FAN Graph Schema — Beyond Avalon
*Version 1.0 — pilot. Defined 2026-09-28 for the Anderson–Jones marriage network extraction (`edges-pilot.csv`). The interactive page is not yet built; this spec governs the data that will feed it.*

## Purpose
Visualize the FAN (friends, associates, neighbors) network the project already researches as standard practice: who witnessed whose deeds, who stood surety for whom, who bonded whom — showing how white capital moved and exactly where Black lives crossed it. The graph must never assert what the research has not proven. Uncertainty is a first-class citizen.

## Node types

| Type | Meaning | Attributes |
|------|---------|------------|
| `person` | A human being, living or dead | `status`: `free` / `enslaved` / `unknown`. `group`: `true` when the node is a collective (e.g. "Children of Elizabeth Brittain"). Enslaved people are `person` nodes — never a separate lesser type. |
| `event` | A dated occurrence that binds people (marriage, bond, will, estate division) | `date`, `date_note` |
| `place` | A county, tract, or named location | — |
| `institution` | A court, bank, church, school, company | — |
| `estate` | A decedent's estate as a legal actor (used when the record names administrators, not the person) | `decedent` |

Node IDs are stable lowercase slugs (`nelson-anderson`, `davy-enslaved`, `sec18-t3s-r3e`). Same-name distinct people get disambiguators (`alexander-anderson-louisa`, `turner-anderson`, `turner-moore`, `turner-jones`). Labels are display names; name variants live in `notes`, never as separate nodes.

## Edge types (pilot vocabulary — 41)

**Kinship:** `spouse_of` (reciprocal pair), `daughter_of`, `son_of`, `father_of`, `sister_of`, `brother_in_law_of`, `grandson_of`, `granddaughter_of`, `heir_of`, `reported_spouse_of` (unverified claim — always `lead` or lower).

**Legal / financial roles:** `surety_for`, `witness_to`, `co_bondsman_with`, `party_to`, `posted_to` (bond → obligee), `testator_of`, `executor_of`, `administrator_de_bonis_non_of`, `life_tenant_of`, `commissioner_of`, `plaintiff_against`, `litigant_against`, `filed_suit_in`, `litigated_in`, `oath_sworn_before`, `consented_to_marriage_of`, `grantor_to`, `patentee_of`, `received_cash_in_lieu_from`, `allotted_to` (enslaved person → heir; carries the appraised value in `date_note`/`notes`), `named_in` (person named in a will), `claimed_purchase_of` (unverified claim).

**Association (weak, never kinship):** `co_present_with` (same census/page — explicitly not kinship), `neighbor_of`, `adjoining_landholder_with`.

**Identity safeguards:** `do_not_merge_with` (standing project rule, both directions implied by one edge), `kinship_unresolved_with`, `identity_unresolved` (self-loop on a node whose identity is open).

New relationship types may be added as extraction widens (e.g. `mortgagee_of`, `hired_out_to`, `manumitted_by`); each gets a one-line definition here before use.

## Confidence vocabulary

| Value | Meaning |
|-------|---------|
| `confirmed_primary` | Read from the primary manuscript/record |
| `confirmed_secondary` | From a published transcript, abstract, or scholarly register treated as reliable |
| `lead` | Claimed in a secondary source or index; not yet verified |
| `unresolved` | The research has not settled it |
| `do_not_merge` | The project affirmatively keeps these identities distinct |

The interactive page must render confidence visually (e.g. solid vs. dashed edges) and must never display a `lead` or `unresolved` edge as fact.

## Provenance
Every edge carries `source_document` (the record it was read from) and, where the finding is live, `db1_row`. Edges drawn from staged research not yet folded to DB1 say so in `notes` ("Staged memo 2026-09-28; not yet folded to DB1"). No edge without a source. No invented relationships.

## Do-not-merge discipline
Distinct same-name people are distinct nodes, always. The safeguard edges in the pilot: Turner Anderson ≠ Turner Moore ≠ Turner Jones; Nelson A. Thompson ≠ Nelson Anderson; Mary Perkins (née Anderson) ≠ Mary Anderson Jones; "Elizabeth Jones formerly Anderson" stays an unresolved node rather than being attached to any Elizabeth. When a new same-name person appears, the default is a new node until direct evidence merges them — merges are recorded as an explicit, sourced decision, never silent.

## Pilot scope
`edges-pilot.csv`: 99 edges, 84 nodes, 41 relationship types, centered on Nelson Anderson, Frances Anderson (née Jackson), Mary Anderson Jones, Llewellin Jones, Alexander Anderson, Turner Anderson, and the Thomas Jackson estate (Louisa County, 1790–1834), plus the Madison County Anderson foothold (Lewis Anderson, 1830–1837). 58 edges `confirmed_primary`, 28 `confirmed_secondary`, 7 `lead`, 2 `unresolved`, 4 `do_not_merge`. Nineteen of the nodes are enslaved people named in the 16 Feb 1802 division — the graph's Black nodes are people, with `allotted_to` edges tracing exactly where the record put them.

## Next
Full-DB1 extraction widens the vocabulary and the node set (Donnell, Perkins, Haywood, Spotswood, Broad River, Freedmen's Bureau contracts). The schema holds; only the edge-type table grows.
