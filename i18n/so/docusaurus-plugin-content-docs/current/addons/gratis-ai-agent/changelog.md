---
title: Diiwaanka isbeddellada
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Diiwaanka isbeddellada

## 1.9.0 — La sii daayay 2026-04-28

### Cusub

- **Awoodda `create_contact_form`** — waxay abuurtaa foom xiriir iyadoo adeegsanaysa plugin-ka foomka firfircoon (Contact Form 7, WPForms, Fluent Forms, ama Gravity Forms) waxayna soo celisaa shortcode diyaar u ah in lagu dhex daro qoraal ama bog kasta.
- **Awoodda `set_featured_image`** — waxay qoraal ama bog u qoondeysaa sawir muuqda iyadoo laga adeegsanayo ID lifaaq Media Library oo jira ama URL fog; si otomaatig ah ayay sawirka u soo gelisaa marka URL la bixiyo.
- **Awoodda `batch_create_posts`** — waxay hal wicitaan awood ku abuurtaa qoraallo badan. Waxay taageertaa isla parameters-ka `create_post`, waxay soo sheegtaa guul/guuldarro qoraal kasta, waxayna leedahay hab `stop_on_error` oo ikhtiyaari ah.
- **Parameter-ka `page_template`** — waxaa lagu daray `create_post` iyo `update_post`. Wuxuu qoondeeyaa fayl template bog PHP ah (tusaale `page-full-width.php`) xilliga abuurista ama cusboonaysiinta. U gudbi xaraf madhan `update_post` si loogu laabto theme-ka caadiga ah.
- **Awoodaha screenshot-ka dhinaca client-ka** — `capture_screenshot`, `compare_screenshots`, iyo `review_page_design`. Ku qabso screenshot buuxa ama viewport ah oo bogag nool ah adigoo adeegsanaya browser headless oo server-side ah, isbarbar dhig laba screenshot, oo hel dib-u-eegis naqshad oo AI-soo saaray oo daboolaysa qaab-dhismeedka, typography, midabka, iyo accessibility.
- **Shan agents oo gudaha ku jira** — Qoraa Mawduuc, Dhise Goob, Istuudiyaha Naqshadda, Maareeye Plugin, iyo Kaaliyaha Taageerada. Agent kasta wuxuu leeyahay qalab u gaar ah, system prompt la habeeyay, iyo talooyin bilow ah. Waxaa lagu beddeli karaa **Agent Picker**-ka cusub ee madaxa chat-ka. Eeg [Agents gudaha ku jira](../../user-guide/configuration/built-in-agents).
- **Feature flags** — tab cusub oo **Settings → Feature Flags** ah oo leh toggles xakamayn-gelitaan (ku xaddid administrators, ku xaddid network admins, gelitaanka subscriber, dami dadka aan xubnaha ahayn) iyo doorashooyin branding (qari attribution-ka footer-ka, magaca agent caado ah, qari agent picker, u isticmaal astaanta site-ka avatar-ka chat-ka). Eeg [Settings-ka Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Soo celi kalfadhigii ugu dambeeyay** — panel-ka chat-ka hadda si otomaatig ah ayuu u soo raraa wada sheekaysigii ugu dambeeyay marka boggu soo raro iyo marka widget-ka la furo, sidaas awgeed context-ku marnaba kuma lumo dhex wareegista bogagga.
- **Xiriiriyeyaasha falalka plugin-ka** — xiriiriyeyaal degdeg ah oo Settings iyo Abilities Registry ah ayaa hadda ka muuqda shaashadda WordPress **Plugins → Installed Plugins** hoosta sharaxaadda plugin-ka.

### La hagaajiyay

- **Isku-dayga isha sawirka** — agent-ku hadda wuxuu mar kale isku dayaa dhammaan ilaha sawirrada bilaashka ah ee la habeeyay ka hor inta uusan ugu dambayn u noqon sawir AI-soo saaray marka soo dejintu fashilanto.
- **Panel-ka macluumaadka model-ka** — mar walba wuxuu ka muuqdaa madaxa chat-ka; mar dambe lama qariyo farriinta koowaad ka dib.
- **Dabeecadda auto-scroll** — auto-scroll wuu istaagaa marka isticmaaluhu kor u rogto si uu u akhriyo; badhan sabaynaya oo **Hoos ugu rog** ah ayaa muuqda, wuxuuna si otomaatig ah u baaba'aa marka isticmaaluhu gaaro farriintii ugu dambaysay.
- **UI-ga Agent Picker** — waxaa dib loogu naqshadeeyay overlay form-table ah oo leh astaamo agent kasta u gaar ah, taasoo fududaynaysa in agents la aqoonsado lana beddelo hal eegmo.
- **Qaybo JS ah oo lazy-loaded ah** — bundle-kii hore ee JavaScript ee chat widget-ka hadda waxaa loo kala jaray qaybo lazy-loaded ah, taasoo yareynaysa cabbirrada bundle-ka bilowga ah 75–90%.
- **Dib-u-naqshadaynta chat widget-ka** — astaanta AI ee mideysan ayaa beddeshay avatar-kii caadiga ahaa ee hore; waxay la jaanqaadaysaa nidaamka agent-ka gudaha ku jira.
- **URL linkification** — URLs-ka ka muuqda farriimaha nidaamka iyo xumbooyinka farriimaha qaladka hadda waxaa loo soo bandhigaa xiriiriyeyaal la gujin karo.

### La hagaajiyay

- **Helitaanka awoodaha** — waxaa la saxay sharaxaadaha, tixraacyada system prompt, iyo isku-aaddinta namespace-ka si dhammaan awooduhu si lagu kalsoonaan karo uga muuqdaan liiska qalabka agent-ka.
- **Cache-ka providers-ka** — providers hadda waxaa site-wide loogu kaydiyaa cache iyadoo la adeegsanayo version counter, taasoo ka hortagaysa dhibaatooyinka stale-provider ee shabakadaha multisite.
- **`ability_invalid_output`** — waxaa laga xalliyay 12 ability handlers; dhammaantood waxay soo celiyaan jawaabo JSON si sax ah u qaabaysan.
- **Pipeline-ka `pending_client_tool_calls`** — waxaa loo xiray end-to-end si wicitaannada qalabka client-side ay si sax ah u dhammaadaan oo natiijooyin ugu soo celiyaan model-ka.
- **History drawer** — isbeddellada aan la celin karin waxaa laga reebay liiska celinta; xiriiriyaha **Eeg taariikhda buuxda** hadda si sax ah ayuu u shaqeeyaa.
- **Nidaamka isbeddellada/celinta** — shan bug oo kala duwan ayaa la hagaajiyay, waxaana lagu mideeyay interface-ka admin-ka cusub.
- **Toast-ka Save Settings** — ogeysiiska snackbar hadda si lagu kalsoonaan karo ayuu u muuqdaa ka dib marka la gujiyo **Save Settings**.
- **Context menu-ga Trash** — waxaa lagu daray doorashada **Delete Permanently** si items si adag loo tirtiro iyada oo aan laga bixin muuqaalka trash-ka.
- **Wax ka beddel & dib u dir** — gujinta astaanta wax-ka-beddelka hadda waxay gelisaa habka wax-ka-beddelka oo keliya farriinta la gujiyay, ma aha dhammaan farriimaha thread-ka.
- **Dhererka qaabka chat-ka** — panel-ka chat-ku wuxuu la qabsadaa dhererkiisa marka content uu plugin soo geliyay (ogeysiisyada admin, banners) uu ka muuqdo korka bogga, taasoo ka hortagaysa in aagga gelinta laga riixo shaashadda bannaankeeda.

---

## 1.4.0 — La sii daayay 2026-04-09

### Cusub

- **Amarka WP-CLI benchmark** (`wp gratis-ai-agent benchmark`) — wuxuu ka socodsiiyaa xirmada benchmark ee Agent Capabilities v1 khadka amarka, loogu talagalay CI pipelines iyo habraacyada qiimaynta model. Wuxuu taageeraa socodsiin su’aal kasta ah, provider/model overrides, iyo soo-saar JSON/CSV ah.
- **Xirmada Agent Capabilities v1 benchmark** — set qaabaysan oo ah prompts adag, talaabooyin badan leh, kuwaas oo tijaabiya dhammaan dusha awoodda, iyadoo leh scoring iyo warbixin token/duration ah.
- **Awoodaha Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Diiwaangelinnadu waxay sii jiraan marka dib loo bilaabo iyagoo maraya jadwalka options.
- **Awoodaha Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Waxay taageertaa taxonomies kala-sarrayn leh iyo kuwo fidsan, oo leh rewrite slugs ikhtiyaari ah.
- **Awoodaha Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Waxaa ku jira shan presets oo si taxaddar leh loo soo xulay: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Awoodaha Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Waxay akhridaa oo qortaa qiimayaasha theme.json iyadoo loo marayo WordPress Global Styles API.
- **Awoodda maaraynta Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Waxay taageertaa menus gudaha-ku-jira iyo u-qoondeynta goobta theme.
- **Awoodda Options Management** — `get_option`, `set_option`, `delete_option`, `list_options`. Waxaa ku jira blocklist badbaado oo gudaha lagu dhisay, taas oo ka ilaalisa options muhiimka ah ee WordPress in la beddelo.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Soo hel oo dhaqaaji xirmooyinka awoodaha ee loo qaybiyo sida WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Qorshayaal dhisid site oo marxalado badan leh, oo leh helitaan plugin, tixraacyo soo-saar talaabo, raadraac horumar, iyo soo-kabasho khalad oo madax-bannaan.
- **Su’aasha benchmark ee website makhaayad** (`q-restaurant-website`) — tijaabo bilow-ilaa-dhammaad ah oo daboolaysa diiwaangelinta CPT, design system, navigation, iyo helitaanka plugin.
- **AI provider connector plugins** ayaa lagu daray WordPress Playground blueprints si loo dedejiyo dejinta horumarinta maxalliga ah.

### La hagaajiyay

- README waa la cusboonaysiiyay iyadoo lagu daray dukumentiyada AI provider connector iyo tilmaamaha dejinta.

### La saxay

- 25 guuldarrooyin tijaabo PHPUnit ah oo ku jiray laanta `main` waa la xalliyay.
- Qaabka URL-ka GitHub releases ee `blueprint.json` waa la saxay.
- Dib-u-lambaraynta Aqoonsiga hawsha si looga fogaado isku dhacyo lala yeesho IDs hore.

---

## 1.3.x

_Qoraalladii sii-deyntii hore waxaa lagu hayaa kaydka plugin-ka._
