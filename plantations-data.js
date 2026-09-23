/*
  Avalon Project — Plantations Map dataset
  PARTIAL RESTORATION NOTICE (2026-08-29): The original map build's script/data
  files (map.js, map.css, plantations-data.js) were missing from the project
  folder, so the "Plantations Map" link led to a page with no working map.
  This file rebuilds the dataset from the site's own surviving legend and
  research-gaps text (index.html / map.html), which reproduced the tier
  definitions, county groupings, and citations verbatim. 24 of the originally
  reported 37 sites could be identified by name from that surviving text;
  entries for Lauderdale, Morgan, and DeKalb counties (part of the original
  37) could not be recovered and are NOT included below rather than invented.
  If a backup of the full 37-entry dataset exists, replace this file with it.
*/
window.PLANTATIONS_DATA = {
  restoredCount: 24,
  originalCount: 37,
  missingCounties: ["Lauderdale", "Morgan", "DeKalb"],

  /* ---------- Network connections ----------
     Documented ties between sites: kinship/ownership networks, and (where a
     site has no fixed coordinates, e.g. a mercantile firm) a note is carried
     on the related site's own record instead of a line. "type" controls the
     line color/legend in map.js. Every edge must cite a source — do not add
     an edge on inference alone; log inference-level ties as text on the
     dedicated Leasing page (leasing.html) instead. */
  connections: [
    {
      from: "avalon",
      to: "druids-grove",
      type: "kinship",
      detail: "Both properties are documented as belonging to, or built by, the family of Lewellen Jones of Avalon or his immediate descendants.",
      citation: "Beyond Avalon research dataset (Tier 1 legend, map.html)."
    },
    {
      from: "avalon",
      to: "seclusion",
      type: "kinship",
      detail: "Both properties are documented as belonging to, or built by, the family of Lewellen Jones of Avalon or his immediate descendants.",
      citation: "Beyond Avalon research dataset (Tier 1 legend, map.html)."
    },
    {
      from: "avalon",
      to: "john-haywood-jones-house",
      type: "kinship",
      detail: "Both properties are documented as belonging to, or built by, the family of Lewellen Jones of Avalon or his immediate descendants; see the J. Haywood Jones Estate Sale Notice (1866) in the Documents section for a related bill of sale of enslaved people at dissolution of an estate in this family network.",
      citation: "Beyond Avalon research dataset (Tier 1 legend, map.html); J. Haywood Jones Estate Sale Notice (1866)."
    },
    {
      from: "avalon",
      to: "donnell-house-pleasant-hill",
      type: "kinship",
      detail: "Documented as belonging to, or built by, the family of Lewellen Jones of Avalon or his immediate descendants. The Donnell surname also recurs independently in Huntsville's free and, later, Black community leadership (Rev. Robert Donnell founded Huntsville's Cumberland Presbyterian Church in 1825; Rev. B. J. Donnell and D. F. Donnell appear in the Black-owned Huntsville Gazette, 1883-1894) — a possible community continuity, not a confirmed kinship link to this property, and logged separately in the evidence database (DB1 rows 415, 417-418).",
      citation: "Beyond Avalon research dataset (Tier 1 legend, map.html); Betts, Early History of Huntsville, https://archive.org/details/earlyhistoryofhu00bett; Huntsville Gazette, Library of Congress Chronicling America, https://www.loc.gov/resource/sn84020151/."
    }
  ],

  sites: [
    // ---------- TIER 1: Directly part of the Avalon/Jones research line ----------
    {
      id: "avalon",
      name: "Avalon Plantation",
      tier: 1,
      county: "Madison",
      lat: 34.7241,
      lng: -86.6402,
      precise: false,
      summary: "Home plantation of Lewellen (Llewellen) Jones; the enslaved-persons research line at the center of this project. The site is now part of the University of Alabama in Huntsville campus.",
      citation: "Beyond Avalon research dataset; Lewellen Jones Probate Index (1820); 1966 UAH topographic map overlay."
    },
    {
      id: "druids-grove",
      name: "Druid's Grove",
      tier: 1,
      county: "Limestone",
      lat: 34.85,
      lng: -86.95,
      precise: false,
      summary: "Plantation of John Nelson Spotswood (J.N.S.) Jones, son of Lewellen Jones of Avalon, built before 1820 at Greenbrier, Limestone County. J.N.S. Jones and his wife Eliza Ann Jones (daughter of Judge John Haywood) are buried at the adjoining Jones-Donnell Cemetery (Alabama historical marker, 2011). Location approximate, placed at Greenbrier per the county cemetery survey's Township/Range reference (T4S, R3W, Sec. 28); the plantation house itself burned in the 1930s.",
      citation: "Encyclopedia of Alabama, \"Donnell House\"; Alabama Historical Association marker, \"Druid's Grove Plantation / Jones-Donnell Cemetery\" (2011); Alabama Maps (Univ. of Alabama), Limestone County cemetery survey, https://alabamamaps.ua.edu/cemetery/text/Limestone.pdf; Huntsville History Collection, \"From a Kingdom in Wales to a Cotton Farm in Alabama,\" https://huntsvillehistorycollection.org/hhc/showhpg.php?id=308&a=article."
    },
    {
      id: "seclusion",
      name: "Seclusion",
      tier: 1,
      county: "Limestone",
      lat: 34.83,
      lng: -86.97,
      precise: false,
      summary: "Tract/estate associated with James Webb Smith Donnell in Limestone County, referenced in Donnell family letters (1863, 1865) and a Donnell/Seclusion estate financial statement describing roughly 30 enslaved laborers and a blacksmith shop. No street address or deed-level location has yet been confirmed from the reviewed documents; placement here is an approximate placeholder within Limestone County pending further archival research (see also the Donnell House / Pleasant Hill entry on this map).",
      citation: "Beyond Avalon research dataset (Tier 1 legend, map.html); J.W.S. Donnell letters, Nov. 1863 and Dec. 1865 (Avalon project archive); Donnell, J.W.S. (c. 1860), Property Inventory, cited in project Druid's Grove/Seclusion research memo."
    },
    {
      id: "john-haywood-jones-house",
      name: "John Haywood Jones House",
      tier: 1,
      county: "Madison",
      lat: 34.74,
      lng: -86.61,
      precise: false,
      summary: "Documented as belonging to, or built by, the family of Lewellen Jones of Avalon Plantation or their immediate descendants. See also the J. Haywood Jones Estate Sale Notice (1866) in the Documents section.",
      citation: "Beyond Avalon research dataset (Tier 1 legend, map.html); J. Haywood Jones Estate Sale Notice (1866)."
    },
    {
      id: "donnell-house-pleasant-hill",
      name: "Donnell House / Pleasant Hill",
      tier: 1,
      county: "Lawrence",
      lat: 34.68,
      lng: -87.41,
      precise: false,
      summary: "Documented as belonging to, or built by, the family of Lewellen Jones of Avalon Plantation or their immediate descendants.",
      citation: "Beyond Avalon research dataset (Tier 1 legend, map.html)."
    },

    // ---------- TIER 2: Jones-surname sites requiring caution (namesake, not confirmed kin) ----------
    {
      id: "elyton-jones-valley",
      name: "Elyton / Jones Valley",
      tier: 2,
      county: "Jefferson",
      lat: 33.52,
      lng: -86.85,
      precise: false,
      summary: "Named for John \"Devil John\" Jones — no documented link to the Avalon/Lewellen Jones line.",
      laborSystemNote: "Jefferson County became the center of Alabama's post-emancipation convict-leasing system, in which county and state prisoners — disproportionately Black men convicted under Reconstruction-era vagrancy and petty-theft laws — were leased to coal mines and furnace operators (see the site's Leasing page). This is regional context for the labor system that replaced slavery in this part of Alabama; no document yet ties Elyton/Jones Valley specifically into the Avalon/Jones research line.",
      citation: "Beyond Avalon research dataset (Tier 2 legend, map.html)."
    },
    {
      id: "arlington-the-grove",
      name: "Arlington / The Grove",
      tier: 2,
      county: "Jefferson",
      lat: 33.494,
      lng: -86.845,
      precise: false,
      summary: "Included for regional map context only; no claimed Jones-family connection.",
      laborSystemNote: "Also located in Jefferson County, the historic center of Alabama's post-emancipation convict-leasing system (see the site's Leasing page). Regional context only; not a confirmed Avalon/Jones-network site.",
      citation: "Beyond Avalon research dataset (Tier 2 legend, map.html)."
    },
    {
      id: "richard-jones-pond-spring",
      name: "Richard Jones plantation, near Pond Spring",
      tier: 2,
      county: "Lawrence",
      lat: 34.616,
      lng: -87.283,
      precise: false,
      summary: "A different, unrelated Jones line — namesake only, not a confirmed connection to Avalon.",
      citation: "Beyond Avalon research dataset (Tier 2 legend, map.html)."
    },
    {
      id: "quietdale",
      name: "Quietdale",
      tier: 2,
      county: "Madison",
      lat: 34.73,
      lng: -86.59,
      precise: false,
      summary: "A 20th-century owner named Jones — not an antebellum connection to the Avalon/Lewellen Jones line.",
      citation: "Beyond Avalon research dataset (Tier 2 legend, map.html)."
    },
    {
      id: "rocky-hill-castle",
      name: "Rocky Hill Castle",
      tier: 2,
      county: "Lawrence",
      lat: 34.667,
      lng: -87.317,
      precise: false,
      summary: "Its Gothic tower is attributed to artisan Hugh Jones, not a planter kinsman of the Avalon line.",
      citation: "Beyond Avalon research dataset (Tier 2 legend, map.html)."
    },

    // ---------- TIER 3: General North Alabama plantations (map context) ----------
    {
      id: "pond-spring-hickman",
      name: "Pond Spring / Hickman",
      tier: 3,
      county: "Lawrence",
      lat: 34.616,
      lng: -87.283,
      precise: false,
      confirmedEnslaved: "56 (1818)",
      summary: "Included to show the scale and geography of plantation slavery in the region; no claimed connection to the Jones/Perkins line.",
      citation: "Beyond Avalon research dataset (Tier 3 legend and gaps notes, map.html)."
    },
    {
      id: "preuit-oaks",
      name: "Preuit Oaks",
      tier: 3,
      county: "Colbert",
      lat: 34.696,
      lng: -87.531,
      precise: false,
      confirmedEnslaved: "66 (1860, NRHP) or 200+ (Encyclopedia of Alabama) — sources conflict; both preserved",
      summary: "Included to show the scale and geography of plantation slavery in the region; no claimed connection to the Jones/Perkins line.",
      citation: "Beyond Avalon research dataset (gaps notes, map.html); National Register of Historic Places; Encyclopedia of Alabama."
    },
    {
      id: "williamson-hawkins",
      name: "Williamson Hawkins plantation",
      tier: 3,
      county: "Madison",
      lat: 34.71,
      lng: -86.55,
      precise: false,
      confirmedEnslaved: "up to 150",
      summary: "Included to show the scale and geography of plantation slavery in the region; no claimed connection to the Jones/Perkins line.",
      citation: "Beyond Avalon research dataset (gaps notes, map.html)."
    },
    {
      id: "brides-hill-dandridge",
      name: "Bride's Hill (Dandridge)",
      tier: 3,
      county: "Lawrence",
      lat: 34.65,
      lng: -87.32,
      precise: false,
      summary: "The Dandridges of Bride's Hill descended directly from Gov. Alexander Spotswood of Virginia — the same Spotswood name carried by John Nelson Spotswood Jones and Alexander Spotswood Perkins. A promising but unproven lead worth pursuing in Virginia records, not a confirmed connection.",
      citation: "SAH Archipedia, https://sah-archipedia.org/buildings/AL-01-079-0002"
    },
    {
      id: "forrest-field",
      name: "Forrest Field",
      tier: 3,
      county: "Madison",
      lat: 34.75,
      lng: -86.58,
      precise: false,
      summary: "Twin house to Oaklawn, built by James Robinson further north on Meridian Street, Huntsville; burned during the Civil War.",
      citation: "Madison County Before Statehood, ALGenWeb, https://www.rootsweb.com/~almadiso/beforestate.html"
    },
    {
      id: "oaklawn",
      name: "Oaklawn",
      tier: 3,
      county: "Madison",
      lat: 34.752,
      lng: -86.581,
      precise: false,
      summary: "Twin house to Forrest Field on Meridian Street, Huntsville.",
      citation: "Madison County Before Statehood, ALGenWeb, https://www.rootsweb.com/~almadiso/beforestate.html"
    },
    {
      id: "flint-river-place-jordan-mansion",
      name: "Flint River Place / Jordan Mansion",
      tier: 3,
      county: "Madison",
      lat: 34.68,
      lng: -86.52,
      precise: true,
      summary: "1997 Jordan Road, Huntsville — listed in the Alabama Historical Commission's National Register inventory; not yet researched in depth.",
      citation: "Alabama Historical Commission, https://ahc.alabama.gov/nationalregisterlist.aspx"
    },
    {
      id: "beard",
      name: "Beard",
      tier: 3,
      county: "Marshall",
      lat: 34.36,
      lng: -86.25,
      precise: false,
      summary: "Marshall County site included for regional map context; coordinates are approximate pending sharper parcel-level data.",
      citation: "Beyond Avalon research dataset (gaps notes, map.html)."
    },
    {
      id: "fennell",
      name: "Fennell",
      tier: 3,
      county: "Marshall",
      lat: 34.37,
      lng: -86.27,
      precise: false,
      summary: "Marshall County site included for regional map context; coordinates are approximate pending sharper parcel-level data.",
      citation: "Beyond Avalon research dataset (gaps notes, map.html)."
    },
    {
      id: "griffin",
      name: "Griffin",
      tier: 3,
      county: "Marshall",
      lat: 34.35,
      lng: -86.23,
      precise: false,
      summary: "Marshall County site included for regional map context; coordinates are approximate pending sharper parcel-level data.",
      citation: "Beyond Avalon research dataset (gaps notes, map.html)."
    },
    {
      id: "cornsilk",
      name: "Cornsilk",
      tier: 3,
      county: "Marshall",
      lat: 34.38,
      lng: -86.22,
      precise: false,
      summary: "Marshall County site included for regional map context; coordinates are approximate pending sharper parcel-level data.",
      citation: "Beyond Avalon research dataset (gaps notes, map.html)."
    },
    {
      id: "gilbreath",
      name: "Gilbreath",
      tier: 3,
      county: "Marshall",
      lat: 34.34,
      lng: -86.28,
      precise: false,
      summary: "Marshall County site included for regional map context; coordinates are approximate pending sharper parcel-level data.",
      citation: "Beyond Avalon research dataset (gaps notes, map.html)."
    },
    {
      id: "griffith",
      name: "Griffith",
      tier: 3,
      county: "Marshall",
      lat: 34.39,
      lng: -86.24,
      precise: false,
      summary: "Marshall County site included for regional map context; coordinates are approximate pending sharper parcel-level data.",
      citation: "Beyond Avalon research dataset (gaps notes, map.html)."
    },
    {
      id: "woodside",
      name: "Woodside",
      tier: 3,
      county: "Unconfirmed",
      lat: 34.6,
      lng: -86.9,
      precise: false,
      summary: "Grouped with Druid's Grove and Seclusion as having only approximate coordinates in the surviving dataset notes; exact county not recorded on the surviving page text.",
      citation: "Beyond Avalon research dataset (gaps notes, map.html)."
    }
  ]
};
