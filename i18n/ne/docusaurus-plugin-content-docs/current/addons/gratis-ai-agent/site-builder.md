---
title: साइट निर्माणकर्ता समन्वय v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# साइट Builder Orchestration v2

साइट Builder Orchestration v2 (Gratis AI Agent v1.4.0 मा परिचय गराइएको) बहु-चरण वेबसाइट सिर्जनालाई शक्ति दिने इन्जिन हो। जब तपाईं agent लाई "रेस्टुरेन्ट वेबसाइट बनाऊ" वा "ब्लगसहितको पोर्टफोलियो सिर्जना गर" भन्नुहुन्छ, orchestrator ले त्यो उच्च-स्तरीय लक्ष्यलाई संरचित **योजना** मा विभाजन गर्छ, त्यसलाई पूरा गर्न आवश्यक plugins पत्ता लगाउँछ, प्रत्येक चरण क्रमशः कार्यान्वयन गर्छ, प्रगति ट्र्याक गर्छ, र त्रुटिहरूबाट स्वायत्त रूपमा पुनःस्थापित हुन्छ।

---

## यसले कसरी काम गर्छ {#how-it-works}

### 1. योजना उत्पादन {#1-plan-generation}

जब agent ले साइट-निर्माण निर्देशन प्राप्त गर्छ, यसले JSON **साइट योजना** उत्पादन गर्न `create_site_plan` क्षमता बोलाउँछ। योजनाले वर्णन गर्छ:

- **लक्ष्य** — तयार साइटले के गर्नुपर्छ
- **चरणहरू** — चरणहरूको क्रमबद्ध समूह (जस्तै _सेटअप_, _सामग्री प्रकारहरू_, _डिजाइन_, _सामग्री_)
- **कदमहरू** — प्रत्येक चरणभित्रका व्यक्तिगत क्षमता कलहरू
- **Plugin आवश्यकताहरू** — निश्चित कदमहरू चलाउन सक्रिय हुनुपर्ने plugins
- **Fallbacks** — प्राथमिक कदम असफल भएमा वैकल्पिक कदमहरू

**उदाहरण योजना (संक्षिप्त)**

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

### 2. Plugin खोज {#2-plugin-discovery}

कार्यान्वयन सुरु हुनुअघि, orchestrator ले योजनाको `plugin_requirements` स्क्यान गर्छ र कुन plugins पहिले नै सक्रिय छन् भनेर जाँच गर्छ। छुटेका plugins का लागि, यसले:

1. उत्तम मिलानका लागि `recommend_plugin` मार्फत registry खोज्छ
2. सिफारिस पुष्टि गर्न agent लाई अनुरोध गर्छ
3. स्वीकृत भएमा (वा सेटिङहरूमा auto-install सक्षम भएमा) स्थापना सुरु गर्छ

Plugin खोज असफलताहरू घातक हुँदैनन् — orchestrator ले प्रभावित कदमहरूलाई `skipped` भनी चिन्ह लगाउँछ र योजनाको बाँकी भागसँग जारी राख्छ।

### 3. योजना कार्यान्वयन {#3-plan-execution}

orchestrator ले योजना ID सहित `execute_site_plan` बोलाउँछ। कार्यान्वयन चरण-दर-चरण, कदम-दर-कदम अगाडि बढ्छ:

- **कदम सन्दर्भहरू** (`__ref:` उपसर्ग) — कदमहरूले अघिल्ला कदमहरूबाट आएका आउटपुटहरू सन्दर्भ गर्न सक्छन्। माथिको उदाहरणमा, `__ref:create_menu.menu_id` लाई `create_menu` कदमले फर्काएको `menu_id` मा समाधान गरिन्छ।
- **समानान्तर कदमहरू** — एउटै चरणभित्र परस्पर निर्भरता नभएका कदमहरू `parallel` flag सेट हुँदा एकैसाथ पठाइन्छन्।
- **कदम timeout** — प्रत्येक कदमको व्यक्तिगत timeout हुन्छ (पूर्वनिर्धारित: `Ability Timeout` सेटिङ)। timeout भएको कदमलाई `failed` भनी चिन्ह लगाइन्छ र योजना जारी रहन्छ।

### 4. प्रगति ट्र्याकिङ {#4-progress-tracking}

कार्यान्वयन स्थिति जाँच गर्न कुनै पनि समयमा `get_plan_progress` बोलाउनुहोस्:

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

