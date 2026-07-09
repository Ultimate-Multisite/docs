---
title: Reġistru tal-bidliet
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Reġistru tal-bidliet

## 1.9.0 — Maħruġ fit-2026-04-28

### Ġdid

- **Kapaċità `create_contact_form`** — toħloq formola ta' kuntatt billi tuża l-plugin tal-formoli attiv (Contact Form 7, WPForms, Fluent Forms, jew Gravity Forms) u tirritorna shortcode lest biex jiġi inkorporat fi kwalunkwe post jew paġna.
- **Kapaċità `set_featured_image`** — tassenja immaġni prinċipali lil post jew paġna minn attachment ID eżistenti fil-Media Library jew minn URL remot; timporta l-immaġni awtomatikament meta jiġi pprovdut URL.
- **Kapaċità `batch_create_posts`** — toħloq diversi posts f'sejħa waħda ta' kapaċità. Tappoġġja l-istess parametri bħal `create_post`, tirrapporta suċċess/falliment għal kull post, u għandha modalità fakultattiva `stop_on_error`.
- **Parametru `page_template`** — miżjud ma' `create_post` u `update_post`. Jassenja fajl ta' mudell ta' paġna PHP (eż. `page-full-width.php`) waqt il-ħolqien jew l-aġġornament. Għaddi string vojta lil `update_post` biex terġa' lura għall-default tat-theme.
- **Kapaċitajiet ta' screenshot min-naħa tal-klijent** — `capture_screenshot`, `compare_screenshots`, u `review_page_design`. Aqbad screenshots sħaħ jew tal-viewport ta' paġni live permezz ta' browser headless min-naħa tas-server, qabbel żewġ screenshots, u ikseb reviżjoni tad-disinn iġġenerata mill-AI li tkopri t-tqassim, it-tipografija, il-kulur, u l-aċċessibbiltà.
- **Ħames aġenti integrati** — Kittieb tal-Kontenut, Bennej tas-Sit, Studio tad-Disinn, Maniġer tal-Plugins, u Assistent tal-Appoġġ. Kull agent għandu sett dedikat ta' għodod, system prompt imfassal apposta, u suġġerimenti tal-bidu. Jista' jinbidel permezz tal-**Picker tal-Aġent** il-ġdid fl-header taċ-chat. Ara [Aġenti integrati](../../user-guide/configuration/built-in-agents).
- **Bnadar tal-karatteristiċi** — tab ġdida **Settings → Bnadar tal-Karatteristiċi** b'toggles ta' kontroll tal-aċċess (illimita għall-amministraturi, illimita għall-amministraturi tan-network, aċċess għas-subscribers, iddiżattiva għal dawk li mhumiex members) u għażliet ta' branding (aħbi l-attribuzzjoni tal-footer, isem tal-agent personalizzat, aħbi l-picker tal-agent, uża l-ikona tas-sit bħala avatar taċ-chat). Ara [Settings ta' Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Irrestawra l-aħħar sessjoni** — il-panel taċ-chat issa jerġa' jgħabbi l-aktar konverżazzjoni reċenti awtomatikament meta titgħabba l-paġna u meta jinfetaħ il-widget, sabiex il-kuntest qatt ma jintilef waqt navigazzjonijiet bejn il-paġni.
- **Links ta' azzjoni tal-plugin** — links rapidi għal Settings u r-Reġistru tal-Kapaċitajiet issa jidhru fuq l-iskrin **Plugins → Plugins Installati** ta' WordPress taħt id-deskrizzjoni tal-plugin.

### Imtejjeb

- **Tentattiv mill-ġdid tas-sors tal-immaġni** — l-agent issa jerġa' jipprova s-sorsi kollha ta' immaġnijiet b'xejn konfigurati qabel ma jaqa' lura għal immaġni ġġenerata mill-AI meta jonqos id-download.
- **Panel tal-informazzjoni tal-mudell** — dejjem viżibbli fl-header taċ-chat; ma jibqax moħbi wara l-ewwel messaġġ.
- **Imġiba tal-auto-scroll** — l-auto-scroll jieqaf temporanjament meta l-utent jiskrollja 'l fuq biex jaqra; tidher buttuna f'wiċċ l-ilma **Skrollja sal-qiegħ** u titneħħa awtomatikament meta l-utent jilħaq l-aħħar messaġġ.
- **UI tal-Picker tal-Aġent** — iddisinjata mill-ġdid bħala overlay ta' form-table b'ikoni għal kull agent, u tagħmilha aktar faċli biex tidentifika u tibdel agents mal-ewwel daqqa t'għajn.
- **Biċċiet JS lazy-loaded** — il-bundle inizjali tal-JavaScript tal-widget taċ-chat issa huwa maqsum f'biċċiet lazy-loaded, u jnaqqas id-daqsijiet inizjali tal-bundle b'75–90%.
- **Disinn mill-ġdid tal-widget taċ-chat** — ikona AI unifikata tissostitwixxi l-avatar personalizzat preċedenti; konsistenti mas-sistema tal-agent integrat.
- **Linkifikazzjoni tal-URL** — URLs li jidhru f'messaġġi tas-sistema u bżieżaq ta' messaġġi ta' żball issa jintwerew bħala links li jistgħu jiġu kklikkjati.

### Irranġat

