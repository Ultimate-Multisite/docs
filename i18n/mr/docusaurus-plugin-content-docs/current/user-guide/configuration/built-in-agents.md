---
title: अंतर्निहित एजंट्स
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# बिल्ट-इन एजंट्स (Built-in Agents)

Gratis AI Agent v1.9.0 मध्ये पाच बिल्ट-इन एजंट्स (built-in agents) आहेत. प्रत्येक एजंट एका विशिष्ट सेटच्या टूल्स (tools), एका खास सिस्टम प्रॉम्प्ट (system prompt) आणि त्या क्षेत्रातील सामान्य कामांशी जुळणारे स्टार्टर सजेस्टेशन्स (starter suggestions) सह पूर्व-कॉन्फिगर केलेला असतो. एजंट्समध्ये बदल केल्याने असिस्टंट काय करू शकतो आणि तो कसा प्रतिसाद देतो, यात बदल होतो — आणि यासाठी तुम्हाला कोणतीही कॉन्फिगरेशन करण्याची गरज नाही.

## एजंट म्हणजे काय? (What Is an Agent?)

प्रत्येक एजंट म्हणजे एक नाव दिलेले कॉन्फिगरेशन प्रोफाइल (configuration profile) जे खालील गोष्टी एकत्र करते:

- **टूल्स (Tools)** — एजंटला कोणती क्षमता वापरण्याची परवानगी आहे (उदा. Content Writer कडे पोस्ट तयार करण्याची क्षमता असते; Design Studio कडे CSS आणि theme.json क्षमता असते).
- **सिस्टम प्रॉम्प्ट (System prompt)** — हे असे निर्देश असतात जे एजंटचा टोन, प्राधान्यक्रम आणि मर्यादा निश्चित करतात.
- **सजेस्टेशन्स (Suggestions)** — चॅट इंटरफेसमध्ये दिसणारे पूर्व-लिखित प्रॉम्प्ट्स, जे तुम्हाला पटकन सुरुवात करण्यासाठी मदत करतात.

## एजंट पिकरमध्ये प्रवेश करणे (Accessing the Agent Picker)

1. WordPress admin sidebar मध्ये **Gratis AI Agent** पॅनेल उघडा.
2. चॅट हेडरच्या वरच्या डाव्या कोपऱ्यात असलेल्या **एजंट आयकॉनवर** क्लिक करा (सक्रिय एजंट दर्शवण्यासाठी आयकॉन बदलतो).
3. **Agent Picker** एक फॉर्म-टेबल ओव्हरले (form-table overlay) म्हणून उघडतो. प्रत्येक एजंट त्याच्या आयकॉन, नावाने आणि एका ओळीच्या वर्णनासह सूचीबद्ध केला जातो.
4. तो एजंट सक्रिय करण्यासाठी एजंट रो (agent row) वर क्लिक करा. चॅट हेडर त्वरित अपडेट होतो.

तुम्ही संभाषणाच्या मध्यभागी एजंट्समध्ये बदल करू शकता — नवीन एजंटचा सिस्टम प्रॉम्प्ट पुढील मेसेजपासून लागू होतो.

## पाच बिल्ट-इन एजंट्स (The Five Built-in Agents)

### Content Writer

**लक्ष्य:** पोस्ट्स, पेजेस आणि संपर्क फॉर्म तयार करणे आणि संपादित करणे.

**उपलब्ध टूल्स:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**हे काय चांगले करते:**
- थोडक्यात माहिती किंवा आउटलाइनवरून ब्लॉग पोस्टचा मसुदा तयार करणे आणि प्रकाशित करणे.
- नवीन साइटसाठी लँडिंग पेजेसचे बॅच (batches) तयार करणे.
- संपर्क आणि चौकशी फॉर्म तयार करणे.
- URL किंवा शोधावरून पोस्टवर फीचर इमेज सेट करणे.

**स्टार्टर सजेस्टेशन्स:**
- *WordPress multisite च्या फायद्यांवर ५०० शब्दांचा ब्लॉग पोस्ट लिहा.*
- *एक About, Services आणि Contact पेज तयार करा आणि प्रकाशित करा.*
- *Contact पेजवर बुकिंग चौकशी फॉर्म जोडा.*

---

### Site Builder

**लक्ष्य:** एकाच प्रॉम्प्टवरून संपूर्ण वेबसाइट तयार करणे.

**उपलब्ध टूल्स:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**हे काय चांगले करते:**
- वर्णन केलेल्या व्यवसाय प्रकारासाठी मल्टी-फेज साइट बिल्ड प्लॅन तयार करणे.
- प्रत्येक फेज स्वायत्तपणे कार्यान्वित करणे — संरचना, सामग्री, नेव्हिगेशन, डिझाइन.
- मॅन्युअल हस्तक्षेप न करता प्लॅनच्या मध्यभागी त्रुटींमधून (errors) रिकव्हर करणे.
- बिल्डचा भाग म्हणून शिफारस केलेले प्लगइन्स स्थापित करणे.
- चॅट इंटरफेसवरून थेट संपर्क फॉर्म तयार करणे (Superdav AI Agent v1.10.0+).

