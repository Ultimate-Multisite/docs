---
title: Uluhlu lotshintsho
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Ingxelo yotshintsho

## 1.9.0 — Ikhutshwe nge-2026-04-28 {#190--released-on-2026-04-28}

### Entsha {#new}

- **ubuchule be-`create_contact_form`** — budala ifom yoqhagamshelwano kusetyenziswa iplugin yeefom esebenzayo (Contact Form 7, WPForms, Fluent Forms, okanye Gravity Forms) kwaye bubuyisela i-shortcode elungele ukufakwa nakweyiphi iposti okanye iphepha.
- **ubuchule be-`set_featured_image`** — bunika iposti okanye iphepha umfanekiso ophambili ukusuka kwi-ID yoncamathiselo ekhoyo kwiMedia Library okanye kwi-URL ekude; bungenisa ngokuzenzekelayo umfanekiso xa kunikwe i-URL.
- **ubuchule be-`batch_create_posts`** — budala iiposti ezininzi kubizo olunye lobuchule. Buxhasa iiparamitha ezifanayo ne-`create_post`, bunika ingxelo yempumelelo/yokusilela kwiposti nganye, kwaye bunemowudi ekhethwayo ye-`stop_on_error`.
- **iparamitha ye-`page_template`** — yongezwe kwi-`create_post` nakwi-`update_post`. Inika ifayile yetemplate yephepha le-PHP (umz. `page-full-width.php`) ngexesha lokudala okanye lokuhlaziya. Dlulisa umtya ongenanto kwi-`update_post` ukuze ubuyele kokumiselweyo kwe-theme.
- **Ubuchule bescreenshot kwicala le-client** — `capture_screenshot`, `compare_screenshots`, kunye ne-`review_page_design`. Thatha ii-screenshot ezipheleleyo okanye ze-viewport zamaphepha aphilayo usebenzisa ibhrawuza engenantloko kwicala leseva, thelekisa ii-screenshot ezimbini, kwaye ufumane uphononongo loyilo oluveliswe yi-AI olugubungela ulwakhiwo, itayipografi, umbala, kunye nokufikeleleka.
- **Ii-agent ezintlanu ezakhelwe ngaphakathi** — Content Writer, Site Builder, Design Studio, Plugin Manager, kunye ne-Support Assistant. I-agent nganye ineseti yezixhobo ezinikezelweyo, i-system prompt eyenzelwe yona, kunye neengcebiso zokuqala. Zitshintshwa nge-**Agent Picker** entsha kwintloko yencoko. Bona [Ii-Agent ezakhelwe ngaphakathi](../../user-guide/configuration/built-in-agents).
- **Iiflegi zeefitsha** — ithebhu entsha ye-**Settings → Feature Flags** enamaqhosha olawulo lofikelelo (thintela kubalawuli, thintela kubalawuli benethiwekhi, ukufikelela kwababhalisi, khubaza kwabangengomalungu) kunye neenketho zebhrendi (fihla isalathiso esisezantsi, igama le-agent elilungiselelweyo, fihla i-agent picker, sebenzisa i-ayikhoni yesayithi njenge-avatar yencoko). Bona [Iisetingi ze-Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Buyisela iseshoni yokugqibela** — iphaneli yencoko ngoku ilayisha ngokuzenzekelayo incoko yakutshanje xa iphepha lilayishwa naxa iwidget ivulwa, ukuze umxholo ungaze ulahleke xa kujongwa amaphepha ahlukeneyo.
- **Amakhonkco ezenzo zeplugin** — amakhonkco akhawulezayo aya kwi-Settings nakwi-Abilities Registry ngoku avela kwiscreen se-WordPress **Plugins → Installed Plugins** ngezantsi kwenkcazelo yeplugin.

### Kuphuculwe {#improved}

- **Ukuzama kwakhona umthombo womfanekiso** — i-agent ngoku izama kwakhona yonke imithombo yemifanekiso yasimahla emiselweyo ngaphambi kokubuyela kumfanekiso oveliswe yi-AI xa ukukhuphela kusilela.
- **Iphaneli yolwazi lwemodeli** — ihlala ibonakala kwintloko yencoko; ayisafihlwa emva komyalezo wokuqala.
- **Indlela yokuskrola ngokuzenzekelayo** — ukuskrola ngokuzenzekelayo kuyema xa umsebenzisi eskrolela phezulu ukuze afunde; iqhosha elidadayo le-**Skrolela ezantsi** liyavela kwaye liyanyamalala ngokuzenzekelayo xa umsebenzisi efikelela kumyalezo wamva nje.
- **UI ye-Agent Picker** — iyilwe ngokutsha njengongaphezulu lwe-form-table olunee-ayikhoni ze-agent nganye, nto leyo eyenza kube lula ukuchonga nokutshintsha ii-agent ngokukhawuleza.
- **Iziqendu ze-JS ezilayishwa kade** — ibundle yokuqala yeJavaScript yewidget yencoko ngoku yahlulwe yaba ziziqendu ezilayishwa kade, kuncitshiswa ubungakanani beebundle zokuqala nge-75–90%.
- **Uyilo ngokutsha lwewidget yencoko** — i-ayikhoni ye-AI emanyeneyo ithatha indawo ye-avatar yangaphambili eyayilungiselelwe; iyahambelana nenkqubo yee-agent ezakhelwe ngaphakathi.
- **Ukwenziwa kwe-URL ibe likhonkco** — ii-URL ezivela kwimiyalezo yenkqubo nakwiibhamuza zemiyalezo yempazamo ngoku ziboniswa njengamakhonkco acofekayo.

### Kulungisiwe {#fixed}

- **Ukufumaneka kobuchule** — kulungiswe iinkcazelo, izalathiso ze-system prompt, kunye nolungelelwaniso lwe-namespace ukuze bonke ubuchule buvele ngokuthembekileyo kuluhlu lwezixhobo ze-agent.
- **I-cache yababoneleli** — ababoneleli ngoku bagcinwa kwi-cache kwinqanaba lesayithi yonke kusetyenziswa ikhawunta yenguqulelo, kuthintelwa iingxaki zababoneleli abaphelelwe lixesha kwiinethewokhi ze-multisite.
- **`ability_invalid_output`** — isonjululwe kubaphathi bobuchule abali-12; bonke babuyisela iimpendulo ze-JSON ezakhiwe kakuhle.
- **ipayiphlayini ye-`pending_client_tool_calls`** — idityaniswe ukusuka ekuqaleni ukuya ekupheleni ukuze iifowuni zezixhobo kwicala le-client zigqitywe ngokuchanekileyo kwaye zibuyisele iziphumo kwimodeli.
- **Idrowa yembali** — utshintsho olungenakubuyiselwa alufakwanga kuluhlu lokubuyisela; ikhonkco le-**Jonga imbali epheleleyo** ngoku lisebenza ngokuchanekileyo.
- **Inkqubo yotshintsho/yokubuyisela** — iibug ezintlanu ezahlukileyo zilungisiwe kwaye zamanyaniswa phantsi kojongano olutsha lomlawuli.
- **I-toast ye-Save Settings** — isaziso se-snackbar ngoku sivela ngokuthembekileyo emva kokucofa **Save Settings**.
- **Imenyu yomxholo yenkunkuma** — kongezwe ukhetho lwe-**Cima Ngokusisigxina** ukuze izinto zicinywe ngokupheleleyo ngaphandle kokushiya imbono yenkunkuma.
- **Hlela uze uthumele kwakhona** — ukucofa i-ayikhoni yokuhlela ngoku kungena kwimowudi yokuhlela kuphela kumyalezo ocofiweyo, hayi kuyo yonke imiyalezo kuloo msonto.
- **Ubude bolwakhiwo lwencoko** — iphaneli yencoko ilungelelanisa ubude bayo xa umxholo ofakwe yiplugin (izaziso zomlawuli, iibhena) uvela ngaphezulu kwephepha, kuthintelwa indawo yokufaka ekutyhalelweni ngaphandle kwescreen.

---

## 1.4.0 — Ikhutshwe nge-2026-04-09 {#140--released-on-2026-04-09}

### Entsha {#new-1}

- **Umyalelo webenchmark we-WP-CLI** (`wp gratis-ai-agent benchmark`) — uqhuba iseti yovavanyo lwe-Agent Capabilities v1 ukusuka kumgca womyalelo kwiipayiphlayini ze-CI nakwiindlela zomsebenzi zokuvavanya iimodeli. Uxhasa ukuqhubeka ngombuzo ngamnye, ukugqitha ababoneleli/iimodeli, kunye nemveliso ye-JSON/CSV.
- **Iseti yovavanyo lwe-Agent Capabilities v1** — iseti ecwangcisiweyo yee-prompt ezinzima, ezinamanyathelo amaninzi, ezivavanya wonke ummandla wobuchule, kunye nokunika amanqaku nengxelo yeetoken/ubude bexesha.
- **Ubuchule beCustom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Ubhaliso luhlala lukhona emva kokuqalisa kwakhona nge-options table.
- **Ubuchule beCustom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Buxhasa ii-taxonomy ezinehierarchy nezithe tyaba kunye nee-slug zokubhala kwakhona ezikhethwayo.
- **Ubuchule beDesign System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Bubandakanya iipreset ezintlanu ezikhethiweyo: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Ubuchule beGlobal Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Bufunda kwaye bubhala amaxabiso e-theme.json nge-WordPress Global Styles API.
- **Ubuchule bolawulo lweNavigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Buxhasa iimenyu ezingaphakathi kwenye kunye nokwabelwa kwindawo ye-theme.
- **Ubuchule boLawulo lwee-Options** — `get_option`, `set_option`, `delete_option`, `list_options`. Bubandakanya i-blocklist yokhuseleko eyakhelwe ngaphakathi ekhusela ii-options ezibalulekileyo ze-WordPress ekuguqulweni.
- **I-Abilities Registry efakelwayo** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Fumana kwaye uvule iipakethi zobuchule ezisasazwa njengeeplugin ze-WordPress.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Izicwangciso zokwakha isayithi ezinamaphase amaninzi kunye nokufunyanwa kweeplugin, izalathiso zemveliso yamanyathelo, ukulandelela inkqubela, kunye nokubuyisela kwiimpazamo ngokuzenzekelayo.
- **Umbuzo webenchmark wewebhusayithi yerestyu** (`q-restaurant-website`) — uvavanyo oluphela-ekupheleni olugubungela ubhaliso lwe-CPT, inkqubo yoyilo, ukuhamba, kunye nokufunyanwa kweplugin.
- **Iiplugin zokudibanisa ababoneleli be-AI** zongezwe kwiiblueprint ze-WordPress Playground ukuze kusetwe uphuhliso lwasekhaya ngokukhawuleza.

### Kuphuculwe {#improved-1}

- I-README ihlaziywe ngamaxwebhu okudibanisa ababoneleli be-AI kunye nemiyalelo yokuseta.

### Kulungisiwe {#fixed-1}

- Ukusilela kovavanyo lwe-PHPUnit okungama-25 kwibranch ye-`main` kusonjululwe.
- Ifomathi ye-URL yokukhutshwa kwe-GitHub kwi-`blueprint.json` ilungisiwe.
- Ukunombolwa kwakhona kwe-ID yemisebenzi ukuze kuthintelwe ukungqubana nee-ID ezindala.

---

## 1.3.x {#13x}

_Amanqaku okukhutshwa angaphambili agcinwe kwindawo yokugcina yeplugin._
