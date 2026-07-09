---
title: अंगभूत एजंट्स
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# अंगभूत Agents {#built-in-agents}

Gratis AI Agent v1.9.0 मध्ये पाच अंगभूत agents आहेत, प्रत्येकामध्ये केंद्रित साधनांचा संच, अनुरूप system prompt, आणि त्या क्षेत्रातील सामान्य कामांशी जुळणाऱ्या प्रारंभिक सूचना पूर्व-कॉन्फिगर केलेल्या आहेत. agents दरम्यान बदलल्याने assistant काय करू शकतो आणि कसा प्रतिसाद देतो ते बदलते — तुमच्याकडून कोणतेही कॉन्फिगरेशन न करता. संबंधित एकत्रीकरणे कॉन्फिगर केली असतील तेव्हा Superdav AI Agent v1.18.0 या कार्यप्रवाहांमध्ये वेळापत्रक-जागरूक साधने, स्मरणपत्र नोंदी, मंजुरी gates, आणि SMS सूचना जोडू शकतो.

## Agent म्हणजे काय? {#what-is-an-agent}

प्रत्येक agent हे नाव दिलेले कॉन्फिगरेशन प्रोफाइल आहे जे एकत्र करते:

- **साधने** — agent ला वापरण्याची परवानगी असलेल्या क्षमता (उदा. Content Writer ला पोस्ट-निर्मिती क्षमतांमध्ये प्रवेश आहे; Design Studio ला CSS आणि theme.json क्षमतांमध्ये प्रवेश आहे)
- **System prompt** — agent चा स्वर, प्राधान्ये, आणि मर्यादा सेट करणाऱ्या सूचना
- **सूचना** — तुम्हाला पटकन सुरुवात करण्यात मदत करण्यासाठी chat interface मध्ये दाखवलेले पूर्वलिखित prompts

## Agent Picker मध्ये प्रवेश करणे {#accessing-the-agent-picker}

1. WordPress admin sidebar मध्ये **Gratis AI Agent** panel उघडा.
2. chat header च्या वरच्या-डाव्या कोपऱ्यातील **agent icon** वर क्लिक करा (सक्रिय agent दर्शवण्यासाठी icon बदलतो).
3. **Agent Picker** form-table overlay म्हणून उघडतो. प्रत्येक agent त्याच्या icon, नाव, आणि एका ओळीच्या वर्णनासह सूचीबद्ध केला जातो.
4. agent row वर क्लिक करून तो सक्रिय करा. chat header त्वरित अपडेट होतो.

तुम्ही संभाषणाच्या मध्यभागीही agents बदलू शकता — नवीन agent चा system prompt पुढील संदेशापासून लागू होतो.

## पाच अंगभूत Agents {#the-five-built-in-agents}

### Content Writer {#content-writer}

**केंद्र:** पोस्ट, पृष्ठे, आणि संपर्क फॉर्म तयार करणे आणि संपादित करणे.

**उपलब्ध साधने:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 integrations सक्षम असल्यास, कॉन्फिगर केलेला calendar context, approval gates, reminders, आणि SMS notification साधनेही मंजूर कार्यप्रवाहांसाठी उपलब्ध असू शकतात.

**हे उत्तम प्रकारे काय करते:**
- brief किंवा outline वरून blog posts मसुदा तयार करणे आणि प्रकाशित करणे
- नवीन site साठी landing pages चे batches तयार करणे
- contact आणि enquiry forms तयार करणे
- URL किंवा search वरून posts वर featured images सेट करणे
- कॉन्फिगर केलेल्या Google Calendar context वरून event follow-up संदेशांचा मसुदा तयार करणे, नंतर notifications पाठवण्यापूर्वी approval साठी थांबणे

**प्रारंभिक सूचना:**
- *WordPress multisite च्या फायद्यांबद्दल 500 शब्दांची blog post लिहा.*
- *About, Services, आणि Contact page तयार करा आणि प्रकाशित करा.*
- *Contact page मध्ये booking enquiry form जोडा.*
- *उद्याच्या कॉन्फिगर केलेल्या calendar event मधील उपस्थितांसाठी reminder मसुदा तयार करा आणि ते पाठवण्यापूर्वी approval ची वाट पाहा.*

---

### Site Builder {#site-builder}

**केंद्र:** एकाच prompt वरून सुरुवातीपासून शेवटपर्यंत website निर्मिती.

**उपलब्ध साधने:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 सह, administrators सक्षम करतील तेथे कॉन्फिगर केलेली managed-service, approval, reminder, calendar, आणि SMS साधने उपलब्ध असू शकतात.

**हे उत्तम प्रकारे काय करते:**
- वर्णन केलेल्या business type साठी multi-phase site build plan तयार करणे
- प्रत्येक phase स्वायत्तपणे कार्यान्वित करणे — संरचना, content, navigation, design
- manual intervention न लागता plan च्या मध्यभागी errors मधून पुनर्प्राप्त होणे
- build चा भाग म्हणून शिफारस केलेले plugins install करणे
- chat interface मधून थेट contact forms तयार करणे (Superdav AI Agent v1.10.0+)
- approval gates आणि reminder records सक्षम असताना duplicate notifications न पाठवता launch reminders किंवा attendee follow-up समन्वयित करणे

