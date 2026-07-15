---
title: WP-CLI संदर्भ
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Reference

Gratis AI Agent, एजेंट को बेंचमार्क करने, क्षमताओं (abilities) को मैनेज करने और कमांड लाइन से एजेंट की स्थिति (status) की जानकारी प्राप्त करने के लिए `wp gratis-ai-agent` कमांड फैमिली प्रदान करता है। सभी कमांड्स के लिए WP-CLI 2.0 या इससे अधिक की आवश्यकता होती है।

## Installation {#installation}

जब प्लगइन सक्रिय (active) होता है, तो WP-CLI कमांड्स अपने आप रजिस्टर हो जाते हैं। इसकी पुष्टि करने के लिए:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

यह एजेंट कैपेबिलिटीज बेंचमार्क सूट चलाता है — यह जटिल, बहु-चरणीय प्रॉम्प्ट्स का एक सेट है जो पूरी क्षमता सतह (full ability surface) का परीक्षण करता है। इसका उपयोग मॉडल के प्रदर्शन का मूल्यांकन करने, विभिन्न AI प्रोवाइडर्स की तुलना करने, या प्रोडक्शन में डिप्लॉय करने से पहले क्षमता पैक्स को मान्य (validate) करने के लिए करें।

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options {#options}

| Option | Description |
|---|---|
| `--question=<id>` | पूरे सूट के बजाय ID द्वारा एक सिंगल बेंचमार्क प्रश्न चलाएं |
| `--provider=<provider>` | इस रन के लिए कॉन्फ़िगर किए गए AI प्रोवाइडर को ओवरराइड करें (उदाहरण: `anthropic`, `openai`) |
| `--model=<model>` | इस रन के लिए कॉन्फ़िगर किए गए मॉडल को ओवरराइड करें (उदाहरण: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | आउटपुट फॉर्मेट: `table` (डिफ़ॉल्ट), `json`, `csv` |
| `--save` | ऐतिहासिक तुलना के लिए बेंचमार्क परिणामों को डेटाबेस में सहेजें |

### Examples {#examples}

वर्तमान प्रोवाइडर और मॉडल के साथ पूरा बेंचमार्क सूट चलाएं:

```bash
wp gratis-ai-agent benchmark
```

एक सिंगल प्रश्न (`q-restaurant-website`) चलाएं और आउटपुट JSON के रूप में प्राप्त करें:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

एक विशिष्ट मॉडल के विरुद्ध चलाएं और परिणाम सहेजें:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

बेंचमार्क प्रत्येक प्रश्न के लिए एक पंक्ति (row) आउटपुट करता है, जिसमें निम्नलिखित कॉलम होते हैं:

| Column | Description |
|---|---|
| `ID` | प्रश्न की पहचानकर्ता (Question identifier) |
| `Description` | बेंचमार्क परिदृश्य का संक्षिप्त सारांश |
| `Score` | पास/फेल या संख्यात्मक स्कोर (0–100) |
| `Abilities Used` | उपयोग की गई क्षमताओं की कॉमा-सेपरेटेड सूची |
| `Tokens` | कुल खपत किए गए टोकन |
| `Duration` | सेकंड में वॉल-क्लॉक समय |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions {#benchmark-questions}

डिफ़ॉल्ट सूट में शामिल हैं:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | एक प्रोजेक्ट कैटेगरी टैक्सोनॉमी के साथ एक पोर्टफोलियो CPT बनाना और एक ब्लॉक पैटर्न रजिस्टर करना |
| `q-restaurant-website` | एक मेनू CPT, बुकिंग फॉर्म और नेविगेशन के साथ एक पूर्ण रेस्टोरेंट वेबसाइट बनाना |
| `q-dark-mode-theme` | एक डार्क-मोड डिज़ाइन प्रीसेट लागू करना और ब्रांड रंग इंजेक्ट करना |
| `q-nav-builder` | एक नेस्टेड ड्रॉपडाउन के साथ चार-आइटम का प्राथमिक नेविगेशन मेनू बनाना |
| `q-options-roundtrip` | वर्डप्रेस ऑप्शंस के एक सेट को पढ़ना, संशोधित करना और पुनर्स्थापित करना |
| `q-ability-install` | वर्णित उपयोग के मामले के लिए सबसे उपयुक्त क्षमता पैक का पता लगाना और उसे स्थापित करना |

अतिरिक्त प्रश्नों को `gratis_ai_agent_benchmark_questions` फ़िल्टर के माध्यम से रजिस्टर किया जा सकता है।

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

स्थापित क्षमताओं (abilities) और क्षमता पैक्स (ability packs) को मैनेज करता है।

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

सभी पंजीकृत क्षमताओं, उनके स्रोत (core या pack), और उनकी वर्तमान स्थिति को सूचीबद्ध करता है।

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | आउटपुट फॉर्मेट: `table` (डिफ़ॉल्ट), `json`, `csv` |

**Example output**

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

रजिस्ट्री से एक क्षमता पैक डाउनलोड और सक्रिय (activate) करता है।

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | क्षमता पैक का प्लगइन स्लग, उदाहरण: `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

एक विशिष्ट क्षमता को पैक को हटाए बिना निष्क्रिय (disable) करता है। यह किसी दिए गए साइट पर एजेंट के दायरे को सीमित करने के लिए उपयोगी है।

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Example**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

पहले से निष्क्रिय की गई क्षमता को पुनः सक्रिय (re-enable) करता है।

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

वर्तमान एजेंट कॉन्फ़िगरेशन और कनेक्टिविटी स्थिति प्रदर्शित करता है।

```bash
wp gratis-ai-agent status
```

**Example output**

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

डिबग लॉग से हाल की एजेंट गतिविधि प्रदर्शित करता है।

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | पिछले N लॉग एंट्री दिखाएं। डिफ़ॉल्ट `50` |
| `--level=<level>` | स्तर के अनुसार फ़िल्टर करें: `info`, `warning`, `error` |
| `--ability=<ability>` | क्षमता के नाम के अनुसार फ़िल्टर करें |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

एजेंट की स्थिति को रीसेट करता है: इंजेक्ट किए गए CSS को साफ़ करता है, एजेंट-रजिस्टर्ड CPTs और टैक्सोनॉमी को हटाता है, ग्लोबल स्टाइल को रीसेट करता है, और एजेंट के ऑप्शंस कैश को खाली करता है। यह प्लगइन या उसकी सेटिंग्स को नहीं हटाता है।

```bash
wp gratis-ai-agent reset [--yes]
```

कन्फर्मेशन प्रॉम्प्ट को छोड़ने के लिए `--yes` जोड़ें।

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

सभी कमांड्स सफलता पर `0` से बाहर निकलते हैं। गैर-शून्य (Non-zero) एग्जिट कोड:

| Code | Meaning |
|---|---|
| `1` | सामान्य त्रुटि (error message देखें) |
| `2` | प्रोवाइडर कनेक्टिविटी विफलता |
| `3` | क्षमता नहीं मिली (Ability not found) |
| `4` | बेंचमार्क प्रश्न नहीं मिला (Benchmark question not found) |
