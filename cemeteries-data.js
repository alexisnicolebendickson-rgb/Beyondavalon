/*
  Avalon Project — Cemetery Map data (staged)
  Only points with a verified location are plotted. Locations without a
  verified coordinate live in `unverified` and are listed in the page panel,
  not pinned to the map — this project does not fabricate coordinates.
*/
(function () {
  "use strict";

  window.CEMETERIES_DATA = {
    campusCenter: { lat: 34.791, lng: -86.71 },
    sites: [
      {
        id: "moore-plantation-cemetery",
        name: "Moore Plantation slave cemetery (Harvest Road)",
        lat: 34.858,
        lng: -86.7787,
        precise: true,
        verdict: "verified",
        verdictNote:
          "Location fixed 2026-09-27: the cemetery GPS falls in Section 19, Township 2 South, Range 2 West (Huntsville Meridian), checked against the BLM National PLSS CadNSDI service; reverse-geocode gives 1808 Harvest Rd, Harvest, AL 35749.",
        summary:
          "Slave graveyard of the \"old Moore Plantation\" on Harvest Road, south of the road where the plantation home stood on the north side. The land owner's late husband allowed burials here until about 1950. Research identifies Benjamin T. Moore's Madison County plantation as very likely the \"old Moore Plantation\" behind this cemetery — the link to Turner Moore himself is the one missing piece and is not claimed here.",
        citation:
          "C. Wayne Austin, \"Moore (Herman) Cemetery\" survey (photos 6 Jun 2012; page added 3 Jun 2014), via the Madison County cemeteries survey project; BLM National PLSS CadNSDI service (2026-09-27); Turner Moore plantation memo, Beyond Avalon research notes, 2026-09-27."
      },
      {
        id: "jones-perkins-cemetery",
        name: "Jones-Perkins Family Cemetery",
        lat: 34.73237,
        lng: -86.64207,
        precise: true,
        verdict: "verified",
        verdictNote:
          "Verified coordinates 2026-10-04: N 34.73237, W 86.64207 (behind present-day Morton Hall, next to Union Grove Gallery). The DAR plaque reads \"1760-1820,\" conflicting with the October 1, 1757 birth date; UAH Archives notes \"some dispute as to whether Jones is actually buried there.\"",
        summary:
          "Family burial ground of the Jones/Perkins enslaver family, including Lewellen Jones's unmarked grave (later marked by the Twickenham Town Chapter, DAR, in the 1970s). A 2022 UAH/Tennessee Valley Archaeological Research (TVAR) ground-penetrating radar survey scanned this area, and a second site near University Drive, seeking unmarked graves of enslaved people.",
        citation:
          "UAH News, \"UAH Archives and Department of History to Erect Historical Marker on Campus\"; Huntsville History Collection, \"From a Kingdom in Wales to a Cotton Farm in Alabama\"; WAFF 48, \"Uncovering the history of unmarked slave graves at UAH\"; TVAR, \"GIS Remote Sensing & Mapping Services — Avalon Plantation\"; DB1 row 2768 (coordinates verified 2026-10-04)."
      },
      {
        id: "jones-donnell-cemetery",
        name: "Jones-Donnell Cemetery (Greenbrier, Limestone County)",
        lat: 34.668725,
        lng: -86.845446,
        precise: true,
        verdict: "verified",
        verdictNote:
          "Verified coordinates 2026-10-04: 34.668725, -86.845446 (Greenbrier, Limestone County, Alabama). Not to be confused with the Donnell Slave Cemetery (Town Creek, Lawrence County).",
        summary:
          "Burial ground of the Jones-Donnell family. John N. S. Jones (1 Sep 1793 – 17 Nov 1853; son of Llewellyn & Mary Anderson Jones) is buried here, along with Eliza Ann Haywood Jones (wife of J. N. S. Jones) and six Jones children/grandchildren: Mary Louise (1822–23), Alexander Thomas (1834–57), Caesaria Julia (1836–47), Antominda Severa (1838–40), Spotswood Adair (1850–52). Capt. Llewellyn Jones and Mary Anderson Jones are NOT buried here.",
        citation:
          "John Parkes, \"Jones-Donnell Cemetery aka Hundley Cemetery, Greenbrier, Al.,\" Southern Middle Tennessee Cemeteries (photo-backed tombstone transcriptions); DB1 rows 2767, 2769–2770."
      },
      {
        id: "donnell-slave-cemetery",
        name: "Donnell Slave Cemetery (Town Creek)",
        lat: 34.677,
        lng: -87.408,
        precise: false,
        verdict: "approximate",
        verdictNote:
          "Approximate placement in the Town Creek vicinity, Lawrence County — not a surveyed GPS point. Do not treat the pin as the grave locations.",
        summary:
          "Burial ground of the people James Webb Smith Donnell enslaved at Seclusion plantation. Fortune, enslaved by Donnell, died February 1859 and is buried here; his headstone reads \"To the virtues and excellencies of a faithful servant this testimony is erected by his master J.W. Donnell.\" A 1968 Moulton Advertiser account describes unmarked graves \"of Negroes who served as Donnell's slaves\" a short distance from the Seclusion plantation home site near Town Creek.",
        citation:
          "Find a Grave memorial 135690439 (Fortune Donnell; modern compilation — birth years derived from the 1849 Lawrence County tax assessment, treat as lead); The Moulton Advertiser, June 27, 1968, \"Old Slave Graveyard is Reminder of Pre-Civil War Days Near Town Creek\" (as quoted); DB1 rows 2322, 2338."
      }
    ],

    /* Not plotted — listed on the page with their verification status. */
    unverified: [
      {
        name: "Jones (Mary) Cemetery — near the daycare",
        status: "Location unverified — not plotted",
        summary:
          "A Jones cemetery referenced in project notes in connection with a daycare-adjacent location. No verified location (no address, GPS, or PLSS description) was found in the research files or in the site's campus location data. Listed here so the lead is not lost; a location must be documented before it can be pinned.",
        citation: "Beyond Avalon research notes (status check 2026-10-02)."
      },
      {
        name: "Ben Graves Drive — reported ~60 grave anomalies",
        status: "Reported, unverified — not plotted",
        summary:
          "An initial GPR survey reported anomalies near the north entrance of campus that fit the pattern of graves, but a subsequent survey did NOT replicate the results, and a September 2026 assessment reports no grave-pattern anomalies near the known cemetery. The \"approximately 60 possible grave anomalies south of campus along Ben Graves Drive\" figure could not be located in a survey report. This project does not pin unverified anomalies to the map.",
        citation:
          "Beyond Avalon research notes; UAH Campus Map page (\"Landscape, burial, and selective preservation\"), which records the corrected, unreplicated anomaly set."
      },
      {
        name: "John Nelson Spotswood Jones family cemetery (moved) — Limestone County",
        status: "Moved — new location unknown, not plotted",
        summary:
          "Transcribed in Valley Leaves v25-n3 (pp. 131–132) at NE¼ Sec. 28, T4S R3W: John Nelson Spotswood Jones (1793–1853), Eliza Ann Haywood (1807–1852), J. Haywood Jones (d. 1866, age 40), Spottswood (1855–1869), infant Spotswood Adair (1850–1852), and James Webb Smith Donnell (1859–1930), whose stone reads \"Son of James Webb Smith Donnell and MARIA LOUISA JONES.\" A later Valley Leaves work-list note states that the Cottonport and Menefee cemeteries, including this Jones cemetery, were moved. FLAG: this may be the same burial ground as the site's pinned \"Jones-Donnell Cemetery (Greenbrier)\" — the pinned location is T5S R3W Sec. 22 (DB1 row 2767), the pre-move transcription is T4S R3W Sec. 28 — the stones' new location is unverified. Researcher decision owed before any pin change.",
        citation:
          "Valley Leaves v25-n3, pp. 131–132; DB1 row 3729; paper note [1103]."
      },
      {
        name: "Duncan Hill Cemetery (Peter Thomas Hurt) — Jackson County, AL",
        status: "Reported, unverified — not plotted",
        summary:
          "Peter Thomas Hurt (b. 16 Jul 1845, Bellefonte, Jackson Co. AL; d. 26 Apr 1873, age 27; husband of Harriet Allen Boyd Hurt; mother Amanda F. JONES Hurt) is buried at Duncan Hill Cemetery, Jackson County, per Find a Grave (secondary). No verified GPS or PLSS location on file; a geocode attempt 2026-10-11 returned a Clarke County, AL match and was rejected.",
        citation:
          "Find a Grave (secondary — treat as lead); DB1 row 3753; paper note [1127]."
      },
      {
        name: "Harriet Allen Boyd Hurt burial — Windsor, Henry County, MO",
        status: "Reported, unverified — not plotted",
        summary:
          "Harriet Allen Boyd Hurt (b. 21 Sept 1849, Huntsville, AL, to James Allen Boyd and Mary D. Forsey; d. 4 Jan 1938, Windsor, MO, of a fractured femur) is buried at Windsor, Missouri, per her death certificate (Henry Co. #2880) — the cemetery is not named. Do not confuse with Harriett Hurt (d. 18 Sept 1926, Dalton, Chariton Co. MO — Black, husband Lucien), a different person.",
        citation:
          "Missouri death certificate (Henry Co. #2880); DB1 row 3753; paper note [1127]."
      }
    ]
  };
})();
