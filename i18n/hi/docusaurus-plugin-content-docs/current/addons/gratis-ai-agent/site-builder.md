---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (जो Gratis AI Agent v1.4.0 में पेश किया गया था) वह इंजन है जो मल्टी-स्टेप वेबसाइट बनाने की प्रक्रिया को शक्ति देता है। जब आप एजेंट से "एक रेस्टोरेंट की वेबसाइट बनाएं" या "ब्लॉग के साथ एक पोर्टफोलियो बनाएं" कहते हैं, तो ऑर्केस्ट्रेटर उस बड़े लक्ष्य को एक संरचित **प्लान** में तोड़ देता है, उसे पूरा करने के लिए आवश्यक प्लगइन्स का पता लगाता है, हर कदम को क्रम से चलाता है, प्रगति को ट्रैक करता है, और त्रुटियों से स्वायत्त रूप से उबरता है।

---

## यह कैसे काम करता है {#how-it-works}

### 1. प्लान जनरेशन {#1-plan-generation}

जब एजेंट को वेबसाइट बनाने का निर्देश मिलता है, तो यह एक JSON **साइट प्लान** बनाने के लिए `create_site_plan` क्षमता (ability) को कॉल करता है। यह प्लान निम्नलिखित का वर्णन करता है:

- **Goal** — तैयार साइट को क्या करना चाहिए
- **Phases** — कदमों के क्रमबद्ध समूह (जैसे: _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — प्रत्येक चरण के भीतर व्यक्तिगत क्षमता कॉल (ability calls)
- **Plugin requirements** — वे प्लगइन्स जो कुछ चरणों को चलाने के लिए सक्रिय होने चाहिए
- **Fallbacks** — वैकल्पिक कदम यदि कोई प्राथमिक कदम विफल हो जाता है

**उदाहरण प्लान (संक्षिप्त)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "ऑनलाइन मेनू, बुकिंग फॉर्म और संपर्क पेज के साथ एक रेस्टोरेंट वेबसाइट बनाएं",
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
    { "slug": "contact-form-7", "reason": "बुकिंग और संपर्क फॉर्म के लिए आवश्यक" }
  ]
}
```

### 2. प्लगइन डिस्कवरी {#2-plugin-discovery}

निष्पादन शुरू होने से पहले, ऑर्केस्ट्रेटर प्लान के `plugin_requirements` को स्कैन करता है और जांच करता है कि कौन से प्लगइन्स पहले से सक्रिय हैं। लापता प्लगइन्स के लिए, यह:

1. सर्वश्रेष्ठ मिलान के लिए `recommend_plugin` के माध्यम से रजिस्ट्री में खोज करता है
2. सिफारिश की पुष्टि करने के लिए एजेंट से पूछता है
3. अनुमोदन होने पर इंस्टॉलेशन शुरू करता है (या यदि सेटिंग्स में ऑटो-इंस्टॉल सक्षम है)

प्लगइन डिस्कवरी विफल होना कोई बड़ी बात नहीं है — ऑर्केस्ट्रेटर प्रभावित चरणों को `skipped` के रूप में चिह्नित करता है और प्लान के बाकी हिस्सों के साथ जारी रखता है।

### 3. प्लान निष्पादन {#3-plan-execution}

ऑर्केस्ट्रेटर प्लान ID के साथ `execute_site_plan` को कॉल करता है। निष्पादन चरण-दर-चरण, चरण-दर-चरण आगे बढ़ता है:

- **Step references** (`__ref:` प्रीफ़िक्स) — चरण पिछले चरणों के आउटपुट का संदर्भ दे सकते हैं। ऊपर दिए गए उदाहरण में, `__ref:create_menu.menu_id` को `create_menu` चरण द्वारा लौटाए गए `menu_id` में हल किया जाता है।
- **Parallel steps** — एक ही चरण के भीतर के वे चरण जिनमें कोई आपसी निर्भरता नहीं होती है, उन्हें `parallel` फ़्लैग सेट होने पर एक साथ (concurrently) भेजा जाता है।
- **Step timeout** — प्रत्येक चरण का एक व्यक्तिगत टाइमआउट होता है (डिफ़ॉल्ट: `Ability Timeout` सेटिंग)। टाइमआउट होने वाले चरण को `failed` के रूप में चिह्नित किया जाता है और प्लान आगे बढ़ता रहता है।

### 4. प्रगति ट्रैकिंग {#4-progress-tracking}

निष्पादन की स्थिति की जांच करने के लिए किसी भी समय `get_plan_progress` को कॉल करें:

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

WP-CLI उपयोगकर्ता निम्न के साथ प्रगति की निगरानी कर सकते हैं:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. त्रुटि रिकवरी {#5-error-recovery}

जब कोई चरण विफल होता है, तो ऑर्केस्ट्रेटर प्लान में परिभाषित **fallback** चरण की जांच करता है:

- **Fallback available** — फॉलबैक चरण को तुरंत आजमाया जाता है। यदि यह सफल होता है, तो निष्पादन जारी रहता है। यदि यह भी विफल हो जाता है, तो चरण को `failed` के रूप में चिह्नित किया जाता है और निष्पादन अगले चरण के साथ जारी रहता है।
- **No fallback** — चरण को `failed` के रूप में चिह्नित किया जाता है। गैर-महत्वपूर्ण (non-critical) चरणों को छोड़ दिया जाता है; महत्वपूर्ण चरण (जो `required: true` चिह्नित हैं) वर्तमान चरण को रोक देते हैं और एक चरण-स्तर की रिकवरी का प्रयास शुरू करते हैं।

एजेंट अंतिम प्लान सारांश में सभी विफलताओं की रिपोर्ट करता है और अप्राप्य त्रुटियों के लिए मैन्युअल सुधार के चरण सुझा सकता है।

---

## Site Plan Abilities {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

प्राकृतिक भाषा के लक्ष्य विवरण से एक संरचित साइट प्लान उत्पन्न करता है।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | वांछित वेबसाइट का प्राकृतिक भाषा विवरण |
| `style` | string | No | विज़ुअल स्टाइल प्राथमिकता: `minimal`, `bold`, `professional`, `playful`। डिफ़ॉल्ट: एजेंट लक्ष्य के आधार पर चुनता है |
| `plugins` | array | No | प्लान में शामिल किए जाने वाले प्लगइन स्लग्ज़। ऑर्केस्ट्रेटर आवश्यक प्लगइन्स स्वचालित रूप से जोड़ता है। |
| `dry_run` | boolean | No | यदि `true` है, तो यह प्लान JSON लौटाता है बिना उसे सेव या निष्पादित किए। डिफ़ॉल्ट `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

