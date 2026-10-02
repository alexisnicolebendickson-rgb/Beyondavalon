/*
  Avalon Project — GLO Patent Map data (staged)
  Verified Oct 2, 2026 from Bureau of Land Management General Land Office
  (BLM GLO) records, Huntsville Meridian, Alabama. The GLO records list these
  patents in MADISON County — do not attribute them to Morgan County.
  All section placements below are drawn against the standard PLSS
  township grid; no geographic coordinates are claimed.
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
        id: "T3S-R3E",
        title: "T3S R3E",
        subtitle: "Township 3 South, Range 3 East — Huntsville Meridian",
        note: "Lewis Anderson's 1831 patent."
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
      }
    ]
  };
})();
