---
title: Loga athruithe
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Loga athruithe {#changelog}

## 1.9.0 — Eisithe ar 2026-04-28 {#190--released-on-2026-04-28}

### Nua {#new}

- **cumas `create_contact_form`** — cruthaíonn sé foirm theagmhála ag úsáid an plugin foirme ghníomhaigh (Contact Form 7, WPForms, Fluent Forms, nó Gravity Forms) agus filleann sé shortcode réidh le leabú in aon alt nó leathanach.
- **cumas `set_featured_image`** — sannann sé íomhá aibhsithe d’alt nó do leathanach ó ID ceangaltáin Media Library atá ann cheana nó ó URL cianda; iompórtálann sé an íomhá go huathoibríoch nuair a chuirtear URL ar fáil.
- **cumas `batch_create_posts`** — cruthaíonn sé iliomad alt in aon ghlao cumais amháin. Tacaíonn sé leis na paraiméadair chéanna le `create_post`, tuairiscíonn sé rath/teip de réir ailt, agus tá mód roghnach `stop_on_error` aige.
- **paraiméadar `page_template`** — curtha le `create_post` agus `update_post`. Sannann sé comhad teimpléid leathanaigh PHP (m.sh. `page-full-width.php`) ag am cruthaithe nó nuashonraithe. Cuir teaghrán folamh chuig `update_post` chun filleadh ar réamhshocrú an téama.
- **Cumais seatanna scáileáin ar thaobh an chliaint** — `capture_screenshot`, `compare_screenshots`, agus `review_page_design`. Gabh seatanna scáileáin iomlána nó viewport de leathanaigh bheo trí bhrabhsálaí headless ar thaobh an fhreastalaí, déan comparáid idir dhá sheat scáileáin, agus faigh léirmheas dearaidh ginte ag AI a chlúdaíonn leagan amach, clóghrafaíocht, dath, agus inrochtaineacht.
- **Cúig ghníomhaire ionsuite** — Scríbhneoir Ábhair, Tógálaí Suímh, Stiúideo Dearaidh, Bainisteoir Plugin, agus Cúntóir Tacaíochta. Tá tacar tiomnaithe uirlisí, leid chórais shaincheaptha, agus moltaí tosaigh ag gach gníomhaire. Is féidir aistriú eatarthu tríd an **Roghnóir Gníomhairí** nua i gceanntásc an chomhrá. Féach [Gníomhairí Ionsuite](../../user-guide/configuration/built-in-agents).
- **Bratacha gné** — cluaisín nua **Settings → Bratacha Gné** le scoránaigh rialaithe rochtana (teorannaigh do riarthóirí, teorannaigh do riarthóirí líonra, rochtain síntiúsóirí, díchumasaigh do neamhbhaill) agus roghanna brandála (folaigh sannadh sa bhuntásc, ainm saincheaptha gníomhaire, folaigh roghnóir gníomhairí, úsáid deilbhín an tsuímh mar avatar comhrá). Féach [Socruithe Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Athchóirigh an seisiún deireanach** — athlódálann an painéal comhrá an comhrá is déanaí go huathoibríoch anois ar luchtú leathanaigh agus ar oscailt an ghiúirléid, mar sin ní chailltear comhthéacs riamh thar loingseoireacht leathanaigh.
- **Naisc ghníomhaíochta plugin** — tá naisc thapa chuig Settings agus chuig an gClárlann Cumais le feiceáil anois ar scáileán WordPress **Plugins → Plugins Suiteáilte** faoi thuairisc an plugin.

### Feabhsaithe {#improved}

- **Atriail foinse íomhá** — déanann an gníomhaire atriail anois ar gach foinse íomhá saor in aisce atá cumraithe sula dtiteann sé siar ar íomhá ginte ag AI nuair a theipeann ar íoslódáil.
- **Painéal faisnéise samhla** — infheicthe i gcónaí i gceanntásc an chomhrá; níl sé i bhfolach a thuilleadh tar éis na chéad teachtaireachta.
- **Iompar uathscrollaithe** — stadann uathscrollú nuair a scrollaíonn an t-úsáideoir suas chun léamh; feictear cnaipe ar snámh **Scrollaigh go dtí an bun** agus imíonn sé go huathoibríoch nuair a shroicheann an t-úsáideoir an teachtaireacht is déanaí.
- **Comhéadan Roghnóir Gníomhairí** — athdhearadh é mar fhorleagan tábla foirme le deilbhíní de réir gníomhaire, rud a fhágann gur fusa gníomhairí a aithint agus a athrú ar an toirt.
- **Smutáin JS luchtaithe go leisciúil** — tá beart JavaScript tosaigh an ghiúirléid chomhrá roinnte anois ina smutáin luchtaithe go leisciúil, rud a laghdaíonn méideanna tosaigh an bheartáin faoi 75–90%.
- **Athdhearadh giúirléid chomhrá** — tagann deilbhín aontaithe AI in ionad an avatar shaincheaptha roimhe seo; comhsheasmhach leis an gcóras gníomhairí ionsuite.
- **Nascú URL** — déantar URLanna a bhíonn le feiceáil i dteachtaireachtaí córais agus i mboilgeoga teachtaireachta earráide a rindreáil anois mar naisc inchliceáilte.

### Ceartaithe {#fixed}

- **Infhaighteacht cumais** — ceartaíodh tuairiscí, tagairtí leide córais, agus ailíniú namespace ionas go bhfeictear gach cumas go hiontaofa i liosta uirlisí an ghníomhaire.
- **Taisce soláthraithe** — déantar soláthraithe a thaisceadh anois ar fud an tsuímh trí chuntar leagain, rud a choisceann fadhbanna soláthraithe seanchaite ar líonraí multisite.
- **`ability_invalid_output`** — réitithe thar 12 láimhseálaí cumais; filleann siad ar fad freagraí JSON atá struchtúrtha i gceart.
- **píblíne `pending_client_tool_calls`** — sreangaithe ó cheann ceann ionas go gcríochnaíonn glaonna uirlisí ar thaobh an chliaint i gceart agus go bhfilleann siad torthaí chuig an tsamhail.
- **Tarraiceán staire** — fágtar athruithe nach féidir a aisiompú amach as an liosta aisiompaithe; oibríonn an nasc **Féach an stair iomlán** i gceart anois.
- **Córas athruithe/aisiompaithe** — ceartaíodh cúig fhabht ar leith agus aontaíodh iad faoin gcomhéadan riaracháin nua.
- **Tóstáil Sábháil Settings** — feictear fógra snackbar go hiontaofa anois tar éis cliceáil ar **Sábháil Settings**.
- **Roghchlár comhthéacs bruscair** — cuireadh rogha **Scrios go Buan** leis ionas gur féidir míreanna a scriosadh go crua gan radharc an bhruscair a fhágáil.
- **Cuir in eagar & athsheol** — nuair a chliceáiltear ar an deilbhín eagarthóireachta, téann sé isteach sa mhód eagarthóireachta anois don teachtaireacht chliceáilte amháin, ní do gach teachtaireacht sa snáithe.
- **Airde leagan amach comhrá** — oiriúnaíonn an painéal comhrá a airde nuair a bhíonn ábhar insteallta ag plugin (fógraí riaracháin, meirgeanna) le feiceáil os cionn an leathanaigh, rud a choisceann an limistéar ionchuir ó bheith brúite den scáileán.

---

## 1.4.0 — Eisithe ar 2026-04-09 {#140--released-on-2026-04-09}

### Nua {#new-1}

- **Ordú benchmark WP-CLI** (`wp gratis-ai-agent benchmark`) — ritheann sé sraith benchmark Agent Capabilities v1 ón líne ordaithe do phíblínte CI agus sreafaí oibre measúnaithe samhlacha. Tacaíonn sé le rith in aghaidh na ceiste, sáruithe soláthraí/samhlacha, agus aschur JSON/CSV.
- **Sraith benchmark Agent Capabilities v1** — tacar struchtúrtha de spreagthaí casta, ilchéimeacha a chleachtann dromchla iomlán na cumais, le scóráil agus tuairisciú token/fad ama.
- **Cumais Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Maireann clárúcháin thar atosuithe tríd an tábla roghanna.
- **Cumais Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Tacaíonn sé le tacsanomaíochtaí ordlathacha agus cothroma le slugs athscríofa roghnacha.
- **Cumais Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Áirítear cúig réamhshocrú coimeádta: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Cumais Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Léann agus scríobhann sé luachanna theme.json trí WordPress Global Styles API.
- **Cumas bainistíochta Roghchlár Nascleanúna** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Tacaíonn sé le roghchláir neadaithe agus sannadh suíomh téama.
- **Cumas Bainistíochta Roghanna** — `get_option`, `set_option`, `delete_option`, `list_options`. Áirítear blocliosta sábháilteachta ionsuite a chosnaíonn roghanna criticiúla WordPress ar mhodhnú.
- **Clárlann Cumais Inshuiteáilte** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Faigh amach agus gníomhachtaigh pacáistí cumais a dháiltear mar plugins WordPress.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Pleananna tógála suíomh ilchéimeacha le fionnachtain plugins, tagairtí aschuir céime, rianú dul chun cinn, agus aisghabháil uathrialach ó earráidí.
- **Ceist benchmark suíomh gréasáin bialainne** (`q-restaurant-website`) — tástáil ó cheann ceann a chlúdaíonn clárú CPT, Design System, nascleanúint, agus fionnachtain plugins.
- **Plugins nascóra soláthraí AI** curtha le blueprints WordPress Playground chun socrú forbartha áitiúil níos tapúla a dhéanamh.

### Feabhsaithe {#improved-1}

- Nuashonraíodh README le doiciméadú nascóra soláthraí AI agus treoracha socraithe.

### Ceartaithe {#fixed-1}

- Réitíodh 25 teip tástála PHPUnit ar bhrainse `main`.
- Ceartaíodh formáid URL eisiúintí GitHub in `blueprint.json`.
- Athuimhriú IDanna tascanna chun imbhuailtí le sean-IDanna a sheachaint.

---

## 1.3.x {#13x}

_Coinnítear nótaí eisiúna roimhe seo i stór an plugin._