**प्रारंभिक सूचना:**
- *gallery post type, booking page, आणि contact form सह photography portfolio site तयार करा.*
- *online menu, opening hours, आणि table-booking enquiry form सह restaurant website तयार करा.*
- *service pages, portfolio section, आणि blog सह freelance consulting site सेट करा.*
- *site builder वापरून Contact page मध्ये contact form जोडा.*
- *site launch checklist मंजूर झाल्यानंतर, कॉन्फिगर केलेल्या stakeholder contact ला SMS reminder पाठवा.*

---

### Design Studio {#design-studio}

**केंद्र:** दृश्य सानुकूलन — रंग, typography, CSS, आणि block patterns.

**उपलब्ध साधने:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**हे उत्तम प्रकारे काय करते:**
- नाव दिलेले theme presets लागू करणे (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json द्वारे global typography आणि colour palettes सूक्ष्म-समायोजित करणे
- brand-specific overrides साठी custom CSS inject करणे
- page चा screenshot घेणे आणि design issues साठी त्याचे review करणे

**प्रारंभिक सूचना:**
- *warm-editorial preset लागू करा आणि नंतर primary colour #2d6a4f वर सेट करा.*
- *homepage चा screenshot घ्या आणि तुम्ही काय सुधाराल ते मला सांगा.*
- *full-width background image आणि centred heading सह reusable hero block pattern तयार करा.*

### Plugin Manager {#plugin-manager}

**केंद्र:** WordPress plugins शोधणे, install करणे, आणि व्यवस्थापित करणे.

**उपलब्ध साधने:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**हे उत्तम प्रकारे काय करते:**
- वर्णन केलेल्या use case साठी सर्वोत्तम plugin ची शिफारस करणे
- registry मधून ability packs install करणे
- category नुसार उपलब्ध ability catalogue ब्राउझ करणे

**प्रारंभिक सूचना:**
- *membership directory साठी सर्वोत्तम plugin कोणता आहे?*
- *WooCommerce abilities pack install करा.*
- *सर्व उपलब्ध ecommerce ability packs दाखवा.*

---

### Support Assistant {#support-assistant}

**केंद्र:** site content, settings, आणि WordPress configuration बद्दल प्रश्नांची उत्तरे देणे.

**उपलब्ध साधने:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**हे चांगले काय करते:**
- सध्याच्या साइट सेटिंग्ज आणि पर्याय शोधणे
- साइटवर कोणते पोस्ट प्रकार, टॅक्सोनॉमी आणि मेनू कॉन्फिगर केले आहेत हे स्पष्ट करणे
- लाइव्ह मूल्ये वाचून "हे सेटिंग काय करते?" अशा प्रश्नांची उत्तरे देणे
- बदल करण्यापूर्वी read-only निदान स्तर म्हणून काम करणे

**सुरुवातीच्या सूचना:**
- *या साइटवर सध्या कोणते plugins आणि सेटिंग्ज सक्रिय आहेत?*
- *या साइटवर नोंदणीकृत सर्व custom post types सूचीबद्ध करा.*
- *कोणते नेव्हिगेशन मेनू अस्तित्वात आहेत आणि ते कुठे नियुक्त केले आहेत?*

---

## Superdav Automation Integrations {#superdav-automation-integrations}

जेव्हा Superdav AI Agent v1.18.0 integrations कॉन्फिगर केलेले असतात, तेव्हा अंगभूत agents अधिक सुरक्षित वेळापत्रक-जागरूक ऑटोमेशन कार्यप्रवाहांमध्ये सहभागी होऊ शकतात:

- **Google Calendar read tools** agents ना पुढील कामाचा मसुदा तयार करण्यापूर्वी कॉन्फिगर केलेली कॅलेंडर आणि इव्हेंट तपासण्याची परवानगी देतात.
- **संपर्क आणि सहभागी मॅपिंग** इव्हेंटमधील सहभागींना WordPress वापरकर्त्यांशी किंवा ज्ञात संपर्कांशी जुळवण्यास मदत करते.
- **मानवी मंजुरी गेट्स** अधिकृत वापरकर्ता त्यांचे पुनरावलोकन आणि पुष्टी करेपर्यंत संवेदनशील क्रिया थांबवतात.
- **स्मरणपत्र नोंदी** वेळापत्रकित जॉब्स पुन्हा प्रयत्न करतात किंवा पुनरावृत्ती होतात तेव्हा डुप्लिकेट सूचना टाळतात.
- **TextBee SMS सूचना** SMS क्रेडेन्शियल्स आणि कार्यप्रवाह परवानग्या सक्षम असतील तेव्हाच कॉन्फिगर केलेले मजकूर संदेश पाठवतात.

शिफारस केलेला कार्यप्रवाह: agent ला संदेश किंवा क्रिया तयार करण्यास सांगा, मंजुरी प्रॉम्प्टचे पुनरावलोकन करा, नंतर मंजूर केलेली क्रिया पुन्हा सुरू होऊ द्या. आवर्ती स्मरणपत्रांसाठी, स्मरणपत्र डीडुप्लिकेशन सक्षम ठेवा जेणेकरून त्याच इव्हेंट किंवा संपर्काला वारंवार सूचना मिळणार नाही.

---

## Agents सानुकूलित करणे {#customising-agents}

प्रत्येक अंगभूत agent `gratis_ai_agent_agents` filter द्वारे विस्तारित किंवा बदलला जाऊ शकतो.

### विद्यमान agent मध्ये सानुकूल system prompt जोडणे {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### नवीन agent नोंदणी करणे {#registering-a-new-agent}

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

नवीन agent filter चालल्यानंतर लगेच Agent Picker मध्ये दिसतो.

### अंगभूत agent काढून टाकणे {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
