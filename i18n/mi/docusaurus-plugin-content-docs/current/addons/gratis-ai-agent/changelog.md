---
title: Rangitaki huringa
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Rangitaki Huringa {#changelog}

## 1.9.0 — I tukuna i te 2026-04-28 {#190--released-on-2026-04-28}

### Hou {#new}

- **āheitanga `create_contact_form`** — ka waihanga i tētahi puka whakapā mā te plugin puka hohe (Contact Form 7, WPForms, Fluent Forms, Gravity Forms rānei), ā, ka whakahoki i tētahi shortcode kua rite mō te tāuru ki tētahi whakairinga, whārangi rānei.
- **āheitanga `set_featured_image`** — ka tautapa i tētahi whakaahua matua ki tētahi whakairinga, whārangi rānei mai i tētahi ID āpitihanga Whare Pāpāho e tīariari ana, mai i tētahi URL mamao rānei; ka kawemai aunoa i te whakaahua ina tukuna mai he URL.
- **āheitanga `batch_create_posts`** — ka waihanga i ngā whakairinga maha i roto i te karanga āheitanga kotahi. Ka tautoko i ngā tawhā ōrite ki `create_post`, ka pūrongo i te angitu/rahunga mō ia whakairinga, ā, he aratau `stop_on_error` kōwhiringa tōna.
- **tawhā `page_template`** — kua tāpirihia ki `create_post` me `update_post`. Ka tautapa i tētahi kōnae tātauira whārangi PHP (hei tauira `page-full-width.php`) i te wā waihanga, whakahou rānei. Tukuna he aho kau ki `update_post` kia hoki ki te taunoa o te theme.
- **Ngā āheitanga whakaahuamata taha-kiritaki** — `capture_screenshot`, `compare_screenshots`, me `review_page_design`. Hopukina ngā whakaahuamata katoa, whakaahuamata tauranga-tirohanga rānei o ngā whārangi ora mā tētahi pūtirotiro upoko-kore taha-tūmau, whakatauritea ngā whakaahuamata e rua, ā, whiwhi i tētahi arotake hoahoa i hangaia e te AI e kapi ana i te whakatakotoranga, te momotuhi, te tae, me te urutanga.
- **E rima ngā āpiha hanga-roto** — Kaituhi Ihirangi, Kaihanga Pae, Taiwhanga Hoahoa, Kaiwhakahaere Plugin, me te Kaiāwhina Tautoko. Kei ia āpiha tētahi huinga taputapu motuhake, tētahi kupuaki pūnaha kua whakahāngaitia, me ngā whakaaro tīmata. Ka taea te whakawhiti mā te **Kaiwhiri Āpiha** hou i te pane kōrerorero. Tirohia [Ngā Āpiha Hanga-roto](../../user-guide/configuration/built-in-agents).
- **Ngā haki āhuatanga** — ripa **Tautuhinga → Ngā Haki Āhuatanga** hou me ngā whakakā mana-uru (whakawhāiti ki ngā kaiwhakahaere, whakawhāiti ki ngā kaiwhakahaere whatunga, uru o te kaiohauru, monokia mō te hunga kāore i te mema) me ngā kōwhiringa waitohu (huna i te tohu ā-kīwae, ingoa āpiha ritenga, huna i te kaiwhiri āpiha, whakamahia te ata pae hei avatar kōrerorero). Tirohia [Ngā Tautuhinga Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Whakaora i te wātū whakamutunga** — ka uta anō aunoa te paewhiri kōrerorero i te whakawhitinga kōrero o nā tata tonu nei i te utanga whārangi me te whakatuwheratanga o te widget, nō reira e kore rawa te horopaki e ngaro i ngā whakatere whārangi.
- **Ngā hononga mahi plugin** — kua puta ināianei ngā hononga tere ki ngā Tautuhinga me te Rēhita Āheitanga ki te mata **Ngā Plugin → Ngā Plugin Kua Tāutahia** o WordPress i raro i te whakaahuatanga plugin.

### Kua whakapai ake {#improved}

- **Ngana anō ki te pūtake whakaahua** — ka ngana anō te āpiha ināianei ki ngā pūtake whakaahua koreutu katoa kua whirihorahia i mua i te hoki ki tētahi whakaahua i hangaia e te AI ina rahu te tikiake.
- **Paewhiri mōhiohio tauira** — ka kitea tonutia i te pane kōrerorero; kāore e hunaia i muri i te karere tuatahi.
- **Whanonga panuku-aunoa** — ka whakatā te panuku-aunoa ina panuku whakarunga te kaiwhakamahi ki te pānui; ka puta tētahi pātene mānu **Panuku ki raro rawa**, ā, ka ngaro aunoa ina tae te kaiwhakamahi ki te karere hou rawa.
- **Atanga Kaiwhiri Āpiha** — kua hoahoatia anō hei whakakikorua ripanga-puka me ngā ata mō ia āpiha, kia māmā ake te tautuhi me te whakawhiti āpiha i te tirohanga kotahi.
- **Ngā wāhanga JS uta-mangere** — kua wehea ināianei te paihere JavaScript tuatahi o te widget kōrerorero ki ngā wāhanga uta-mangere, e whakaiti ana i ngā rahinga paihere tuatahi mā te 75–90%.
- **Hoahoa anō o te widget kōrerorero** — ka whakakapi te ata AI kotahi i te avatar ritenga o mua; he ōrite ki te pūnaha āpiha hanga-roto.
- **Whakahononga URL** — ko ngā URL e puta ana i ngā karere pūnaha me ngā mirumiru karere hapa ka whakaaturia ināianei hei hononga pāwhiri.

### Kua whakatika {#fixed}

- **Kiteatanga āheitanga** — kua whakatikahia ngā whakaahuatanga, ngā tohutoro kupuaki pūnaha, me te whakahāngaitanga namespace kia puta pono ai ngā āheitanga katoa ki te rārangi taputapu a te āpiha.
- **Keteroki kaiwhakarato** — kua keterokitia whānuitia ngā kaiwhakarato puta noa i te pae mā tētahi tatau putanga, e ārai ana i ngā raruraru kaiwhakarato-tawhito i ngā whatunga multisite.
- **`ability_invalid_output`** — kua whakatau puta noa i ngā kaiwhakahaere āheitanga 12; ka whakahoki katoa i ngā urupare JSON kua tika te hanganga.
- **Arawhiti `pending_client_tool_calls`** — kua hono mai i tētahi pito ki tētahi pito kia oti tika ai ngā karanga taputapu taha-kiritaki, kia whakahoki hua ai ki te tauira.
- **Kaitō hītori** — ka aukatia ngā huringa kāore e taea te whakahoki mai i te rārangi whakahoki; kua mahi tika ināianei te hononga **Tirohia te hītori katoa**.
- **Pūnaha huringa/whakahoki** — e rima ngā hapa motuhake kua whakatikahia, kua whakakotahitia ki raro i te atanga kaiwhakahaere hou.
- **Pānui Save Settings** — ka puta pono ināianei te whakamōhiotanga snackbar i muri i te pāwhiri i **Save Settings**.
- **Tahua horopaki para** — kua tāpirihia te kōwhiringa **Mukua Tūturu** kia taea ai ngā tūemi te muku-mārō me te kore e waiho i te tirohanga para.
- **Whakatika & tuku anō** — ina pāwhiria te ata whakatika, ka uru ināianei ki te aratau whakatika mō te karere i pāwhiria anake, kaua mō ngā karere katoa i te aho.
- **Teitei whakatakotoranga kōrerorero** — ka urutau te paewhiri kōrerorero i tōna teitei ina puta he ihirangi kua werohia e te plugin (ngā pānui kaiwhakahaere, ngā kara) ki runga ake i te whārangi, e ārai ana i te wāhi tāuru kia panaia ki waho o te mata.

---

## 1.4.0 — I tukuna i te 2026-04-09 {#140--released-on-2026-04-09}

### Hou {#new-1}

- **Tono paearu WP-CLI** (`wp gratis-ai-agent benchmark`) — ka whakahaere i te huinga paearu Agent Capabilities v1 mai i te rārangi tono mō ngā paipa CI me ngā rerenga mahi aromātai tauira. Ka tautoko i ngā whakahaere ā-pātai, ngā whakakapi kaiwhakarato/tauira, me te putanga JSON/CSV.
- **Huinga paearu Agent Capabilities v1** — he huinga kua hanganga o ngā akiaki matatini, taahiraa-maha e whakamātautau ana i te mata āheinga katoa, me te pūrongo kaute, token me te roanga.
- **Ngā āheinga Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Ka mau tonu ngā rēhitatanga puta noa i ngā tīmatanga anō mā te ripanga kōwhiringa.
- **Ngā āheinga Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Ka tautoko i ngā whakarōpūtanga arorangi me ngā whakarōpūtanga papatahi me ngā rewrite slug kōwhiri.
- **Ngā āheinga Pūnaha Hoahoa** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Kei roto ngā tatūkē kua āta tīpakohia e rima: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Ngā āheinga Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Ka pānui, ka tuhi hoki i ngā uara theme.json mā te WordPress Global Styles API.
- **Āheinga whakahaere Tahua Whakatere** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Ka tautoko i ngā tahua kohanga me te tautapanga wāhi kaupapa.
- **Āheinga Whakahaere Kōwhiringa** — `get_option`, `set_option`, `delete_option`, `list_options`. Kei roto tētahi rārangi ārai haumaru ā-roto e tiaki ana i ngā kōwhiringa WordPress hira kia kaua e whakarerekētia.
- **Rēhita Āheinga Tāuta** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Kimihia, whakahohe hoki i ngā mōkihi āheinga kua tohaina hei monomai WordPress.
- **Whakahaere Kaihanga Pae v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Ngā mahere hanga pae wāhanga-maha me te kimi monomai, ngā tohutoro putanga taahiraa, te aroturuki ahunga whakamua, me te whakaora hapa motuhake.
- **Pātai paearu paetukutuku wharekai** (`q-restaurant-website`) — he whakamātautau pito-ki-te-pito e kapi ana i te rēhitatanga CPT, te pūnaha hoahoa, te whakatere, me te kimi monomai.
- **Ngā monomai kaihono kaiwhakarato AI** kua tāpirihia ki ngā tauira WordPress Playground mō te tatū whanaketanga paetata tere ake.

### Kua whakapai ake {#improved-1}

- Kua whakahoutia te README me ngā tuhinga kaihono kaiwhakarato AI me ngā tohutohu tatūnga.

### Kua whakatikaina {#fixed-1}

- Kua whakatauria ngā rahunga whakamātautau PHPUnit 25 i te peka `main`.
- Kua whakatikaina te hōputu URL tukunga GitHub i `blueprint.json`.
- Kua tauanōtia ngā ID tūmahi kia karo i ngā tukinga ki ngā ID tawhito.

---

## 1.3.x {#13x}

_Kei te puritia ngā tuhipoka tukunga o mua ki te pūrepo monomai._
