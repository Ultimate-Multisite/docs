---
title: Loga nan atharrachaidhean
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Loga atharrachaidhean

## 1.9.0 — Foillsichte air 2026-04-28

### Ùr

- **comas `create_contact_form`** — cruthaichidh e foirm-conaltraidh a’ cleachdadh a’ phlugain fhoirmichean ghnìomhaich (Contact Form 7, WPForms, Fluent Forms, no Gravity Forms) agus tillidh e shortcode deiseil ri fhighe a-steach ann am post no duilleag sam bith.
- **comas `set_featured_image`** — sònraichidh e dealbh nochdaidh do phost no duilleag bho ID ceanglachain a tha ann mu thràth ann an Leabharlann nam Meadhanan no bho URL iomallach; ion-phortaichidh e an dealbh gu fèin-obrachail nuair a thèid URL a thoirt seachad.
- **comas `batch_create_posts`** — cruthaichidh e iomadh post ann an aon ghairm comais. Tha e a’ cur taic ris na h-aon pharamadairean ri `create_post`, ag aithris soirbheachas/fàiligeadh airson gach post, agus tha modh roghainneil `stop_on_error` aige.
- **paramadair `page_template`** — air a chur ri `create_post` agus `update_post`. Sònraichidh e faidhle teamplaid duilleige PHP (m.e. `page-full-width.php`) aig àm cruthachaidh no ùrachaidh. Cuir seachad sreang fhalamh gu `update_post` gus tilleadh gu bun-roghainn a’ theme.
- **Comasan glacadh-sgrìn taobh a’ chliant** — `capture_screenshot`, `compare_screenshots`, agus `review_page_design`. Glac seallaidhean-sgrìn slàna no viewport de dhuilleagan beò tro bhrabhsair gun cheann air taobh an fhrithealaiche, dèan coimeas eadar dà shealladh-sgrìn, agus faigh lèirmheas dealbhaidh a ghineadh le AI a tha a’ còmhdach cruth, clò-sgrìobhadh, dath, agus ruigsinneachd.
- **Còig àidseantan togte** — Sgrìobhadair Susbaint, Togail Làraich, Stiùidio Dealbhaidh, Manaidsear Phlugain, agus Neach-taic Taice. Tha seata innealan sònraichte, system prompt air a ghnàthachadh, agus molaidhean tòiseachaidh aig gach àidseant. Gabhaidh atharrachadh tron **Taghadair Àidseant** ùr ann am bann-cinn a’ chat. Faic [Àidseantan Togte](../../user-guide/configuration/built-in-agents).
- **Brataichean feart** — taba ùr **Roghainnean → Brataichean Feart** le suidsichean smachd-ruigsinneachd (cuir bacadh gu rianairean, cuir bacadh gu rianairean lìonraidh, ruigsinneachd do luchd-fo-sgrìobhaidh, cuir à comas do neo-bhuill) agus roghainnean branndachaidh (falaich iomradh buileachaidh sa bhonn, ainm àidseint gnàthaichte, falaich taghadair an àidseint, cleachd ìomhaigh an làraich mar avatar a’ chat). Faic [Roghainnean Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Aisig an seisean mu dheireadh** — tha pannal a’ chat a-nis ag ath-luchdadh a’ chòmhraidh as ùire gu fèin-obrachail nuair a luchdaichear an duilleag agus nuair a dh’fhosglas am widget, agus mar sin cha tèid co-theacsa a chall tuilleadh eadar seòladh dhuilleagan.
- **Ceanglaichean gnìomh a’ phlugain** — nochdaidh ceanglaichean luatha gu Roghainnean agus Clàr nan Comasan a-nis air sgrìn **Plugain → Plugain Stàlaichte** WordPress fo thuairisgeul a’ phlugain.

### Leasaichte

- **Ath-fheuchainn tùs dhealbhan** — feuchaidh an t-àidseant a-nis ris a h-uile tùs dhealbhan an-asgaidh a chaidh a rèiteachadh mus tuit e air ais gu dealbh a ghineadh le AI ma dh’fhàillig an luchdadh a-nuas.
- **Pannal fiosrachaidh a’ mhodail** — an-còmhnaidh ri fhaicinn ann am bann-cinn a’ chat; chan eil e falaichte tuilleadh às dèidh a’ chiad teachdaireachd.
- **Giùlan fèin-sgrolaidh** — stadaidh fèin-sgroladh nuair a sgrolaicheas an cleachdaiche suas airson leughadh; nochdaidh putan fleòdraidh **Sgrolaich chun a’ bhonn** agus falbhaidh e gu fèin-obrachail nuair a ruigeas an cleachdaiche an teachdaireachd as ùire.
- **UI an Taghadair Àidseant** — ath-dhealbhaichte mar thar-chòmhdach clàr-foirm le ìomhaighean airson gach àidseant, ga dhèanamh nas fhasa àidseantan aithneachadh agus atharrachadh sa bhad.
- **Pìosan JS air an luchdadh gu leisg** — tha pasgan JavaScript tùsail widget a’ chat a-nis air a roinn ann am pìosan air an luchdadh gu leisg, a’ lùghdachadh meudan nam pasganan tùsail le 75–90%.
- **Ath-dhealbhadh widget a’ chat** — tha ìomhaigh AI aonaichte a’ cur an àite an avatar ghnàthaichte a bh’ ann roimhe; co-chòrdail ris an t-siostam àidseantan togte.
- **Dèanamh cheanglaichean de URLan** — tha URLan a nochdas ann an teachdaireachdan siostaim agus builgeanan teachdaireachd mearachd a-nis air an taisbeanadh mar cheanglaichean a ghabhas briogadh.

### Ceartaichte

- **So-ruigsinneachd nan comasan** — chaidh tuairisgeulan, iomraidhean system prompt, agus co-thaobhadh namespace a cheartachadh gus am bi a h-uile comas a’ nochdadh ann an liosta innealan an àidseint gu earbsach.
- **Tasgadan sholaraichean** — tha solaraichean a-nis air an tasgadh air feadh an làraich tro chunntair tionndaidh, a’ cur casg air duilgheadasan sholaraichean seann-fhasanta air lìonraidhean multisite.
- **`ability_invalid_output`** — air fhuasgladh thar 12 làimhseachairean comais; tillidh iad uile freagairtean JSON le structar ceart.
- **pìob-loidhne `pending_client_tool_calls`** — ceangailte bho cheann gu ceann gus am bi gairmean innealan taobh a’ chliant a’ crìochnachadh gu ceart agus a’ tilleadh toraidhean don mhodail.
- **Drathair eachdraidh** — tha atharrachaidhean nach gabh tilleadh air an dùnadh a-mach bhon liosta tilleadh; tha an ceangal **Seall an eachdraidh slàn** a-nis ag obair gu ceart.
- **Siostam atharrachaidhean/tilleadh** — còig bugaichean fa leth air an càradh agus air an aonachadh fon eadar-aghaidh rianachd ùr.
- **Toast Sàbhail Roghainnean** — nochdaidh fios snackbar a-nis gu earbsach às dèidh briogadh air **Sàbhail Roghainnean**.
- **Clàr-taice co-theacsa an sgudail** — chaidh roghainn **Sguab às gu buan** a chur ris gus an gabh nithean a dhubhadh às gu cruaidh gun a bhith a’ fàgail sealladh an sgudail.
- **Deasaich is cuir a-rithist** — nuair a bhriogar air ìomhaigh an deasachaidh, thèid modh deasachaidh a chur an gnìomh a-nis a-mhàin airson na teachdaireachd air an deach briogadh, chan ann airson a h-uile teachdaireachd san t-snàithlean.
- **Àirde cruth a’ chat** — atharraichidh pannal a’ chat an àirde aige nuair a nochdas susbaint a chuir plugan a-steach (brathan rianachd, brataichean) os cionn na duilleige, a’ cur casg air raon an ion-chuir bho bhith air a phutadh far na sgrìn.

---

## 1.4.0 — Foillsichte air 2026-04-09

### Ùr

- **Àithne tomhais-luinge WP-CLI** (`wp gratis-ai-agent benchmark`) — ruithidh i pasgan tomhais-luinge Agent Capabilities v1 bhon loidhne-àithne airson CI pipelines agus sruthan-obrach measaidh mhodalan. Tha i a’ cur taic ri ruith a rèir ceist, tar-sgrìobhadh solaraiche/modail, agus às-chur JSON/CSV.
- **Pasgan tomhais-luinge Agent Capabilities v1** — seata structaraichte de phromptan iom-fhillte, ioma-cheumach a chleachdas uachdar làn-chomais, le sgòradh agus aithris token/fad-ùine.
- **Comasan Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Mairidh clàraidhean thar ath-thòiseachadh tron chlàr roghainnean.
- **Comasan Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Tha taic ri taxonomies rangach agus còmhnard le rewrite slugs roghainneil.
- **Comasan Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. A’ gabhail a-steach còig ro-shuidhichidhean taghte: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Comasan Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Leughaidh agus sgrìobhaidh iad luachan theme.json tro WordPress Global Styles API.
- **Comas stiùiridh clàr-seòlaidh Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Tha taic ri clàir-taice neadaichte agus sònrachadh ionad theme.
- **Comas stiùiridh Options** — `get_option`, `set_option`, `delete_option`, `list_options`. A’ gabhail a-steach liosta-bacaidh sàbhailteachd togte a dhìonas roghainnean WordPress deatamach bho atharrachadh.
- **Clàr Installable Abilities** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Lorg agus cuir an gnìomh pacaidean comais air an sgaoileadh mar WordPress plugins.
- **Co-òrdanachadh Site Builder v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Planaichean togail làraich ioma-ìre le lorg plugin, iomraidhean air às-chur cheumannan, tracadh adhartais, agus fèin-ath-bheothachadh bho mhearachdan.
- **Ceist tomhais-luinge làrach-lìn taigh-bìdh** (`q-restaurant-website`) — deuchainn deireadh-gu-deireadh a’ còmhdach clàradh CPT, design system, seòladh, agus lorg plugin.
- **Plugins ceangail solaraiche AI** air an cur ri WordPress Playground blueprints airson rèiteachadh leasachaidh ionadail nas luaithe.

### Leasaichte

- README air ùrachadh le sgrìobhainnean ceangail solaraiche AI agus stiùireadh rèiteachaidh.

### Ceartaichte

- 25 fàilligidhean deuchainn PHPUnit air meur `main` air am fuasgladh.
- Cruth URL sgaoilidhean GitHub ann an `blueprint.json` air a cheartachadh.
- Ath-àireamhachadh IDan ghnìomhan gus còmhstrithean le seann IDan a sheachnadh.

---

## 1.3.x

_Tha notaichean sgaoilidh roimhe gan cumail ann an tasglann a’ plugin._
