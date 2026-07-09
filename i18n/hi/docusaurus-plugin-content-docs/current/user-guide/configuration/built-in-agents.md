---
title: अंतर्निहित एजेंट
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# अंतर्निहित एजेंट

Gratis AI Agent v1.9.0 में पाँच अंतर्निहित एजेंट आते हैं। हर एजेंट में केंद्रित टूल्स का समूह, अनुकूलित सिस्टम प्रॉम्प्ट, और उस क्षेत्र के सामान्य कार्यों से मेल खाने वाले शुरुआती सुझाव पहले से कॉन्फ़िगर होते हैं। एजेंट बदलने से assistant क्या कर सकता है और कैसे जवाब देता है, यह बदल जाता है — इसके लिए आपको कोई कॉन्फ़िगरेशन नहीं करनी पड़ती। Superdav AI Agent v1.18.0 इन workflows में schedule-aware टूल्स, reminder रिकॉर्ड, approval gates, और SMS notifications जोड़ सकता है, जब संबंधित integrations कॉन्फ़िगर हों।

## Agent क्या है?

हर एजेंट एक नामित कॉन्फ़िगरेशन प्रोफ़ाइल है, जो इन चीज़ों को जोड़ती है:

- **टूल्स** — वे क्षमताएँ जिन्हें एजेंट इस्तेमाल कर सकता है (जैसे Content Writer को पोस्ट बनाने की क्षमताओं तक पहुँच होती है; Design Studio को CSS और theme.json क्षमताओं तक पहुँच होती है)
- **सिस्टम प्रॉम्प्ट** — निर्देश जो एजेंट का लहजा, प्राथमिकताएँ, और सीमाएँ तय करते हैं
- **सुझाव** — chat interface में दिखाए जाने वाले पहले से लिखे प्रॉम्प्ट, ताकि आप जल्दी शुरू कर सकें

## Agent Picker तक पहुँचना

1. WordPress admin sidebar में **Gratis AI Agent** panel खोलें।
2. chat header के ऊपर-बाएँ में **agent icon** पर क्लिक करें (सक्रिय एजेंट के अनुसार icon बदलता है)।
3. **Agent Picker** form-table overlay के रूप में खुलता है। हर एजेंट अपने icon, नाम, और एक-पंक्ति विवरण के साथ सूचीबद्ध होता है।
4. किसी एजेंट row पर क्लिक करके उसे सक्रिय करें। chat header तुरंत अपडेट हो जाता है।

आप बातचीत के बीच में भी एजेंट बदल सकते हैं — नए एजेंट का सिस्टम प्रॉम्प्ट अगले संदेश से प्रभावी होता है।

## पाँच अंतर्निहित एजेंट

### Content Writer

**केंद्र:** पोस्ट, पृष्ठ, और संपर्क फ़ॉर्म बनाना और संपादित करना।

**उपलब्ध टूल्स:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`। Superdav AI Agent v1.18.0 integrations सक्षम होने पर, कॉन्फ़िगर किए गए calendar संदर्भ, approval gates, reminders, और SMS notification टूल्स भी approved workflows के लिए उपलब्ध हो सकते हैं।

**यह इनमें अच्छा है:**
- किसी brief या outline से blog पोस्ट का मसौदा बनाना और प्रकाशित करना
- किसी नई साइट के लिए landing pages के बैच बनाना
- संपर्क और enquiry फ़ॉर्म बनाना
- URL या search से पोस्ट पर featured images सेट करना
- कॉन्फ़िगर किए गए Google Calendar संदर्भ से event follow-up संदेशों का मसौदा बनाना, फिर notifications भेजने से पहले approval के लिए रुकना

**शुरुआती सुझाव:**
- *WordPress multisite के लाभों के बारे में 500-शब्दों की blog पोस्ट लिखें।*
- *About, Services, और Contact पृष्ठ बनाएँ और उन्हें प्रकाशित करें।*
- *Contact पृष्ठ में booking enquiry फ़ॉर्म जोड़ें।*
- *कल के कॉन्फ़िगर किए गए calendar event के attendees के लिए reminder का मसौदा बनाएँ और उसे भेजने से पहले approval की प्रतीक्षा करें।*

---

### Site Builder

**केंद्र:** एक ही प्रॉम्प्ट से शुरुआत से अंत तक वेबसाइट बनाना।

**उपलब्ध टूल्स:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`। Superdav AI Agent v1.18.0 के साथ, कॉन्फ़िगर किए गए managed-service, approval, reminder, calendar, और SMS टूल्स वहाँ उपलब्ध हो सकते हैं जहाँ administrators उन्हें सक्षम करते हैं।

**यह इनमें अच्छा है:**
- बताए गए business type के लिए बहु-चरणीय साइट build plan बनाना
- हर चरण को अपने आप चलाना — संरचना, सामग्री, navigation, design
- manual हस्तक्षेप की आवश्यकता के बिना बीच-plan errors से उबरना
- build के हिस्से के रूप में recommended plugins install करना
- chat interface से सीधे contact forms बनाना (Superdav AI Agent v1.10.0+)
- approval gates और reminder records सक्षम होने पर duplicate notifications के बिना launch reminders या attendee follow-up को समन्वित करना

