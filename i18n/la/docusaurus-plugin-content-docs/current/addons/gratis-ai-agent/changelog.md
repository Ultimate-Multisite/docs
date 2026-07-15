---
title: Index Mutationum
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Index mutationum

## 1.9.0 — Editum die 2026-04-28 {#190--released-on-2026-04-28}

### Nova {#new}

- **`create_contact_form` facultas** — formulam contactus creat utens activo formae plugin (Contact Form 7, WPForms, Fluent Forms, aut Gravity Forms) et reddit shortcode paratum inseri in quamlibet publicationem aut paginam.
- **`set_featured_image` facultas** — imaginem eminentem publicationi aut paginae attribuit ex exsistente Media Library attachment ID aut remoto URL; imaginem automatice importat cum URL praebetur.
- **`batch_create_posts` facultas** — multiplices publicationes uno facultatis vocatu creat. Eosdem parametros sustinet ac `create_post`, prosperitatem/defectum pro singulis publicationibus refert, et modum optionalem `stop_on_error` habet.
- **`page_template` parameter** — additus est ad `create_post` et `update_post`. Fasciculum exemplaris paginae PHP (exempli gratia `page-full-width.php`) tempore creationis aut renovationis attribuit. Transmitte catenam vacuam ad `update_post` ut ad praedefinitum themae revertaris.
- **Facultates imaginum tegimenti ex parte clientis** — `capture_screenshot`, `compare_screenshots`, et `review_page_design`. Imagines tegimenti plenas aut viewport paginarum vivarum per navigatrum sine capite ex parte ministri capiunt, duas imagines tegimenti comparant, et censuram consilii ab AI generatam accipiunt quae dispositionem, typographiam, colorem, et accessibilitatem complectitur.
- **Quinque agentes inclusi** — Content Writer, Site Builder, Design Studio, Plugin Manager, et Support Assistant. Unusquisque agens proprium instrumentorum corpus, monitum systematis accommodatum, et suggestiones initiales habet. Per novum **Agent Picker** in capite colloquii commutabilis. Vide [Agentes inclusi](../../user-guide/configuration/built-in-agents).
- **Vexilla proprietatum** — nova tabula **Settings → Feature Flags** cum commutatoribus moderaminis accessus (ad administratores restringere, ad administratores retis restringere, accessum subscriptoris, pro non-sodalibus inhabilitare) et optionibus insignitionis (attributionem pedis abscondere, nomen agentis proprium, agentis selectorem abscondere, iconem situs uti ut avatar colloquii). Vide [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Ultimam sessionem restituere** — tabula colloquii nunc recentissimum colloquium automatice in onere paginae et in apertione widget reonerat, ita contextus numquam amittitur inter navigationes paginarum.
- **Nexus actionum plugin** — nexus celeres ad Settings et ad Registrum Facultatum nunc apparent in WordPress velo **Plugins → Installed Plugins** infra descriptionem plugin.

### Emendata {#improved}

- **Iteratio fontis imaginum** — agens nunc omnes configuratos fontes imaginum gratuitos iterum temptat antequam ad imaginem ab AI generatam recidat, si deoneratio deficit.
- **Tabula informationis exemplaris** — semper visibilis in capite colloquii; non iam post primum nuntium absconditur.
- **Mores auto-volutationis** — auto-volutatio sistitur cum usor sursum volvitur ad legendum; fluitans puga **Volvere ad imum** apparet et automatice dimittitur cum usor ad novissimum nuntium pervenit.
- **Agent Picker UI** — denuo designatum est ut superpositio tabulae formularis cum iconibus pro singulis agentibus, quo facilius agentes statim agnosci et commutari possint.
- **Partes JS tarde oneratae** — fasciculus initialis JavaScript widget colloquii nunc in partes tarde oneratas dividitur, magnitudines fasciculi initialis 75–90% minuens.
- **Redesignatio widget colloquii** — icon AI unificata priorem avatar proprium substituit; cum systemate agentium inclusorum congruens.
- **Conversio URL in nexus** — URL quae in nuntiis systematis et bullis nuntiorum erroris apparent nunc redduntur ut nexus clicabiles.

### Correcta {#fixed}

- **Reperiabilitas facultatum** — descriptiones, relationes moniti systematis, et congruentia namespace correcta sunt, ut omnes facultates in indice instrumentorum agentis fideliter appareant.
- **Cache praebitorum** — praebitores nunc per numeratorem versionis per totum situm servantur, difficultates praebitorum obsoletorum in retibus multisitus prohibentes.
- **`ability_invalid_output`** — per 12 tractatores facultatum solutum est; omnes responsa JSON recte structa reddunt.
- **`pending_client_tool_calls` ductus** — ab initio ad finem conexus est, ut vocationes instrumentorum ex parte clientis recte compleantur et eventus ad exemplar reddant.
- **Scrinium historiae** — mutationes non revertibiles e indice revertendi excluduntur; nexus **Videre historiam plenam** nunc recte operatur.
- **Systema mutationum/reversionis** — quinque errores separati correcti et sub novo interfacie administratoris unificati sunt.
- **Nuntium Save Settings** — notificatio snackbar nunc fideliter apparet postquam **Save Settings** premitur.
- **Menu contextus purgamentorum** — optio **Delere perpetuo** addita est, ut res penitus deleri possint sine visu purgamentorum relinquendo.
- **Recensere et iterum mittere** — iconem recensionis premere nunc modum recensionis ingreditur solum pro nuntio presso, non pro omnibus nuntiis in filo.
- **Altitudo dispositionis colloquii** — tabula colloquii altitudinem suam accommodat cum contentum a plugin injectum (monitiones administratoris, vexilla) supra paginam apparet, impediens ne area input extra tegimentum propellatur.

---

## 1.4.0 — Editum die 2026-04-09 {#140--released-on-2026-04-09}

### Nova {#new-1}

- **Mandatum WP-CLI ad mensuram exploratoriam** (`wp gratis-ai-agent benchmark`) — seriem exploratoriam Agent Capabilities v1 ex linea mandatorum pro meatibus CI et rationibus aestimationis exemplorum currit. Sustinet cursus per singulas quaestiones, mutationes provisoris/exempli, atque exitum JSON/CSV.
- **Series exploratoria Agent Capabilities v1** — ordinata congeries suggestionum implicatarum et plurium graduum, quae totam superficiem facultatum exercet, cum aestimatione et relatione de token/duratione.
- **Facultates Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Registrationes per restitutiones permanent per tabulam optionum.
- **Facultates Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Sustinet taxonomias hierarchicas et planas cum slugibus optionalibus ad rescribendum.
- **Facultates Systematis Designationis** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Complectitur quinque praedefinita selecta: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Facultates Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Valores theme.json per WordPress Global Styles API legit et scribit.
- **Facultas administrationis Menu Navigationis** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Sustinet menus nidulatos et assignationem loci thematis.
- **Facultas Administrationis Optionum** — `get_option`, `set_option`, `delete_option`, `list_options`. Complectitur inclusam indicem interclusorium securitatis, quae optiones criticas WordPress a modificatione protegit.
- **Registrum Facultatum Installabilium** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Reperi et activa fasciculos facultatum ut WordPress plugins distributos.
- **Orchestratio Structoris Situs v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Consilia constructionis situs plurium phasium cum inventione pluginorum, relationibus exitus graduum, vestigatione progressionis, et recuperatione errorum autonoma.
- **Quaestio exploratoria situs interretialis cauponae** (`q-restaurant-website`) — probatio ab initio ad finem, registrationem CPT, systema designationis, navigationem, et inventionem pluginorum tegens.
- **Pluginorum conectorum provisoris AI** ad WordPress Playground blueprints addita sunt ad celeriorem praeparationem evolutionis localis.

### Emendatum {#improved-1}

- README renovatum cum documentis conectorum provisoris AI et instructionibus praeparationis.

### Correctum {#fixed-1}

- 25 defectus probationum PHPUnit in ramo `main` soluti.
- Forma URL emissionum GitHub in `blueprint.json` correcta.
- Renumeratio ID munerum ad collisiones cum antiquis ID vitandas.

---

## 1.3.x {#13x}

_Notae emissionum priorum in repositorio plugin servantur._
