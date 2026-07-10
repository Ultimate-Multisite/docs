---
title: साईट बिल्डर ऑर्केस्ट्रेशन v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (जी Gratis AI Agent v1.4.0 मध्ये सादर केले आहे) हे मल्टी-स्टेप वेबसाइट तयार करण्यासाठी वापरले जाणारे मुख्य इंजिन आहे. जेव्हा तुम्ही एजंटला "रेस्टॉरंटची वेबसाइट तयार करा" किंवा "ब्लॉगसह पोर्टफोलिओ तयार करा" असे सांगता, तेव्हा हा ऑर्केस्ट्रेटर (orchestrator) त्या मोठ्या ध्येयाला एका संरचित **योजनेत (plan)** विभाजित करतो, ते पूर्ण करण्यासाठी आवश्यक असलेले प्लगइन्स शोधतो, प्रत्येक पायरी क्रमाने कार्यान्वित करतो, प्रगतीचा मागोवा घेतो आणि त्रुटींमधून आपोआप सावरतो.

---

## हे कसे कार्य करते {#how-it-works}

### १. योजना निर्मिती (Plan Generation) {#1-plan-generation}

जेव्हा एजंटला वेबसाइट तयार करण्याचे निर्देश मिळतात, तेव्हा ते एक JSON **साइट प्लॅन** तयार करण्यासाठी `create_site_plan` या क्षमतेचे (ability) कॉल करते. या प्लॅनमध्ये खालील गोष्टींचे वर्णन असते:

- **ध्येय (Goal)** — तयार झालेल्या वेबसाइटने काय कार्य केले पाहिजे.
- **टप्पे (Phases)** — पायऱ्यांचे क्रमाने गट (उदा. _Setup_, _Content Types_, _Design_, _Content_).
- **पायऱ्या (Steps)** — प्रत्येक टप्प्यातील वैयक्तिक क्षमता कॉल (individual ability calls).
- **प्लगइन आवश्यकता (Plugin requirements)** — काही पायऱ्या चालवण्यासाठी कोणते प्लगइन्स सक्रिय असणे आवश्यक आहे.
- **बॅकअप योजना (Fallbacks)** — जर प्राथमिक पायरी अयशस्वी झाली, तर पर्यायी पायऱ्या.

**उदाहरणात्मक योजना (abbreviated)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Build a restaurant website with an online menu, booking form, and contact page",
  "phases": [
    {
      "id": "setup",
      "label": "Setup",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Menu Item", "plural_label": "Menu Items" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Menu Section", "plural_label": "Menu Sections", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Design",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigation",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Primary Navigation", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Menu", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Book a Table", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Required for the booking and contact forms" }
  ]
}
```

### २. प्लगइन शोध (Plugin Discovery) {#2-plugin-discovery}

कार्यवाही सुरू होण्यापूर्वी, ऑर्केस्ट्रेटर प्लॅनमधील `plugin_requirements` स्कॅन करतो आणि कोणते प्लगइन्स आधीच सक्रिय आहेत हे तपासतो. आवश्यक प्लगइन्स नसल्यास, तो:

१. सर्वोत्तम जुळणारे प्लगइन शोधण्यासाठी `recommend_plugin` द्वारे रजिस्ट्रीमध्ये शोध घेतो.
२. शिफारसची पुष्टी करण्यासाठी एजंटला सूचना देतो.
३. मंजुरी मिळाल्यास (किंवा सेटिंग्जमध्ये auto-install सक्षम असल्यास) इन्स्टॉलेशन ट्रिगर करतो.

प्लगइन शोध अयशस्वी झाल्यास ती गंभीर समस्या नसते — ऑर्केस्ट्रेटर प्रभावित पायऱ्या `skipped` म्हणून चिन्हांकित करतो आणि प्लॅनच्या उर्वरित भागासह पुढे चालू राहतो.

### ३. प्लॅन कार्यान्वयन (Plan Execution) {#3-plan-execution}

ऑर्केस्ट्रेटर प्लॅन आयडीसह `execute_site_plan` कॉल करतो. कार्यान्वयन टप्पा-दर-टप्पा, पायरी-दर-पायरी पुढे जाते:

- **पायरी संदर्भ (Step references)** (`__ref:` prefix) — पायऱ्या मागील पायऱ्यांच्या आउटपुटचा संदर्भ घेऊ शकतात. वरील उदाहरणात, `__ref:create_menu.menu_id` हे `create_menu` पायरीने परत केलेल्या `menu_id` ला सोडवले जाते.
- **समांतर पायऱ्या (Parallel steps)** — एकाच टप्प्यातील ज्या पायऱ्या एकमेकांवर अवलंबून नाहीत, त्या `parallel` फ्लॅग सेट केल्यावर एकाच वेळी (concurrently) पाठवल्या जातात.
- **पायरी टाइमआउट (Step timeout)** — प्रत्येक पायरीसाठी एक स्वतंत्र टाइमआउट असतो (डीफॉल्ट: `Ability Timeout` सेटिंग). टाइमआउट झालेल्या पायरीला `failed` म्हणून चिन्हांकित केले जाते आणि प्लॅन पुढे चालू राहतो.

### ४. प्रगतीचा मागोवा (Progress Tracking) {#4-progress-tracking}

कार्यवाहीची स्थिती तपासण्यासाठी कधीही `get_plan_progress` कॉल करा:

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

WP-CLI वापरकर्ते खालीलप्रमाणे प्रगतीचे निरीक्षण करू शकतात:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### ५. त्रुटी निवारण (Error Recovery) {#5-error-recovery}

जेव्हा एखादी पायरी अयशस्वी होते, तेव्हा ऑर्केस्ट्रेटर प्लॅनमध्ये परिभाषित केलेल्या **बॅकअप (fallback)** पायरीची तपासणी करतो:

- **बॅकअप उपलब्ध (Fallback available)** — बॅकअप पायरी त्वरित करण्याचा प्रयत्न केला जातो. जर ती यशस्वी झाली, तर कार्यान्वयन पुढे चालू राहते. जर ती देखील अयशस्वी झाली, तर पायरीला `failed` म्हणून चिन्हांकित केले जाते आणि पुढील पायरीसह कार्यान्वयन सुरू राहते.
- **बॅकअप नाही (No fallback)** — पायरीला `failed` म्हणून चिन्हांकित केले जाते. गैर-गंभीर (non-critical) पायऱ्या वगळल्या जातात; गंभीर पायऱ्या (ज्याला `required: true` म्हणून चिन्हांकित केले आहे) सध्याचा टप्पा थांबवतात आणि टप्पा-स्तरीय पुनर्प्राप्ती (phase-level recovery) करण्याचा प्रयत्न ट्रिगर करतात.

एजंट सर्व त्रुटी अंतिम प्लॅन सारांशात (summary) अहवाल देतो आणि पुनर्प्राप्त न करता येणाऱ्या त्रुटींसाठी मॅन्युअल सुधारणा पायऱ्या सुचवू शकतो.

---

## Site Plan Abilities {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

नैसर्गिक भाषेतील ध्येय वर्णन (natural language goal description) वापरून संरचित साइट प्लॅन तयार करते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | अपेक्षित वेबसाइटचे नैसर्गिक भाषेतील वर्णन |
| `style` | string | No | दृश्य शैलीची प्राधान्यता: `minimal`, `bold`, `professional`, `playful`. डीफॉल्ट: एजंट ध्येयानुसार निवडतो |
| `plugins` | array | No | प्लॅनमध्ये समाविष्ट करण्यासाठी प्लगइन slugs. ऑर्केस्ट्रेटर आवश्यक प्लगइन्स आपोआप जोडतो. |
| `dry_run` | boolean | No | जर `true` असेल, तर प्लॅन JSON परत करतो, तो सेव्ह किंवा कार्यान्वित करत नाही. डीफॉल्ट `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

