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
  2026-09-27 UPDATE: 4 new sites added (harvest-road-moore-cemetery,
  blow-cunningham-sec29-patent, lewis-anderson-sec18-patent,
  lewellen-jones-t4s-patents; ids collision-checked against all existing ids).
  restoredCount is now 85, originalCount 98.
  2026-09-28 UPDATE: 22 new sites added from the staged map-data batches (parts 4–7, 9–11, 13–14 of the
  2026-09-20 additions file, plus the Elizabeth Berry 1842 Mobile letter anchor from the 2026-09-23 website plan;
  ids collision-checked against all existing ids). Parts 12, 15, and 16 of the staged batch were NOT pasted
  (stale/deferred/duplicate), nor were 11 staged entries that carry no coordinates (context-only notes stay in the
  batch file until tract-level placement resolves). restoredCount is now 107, originalCount 120. Also: the arthur-jones-sec17-al
  entry was expanded with the Jan 15, 1832 Evalina B. Jones deed (the site's
  own Findings log, Sep 27, covers the same instrument) instead of a duplicate
  point for the same parcel.
  2026-10-03 UPDATE: 18 new sites added from the staged map batches (17 PART-11 entries from the
  2026-09-20 additions file — the 2026-09-22 Bedford-analysis fold-in anchors — plus the Tusculum,
  Davidson County, TN Haywood plantation anchor staged 2026-10-03; ids collision-checked against all
  existing ids). Coordinates: project-established county/city anchors where available; geocoded town
  and address placements otherwise (Amherst VA, Triana AL, ADAH Montgomery, Old Cahawba) — every new
  entry carries precise:false with the approximation basis stated. 5 staged rollup entries
  (reuben-s18-s19-block, arthur-jones-t2r1e, hardiman-t4r2w-483ac, huntsville-lots-3-4,
  buck-doe-creek-trust) were NOT pasted — superseded by finer-grained live entries for the same
  instruments. restoredCount is now 125, originalCount 138.
