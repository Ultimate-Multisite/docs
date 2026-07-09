---
title: Dîroka guhertinan
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Tomara guhertinan

## 1.9.0 — Di 2026-04-28 de hate weşandin

### Nû

- **Taybetmendiya `create_contact_form`** — bi karanîna plugin-a formê ya çalak (Contact Form 7, WPForms, Fluent Forms, an Gravity Forms) formekî têkiliyê çêdike û shortcode-ekî amade ji bo danînê di her nivîs an rûpelê de vedigerîne.
- **Taybetmendiya `set_featured_image`** — wêneyekî sereke ji ID-ya pêveka heyî ya Media Library an ji URL-ekî dûr ve ji nivîs an rûpelê re destnîşan dike; dema URL were dayîn wêneyê bixweber tîne hundir.
- **Taybetmendiya `batch_create_posts`** — di bangekî taybetmendiyê de çend nivîsan çêdike. Heman parameterên `create_post` piştgirî dike, serkeftin/têkçûna her nivîsê radigihîne, û moda vebijêrkî ya `stop_on_error` heye.
- **Parametera `page_template`** — li `create_post` û `update_post` hate zêdekirin. Di dema çêkirin an nûkirinê de pelê şablona rûpela PHP (wekî `page-full-width.php`) destnîşan dike. Ji bo vegerandina li xwerûya theme, têlek vala ji `update_post` re derbas bike.
- **Taybetmendiyên wênegirtina aliyê client** — `capture_screenshot`, `compare_screenshots`, û `review_page_design`. Wêneyên tevahî an viewport ên rûpelên zindî bi geroka bê-ser a aliyê server digire, du wêneyan didêre, û nirxandinek sêwiranê ya bi AI diafirîne ku rêzkirin, tîpografî, reng, û gihîştinbarî vedigire.
- **Pênc agent ên navxweyî** — Nivîskarê Naverokê, Avakerê Malperê, Stûdyoya Sêwiranê, Rêvebirê Plugin, û Alîkarê Piştgiriyê. Her agent xwedî komek amûrên taybet, system prompt-ekî li gorî wî, û pêşniyarên destpêkê ye. Bi **Agent Picker**-a nû di sernivîsa chat de dikare were guhartin. Binêre [Agent ên navxweyî](../../user-guide/configuration/built-in-agents).
- **Ala taybetmendiyan** — hilpekî nû ya **Settings → Feature Flags** bi toggle-ên kontrola gihîştinê (sînordarkirin ji bo rêveberan, sînordarkirin ji bo rêveberên torê, gihîştina aboneyan, neçalakirin ji bo ne-endaman) û vebijêrkên branding (veşartina nîşandana jêrîn, navê agent-a taybet, veşartina agent picker, bikaranîna îkona malperê wek avatar-a chat). Binêre [Mîhengên Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Vegerandina danişîna dawî** — niha panelê chatê di barkirina rûpelê û dema vekirina widget de axaftina herî dawî bixweber dîsa bar dike, ji ber vê yekê context di nav gerana rûpelan de winda nabe.
- **Girêdanên çalakiyên plugin** — niha girêdanên bilez bo Settings û Abilities Registry di ekrana WordPress **Plugins → Installed Plugins** de li jêr danasîna plugin xuya dibin.

### Başkirî

- **Dubare hewildana çavkaniya wêneyê** — niha agent berî ku vegere ser wêneyekî bi AI hatî çêkirin, li ser têkçûna dakêşandinê hemû çavkaniyên wêneyên belaş ên mîhengkirî dîsa têdikoşe.
- **Panela agahiyên modelê** — her dem di sernivîsa chat de xuya ye; piştî peyama yekem êdî nayê veşartin.
- **Reftara auto-scroll** — dema bikarhêner ji bo xwendinê ber bi jor ve diçe, auto-scroll raweste; bişkoka hilawistî ya **Here jêrê** xuya dibe û dema bikarhêner bigihîje peyama herî nû bixweber winda dibe.
- **UI-ya Agent Picker** — wekî pêşeka form-table bi îkonên taybet ên her agent hate ji nû ve sêwirandin, da ku naskirin û guhartina agentan bi nihêrînekê hêsantir be.
- **Parçeyên JS ên lazy-loaded** — pakêta JavaScript-a destpêkê ya widget-a chatê niha hatiye dabeşkirin bo parçeyên lazy-loaded, ku mezinahiya pakêta destpêkê bi 75–90% kêm dike.
- **Ji nû ve sêwirandina widget-a chatê** — îkona yekgirtî ya AI şûna avatar-a taybet a berê digire; bi pergala agent-a navxweyî re hevaheng e.
- **Girêdankirina URL** — URL-yên ku di peyamên system û bilbilên peyamên çewtiyê de xuya dibin niha wekî girêdanên klikbar têne nîşandan.

### Sererastkirî

- **Dîtinbarîya taybetmendiyan** — danasîn, referansên system prompt, û hevahengiya namespace hatin sererastkirin da ku hemû taybetmendî bi bawerî di lîsteya amûrên agent de xuya bibin.
- **Cache-a providers** — providers niha bi jimêrkera guhertoyê li seranserê malperê cache dibin, ku pirsgirêkên provider-a kevn li torên multisite asteng dike.
- **`ability_invalid_output`** — di 12 rêvebirên taybetmendiyê de hate çareserkirin; hemû bersivên JSON ên bi avahiya rast vedigerînin.
- **Rêzika `pending_client_tool_calls`** — ji destpêkê heta dawî hate girêdan da ku bangên amûrên aliyê client bi rastî biqedin û encaman ji modelê re vegerînin.
- **Berkêşa dîrokê** — guhertinên neguhêrbar ji lîsteya vegerandinê têne derxistin; girêdana **Dîroka tevahî bibîne** niha bi rastî dixebite.
- **Pergala guhertin/vegerandinê** — pênc bug ên cuda hatin sererastkirin û di bin navrûya nû ya admin de hatin yekgirtin.
- **Toast-a Save Settings** — niha piştî klîkkirina **Save Settings** agahdariya snackbar bi bawerî xuya dibe.
- **Menuya context a zibilê** — vebijêrka **Bi temamî jê bibe** hate zêdekirin da ku tişt bêyî derketin ji dîtina zibilê bi hişkî werin jêbirin.
- **Sererast bike û dîsa bişîne** — niha klîkkirina îkona sererastkirinê tenê ji bo peyama hatî klîkkirin dikeve moda sererastkirinê, ne ji bo hemû peyamên di mijarê de.
- **Bilindahiya rêzkirina chatê** — dema naveroka ku plugin têxe hundir (hişyariyên admin, banner) li jorê rûpelê xuya dibe, panelê chatê bilindahiya xwe li gorî wê diguherîne û nahêle qada têketinê ji ekranê were derxistin.

---

## 1.4.0 — Di 2026-04-09 de hate weşandin

### Nû

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — ji rêzika fermanan ji bo CI pipelines û herikên xebata nirxandina modelan, komika benchmark a Agent Capabilities v1 dimeşîne. Meşandinên per-pirs, guherandinên provider/model, û derana JSON/CSV piştgirî dike.
- **Komika benchmark a Agent Capabilities v1** — komek rêxistî ji promptên tevlihev û pir-qonaxî ye ku hemû qada şiyanê diceribîne, bi pûan dayînê û raporkirina token/demê.
- **Şiyanên Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Tomarkirin bi rêya tabloya options li ser destpêkirinên nû jî dimîne.
- **Şiyanên Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Taxonomyên hiyerarşîk û rast bi rewrite slugên vebijarkî piştgirî dike.
- **Şiyanên Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Pênc presetên bijartî dihewîne: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Şiyanên Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Nirxên theme.json bi rêya WordPress Global Styles API dixwîne û dinivîse.
- **Şiyana rêvebirina Menuya Rêberiyê** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Menuyên nested û tayînkirina cihê theme piştgirî dike.
- **Şiyana Rêvebirina Options** — `get_option`, `set_option`, `delete_option`, `list_options`. Bloklisteke ewlehiyê ya çêkirî dihewîne ku optionsên girîng ên WordPress ji guherandinê diparêze.
- **Registry ya Şiyanên Sazbar** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Pakêtên şiyanê yên wek WordPress plugin hatine belavkirin bibîne û çalak bike.
- **Orkestrasyona Site Builder v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Planên çêkirina siteyê yên pir-qonaxî bi vedîtina plugin, referansên derana gavê, şopandina pêşketinê, û sererastkirina xetaya xweser.
- **Pirsa benchmark a malpera xwaringehê** (`q-restaurant-website`) — ceribandina ji-serî-ta-dawî ku tomarkirina CPT, design system, navigation, û vedîtina plugin digire nav xwe.
- **Pluginên girêdera AI provider** ji bo sazkirina herêmî ya pêşvebirinê ya bileztir li blueprintên WordPress Playground hatin zêdekirin.

### Başkirî

- README bi belgekirina girêdera AI provider û rêwerzên sazkirinê hate nûkirin.

### Çêkirî

- 25 têkçûnên testên PHPUnit li şaxa `main` hatin çareserkirin.
- Forma URL ya weşanên GitHub di `blueprint.json` de hate rastkirin.
- Jimarekariya nû ya IDyên peywiran hate kirin da ku bi IDyên kevn re lihevketin çênebin.

---

## 1.3.x

_Têbînîyên weşanên berê di repository ya plugin de têne parastin._