पहले से उत्पन्न साइट प्लान को निष्पादित करना शुरू करता है।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | निष्पादित करने के लिए प्लान का ID |
| `auto_install_plugins` | boolean | No | यदि `true` है, तो पुष्टि के बिना आवश्यक प्लगइन्स स्वचालित रूप से इंस्टॉल करता है। डिफ़ॉल्ट `false` |
| `max_retries` | integer | No | आगे बढ़ने से पहले विफल चरण को पुनः प्रयास करने की संख्या। डिफ़ॉल्ट `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

साइट प्लान की वर्तमान निष्पादन स्थिति लौटाता है।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | क्वेरी करने के लिए प्लान ID |

**Returns** ऊपर दिए गए [Progress Tracking](#4-progress-tracking) में वर्णित प्रगति ऑब्जेक्ट।

---

### `handle_plan_error` {#handleplanerror}

एक विफल चरण को मैन्युअल रूप से हल करता है और अगले चरण से प्लान निष्पादन फिर से शुरू करता है। इसका उपयोग तब करें जब स्वचालित रिकवरी संभव न हो और आप हस्तक्षेप करना चाहते हों।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | प्लान ID |
| `step_id` | string | Yes | विफल चरण का ID |
| `resolution` | string | Yes | `skip` (छोड़ दें और जारी रखें), `retry` (चरण को तुरंत पुनः प्रयास करें), या `mark_done` (पुनः चलाए बिना सफल मानें) में से कोई एक |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 और v2 की तुलना {#comparing-v1-and-v2}

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

एक लक्ष्य विवरण से एक साइट प्लान उत्पन्न करता है।

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

पहले से उत्पन्न प्लान को निष्पादित करता है।

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

निष्पादित या पूर्ण प्लान के लिए वर्तमान प्रगति दिखाता है।

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

सभी साइट प्लान (लंबित, प्रगति पर, और पूर्ण) सूचीबद्ध करता है।

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

एक विफल प्लान को `pending` पर रीसेट करता है ताकि इसे शुरू से फिर से निष्पादित किया जा सके।

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
