---
title: परिवर्तन अभिलेख
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# परिवर्तन लग {#changelog}

## 1.9.0 — 2026-04-28 मा जारी गरिएको {#190--released-on-2026-04-28}

### नयाँ {#new}

- **`create_contact_form` क्षमता** — सक्रिय फारम plugin (Contact Form 7, WPForms, Fluent Forms, वा Gravity Forms) प्रयोग गरेर सम्पर्क फारम सिर्जना गर्छ र कुनै पनि पोस्ट वा पृष्ठमा एम्बेड गर्न तयार shortcode फर्काउँछ।
- **`set_featured_image` क्षमता** — विद्यमान Media Library attachment ID वा टाढाको URL बाट पोस्ट वा पृष्ठमा featured image तोक्छ; URL प्रदान गर्दा छवि स्वचालित रूपमा आयात गर्छ।
- **`batch_create_posts` क्षमता** — एउटै क्षमता कलमा धेरै पोस्टहरू सिर्जना गर्छ। `create_post` जस्तै उही प्यारामिटरहरू समर्थन गर्छ, प्रत्येक पोस्टको सफलता/असफलता रिपोर्ट गर्छ, र वैकल्पिक `stop_on_error` मोड छ।
- **`page_template` प्यारामिटर** — `create_post` र `update_post` मा थपियो। सिर्जना वा अद्यावधिक गर्ने समयमा PHP पृष्ठ टेम्प्लेट फाइल (जस्तै `page-full-width.php`) तोक्छ। theme को पूर्वनिर्धारितमा फर्काउन `update_post` मा खाली स्ट्रिङ पठाउनुहोस्।
- **क्लाइन्ट-साइड स्क्रिनसट क्षमताहरू** — `capture_screenshot`, `compare_screenshots`, र `review_page_design`। सर्भर-साइड headless browser मार्फत लाइभ पृष्ठहरूको पूर्ण वा viewport स्क्रिनसट खिच्नुहोस्, दुई स्क्रिनसटको फरक तुलना गर्नुहोस्, र layout, typography, colour, र accessibility समेट्ने AI-निर्मित डिजाइन समीक्षा प्राप्त गर्नुहोस्।
- **पाँच built-in एजेन्टहरू** — सामग्री लेखक, साइट निर्माता, डिजाइन स्टुडियो, Plugin Manager, र Support Assistant। प्रत्येक एजेन्टसँग उपकरणहरूको समर्पित सेट, अनुकूलित system prompt, र सुरुका सुझावहरू छन्। च्याट हेडरको नयाँ **एजेन्ट छनोटकर्ता** मार्फत स्विच गर्न मिल्ने। [Built-in Agents](../../user-guide/configuration/built-in-agents) हेर्नुहोस्।
- **Feature flags** — पहुँच-नियन्त्रण टगलहरू (प्रशासकहरूमा सीमित गर्नुहोस्, network admins मा सीमित गर्नुहोस्, subscriber पहुँच, गैर-सदस्यहरूका लागि असक्षम गर्नुहोस्) र branding विकल्पहरू (footer attribution लुकाउनुहोस्, custom agent name, agent picker लुकाउनुहोस्, च्याट avatar का रूपमा site icon प्रयोग गर्नुहोस्) सहित नयाँ **Settings → Feature Flags** ट्याब। [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) हेर्नुहोस्।
- **अन्तिम सत्र पुनर्स्थापना** — च्याट प्यानलले अब पृष्ठ लोड हुँदा र widget खुल्दा सबैभन्दा पछिल्लो कुराकानी स्वचालित रूपमा पुनः लोड गर्छ, त्यसैले पृष्ठ नेभिगेसनहरूमा सन्दर्भ कहिल्यै हराउँदैन।
- **Plugin कार्य लिङ्कहरू** — Settings र Abilities Registry का द्रुत लिङ्कहरू अब WordPress **Plugins → Installed Plugins** स्क्रिनमा plugin विवरणमुनि देखा पर्छन्।

### सुधारिएको {#improved}

- **छवि स्रोत पुनःप्रयास** — एजेन्टले अब डाउनलोड असफल हुँदा AI-निर्मित छविमा fallback गर्नु अघि सबै कन्फिगर गरिएका निःशुल्क छवि स्रोतहरू पुनः प्रयास गर्छ।
- **मोडेल जानकारी प्यानल** — च्याट हेडरमा सधैं देखिने; पहिलो सन्देशपछि अब लुकेको हुँदैन।
- **Auto-scroll व्यवहार** — प्रयोगकर्ताले पढ्न माथि scroll गर्दा auto-scroll रोकिन्छ; तैरिने **तलसम्म scroll गर्नुहोस्** बटन देखा पर्छ र प्रयोगकर्ता पछिल्लो सन्देशमा पुगेपछि स्वचालित रूपमा हट्छ।
- **एजेन्ट छनोटकर्ता UI** — प्रत्येक एजेन्टका icons सहित form-table overlay का रूपमा पुनः डिजाइन गरिएको, जसले एकै नजरमा एजेन्टहरू पहिचान गर्न र स्विच गर्न सजिलो बनाउँछ।
- **Lazy-loaded JS chunks** — च्याट widget को प्रारम्भिक JavaScript bundle अब lazy-loaded chunks मा विभाजित गरिएको छ, जसले प्रारम्भिक bundle आकारहरू 75–90% ले घटाउँछ।
- **च्याट widget पुनः डिजाइन** — अघिल्लो custom avatar लाई unified AI icon ले प्रतिस्थापन गर्छ; built-in agent प्रणालीसँग सुसंगत।
- **URL linkification** — system messages र error message bubbles मा देखिने URLs अब क्लिक गर्न मिल्ने लिङ्कका रूपमा render हुन्छन्।

