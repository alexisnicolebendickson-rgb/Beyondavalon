/*
  Avalon Project — UAH Campus Structures & Oral History dataset
  Secondary, campus-scale map (separate from plantations-data.js / map.html) showing
  documented and approximately-located structures associated with Avalon Plantation
  on the present-day University of Alabama in Huntsville (UAH) campus, plus oral
  histories / local legends associated with the site.

  Coordinate basis: UAH campus is centered near 34.7241, -86.6402 (Wikipedia; matches
  the Avalon Plantation entry in plantations-data.js). Individual structure locations
  below are derived from (a) the 1966 UAH Campus Topographic Map (G.W. Jones & Sons /
  Atlantic Aerial Surveys, copy held in the Avalon project Drive folder, file
  1yuDmVuPXlkpXFlrOjPC-76-8dvan9djT) showing the pre-development campus footprint and
  building outlines, and (b) published UAH Archives / History Dept. research describing
  where campus archaeology and GPR surveys located plantation-era features relative to
  named present-day buildings. Where a source gives only a relative description
  ("between Building A and Building B," "behind Building C"), the marker below is an
  ESTIMATED point placed between/behind those buildings' approximate modern locations —
  NOT a surveyed coordinate — and is labeled "approximate" in both marker style and
  popup text. Do not treat any marker here as a precise GPS location.
*/
window.UAH_CAMPUS_DATA = {
  campusCenter: { lat: 34.7241, lng: -86.6402 },
  features: [
    {
      id: "avalon-main-house",
      name: "Avalon plantation house / enslaver's dwelling site",
      category: "house",
      lat: 34.7238,
      lng: -86.6432,
      precise: false,
      summary: "Site of the Avalon plantation house, home of enslaver Alexander P. Jones and later Alexander Spotswood \"Spot\" Perkins. UAH History Dept. archaeology under Redstone Arsenal archaeologist Ben Hoksbergen located and excavated the enslaver's dwelling site between the Nursing Building and Roberts Hall. Marker placed approximately between these two buildings' current locations, not from a surveyed GPS point.",
      citation: "UAH News, \"UAH continues to discover the history of Avalon,\" https://www.uah.edu/ahs/news/17051-uah-continues-to-discover-the-history-of-avalon; UAH News, \"Historical archaeology students unearth 200-year-old artifacts buried on UAH campus,\" https://www.uah.edu/news/campus/historical-archaeology-students-unearth-200-year-old-artifacts-buried-on-uah-campus."
    },
    {
      id: "jones-perkins-cemetery",
      name: "Jones-Perkins Family Cemetery",
      category: "cemetery",
      lat: 34.7247,
      lng: -86.6408,
      precise: false,
      summary: "Family burial ground of the Jones/Perkins enslaver family, including Lewellen Jones's unmarked grave (later marked by the Twickenham Town Chapter, DAR, in the 1970s). Located behind present-day Morton Hall, next to Union Grove Gallery. A 2022 UAH/Tennessee Valley Archaeological Research (TVAR) ground-penetrating radar (GPR) survey scanned this area, and a second site near University Drive, seeking unmarked graves of enslaved people. Marker placed approximately behind Morton Hall, not from a surveyed GPS point.",
      citation: "UAH News, \"UAH Archives and Department of History to Erect Historical Marker on Campus,\" https://www.uah.edu/news/items/14122-uah-archives-and-department-of-history-to-erect-historical-marker-on-campus; Huntsville History Collection, \"From a Kingdom in Wales to a Cotton Farm in Alabama,\" https://huntsvillehistorycollection.org/hhc/showhpg.php?id=308&a=article; WAFF 48, \"Uncovering the history of unmarked slave graves at UAH,\" https://www.waff.com/2022/02/21/black-history-month-uncovering-history-unmarked-slave-graves-uah/; TVAR, \"GIS Remote Sensing & Mapping Services — Avalon Plantation,\" https://www.tvaresearch.com/gis-remote-sensing-mapping-services/."
    },
    {
      id: "gpr-survey-university-drive",
      name: "2022 GPR survey area — near University Drive",
      category: "survey-area",
      lat: 34.7226,
      lng: -86.6389,
      precise: false,
      summary: "Second of two areas scanned by TVAR's Claiborne Sea with ground-penetrating radar in May 2022, searching for unmarked graves of enslaved people, in addition to the Jones-Perkins Cemetery site. Exact scan boundary not published; marker placed approximately along University Drive within the historic Avalon tract.",
      citation: "UAH News, \"UAH continues to discover the history of Avalon,\" https://www.uah.edu/ahs/news/17051-uah-continues-to-discover-the-history-of-avalon; TVAR, \"GIS Remote Sensing & Mapping Services — Avalon Plantation,\" https://www.tvaresearch.com/gis-remote-sensing-mapping-services/."
    },
    {
      id: "enslaved-dwellings-general",
      name: "35 enslaved-persons' dwellings (general area, unmapped individually)",
      category: "slave-quarters",
      lat: 34.7255,
      lng: -86.6435,
      precise: false,
      summary: "By 1860, 106 enslaved people lived and worked at Avalon, housed in 35 separate dwellings on the property (Alabama Historical Association marker text). Archaeologist Ben Hoksbergen's research indicates the plantation incorporated the whole northern half of the current campus. No source located to date maps individual dwelling footprints; this single marker denotes the general northern-campus area associated with the enslaved-persons' housing rather than any specific structure. Flagged as a priority target for future archaeological and archival work.",
      citation: "Beyond Avalon (home page); Alabama Historical Association marker text, https://www.alabamahistory.net/madison; UAH News, \"Historical archaeology students unearth 200-year-old artifacts buried on UAH campus,\" https://www.uah.edu/news/campus/historical-archaeology-students-unearth-200-year-old-artifacts-buried-on-uah-campus."
    },
    {
      id: "stables-outbuildings-general",
      name: "Stables / outbuildings (approximate, per 1966 topo map footprint)",
      category: "outbuilding",
      lat: 34.7213,
      lng: -86.6455,
      precise: false,
      summary: "The 1966 UAH Campus Topographic Map (G.W. Jones & Sons / Atlantic Aerial Surveys) shows a cluster of small structures and access roads in the southwestern portion of the pre-development campus tract, consistent with plantation-era outbuildings (barns, stables, or similar service structures) noted in period plantation layouts generally. No structure on the 1966 map is individually labeled as a stable; this marker is a general approximate placement based on the visible building cluster and access-road pattern, not a confirmed identification. A documented structure ID or period source naming this cluster has not yet been located.",
      citation: "1966 UAH Campus Topographic Map, G.W. Jones & Sons / Atlantic Aerial Surveys (Avalon project Drive archive, file 1966-06-UAH-Campus-Topographic-Map)."
    }
  ],
  oralHistories: [
    {
      id: "apj-cave",
      name: "\"APJ and the cave\"",
      lat: null,
      lng: null,
      summary: "Local oral tradition / family story referencing Alexander P. Jones (\"APJ\"), enslaver and owner of Avalon Plantation from 1820, and a cave associated with him or the property. No documentary source, transcript, or specific location for this story has yet been located in the project archive or in published UAH/Huntsville-area history sources consulted for this map. Logged here as an open research question, not a mapped location — do not infer a site from this entry.",
      status: "unconfirmed — location and full account not yet located; flagged for follow-up with UAH Oral History Collection (oralhistory@uah.edu) and family/descendant interviews.",
      citation: "Beyond Avalon research notes (internal); UAH Archives & Special Collections Oral History Collection, https://oralhistory.uah.edu/about (not yet searched for this specific item)."
    },
    {
      id: "matthews-cave-context",
      name: "Regional cave lore context: Matthews Cave",
      lat: null,
      lng: null,
      summary: "For general regional context only (not confirmed to be the same site as \"APJ and the cave\"): a documented Huntsville-area cave, originally on land owned by pioneer James Manning before Luke Matthews acquired the tract, is known locally as Matthews Cave. Logged here only to note that cave place-names/legends were common in this part of Madison County; this is NOT evidence that Matthews Cave is connected to Avalon or to Alexander P. Jones.",
      status: "context only — not a claimed Avalon site.",
      citation: "Huntsville History Collection, https://huntsvillehistorycollection.org/hhc/showhpg.php?a=article&id=3."
    },
    {
      id: "alexander-jones-eccentricity",
      name: "Alexander P. Jones described as reclusive / \"peculiar\"",
      lat: null,
      lng: null,
      summary: "Local historical accounts describe Alexander Jones, who inherited Avalon and became the fourth-largest slaveholder in Madison County by 1850, as an eccentric who lived alone, conducted business only through an agent, and was known to buy but never sell enslaved people or old horses (treating the latter humanely until their deaths, per local tradition). Included as oral-history/local-tradition context relevant to the Avalon site's social history, not as a mapped location.",
      status: "documented in secondary local-history source; not independently verified against primary records for this map.",
      citation: "Huntsville History Collection, \"From a Kingdom in Wales to a Cotton Farm in Alabama,\" https://huntsvillehistorycollection.org/hhc/showhpg.php?id=308&a=article; UAH News, \"Historical archaeology students unearth 200-year-old artifacts buried on UAH campus,\" https://www.uah.edu/news/campus/historical-archaeology-students-unearth-200-year-old-artifacts-buried-on-uah-campus."
    }
  ]
};
