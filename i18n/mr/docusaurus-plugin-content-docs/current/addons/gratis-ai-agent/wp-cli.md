---
title: WP-CLI संदर्भ
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI संदर्भ

Gratis AI Agent मध्ये `wp gratis-ai-agent` कमांड फॅमिली आहे, जी कमांड लाईनवरून एजंटचे बेंचमार्किंग करण्यासाठी, क्षमता (abilities) व्यवस्थापित करण्यासाठी आणि एजंटची स्थिती (status) तपासण्यासाठी वापरली जाते. सर्व कमांड्ससाठी WP-CLI 2.0 किंवा त्याहून अधिक आवृत्ती आवश्यक आहे.

## स्थापना (Installation)

जेव्हा प्लगइन सक्रिय होते, तेव्हा WP-CLI कमांड्स आपोआप नोंदणीकृत (registered) होतात. खालील कमांड वापरून तपासा:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

हे एजंट क्षमता बेंचमार्क सूट (Agent Capabilities benchmark suite) चालवते — ही जटिल, अनेक-टप्प्यांच्या प्रॉम्प्ट्सची (prompts) एक मालिका आहे जी एजंटच्या संपूर्ण क्षमता तपासते. मॉडेलची कार्यक्षमता (performance) तपासण्यासाठी, AI प्रदात्यांची (AI providers) तुलना करण्यासाठी किंवा उत्पादन वातावरणात (production) तैनात करण्यापूर्वी क्षमता पॅक्स (ability packs) प्रमाणित करण्यासाठी याचा वापर करा.

### सारांश (Synopsis)

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### पर्याय (Options)

