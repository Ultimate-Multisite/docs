---
title: WP-CLI सन्दर्भ
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI सन्दर्भ

Gratis AI Agent ले एजेन्टको बेन्चमार्क गर्न, क्षमताहरू व्यवस्थापन गर्न, र कमाण्ड लाइनबाट एजेन्टको स्थिति सोध्न `wp gratis-ai-agent` कमाण्ड परिवार उपलब्ध गराउँछ। सबै कमाण्डहरूलाई WP-CLI 2.0 वा उच्च आवश्यक पर्छ।

## स्थापना {#installation}

plugin सक्रिय हुँदा WP-CLI कमाण्डहरू स्वचालित रूपमा दर्ता हुन्छन्। यसबाट पुष्टि गर्नुहोस्:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Agent Capabilities बेन्चमार्क सुइट चलाउँछ — जटिल, बहु-चरण प्रम्प्टहरूको एउटा सेट जसले पूर्ण क्षमता सतह प्रयोग गर्छ। मोडेल प्रदर्शन मूल्याङ्कन गर्न, AI प्रदायकहरू तुलना गर्न, वा उत्पादनमा तैनाथ गर्नुअघि क्षमता प्याकहरू प्रमाणीकरण गर्न यसको प्रयोग गर्नुहोस्।

### सारांश {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### विकल्पहरू {#options}

