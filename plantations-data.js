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
  2026-09-23 UPDATE: 57 research sites were added from staged map-data batches
  (23 from the 2026-09-20 additions file, 18 from the 2026-09-21
  migration/wealth batch, 16 new chancery/British-register/Anderson anchors;
  ids collision-checked against the existing 24). restoredCount is now 81 and
  originalCount 94. The Lauderdale, Morgan, and DeKalb entries of the original
  37 remain unrecovered — a new Morgan County research anchor
  (morgan-county-al-love) is NOT one of the lost originals — so missingCounties
  is unchanged.
*/
window.PLANTATIONS_DATA = {
  restoredCount: 81,
  originalCount: 94,
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
    },
    // ---------- 2026-09-23 paste: map-data-additions batch (2026-09-20, 23 sites, staged, user-approved) ----------
  {
      id: "queens-creek-plantation-va",
      name: "Rev. Rowland Jones's 400-acre plantation, Queen's Creek (York County, VA)",
      tier: 1,
      county: "York", // Virginia — see header note on the county filter
      lat: 37.2555,
      lng: -76.6643,
      precise: false, // approximate: Queen's Creek near Williamsburg; refine against the Juxon→Jones deed (1684–85 lead) at map-build time
      summary: "The 400-acre Queen's Creek plantation of Rev. Rowland Jones (1644–1688), the Jones family's colonial anchor (Rev. Rowland → Orlando Jones → Lane Jones → Rolando/Rowland Jones, b. Apr 19, 1738 — the chain toward the Alabama Joneses is still under research). A complete 1623–1774 Library of Virginia index search found ZERO patents for Rev. Rowland: the plantation came by purchase, CONFIRMED via two independent scholarly abstracts (W&M Quarterly 'Historical and Genealogical Notes,' p. 229; Fulham Palace Trust research) — 1685 deed from London merchants John & Sarah Juxon, 400 acres with a 'fair brick house' near Queen's Creek and St. Andrew's Creek (now Carter's Creek); chain of title: merchants George Lee & Daniel Wild → Robert Spring (built the house) → Sarah Webb → the Juxons → Rowland. The Juxons were London merchants (salt, cloth, sugar refining, Morocco trade) — a commercial connection, but nothing ties the conveyance to the slave trade. Colonial Williamsburg: 'thought to have lived at Queen's Creek near town.'",
      citation: "Library of Virginia Land Office Patents index (search 2026-09-20); Colonial Williamsburg."
    },
  {
      id: "johns-creek-patents-va",
      name: "Orlando Jones's Johns Creek patents (King William County, VA)",
      tier: 1,
      county: "King William", // Virginia — see header note on the county filter
      lat: 37.7156,
      lng: -76.9803,
      precise: false, // approximate: King William County center; refine against LVA patent plats (PB 9 p. 732; PB 10 p. 74) at map-build time
      summary: "Orlando Jones's two adjoining patents totaling 197 acres on Johns Creek, St. John's Parish: 107 acres (2 May 1706, Patent Book 9 p. 732 — consideration: transportation of two unnamed people) and 90 acres (2 May 1713, Patent Book 10 p. 74 — headrights Tabitha Nicholson [surname reading uncertain] and James Lucas; the 90-acre tract lay between the College (William & Mary) line and John Williams's line, east side of Johns Creek). No enslaved Africans named as headrights. Secondary lead (unverified): an article claims Orlando owned 21 enslaved persons though 'not a major planter'; his inventory, recorded York County 15 Dec 1719, would settle it.",
      citation: "Library of Virginia Land Office Patents, Books 9–10 (originals read 2026-09-20)."
    },
  {
      id: "tuscaloosa-al",
      name: "Tuscaloosa, Alabama",
      tier: 1,
      county: "Tuscaloosa",
      lat: 33.2347,
      lng: -87.5394,
      precise: false, // approximate: city center; refine at map-build time
      summary: "Shandy Wesley Jones (1816–1886), free Black barber, was in Tuscaloosa by 1837 and served as a Tuscaloosa County legislator 1868–70. The 1860 census shows Columbus Jones living next door. Columbus (elected for Madison) and Shandy (elected for Tuscaloosa) were both elected Feb 4, 1868, and both served on the July 1868 Republican convention Committee on Resolutions. Whether Columbus and Reuben Jones were Shandy's half-brothers remains unresolved.",
      citation: "Ben Hoksbergen & Jane DeNeefe, 'Keeping Up with the Joneses: Tracing the Lives and Legacies of Two Reconstruction-Era Legislators from Madison County,' Alabama Review 79(3) (July 2026)."
    },
  {
      id: "mobile-al",
      name: "Mobile, Alabama",
      tier: 1,
      county: "Mobile",
      lat: 30.6764,
      lng: -88.0676,
      precise: false, // approximate: city center; refine at map-build time
      summary: "Shandy Wesley Jones's later years. Leads (unverified): an 1880 census household transcription and a Magnolia Cemetery plot file; his wife Elvina Love was reportedly living in Mobile by 1871. Caveat: the project's research database currently rates the claimed ~13 years as a Mobile customs inspector as evidence-against — Shandy appears in none of seven consulted Customs Register editions (1873–1885) — and the 2017 SJR25 resolution honoring him is commemorative, not primary evidence.",
      citation: "Project research database (DB4-212); Alabama SJR25 (2017), commemorative."
    },
  {
      id: "monrovia-liberia",
      name: "Monrovia, Liberia",
      tier: 1,
      county: "Montserrado", // Liberia — see header note on the county filter
      lat: 6.3005,
      lng: -10.7716,
      precise: false, // approximate: city center; refine at map-build time
      summary: "Destination in Shandy Wesley Jones's colonization writings. His letters appeared in the African Repository: September 1850 (pp. 276–277, anonymous 'ten years' letter) and May 1852 (pp. 148–149, signed 'S. W. JONES'). A full sweep of all 141 monthly issues and annual indexes, vols. 25–35 (1849–1859), found no additional Jones letters; two 1856 Tuscaloosa hits are emigrant lists, not letters.",
      citation: "African Repository 26 (Sept 1850): 276–277; 28 (May 1852): 148–149."
    },
  {
      id: "bedford-va-chancery",
      name: "Bedford County, Virginia",
      tier: 2,
      county: "Bedford", // Virginia — see header note on the county filter
      lat: 37.2728,
      lng: -79.4911,
      precise: false, // approximate: town of Bedford (county seat); refine at map-build time
      summary: "Active wealth-investigation lead: Library of Virginia chancery cases pairing Jones and Perkins litigants — 1855-031 (Taliaferro Owens & Abraham Perkins v. William R. Jones), 1858-012 (executors of William R. Jones v. administrator of Abraham Perkins), 1846-049, 1810-019, 1830-001, 1836-032, 1837-016. An 1819 Jones–Perkins land exchange across the Otter River (David & Martha Jones to Elisha Perkins, 12 acres, $50) and a $5,000 Otter Mills deal tie Jones land to Perkins industrial capital. No genealogical link to the Alabama Joneses established — lead, not conclusion.",
      citation: "Library of Virginia Chancery Records Index (Bedford County)."
    },
  {
      id: "jackson-al-glo",
      name: "Madison County, Alabama (GLO patents)",
      tier: 2,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: Huntsville (county seat); refine against GLO legal descriptions
      summary: "BLM General Land Office cash-entry patents read firsthand from the certificates 2026-09-20: 'Reuben Jones of Madison County Alabama,' Mar 15, 1831 (79.73 acres, Huntsville Meridian T3S R3E Sec 19 W½NW; accession STA-AL1190__.257, Doc. 2262 — the index's 'T30S R30E' was a transcription error) and 'Reuben Parker Jones of Madison County Alabama,' Sept 10, 1838 (39.87 acres, T3S R3E Sec 19 NENW; accession STA-AL3550__.370, Doc. 9100). The 'P.' is Parker — a new lead name. Adjacent aliquots in the same section: one man's accumulation, or close kin. Both were adult cash purchasers, so neither can be Shandy's possible half-brother Reuben (b. ~1823); connection to the Avalon Joneses unresolved — lead. No Alabama patent found for Shandy or Columbus Jones.",
      citation: "BLM General Land Office Records, Patents (certificates read firsthand 2026-09-20)."
    },
  {
      id: "clay-al-glo",
      name: "Talladega County, Alabama (GLO patent)",
      tier: 2,
      county: "Talladega",
      lat: 33.4343,
      lng: -86.1059,
      precise: false, // approximate: Talladega (county seat); refine against GLO legal descriptions
      summary: "BLM General Land Office patent read firsthand from the certificate 2026-09-20: 'William Riley Jones, of Talladega County, Alabama,' Feb 1, 1860 (80.30 acres, Huntsville Meridian T22S R8E Sec 8 NENW + Sec 5 SWSE; accession STA-AL3360__.357, Doc. 21757.5; marked 'Graduation,' Graduation Act of 1854). The 'R.' is Riley; the modern 'Clay County' tag is anachronistic (Clay formed 1866). RULED OUT as the Bedford County, Virginia William R. Jones of chancery cases 1855-031/1858-012 (dead by Aug 1857); almost certainly the Co. G, 41st Alabama Infantry soldier killed at Chickamauga in 1863.",
      citation: "BLM General Land Office Records, Patents (certificate read firsthand 2026-09-20)."
    },
  {
      id: "limestone-al-glo",
      name: "Limestone County, Alabama (GLO patents)",
      tier: 2,
      county: "Limestone",
      lat: 34.8042,
      lng: -86.9684,
      precise: false, // approximate: Athens (county seat); refine against GLO legal descriptions
      summary: "BLM General Land Office credit patents read firsthand from the certificates 2026-09-20: 'Abraham Perkins, of Madison County,' May 10, 1813 (SE¼ Sec 24, T2S R3W, Huntsville land office, executed June 17, 1813; accession CV-0107-060 — no contradiction with the modern Limestone attribution, since Madison County then covered present-day Limestone, formed 1818; imperfect, reissued as Serial Patent 1241528 on Mar 6, 1968, a corrective reissue, not a new patentee) and 'Bernard Devan & John Deblin assignees of Abraham Perkins,' Nov 20, 1818 (SW¼ Sec 13, T2S R3W, accession CV-0109-135, Doc. 823 — Perkins was the original claimant; granted 'as tenants in common and not as joint tenants'). The 1813 Madison County residence is corroborated by the 1816 Madison County territorial census ('Perkins, Abraham') — a real early Perkins settler, sharpening the question of whether he connects to the Frances Anna Maria Perkins Jones line. Devan and Deblin are new surnames — lead only.",
      citation: "BLM General Land Office Records, Patents (certificates read firsthand 2026-09-20)."
    },
  {
      id: "tuscaloosa-al-glo",
      name: "Tuscaloosa County, Alabama (GLO patents)",
      tier: 2,
      county: "Tuscaloosa",
      lat: 33.2098,
      lng: -87.5267,
      precise: false, // approximate: Tuscaloosa (county seat); refine against GLO legal descriptions
      summary: "BLM General Land Office cash-entry patents read firsthand from the certificates 2026-09-20: 'Abraham Perkins, of Tuskaloosa county,' July 30, 1827 (E½NW Sec 22, T18S R11W, 80 acres; accession STA-AL0760__.052, Doc. 6094) and 'Abraham Perkins of Tuscaloosa County,' Jan 4, 1831 (E½SW Sec 26, T18S R11W, 79.75 acres; accession STA-AL0780__.129, Doc. 7246) — same township/range, adjacent sections, one man's accumulation. RULED OUT as the Bedford County, Virginia Abraham Perkins of chancery cases 1855-031/1858-012 (that man litigated in Virginia through 1855 and died there). Whether the Madison (1813/1818) → Tuscaloosa (1827/1831) Abraham Perkins is one migrating man or two: unresolved — lead.",
      citation: "BLM General Land Office Records, Patents (certificates read firsthand 2026-09-20)."
    },
  {
      id: "lee-ms-anderson",
      name: "Lee County, Mississippi",
      tier: 3,
      county: "Lee", // Mississippi — see header note on the county filter
      lat: 34.3064,
      lng: -88.7054,
      precise: false, // approximate: Tupelo (county seat); refine at map-build time
      summary: "Context only — no thesis-family link. Milton Anderson's 'Information Wanted' advertisement (Huntsville Gazette, Apr 15, 1893, p.3) sought his sisters Polly and Rachel and his father Richard Anderson, 'all of whom I left in Lee county, Miss in 1867'; he 'formerly belonged to Mason Anderson, of Lee Co., Miss.' Illustrates post-emancipation family separation.",
      citation: "Huntsville Gazette, Apr 15, 1893, p.3."
    },
  {
      id: "huntsville-blacksmith-shop",
      name: "Reuben Jones's blacksmith shop (Huntsville)",
      tier: 1,
      county: "Madison",
      lat: 34.7288,
      lng: -86.5913,
      precise: false, // approximate: west end of Clinton St. area, downtown Huntsville; refine against period maps
      summary: "Reuben Jones's blacksmith shop — the 'old stand' at the west end of Clinton St. on the Triana road, Huntsville. An 1893 advertisement by C. L. Jones, Jr. reads: 'I am running a well established Black Smith Shop at Reuben Jones' old stand West end of Clinton St., on the Triana road.' 'Old stand' marks it as an established landmark by 1893; years of operation unresolved.",
      citation: "Huntsville Gazette, Apr 15, 1893, p.3."
    },
  {
      id: "buckingham-va-joel-trust",
      name: "Buckingham County, Virginia (Joel W. Jones 1814 trust origin)",
      tier: 2,
      county: "Buckingham", // Virginia — see header note on the county filter
      lat: 37.55,
      lng: -78.55,
      precise: false, // approximate: Buckingham County center; no mappable tract — context only
      summary: "Origin of the Joel W. Jones → Lewellen Jones deed of trust (Deed Book M pp. 457–458): executed circa 1814 in Buckingham County, Virginia (acknowledged Sept 21, 1814) and recorded in Madison County, Alabama in October 1829 — resolving the post-probate date puzzle (the 1829 index date is the recording date). No land conveyed: 19 named enslaved people plus livestock, furniture, and tools in trust for Joel's wife Jane Jones and their daughter Betty. No relationship stated between Joel and Lewellen Jones. Context only — instrument origin, not a land site.",
      citation: "Madison County Deed Book M, pp. 457–458 (instrument read 2026-09-20)."
    },
  {
      id: "arthur-jones-sec17-al",
      name: "Arthur W. Jones's Section 17 purchase (Madison County, AL)",
      tier: 1,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: Huntsville (county seat); refine against the deed's metes (from John Danels's corner) at map-build time
      summary: "Arthur W. Jones (Joel W. Jones's brother, 1827 will) bought 112.5 acres in the NE¼ of Section 17, Township 2, Range 1 East, for $2,000 from Hugh Lawson White of Knox County, Tennessee (Deed Book N pp. 395–396, Aug 9, 1831; recorded Sept 7, 1831). Prior title ran back to Thomas Bailey (Book H p. 531). The deed never expands Arthur's 'W.' — Tier 1 by the documented 1827 kinship, not by name match.",
      citation: "Madison County Deed Book N, pp. 395–396 (instrument read 2026-09-20)."
    },
  {
      id: "arthur-jones-sec28-21-al",
      name: "Arthur W. Jones's Section 28/21 purchase (Madison County, AL)",
      tier: 1,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: Huntsville (county seat); refine against the deed's legal description at map-build time
      summary: "Arthur W. Jones's $3,400 court-ordered purchase (Deed Book O p. 377, Mar 15, 1833): two-thirds of the NW¼ of Section 28 (the unsold balance), Township 2, Range 1 East, plus the portion of the SW¼ of Section 21 between the 20/21 section lines and the Beaver Dam Fork of Flint River — the apportioned lots of John Helms and Grief Johnson & wife, heirs of William Helms. Carried out a lost 1827 title bond from Joseph Phillips (decd.); the Madison County Court ordered his administrator John Vining to convey on May 14, 1832. 'W.' unexpanded.",
      citation: "Madison County Deed Book O, p. 377 (instrument read 2026-09-20)."
    },
  {
      id: "reuben-p-jones-sec36-19-al",
      name: "Reuben P. Jones trust land, Sec 36 vs. Sec 19 (Madison County, AL)",
      tier: 2,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: Huntsville (county seat); DO NOT refine until O648 is read — the section itself is disputed
      summary: "Reuben P. Jones's January 14, 1833 trust deed to Levi Byram (Deed Book O p. 259, securing a $233.25 note to Thomas V. Provence due Jan 1, 1834): half of the NW¼ of 36 acres at the north end of the W½ NW¼, patent No. 2262 — in SECTION 36, Township 3, Range 3 East, though the deed index logged the same deed under Section 19. Discrepancy fenced: patent 2262 is also the certificate number of the 1831 Reuben Jones GLO patent for Sec 19, so the deed's 'Section 36' may be a clerk's slip — O648 is the check. Tier 2: 'P.' unexpanded, identity as Reuben Parker Jones unresolved — lead only.",
      citation: "Madison County Deed Book O, p. 259 (instrument read 2026-09-20)."
    },
  {
      id: "reuben-p-jones-o648-sec19-al",
      name: "Reuben P. Jones & wife Ruanner to Levi Byram, O648 warranty deed, Sec 19 (Madison County, AL)",
      tier: 2,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: Huntsville (county seat); DO NOT refine — two deeds disagree about the section
      summary: "Reuben P. Jones and his wife Ruanner (name as written; signed with an X mark) sold 36 acres — the north end of the W½ NW¼ of SECTION 19, Township 3, Range 3 East — to Levi Byram for $250 (Deed Book O pp. 648–649: executed Jan 25, 1834, registered Feb 6, 1834). An outright warranty deed; Byram appears here as a buyer, not as the trustee of the 1833 O259 note. Ruanner was privately examined apart from her husband and gave a full dower release — the first woman's name attached to Reuben P. Jones's deeds. DOCUMENT-LEVEL CONFLICT FENCED: this deed confirms the index's Section 19, but the January 1833 O259 trust deed between the same grantor and grantee says Section 36 — same men, same township, one year apart. Same tract conveyed twice, two parcels, or a clerk's slip: unresolved. Tier 2: 'P.' unexpanded, identity as Reuben Parker Jones unresolved — lead only.",
      citation: "Madison County Deed Book O, pp. 648–649 (full-text transcript via signed-in FamilySearch, September 21, 2026; X-mark verified from image)."
    },
  {
      id: "hardiman-f-jones-huntsville-lots-al",
      name: "Hardiman F. Jones's Huntsville Lots 3 & 4 chain (Madison County, AL)",
      tier: 2,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: downtown Huntsville; refine against the town-plan lot numbers (Jefferson & Holmes Streets) at map-build time
      summary: "A one-year, one-man chain through 'Hardiman F. Jones' AS WRITTEN — the deed index abstracted all five P/Q-book instruments as 'Hardiman/Hardeman/Hardesman P. Jones'; F.-vs.-P. identity fenced (DB4 row 240): (1) Byrd Brandon & wife → Jones, warranty deed, Mar 22, 1836, $3,000, Huntsville Lot 3 (Jefferson & Holmes Sts), occupied by 'Dr F H Newman & Henry Beal' (Book P pp. 704–705); (2) Jones → Benjamin T. Moore, trustee, deed of trust, Nov 2, 1836, securing $1,345.16 to Daniel B. Turner + $891.75 to Bartley M. Lowe (endorsement Wilson Webb → George H. Jones → Bartley M. Lowe), Lot 3 + part of Lot 4 (Book Q pp. 158–159) — margin note: debts settled, property released Aug 4, 1857 (B. Turner / B.M. Lowe); (3) Brandon & wife → Jones, CORRECTIVE deed, Dec 1, 1836, $1, part of Lot 4 — states the March deed 'through mistake' misdescribed the prior title; true prior conveyance Susannah Young + James Matthews ('free person of color'), May 28, 1832 (Book Q pp. 166–167); (4) Jones → 'Frances H. Newman' (as written, not the index's 'Francis'), Dec 17, 1836, $3,000, part of Lot 4, Jones keeping one year's possession of Henry Beal's portion (Book Q p. 167). Tier 2: middle-initial discrepancy fenced — lead only.",
      citation: "Madison County Deed Books P pp. 704–705, Q pp. 158–159, 166–167, p. 167 (instruments read 2026-09-21)."
    },
  {
      id: "hardiman-f-jones-sec22-28-t4r2w-al",
      name: "Hardiman F. Jones to Samuel Jordan, Sec 22/28 T4 R2W (Madison County, AL)",
      tier: 2,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: Huntsville (county seat); refine against the SW¼ Sec 22 / NE¼ & NW¼ Sec 28, T4 R2W legal description at map-build time
      summary: "Hardiman F. Jones (as written, not the index's 'Hardesman P. Jones'; F.-vs.-P. fenced) → Samuel Jordan of Limestone County, Jan 17, 1837, $6,056 (consideration written 'nine thousand six thousand fifty six dollars' [sic]) for 482.80 acres: SW¼ Sec 22 + NE¼ & NW¼ Sec 28, Township 4, Range 2 West (Book Q pp. 192–193). The county-land arm of the same man's dealings, alongside the Huntsville town-lot chain. Tier 2: middle-initial discrepancy fenced — lead only.",
      citation: "Madison County Deed Book Q, pp. 192–193 (instrument read 2026-09-21)."
    },
  {
      id: "reuben-p-jones-sec18-w2nw-al",
      name: "Reuben P. Jones's Section 18 W½ NW¼: buy, borrow (Madison County, AL)",
      tier: 2,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: Huntsville (county seat); DO NOT refine — refine only with the full Section 18/19 block reconciled
      summary: "Reuben P. Jones's Section 18 story, acts one and two: (1) Jonathan Tipton & wife Mary → Reuben P. Jones, Dec 12, 1836, $230, W½ of NW¼ of Section 18, T3 R3E (Book Q pp. 236–239; recorded Mar 13, 1837); (2) Reuben P. Jones & wife Roanna/Ruanna → John D. Davanay, trustee, deed of trust, June 8, 1839, securing $377.49 to Samuel Hughes (due Jan 1, 1840) — the same W½ NW¼ + 45 hogs, 5 cattle, 1 horse mule, all on the paper (Book R p. 244). Wife's name variants fenced as one household with O648's Ruanner/Ruamner. No enslaved people in any of Reuben's instruments. Tier 2: 'P.' unexpanded, identity as Reuben Parker Jones unresolved — lead only.",
      citation: "Madison County Deed Books Q pp. 236–239, R p. 244 (instruments read 2026-09-21)."
    },
  {
      id: "reuben-p-jones-sec19-ne-nw-al",
      name: "Reuben P. Jones to Shadrach M. Tipton, Sec 19 (Madison County, AL)",
      tier: 2,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: Huntsville (county seat); DO NOT refine — the O259 Sec 36 vs. Sec 19 conflict is still fenced
      summary: "Reuben P. Jones & wife Lewanner → 'Shadrach M. Tipton' (as written, not the index's 'Shadrack H. Tipton'), Mar 1, 1839, $80, 39.17 acres: NE fourth of NW fourth of Section 19, T3 R3E (Book R p. 284) — ADJACENT to the O648 parcel (north end of W½ NW¼ Sec 19) in the same quarter-section. Reuben's Section 19 presence is now confirmed by two independent instruments; the section conflict stands as TWO Section 19 instruments (O648, R284) vs. one Section 36 instrument (O259) — fenced, unresolved. A Tipton sold to Reuben in 1836 and a Tipton buys from Reuben in 1839; no stated relationship. Tier 2: identity unresolved — lead only.",
      citation: "Madison County Deed Book R, p. 284 (instrument read 2026-09-21)."
    },
  {
      id: "reuben-p-jones-sec18-w2ne-al",
      name: "Reuben P. Jones to George I. Weaver, Sec 18 W½ NE¼ (Madison County, AL)",
      tier: 2,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: Huntsville (county seat); DO NOT refine — refine only with the full Section 18/19 block reconciled
      summary: "Reuben P. Jones & wife Ruannah → 'George I. Weaver' (as written 'George I Weaver'/'George I Wever'; the index reads 'George P. Weaver'), instrument Jan 10, 1840, $550 ('five hundred and fity dollars' [sic]), W½ of NE¼ of Section 18, T3 R3E (Book R pp. 393–394, complete both pages). No livestock, no trust — an outright sale. The Section 18 three-act story closes: bought from the Tiptons 1836, encumbered to Samuel Hughes 1839, sold to Weaver 1840. The 15-deed reading list is complete with this deed. Tier 2: 'P.' unexpanded, identity as Reuben Parker Jones unresolved — lead only.",
      citation: "Madison County Deed Book R, pp. 393–394 (instrument read 2026-09-21, both pages)."
    },
  {
      id: "arthur-walker-jones-beaverdam-1827-al",
      name: "Arthur Walker Jones's 1827 Beaver Dam Fork purchase (Madison County, AL)",
      tier: 1,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: Huntsville (county seat); refine against the Beaver Dam Fork of Flint River / NW¼ Sec 28 + SW¼ Sec 21, T2 R1E legal description at map-build time
      summary: "Luke Johnson & wife of Bibb County → 'Arthur Walker Jones' (the instrument spells out 'Walker' — the only deed in the set to expand Arthur's 'W.'), Dec 7, 1827, $504, 63 acres on the south side of the Beaver Dam Fork of Flint River: part of the NW¼ of Section 28 + part of the SW¼ of Section 21, T2 R1E (Book L p. 348; recorded Mar 21, 1828). The grantor's wife Anne is 'Anne Hellums heir at Law of William Hellums' — her heirship, not Arthur's kin. CROSS-REFERENCE FENCED: Arthur's 1833 Phillips purchase (Book O p. 377) conveyed the Hellums/Helms heirs' apportioned lots in the SAME Sections 28 and 21 — two purchases, six years apart, from two heirs of the same estate; adjacency or accident, unresolved. UPDATE 2026-09-21: Arthur W. Jones's will (PR 6, p. 362; dated 19 Sep 1833, probated 21 Oct 1833; estate held together for the children; executors Friley Jones & Oliver D. Sledge; witnesses incl. James S. Jones) + the Nov Term 1855 follow-up suit (Friley Jones, executor, v. Evaline B. Coyle, widow; PR 19, p. 501; legatees Mary W. Clopton, Agnes T. Kinkle, William Arthur Jones dec'd, James Monroe Jones) — PROVISIONAL identification with the deed-book grantee (Book N p. 395, 1831; Book O p. 377, 1833): name + timing align, manuscript unverified. Tier 1 by the documented 1827 kinship (Joel W. Jones's brother), not by name match.",
      citation: "Madison County Deed Book L, p. 348 (instrument read 2026-09-21)."
    },

    // ---------- 2026-09-23 paste: migration/wealth anchors (2026-09-21 batch, 18 sites, staged, user-approved) ----------
  {
      id: "swinbrook-oxfordshire-eng",
      name: "Swinbrook, Oxfordshire — Rev. Rowland Jones's birthplace (context)",
      tier: 3,
      county: "Oxfordshire", // England — outside Alabama; see header note on the county filter
      lat: 51.8060,
      lng: -1.5813,
      precise: false, // approximate: village location; refine at map-build time
      summary: "Swinbrook near Burford, Oxfordshire: birthplace (1644) of Rev. Rowland Jones, Merton College, Oxford (matriculated Nov 11, 1663), Bruton Parish's first rector 1674–1688 (d. Apr 23, 1688). Sources: Wilson Miles Cary, 'Descendants of Rev. Rowland Jones,' W&M Quarterly Vol. V (1896–97); Bruton tombstone transcription. CONTEXT ONLY — relevance to Llewelyn Jones is conditional on bridging the 45-year ancestry gap; never present as the family's origin story.",
      citation: "Cary, W&M Quarterly Vol. V; Bruton tombstone transcription; DB1 row 642; migration synthesis 2026-09-21."
    },
  {
      id: "little-kimble-buckinghamshire-eng",
      name: "Little Kimble, Buckinghamshire — Rev. Rowland Jones's pastoral service (context)",
      tier: 3,
      county: "Buckinghamshire", // England — outside Alabama; see header note on the county filter
      lat: 51.7519,
      lng: -0.8087,
      precise: false, // approximate: village location; refine at map-build time
      summary: "Little Kimble, Buckinghamshire: where Rev. Rowland Jones served pastorally before emigrating to Virginia. Same Cary source and same conditional-relevance caveat as Swinbrook. CONTEXT ONLY.",
      citation: "Cary, W&M Quarterly Vol. V; DB1 row 642; migration synthesis 2026-09-21."
    },
  {
      id: "timsons-neck-va",
      name: "Timson's Neck (later Travis's Neck), York River — the 1771 deed lead",
      tier: 2,
      county: "York", // Virginia — outside Alabama; see header note on the county filter
      lat: 37.3050,
      lng: -76.5450,
      precise: false, // approximate: York River shoreline near Travis's Neck; refine at map-build time
      summary: "Orlando Jones's residence adjoined the Timson family here (Cary — context). A 1771 deed involving Samuel Timson and Jones-family parties including 'John Jones and Frances Barber his wife' — the parties the project claims as Llewelyn's parents — is still UNREAD at the manuscript level; the full read is owed. Tier 2: lead only; the ancestry gap renders on the family tree, not the map.",
      citation: "Cary genealogy; UAH Roberts Collection r04b01-12 (index-level); DB1 row 526; migration synthesis 2026-09-21."
    },
  {
      id: "albemarle-county-va",
      name: "Albemarle County, VA — waystation in the claimed chain (lead)",
      tier: 2,
      county: "Albemarle", // Virginia — outside Alabama; see header note on the county filter
      lat: 38.0377,
      lng: -78.4774,
      precise: false, // approximate: Charlottesville / county center; refine at map-build time
      summary: "Cary wrote that later Albemarle 'Lain and William Jones' were 'surely' sons of one of Orlando, Rowland, or William — without establishing which. Separately: Eliza Ann Jones (reported daughter of William R. Jones) married Ira Maupin in Albemarle County, Nov 17, 1832 (verified via the Lynchburg Virginian). No document ties the county to Llewelyn. Tier 2: a waystation in the claimed chain, not a proven stop.",
      citation: "Cary genealogy; Lynchburg Virginian (1832); migration synthesis 2026-09-21."
    },
  {
      id: "campbell-county-va",
      name: "Campbell County, VA — the 1805 legal note lead",
      tier: 2,
      county: "Campbell", // Virginia — outside Alabama; see header note on the county filter
      lat: 37.2213,
      lng: -79.0575,
      precise: false, // approximate: county center; refine at map-build time
      summary: "A September 23, 1805 legal note (UAH Roberts Collection r04b01-12-000-0092, index-level) names twelve enslaved people — Anthony, Phileday, Ben, Polly, Big Will and Sarah his wife, Delphia, Edeline, Judith, Macon, Mary Ann, Meriah — in a Jones/Anderson/Perkins/Donnell orbit (Nelson Anderson; Lewellen and Alexander Jones; Benjamin and Alexander Perkins; J. Steptoe). Image-level read owed; render with a 'lead — manuscript unread' marker.",
      citation: "UAH Roberts Collection r04b01-12-000-0092 (index-level); DB1 row 736; paper [193]; migration synthesis 2026-09-21."
    },
  {
      id: "granville-county-nc",
      name: "Granville County, NC — Llewelyn's North Carolina years (abstracts)",
      tier: 1,
      county: "Granville", // North Carolina — outside Alabama; see header note on the county filter
      lat: 36.3083,
      lng: -78.6569,
      precise: false, // approximate: Oxford (county seat); refine at map-build time
      summary: "Deed abstracts place Llewelyn in the NC orbit 1797–1818: 1797, Roger Jones sold him Winney; 1818, transactions with Robert Jones — Mary (~35) and her children Evelina and Robert, another Peggy. Original deed books Q/R/T/W/X/Y/Z are UNREAD — third-party abstracts only. 1819: Robert Jones & David McClure, 'merchants & copartners in trade' (Granville County) — relationship to Llewelyn unresolved.",
      citation: "Granville County deed abstracts; DB1 row 643; migration synthesis 2026-09-21."
    },
  {
      id: "franklin-county-nc",
      name: "Franklin County, NC — Llewelyn sells Peter (1802), Peggy (1817)",
      tier: 1,
      county: "Franklin", // North Carolina — outside Alabama; see header note on the county filter
      lat: 35.9816,
      lng: -78.2795,
      precise: false, // approximate: Louisburg (county seat); refine at map-build time
      summary: "1802: 'Luellen [Lewellen] of Franklin County' sold Peter; 1817: Llewelyn sold Peggy. Planter-scale buying and selling of named people in the Carolina deeds — part of the documented domestic engine of the family's wealth. Same abstract-only caveat as Granville County.",
      citation: "Franklin County deed abstracts; DB1 row 643; migration synthesis 2026-09-21."
    },
  {
      id: "craven-county-nc",
      name: "Craven County, NC (New Bern) — James T. Jones estate branch (fenced)",
      tier: 2,
      county: "Craven", // North Carolina — outside Alabama; see header note on the county filter
      lat: 35.1085,
      lng: -77.0441,
      precise: false, // approximate: New Bern; refine at map-build time
      summary: "FENCED from the thesis line — never merged. James T. Jones estate folders (1843–1849, FamilySearch collections 1911121/1911126, images 785–1507) name New Bern, the Bay River/Chapel Creek tracts, and Rose Hill (~300 acres, $1,200). No kinship proved to the Avalon Joneses; render on a muted, clearly labeled track.",
      citation: "Estate folders 2026-09-21 read; paper [187], [194]; DB1 rows 634–637, 648–680."
    },
  {
      id: "fayette-county-tn",
      name: "Fayette County, TN (Somerville) — Sarah J. Jones's 1844 migration (fenced)",
      tier: 2,
      county: "Fayette", // Tennessee — outside Alabama; see header note on the county filter
      lat: 35.2373,
      lng: -89.3601,
      precise: false, // approximate: Somerville; refine at map-build time
      summary: "James T. Jones died intestate here Jan 1843; widow Sarah J. Jones and five children migrated Craven County, NC → Fayette by early 1844 (estate settlement certified at Somerville Oct 24, 1843). FENCED — no thesis-line merge.",
      citation: "James T. Jones estate file; paper [187]; DB1 rows 634–637."
    },
  {
      id: "haywood-county-tn",
      name: "Haywood County, TN — the 640-acre dower tract (lead)",
      tier: 2,
      county: "Haywood", // Tennessee — outside Alabama; see header note on the county filter
      lat: 35.5836,
      lng: -89.2928,
      precise: false, // approximate: county center; refine at map-build time
      summary: "640-acre tract in the 10th surveyor's district, Haywood & Fayette Cos. (less 120 acres locator's interest and 8 acres off the east end) — subject of Sarah J. Jones's dower petition, 11th Judicial Circuit, Fayette County, Jan Term 1844. Dower-petition manuscript re-read owed. Fenced with the James T. Jones line.",
      citation: "James T. Jones estate file; DB1 row 634."
    },
  {
      id: "goose-creek-mills-nc",
      name: "Goose Creek Mills (Craven County, NC area) — place of labor (context)",
      tier: 3,
      county: "Craven", // North Carolina — outside Alabama; see header note on the county filter
      lat: 35.1100,
      lng: -77.0200,
      precise: false, // approximate: Craven County general — coarse; refine at map-build time
      summary: "Named in the Jan 1, 1846 hire note for Solomon & Wanton ($455): the no-water-work covenant excepted 'towing lumber to/from Goose Creek Mills.' A place where enslaved people labored, not a family site. Tier 3: context.",
      citation: "James T. Jones estate hire note 1846; DB1 row 636."
    },
  {
      id: "guilford-county-nc",
      name: "Guilford County, NC — Donnell family origin (family-history lead)",
      tier: 2,
      county: "Guilford", // North Carolina — outside Alabama; see header note on the county filter
      lat: 36.0830,
      lng: -79.7864,
      precise: false, // approximate: Greensboro; refine at map-build time
      summary: "Donnell family origin per the 1928 Donnell genealogy (The Donnells and their Macdonald Ancestors, via Internet Archive — a FAMILY HISTORY, treat as a lead, not a record): Thomas and Jane Latham Donnell; William Donnell (b. 1749) moved Guilford → Tennessee in 1791. The Macdonald-of-Glencoe descent is the family's own claim. The Donnell arc joins the Jones line at the 1844 John N. S. Jones–Maria L. Donnell marriage; Maria's exact placement in the Donnell family is unresolved (TSLA Donnell Papers finding aid 84-071 — the best target).",
      citation: "Donnell genealogy (1928); TSLA finding aid 84-071; DB1 row 645; migration synthesis 2026-09-21."
    },
  {
      id: "donnell-tennessee-corridor",
      name: "Middle Tennessee (general) — Donnell migration corridor",
      tier: 2,
      county: "Williamson", // Tennessee — placeholder county; exact counties unresolved; see header note on the county filter
      lat: 35.9298,
      lng: -86.8683,
      precise: false, // approximate: Middle-Tennessee placeholder (Franklin, TN); exact counties UNRESOLVED — render as a general-area marker only, never a precise point
      summary: "William Donnell's family moved Guilford County, NC → Tennessee in 1791 (d. 1798); George Donnell (b. 1759) moved to Tennessee in 1804; Rev. Robert Donnell (1784–1855), son of William, was a founder of the Cumberland Presbyterian Church (biography by David Lowry, 1867). Exact Tennessee counties unresolved — do not draw a precise point.",
      citation: "Donnell genealogy (1928); DB1 row 645; migration synthesis 2026-09-21."
    },
  {
      id: "new-market-al",
      name: "New Market — Elizabeth Jones's home; the Berry case",
      tier: 1,
      county: "Madison",
      lat: 34.9057,
      lng: -86.4224,
      precise: false, // approximate: New Market; refine at map-build time
      summary: "Elizabeth Jones's residence after her 1843 removal from Jackson County, AL — Elizabeth Jones v. Samuel G. Berry, Chancery No. 373 (1853), fully read. Named enslaved people: Nancy, Mary Ann, Sim, Pleasant, Henderson, John, Jesse, Sam, William called Doctor, Little Nancy, Eliza, Cesar — and Patsey (named once in 1824, never again — still sought). FAN: George Hunter, Levil Bobo, J. H. Roberts; merchants Scurlock and Whitney (New Market store books); doctors Roberts & Rice; Dr. Lindsey.",
      citation: "Berry case file (fully read 2026-09-21); paper [211]–[217]; DB1 rows 703, 748–757."
    },
  {
      id: "jackson-county-al",
      name: "Jackson County, AL — Elizabeth Jones's 1843 landing point",
      tier: 1,
      county: "Jackson",
      lat: 34.7833,
      lng: -85.9903,
      precise: false, // approximate: county center; refine at map-build time
      summary: "Elizabeth Jones removed from Franklin County, TN to Jackson County, AL (Jan/Feb 1843); her 1843 covenant recorded Jackson County Bk A pp. 40–41 (verified). A 57-acre tract's siting (Tennessee vs. Jackson County) is unresolved — the survey reads 71 acres.",
      citation: "Berry case extended read; paper [214], [216]; DB1 rows 748–757."
    },
  {
      id: "franklin-county-tn",
      name: "Franklin County, TN — Elizabeth Jones's origins (FAN geography)",
      tier: 2,
      county: "Franklin", // Tennessee — outside Alabama; see header note on the county filter
      lat: 35.2024,
      lng: -86.1110,
      precise: false, // approximate: Winchester (county seat); refine at map-build time
      summary: "Elizabeth Jones's origins; Levil Bobo's deputy work; the Berry family (Sanford Berry's 1824 gift of Nancy). Tier 2: context (FAN geography) from the extended Berry read — not a thesis-family site.",
      citation: "Berry case extended read; paper [216]–[218]; DB1 rows 748–757."
    },
  {
      id: "memphis-tn",
      name: "Memphis, TN — Woodson Jones's transfer point",
      tier: 1,
      county: "Shelby", // Tennessee — outside Alabama; see header note on the county filter
      lat: 35.1495,
      lng: -90.0490,
      precise: false, // approximate: city center; refine at map-build time
      summary: "Woodson Jones, 22, in his Dec 24, 1867 Freedman's Bank application (NARA M816, via Freedmensbureau.com transcription): born Triana, Ala.; 'Just from Memphis, Tenn., transferred'; occupation 'Cook, Washington House, Memphis.' Father David (deceased, Trianna); mother Mahala (living, Huntsville). Original M816 image unread. Relationship to the 1865 Madison County Bureau census cluster (Woodson, Mahela/Mahala, Emma, Adaline/Adeline — consecutive entries, NARA M1900 roll 19) unresolved; Tuscaloosa Adeline Jones fenced from the Madison County Adaline/Adeline.",
      citation: "Freedman's Bank register (transcription); DB1 rows 731–735; paper [195]."
    },
  {
      id: "triana-al-woodson-berry",
      name: "Triana — Woodson Jones's birthplace; Berry Jones cluster",
      tier: 1,
      county: "Madison",
      lat: 34.58345,
      lng: -86.73542,
      precise: false, // approximate: Triana city match (same geocoder point as triana-al-lowe — one shared point, two labels; ids differ); refine at map-build time
      summary: "Woodson Jones's birthplace ('Trianna' per the bank register); Berry Jones, 1870 Freedman's Bank depositor, born 'Near Triana'; his sister Sarah 'in Triana' (plus sister Francis in Nashville). A locale cluster — no kinship evidence between the families. Note: shares map coordinates with the batch-6 'triana-al-lowe' educator site (different id, different story).",
      citation: "Freedman's Bank registers (Woodson + Berry); DB1 rows 731–735, 744; paper [195]."
    },

    // ---------- 2026-09-23: chancery anchors (Tier 1), British-register anchors (Tier 3 CONTEXT, fenced), Anderson marriage (Tier 1) ----------
    {
      id: "moulton-al-dearing-lightfoot",
      name: "Dearing v. Lightfoot chancery anchor — Moulton, Lawrence County, AL",
      tier: 1,
      county: "Lawrence",
      lat: 34.4815,
      lng: -87.2911,
      precise: false, // approximate: Moulton (county seat); tract-level placement owed
      summary: "Detinue suit over six enslaved people (Hercules alias Harceles, Solomon, Aggy, Edward, Tilla, Fenton) held under an 1840 mortgage; testimony traces Georgia → western Tennessee → north Alabama.",
      citation: "Dearing v. Lightfoot (1844–48), chancery record; Beyond Avalon chancery pass 2026-09-23."
    },
    {
      id: "mill-street-huntsville-pallard",
      name: "Caledonia M. Pallard estate lot — Mill Street, Huntsville",
      tier: 1,
      county: "Madison",
      lat: 34.7331,
      lng: -86.5839,
      precise: false, // approximate: street-level placement; deed map owed
      summary: "Caledonia M. Pallard estate: lot at the north-east margin of Mill Street, full metes and bounds, $1,200 agreed sale with John P. Spence.",
      citation: "Pallard estate / Spence sale, chancery record; Beyond Avalon chancery pass 2026-09-23."
    },
    {
      id: "randolph-street-huntsville-bradford",
      name: "Joseph B. Bradford homestead — Randolph Street, Huntsville",
      tier: 1,
      county: "Madison",
      lat: 34.7271,
      lng: -86.5851,
      precise: false, // approximate: street-level placement; deed map owed
      summary: "Joseph B. Bradford's homestead conveyed to mother Martha H. Bradford, Mar 11, 1891 ($5,040 recited against $4,500 bank debt). Do not merge with the Pallard lot.",
      citation: "Bradford conveyance, Mar 11, 1891; Beyond Avalon chancery pass 2026-09-23."
    },
    {
      id: "jackson-county-al-berry-letter",
      name: "Elizabeth Berry's 1842 letter — Jackson County, AL",
      tier: 1,
      county: "Jackson",
      lat: 34.65,
      lng: -86.04,
      precise: false, // approximate: county level; exact writing location not identified
      summary: "Elizabeth Berry wrote from Jackson County, AL, asking S. G. Berry to come or send money to pay a judgment of about $30, and asking Abe Hunter to send tobacco 'by Jim when he comes in' — signing 'Elizabeth Berry or Jones,' May 1, 1842. Filed as an exhibit in the Berry chancery case.",
      citation: "Elizabeth Berry letter, May 1, 1842 (manuscript visually read 2026-09-23; FamilySearch DGS 005178550, img. 185 of 1234)."
    },
    {
      id: "jefferson-county-ga-jackson",
      name: "James Jackson deposition anchor — Jefferson County, GA",
      tier: 1,
      county: "Jefferson", // Georgia — outside Alabama; county filter shows state context in the name
      lat: 33.0545,
      lng: -82.4132,
      precise: false, // approximate: county level
      summary: "James Jackson's 1816/17 purchase of Edward (enslaved), per his deposition in Dearing v. Lightfoot.",
      citation: "James Jackson deposition, Dearing v. Lightfoot; Beyond Avalon chancery pass 2026-09-23."
    },
    {
      id: "morgan-county-al-love",
      name: "Mary J. Love–Thomas H. Love marriage — Morgan County, AL",
      tier: 1,
      county: "Morgan",
      lat: 34.4647,
      lng: -86.8613,
      precise: false, // approximate: county level; NOT one of the lost original-map Morgan County entries
      summary: "Mary J. Love and Thomas H. Love married Apr 28, 1866.",
      citation: "Love marriage record, Apr 28, 1866; Beyond Avalon chancery pass 2026-09-23."
    },
    {
      id: "bristol-england-james-jones",
      name: "James Jones of Bristol — slaving merchant (context, fenced)",
      tier: 3,
      county: "Bristol", // England
      lat: 51.4545,
      lng: -2.5879,
      precise: false, // approximate: city level
      summary: "CONTEXT ONLY — fenced from the thesis line. James Jones (1745–1795), third-ranked Bristol slaving merchant per the Register: 62 ships, ~18,000 people, 1783–95, all Africa→Caribbean. NO kinship evidence links him to the Rowland/Orlando Jones line.",
      citation: "British slave-trade register research; Beyond Avalon 2026-09-22/23."
    },
    {
      id: "london-england-register",
      name: "London — register Jones entries (context, fenced)",
      tier: 3,
      county: "London", // England
      lat: 51.5074,
      lng: -0.1278,
      precise: false, // approximate: city level
      summary: "CONTEXT ONLY — fenced from the thesis line. Sir John Jones (£900 RAC stock, 1687); John Jones (co-owner, 1725 Molly Gally voyage); Abraham Wilde (1672 RAC subscriber); Capt. Abraham Wildy (1656 Sarah). Context only.",
      citation: "British slave-trade register research; Beyond Avalon 2026-09-22/23."
    },
    {
      id: "limehouse-stepney",
      name: "Limehouse / Stepney — Abraham Wilde's parish (context)",
      tier: 3,
      county: "London", // England
      lat: 51.5119,
      lng: -0.0224,
      precise: false, // approximate: parish level
      summary: "CONTEXT ONLY. Abraham Wilde's parish; married Mary Parsons (née Harwood) at St Dunstan's Stepney, 1694.",
      citation: "British slave-trade register research; Beyond Avalon 2026-09-22/23."
    },
    {
      id: "shrewsbury-england",
      name: "Shrewsbury — Sir John Jones's birthplace (context)",
      tier: 3,
      county: "Shropshire", // England
      lat: 52.7079,
      lng: -2.7559,
      precise: false, // approximate: town level
      summary: "CONTEXT ONLY. Sir John Jones's birthplace (1610). Context only.",
      citation: "British slave-trade register research; Beyond Avalon 2026-09-22/23."
    },
    {
      id: "jamaica-island-voyages",
      name: "Jamaica — landing island for Bristol voyages (context)",
      tier: 3,
      county: "Jamaica",
      lat: 18.1096,
      lng: -77.2975,
      precise: false, // approximate: island level
      summary: "CONTEXT ONLY. Landing island for James Jones's 62 Bristol voyages. Slaving-voyage geography, not family geography.",
      citation: "British slave-trade register research; Beyond Avalon 2026-09-22/23."
    },
    {
      id: "barbados-island-voyages",
      name: "Barbados — landing island (context)",
      tier: 3,
      county: "Barbados",
      lat: 13.1939,
      lng: -59.5432,
      precise: false, // approximate: island level
      summary: "CONTEXT ONLY. Landing island: Wildy's 1656 Sarah, Ashwell's 1646 Mary Bonadventure.",
      citation: "British slave-trade register research; Beyond Avalon 2026-09-22/23."
    },
    {
      id: "york-river-va-molly-gally",
      name: "York River, VA — 1725 Molly Gally voyage (context)",
      tier: 3,
      county: "York", // Virginia
      lat: 37.24,
      lng: -76.55,
      precise: false, // approximate: river level
      summary: "CONTEXT ONLY. London → Windward Coast → York River slaving voyage co-owned by John Jones, 1725 — the most Virginia-rooted Jones in the register.",
      citation: "British slave-trade register research; Beyond Avalon 2026-09-22/23."
    },
    {
      id: "savannah-ga-william-jones",
      name: "Savannah, GA — William Jones (Liverpool) voyages (context)",
      tier: 3,
      county: "Chatham", // Georgia
      lat: 32.0809,
      lng: -81.0912,
      precise: false, // approximate: city level
      summary: "CONTEXT ONLY — fenced from the thesis line. William Jones (Liverpool) landed captives at Savannah among other ports, 6 crossings 1772–1804. No link to this study's lines.",
      citation: "British slave-trade register research; Beyond Avalon 2026-09-22/23."
    },
    {
      id: "annapolis-md-captain-jones",
      name: "Annapolis, MD — Captain John Jones voyages (context, unresolved)",
      tier: 3,
      county: "Anne Arundel", // Maryland
      lat: 38.9784,
      lng: -76.4922,
      precise: false, // approximate: city level
      summary: "CONTEXT ONLY. A John Jones captained three slaving voyages to Maryland/Annapolis, 1727–30; possibly the Molly Gally co-owner — Unresolved.",
      citation: "British slave-trade register research; Beyond Avalon 2026-09-22/23."
    },
    {
      id: "louisa-county-va-marriage",
      name: "Llewellin Jones–Mary Anderson marriage — Louisa County, VA",
      tier: 1,
      county: "Louisa", // Virginia
      lat: 38.0,
      lng: -78.02,
      precise: false, // APPROXIMATE: county-level placement only; courthouse-level refinement owed
      summary: "Oct 22, 1792: 'Llewellin Jones' to 'Mary Anderson,' confirmed from the county marriage register (DGS 007578998, image 61 of 527). Handwriting not visually verified — see note. Coordinates are approximate (county level).",
      citation: "Register of marriages, Louisa County, Virginia, 1766-1861, DGS 007578998, image 61 of 527; Beyond Avalon 2026-09-23."
    }

  ]
};
