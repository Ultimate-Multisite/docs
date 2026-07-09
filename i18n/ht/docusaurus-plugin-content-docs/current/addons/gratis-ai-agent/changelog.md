---
title: Jounal chanjman
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Jounal chanjman

## 1.9.0 — Pibliye nan 2026-04-28

### Nouvo

- **`create_contact_form` ability** — kreye yon fòm kontak lè l sèvi ak plugin fòm aktif la (Contact Form 7, WPForms, Fluent Forms, oswa Gravity Forms) epi li retounen yon shortcode ki pare pou entegre nan nenpòt atik oswa paj.
- **`set_featured_image` ability** — bay yon imaj an vedèt pou yon atik oswa paj apati yon ID atachman Media Library ki deja egziste oswa yon URL adistans; li enpòte imaj la otomatikman lè yo bay yon URL.
- **`batch_create_posts` ability** — kreye plizyè atik nan yon sèl apèl ability. Li sipòte menm paramèt ak `create_post`, li rapòte siksè/echèk pou chak atik, epi li gen yon mòd `stop_on_error` opsyonèl.
- **Paramèt `page_template`** — ajoute nan `create_post` ak `update_post`. Li bay yon fichye modèl paj PHP (egz. `page-full-width.php`) nan moman kreyasyon oswa mizajou. Pase yon chèn vid bay `update_post` pou retounen sou defo theme nan.
- **Ability ekran-kaptire bò kliyan** — `capture_screenshot`, `compare_screenshots`, ak `review_page_design`. Pran ekran-kaptire konplè oswa viewport paj vivan yo atravè yon navigatè san tèt bò sèvè, konpare de ekran-kaptire, epi jwenn yon revizyon konsepsyon AI jenere ki kouvri layout, tipografi, koulè, ak aksesibilite.
- **Senk agents entegre** — Content Writer, Site Builder, Design Studio, Plugin Manager, ak Support Assistant. Chak agent gen yon seri zouti dedye, yon system prompt adapte, ak sijesyon pou kòmanse. Ou ka chanje yo atravè nouvo **Agent Picker** nan antèt chat la. Gade [Agents entegre](../../user-guide/configuration/built-in-agents).
- **Feature flags** — nouvo onglet **Settings → Feature Flags** ak bouton kontwòl aksè (limite pou administratè, limite pou administratè rezo, aksè abòne, dezaktive pou moun ki pa manm) ak opsyon mak (kache atribisyon pye paj, non agent pèsonalize, kache agent picker, sèvi ak ikòn site la kòm avatè chat). Gade [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Retabli dènye sesyon an** — panèl chat la kounye a rechaje konvèsasyon ki pi resan an otomatikman lè paj la chaje ak lè widget la ouvri, konsa kontèks pa janm pèdi pandan navigasyon paj.
- **Lyen aksyon plugin** — lyen rapid pou Settings ak Abilities Registry kounye a parèt sou ekran WordPress **Plugins → Installed Plugins** anba deskripsyon plugin nan.

### Amelyore

- **Re-esè sous imaj** — agent la kounye a re-eseye tout sous imaj gratis ki konfigire yo anvan li retounen sou yon imaj AI jenere lè telechajman echwe.
- **Panèl enfòmasyon modèl** — toujou vizib nan antèt chat la; li pa kache ankò apre premye mesaj la.
- **Konpòtman oto-defile** — oto-defile pran poz lè itilizatè a defile monte pou li; yon bouton k ap flote **Defile rive anba** parèt epi li disparèt otomatikman lè itilizatè a rive nan dènye mesaj la.
- **UI Agent Picker** — reamenaje kòm yon kouvèti form-table ak ikòn pou chak agent, sa ki fè li pi fasil pou idantifye epi chanje agents yon sèl kout je.
- **Moso JS ki chaje an reta** — pake JavaScript inisyal widget chat la kounye a divize an moso ki chaje an reta, sa ki diminye gwosè pake inisyal yo pa 75–90%.
- **Reamenajman widget chat** — ikòn AI inifye ranplase avatè pèsonalize anvan an; li konsistan ak sistèm agent entegre a.
- **Konvèsyon URL an lyen** — URL ki parèt nan mesaj sistèm ak boul mesaj erè yo kounye a rann kòm lyen klike.

### Korije

- **Dekouvrabilite ability** — korije deskripsyon, referans system prompt, ak aliyman namespace pou tout abilities parèt nan lis zouti agent la yon fason fyab.
- **Kach providers** — providers yo kounye a mete an kach pou tout site la atravè yon kontè vèsyon, sa ki anpeche pwoblèm providers ki demode sou rezo multisite.
- **`ability_invalid_output`** — rezoud atravè 12 jesyonè ability; tout retounen repons JSON ki byen estriktire.
- **Pipeline `pending_client_tool_calls`** — konekte bout-an-bout pou apèl zouti bò kliyan yo fini kòrèkteman epi retounen rezilta bay modèl la.
- **Tiwa istorik** — chanjman ki pa ka retounen yo eskli nan lis retou a; lyen **Gade tout istorik la** kounye a fonksyone kòrèkteman.
- **Sistèm chanjman/retou** — senk ensèk separe korije epi inifye anba nouvo koòdone admin nan.
- **Toast Save Settings** — notifikasyon snackbar kounye a parèt yon fason fyab apre ou klike **Save Settings**.
- **Meni kontèks fatra** — ajoute opsyon **Efase nèt ale** pou eleman yo ka efase definitivman san yo pa kite vi fatra a.
- **Modifye & revoye** — lè ou klike ikòn modifye a, li kounye a antre nan mòd modifye sèlman pou mesaj ou klike a, pa pou tout mesaj nan fil la.
- **Wotè layout chat** — panèl chat la adapte wotè li lè kontni plugin mete (avi admin, banyè) parèt anlè paj la, sa ki anpeche zòn antre a pouse deyò ekran an.

---

## 1.4.0 — Pibliye nan 2026-04-09

### Nouvo

- **Kòmand benchmark WP-CLI** (`wp gratis-ai-agent benchmark`) — lanse seri benchmark Agent Capabilities v1 la depi liy kòmand lan pou CI pipelines ak workflow evalyasyon modèl. Li sipòte egzekisyon pa kesyon, ranplasman provider/modèl, ak pwodiksyon JSON/CSV.
- **Seri benchmark Agent Capabilities v1** — yon seri estriktire prompt konplèks ak plizyè etap ki teste tout sifas kapasite a, avèk nòt ak rapò token/dire.
- **Kapasite Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Anrejistreman yo pèsiste atravè rekòmansman gras ak tablo opsyon yo.
- **Kapasite Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Li sipòte taksonomi yerachik ak plat avèk slug rewrite opsyonèl.
- **Kapasite Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Gen ladan senk preset chwazi: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Kapasite Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Li li epi ekri valè theme.json atravè WordPress Global Styles API.
- **Kapasite jesyon Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Li sipòte meni anndan meni ak asiyasyon kote theme.
- **Kapasite Options Management** — `get_option`, `set_option`, `delete_option`, `list_options`. Gen ladan yon blocklist sekirite entegre ki pwoteje opsyon WordPress kritik kont modifikasyon.
- **Rejis Abilities ki ka enstale** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Dekouvri epi aktive pake kapasite yo distribye kòm plugin WordPress.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Plan konstriksyon sit ak plizyè faz, ak dekouvèt plugin, referans pwodiksyon etap, swivi pwogrè, ak rekiperasyon erè otonòm.
- **Kesyon benchmark sit entènèt restoran** (`q-restaurant-website`) — tès bout-an-bout ki kouvri anrejistreman CPT, design system, navigasyon, ak dekouvèt plugin.
- **Plugin konektè provider AI** ajoute nan blueprint WordPress Playground pou konfigirasyon devlopman lokal pi rapid.

### Amelyore

- README mete ajou ak dokimantasyon konektè provider AI ak enstriksyon konfigirasyon.

### Korije

- 25 echèk tès PHPUnit sou branch `main` rezoud.
- Fòma URL GitHub releases nan `blueprint.json` korije.
- Renimerotasyon ID travay pou evite kolizyon ak ansyen ID yo.

---

## 1.3.x

_Nòt vèsyon anvan yo konsève nan depo plugin nan._