### समाधान गरिएको {#fixed}

- **क्षमता खोजयोग्यता** — सबै क्षमताहरू एजेन्टको tool list मा भरपर्दो रूपमा देखिऊन् भनेर विवरणहरू, system prompt references, र namespace alignment सच्याइयो।
- **Providers cache** — providers अब version counter मार्फत site-wide cache गरिन्छन्, जसले multisite networks मा stale-provider समस्याहरू रोक्छ।
- **`ability_invalid_output`** — 12 क्षमता handlers मा समाधान गरियो; सबैले ठीकसँग संरचित JSON responses फर्काउँछन्।
- **`pending_client_tool_calls` pipeline** — end-to-end जोडियो ताकि client-side tool calls सही रूपमा पूरा होऊन् र मोडेलमा परिणामहरू फर्काऊन्।
- **History drawer** — revert गर्न नसकिने परिवर्तनहरू revert list बाट हटाइएका छन्; **पूरा इतिहास हेर्नुहोस्** लिङ्क अब सही रूपमा काम गर्छ।
- **Changes/revert system** — पाँच अलग-अलग bugs समाधान गरियो र नयाँ admin interface अन्तर्गत एकीकृत गरियो।
- **Save Settings toast** — **Save Settings** क्लिक गरेपछि snackbar notification अब भरपर्दो रूपमा देखा पर्छ।
- **Trash context menu** — **स्थायी रूपमा मेटाउनुहोस्** विकल्प थपियो ताकि वस्तुहरूलाई trash view छोड्न बिना hard-delete गर्न सकियोस्।
- **Edit & resend** — edit icon क्लिक गर्दा अब thread का सबै सन्देशहरू होइन, क्लिक गरिएको सन्देश मात्र edit mode मा प्रवेश गर्छ।
- **च्याट layout उचाइ** — पृष्ठको माथि plugin-injected content (admin notices, banners) देखा पर्दा च्याट प्यानलले आफ्नो उचाइ अनुकूल गर्छ, जसले input area लाई स्क्रिनबाहिर धकेलिनबाट रोक्छ।

---

## 1.4.0 — 2026-04-09 मा जारी गरिएको {#140--released-on-2026-04-09}

### नयाँ {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — CI पाइपलाइनहरू र मोडेल मूल्याङ्कन कार्यप्रवाहहरूका लागि command line बाट Agent Capabilities v1 benchmark suite चलाउँछ। प्रति-प्रश्न चलाउन, provider/model override, र JSON/CSV आउटपुट समर्थन गर्छ।
- **Agent Capabilities v1 benchmark suite** — स्कोरिङ र token/अवधि रिपोर्टिङसहित, पूर्ण क्षमता सतह परीक्षण गर्ने जटिल, बहु-चरण prompt हरूको संरचित सेट।
- **Custom Post Type क्षमताहरू** — `register_post_type`, `list_post_types`, `delete_post_type`। दर्ताहरू options table मार्फत restart पछि पनि कायम रहन्छन्।
- **Custom Taxonomy क्षमताहरू** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`। वैकल्पिक rewrite slugs सहित hierarchical र flat taxonomy हरू समर्थन गर्छ।
- **Design System क्षमताहरू** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`। पाँचवटा चयनित preset समावेश छन्: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`।
- **Global Styles क्षमताहरू** — `get_global_styles`, `set_global_styles`, `reset_global_styles`। WordPress Global Styles API मार्फत theme.json मानहरू पढ्छ र लेख्छ।
- **Navigation Menu व्यवस्थापन क्षमता** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`। nested menu हरू र theme location assignment समर्थन गर्छ।
- **Options Management क्षमता** — `get_option`, `set_option`, `delete_option`, `list_options`। महत्त्वपूर्ण WordPress option हरूलाई परिवर्तनबाट सुरक्षित राख्ने built-in safety blocklist समावेश छ।
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`। WordPress plugin हरूका रूपमा वितरित ability pack हरू पत्ता लगाउनुहोस् र सक्रिय गर्नुहोस्।
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`। plugin खोज, step output reference, progress tracking, र स्वायत्त error recovery सहित बहु-चरण site build plan हरू।
- **Restaurant website benchmark question** (`q-restaurant-website`) — CPT दर्ता, design system, navigation, र plugin खोज समेट्ने end-to-end परीक्षण।
- **AI provider connector plugins** छिटो स्थानीय विकास setup का लागि WordPress Playground blueprint हरूमा थपियो।

### सुधारिएको {#improved-1}

- README AI provider connector दस्तावेजीकरण र setup निर्देशनहरूसहित अद्यावधिक गरियो।

### समाधान गरिएको {#fixed-1}

- `main` branch मा 25 PHPUnit परीक्षण असफलताहरू समाधान गरियो।
- `blueprint.json` मा GitHub releases URL ढाँचा सुधारियो।
- पुराना ID सँग ठोक्किन नदिन Task ID पुनः नम्बरिङ।

---

## 1.3.x {#13x}

_अघिल्ला release notes plugin repository मा कायम राखिएका छन्।_
