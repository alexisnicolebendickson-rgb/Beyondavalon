/*
  Avalon Project — GLO Patent Map data (staged)
  Verified Oct 2, 2026 from Bureau of Land Management General Land Office
  (BLM GLO) records, Huntsville Meridian, Alabama. The GLO records list these
  patents in MADISON County — do not attribute them to Morgan County.
  All section placements below are drawn against the standard PLSS
  township grid; no geographic coordinates are claimed.
  2026-10-11 UPDATE: two new patents added — CV-0109-137 ("Spotswood Jones,
  assignee of John Clapp," Nov 20, 1818, Madison County) and MW-1129-430
  (1875 military-warrant patent, Randolph County). MW-1129-430 is the file's
  FIRST patent outside Madison County; the renderer now reads a per-patent
  `county` field (default Madison) instead of assuming Madison throughout.
  2026-10-17 UPDATE: three Thomas W. Pettus patents added (Sec. 9, T3S R2W —
  two 40-acre entries dated April 1, 1852, signature group with James S.
  Pettus, and one 80-acre entry dated March 1, 1858), from the project's BLM
  GLO box extraction (USGenWeb mirror of the BLM raw database, Madison County
  P–S file; rows re-verified against the mirror 2026-10-17). The extraction
  records no aliquot parts and no accession numbers for these rows, and none
  are claimed here. A new township plat (T3S-R2W) and legend group
  (pettus-1852-1858) were added for them. The equation of the patentee with
  the Thos W. Pettus of Freedmen's Bureau contract 1265 (Jan 1867) is a
  graded name-match Lead in project research, not an established identity.
*/
(function () {
  "use strict";

  window.GLO_PATENTS_DATA = {
    sourceNote:
      "BLM General Land Office records, Huntsville Meridian, Alabama (verified 2026-10-02).",

    /* Patentee groupings for the map legend. */
    groups: [
      {
        id: "jones-pope-1818",
        shortLabel: "J+P",
        label: "Lewellen Jones + Leroy Pope (1818)",
        color: "#8a3a22",
        note:
          "Three of Lewellen Jones's seven 1818 patents name Leroy Pope as co-patentee. The patent image for CV-0109-122 names \"Leroy Pope assignee of Lewellen Jones\" — Pope founded Huntsville."
      },
      {
        id: "jones-moore-1818",
        shortLabel: "J+M",
        label: "Lewellen Jones + David Moore (1818)",
        color: "#4a6fa5",
        note:
          "Four of the 1818 patents name David Moore as co-patentee."
      },
      {
        id: "jones-webster-1814",
        shortLabel: "J+W",
        label: "Lewellin Jones + John Webster (1814)",
        color: "#3f5a41",
        note: "An earlier Jones patent, predating the 1818 cluster."
      },
      {
        id: "joel-jones-pope-1827",
        shortLabel: "JoelP",
        label: "Joel W Jones + Leroy Pope (1827)",
        color: "#c99a3e",
        note: "A later Jones patent, again naming Leroy Pope."
      },
      {
        id: "blow-cunningham-1819",
        shortLabel: "B+C",
        label: "Peter Blow + John Cunningham (1819)",
        color: "#5a4a6a",
        note:
          "Joint patentees. Project research identifies Peter Blow as a direct federal patentee — closing a chain-of-title gap."
      },
      {
        id: "gaither-huston-1818",
        shortLabel: "G+H",
        label: "Beli Gaither + Peter Huston (1818)",
        color: "#96721c",
        note: "Same patent date as the Jones 1818 cluster (Nov 20, 1818)."
      },
      {
        id: "keen-minor-1825",
        shortLabel: "K+M",
        label: "Hugh Keen + Henry Minor (1825)",
        color: "#6b8a3e",
        note: "159.9 acres, cash entry."
      },
      {
        id: "anderson-1831",
        shortLabel: "A",
        label: "Lewis Anderson (1831)",
        color: "#2e6e5e",
        note: "Sole patentee — the Anderson family link in the land record."
      },
      {
        id: "spotswood-jones-1818",
        shortLabel: "SJ",
        label: "Spotswood Jones, assignee of John Clapp (1818)",
        color: "#1f6e8c",
        note:
          "The patent image reads \"Spotswood Jones, assignee of John Clapp\" — Clapp was the original entryman. The BLM index spells the name \"SPOOTSWOOD JONES\"; the discrepancy is preserved. The earliest Jones–Spotswood link in the project."
      },
      {
        id: "haywood-warrant-1875",
        shortLabel: "HW",
        label: "Haywood/Stephens military-warrant patent (1875)",
        color: "#b5651d",
        note:
          "Military-warrant patent to the heirs of George C. Haywood (Mexican War) and their assignees the Stephenses — the file's first patent outside Madison County (Randolph County). Race unstated; possible freedwomen/heirs."
      },
      {
        id: "pettus-1852-1858",
        shortLabel: "TP",
        label: "Thomas W. Pettus (1852/1858)",
        color: "#704214",
        note:
          "Three Sec. 9, T3S R2W patents from the project's BLM GLO box extraction (two 40-acre entries, Apr 1, 1852, with James S. Pettus; 80 acres, Mar 1, 1858). The patentee's equation with the Thos W. Pettus of Freedmen's Bureau contract 1265 (Jan 1867) is a graded name-match Lead in project research, not an established identity."
      }
    ],

    /* Townships rendered as schematic plats (north at top). */
    townships: [
      {
        id: "T4S-R1W",
        title: "T4S R1W",
        subtitle: "Township 4 South, Range 1 West — Huntsville Meridian",
        note: "Six of Lewellen Jones's seven Nov 20, 1818 patents sit in this township; the seventh is in T4S R1E."
      },
      {
        id: "T4S-R1E",
        title: "T4S R1E",
        subtitle: "Township 4 South, Range 1 East — Huntsville Meridian",
        note: "CV-0109-124 (Jones + Pope) and CV-0107-187 (Lewellin Jones + Webster)."
      },
      {
        id: "T4S-R2W",
        title: "T4S R2W",
        subtitle: "Township 4 South, Range 2 West — Huntsville Meridian",
        note: "CV-0125-311 (Joel W Jones + Leroy Pope, 1827)."
      },
      {
        id: "T3S-R1W",
        title: "T3S R1W",
        subtitle: "Township 3 South, Range 1 West — Huntsville Meridian",
        note: "Blow + Cunningham (1819), Gaither + Huston (1818), Keen + Minor (1825)."
      },
      {
        id: "T3S-R2W",
        title: "T3S R2W",
        subtitle: "Township 3 South, Range 2 West — Huntsville Meridian",
        note: "Thomas W. Pettus's Sec. 9 patents (two 40-acre entries, Apr 1, 1852, with James S. Pettus; 80 acres, Mar 1, 1858). Added 2026-10-17 from the project's GLO box extraction."
      },
      {
        id: "T3S-R3E",
        title: "T3S R3E",
        subtitle: "Township 3 South, Range 3 East — Huntsville Meridian",
        note: "Lewis Anderson's 1831 patent."
      },
      {
        id: "T2S-R1W",
        title: "T2S R1W",
        subtitle: "Township 2 South, Range 1 West — Huntsville Meridian",
        note: "CV-0109-137 (Spotswood Jones, assignee of John Clapp, Nov 20, 1818), Madison County."
      },
      {
        id: "T18S-R10E",
        title: "T18S R10E",
        subtitle: "Township 18 South, Range 10 East — Huntsville Meridian",
        note: "MW-1129-430 (1875 military-warrant patent, Randolph County) — the map's first patent outside Madison County."
      }
    ],

    /*
      aliquot: the sub-section area shaded, in standard PLSS aliquot
      notation. authority: as recorded in the project notes; where the
      authority was not recorded, it is not claimed here.
    */
    patents: [
      {
        accession: "CV-0109-122",
        date: "November 20, 1818",
        patentees: ["Lewellen Jones", "Leroy Pope"],
        township: "T4S-R1W",
        section: 1,
        aliquot: "NE",
        authority: "Credit Volume — Harrison Land Act of April 15, 1800",
        group: "jones-pope-1818",
        note:
          "The patent image names \"Leroy Pope assignee of Lewellen Jones\" — Pope, the founder of Huntsville, took assignment of Jones's claim. Signed by President James Monroe and Josiah Meigs, Commissioner of the General Land Office."
      },
      {
        accession: "CV-0109-129",
        date: "November 20, 1818",
        patentees: ["Lewellen Jones", "Leroy Pope"],
        township: "T4S-R1W",
        section: 1,
        aliquot: "NW",
        authority: "Credit Volume — Harrison Land Act of April 15, 1800",
        group: "jones-pope-1818",
        note: ""
      },
      {
        accession: "CV-0109-127",
        date: "November 20, 1818",
        patentees: ["Lewellen Jones", "David Moore"],
        township: "T4S-R1W",
        section: 1,
        aliquot: "SW",
        authority: "Credit Volume — Harrison Land Act of April 15, 1800",
        group: "jones-moore-1818",
        note: ""
      },
      {
        accession: "CV-0109-128",
        date: "November 20, 1818",
        patentees: ["Lewellen Jones", "David Moore"],
        township: "T4S-R1W",
        section: 1,
        aliquot: "SE",
        authority: "Credit Volume — Harrison Land Act of April 15, 1800",
        group: "jones-moore-1818",
        note: ""
      },
      {
        accession: "CV-0109-125",
        date: "November 20, 1818",
        patentees: ["Lewellen Jones", "David Moore"],
        township: "T4S-R1W",
        section: 12,
        aliquot: "NW",
        authority: "Credit Volume — Harrison Land Act of April 15, 1800",
        group: "jones-moore-1818",
        note: ""
      },
      {
        accession: "CV-0109-126",
        date: "November 20, 1818",
        patentees: ["Lewellen Jones", "David Moore"],
        township: "T4S-R1W",
        section: 12,
        aliquot: "NE",
        authority: "Credit Volume — Harrison Land Act of April 15, 1800",
        group: "jones-moore-1818",
        note: ""
      },
      {
        accession: "CV-0109-124",
        date: "November 20, 1818",
        patentees: ["Lewellen Jones", "Leroy Pope"],
        township: "T4S-R1E",
        section: 6,
        aliquot: "NW",
        authority: "Credit Volume — Harrison Land Act of April 15, 1800",
        group: "jones-pope-1818",
        note: "The seventh of the seven Nov 20, 1818 Jones patents."
      },
      {
        accession: "CV-0109-462",
        date: "October 5, 1819",
        patentees: ["Peter Blow", "John Cunningham"],
        patenteeNote: "joint patentees",
        township: "T3S-R1W",
        section: 29,
        aliquot: "NW",
        authority: "BLM GLO record (authority as listed in the record)",
        group: "blow-cunningham-1819",
        note:
          "Blow is identified in project research as a direct federal patentee — closing a chain-of-title gap."
      },
      {
        accession: "CV-0109-108",
        date: "November 20, 1818",
        patentees: ["Beli Gaither", "Peter Huston"],
        township: "T3S-R1W",
        section: 33,
        aliquot: "NW",
        authority: "BLM GLO record (authority as listed in the record)",
        group: "gaither-huston-1818",
        note: "Same patent date as the Jones 1818 cluster."
      },
      {
        accession: "CV-0121-066",
        date: "July 25, 1825",
        patentees: ["Hugh Keen", "Henry Minor"],
        township: "T3S-R1W",
        section: 33,
        aliquot: "NE",
        acres: "159.9",
        authority: "Cash entry",
        group: "keen-minor-1825",
        note: "159.9 acres, cash entry — adjoining the Gaither + Huston patent to the west."
      },
      {
        accession: "CV-0107-187",
        date: "April 19, 1814",
        patentees: ["Lewellin Jones", "John Webster"],
        township: "T4S-R1E",
        section: 8,
        aliquot: "SW",
        authority: "BLM GLO record (authority as listed in the record)",
        group: "jones-webster-1814",
        note: "An earlier Jones patent, four years before the 1818 cluster."
      },
      {
        accession: "CV-0125-311",
        date: "February 1, 1827",
        patentees: ["Joel W Jones", "Leroy Pope"],
        township: "T4S-R2W",
        section: 31,
        aliquot: "SE",
        authority: "BLM GLO record (authority as listed in the record)",
        group: "joel-jones-pope-1827",
        note: "A later Jones patent, again naming Leroy Pope as co-patentee."
      },
      {
        accession: "STA-AL1210__.163",
        date: "June 1, 1831",
        patentees: ["Lewis Anderson"],
        township: "T3S-R3E",
        section: 18,
        aliquot: "E½NW",
        authority: "BLM GLO record (accession as listed)",
        group: "anderson-1831",
        note: "Lewis Anderson as sole patentee — the east half of the northwest quarter of Section 18."
      },
      {
        accession: "CV-0109-137",
        date: "November 20, 1818",
        patentees: ["Spotswood Jones"],
        patenteeNote: "assignee of John Clapp, the original Huntsville entryman",
        township: "T2S-R1W",
        section: 10,
        aliquot: "SW",
        county: "Madison",
        authority: "Credit Volume — Harrison Land Act of April 15, 1800",
        group: "spotswood-jones-1818",
        note:
          "The patent image reads \"Spotswood Jones, assignee of John Clapp\" — Clapp signed his land-office certificate over to Jones before the patent issued; 160 acres, southwest quarter of Section 10, signed by President James Monroe. The BLM index spells the name \"SPOOTSWOOD JONES\" — the discrepancy is preserved. The earliest Jones–Spotswood link in the project; whether the patentee connects to the Avalon Joneses is unresolved — do not merge. A \"Spottswood Jones\" appears in Lawrence County, Alabama in 1825–26 (bondsman, estate appraiser); that identity is fenced separately."
      },
      {
        accession: "MW-1129-430",
        date: "April 10, 1875",
        patentees: ["Matilda J Haywood", "Sarah Ann Haywood", "Synthia M A Haywood", "William H Haywood", "David L Stephens", "Harris Stephens"],
        township: "T18S-R10E",
        section: 19,
        aliquot: "",
        acres: "160.74",
        county: "Randolph",
        authority: "Military Warrant — ScripWarrant Act of 1847 (Mexican War)",
        group: "haywood-warrant-1875",
        note:
          "Warrant #78691 (ScripWarrant Act of 1847, Mexican War) to \"Matilda C. Haywood, Cynthia M. A. Haywood, William H. Haywood and Sarah Ann Haywood, children and heirs at law of George C. Haywood, deceased, late a Private in Co. 'C', Regt. U.S.\" — \"duly assigned\" to Harris Stephens and David L. Stephens, who took the 160.74 acres while the Haywood children monetized the warrant. The patent image reads Cynthia M. A. / Matilda C.; the BLM index reads Synthia M. A. / Matilda J. — discrepancies preserved. No race stated in the record; possible freedwomen/heirs (unproven). George C. Haywood is unlinked to the Franklin County Haywoods. Signed by President Ulysses S. Grant."
      },
      {
        accession: "unrecorded in project extraction",
        date: "April 1, 1852",
        patentees: ["Thomas W Pettus", "James S Pettus"],
        patenteeNote: "signature group as recorded in the BLM raw database",
        township: "T3S-R2W",
        section: 9,
        aliquot: "",
        acres: "40",
        authority: "Not recorded in the project extraction",
        group: "pettus-1852-1858",
        note:
          "One of two separate 40-acre entries the BLM raw database records for Thomas W. Pettus in Sec. 9 on this date, both in signature group with James S. Pettus (the database carries the pair as two rows; the aliquot parts are not recorded in the project's extraction, and none are claimed here — the plat shades the full section). Source: USGenWeb mirror of the BLM GLO raw database, Madison County P–S file, re-verified 2026-10-17. The patentee's equation with the Thos W. Pettus of Freedmen's Bureau contract 1265 (Jan 1867) is a graded name-match Lead, not an identity."
      },
      {
        accession: "unrecorded in project extraction",
        date: "April 1, 1852",
        patentees: ["Thomas W Pettus", "James S Pettus"],
        patenteeNote: "signature group as recorded in the BLM raw database",
        township: "T3S-R2W",
        section: 9,
        aliquot: "",
        acres: "40",
        authority: "Not recorded in the project extraction",
        group: "pettus-1852-1858",
        note:
          "The second of the two 40-acre Sec. 9 entries dated April 1, 1852 (see the preceding entry). A Pettus surname cluster patents elsewhere in this township — Thomas Pettus, Sec. 7, 164.22 acres (1835), and David W. Pettus, Sec. 17, 160 acres (1837) — recorded in the same extraction but not entered in this file; neither man is asserted as kin to Thomas W. Pettus."
      },
      {
        accession: "unrecorded in project extraction",
        date: "March 1, 1858",
        patentees: ["Thomas W Pettus"],
        township: "T3S-R2W",
        section: 9,
        aliquot: "",
        acres: "80",
        authority: "Not recorded in the project extraction",
        group: "pettus-1852-1858",
        note:
          "Thomas W. Pettus's third Sec. 9 patent in the extraction: 80 acres, six years after the paired 40-acre entries of 1852. No document on file states where the thirteen hands of Bureau contract 1265 actually worked; these patents place the Pettus name on Sec. 9 land, and the contract's workplace is a separate, unproven step."
      }
    ]
  };
})();
