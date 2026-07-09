---
title: Umlando wezinguquko
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Irekhodi lezinguquko

## 1.9.0 — Ikhishwe ngo-2026-04-28

### Okusha

- **ikhono le-`create_contact_form`** — lakha ifomu lokuxhumana lisebenzisa i-form plugin esebenzayo (Contact Form 7, WPForms, Fluent Forms, noma Gravity Forms) futhi libuyisa i-shortcode esilungele ukufakwa kunoma yikuphi okuthunyelwe noma ikhasi.
- **ikhono le-`set_featured_image`** — linikeza okuthunyelwe noma ikhasi isithombe esivelele lisuka ku-ID yokunamathiselwe ekhona ye-Media Library noma ku-URL ekude; lingenisa isithombe ngokuzenzakalelayo uma kunikezwe i-URL.
- **ikhono le-`batch_create_posts`** — lakha okuthunyelwe okuningi ekubizweni kwekhono okukodwa. Lisekela amapharamitha afanayo ne-`create_post`, libika impumelelo/ukwehluleka kokuthunyelwe ngakunye, futhi linemodi yokuzikhethela ye-`stop_on_error`.
- **ipharamitha ye-`page_template`** — yengezwe ku-`create_post` naku-`update_post`. Inikeza ifayela le-template yekhasi le-PHP (isb. `page-full-width.php`) ngesikhathi sokudala noma sokubuyekeza. Dlulisa uchungechunge olungenalutho ku-`update_post` ukuze ubuyele kokumisiwe kwe-theme.
- **Amakhono ezithombe-skrini ohlangothini lwe-client** — `capture_screenshot`, `compare_screenshots`, kanye ne-`review_page_design`. Thwebula izithombe-skrini ezigcwele noma ze-viewport zamakhasi abukhoma usebenzisa isiphequluli esingenakhanda ohlangothini lwe-server, qhathanisa izithombe-skrini ezimbili, futhi uthole ukubuyekezwa komklamo okukhiqizwe yi-AI okuhlanganisa ukuhleleka, i-typography, umbala, nokufinyeleleka.
- **Ama-agent amahlanu akhelwe ngaphakathi** — Umbhali Wokuqukethwe, Umakhi Wesayithi, Isitudiyo Sokuklama, Umphathi We-plugin, kanye Nomsizi Wokweseka. I-agent ngayinye inesethi yamathuluzi ezinikele, i-system prompt eyenziwe ngokwezifiso, neziphakamiso zokuqala. Kuyashintsheka nge-**Sikhethi Se-agent** esisha enhlokweni yengxoxo. Bona [Ama-agent Akhelwe Ngaphakathi](../../user-guide/configuration/built-in-agents).
- **Ama-feature flags** — ithebhu entsha ethi **Izilungiselelo → Ama-feature Flags** enama-toggle okulawula ukufinyelela (khawulela kubalawuli, khawulela kubalawuli benethiwekhi, ukufinyelela kwababhalisile, khubaza kwabangewona amalungu) nezinketho zokufaka uphawu (fihla ukubalulwa ku-footer, igama le-agent langokwezifiso, fihla isikhethi se-agent, sebenzisa isithonjana sesayithi njenge-avatar yengxoxo). Bona [Izilungiselelo ze-Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Buyisela iseshini yokugcina** — iphaneli yengxoxo manje ilayisha kabusha ingxoxo yakamuva ngokuzenzakalelayo lapho ikhasi lilayishwa nalapho i-widget ivulwa, ukuze umongo ungalahleki ngesikhathi sokuzulazula phakathi kwamakhasi.
- **Izixhumanisi zezenzo ze-plugin** — izixhumanisi ezisheshayo eziya Ezilungiselelweni nase-Registry Yamakhono manje zivela esikrinini se-WordPress **Ama-plugin → Ama-plugin Afakiwe** ngaphansi kwencazelo ye-plugin.

### Kuthuthukisiwe

- **Ukuzama kabusha umthombo wesithombe** — i-agent manje izama kabusha yonke imithombo yezithombe yamahhala emisiwe ngaphambi kokubuyela esithombeni esikhiqizwe yi-AI uma ukulanda kwehluleka.
- **Iphaneli yolwazi lwemodeli** — ihlala ibonakala enhlokweni yengxoxo; ayisafihlwa ngemva komlayezo wokuqala.
- **Ukuziphatha kokuskrola ngokuzenzakalelayo** — ukuskrola ngokuzenzakalelayo kuyama lapho umsebenzisi eskrolela phezulu ukuze afunde; inkinobho entantayo ethi **Skrolela ezansi** iyavela futhi iyazisusa ngokuzenzakalelayo lapho umsebenzisi efika kumlayezo wakamuva.
- **I-UI Yesikhethi Se-agent** — yakhiwe kabusha njenge-overlay ye-form-table enezithonjana ze-agent ngayinye, okwenza kube lula ukubona nokushintsha ama-agent ngokushesha.
- **Izingxenye ze-JS ezilayishwa ngokuvilapha** — i-bundle yokuqala ye-JavaScript ye-widget yengxoxo manje isihlukaniswe yaba izingxenye ezilayishwa ngokuvilapha, kunciphisa osayizi be-bundle yokuqala ngo-75–90%.
- **Ukwakhiwa kabusha kwe-widget yengxoxo** — isithonjana se-AI esihlanganisiwe sithatha indawo ye-avatar yangokwezifiso yangaphambilini; siyahambisana nohlelo lwama-agent akhelwe ngaphakathi.
- **Ukwenza ama-URL abe izixhumanisi** — ama-URL avela emilayezweni yesistimu nasemabhamuzini emilayezo yamaphutha manje aboniswa njengezixhumanisi ezichofozekayo.

### Kulungisiwe

- **Ukutholakala kwamakhono** — kulungiswe izincazelo, izinkomba ze-system prompt, nokuhambisana kwe-namespace ukuze wonke amakhono avele ohlwini lwamathuluzi e-agent ngokwethembeka.
- **I-cache yabahlinzeki** — abahlinzeki manje bagcinwa ku-cache kuyo yonke isayithi ngokusebenzisa isibali senguqulo, kuvimbela izinkinga zabahlinzeki abaphelelwe yisikhathi kumanethiwekhi e-multisite.
- **`ability_invalid_output`** — kuxazululwe kuzo zonke izibambi zamakhono eziyi-12; zonke zibuyisa izimpendulo ze-JSON ezakhiwe kahle.
- **ipayiphi le-`pending_client_tool_calls`** — lixhunywe kusukela ekuqaleni kuya ekugcineni ukuze ukubizwa kwamathuluzi ohlangothini lwe-client kuphele kahle futhi kubuyisele imiphumela kumodeli.
- **Ikhabethe lomlando** — izinguquko ezingakwazi ukubuyiselwa emuva azifakwa ohlwini lokubuyisela; isixhumanisi esithi **Buka umlando ogcwele** manje sisebenza kahle.
- **Uhlelo lwezinguquko/ukubuyisela emuva** — kulungiswe amaphutha amahlanu ahlukene futhi ahlanganiswa ngaphansi kwe-interface entsha ye-admin.
- **I-toast ethi Gcina Izilungiselelo** — isaziso se-snackbar manje sivela ngokwethembeka ngemva kokuchofoza **Gcina Izilungiselelo**.
- **Imenyu yomongo kadoti** — kwengezwe inketho ethi **Susa Unomphela** ukuze izinto zisuswe ngokuphelele ngaphandle kokushiya ukubuka kukadoti.
- **Hlela futhi uthumele kabusha** — ukuchofoza isithonjana sokuhlela manje kungena kumodi yokuhlela kuphela kumlayezo ochofoziwe, hhayi kuyo yonke imilayezo ku-thread.
- **Ukuphakama kokuhlelwa kwengxoxo** — iphaneli yengxoxo ivumelanisa ukuphakama kwayo lapho okuqukethwe okufakwe yi-plugin (izaziso ze-admin, amabhanela) kuvela ngenhla kwekhasi, kuvimbela indawo yokufaka ukuthi iphushelwe ngaphandle kwesikrini.

---

## 1.4.0 — Ikhishwe ngo-2026-04-09

### Okusha

- **Umyalo we-benchmark we-WP-CLI** (`wp gratis-ai-agent benchmark`) — usebenzisa i-suite ye-benchmark ye-Agent Capabilities v1 kusuka kulayini womyalo yamapayiphi e-CI nezinhlelo zokusebenza zokuhlola amamodeli. Isekela ukusebenzisa umbuzo ngamunye, ukweqa izilungiselelo zomhlinzeki/imodeli, nokukhishwa kwe-JSON/CSV.
- **I-suite ye-benchmark ye-Agent Capabilities v1** — isethi ehlelekile yama-prompts ayinkimbinkimbi, anezinyathelo eziningi, ahlola yonke indawo yamakhono, enokunikeza amaphuzu nokubika ama-token/isikhathi.
- **Amakhono e-Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Ukubhaliswa kuhlala kukhona ngemva kokuqalisa kabusha nge-options table.
- **Amakhono e-Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Isekela ama-taxonomy anamazinga nalawo ayisicaba anama-rewrite slugs ongawakhetha.
- **Amakhono e-Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Ifaka ama-preset amahlanu akhethwe kahle: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Amakhono e-Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Ifunda futhi ibhale amanani e-theme.json nge-WordPress Global Styles API.
- **Ikhono lokuphatha i-Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Isekela amamenyu anezigaba zangaphakathi nokunikezwa kwendawo ye-theme.
- **Ikhono Lokuphatha Izinketho** — `get_option`, `set_option`, `delete_option`, `list_options`. Lifaka i-blocklist yokuphepha eyakhelwe ngaphakathi evikela izinketho ezibalulekile ze-WordPress ekuguqulweni.
- **I-Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Thola futhi wenze kusebenze amaphekhi amakhono asatshalaliswa njengama-plugin e-WordPress.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Izinhlelo zokwakha isayithi ezinezigaba eziningi ezinokutholwa kwama-plugin, izinkomba zokukhishwa kwesinyathelo, ukulandelela inqubekelaphambili, nokululama kumaphutha ngokuzenzakalelayo.
- **Umbuzo we-benchmark wewebhusayithi yerestshurenti** (`q-restaurant-website`) — ukuhlola kusukela ekuqaleni kuya ekugcineni okuhlanganisa ukubhaliswa kwe-CPT, uhlelo lokuklama, ukuzulazula, nokutholwa kwama-plugin.
- **Ama-plugin okuxhuma abahlinzeki be-AI** engezwe kuma-blueprints e-WordPress Playground ukuze kulungiselelwe ukuthuthukisa kwasendaweni ngokushesha.

### Kuthuthukisiwe

- I-README ibuyekezwe ngemibhalo yokuxhuma abahlinzeki be-AI nemiyalelo yokumisa.

### Kulungisiwe

- Ukwehluleka kokuhlolwa kwe-PHPUnit okungu-25 egatsheni le-`main` kuxazululiwe.
- Ifomethi ye-URL yokukhishwa kwe-GitHub ku-`blueprint.json` ilungisiwe.
- Ukunombola kabusha i-Task ID ukuze kugwenywe ukushayisana nama-ID amadala.

---

## 1.3.x

_Amanothi okukhishwa angaphambilini agcinwa ku-repository ye-plugin._