**शुरुआती सुझाव:**
- *gallery post type, booking पृष्ठ, और contact form के साथ photography portfolio साइट बनाएँ।*
- *online menu, opening hours, और table-booking enquiry form के साथ restaurant वेबसाइट बनाएँ।*
- *service pages, portfolio section, और blog के साथ freelance consulting साइट सेट करें।*
- *site builder का उपयोग करके Contact पृष्ठ में contact form जोड़ें।*
- *site launch checklist approved होने के बाद, configured stakeholder contact को SMS reminder भेजें।*

---

### Design Studio

**केंद्र:** दृश्य अनुकूलन — रंग, typography, CSS, और block patterns।

**उपलब्ध टूल्स:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**यह इनमें अच्छा है:**
- नामित theme presets लागू करना (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json के माध्यम से global typography और colour palettes को fine-tune करना
- brand-specific overrides के लिए custom CSS inject करना
- किसी पृष्ठ का screenshot लेना और design issues के लिए उसकी समीक्षा करना

**शुरुआती सुझाव:**
- *warm-editorial preset लागू करें और फिर primary colour को #2d6a4f पर सेट करें।*
- *homepage का screenshot लें और मुझे बताएँ कि आप क्या सुधारेंगे।*
- *full-width background image और centred heading के साथ reusable hero block pattern बनाएँ।*

### Plugin Manager

**केंद्र:** WordPress plugins को खोजना, install करना, और manage करना।

**उपलब्ध टूल्स:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**यह इनमें अच्छा है:**
- बताए गए use case के लिए सबसे अच्छे plugin की सिफारिश करना
- registry से ability packs install करना
- category के अनुसार उपलब्ध ability catalogue देखना

**शुरुआती सुझाव:**
- *membership directory के लिए सबसे अच्छा plugin कौन सा है?*
- *WooCommerce abilities pack install करें।*
- *मुझे सभी उपलब्ध ecommerce ability packs दिखाएँ।*

---

### Support Assistant

**केंद्र:** साइट सामग्री, settings, और WordPress configuration के बारे में प्रश्नों के उत्तर देना।

**उपलब्ध टूल्स:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**यह क्या अच्छा करता है:**
- मौजूदा साइट सेटिंग्स और विकल्प देखना
- यह समझाना कि साइट पर कौन से पोस्ट प्रकार, वर्गीकरण और मेन्यू कॉन्फ़िगर हैं
- लाइव मान पढ़कर "यह सेटिंग क्या करती है?" जैसे सवालों के जवाब देना
- बदलाव करने से पहले केवल-पढ़ने योग्य नैदानिक परत के रूप में काम करना

**शुरुआती सुझाव:**
- *इस साइट पर अभी कौन से प्लगइन और सेटिंग्स सक्रिय हैं?*
- *इस साइट पर पंजीकृत सभी कस्टम पोस्ट प्रकारों की सूची दें।*
- *कौन से नेविगेशन मेन्यू मौजूद हैं और वे कहाँ असाइन किए गए हैं?*

---

## Superdav Automation एकीकरण

जब Superdav AI Agent v1.18.0 एकीकरण कॉन्फ़िगर होते हैं, तो अंतर्निहित एजेंट अधिक सुरक्षित, शेड्यूल-सचेत ऑटोमेशन कार्यप्रवाहों में भाग ले सकते हैं:

- **Google Calendar पढ़ने के टूल** एजेंटों को आगे के काम का मसौदा बनाने से पहले कॉन्फ़िगर किए गए कैलेंडर और घटनाओं की जाँच करने देते हैं।
- **संपर्क और सहभागी मिलान** घटना के प्रतिभागियों को WordPress उपयोगकर्ताओं या ज्ञात संपर्कों से मिलाने में मदद करता है।
- **मानवीय स्वीकृति द्वार** संवेदनशील कार्रवाइयों को तब तक रोकते हैं जब तक कोई अधिकृत उपयोगकर्ता उनकी समीक्षा और पुष्टि नहीं कर देता।
- **रिमाइंडर रिकॉर्ड** शेड्यूल किए गए काम दोबारा चलने या दोहराए जाने पर डुप्लिकेट सूचनाओं को रोकते हैं।
- **TextBee SMS सूचनाएँ** कॉन्फ़िगर किए गए टेक्स्ट संदेश केवल तब भेजती हैं जब SMS क्रेडेंशियल और कार्यप्रवाह अनुमतियाँ सक्षम हों।

अनुशंसित कार्यप्रवाह: एजेंट से संदेश या कार्रवाई तैयार करने को कहें, स्वीकृति संकेत की समीक्षा करें, फिर स्वीकृत कार्रवाई को फिर से शुरू होने दें। आवर्ती रिमाइंडर के लिए, रिमाइंडर डीडुप्लिकेशन सक्षम रखें ताकि उसी घटना या संपर्क को बार-बार सूचना न भेजी जाए।

---

## एजेंटों को अनुकूलित करना

हर अंतर्निहित एजेंट को `gratis_ai_agent_agents` फ़िल्टर के माध्यम से बढ़ाया या बदला जा सकता है।

### मौजूदा एजेंट में कस्टम सिस्टम प्रॉम्प्ट जोड़ना

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### नया एजेंट पंजीकृत करना

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

फ़िल्टर चलने के तुरंत बाद नया एजेंट एजेंट चयनकर्ता में दिखाई देता है।

### अंतर्निहित एजेंट हटाना

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
