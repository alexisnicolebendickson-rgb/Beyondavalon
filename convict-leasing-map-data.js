/*
  Avalon Project — Convict-Leasing Geography data (staged)
  From ~/workspace/db-work/convict-leasing-20261002/db1-rows-1894-1906.json
  (DB1 rows 1894–1906, staged 2026-10-02). No GPS coordinates exist for any
  of these sites in the research files, so the page renders a clearly-labeled
  schematic, county-level layout — flagged as schematic pending GPS
  verification. Mine-fatality names are LEADS, not proof of convict status.
*/
(function () {
  "use strict";

  window.CONVICT_LEASING_DATA = {
    schematicNote:
      "Schematic layout, not a geographic map. County positions and site placements are illustrative; no coordinates are claimed. GPS verification is pending for every site below.",

    jeffersonCounty: [
      {
        id: "banner-mine",
        name: "Banner Mine",
        company: "Pratt Consolidated Coal Company",
        location: "Near Littleton, Jefferson County",
        verdict: "verified",
        verdictNote:
          "Event facts verified from secondary compilation; any Madison County prisoner link is unproven.",
        facts: [
          "April 8, 1911 explosion — 128 dead.",
          "123 of the dead were leased convicts; 114 of the dead were African American.",
          "72 of the dead convicts were from Jefferson County.",
          "Most were buried in the on-site convict cemetery.",
          "The single deadliest convict-leasing event in the 1908–1928 window."
        ],
        openQuestion:
          "Whether any Madison County prisoner died at Banner — the county-of-conviction breakdown is in the Inspectors of Convicts 1910–12 biennial report (ADAH, undigitized; on the Oct 9 Montgomery retrieval list).",
        citation:
          "Bhamwiki, \"1911 Banner Mine explosion\"; Wikipedia, \"Banner Mine disaster\" (citing Encyclopedia of Alabama). DB1 row 1895."
      },
      {
        id: "flat-top-mine",
        name: "Flat Top mine",
        company: "Sloss operation",
        location: "Jefferson County",
        verdict: "leads",
        verdictNote:
          "Mine and company ties are real; every Madison County and convict-status link is a LEAD, not proof.",
        facts: [
          "Anderson Dukes — died Nov 17, 1917, fall of rock.",
          "Jim Lampkin — died Feb 23, 1924, rock fell.",
          "George Mock — died Oct 19, 1924, electrocuted.",
          "Anderson Abercrombie — died Nov 16, 1927, fall of coal; occupation \"Track Man\" (a death inside the lease era).",
          "All four were Black miners. Birthplaces and convict status are UNVERIFIED.",
          "Sloss used county convicts until 1928 (Encyclopedia of Alabama)."
        ],
        openQuestion:
          "Death certificates (birthplace, occupation, informant) for each man — via signed-in FamilySearch, \"Alabama Deaths, 1908–1974\" — would directly confirm or kill the Madison County hypothesis. Free Black migration to Birmingham mine work is the confounder.",
        citation:
          "Birmingham Public Library, Alabama Coal Mine Fatalities, 1898–1938. DB1 rows 1896–1899."
      },
      {
        id: "pratt-fuel-6",
        name: "Pratt Fuel No. 6",
        company: "Pratt (Pratt Consolidated Coal Co. was a documented convict-lease operator)",
        location: "Jefferson County",
        verdict: "leads",
        verdictNote:
          "Mine and company ties are real; every Madison County and convict-status link is a LEAD, not proof.",
        facts: [
          "Willie Moffett — Black miner, died Apr 23, 1925, \"loose trip of cars.\"",
          "Madison County birthplace UNVERIFIED; convict status UNVERIFIED."
        ],
        openQuestion:
          "Death-certificate lookup candidate, as with the Flat Top leads.",
        citation:
          "Birmingham Public Library, Alabama Coal Mine Fatalities. DB1 row 1900."
      }
    ],

    context: [
      {
        title: "1880 Tenth Census — the carceral pipeline",
        detail:
          "Alabama held 1,398 prisoners (1,317 male, 81 female; 1,377 native-born, 21 foreign-born; 221 white, 1,177 \"colored\"). 84.2% Black, 94.2% male, 98.5% native-born. Hard aggregate proof of the racialized carceral pipeline feeding convict leasing, fifteen years after emancipation — citable from a free primary.",
        citation:
          "U.S. Census Office, Statistics of the Population of the United States at the Tenth Census (June 1, 1880), Vol. 1, Table XI, p. 929. DB1 row 1894."
      },
      {
        title: "Mine-inspector reports labeling decedents' occupation \"Convict\"",
        detail:
          "Three found, all in 1898. Documented here as context — these are not claimed to be Madison County men.",
        citation: "DB1 row 1901."
      },
      {
        title: "1880 Madison County \"Inhabitants in Prison\" schedule survives — access-blocked",
        detail:
          "NARA T1155. The schedule exists; prisoner names are unresolved, not lost. Huntsville Gazette 1881 ad columns (two issues read cover-to-cover) carried zero labor-hire ads.",
        citation: "DB1 rows 1905, 1902."
      },
      {
        title: "Calhoun County convict-hire editorial, reprinted Huntsville Gazette, Sep 3, 1881",
        detail:
          "Regional convict-hire practice was being discussed in the Huntsville press. Antebellum Huntsville newspapers have no free full-text form (verified negative).",
        citation: "DB1 rows 1903, 1906."
      }
    ],

    madisonCounty: {
      title: "Madison County — the origin question",
      detail:
        "The research question this geography is built to answer: were Madison County prisoners leased to Jefferson County mines, and did any die there? The record that would answer it for the 1911 Banner Mine disaster — the Inspectors of Convicts 1910–12 biennial report — sits at ADAH, undigitized, on the Oct 9 Montgomery retrieval list. The 1880 Madison County jail prisoner schedule (NARA T1155) exists but is access-blocked. Until those records are read, the mine-fatality names above are leads, not proof.",
      citation: "DB1 rows 1895, 1905; 2026-10-02 desk research."
    }
  };
})();
