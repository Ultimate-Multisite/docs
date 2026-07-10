---
title: चेंजलॉग
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog {#changelog}

## 1.9.0 — Released on 2026-04-28 {#190--released-on-2026-04-28}

### New {#new}

- **`create_contact_form` ability** — यह सक्रिय फॉर्म प्लगइन (Contact Form 7, WPForms, Fluent Forms, या Gravity Forms) का उपयोग करके एक संपर्क फ़ॉर्म बनाता है और एक शॉर्टकोड लौटाता है जिसे किसी भी पोस्ट या पेज में एम्बेड किया जा सकता है।
- **`set_featured_image` ability** — यह किसी मौजूदा Media Library अटैचमेंट ID या एक रिमोट URL से पोस्ट या पेज के लिए एक फीचर्ड इमेज असाइन करता है; यदि URL प्रदान किया जाता है तो यह स्वचालित रूप से इमेज को इम्पोर्ट करता है।
- **`batch_create_posts` ability** — यह एक ही ability कॉल में कई पोस्ट बनाता है। यह `create_post` के समान पैरामीटर्स का समर्थन करता है, प्रति-पोस्ट सफलता/विफलता की रिपोर्ट करता है, और इसमें एक वैकल्पिक `stop_on_error` मोड होता है।
- **`page_template` parameter** — इसे `create_post` और `update_post` में जोड़ा गया है। यह बनाने या अपडेट करने के समय एक PHP पेज टेम्पलेट फ़ाइल (जैसे `page-full-width.php`) असाइन करता है। `update_post` में थीम के डिफ़ॉल्ट पर वापस जाने के लिए एक खाली स्ट्रिंग पास करें।
- **Client-side screenshot abilities** — `capture_screenshot`, `compare_screenshots`, और `review_page_design`। यह एक सर्वर-साइड हेडलेस ब्राउज़र के माध्यम से लाइव पेजों के पूरे या व्यूपोर्ट स्क्रीनशॉट कैप्चर करता है, दो स्क्रीनशॉट की तुलना करता है, और लेआउट, टाइपोग्राफी, रंग और एक्सेसिबिलिटी को कवर करते हुए एक AI-जनरेटेड डिज़ाइन समीक्षा प्राप्त करता है।
- **Five built-in agents** — Content Writer, Site Builder, Design Studio, Plugin Manager, और Support Assistant। प्रत्येक एजेंट के पास उपकरणों का एक समर्पित सेट, एक अनुकूलित सिस्टम प्रॉम्प्ट और शुरुआती सुझाव होते हैं। चैट हेडर में नए **Agent Picker** के माध्यम से स्विच किया जा सकता है। [Built-in Agents](../../user-guide/configuration/built-in-agents) देखें।
- **Feature flags** — एक्सेस-कंट्रोल टॉगल (एडमिनिस्ट्रेटर तक सीमित करें, नेटवर्क एडमिन तक सीमित करें, सब्सक्राइबर एक्सेस, नॉन-मेंबर के लिए अक्षम करें) और ब्रांडिंग विकल्प (फ़ुटर एट्रीब्यूशन छिपाएं, कस्टम एजेंट नाम, एजेंट पिकर छिपाएं, चैट अवतार के रूप में साइट आइकन का उपयोग करें) के साथ एक नया **Settings → Feature Flags** टैब। [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) देखें।
- **Restore last session** — चैट पैनल अब पेज लोड होने पर और विजेट खुलने पर सबसे हाल की बातचीत को स्वचालित रूप से रीलोड करता है, इसलिए पेज नेविगेशन के दौरान संदर्भ कभी खोता नहीं है।
- **Plugin action links** — सेटिंग्स और Abilities Registry के लिए त्वरित लिंक अब वर्डप्रेस के **Plugins → Installed Plugins** स्क्रीन पर प्लगइन विवरण के नीचे दिखाई देते हैं।

### Improved {#improved}

- **Image source retry** — डाउनलोड विफल होने पर एजेंट अब AI-जनरेटेड इमेज पर वापस जाने से पहले सभी कॉन्फ़िगर किए गए मुफ्त इमेज स्रोतों को पुनः प्रयास करता है।
- **Model info panel** — यह चैट हेडर में हमेशा दिखाई देता है; अब पहले संदेश के बाद छिपाया नहीं जाता है।
- **Auto-scroll behaviour** — ऑटो-स्क्रॉल तब रुक जाता है जब उपयोगकर्ता पढ़ने के लिए ऊपर स्क्रॉल करता है; एक फ्लोटिंग **Scroll to bottom** बटन दिखाई देता है और उपयोगकर्ता नवीनतम संदेश तक पहुंचने पर स्वचालित रूप से हट जाता है।
- **Agent Picker UI** — इसे फॉर्म-टेबल ओवरले के रूप में फिर से डिज़ाइन किया गया है जिसमें प्रति-एजेंट आइकन हैं, जिससे एजेंटों की पहचान करना और उन्हें एक नज़र में बदलना आसान हो जाता है।
- **Lazy-loaded JS chunks** — चैट विजेट का प्रारंभिक JavaScript बंडल अब लेज़ी-लोडेड चंक्स में विभाजित है, जिससे प्रारंभिक बंडल साइज़ 75–90% तक कम हो गया है।
- **Chat widget redesign** — एकीकृत AI आइकन पिछले कस्टम अवतार को बदलता है; यह बिल्ट-इन एजेंट सिस्टम के अनुरूप है।
- **URL linkification** — सिस्टम संदेशों और त्रुटि संदेश बबल्स में दिखाई देने वाले URL अब क्लिक करने योग्य लिंक के रूप में रेंडर किए जाते हैं।

### Fixed {#fixed}

- **Ability discoverability** — विवरण, सिस्टम प्रॉम्प्ट संदर्भ, और नेमस्पेस संरेखण को ठीक किया गया है ताकि सभी abilities एजेंट की टूल सूची में विश्वसनीय रूप से दिखाई दें।
- **Providers cache** — प्रोवाइडर्स को अब एक वर्ज़न काउंटर के माध्यम से साइट-वाइड कैश किया जाता है, जिससे मल्टीसाइट नेटवर्क पर पुराने प्रोवाइडर (stale-provider) की समस्या को रोका जा सके।
- **`ability_invalid_output`** — 12 ability handlers में हल किया गया; सभी अब सही ढंग से संरचित JSON प्रतिक्रियाएँ लौटाते हैं।
- **`pending_client_tool_calls` pipeline** — एंड-टू-एंड वायर्ड किया गया ताकि क्लाइंट-साइड टूल कॉल सही ढंग से पूरे हों और मॉडल को परिणाम वापस मिलें।
- **History drawer** — गैर-वापनीय (non-revertable) परिवर्तनों को रीवर्ट सूची से बाहर रखा गया है; **View full history** लिंक अब सही ढंग से काम करता है।
- **Changes/revert system** — पाँच अलग-अलग बग्स को ठीक किया गया और नए एडमिन इंटरफ़ेस के तहत एकीकृत किया गया।
- **Save Settings toast** — **Save Settings** पर क्लिक करने के बाद अब स्नैकबार नोटिफिकेशन विश्वसनीय रूप से दिखाई देता है।
- **Trash context menu** — **Delete Permanently** विकल्प जोड़ा गया ताकि आइटम को ट्रैश व्यू छोड़े बिना हार्ड-डिलीट किया जा सके।
- **Edit & resend** — एडिट आइकन पर क्लिक करने से अब केवल क्लिक किए गए संदेश के लिए एडिट मोड में प्रवेश करता है, न कि थ्रेड में सभी संदेशों के लिए।
- **Chat layout height** — चैट पैनल अपनी ऊंचाई को समायोजित करता है जब प्लगइन-इंजेक्टेड कंटेंट (एडमिन नोटिस, बैनर) पेज के ऊपर दिखाई देता है, जिससे इनपुट एरिया को स्क्रीन से बाहर धकेला नहीं जाता है।

---

## 1.4.0 — Released on 2026-04-09 {#140--released-on-2026-04-09}

### New {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — CI पाइपलाइनों और मॉडल मूल्यांकन वर्कफ़्लो के लिए कमांड लाइन से Agent Capabilities v1 बेंचमार्क सूट चलाता है। प्रति-प्रश्न रन, प्रोवाइडर/मॉडल ओवरराइड्स, और JSON/CSV आउटपुट का समर्थन करता है।
- **Agent Capabilities v1 benchmark suite** — जटिल, बहु-चरणीय प्रॉम्प्ट का एक संरचित सेट जो पूरी ability सतह का अभ्यास करता है, जिसमें स्कोरिंग और टोकन/अवधि रिपोर्टिंग शामिल है।
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`। रजिस्ट्रेशन विकल्प तालिका के माध्यम से रीस्टार्ट के दौरान बने रहते हैं।
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`। वैकल्पिक रीराइट स्लग्ज़ के साथ पदानुक्रमित और फ्लैट टैक्सोनॉमी का समर्थन करता है।
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`। इसमें पाँच क्यूरेटेड प्रीसेट शामिल हैं: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`।
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`। वर्डप्रेस Global Styles API के माध्यम से theme.json मान पढ़ता और लिखता है।
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`। नेस्टेड मेनू और थीम लोकेशन असाइनमेंट का समर्थन करता है।
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`। इसमें एक इन-बिल्ट सुरक्षा ब्लैकलिस्ट शामिल है जो महत्वपूर्ण वर्डप्रेस विकल्पों को संशोधन से बचाती है।
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`। वर्डप्रेस प्लगइन्स के रूप में वितरित ability पैक्स की खोज और सक्रियण करता है।
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`। प्लगइन डिस्कवरी, स्टेप आउटपुट रेफरेंस, प्रगति ट्रैकिंग और स्वायत्त त्रुटि रिकवरी के साथ मल्टी-फेज साइट बिल्ड प्लान।
- **Restaurant website benchmark question** (`q-restaurant-website`) — CPT रजिस्ट्रेशन, डिज़ाइन सिस्टम, नेविगेशन, और प्लगइन डिस्कवरी को कवर करने वाला एंड-टू-एंड टेस्ट।
- **AI provider connector plugins** को तेज़ लोकल डेवलपमेंट सेटअप के लिए WordPress Playground blueprints में जोड़ा गया।

### Improved {#improved-1}

- README को AI provider connector डॉक्यूमेंटेशन और सेटअप निर्देशों के साथ अपडेट किया गया।

### Fixed {#fixed-1}

- `main` ब्रांच पर 25 PHPUnit टेस्ट विफलताओं को हल किया गया।
- `blueprint.json` में GitHub releases URL फॉर्मेट को ठीक किया गया।
- पुराने IDs के साथ टकराव से बचने के लिए टास्क ID को रीनंबर किया गया।

---

## 1.3.x {#13x}

_पिछला रिलीज़ नोट्स प्लगइन रिपॉजिटरी में बनाए रखा गया है।_