*/
window.PLANTATIONS_DATA = {
  restoredCount: 133,
  originalCount: 138,
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
      name: "Seclusion Place",
      tier: 1,
      county: "Lawrence",
      lat: 34.677,
      lng: -87.408,
      precise: false,
      summary: "J.W.S. Donnell's Lawrence County plantation near Town Creek — his Nov 14, 1863 letter to his wife was written from 'Seclusion (Lawrence Co.)'. The Fortune memorial (Find a Grave 135690439, quoting the Moulton Advertiser) places the Donnell Slave Cemetery 'a short distance from the site of the once fashionable Donnell plantation home' identified as Seclusion, near Young Cole's brick home by Town Creek; the faded 888 settlement account ('Val[ue] of Stock, Equipment of Seclusion + 1 years Rent') corroborates the name. The same plantation is the 2,000-acre 'Secession Place' of the Nov 12, 1867 trustee's-sale advertisement by B. Sanders: Axford & Wellden's quotation of the Athens Weekly Post (Nov 4, 1867) ad reads 'the plantation known as the Seclusion Place, containing 2000 acres more or less,' matching the scanned ad on acreage, trustee, sale date, and owner — 'Secession' is a misreading of the faded print. Merged into one entry per researcher approval, Oct 3, 2026. Placement approximate to the Town Creek vicinity; no deed-level location confirmed.",
      citation: "Donnell Papers, THS 296 (888 settlement account; Ancestry capture, researcher's May 2026 scan); Fortune Donnell memorial (Find a Grave 135690439); J.W.S. Donnell letter Nov 14, 1863, in 'Letters From Another Century,' Huntsville Historical Review 31:1 (2006); Athens Weekly Post, Nov 4, 1867, via Axford & Wellden, Limestone County After Appomattox 1865–1870 (Fall 1985); Athens newspaper, Nov 1867 (Ancestry capture, researcher's May 2026 scan); DB1 rows 2322, 2338, 2360, 2372; DB4 rows 1041, 1055."
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
      summary: "Arthur W. Jones (Joel W. Jones's brother, 1827 will) bought 112.5 acres in the NE¼ of Section 17, Township 2, Range 1 East, for $2,000 from Hugh Lawson White of Knox County, Tennessee (Deed Book N pp. 395–396, Aug 9, 1831; recorded Sept 7, 1831). Prior title ran back to Thomas Bailey (Book H p. 531). The deed never expands Arthur's 'W.' — Tier 1 by the documented 1827 kinship, not by name match. On Jan 15, 1832 Arthur and his wife Evalina B. Jones resold the tract to Beverly Keeble for $1,325 (Deed Book F, p. 501; registered June 5, 1832): Evalina signed under seal and was privately examined the day before, consistent with relinquishing her dower. The direct index lists her as 'Evaline B.' co-maker — overturning the project's earlier 'no Evalina Jones deed' read.",
      citation: "Madison County Deed Book N, pp. 395–396 (instrument read 2026-09-20); Deed Book F, p. 501 (instrument read 2026-09-27; FamilySearch deed-image follow-up)."
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
    },
    // ---------- 2026-09-27 additions: Turner Moore / GLO patent / deed follow-ups ----------
    {
      id: "harvest-road-moore-cemetery",
      name: "Harvest Road — old Moore Plantation slave cemetery",
      tier: 1,
      county: "Madison",
      lat: 34.858,
      lng: -86.7787,
      precise: false, // APPROXIMATE: section-level GPS from survey note; exact tract not yet proven
      summary: "Slave burial ground of the old Moore Plantation (Sec. 19, T2S, R2W); Black Moore and Hammons families buried here into the 20th century. Antebellum owner unproven — not merged with Benjamin T. Moore or with Gabriel Moore's house site (Sec. 6, T3, R1W, ~7 mi away).",
      citation: "Cemetery survey note (GPS N 34.858, W -86.7787); Beyond Avalon 2026-09-27."
    },
    {
      id: "blow-cunningham-sec29-patent",
      name: "Sec. 29, T3S R1W — Blow/Cunningham 1819 patent",
      tier: 1,
      county: "Madison",
      lat: 34.7533,
      lng: -86.6573,
      precise: false, // APPROXIMATE: center of the NW1/4 of Sec. 29 per the BLM PLSS grid (Huntsville Meridian); patent bounds are quarter-section, not point
      summary: "Peter Blow and John Cunningham patented the NW1/4 directly from the federal government, signed October 5, 1819 (Accession CV-0109-462) — the 'how acquired' gap closed: federal patent, not purchase from a patentee. Coordinates approximate: NW1/4 center on the BLM GLO survey grid.",
      citation: "BLM GLO records, Accession CV-0109-462 (Harrison Land Act of 1800); Beyond Avalon 2026-09-27."
    },
    {
      id: "lewis-anderson-sec18-patent",
      name: "Sec. 18, T3S R3E — Lewis Anderson 1831 patent",
      tier: 1,
      county: "Madison",
      lat: 34.7852,
      lng: -86.3541,
      precise: false, // APPROXIMATE: center of the E1/2NW of Sec. 18 per the BLM PLSS grid (Huntsville Meridian)
      summary: "Lewis Anderson patented 80.32 acres, June 1, 1831 (Document #3130, Accession STA-AL1210__.163). Relation to Mary Anderson's family unproven. Coordinates approximate: E1/2NW center on the BLM GLO survey grid.",
      citation: "BLM GLO records, Document #3130, Accession STA-AL1210__.163; Beyond Avalon 2026-09-27."
    },
    {
      id: "lewellen-jones-t4s-patents",
      name: "Township 4 South — Lewellen Jones's seven 1818 patents",
      tier: 2,
      county: "Madison",
      lat: 34.6832,
      lng: -86.5743,
      precise: false, // APPROXIMATE: midpoint of T4S R1W / T4S R1E township centroids on the BLM PLSS grid; patents span Secs 1 & 12 (T4S R1W) and Sec 6 (T4S R1E)
      summary: "LEAD. Seven patents, all issued November 20, 1818 — three with Leroy Pope, four with David Moore — all in Township 4 South (Secs 1 & 12 T4S R1W; Sec 6 T4S R1E), Huntsville Meridian. Zero patents to Irby Jones or any Llewellin/Llewellyn spelling. Coordinates approximate: township-level centroid.",
      citation: "BLM GLO records; Beyond Avalon 2026-09-27."
    },

    // ---------- 2026-09-28 paste: staged map batch PART-4 (2026-09-20/21/22, user-approved) ----------
 {
   id: "priscilla-parker-limestone-al",
   name: "William Cosby's 1832 will naming Priscilla Parker (Limestone County, AL)",
   tier: 2,
   county: "Limestone",
   lat: 34.8133,
   lng: -86.9685,
   precise: false, // approximate: Limestone County courthouse area; no tract named
   summary: "William Cosby of Limestone County, will dated May 19, 1832, probated Aug 9, 1834 (Madison Co. PR 6, p. 665): wife Frances's property in fee simple (codicil, p. 666); names 'Priscilla Parker' as another child of the testator. A Parker lead on the Limestone–Madison County edge from Valley Leaves v09n02 (Dec 1974); no link to Edward T. Parker established. Tier 2: lead only.",
   citation: "Valley Leaves, v09n02 (Dec 1974), 'Abstracts of Wills in Probate Record 6' (Madison Co. PR 6, p. 665); DB1 row 610."
 },
 {
   id: "enslaved-charles-william-gray-al",
   name: "'one negro man named Charles' — William Gray's will, Madison County, AL",
   tier: 3,
   county: "Madison",
   lat: 34.7304,
   lng: -86.5861,
   precise: false, // approximate: Huntsville (county seat); no tract named
   summary: "William Gray's will, dated Mar 16, 1834, probated May 21, 1834 (Madison Co. PR 6, p. 678): seven heirs (incl. wife Milly Gray's children) are to share 'one negro man named Charles,' to be 'equally divided' among them. Charles is named — he was a human being — and his fate is undocumented; abstracted from Valley Leaves v09n02 (Dec 1974). Note also: Thomas J. Johnston's will (PR 6, p. 464) directs executors to hire out his 'negroes' privately to men who would treat them 'with Humanity' (unnamed), and Elizabeth Frazar's will (PR 6, p. 692) names 'faithful servants James & Patsy' — legal status unstated, do not assume. Tier 3: context.",
   citation: "Valley Leaves, v09n02 (Dec 1974), 'Abstracts of Wills in Probate Record 6' (Madison Co. PR 6, pp. 464, 678, 692); DB1 row 611."
 },
 {
   id: "thompson-texas-letter-1847-tx",
   name: "Thompson–Bassett–Jones negotiation, Lake Austin / Matagorda, Texas (1847)",
   tier: 3,
   county: "Matagorda", // Texas — outside Alabama; see header note on the county filter
   lat: 28.9867,
   lng: -95.9693,
   precise: false, // approximate: Lake Austin (Travis County) dateline / Matagorda postmark; plantation not precisely located
   summary: "Elbert A. Thompson to Dr. J. Y. Bassett, Lake Austin, Jul 18, 1847 (postmarked Matagorda, Jul 19): 'Ellick Jones holds a note against the Estate for near $1500 which was due in 1836.' Thompson proposes western Texas land at $1/acre for the note, via Bassett and possibly B. McLaure [?] of New Orleans, the matter kept quiet. Ellick negotiates as a financial equal — keep separate from (a) the APJ-'Ellick' nickname claim and (b) the enslaved Ellick (James T. Jones estate); estate identity Unresolved. Thompson's family sugar/cotton plantation near the Gulf + prairie summer residence (eight miles from the plantation): a Madison County family in the Texas plantation economy (Thompson left Alabama ~1840). Context only — no precise coords. UNC SHC, John Young Bassett Papers, Z Box 78, Folder 3.",
   citation: "Elbert A. Thompson to J. Y. Bassett, Jul 18, 1847 (UNC SHC; local transcription: research_notes/elbert-thompson-1847/transcription.md); DB1 rows 613–614; paper [179]."
 },

    // ---------- 2026-09-28 paste: staged map batch PART-5 (2026-09-20/21/22, user-approved) ----------
 {
   id: "avalon-plantation-core-al",
   name: "Avalon plantation core — Alexander P. Jones (Madison County, AL)",
   tier: 1,
   county: "Madison",
   lat: 34.7223,
   lng: -86.6388,
   precise: false, // approximate: UAH campus area; refine against the reported 2,827-acre share at map-build time
   summary: "Alexander P. Jones's 2,827-acre share of Lewellen Jones's estate (present-day UAH campus + Redstone Arsenal, per annotated will transcription). 1860 slave schedule (NARA M653, roll 30, pp. 483–484), read entry by entry from the manuscript: 96 enslaved people. The published transcription's 'JONES, Alex. P., 106 slaves' is SUPERSEDED, as is the AHA marker's '106 enslaved persons' — do not quote either figure. The 96 belong to Avalon (Northwestern Division, WEST of Huntsville), never 'in Huntsville.' DB1 rows 616, 618, 691–700; paper [180], [196]; biblio Section AE.",
   citation: "1860 slave schedule transcription (M653 roll 30); AHA marker text; UAH news (14122); APJ investigation 2026-09-21."
 },
 {
   id: "apj-sec9-t4r1w-al",
   name: "APJ's 1833 Section 9 purchase (Madison County, AL)",
   tier: 2,
   county: "Madison",
   lat: 34.7304,
   lng: -86.5861,
   precise: false, // approximate: Huntsville (county seat); refine against E1/2 NE1/4 Sec 9 T4S R1W at map-build time
   summary: "James Ware to Alexander P. Jones, E1/2 NE1/4 Section 9, T4 R1W, Dec 31, 1833 (Deed Bk O:619); witnesses B. T. Moore and Wm. Barker. Prior owner Alexander M. McClung (Bk K:10, 1825) vs. abstract's 'Alexander W. McClung' — discrepancy, manuscript check owed. Tier 2: abstract only.",
   citation: "Madison County Deed Bk O:619 (abstract); DB1 row 620; paper [181]."
 },
 {
   id: "fountain-row-lots-41-42-al",
   name: "APJ's Fountain Row town lots 41–42 (Huntsville, AL)",
   tier: 2,
   county: "Madison",
   lat: 34.7304,
   lng: -86.5861,
   precise: false, // approximate: downtown Huntsville; refine against Fountain Row at map-build time
   summary: "APJ's Huntsville town lots 41 and 42, Fountain Row (per annotated Lewellen Jones will transcription) — likely the 'two Huntsville town lots' in his 1866 estate-sale petition (administrator: nephew Paul Lewellen Jones). Tier 2: project report, chancery case number unknown.",
   citation: "APJ investigation 2026-09-21; DB1 row 621; paper [181]."
 },
 {
   id: "druids-grove-limestone-al",
   name: "Druid's Grove — John N. S. Jones (Limestone County, AL)",
   tier: 3,
   county: "Limestone",
   lat: 34.8028,
   lng: -86.9653,
   precise: false, // approximate: Athens (county seat); refine at map-build time
   summary: "Home of John N. S. Jones (APJ's brother, 1793–1853). 'Uncle Isaac' — formerly enslaved coachman in J. N. S. Jones's household — ran a plantation after the war (1876 newspaper column). Tier 3: context.",
   citation: "APJ investigation 2026-09-21; DB1 row 623."
 },
 {
   id: "jones-donnell-cemetery-greenbrier-al",
   name: "Jones-Donnell family cemetery, Greenbrier (Limestone County, AL)",
   tier: 2,
   county: "Limestone",
   lat: 34.6333,
   lng: -86.8667,
   precise: false, // approximate: Greenbrier area; refine at map-build time
   summary: "Alexander Thomas Jones tombstone (b. Jan 29, 1834, d. Jun 3, 1857) — the ruled-out 1857 'Alexander P. Jones, deceased' of the Limestone County division (mis-transcribed). Tier 2: ruled-out identity marker.",
   citation: "APJ investigation 2026-09-21; DB1 row 624; paper [182]."
 },

    // ---------- 2026-09-28 paste: staged map batch PART-6 (2026-09-20/21/22, user-approved) ----------
 {
   id: "triana-al-lowe",
   name: "Triana — Prof. R. M. Lowe's school (Madison County, AL)",
   tier: 3,
   county: "Madison",
   lat: 34.58345,
   lng: -86.73542,
   precise: false, // approximate: Triana (city match); refine at map-build time
   summary: "Prof. R. M. Lowe (working lead: Reuben M. Lowe, spelled out in five Gazette notices) taught school at Triana; teachers' institute secretary/president and Masonic officer, 1881-1894. Tier 3: identity lead, not a merged identity.",
   citation: "Gazette register 2026-09-21 (L207-L314); DB1 row 626; paper [183]."
 },
 {
   id: "madison-al-lowe",
   name: "Madison (town) — Prof. R. M. Lowe's school (Madison County, AL)",
   tier: 3,
   county: "Madison",
   lat: 34.67686,
   lng: -86.7514,
   precise: false, // approximate: Madison Blvd geocoder match; refine at map-build time
   summary: "R. M. Lowe taught at Madison (town) in addition to Triana and Gurleys; same Gazette educator cluster. Tier 3: identity lead.",
   citation: "Gazette register 2026-09-21; DB1 row 626; paper [183]."
 },

    // ---------- 2026-09-28 paste: staged map batch PART-7 (2026-09-20/21/22, user-approved) ----------
 {
   id: "lowes-chapel-umc-huntsville",
   name: "Lowe's Chapel UMC — 460 Sanderson St NW, Huntsville (Madison County, AL)",
   tier: 2,
   county: "Madison",
   lat: 34.734764,
   lng: -86.655956,
   precise: false, // approximate: church's own listing; refine at map-build time
   summary: "Reuben M. Lowe and his wife Maria deeded land for $1 to Felix Weeden and Mandifer Jones, trustees of the Methodist Episcopal Church of the Lincoln charge, Madison County — deed recorded February 15, 1896. All-Black Central Alabama Conference of the ME Church; Felix Weeden the church's founder. Confirms the middle initial M, wife Maria, landownership, and the Black Methodist connection. Tier 2: verified at the secondary level (church history + Roberts Collection deed index 'Lowe, Reuben M. 7'); deed book/page still owed.",
   citation: "loweschapelumc.org/about-us; UAH Roberts Collection r04b08c01.pdf Image 7; DB1 row 639; paper [188]; biblio Section W."
 },

    // ---------- 2026-09-28 paste: staged map batch PART-9 (2026-09-20/21/22, user-approved) ----------
 {
   id: "buck-jones-plantation-lead-al",
   name: "'Buck Jones plantation,' ~3 miles from Huntsville (lead, direction unknown)",
   tier: 2,
   county: "Madison",
   lat: 34.7304,
   lng: -86.5861,
   precise: false, // APPROXIMATE: ~3 miles from Huntsville, direction unknown — Lead, do not present as exact. These coords are Huntsville (county seat) only; do NOT place a precise point until the direction is established.
   summary: "Two independent October 1867 Freedman's Bank references, same distance from Huntsville. William Henry Walker's record (rec. 34, Oct 2, 1867): the clerk wrote across the master/mistress fields, 'Lives in Huntsville - was borne about 3 miles from Huntsville on Buck Jones plantation' (Walker was 32, born Huntsville, a dining-room servant — was waiter, 37th Ind. Co. C — living with the widow Bradford near the Institute; wife Sallie Walker). The next day, Henry Hobbs's record (rec. 35, Oct 3, 1867) places his brother Clayburn Hobbs 'about 3 miles from town on Jones Plantation' — same distance, possibly the same plantation and possibly the same Jones ('Buck Jones'?). Lead, not proof: identify Buck Jones in the 1860 Madison County census/slave schedules. Tier 2: Jones-surname lead, identity unresolved.",
   citation: "Freedman's Bank, Huntsville, frame 4098141_00016, records 34–35 (Oct 2–3, 1867; transcriptions/images 2026-09-21)."
 },
 {
   id: "arthur-w-jones-will-1833-al",
   name: "Arthur W. Jones's 1833 will + 1855 probate follow-up (Madison County, AL)",
   tier: 2,
   county: "Madison",
   lat: 34.7304,
   lng: -86.5861,
   precise: false, // approximate: Madison County probate (Huntsville); no tract named in the will — probate record, not a land site
   summary: "Arthur W. Jones's will, dated 19 Sep 1833, probated 21 Oct 1833 (Madison Co. PR 6, p. 362; abstracted in Valley Leaves v09n02, Dec 1974). The estate is 'to be held together until oldest child becomes of age or marries, then to draw equal part'; the children are unnamed in the abstract except son William Arthur ('my gold watch when he is 21') and son James Monroe ('also mentioned'). Executors: 'my friends Friley Jones & Oliver D. Sledge.' Witnesses: John R. B. Eldridge, James S. Jones, Walter T. Keeble — a FAN cluster new to the research. Follow-up, Nov Term 1855 (PR 19, p. 501): Friley Jones, executor, v. Evaline B. Coyle, widow, & other legatees — Evalina B. Coyle, widow; Mary W. Clopton; Agnes T. Kinkle; William Arthur Jones, dec'd (adm. James Monroe Jones); James Monroe Jones — 'all of whom are of full age.' Marriage notes as printed: Arthur m. 'Evelina B. Jones' 22 Oct 1820 (transcribe as printed — not 'Sullivan'); she m. Benjamin Coyle 18 May 1837. FENCED: an Arthur W. Jones appears as grantee in the 1830s Madison deed-index pass (N395/1831, O377/1833) — possible same man as the testator, UNRESOLVED, do not merge. Tier 2: identity fenced — lead only.",
   citation: "Valley Leaves, v09n02 (Dec 1974), printed p. 79 (Madison Co. PR 6, p. 362; PR 19, p. 501); abstracted by Mr. & Mrs. Ezell Terry."
 },

    // ---------- 2026-09-28 paste: staged map batch PART-10 (2026-09-20/21/22, user-approved) ----------
 {
   id: "orlando-jones-house-lot16-va",
   name: "Orlando Jones House, Lot 16, Duke of Gloucester Street (Williamsburg, VA)",
   tier: 2,
   county: "York", // Virginia — see header note on the county filter
   lat: 37.2707,
   lng: -76.7029,
   precise: true, // colonial lot number certain per CW research reports (RR1201, RR1211); verify the on-map point against the CW lot plan at map-build time
   summary: "Orlando Jones's Williamsburg house (Lots 16 & 17; Jones family property before the Alabama chain). His 1719 will ordered 'my house and two lotts in Williamsburgh' sold toward his debts and a £100-sterling legacy to his wife Mary (York Co. Deeds, Orders, Wills XV, 517; probated Nov 16, 1719). Widow Mary Jones sold Lots 16 & 17 to watchmaker John James Flournoy on Jan 16, 1719/20 for £100 current money + £100 sterling (York Co. Deeds & Bonds III, 326); Flournoy married Mary June 23, 1720 — a 1933 letter's 'Mary Elizabeth Jones' vs. the deed's 'Mary Jones' is NOT merged (lead). Flournoy → widow Joanna Archer, Sept 13, 1729, £160, house on the south side of Duke of Gloucester Street (Deeds & Bonds III, 528); Archer d. 1732; the estate was leased by Dr. Kenneth MacKenzie; the May 16, 1745 Virginia Gazette ad offered the dwelling-house, kitchen, meat-house, stable, garden and 2 lots for sale — 'the last positive reference' to the Orlando Jones property. Archaeology: the Jones house foundation (16 x 22 ft) on the Lot-16 Duke-of-Gloucester frontage; a smaller Lot-17 house erected after 1699, gone by 1719 (RR1213).",
   citation: "Colonial Williamsburg Block 10 research reports RR1201, RR1210, RR1211, RR1213, RR1214, RR1219, RR1223 (document-blitz synthesis 2026-09-21)."
 },
 {
   id: "mary-stith-shop-lot17-va",
   name: "Mary Stith Shop and Tin Shop, Lot 17 (Williamsburg, VA)",
   tier: 2,
   county: "York", // Virginia — see header note on the county filter
   lat: 37.2707,
   lng: -76.7029,
   precise: true, // colonial lot number certain per CW research reports (RR1216, RR1219); verify the on-map point against the CW lot plan at map-build time
   summary: "Mary Stith's freed community on Lot 17 (Buildings 21 and 21A). Stith (daughter of William & Mary president William Stith; never married) held enslaved people 1769–1815; her 1813 will (recorded 1816) liberated her household: 'All the coloured people in my family being born my slaves, but now liberated, I think it my duty not to leave them destitute nor leave them unrecompensed for past services rendered to me.' Named freedpeople: Benjamin White and William White (emancipation deeds Mar 8, 1791); Sarah Gillet with children Jane and Peter Gillet (deed Oct 2, 1793); Patty/Martha Gillett (born free after the 1793 deed); Beverley Rowsey (taxed for enslaved people himself 1815–1842); Jenny, granddaughters Jenny and Patty Gillett (tin-shop devisees), Nelly Bolling and sisters Eve and Sally (Woods-shop devisees; married names Eve Mitchell, Sally Skinner). All three Stith parcels were completely destroyed by fire in 1842 (1843 tax); by 1844 Robert Anderson — Stith's executor — owned all three. Unresolved: the two Benjamin Whites, Sarah Gillet's race ascription (deed says 'Negro Woman', report heading says 'mulatto'), the Peter Gillett transfer transcription conflict.",
   citation: "Colonial Williamsburg Block 10 research reports RR1210, RR1211, RR1216, RR1219, RR1220 (document-blitz synthesis 2026-09-21)."
 },
 {
   id: "brick-house-tavern-lot19-va",
   name: "Brick House Tavern (Dr. Carter's Brick House), Lot 19 (Williamsburg, VA)",
   tier: 2,
   county: "York", // Virginia — see header note on the county filter
   lat: 37.2707,
   lng: -76.7029,
   precise: true, // colonial lot number certain per CW research reports (RR1206); verify the on-map point against the CW lot plan at map-build time
   summary: "Lot 19's Brick House Tavern, with documented enslaved labor: Dr. William Carter was taxed for 7 slaves, 1 horse and 3 cattle (RR1206 — first documented enslaved-labor count for the Brick House property). Chain: Ravenscroft → Cole Digges (1723) → Dudley Digges → William Withers → William Carter (1761) → … → Thomas Sands → Robert Anderson; Carter sold ca. 1799. Robert Anderson's 1857 will (recorded 1871): '…at which time they are to be taken and divided equally between the said four now minor children [emancipated negro children 7/8th white]…'; Anderson 'remembered liberally slaves and children of slaves' (parentage unresolved). Caution: 'slave hands employed at the Brick House Tavern' is author speculation only (RR1209) — not evidence.",
   citation: "Colonial Williamsburg Block 10 research reports RR1203–RR1209 (document-blitz synthesis 2026-09-21)."
 },
 {
   id: "barraud-house-lot19s-va",
   name: "Barraud House, Lot 19 South (Williamsburg, VA)",
   tier: 2,
   county: "York", // Virginia — see header note on the county filter
   lat: 37.2707,
   lng: -76.7029,
   precise: true, // colonial lot number certain per CW research reports (RR1191–RR1193); verify the on-map point against the CW lot plan at map-build time
   summary: "Enslaved labor on Lot 19 South. Susannah Riddell (widow of Dr. George Riddell of Yorktown), pre-Barraud owner: 1782 census — household of four whites and one black; 1783–84 tax — 15 slaves (8 under 16), a horse, and a four-wheeled carriage. Named: Lewis, Cromwell, David, Celia, Judy, Arrabella, Peg, Tristam/Tristram Shandy, Arriana, Betty, Lucy, Jan, Bella, Aggrapina, Amy, A[razena?]/Arazena. 1781 self-liberation at Yorktown: PRO memorial (Sir James Riddell, May 25, 1784; PRO AO 12/71) records Susannah's loss of 'many valuable Negro Servants who took the advantage of the confusion by their leaving her' — names/number unresolved. Dr. Philip Barraud's household: Billy (1783); Billy, Ciscilla, Moll (1784); Cis, Tristum, Rachel, Nanny (1786); 5–7 unnamed 1788–1799; gone by 1800. 'Cis' likely = 'Ciscilla'; 'Tristum' possibly = Riddell's 'Tristram Shandy' (Barraud bought Riddell's house — unresolved, not merged). Executors' 1785 sale ad: 'a number of valuable negroes are for immediate sale.'",
   citation: "Colonial Williamsburg Block 10 research reports RR1191, RR1192, RR1193 (document-blitz synthesis 2026-09-21)."
 },
 {
   id: "james-anderson-house-lot18-va",
   name: "James Anderson House (Ravenscroft/Nancy Camp House), Lot 18 (Williamsburg, VA)",
   tier: 2,
   county: "York", // Virginia — see header note on the county filter
   lat: 37.2707,
   lng: -76.7029,
   precise: true, // colonial lot number certain per CW research reports (RR1690, RR1695, RR1222–RR1225); verify the on-map point against the CW lot plan at map-build time
   summary: "James Anderson's armory on Lot 18 — documented enslaved and hired Black labor. Nat, 'a Negro man blacksmith,' sold at the Nov 1, 1803 estate sale ($600; buyer appears to be Robert Anderson). Apr 16, 1779 Virginia Gazette hire ad: 'I am in want of six likely young NEGRO FELLOWS for six months, for which I will give 100£. each' — the hires materialized (Apr 26, 1779 Day Book: baize 'for approns for the Negroes hired by the Publick'). Anderson acquired 'the use of state owned slaves' plus five apprentice nailors; the workforce ran ~40–50, including American and French soldiers, slaves, Highland POWs, convict labor, free blacks, and indentured servants (RR1690). James Banks, free mulatto, apprenticed to Anderson Feb 23, 1763 (York Co. Judgments and Orders 3:470); Harry, an enslaved carpenter, ran away Apr 1777 (VG Purdie, Apr 25, 1777); Philip Moody rented five enslaved people (£111, state footing the bill). The shop was publicly funded and operated by Anderson on state contract (July 1776 Council agreement) — not Anderson's own building; most probable builder Philip Moody (lead).",
   citation: "Colonial Williamsburg Block 10 research reports RR1690, RR1695, RR1222–RR1225 (document-blitz synthesis 2026-09-21)."
 },
 {
   id: "lewis-lot-lot16-francis-va",
   name: "Lewis Lot, Lot 16 Francis-Street side (Williamsburg, VA)",
   tier: 2,
   county: "York", // Virginia — see header note on the county filter
   lat: 37.2707,
   lng: -76.7029,
   precise: true, // colonial lot number certain per the CW Lewis House report (RR1201); verify the on-map point against the CW lot plan at map-build time
   summary: "The post-Jones chain on Lot 16's Francis Street side: Charles Lewis → John Orrill (deed of trust 1814; trustee sale to Richard Coke 1815) → Anna Byrd/Anna Field/Thomas Sands → Richard W. & Charles C. Hansford → Peyton A. Southall → Robert Anderson (1853, $150 down + $450 in installments; rented to Johnson Sands for $60) → Maria Griffin → Mercer/Sloan/Shewmake → Rockefeller 1939 (RR1201, Stephenson 1946 — verified deed/account-book quotes). Maria Griffin, identified as Robert Anderson's servant: his 1857 will (probated Oct 12, 1871) bequeaths her '$300 and all the bedding and furniture in the room usually occupied by her, and I lend to her for her life to live in the House and Lot about ninety feet square on Frances and Cross Streets' — race not stated, do not infer (lead on her relationship).",
   citation: "Colonial Williamsburg Block 10 research report RR1201 (document-blitz synthesis 2026-09-21)."
 },
 {
   id: "timsons-neck-york-river-va",
   name: "Timson's Neck, York River (Orlando Jones's residence; location unconfirmed)",
   tier: 2,
   county: "York", // Virginia — see header note on the county filter
   lat: 37.235,
   lng: -76.5097,
   precise: false, // APPROXIMATE: York River area; Orlando Jones's residence per RR1211 but the precise location is unconfirmed — do NOT place a precise point
   summary: "Orlando Jones's residence per RR1211 (p. 3, citing VMHB Vol. 32, p. 400): 'He lived at Timson's Neck on York River… Through the marriage of his daughter, Frances, to John Dandridge in 1730, he became the grandfather of George Washington's wife.' Buried in Bruton Parish Church (WMQ Vol. 5(1), p. 192, via RR1211). Connects the Juxon-deed (Queen's Creek) neighborhood to the later Jones household; precise location unconfirmed. Lead, not a placed point.",
   citation: "Colonial Williamsburg Block 10 research report RR1211 (document-blitz synthesis 2026-09-21)."
 },

    // ---------- 2026-09-28 paste: staged map batch PART-11 (2026-09-20/21/22, user-approved) ----------
 {
   id: "limestone-county-lead-al",
   name: "Limestone County (Athens area) — Reuben A. Jones–Phoeba R. Gray marriage research lead",
   tier: 2,
   county: "Limestone",
   lat: 34.8042,
   lng: -86.9684,
   precise: false, // approximate: Athens (county seat); on-map placement needs refinement — no precise point until tract-level evidence exists
   summary: "Research-county Tier-2 lead, not the thesis family: 'Reuben A. Jones to Phoeba R. Gray,' licensed Dec 19, 1838, solemnized Dec 20, 1838 by Wm. McDonaldson, J.P. — CORRECTED 2026-09-22 from the original (Limestone County Marriage Book 1832-1862, p. 256; license no. 1610, bond no. 1611; bride 'Phoeba R Gray' on the license, 'Pheby R Gray' in the return). The printed Valley Leaves v09n02 abstract said 'James Simpson, J.P.' — kept as a contradicted reading. FENCED: do NOT merge with Reuben Parker Jones (Madison Co.) without direct evidence. Companion Limestone leads: Alexander S. Perkins estate lands (ADDED 2026-09-22; Turrentine v. Perkins, Ala. S. Ct. SC00287) — 320 acres of the John Webb home place (SW1/4 Sec 4 + NW1/4 Sec 9, T4 R3) plus Madison County parcels (T3 R2/T3 R1), explaining widow Bettie F. Perkins's Madison SCC claim 21,755 ($9,753, disallowed); Alexander S. Perkins is a NEW separate Perkins line (no link to John R./Abraham/Samuel & Susan/Starkey); Samuel & Susan Perkins, minors (guardian Gardner Gill, Nov 15, 1841); Starkey Perkins, deed witness on Madison County land (Mar 1, 1828 McClung deed — closest geographic bridge to the Madison Perkinses); Limestone Eldridge sightings (incl. Sally E. Eldridge m. George R. Phillins, Mar 16, 1835) with no John R. B. Eldridge in the volume; Limestone Jones sightings (Henry Jones inventory 1841, Richard J. Jones estate-division petition, Clinton Jones, Parthenia J. Jones divorce 1849, four Jones marriages 1832–1852) — none is Reuben A. Jones. VERIFIED negative: Phoeba is NOT a daughter of Walter Gray (d. ~1841; seven children fully enumerated, Dec 13, 1841 final settlement — no Phoeba/Phebe). Future source: Limestone County Archives master index (limestonecounty-al.gov/departments/archives/, 350,000+ entries; marriages 1832–1900) — searches still owed for 'Jones, Reuben', 'Gray, Phoebe' (+ Phebe/Phoeba), 'Simpson, James'; form-based, needs a live-browser session or her own search ($1/document mail-order fallback).",
   citation: "Limestone County marriage records via Valley Leaves v09n02 (Dec 1974), printed pp. 65–68; Kathleen Paul Jones & Pauline Jones Gandrud, Alabama Records, Vol. 24: Limestone County (1934), Internet Archive OCR (research_notes/limestone-lead-20260921/findings.md, staged 2026-09-21)."
 },


    // ---------- 2026-09-28 paste: staged map batch PART-14 (2026-09-20/21/22, user-approved) ----------

    // ---------- 2026-09-28: Elizabeth Berry 1842 letter anchor (website plan 2026-09-23 section 5, user-approved) ----------
    {
      id: "mobile-al-berry-letter",
      name: "Mobile, AL \u2014 Elizabeth Berry's 1842 letter",
      tier: 1,
      county: "Mobile",
      lat: 30.6954,
      lng: -88.0399,
      precise: false, // approximate: city center
      summary: "Elizabeth Berry wrote to S. G. Berry on May 1, 1842 from her brother M. T. Levert's house in Mobile, after a nine-day journey \u2014 signing 'Elizabeth Berry or Jones.' Diary/correspondence-class material; the double surname is a research lead, not a conclusion.",
      citation: "DB1 row 1454; DB4 row 564; paper [386]."
    },

    // ---------- 2026-10-03 paste: staged map batch PART-11 (2026-09-22 Bedford-analysis fold-in) + Tusculum (2026-10-03, user-approved go-live) ----------
    {
      id: "gw-jones-district1-lead-al",
      name: "G. W. Jones holding, District 1, Madison County, AL — 69 enslaved (1860), plantation-scale candidate",
      tier: 2,
      county: "Madison",
      lat: 34.73,
      lng: -86.58,
      precise: false, // approximate: District 1 of 1860 Madison County; no tract-level evidence yet — do NOT over-place
      summary: "Largest Jones holding found in 1860 Madison County: 69 enslaved people, NARA M653 Roll 30, leaves 635-636 (stamped 555B), District No. 1, ms pp. 40-41. Plantation-scale research candidate (lead): cross-reference with the 1860 agricultural schedule and District 1 deeds. NOT the Huntsville-city George W. Jones (leaf 474, 1 slave). Tom Blake's '49' at this location is contradicted by the manuscript; 96/106/126 figures for Alex. P. Jones are all currently unverified (conflict under reconciliation).",
      citation: "1860 U.S. Census, slave schedule, Madison County, Alabama, NARA M653 Roll 30; research_notes/buck-jones-1860/sources/jones-owners-review-20260922.md."
    },
    {
      id: "bedford-county-va-context",
      name: "Bedford County, VA — Capt. John Jones's county (d. ~1796)",
      tier: 3, // context only: no tract-level placement
      county: "Bedford", // Virginia — see header note on the county filter
      lat: 37.2728,
      lng: -79.4911,
      precise: false, // approximate: town of Bedford (county seat); no tract-level placement
      summary: "Home county of Capt. John Jones, whose 1789 marriage-portion transfer (£180 + ten enslaved people to Philip Burton) is the largest single transfer found in the Bedford batch. Five chancery cases (1805-002, 1808-004, 1821-020, 1816-022, 1846-049). No plantation sites or tracts named; deed work owed.",
      citation: "LVA Chancery Records Index, Bedford County; research_notes/bedford-analysis-20260922/report.md."
    },
    {
      id: "amherst-county-va-context",
      name: "Amherst County, VA — Philip Burton's residence",
      tier: 3, // context only
      county: "Amherst", // Virginia — see header note on the county filter
      lat: 37.58517,
      lng: -79.05202,
      precise: false, // approximate: town of Amherst (county seat); no tract-level placement
      summary: "Philip Burton's residence; origin point of the Burton-Jones marriage-portion claim (Burton m. an unnamed daughter of Capt. John Jones ~1782). Burton's 16 Feb 1789 letter names six enslaved people sold for £160: Dan, Harry, Beck, Beck's child, little Beck, little Matt.",
      citation: "LVA Chancery Records Index, Bedford County: 1805-002; research_notes/bedford-analysis-20260922/report.md."
    },
    {
      id: "liberty-va-tavern-context",
      name: "Town of Liberty, VA (now Bedford) — Armistead's tavern",
      tier: 3, // context only
      county: "Bedford", // Virginia — see header note on the county filter
      lat: 37.2728,
      lng: -79.4911,
      precise: false, // approximate: town of Bedford — the former Town of Liberty; deposition venue, no tract
      summary: "Armistead's tavern, deposition venue in 1816-022 (Henry Trucks v. William R. Jones) — the case that documents William R. Jones as a Bedford landlord/creditor in 1814-16 (Lead identity link to the 1858-012 William R. Jones).",
      citation: "LVA Chancery Records Index, Bedford County: 1816-022; research_notes/bedford-analysis-20260922/report.md."
    },
    {
      id: "montgomery-adah-research-site",
      name: "Montgomery, AL — ADAH (research site)",
      tier: 3, // research-site lead, not a historical site
      county: "Montgomery",
      lat: 32.37591,
      lng: -86.30079,
      precise: false, // building address geocoded (624 Washington Ave); research-site marker, not a historical site
      summary: "Most-likely home of Pickens's May 12, 1825 letter to Jeremiah Austill (Pickens administrative files, 1817-1825, SNAC 8260587) and of the manuscript State Treasury ledgers, 1825-1926 (SNAC 63854316).",
      citation: "research_notes/treasurer-report-hunt-20260922/report.md; DB1 rows 854-855."
    },
    {
      id: "mobile-austill-context",
      name: "Mobile, AL — Jeremiah Austill's bank (context)",
      tier: 3,
      county: "Mobile",
      lat: 30.6954,
      lng: -88.0399,
      precise: false, // approximate: city of Mobile; context only
      summary: "Where Pickens's May 12, 1825 letter directed the $3,698.16 1/4 captured-African sale proceeds to the credit of the state treasurer (Clarke 1893, p. 334). Context only.",
      citation: "Clarke, Memorial Record of Alabama vol. 1 (1893), p. 334; DB1 row 854."
    },
    {
      id: "cahawba-context",
      name: "Old Cahawba, Dallas Co., AL (context)",
      tier: 3,
      county: "Dallas",
      lat: 32.31932,
      lng: -87.10488,
      precise: false, // approximate: Old Cahawba historic site area; context only
      summary: "Pickens's May 12, 1825 letter written from Cahawba, six months before he left office; the 1825-26 House and Senate Journals were printed here.",
      citation: "research_notes/treasurer-report-hunt-20260922/report.md; DB1 row 854."
    },
    {
      id: "triana-corroboration",
      name: "Triana, Madison County, AL — Woodson Jones corroboration",
      tier: 2, // verified anchor, town-level only
      county: "Madison",
      lat: 34.58345,
      lng: -86.73542,
      precise: false, // approximate: town of Triana; town-level only, no precise point
      summary: "Freedman's Bank register (Dec 24, 1867) gives Woodson Jones's birthplace as 'Trianna'; two other corpus records spell 'Triana' — corroborated. Mother Mahala + Ellen Emity + Adeline in Huntsville = the family-anchor set for the 1865 census cluster (M1900 roll 19 target).",
      citation: "freedmensbureau.com (NARA M816 transcriptions), huntsville3; DB1 row 856."
    },
    {
      id: "jones-lane-limestone",
      name: "'Jones Lane,' Limestone County, AL (place-name lead)",
      tier: 3,
      county: "Limestone",
      lat: 34.85,
      lng: -86.95,
      precise: false, // approximate: Limestone County; no precise point — deed/road-record target
      summary: "Bank-register residence 'Limestone Co., near Jones Lane, Ala.' — the first named Jones-associated locality in Limestone County. Deed/road-record target; no precise point.",
      citation: "freedmensbureau.com (NARA M816), huntsville9; DB1 row 860."
    },
    {
      id: "mcdanel-plantation-lead",
      name: "McDanel Plantation, ~3 mi from Huntsville (lead)",
      tier: 3,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: Huntsville area (~3 mi radius); no precise point
      summary: "Hampton Jones Rev.'s 1868 residence; wife Maria Louisia Jones (NOT the Maria Louisa Jones Donnell without direct evidence — same-name caution); NC-born (NC to Madison migration). No precise point.",
      citation: "freedmensbureau.com (NARA M816), huntsville2; DB1 row 859."
    },
    {
      id: "martin-vaugh-plantation-lead",
      name: "Martin Vaugh Plantation, near Triana (lead)",
      tier: 3,
      county: "Madison",
      lat: 34.58345,
      lng: -86.73542,
      precise: false, // approximate: near Triana; no precise point
      summary: "Berry Jones's 1870 residence (born 'Near Triana'). No precise point.",
      citation: "freedmensbureau.com (NARA M816), huntsville20; DB1 row 859."
    },
    {
      id: "seclusion-farm-lead",
      name: "Seclusion Farm (Donnell plantation, lead)",
      tier: 3,
      county: "Lawrence",
      lat: 34.677,
      lng: -87.408,
      precise: false, // approximate: Town Creek vicinity, Lawrence County, per the Fortune memorial's placement of the Donnell Slave Cemetery near Young Cole's brick home by Town Creek
      summary: "Donnell plantation named in the letters (sock-making economy, item 09; daily-coach proposal Seclusion Farm to Moorsville Depot via Athens); J.W.S. Donnell's Nov 14, 1863 letter was written from 'Seclusion (Lawrence Co.)'. Now placed in Lawrence County near Town Creek per the Fortune memorial and the 888 settlement account — see the Tier 1 Seclusion entry. Location still approximate.",
      citation: "Donnell Papers, THS 296; research_notes/donnell-transcription-20260922/leads-report.md; DB1 rows 865-868, 2322, 2338."
    },
    {
      id: "campbell-county-21215-update",
      name: "Campbell County, VA — item 21215 catalog update (2026-09-22)",
      tier: 3,
      county: "Campbell", // Virginia — see header note on the county filter
      lat: 37.2213,
      lng: -79.0575,
      precise: false, // approximate: Campbell County; catalog-level lead, no tract
      summary: "Catalog-verification pass: manuscript gated at UAH (Series 4, Subseries B, Box 1, Folder 12, never downloaded); twelve enslaved people catalog-verified incl. Sarah 'Big Will's slave wife'; Maria Louisa Jones Donnell = the Maria L. Donnell of the V24/1844 deed (Bedford to Madison migration thread). UAH request drafted, unsent.",
      citation: "UAH Huntsville History Collection catalog; DB1 row 863; paper [247]; bibliography Section BE."
    },
    {
      id: "limestone-jns-jones-3200ac-lead",
      name: "Limestone County, AL — 3,200 acres to J.N.S. Jones (lead)",
      tier: 2,
      county: "Limestone",
      lat: 34.85,
      lng: -86.95,
      precise: false, // approximate: Limestone County; the tract's legal description is not in the annotation — no precise point
      summary: "Todd Donnell Harrison's annotation on Lewellen Jones's 1804 bounty-warrant affidavit: before his 1820 death Lewellen deeded 3,200 acres in Limestone County to John Nelson Spotswood Jones. Annotation-only (unconfirmed in deeds); deed-book check owed. Lewellen bounty warrant: 4,000 acres granted Sept 8, 1804 ('WHERE? — Probably NOT in northern Alabama, considering date').",
      citation: "UAH Folder 12, Image 34 (r04b01-12-000-0094), Harrison annotation; DB1 row 877."
    },
    {
      id: "uah-campus-apj-grant",
      name: "Present-day UAH campus — section of A.P. Jones's 2,877-acre Madison County grant",
      tier: 2,
      county: "Madison",
      lat: 34.722,
      lng: -86.639,
      precise: false, // approximate: UAH campus area; the 1820-era section lines are not mapped
      summary: "Harrison annotation: Lewellen Jones deeded 2,877 acres in Madison County plus lots 41 and 42 on Fountain Row, Huntsville, to Alexander Pinckney Jones — 'one of the sections of land given to Alexander Pinckney Jones is the land on which the University of Alabama in Huntsville is built.' Annotation-only (unconfirmed in deeds); the Huntsville lots (Fountain Row, lots 41-42) are a deed-book target.",
      citation: "UAH Folder 12, Image 34 (r04b01-12-000-0094), Harrison annotation; DB1 row 877."
    },
    {
      id: "forest-tract-bedford-va",
      name: "'Forest Tract,' Bedford County, VA — 811 acres (Lewellen Jones, 1802)",
      tier: 3, // context: Virginia holding of the thesis family's ancestor
      county: "Bedford", // Virginia — see header note on the county filter
      lat: 37.2728,
      lng: -79.4911,
      precise: false, // approximate: Elk Creek/Lick Run watershed, Bedford County; metes in DB1 878
      summary: "Nov 5, 1802 indenture: Lewellen Jones sold Capt. William Irvine 717 acres on the branches of Elk Creek and Lick Run ('his Forest Tract') plus 95 acres (John Menzies & wife to John Jones, Lewellen's father) — 811 acres total, for 2,800 Virginia currency. Acknowledged in Bedford County Court Jan 24, 1803. Metes and bounds in DB1 row 878.",
      citation: "UAH Folder 12, Image 35 (r04b01-12-000-0095); DB1 row 878."
    },
    {
      id: "limestone-sc00287-webb-tract",
      name: "John Webb home place, Limestone County, AL — SW1/4 Sec 4 + NW1/4 Sec 9, T4 R3 (~320 ac)",
      tier: 2,
      county: "Limestone",
      lat: 34.85,
      lng: -86.95,
      precise: false, // approximate: Limestone County; section aliquots (SW1/4 Sec 4 + NW1/4 Sec 9, T4 R3) not geolocated
      summary: "Turrentine, Administrator, v. Perkins et al. (Ala. S. Ct. SC00287): ~320 acres, part of John Webb's home place — SW1/4 Sec 4, T4, R3 and NW1/4 Sec 9, T4, R3, Limestone County. Estate administrator Egbert J. Jones; Alexander P. Jones bought estate property ($3,942.50). Alexander S. Perkins d. intestate Jan 23, 1867. Full 61-page ADAH FromThePage transcription verified complete.",
      citation: "ADAH SC00287 FromThePage transcription; DB1 row 887."
    },
    {
      id: "tusculum-haywood-davidson-tn",
      name: "Tusculum — Judge John Haywood's plantation (Davidson County, TN)",
      tier: 1,
      county: "Davidson", // Tennessee — see header note on the county filter // Tennessee — see county-filter note above
      lat: 36.06094,
      lng: -86.71583,
      precise: false, // approximate: the historical marker at 4930 Nolensville Pike stands on ADJACENT property; the farmhouse site itself is lost. Do NOT place a precise point.
      summary: "Tusculum, Judge John Haywood's (1762–1826) farm/plantation, circa 1807 — about seven miles southeast of Nashville on Nolensville Road (near present Tusculum Hills Baptist Church). Named from Haywood's reading of Virgil. Marriage venue of Elizabeth Ann Haywood to John Nelson Spotswood Jones, 3 May 1821 — the marriage that brought the Haywood family into the Jones network. Haywood also held a 211-acre Davidson County tract bought from 'one Lynch' (Haywood v. Ensley, Tennessee Chancery, December term 1847) and 350 acres in Rutherford County; their relation to Tusculum is unmapped. Who was enslaved at Tusculum is completely unidentified — Haywood's 1826 will/probate inventory is the top route (TSLA).",
      citation: "History Through Homes, 'Tusculum farm: Home of Father of Tennessee History' (2026-10-03); Haywood v. Ensley (Tenn. Chancery, Dec. term 1847); DB1 rows 2114–2116; paper [608]; bibliography section HN."
    },
    {
      id: "poplar-grove-plantation-al",
      name: "Poplar Grove Plantation (J.W.S. Donnell, Limestone County, AL)",
      tier: 2,
      county: "Limestone",
      lat: 34.628,
      lng: -86.880,
      precise: false, // approximate: Mooresville vicinity; the statement gives "882 Acres Land near Mooresville" with no metes
      summary: "J.W.S. Donnell's Poplar Grove Plantation per an undated plantation statement: '882 Acres Land near Mooresville' valued at $22,200; 11 mules, 10 milch cows and calves, 4 wagons, 100 sheep, 30 hogs; '30 hands' one month's work (status unstated — not inferred); individual liabilities $30,831.82 plus M.P. Tanner & Co. $8,750.43 and 'Liabilities for J. H. Jones $6,457.18' (do not merge), total $44,407.34.",
      citation: "Donnell Papers, THS 296 ('Poplar Grove Plantation / Dr J.W.S. Donnell' statement, Ancestry capture, researcher's May 2026 scan); DB1 row 2329; paper [686]."
    },
        {
      id: "greenbrier-donnell-house-al",
      name: "Greenbrier — J.W.S. Donnell home (Limestone County, AL)",
      tier: 2,
      county: "Limestone",
      lat: 34.671,
      lng: -86.843,
      precise: false, // approximate: Greenbrier district vicinity, near the mapped Jones-Donnell family cemetery at Greenbrier
      summary: "J.W.S. Donnell's home 'Greenbrier' in Limestone County, where he lived after moving from the Courtland valley following his father Rev. Robert Donnell's 1855 death, and where he died in 1876 (per his Athens Post obituary). The Jones-Donnell family cemetery at Greenbrier is mapped separately.",
      citation: "Athens Post 'In Memoriam' obituary, 1876 (Ancestry capture, researcher's May 2026 scan); DB1 row 2334; see also jones-donnell-cemetery-greenbrier-al."
    },
    {
      id: "east-place-apj-estate-al",
      name: "East Place (A.P. Jones estate, Madison County, AL)",
      tier: 3,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: shared vicinity pin for the named places of A.P. Jones's Madison County plantation (NW Division); no metes for the individual places
      summary: "Named place of Alexander P. Jones's Madison County plantation: Marshall Jones (colored) worked 'the East Place' ($170, Jan 1866 estate account); A. Pylance rented it for 1867 ($117 promissory note to Paul L. Jones, administrator); Marshall Jones bought it at the Jan 27, 1868 chancery sale (Paul L. Jones, adm'r of Alexander P. Jones, vs. Donnell & Maria et al.) — the post-emancipation conversion of wartime economic agency into fee-simple land.",
      citation: "A.P. Jones estate accounts Jan 1866/Jan 1867 (Reeves transcription); 1868 Limestone Co. estate case file (Pylance note); DB1 APJ-estate rows."
    },
    {
      id: "rudy-place-apj-estate-al",
      name: "Rudy place (A.P. Jones estate, Madison County, AL)",
      tier: 3,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: shared vicinity pin for the named places of A.P. Jones's Madison County plantation; no metes
      summary: "Named place of Alexander P. Jones's Madison County plantation: Aron Jones bought the 'Rudy place' for $405 at the Jan 5, 1867 estate sale (Paul L. Jones, special administrator) and rented it for 1867. Race of purchaser unstated — not inferred.",
      citation: "A.P. Jones estate, Madison County, 1865-1867 (administrator's reports); DB1 APJ-estate rows."
    },
    {
      id: "bradford-place-apj-estate-al",
      name: "Bradford place (A.P. Jones estate, Madison County, AL)",
      tier: 3,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: shared vicinity pin for the named places of A.P. Jones's Madison County plantation; no metes
      summary: "Named place of Alexander P. Jones's Madison County plantation: Dredd Jones worked 'the Bradford place' ($5.00, Jan 1866 estate account); Anthony Jones rented it for $102 (Jan 1867 rental report).",
      citation: "A.P. Jones estate accounts Jan 1866/Jan 1867 (Reeves transcription); DB1 APJ-estate rows."
    },
    {
      id: "king-place-apj-estate-al",
      name: "King place (A.P. Jones estate, Madison County, AL)",
      tier: 3,
      county: "Madison",
      lat: 34.7304,
      lng: -86.5861,
      precise: false, // approximate: shared vicinity pin for the named places of A.P. Jones's Madison County plantation; no metes
      summary: "Named place of Alexander P. Jones's Madison County plantation: Peterson Jones worked 'the King place' ($63.00, Jan 1866 estate account).",
      citation: "A.P. Jones estate account Jan 1866 (Reeves transcription); DB1 APJ-estate rows."
    },
    {
      id: "harris-plantation-madison-al",
      name: "S. Willis Harris plantation (Madison County, AL)",
      tier: 2,
      county: "Madison",
      lat: 34.658,
      lng: -86.586,
      precise: false, // approximate: ~5 miles south of Huntsville per the SCC testimony; no metes
      summary: "Plantation of S. Willis Harris, about five miles south of Huntsville, where Rachael Jones was formerly enslaved; the Southern Claims Commission described Harris as 'a large planter' owning about 150 enslaved people. Rachael's brother David Crow's testimony is a FAN-cluster anchor for the Harris-plantation claimants.",
      citation: "Rachael Jones SCC Claim No. 18,679 (filed Jan 15, 1873); DB1 rows 1162, 1171."
    },

  ]
};