**स्टार्टर सजेस्टेशन्स:**
- *गॅलरी पोस्ट प्रकार, बुकिंग पेज आणि संपर्क फॉर्मसह फोटोग्राफी पोर्टफोलिओ साइट तयार करा.*
- *ऑनलाइन मेनू, उघडण्याचे तास आणि टेबल-बुकिंग चौकशी फॉर्मसह रेस्टॉरंट वेबसाइट तयार करा.*
- *सेवा पेजेस, पोर्टफोलिओ सेक्शन आणि ब्लॉगसह फ्रीलान्स कन्सल्टिंग साइट सेट करा.*
- *साइट बिल्डर वापरून Contact पेजवर संपर्क फॉर्म जोडा.*

---

### Design Studio

**लक्ष्य:** व्हिज्युअल कस्टमायझेशन — रंग, टायपोग्राफी, CSS आणि ब्लॉक पॅटर्न.

**उपलब्ध टूल्स:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**हे काय चांगले करते:**
- नामनिर्देशित थीम प्रीसेट (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) लागू करणे.
- theme.json द्वारे ग्लोबल टायपोग्राफी आणि कलर पॅलेट फाइन-ट्यून करणे.
- ब्रँड-विशिष्ट ओव्हरराइडसाठी कस्टम CSS इंजेक्ट करणे.
- पेजचा स्क्रीनशॉट घेऊन डिझाइन समस्यांसाठी त्याचे पुनरावलोकन करणे.

**स्टार्टर सजेस्टेशन्स:**
- *warm-editorial प्रीसेट लागू करा आणि नंतर प्राथमिक रंग #2d6a4f सेट करा.*
- *होमपेजचा स्क्रीनशॉट घ्या आणि मला सांगा की तुम्ही काय सुधारू शकाल.*
- *पूर्ण-रुंदीची बॅकग्राउंड इमेज आणि मध्यभागी शीर्षक असलेला एक पुनर्वापर करण्यायोग्य (reusable) हिरो ब्लॉक पॅटर्न तयार करा.*

---

### Plugin Manager

**लक्ष्य:** WordPress प्लगइन्स शोधणे, स्थापित करणे आणि व्यवस्थापित करणे.

**उपलब्ध टूल्स:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**हे काय चांगले करते:**
- वर्णन केलेल्या वापराच्या केससाठी सर्वोत्तम प्लगइन शिफारस करणे.
- रजिस्ट्रीमधून क्षमता पॅक्स (ability packs) स्थापित करणे.
- श्रेणीनुसार उपलब्ध क्षमता कॅटलॉगमध्ये ब्राउझ करणे.

**स्टार्टर सजेस्टेशन्स:**
- *सदस्यता निर्देशिका (membership directory) साठी सर्वोत्तम प्लगइन कोणते आहे?*
- *WooCommerce abilities pack स्थापित करा.*
- *उपलब्ध सर्व ई-कॉमर्स क्षमता पॅक्स दाखवा.*

---

### Support Assistant

**लक्ष्य:** साइटची सामग्री, सेटिंग्ज आणि WordPress कॉन्फिगरेशनबद्दल प्रश्न विचारल्यास उत्तरे देणे.

**उपलब्ध टूल्स:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**हे काय चांगले करते:**
- सध्याची साइट सेटिंग्ज आणि पर्याय तपासणे.
- साइटवर कोणते पोस्ट प्रकार (post types), टॅक्सोनॉमी (taxonomies) आणि मेनू कॉन्फिगर केले आहेत हे स्पष्ट करणे.
- थेट मूल्ये वाचून "हे सेटिंग काय करते?" या प्रश्नांची उत्तरे देणे.
- बदल करण्यापूर्वी वाच-केवळ निदान स्तर (read-only diagnostic layer) म्हणून कार्य करणे.

**स्टार्टर सजेस्टेशन्स:**
- *या साइटवर सध्या कोणते प्लगइन्स आणि सेटिंग्ज सक्रिय आहेत?*
- *या साइटवर नोंदणीकृत सर्व कस्टम पोस्ट प्रकार सूचीबद्ध करा.*
- *कोणते नेव्हिगेशन मेनू अस्तित्वात आहेत आणि ते कुठे नियुक्त केले आहेत?*

---

## एजंट्स कस्टमाइझ करणे (Customising Agents)

प्रत्येक बिल्ट-इन एजंटला `gratis_ai_agent_agents` फिल्टरद्वारे विस्तारित (extended) किंवा बदलले जाऊ शकते.

### विद्यमान एजंटला कस्टम सिस्टम प्रॉम्प्ट जोडणे

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### नवीन एजंट नोंदणीकरण करणे (Registering a new agent)

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

हा नवीन एजंट फिल्टर चालवल्यानंतर लगेच एजंट पिकरमध्ये दिसतो.

### बिल्ट-इन एजंट काढणे (Removing a built-in agent)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