| पर्याय | वर्णन |
|---|---|
| `--question=<id>` | संपूर्ण सूट न चालवता, ID नुसार एकच बेंचमार्क प्रश्न चालवा |
| `--provider=<provider>` | या रनसाठी कॉन्फिगर केलेला AI प्रदाता (provider) बदला (उदा. `anthropic`, `openai`) |
| `--model=<model>` | या रनसाठी कॉन्फिगर केलेले मॉडेल बदला (उदा. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | आउटपुट स्वरूप: `table` (डीफॉल्ट), `json`, `csv` |
| `--save` | ऐतिहासिक तुलना करण्यासाठी बेंचमार्क परिणाम डेटाबेसमध्ये सेव्ह करा |

### उदाहरणे (Examples)

सध्याच्या प्रदाता आणि मॉडेलसह संपूर्ण बेंचमार्क सूट चालवा:

```bash
wp gratis-ai-agent benchmark
```

एकच प्रश्न (`q-restaurant-website`) चालवा आणि JSON म्हणून आउटपुट करा:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

विशिष्ट मॉडेलविरुद्ध चालवा आणि परिणाम सेव्ह करा:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### आउटपुट (Output)

बेंचमार्क प्रत्येक प्रश्नासाठी एक ओळ (row) आउटपुट करतो, ज्यामध्ये खालील स्तंभ (columns) असतात:

| स्तंभ | वर्णन |
|---|---|
| `ID` | प्रश्नाचा ओळखकर्ता (identifier) |
| `Description` | बेंचमार्क परिस्थितीचा संक्षिप्त सारांश |
| `Score` | पास/फेल किंवा संख्यात्मक गुण (0–100) |
| `Abilities Used` | वापरलेल्या क्षमतांची कॉमा-सेपरेटेड सूची |
| `Tokens` | वापरलेले एकूण टोकन्स |
| `Duration` | सेकंदांमध्ये लागलेला वेळ (Wall-clock time) |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### बेंचमार्क प्रश्न (Benchmark Questions)

डीफॉल्ट सूटमध्ये खालील प्रश्न समाविष्ट आहेत:

| ID | परिस्थिती (Scenario) |
|---|---|
| `q-portfolio-site` | प्रोजेक्ट कॅटेगरी (Project Category) टॅक्सोनॉमीसह पोर्टफोलिओ CPT तयार करणे आणि एक ब्लॉक पॅटर्न नोंदणीकृत करणे |
| `q-restaurant-website` | मेनू CPT, बुकिंग फॉर्म आणि नेव्हिगेशनसह संपूर्ण रेस्टॉरंट वेबसाइट तयार करणे |
| `q-dark-mode-theme` | डार्क-मोड डिझाइन प्रीसेट लागू करणे आणि ब्रँड रंग (brand colours) इंजेक्ट करणे |
| `q-nav-builder` | नेस्टेड ड्रॉपडाउनसह चार-आयटम प्राथमिक नेव्हिगेशन मेनू तयार करणे |
| `q-options-roundtrip` | वर्डप्रेस पर्याय (WordPress options) सेट वाचणे, सुधारणे आणि पुनर्संचयित करणे |
| `q-ability-install` | वर्णन केलेल्या वापराच्या केससाठी सर्वात योग्य क्षमता पॅक शोधणे आणि स्थापित करणे |

अतिरिक्त प्रश्न `gratis_ai_agent_benchmark_questions` फिल्टरद्वारे नोंदणीकृत केले जाऊ शकतात.

---

## `wp gratis-ai-agent abilities`

स्थापित क्षमता (abilities) आणि क्षमता पॅक्स (ability packs) व्यवस्थापित करते.

### `wp gratis-ai-agent abilities list`

नोंदणीकृत सर्व क्षमता, त्यांचा स्रोत (core किंवा pack), आणि त्यांची सध्याची स्थिती (status) सूचीबद्ध करते.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**पर्याय (Options)**

| पर्याय | वर्णन |
|---|---|
| `--format=<format>` | आउटपुट स्वरूप: `table` (डीफॉल्ट), `json`, `csv` |

**उदाहरण आउटपुट (Example output)**

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

### `wp gratis-ai-agent abilities install`

नोंदणीतून (registry) एक क्षमता पॅक डाउनलोड करते आणि सक्रिय करते.

```bash
wp gratis-ai-agent abilities install <slug>
```

**आर्ग्युमेंट्स (Arguments)**

| आर्ग्युमेंट | वर्णन |
|---|---|
| `<slug>` | क्षमता पॅकचा प्लगइन स्लग, उदा. `gratis-ai-agent-woocommerce` |

**उदाहरण (Example)**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

पॅक काढून न करता विशिष्ट क्षमता अक्षम (disable) करते. हे दिलेल्या साइटवर एजंटची कार्यक्षेत्र मर्यादा (scope) ठेवण्यासाठी उपयुक्त आहे.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**उदाहरण (Example)**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

पूर्वी अक्षम केलेली क्षमता पुन्हा सक्रिय (re-enable) करते.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

सध्याची एजंट कॉन्फिगरेशन आणि कनेक्टिव्हिटी स्थिती (connectivity status) प्रदर्शित करते.

```bash
wp gratis-ai-agent status
```

**उदाहरण आउटपुट (Example output)**

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

## `wp gratis-ai-agent logs`

डीबग लॉगमधून (debug log) अलीकडील एजंट ॲक्टिव्हिटी प्रदर्शित करते.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**पर्याय (Options)**

| पर्याय | वर्णन |
|---|---|
| `--last=<n>` | शेवटचे N लॉग नोंदी (log entries) दाखवा. डीफॉल्ट `50` |
| `--level=<level>` | पातळीनुसार फिल्टर करा: `info`, `warning`, `error` |
| `--ability=<ability>` | क्षमताच्या नावानुसार फिल्टर करा |

**उदाहरण (Example)**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

एजंटची स्थिती रीसेट करते: इंजेक्ट केलेले CSS साफ करते, एजंट-नोंदणीकृत CPTs आणि टॅक्सोनॉमी काढून टाकते, ग्लोबल स्टाईल्स रीसेट करते आणि एजंटचा पर्याय कॅशे (options cache) रिकामा करते. हे प्लगइन किंवा त्याच्या सेटिंग्ज काढून टाकत नाही.

```bash
wp gratis-ai-agent reset [--yes]
```

कॉन्फर्मेशन प्रॉम्प्ट वगळण्यासाठी `--yes` जोडा.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## एक्झिट कोड्स (Exit Codes)

सर्व कमांड्स यशस्वी झाल्यास `0` एक्झिट करतात. नॉन-झिरो एक्झिट कोड्स:

| कोड | अर्थ |
|---|---|
| `1` | सामान्य त्रुटी (General error) (त्रुटी संदेश पहा) |
| `2` | प्रदाता कनेक्टिव्हिटी अयशस्वी (Provider connectivity failure) |
| `3` | क्षमता सापडली नाही (Ability not found) |
| `4` | बेंचमार्क प्रश्न सापडला नाही (Benchmark question not found) |