आधी तयार केलेला साइट प्लॅन कार्यान्वित करण्यास सुरुवात करते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | कार्यान्वित करण्यासाठी प्लॅनचा आयडी |
| `auto_install_plugins` | boolean | No | जर `true` असेल, तर पुष्टीकरण न करता आवश्यक प्लगइन्स आपोआप इन्स्टॉल करतो. डीफॉल्ट `false` |
| `max_retries` | integer | No | पुढे जाण्यापूर्वी अयशस्वी झालेल्या पायरीचा पुन्हा प्रयत्न करण्याची संख्या. डीफॉल्ट `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

साइट प्लॅनची सध्याची कार्यान्वयन स्थिती परत करते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ज्या प्लॅनची चौकशी करायची आहे त्याचा आयडी |

**Returns** वरील [Progress Tracking](#4-progress-tracking) मध्ये वर्णन केलेला प्रगती ऑब्जेक्ट.

---

### `handle_plan_error` {#handleplanerror}

एखादी अयशस्वी झालेली पायरी मॅन्युअली सोडवते आणि पुढील पायरीपासून प्लॅन कार्यान्वयन पुन्हा सुरू करते. जेव्हा आपोआप पुनर्प्राप्ती शक्य नसते आणि तुम्हाला हस्तक्षेप करायचा असतो तेव्हा याचा वापर करा.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | प्लॅनचा आयडी |
| `step_id` | string | Yes | अयशस्वी झालेल्या पायरीचा आयडी |
| `resolution` | string | Yes | `skip` ( वगळून पुढे जाणे), `retry` (पायरी त्वरित पुन्हा प्रयत्न करणे), किंवा `mark_done` (पुन्हा न चालवता यशस्वी मानणे) यापैकी एक. |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 आणि v2 ची तुलना {#comparing-v1-and-v2}

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans | No | Yes |
| Step output references (`__ref:`) | No | Yes |
| Plugin discovery | Manual | Automatic |
| Progress tracking API | No | Yes |
| Error recovery | Fail-and-stop | Fallback + continue |
| Parallel step execution | No | Yes (opt-in per phase) |
| WP-CLI plan commands | No | Yes |
| Benchmark integration | No | Yes (`q-restaurant-website`) |

---

## WP-CLI Plan Commands {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

ध्येय वर्णन वापरून साइट प्लॅन तयार करते.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

आधी तयार केलेला प्लॅन कार्यान्वित करते.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

चालू किंवा पूर्ण झालेल्या प्लॅनची सध्याची प्रगती दर्शवते.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

सर्व साइट प्लॅनची यादी करते (pending, in-progress, आणि completed).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

एखादा अयशस्वी झालेला प्लॅन `pending` वर रीसेट करतो जेणेकरून तो सुरुवातीपासून पुन्हा कार्यान्वित केला जाऊ शकेल.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