| विकल्प | वर्णन |
|---|---|
| `--question=<id>` | पूर्ण सुइटको सट्टा ID अनुसार एउटै बेन्चमार्क प्रश्न चलाउनुहोस् |
| `--provider=<provider>` | यस रनका लागि कन्फिगर गरिएको AI प्रदायकलाई ओभरराइड गर्नुहोस् (जस्तै `anthropic`, `openai`) |
| `--model=<model>` | यस रनका लागि कन्फिगर गरिएको मोडेललाई ओभरराइड गर्नुहोस् (जस्तै `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | आउटपुट ढाँचा: `table` (पूर्वनिर्धारित), `json`, `csv` |
| `--save` | ऐतिहासिक तुलनाका लागि बेन्चमार्क परिणामहरू डेटाबेसमा बचत गर्नुहोस् |

### उदाहरणहरू {#examples}

हालको प्रदायक र मोडेलसँग पूर्ण बेन्चमार्क सुइट चलाउनुहोस्:

```bash
wp gratis-ai-agent benchmark
```

एउटा मात्र प्रश्न (`q-restaurant-website`) चलाउनुहोस् र JSON रूपमा आउटपुट गर्नुहोस्:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

विशिष्ट मोडेल विरुद्ध चलाउनुहोस् र परिणामहरू बचत गर्नुहोस्:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### आउटपुट {#output}

बेन्चमार्कले निम्न स्तम्भहरूसहित प्रति प्रश्न एक पङ्क्ति आउटपुट गर्छ:

| स्तम्भ | वर्णन |
|---|---|
| `ID` | प्रश्न पहिचानकर्ता |
| `Description` | बेन्चमार्क परिदृश्यको छोटो सारांश |
| `Score` | पास/फेल वा सङ्ख्यात्मक स्कोर (0–100) |
| `Abilities Used` | आह्वान गरिएका क्षमताहरूको अल्पविराम-विभाजित सूची |
| `Tokens` | खपत भएका कुल टोकनहरू |
| `Duration` | सेकेन्डमा वाल-क्लक समय |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### बेन्चमार्क प्रश्नहरू {#benchmark-questions}

पूर्वनिर्धारित सुइटमा समावेश छन्:

| ID | परिदृश्य |
|---|---|
| `q-portfolio-site` | Project Category taxonomy सहित Portfolio CPT सिर्जना गर्नुहोस् र block pattern दर्ता गर्नुहोस् |
| `q-restaurant-website` | menu CPT, booking form, र navigation सहित पूर्ण रेस्टुरेन्ट वेबसाइट बनाउनुहोस् |
| `q-dark-mode-theme` | dark-mode डिजाइन preset लागू गर्नुहोस् र brand रङहरू घुसाउनुहोस् |
| `q-nav-builder` | nested dropdown सहित चार-वस्तुको primary navigation menu सिर्जना गर्नुहोस् |
| `q-options-roundtrip` | WordPress विकल्पहरूको सेट पढ्नुहोस्, परिमार्जन गर्नुहोस्, र पुनर्स्थापना गर्नुहोस् |
| `q-ability-install` | वर्णन गरिएको प्रयोग अवस्थाका लागि सबैभन्दा उपयुक्त क्षमता प्याक पत्ता लगाउनुहोस् र स्थापना गर्नुहोस् |

थप प्रश्नहरू `gratis_ai_agent_benchmark_questions` फिल्टरमार्फत दर्ता गर्न सकिन्छ।

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

स्थापित क्षमताहरू र क्षमता प्याकहरू व्यवस्थापन गर्छ।

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

सबै दर्ता गरिएका क्षमताहरू, तिनको स्रोत (core वा pack), र तिनको हालको स्थिति सूचीबद्ध गर्छ।

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**विकल्पहरू**

| विकल्प | वर्णन |
|---|---|
| `--format=<format>` | आउटपुट ढाँचा: `table` (पूर्वनिर्धारित), `json`, `csv` |

**उदाहरण आउटपुट**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

registry बाट क्षमता प्याक डाउनलोड गरी सक्रिय गर्छ।

```bash
wp gratis-ai-agent abilities install <slug>
```

**तर्कहरू**

| तर्क | वर्णन |
|---|---|
| `<slug>` | क्षमता प्याकको plugin slug, जस्तै `gratis-ai-agent-woocommerce` |

**उदाहरण**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

प्याक नहटाई विशिष्ट क्षमता निष्क्रिय गर्छ। दिइएको साइटमा एजेन्टको दायरा सीमित गर्न उपयोगी हुन्छ।

```bash
wp gratis-ai-agent abilities disable <ability>
```

**उदाहरण**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

पहिले निष्क्रिय गरिएको क्षमतालाई पुनः सक्रिय गर्छ।

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

हालको एजेन्ट कन्फिगरेसन र कनेक्टिभिटी स्थिति देखाउँछ।

```bash
wp gratis-ai-agent status
```

**उदाहरण आउटपुट**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

debug log बाट हालको एजेन्ट गतिविधि देखाउँछ।

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**विकल्पहरू**

| विकल्प | विवरण |
|---|---|
| `--last=<n>` | पछिल्ला N लग प्रविष्टिहरू देखाउनुहोस्। पूर्वनिर्धारित `50` |
| `--level=<level>` | स्तरअनुसार फिल्टर गर्नुहोस्: `info`, `warning`, `error` |
| `--ability=<ability>` | क्षमता नामअनुसार फिल्टर गर्नुहोस् |

**उदाहरण**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

एजेन्टको अवस्था रिसेट गर्छ: इन्जेक्ट गरिएको CSS खाली गर्छ, एजेन्ट-दर्ता गरिएका CPTs र taxonomies हटाउँछ, ग्लोबल शैलीहरू रिसेट गर्छ, र एजेन्टको विकल्प क्यास खाली गर्छ। plugin वा यसको सेटिङहरू हटाउँदैन।

```bash
wp gratis-ai-agent reset [--yes]
```

पुष्टि प्रम्प्ट छोड्न `--yes` थप्नुहोस्।

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## निर्गमन कोडहरू {#exit-codes}

सबै command सफल हुँदा `0` मा निर्गमन गर्छन्। शून्य नभएका निर्गमन कोडहरू:

| कोड | अर्थ |
|---|---|
| `1` | सामान्य त्रुटि (त्रुटि सन्देश हेर्नुहोस्) |
| `2` | Provider जडान असफलता |
| `3` | क्षमता फेला परेन |
| `4` | Benchmark प्रश्न फेला परेन |