WP-CLI प्रयोगकर्ताहरूले यससँग प्रगति निगरानी गर्न सक्छन्:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. त्रुटि पुनःस्थापना {#5-error-recovery}

जब कुनै कदम असफल हुन्छ, orchestrator ले योजनामा परिभाषित **fallback** कदम छ कि छैन जाँच गर्छ:

- **Fallback उपलब्ध** — fallback कदम तुरुन्तै प्रयास गरिन्छ। यदि यो सफल भयो भने, कार्यान्वयन जारी रहन्छ। यदि यो पनि असफल भयो भने, कदमलाई `failed` भनी चिन्ह लगाइन्छ र कार्यान्वयन अर्को कदमसँग जारी रहन्छ।
- **Fallback छैन** — कदमलाई `failed` भनी चिन्ह लगाइन्छ। गैर-महत्त्वपूर्ण कदमहरू छोडिन्छन्; महत्त्वपूर्ण कदमहरू (`required: true` भनी चिन्ह लगाइएका) ले हालको चरण रोक्छन् र चरण-स्तर पुनःस्थापना प्रयास ट्रिगर गर्छन्।

agent ले अन्तिम योजना सारांशमा सबै असफलताहरू रिपोर्ट गर्छ र पुनःस्थापना गर्न नसकिने त्रुटिहरूका लागि म्यानुअल समाधान कदमहरू सुझाव दिन सक्छ।

---

## साइट योजना क्षमताहरू {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

प्राकृतिक भाषाको लक्ष्य वर्णनबाट संरचित साइट योजना उत्पादन गर्छ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | चाहिएको वेबसाइटको प्राकृतिक भाषा वर्णन |
| `style` | string | No | दृश्य शैली प्राथमिकता: `minimal`, `bold`, `professional`, `playful`। पूर्वनिर्धारित: agent ले लक्ष्यका आधारमा छान्छ |
| `plugins` | array | No | योजनामा समावेश गर्ने Plugin slugs। orchestrator ले आवश्यक plugins स्वचालित रूपमा थप्छ। |
| `dry_run` | boolean | No | यदि `true` भएमा, बचत वा कार्यान्वयन नगरी योजना JSON फर्काउँछ। पूर्वनिर्धारित `false` |

**फर्काउँछ** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

पहिले उत्पादन गरिएको साइट योजना कार्यान्वयन गर्न सुरु गर्छ।

**Parameters**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `plan_id` | string | हो | कार्यान्वयन गर्नुपर्ने योजनाको ID |
| `auto_install_plugins` | boolean | होइन | यदि `true` भएमा, पुष्टि बिना आवश्यक प्लगइनहरू स्वचालित रूपमा स्थापना गर्छ। पूर्वनिर्धारित `false` |
| `max_retries` | integer | होइन | अघि बढ्नुअघि असफल चरण फेरि प्रयास गर्ने पटकको संख्या। पूर्वनिर्धारित `1` |

**फर्काउँछ** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

साइट योजनाको हालको कार्यान्वयन स्थिति फर्काउँछ।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `plan_id` | string | हो | क्वेरी गर्नुपर्ने योजनाको ID |

**फर्काउँछ** माथि [प्रगति ट्र्याकिङ](#4-progress-tracking) मा वर्णन गरिएको प्रगति वस्तु।

---

### `handle_plan_error` {#handleplanerror}

असफल चरणलाई म्यानुअल रूपमा समाधान गर्छ र अर्को चरणबाट योजना कार्यान्वयन पुनः सुरु गर्छ। स्वचालित पुनर्स्थापना सम्भव नभएको र तपाईं हस्तक्षेप गर्न चाहनुहुँदा यो प्रयोग गर्नुहोस्।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `plan_id` | string | हो | योजनाको ID |
| `step_id` | string | हो | असफल चरणको ID |
| `resolution` | string | हो | `skip` (छोडेर जारी राख्ने), `retry` (चरण तुरुन्तै फेरि प्रयास गर्ने), वा `mark_done` (फेरि नचलाइकन सफल भएको मान्ने) मध्ये एक |

**फर्काउँछ** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 र v2 तुलना {#comparing-v1-and-v2}

| सुविधा | v1 | v2 |
|---|---|---|
| बहु-चरणीय योजनाहरू | होइन | हो |
| चरण आउटपुट सन्दर्भहरू (`__ref:`) | होइन | हो |
| प्लगइन खोज | म्यानुअल | स्वचालित |
| प्रगति ट्र्याकिङ API | होइन | हो |
| त्रुटि पुनर्स्थापना | असफल भएर रोकिने | वैकल्पिक उपाय + जारी राख्ने |
| समानान्तर चरण कार्यान्वयन | होइन | हो (प्रति चरण वैकल्पिक रूपमा सक्षम) |
| WP-CLI योजना कमान्डहरू | होइन | हो |
| बेन्चमार्क एकीकरण | होइन | हो (`q-restaurant-website`) |

---

## WP-CLI योजना कमान्डहरू {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

लक्ष्य विवरणबाट साइट योजना उत्पन्न गर्छ।

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

पहिले उत्पन्न गरिएको योजना कार्यान्वयन गर्छ।

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

कार्यान्वयन भइरहेको वा पूरा भएको योजनाको हालको प्रगति देखाउँछ।

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

सबै साइट योजनाहरू (पेन्डिङ, प्रगतिमा रहेका, र पूरा भएका) सूचीबद्ध गर्छ।

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

असफल योजनालाई `pending` मा रिसेट गर्छ ताकि यसलाई सुरुदेखि फेरि कार्यान्वयन गर्न सकियोस्।

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
