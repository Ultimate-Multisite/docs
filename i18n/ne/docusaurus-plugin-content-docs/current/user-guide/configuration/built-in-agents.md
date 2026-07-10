---
title: अन्तर्निर्मित एजेन्टहरू
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Built-in Agents {#built-in-agents}

Gratis AI Agent v1.9.0 मा पाँचवटा Built-in agents समावेश छन्, प्रत्येकलाई त्यस क्षेत्रमा सामान्य कार्यहरूसँग मिल्ने केन्द्रित उपकरणहरूको सेट, अनुकूलित system prompt, र सुरु गर्ने सुझावहरूसँग पूर्व-कन्फिगर गरिएको छ। Agents बीच स्विच गर्दा assistant ले के गर्न सक्छ र कसरी प्रतिक्रिया दिन्छ भन्ने परिवर्तन हुन्छ — तपाईंको तर्फबाट कुनै configuration बिना। Superdav AI Agent v1.18.0 ले सम्बन्धित integrations configure गरिएका बेला यी workflows मा schedule-aware tools, reminder records, approval gates, र SMS notifications थप्न सक्छ।

## Agent भनेको के हो? {#what-is-an-agent}

प्रत्येक agent एउटा नाम दिइएको configuration profile हो जसले संयोजन गर्छ:

- **Tools** — agent लाई invoke गर्न अनुमति दिइएका क्षमताहरू (जस्तै Content Writer सँग post-creation क्षमताहरूमा पहुँच हुन्छ; Design Studio सँग CSS र theme.json क्षमताहरूमा पहुँच हुन्छ)
- **System prompt** — agent को शैली, प्राथमिकता, र सीमाहरू तय गर्ने निर्देशनहरू
- **Suggestions** — छिटो सुरु गर्न मद्दतका लागि chat interface मा देखाइने पूर्व-लेखिएका prompts

## Agent Picker पहुँच गर्ने {#accessing-the-agent-picker}

1. WordPress admin sidebar मा **Gratis AI Agent** panel खोल्नुहोस्।
2. chat header को माथिल्लो-बायाँमा रहेको **agent icon** क्लिक गर्नुहोस् (icon सक्रिय agent प्रतिबिम्बित गर्न परिवर्तन हुन्छ)।
3. **Agent Picker** form-table overlay का रूपमा खुल्छ। प्रत्येक agent यसको icon, नाम, र एक-पङ्क्ति विवरणसहित सूचीबद्ध हुन्छ।
4. सक्रिय गर्न agent row क्लिक गर्नुहोस्। chat header तुरुन्तै update हुन्छ।

तपाईं कुराकानीको बीचमै agents स्विच गर्न पनि सक्नुहुन्छ — नयाँ agent को system prompt अर्को message देखि लागू हुन्छ।

## पाँच Built-in Agents {#the-five-built-in-agents}

### Content Writer {#content-writer}

**केन्द्र:** Posts, pages, र contact forms सिर्जना तथा सम्पादन।

**उपलब्ध tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`। Superdav AI Agent v1.18.0 integrations enable गरिएको भए, configure गरिएको calendar context, approval gates, reminders, र SMS notification tools पनि स्वीकृत workflows का लागि उपलब्ध हुन सक्छन्।

**यसले राम्ररी गर्ने कामहरू:**
- brief वा outline बाट blog posts मस्यौदा बनाउने र publish गर्ने
- नयाँ साइटका लागि landing pages को batches सिर्जना गर्ने
- contact र enquiry forms बनाउने
- URL वा search बाट posts मा featured images सेट गर्ने
- configure गरिएको Google Calendar context बाट event follow-up messages मस्यौदा बनाउने, त्यसपछि notifications पठाउनु अघि approval का लागि रोक्ने

**सुरुवाती सुझावहरू:**
- *WordPress multisite का फाइदाहरू बारे ५००-शब्दको blog post लेख्नुहोस्।*
- *About, Services, र Contact page सिर्जना गरी publish गर्नुहोस्।*
- *Contact page मा booking enquiry form थप्नुहोस्।*
- *भोलिको configure गरिएको calendar event का सहभागीहरूका लागि reminder मस्यौदा बनाउनुहोस् र पठाउनु अघि approval को प्रतीक्षा गर्नुहोस्।*

---

### Site Builder {#site-builder}

**केन्द्र:** एउटै prompt बाट सुरुदेखि अन्त्यसम्म website सिर्जना।

**उपलब्ध tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`। Superdav AI Agent v1.18.0 सँग, configure गरिएका managed-service, approval, reminder, calendar, र SMS tools administrators ले enable गरेका ठाउँमा उपलब्ध हुन सक्छन्।

**यसले राम्ररी गर्ने कामहरू:**
- वर्णन गरिएको business type का लागि multi-phase site build plan उत्पन्न गर्ने
- प्रत्येक चरणलाई autonomously कार्यान्वयन गर्ने — संरचना, content, navigation, design
- manual intervention आवश्यक नपर्ने गरी mid-plan errors बाट पुनःउठ्ने
- build को भागका रूपमा recommended plugins install गर्ने
- chat interface बाट सिधै contact forms सिर्जना गर्ने (Superdav AI Agent v1.10.0+)
- approval gates र reminder records enable गरिएका बेला duplicate notifications बिना launch reminders वा attendee follow-up समन्वय गर्ने

**सुरुवाती सुझावहरू:**
- *gallery post type, booking page, र contact form सहित photography portfolio site बनाउनुहोस्।*
- *online menu, opening hours, र table-booking enquiry form सहित restaurant website सिर्जना गर्नुहोस्।*
- *service pages, portfolio section, र blog सहित freelance consulting site सेट अप गर्नुहोस्।*
- *site builder प्रयोग गरेर Contact page मा contact form थप्नुहोस्।*
- *site launch checklist स्वीकृत भएपछि, configure गरिएको stakeholder contact लाई SMS reminder पठाउनुहोस्।*

---

### Design Studio {#design-studio}

**केन्द्र:** Visual customisation — colours, typography, CSS, र block patterns।

**उपलब्ध tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**यसले राम्ररी गर्ने कामहरू:**
- नाम दिइएका theme presets लागू गर्ने (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json मार्फत global typography र colour palettes fine-tune गर्ने
- brand-specific overrides का लागि custom CSS inject गर्ने
- page को screenshot लिने र design issues का लागि review गर्ने

**सुरुवाती सुझावहरू:**
- *warm-editorial preset लागू गर्नुहोस् र त्यसपछि primary colour #2d6a4f मा सेट गर्नुहोस्।*
- *homepage को screenshot लिनुहोस् र के सुधार गर्नुहुन्थ्यो मलाई भन्नुहोस्।*
- *full-width background image र centred heading सहित reusable hero block pattern सिर्जना गर्नुहोस्।*

### Plugin Manager {#plugin-manager}

**केन्द्र:** WordPress plugins खोज्ने, install गर्ने, र व्यवस्थापन गर्ने।

**उपलब्ध tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**यसले राम्ररी गर्ने कामहरू:**
- वर्णन गरिएको use case का लागि उत्तम plugin सिफारिस गर्ने
- registry बाट ability packs install गर्ने
- category अनुसार उपलब्ध ability catalogue browse गर्ने

**सुरुवाती सुझावहरू:**
- *membership directory का लागि उत्तम plugin के हो?*
- *WooCommerce abilities pack install गर्नुहोस्।*
- *सबै उपलब्ध ecommerce ability packs देखाउनुहोस्।*

---

### Support Assistant {#support-assistant}

**केन्द्र:** site content, settings, र WordPress configuration बारे प्रश्नहरूको उत्तर दिने।

**उपलब्ध tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**यसले राम्रो गर्ने कुरा:**
- हालको साइट सेटिङहरू र विकल्पहरू खोज्ने
- साइटमा कुन पोस्ट प्रकारहरू, वर्गीकरणहरू, र मेनुहरू कन्फिगर गरिएका छन् भनेर व्याख्या गर्ने
- प्रत्यक्ष मानहरू पढेर "यो सेटिङले के गर्छ?" भन्ने प्रश्नहरूको उत्तर दिने
- परिवर्तनहरू गर्नु अघि पढ्न-मात्र निदान तहको रूपमा सेवा गर्ने

**सुरुवाती सुझावहरू:**
- *यस साइटमा हाल कुन plugin हरू र सेटिङहरू सक्रिय छन्?*
- *यस साइटमा दर्ता गरिएका सबै custom post प्रकारहरूको सूची दिनुहोस्।*
- *कस्ता नेभिगेसन मेनुहरू छन् र ती कहाँ तोकिएका छन्?*

---

## Superdav स्वचालन एकीकरणहरू {#superdav-automation-integrations}

जब Superdav AI Agent v1.18.0 एकीकरणहरू कन्फिगर गरिन्छन्, निर्मित agent हरूले बढी सुरक्षित तालिका-सचेत स्वचालन कार्यप्रवाहहरूमा भाग लिन सक्छन्:

- **Google Calendar पढ्ने उपकरणहरू** ले agent हरूलाई पछ्याउने काम मस्यौदा गर्नु अघि कन्फिगर गरिएका क्यालेन्डरहरू र घटनाहरू निरीक्षण गर्न अनुमति दिन्छ।
- **सम्पर्क र सहभागी म्यापिङ** ले घटना सहभागीहरूलाई WordPress प्रयोगकर्ता वा ज्ञात सम्पर्कहरूसँग मिलाउन मद्दत गर्छ।
- **मानव स्वीकृति द्वारहरू** ले संवेदनशील कार्यहरूलाई अधिकृत प्रयोगकर्ताले समीक्षा र पुष्टि नगरेसम्म रोक्छ।
- **स्मरण रेकर्डहरू** ले तालिकाबद्ध कामहरू पुन: प्रयास वा दोहोरिँदा नक्कली सूचनाहरू रोक्छ।
- **TextBee SMS सूचनाहरू** ले SMS प्रमाणपत्रहरू र कार्यप्रवाह अनुमतिहरू सक्षम हुँदा मात्र कन्फिगर गरिएका पाठ सन्देशहरू पठाउँछ।

सिफारिस गरिएको कार्यप्रवाह: agent लाई सन्देश वा कार्य तयार गर्न भन्नुहोस्, स्वीकृति संकेत समीक्षा गर्नुहोस्, त्यसपछि स्वीकृत कार्यलाई पुनः सुरु हुन अनुमति दिनुहोस्। दोहोरिने स्मरणहरूका लागि, स्मरण डिडुप्लिकेसन सक्षम राख्नुहोस् ताकि एउटै घटना वा सम्पर्कलाई बारम्बार सूचित नगरियोस्।

---

## Agent हरू अनुकूलन गर्दै {#customising-agents}

प्रत्येक निर्मित agent लाई `gratis_ai_agent_agents` filter मार्फत विस्तार वा प्रतिस्थापन गर्न सकिन्छ।

### विद्यमान agent मा custom system prompt थप्दै {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### नयाँ agent दर्ता गर्दै {#registering-a-new-agent}

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

नयाँ agent filter चलेपछि तुरुन्तै Agent Picker मा देखिन्छ।

### निर्मित agent हटाउँदै {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
