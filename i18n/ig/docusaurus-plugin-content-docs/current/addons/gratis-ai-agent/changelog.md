---
title: Ndekọ mgbanwe
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Ndekọ mgbanwe

## 1.9.0 — E wepụtara na 2026-04-28

### Ọhụrụ

- **ikike `create_contact_form`** — na-emepụta fọm kọntaktị site n'iji plugin fọm na-arụ ọrụ (Contact Form 7, WPForms, Fluent Forms, ma ọ bụ Gravity Forms) ma weghachite shortcode dị njikere itinye n'ime post ma ọ bụ peeji ọ bụla.
- **ikike `set_featured_image`** — na-ekenye onyonyo pụtara ìhè nye post ma ọ bụ peeji site na attachment ID dị na Media Library ma ọ bụ URL dịpụrụ adịpụ; na-ebubata onyonyo ahụ na-akpaghị aka mgbe e nyere URL.
- **ikike `batch_create_posts`** — na-emepụta ọtụtụ post n'otu oku ikike. Na-akwado otu parameters dị ka `create_post`, na-akọ ihe ịga nke ọma/ọdịda nke post ọ bụla, ma nwee mode `stop_on_error` nhọrọ.
- **parameter `page_template`** — agbakwunyere na `create_post` na `update_post`. Na-ekenye faịlụ PHP page template (dịka `page-full-width.php`) n'oge imepụta ma ọ bụ mmelite. Nyefee eriri efu na `update_post` iji laghachi na ndabara theme.
- **Ikike screenshot n'akụkụ client** — `capture_screenshot`, `compare_screenshots`, na `review_page_design`. Were screenshots zuru ezu ma ọ bụ viewport nke peeji ndị dị ndụ site na ihe nchọgharị headless n'akụkụ server, tụnyere screenshots abụọ, ma nweta nyocha imewe nke AI mepụtara nke na-ekpuchi nhazi, typography, agba, na accessibility.
- **Agents ise etinyere n'ime** — Content Writer, Site Builder, Design Studio, Plugin Manager, na Support Assistant. Agent ọ bụla nwere ngwá ọrụ pụrụ iche, system prompt ahaziri, na aro mmalite. A pụrụ ịgbanwe site na **Agent Picker** ọhụrụ dị na isi chat. Lee [Agents etinyere n'ime](../../user-guide/configuration/built-in-agents).
- **Feature flags** — taabụ **Settings → Feature Flags** ọhụrụ nwere toggles njikwa ohere (gbochie naanị ndị administrators, gbochie naanị network admins, ohere subscriber, gbanyụọ maka ndị na-abụghị members) na nhọrọ branding (zoo attribution footer, aha agent nke omenala, zoo agent picker, jiri akara ngosi saịtị dị ka avatar chat). Lee [Settings Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Weghachite session ikpeazụ** — panel chat ugbu a na-ebunye mkparịta ụka kacha ọhụrụ na-akpaghị aka mgbe peeji na-ebunye na mgbe widget meghere, ka context ghara ịla n'iyi n'etiti ịgagharị peeji.
- **Njikọ omume plugin** — njikọ ngwa ngwa gaa Settings na Abilities Registry ugbu a na-apụta na ihuenyo WordPress **Plugins → Installed Plugins** n'okpuru nkọwa plugin.

### Emelitere

- **Nnwale ọzọ maka isi iyi onyonyo** — agent ugbu a na-anwale ọzọ isi iyi onyonyo efu niile ahaziri tupu ọ laghachi na onyonyo AI mepụtara mgbe nbudata dara.
- **Panel ozi model** — na-apụta mgbe niile n'isi chat; anaghịzi ezobe mgbe ozi mbụ gasịrị.
- **Omume auto-scroll** — auto-scroll na-akwụsịtụ mgbe onye ọrụ na-agagharị elu iji gụọ; bọtịnụ na-efegharị **Gaa na ala** na-apụta ma na-apụ na-akpaghị aka mgbe onye ọrụ ruru ozi kachasị ọhụrụ.
- **UI Agent Picker** — emezigharịrị ya dị ka overlay form-table nwere icons maka agent ọ bụla, na-eme ka ọ dị mfe ịmata ma gbanwee agents n'otu nlele.
- **JS chunks ebugoro nwayọọ** — bundle JavaScript mbụ nke chat widget ugbu a kewara n'ime chunks a na-ebunye nwayọọ, na-ebelata nha bundle mbụ site na 75–90%.
- **Ndezigharị chat widget** — akara ngosi AI jikọtara ọnụ dochiri avatar omenala gara aga; kwekọrọ na usoro agent etinyere n'ime.
- **Ime URL ka ọ bụrụ njikọ** — URL ndị na-apụta na ozi system na bubbles ozi njehie ugbu a na-egosi dị ka njikọ a pụrụ ịpị.

### Edoziri

- **Ịchọta ikike** — edoziwo nkọwa, ntụaka system prompt, na nhazi namespace ka ikike niile pụta na ndepụta ngwá ọrụ agent n'enweghị ntụpọ.
- **Cache providers** — providers ugbu a na-echekwara cache n'ofe saịtị site na counter version, na-egbochi nsogbu stale-provider na netwọk multisite.
- **`ability_invalid_output`** — edoziwo n'ofe 12 ability handlers; ha niile na-eweghachite nzaghachi JSON ahaziri nke ọma.
- **Pipeline `pending_client_tool_calls`** — ejikọtala ya site na mmalite ruo ọgwụgwụ ka oku ngwá ọrụ n'akụkụ client mechaa nke ọma ma weghachite nsonaazụ na model.
- **Drawer akụkọ ihe mere eme** — ewepụla mgbanwe ndị a na-apụghị ịlaghachi na ndepụta revert; njikọ **Lelee akụkọ ihe mere eme zuru ezu** ugbu a na-arụ ọrụ nke ọma.
- **Usoro mgbanwe/revert** — edoziwo njehie ise dị iche iche ma jikọta ha n'okpuru admin interface ọhụrụ.
- **Toast Save Settings** — ngosi snackbar ugbu a na-apụta n'enweghị ntụpọ mgbe apịrị **Save Settings**.
- **Context menu Trash** — agbakwunyere nhọrọ **Hichapụ kpamkpam** ka e wee nwee ike ihichapụ ihe kpamkpam n'enweghị ịhapụ trash view.
- **Dezie & zipụ ọzọ** — ịpị akara ngosi edit ugbu a na-abanye mode edit naanị maka ozi a pịrị, ọ bụghị ozi niile dị na thread.
- **Ogologo nhazi chat** — panel chat na-ahazi ogo ya mgbe ọdịnaya plugin tinyere (admin notices, banners) pụtara n'elu peeji, na-egbochi mpaghara ntinye ka a ghara ịkwapụ ya n'èzí ihuenyo.

---

## 1.4.0 — E wepụtara na 2026-04-09

### Ọhụrụ

- **Iwu benchmark WP-CLI** (`wp gratis-ai-agent benchmark`) — na-agba suite benchmark Agent Capabilities v1 site na command line maka CI pipelines na usoro ọrụ nyocha model. Na-akwado ịgba kwa-ajụjụ, mgbanwe provider/model, na mmepụta JSON/CSV.
- **Suite benchmark Agent Capabilities v1** — nchịkọta ahaziri nke prompts mgbagwoju anya, nwere ọtụtụ nzọụkwụ, nke na-anwale oke ikike niile, yana akara na mkpesa token/oge.
- **Ikike Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Ndebanye na-adịgide n’etiti ịmalitegharị site na tebụl options.
- **Ikike Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Na-akwado taxonomies hierarchical na flat nwere rewrite slugs nhọrọ.
- **Ikike Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Gụnyere presets ise a họpụtara nke ọma: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Ikike Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Na-agụ ma na-ede ụkpụrụ theme.json site na WordPress Global Styles API.
- **Ikike njikwa Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Na-akwado menus nwere nesting na ikenye ebe theme.
- **Ikike Options Management** — `get_option`, `set_option`, `delete_option`, `list_options`. Gụnyere blocklist nchekwa e wuru n’ime ya nke na-echebe options WordPress dị oke mkpa ka a ghara ịgbanwe ha.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Chọpụta ma mee ka ability packs ekesara dị ka WordPress plugins rụọ ọrụ.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Atụmatụ owuwu saịtị nwere ọtụtụ akụkụ, yana nchọpụta plugin, ntụaka mmepụta nzọụkwụ, nsuso ọganihu, na mgbake njehie onwe ya.
- **Ajụjụ benchmark weebụsaịtị ụlọ oriri na ọṅụṅụ** (`q-restaurant-website`) — ule site na mbido ruo n’isi na-ekpuchi ndebanye CPT, design system, navigation, na nchọpụta plugin.
- **AI provider connector plugins** agbakwunyere na WordPress Playground blueprints maka nhazi mmepe mpaghara ngwa ngwa.

### Emeziwanye

- Emelitere README na akwụkwọ nkọwa AI provider connector na ntụziaka nhazi.

### Edoziri

- Edoziri ọdịda ule PHPUnit 25 na ngalaba `main`.
- Edoziri usoro URL GitHub releases na `blueprint.json`.
- Ịgụgharị Task ID iji zere mgbakọta na IDs ochie.

---

## 1.3.x

_A na-edobe ndetu mwepụta gara aga na repository plugin._
