---
title: Breytingaskrá
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Breytingaskrá

## 1.9.0 — Gefið út 2026-04-28 {#190--released-on-2026-04-28}

### Nýtt {#new}

- **`create_contact_form` ability** — býr til tengiliðaeyðublað með virka eyðublaða-plugininu (Contact Form 7, WPForms, Fluent Forms eða Gravity Forms) og skilar shortcode sem er tilbúið til innfellingar í hvaða færslu eða síðu sem er.
- **`set_featured_image` ability** — úthlutar forsíðumynd á færslu eða síðu úr fyrirliggjandi viðhengi í Media Library með ID eða fjarlægri URL; flytur myndina sjálfkrafa inn þegar URL er gefin upp.
- **`batch_create_posts` ability** — býr til margar færslur í einu ability-kalli. Styður sömu færibreytur og `create_post`, skýrir frá árangri/misbresti fyrir hverja færslu og hefur valfrjálsa `stop_on_error` stillingu.
- **`page_template` færibreyta** — bætt við `create_post` og `update_post`. Úthlutar PHP síðusniðmátsskrá (t.d. `page-full-width.php`) við stofnun eða uppfærslu. Sendu tóman streng til `update_post` til að fara aftur í sjálfgefið þema.
- **Skjáskotseiginleikar á biðlarahlið** — `capture_screenshot`, `compare_screenshots` og `review_page_design`. Taka heilsíðu- eða skjásvæðisskjáskot af lifandi síðum í gegnum höfuðlausan vafra á þjónshlið, bera saman tvö skjáskot og fá AI-mynda hönnunarrýni sem nær yfir útlit, leturfræði, lit og aðgengi.
- **Fimm innbyggðir agentar** — Content Writer, Site Builder, Design Studio, Plugin Manager og Support Assistant. Hver agent hefur sérstakt verkfærasett, sérsniðna kerfiskvaðningu og byrjunartillögur. Hægt að skipta um með nýja **Agent Picker** í spjallhausnum. Sjá [Innbyggðir agentar](../../user-guide/configuration/built-in-agents).
- **Eiginleikafánar** — nýr **Settings → Feature Flags** flipi með aðgangsstýringarrofum (takmarka við stjórnendur, takmarka við netstjórnendur, aðgangur áskrifenda, óvirkja fyrir þá sem ekki eru meðlimir) og vörumerkjavalkostum (fela fótareignun, sérsniðið agent-heiti, fela agent-veljara, nota site-tákn sem spjallavatar). Sjá [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Endurheimta síðustu lotu** — spjallborðið hleður nú sjálfkrafa inn nýlegasta samtalinu við síðuhleðslu og þegar græjan er opnuð, svo samhengi glatast aldrei á milli síðuflakks.
- **Aðgerðatenglar plugins** — flýtitenglar í Settings og Abilities Registry birtast nú á WordPress **Plugins → Installed Plugins** skjánum fyrir neðan plugin-lýsinguna.

### Bætt {#improved}

- **Endurtilraun mynduppsprettu** — agentinn reynir nú aftur við allar stilltar ókeypis mynduppsprettur áður en hann fellur til baka á AI-myndaða mynd ef niðurhal mistekst.
- **Upplýsingaspjald líkans** — alltaf sýnilegt í spjallhausnum; ekki lengur falið eftir fyrstu skilaboðin.
- **Sjálfvirk skrunhegðun** — sjálfvirkt skrun stöðvast þegar notandinn skrunar upp til að lesa; fljótandi **Skruna neðst** hnappur birtist og hverfur sjálfkrafa þegar notandinn nær nýjustu skilaboðunum.
- **Agent Picker UI** — endurhannað sem form-töflu-yfirlag með táknum fyrir hvern agent, sem auðveldar að bera kennsl á og skipta um agenta í fljótu bragði.
- **JS bútar hlaðnir eftir þörfum** — upphaflegi JavaScript pakkinn fyrir spjallgræjuna er nú skiptur í búta sem hlaðast eftir þörfum, sem minnkar upphaflegar pakkastærðir um 75–90%.
- **Endurhönnun spjallgræju** — sameinað AI-tákn kemur í stað fyrri sérsniðins avatars; samræmt innbyggða agent-kerfinu.
- **URL tenglavæðing** — URL-slóðir sem birtast í kerfisskilaboðum og villuskilaboðabólum eru nú birtar sem smellanlegir tenglar.

### Lagað {#fixed}

- **Finnanleiki ability** — leiðréttar lýsingar, tilvísanir í kerfiskvaðningu og samræming namespace svo öll ability birtist áreiðanlega í verkfæralista agentsins.
- **Providers skyndiminni** — providers eru nú settir í skyndiminni fyrir allt site-ið með útgáfuteljaranum, sem kemur í veg fyrir vandamál með úrelta providers á multisite netum.
- **`ability_invalid_output`** — leyst í 12 ability-meðhöndlurum; öll skila rétt uppbyggðum JSON-svörum.
- **`pending_client_tool_calls` ferli** — tengt frá upphafi til enda svo verkfæraköll á biðlarahlið ljúki rétt og skili niðurstöðum til líkansins.
- **Söguskúffa** — breytingar sem ekki er hægt að afturkalla eru undanskildar afturköllunarlistanum; **Skoða alla sögu** tengillinn virkar nú rétt.
- **Breytinga-/afturköllunarkerfi** — fimm aðskildar villur lagaðar og sameinaðar undir nýja stjórnendaviðmótinu.
- **Save Settings toast** — snackbar-tilkynning birtist nú áreiðanlega eftir að smellt er á **Save Settings**.
- **Samhengisvalmynd rusls** — bætt við **Eyða varanlega** valkosti svo hægt sé að eyða atriðum endanlega án þess að yfirgefa ruslyfirlitið.
- **Breyta og senda aftur** — þegar smellt er á breytingartáknið fer aðeins skilaboðið sem smellt var á í breytingarham, ekki öll skilaboð í þræðinum.
- **Hæð spjallútlits** — spjallborðið aðlagar hæð sína þegar efni sem plugin sprautar inn (stjórnendatilkynningar, borðar) birtist fyrir ofan síðuna, sem kemur í veg fyrir að innsláttarsvæðinu sé ýtt út af skjánum.

---

## 1.4.0 — Gefið út 2026-04-09 {#140--released-on-2026-04-09}

### Nýtt {#new-1}

- **WP-CLI benchmark skipun** (`wp gratis-ai-agent benchmark`) — keyrir Agent Capabilities v1 benchmark suite af skipanalínunni fyrir CI pipelines og verkflæði fyrir mat á líkönum. Styður keyrslur fyrir hverja spurningu, yfirritanir á þjónustuaðila/líkani og JSON/CSV úttak.
- **Agent Capabilities v1 benchmark suite** — skipulagt safn flókinna, fjölþrepa fyrirmæla sem prófa allt hæfnisviðið, með stigagjöf og skýrslugjöf um token/tímalengd.
- **Eiginleikar Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Skráningar haldast milli endurræsingar í gegnum options-töfluna.
- **Eiginleikar Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Styður stigskiptar og flatar flokkunarfræðiir með valkvæðum rewrite slugs.
- **Eiginleikar Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Inniheldur fimm vandlega valdar forstillingar: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Eiginleikar Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Les og skrifar theme.json gildi í gegnum WordPress Global Styles API.
- **Eiginleiki fyrir stjórnun Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Styður hreiðraðar valmyndir og úthlutun á theme-staðsetningu.
- **Eiginleiki fyrir Options Management** — `get_option`, `set_option`, `delete_option`, `list_options`. Inniheldur innbyggðan öryggisútilokunarlista sem verndar mikilvægar WordPress stillingar gegn breytingum.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Finndu og virkjaðu hæfnipakka sem dreift er sem WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Margþrepa áætlanir fyrir uppbyggingu vefs með plugin-uppgötvun, tilvísunum í úttak skrefa, framvindurakningu og sjálfvirkri villubata.
- **Benchmark-spurning fyrir veitingastaðarvef** (`q-restaurant-website`) — heildarpróf sem nær yfir CPT-skráningu, design system, leiðsögn og plugin-uppgötvun.
- **AI provider connector plugins** bætt við WordPress Playground blueprints fyrir hraðari uppsetningu staðbundins þróunarumhverfis.

### Bætt {#improved-1}

- README uppfært með skjölun fyrir AI provider connector og uppsetningarleiðbeiningum.

### Lagað {#fixed-1}

- 25 PHPUnit prófunarvillur á `main` grein leystar.
- GitHub releases URL snið í `blueprint.json` leiðrétt.
- Endurnúmering á Task ID til að forðast árekstra við gömul auðkenni.

---

## 1.3.x {#13x}

_Fyrri útgáfuathugasemdum er haldið við í plugin repository._