- **Skoperta tal-kapaċitajiet** — id-deskrizzjonijiet, ir-referenzi tas-system prompt, u l-allinjament tan-namespace ġew ikkoreġuti sabiex il-kapaċitajiet kollha jidhru b'mod affidabbli fil-lista tal-għodod tal-agent.
- **Cache tal-providers** — il-providers issa jiġu cached fuq is-sit kollu permezz ta' counter tal-verżjoni, u b'hekk jiġu evitati kwistjonijiet ta' providers skaduti fuq networks multisite.
- **`ability_invalid_output`** — solvuta madwar 12-il handler tal-kapaċitajiet; kollha jirritornaw tweġibiet JSON strutturati kif suppost.
- **Pipeline `pending_client_tool_calls`** — imqabbad minn tarf sa tarf sabiex sejħiet ta' għodod min-naħa tal-klijent jitlestew b'mod korrett u jirritornaw riżultati lill-mudell.
- **Kexxun tal-istorja** — bidliet li ma jistgħux jiġu rritornati lura huma esklużi mil-lista tar-riversjoni; il-link **Ara l-istorja sħiħa** issa jaħdem b'mod korrett.
- **Sistema ta' bidliet/riversjoni** — ħames bugs separati ġew irranġati u unifikati taħt l-interface l-ġdid tal-admin.
- **Toast ta' Save Settings** — in-notifika snackbar issa tidher b'mod affidabbli wara li tikklikkja **Save Settings**.
- **Menu tal-kuntest tat-trash** — miżjuda l-għażla **Ħassar Permanentement** sabiex oġġetti jkunu jistgħu jitħassru b'mod permanenti mingħajr ma titlaq mill-veduta tat-trash.
- **Editja u erġa' ibgħat** — meta tikklikkja l-ikona tal-editjar issa tidħol fil-modalità ta' editjar biss għall-messaġġ ikklikkjat, mhux għall-messaġġi kollha fit-thread.
- **Għoli tat-tqassim taċ-chat** — il-panel taċ-chat jadatta l-għoli tiegħu meta kontenut injettat mill-plugin (avviżi tal-admin, banners) jidher fuq il-paġna, u b'hekk jipprevjeni li ż-żona tal-input tiġi mbuttata barra mill-iskrin.

---

## 1.4.0 — Maħruġ fit-2026-04-09

### Ġdid

- **Kmand benchmark ta' WP-CLI** (`wp gratis-ai-agent benchmark`) — iħaddem is-sett benchmark Agent Capabilities v1 mil-linja tal-kmand għal CI pipelines u flussi tax-xogħol ta' evalwazzjoni tal-mudelli. Jappoġġja tħaddim għal kull mistoqsija, overrides tal-provider/mudell, u output JSON/CSV.
- **Sett benchmark Agent Capabilities v1** — sett strutturat ta' prompts kumplessi u b'ħafna passi li jeżerċitaw il-firxa sħiħa tal-abbiltajiet, b'rapportar ta' punteġġi u tokens/tul ta' żmien.
- **Abbiltajiet Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Ir-reġistrazzjonijiet jibqgħu persistenti bejn restarts permezz tat-tabella tal-options.
- **Abbiltajiet Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Jappoġġja taxonomies ġerarkiċi u ċatti b'slugs rewrite fakultattivi.
- **Abbiltajiet Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Jinkludi ħames presets ikkurati: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Abbiltajiet Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Jaqra u jikteb valuri theme.json permezz tal-WordPress Global Styles API.
- **Abbiltà ta' ġestjoni tan-Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Jappoġġja menus imbejtin u assenjazzjoni tal-post tat-theme.
- **Abbiltà ta' Ġestjoni tal-Options** — `get_option`, `set_option`, `delete_option`, `list_options`. Tinkludi blocklist ta' sigurtà mibnija li tipproteġi options kritiċi ta' WordPress minn modifika.
- **Reġistru ta' Abilitajiet Installabbli** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Skopri u attiva pakketti ta' abbiltajiet imqassma bħala plugins ta' WordPress.
- **Orkestrazzjoni Site Builder v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Pjanijiet ta' bini ta' sit b'ħafna fażijiet b'skoperta ta' plugins, referenzi għall-output tal-passi, traċċar tal-progress, u rkupru awtonomu minn żbalji.
- **Mistoqsija benchmark għal website ta' ristorant** (`q-restaurant-website`) — test minn tarf sa tarf li jkopri reġistrazzjoni ta' CPT, design system, navigazzjoni, u skoperta ta' plugins.
- **Plugins tal-konnetturi tal-provider AI** miżjuda mal-blueprints ta' WordPress Playground għal setup ta' żvilupp lokali aktar mgħaġġel.

### Imtejba

- README aġġornat b'dokumentazzjoni tal-konnetturi tal-provider AI u struzzjonijiet tas-setup.

### Irranġat

- 25 falliment tat-testijiet PHPUnit fuq il-fergħa `main` ġew solvuti.
- Il-format tal-URL tar-rilaxxi ta' GitHub f'`blueprint.json` ġie kkoreġut.
- In-numerazzjoni mill-ġdid tal-ID tal-kompiti biex jiġu evitati kolliżjonijiet ma' IDs qodma.

---

## 1.3.x

_In-noti tar-rilaxxi preċedenti jinżammu fir-repożitorju tal-plugin._
