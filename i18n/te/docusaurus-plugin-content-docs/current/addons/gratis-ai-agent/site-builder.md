---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (Gratis AI Agent v1.4.0 లో పరిచయం చేయబడింది) అనేది బహుళ-దశల వెబ్‌సైట్ సృష్టికి శక్తినిచ్చే ఇంజిన్. మీరు ఏజెంట్‌ని "ఒక రెస్టారెంట్ వెబ్‌సైట్‌ను నిర్మించు" లేదా "బ్లాగ్‌తో పోర్ట్‌ఫోలియోను సృష్టించు" అని అడిగినా, ఈ ఆర్కెస్ట్రేటర్ ఆ పెద్ద లక్ష్యాన్ని ఒక క్రమబద్ధమైన **ప్రణాళిక (plan)**గా విడగొడుతుంది, దాన్ని పూర్తి చేయడానికి అవసరమైన plugins ఏవి ఉన్నాయో కనుగొంటుంది, ప్రతి దశను వరుస క్రమంలో అమలు చేస్తుంది, పురోగతిని ట్రాక్ చేస్తుంది మరియు లోపాలు వచ్చినా స్వయంచాలకంగా వాటి నుండి కోలుకుంటుంది.

---

## ఇది ఎలా పనిచేస్తుంది {#how-it-works}

### 1. ప్రణాళిక ఉత్పత్తి (Plan Generation) {#1-plan-generation}

ఏజెంట్ వెబ్‌సైట్ నిర్మించే సూచన అందుకున్నప్పుడు, అది JSON **site plan**ను రూపొందించడానికి `create_site_plan` abilityని కాల్ చేస్తుంది. ఈ ప్రణాళిక ఈ వివరాలను వివరిస్తుంది:

- **Goal** — పూర్తి అయిన సైట్ ఏమి చేయాలి
- **Phases** — దశల యొక్క క్రమబద్ధమైన సమూహాలు (ఉదాహరణకు, _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — ప్రతి దశలో ఉన్న వ్యక్తిగత ability కాల్స్
- **Plugin requirements** — కొన్ని దశలు నడవడానికి తప్పనిసరిగా యాక్టివ్‌గా ఉండాల్సిన plugins
- **Fallbacks** — ప్రధాన దశ విఫలమైతే ఉపయోగించే ప్రత్యామ్నాయ దశలు

**ఉదాహరణ ప్రణాళిక (సంక్షిప్తం)**

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

### 2. Plugin Discovery {#2-plugin-discovery}

ఎగ్జిక్యూషన్ ప్రారంభించడానికి ముందు, ఆర్కెస్ట్రేటర్ ప్రణాళికలోని `plugin_requirements`ను స్కాన్ చేసి, ఏ plugins ఇప్పటికే యాక్టివ్‌గా ఉన్నాయో తనిఖీ చేస్తుంది. ఏ plugins లేవో, అది:

1. ఉత్తమ సరిపోలిక కోసం `recommend_plugin` ద్వారా రిజిస్ట్రీలో శోధిస్తుంది
2. సిఫార్సును ధృవీకరించమని ఏజెంట్‌ని అడుగుతుంది
3. ఆమోదించినట్లయితే (లేదా సెట్టింగ్‌లలో auto-install ఎనేబుల్ చేయబడి ఉంటే) ఇన్‌స్టాలేషన్‌ను ట్రిగ్గర్ చేస్తుంది

Plugin discovery లో వైఫల్యాలు అంత తీవ్రమైనవి కావు — ఆర్కెస్ట్రేటర్ ప్రభావితమైన దశలను `skipped`గా గుర్తించి, మిగిలిన ప్రణాళికతో కొనసాగుతుంది.

### 3. Plan Execution {#3-plan-execution}

ఆర్కెస్ట్రేటర్ ప్రణాళిక ID తో `execute_site_plan`ను కాల్ చేస్తుంది. ఎగ్జిక్యూషన్ దశలవారీగా, ఒక్కో స్టెప్ ద్వారా ముందుకు సాగుతుంది:

- **Step references** (`__ref:` prefix) — దశలు మునుపటి దశల నుండి వచ్చిన అవుట్‌పుట్‌లను రిఫరెన్స్ చేయగలవు. పైన ఉదాహరణలో, `__ref:create_menu.menu_id` అనేది `create_menu` దశ ద్వారా తిరిగి వచ్చిన `menu_id`కు పరిష్కరించబడుతుంది.
- **Parallel steps** — ఒకే phase లోని, ఒకదానిపై ఒకటి ఆధారపడని దశలు `parallel` flag సెట్ చేయబడినప్పుడు ఏకకాలంలో పంపబడతాయి.
- **Step timeout** — ప్రతి దశకు వ్యక్తిగత టైమౌట్ ఉంటుంది (డిఫాల్ట్: `Ability Timeout` సెట్టింగ్). టైమౌట్ అయిన దశ `failed`గా గుర్తించబడుతుంది మరియు ప్రణాళిక కొనసాగుతుంది.

### 4. Progress Tracking {#4-progress-tracking}

ఎగ్జిక్యూషన్ స్థితిని తనిఖీ చేయడానికి ఎప్పుడైనా `get_plan_progress`ను కాల్ చేయండి:

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

WP-CLI వినియోగదారులు దీనితో పురోగతిని పర్యవేక్షించవచ్చు:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Error Recovery {#5-error-recovery}

ఒక దశ విఫలమైనప్పుడు, ఆర్కెస్ట్రేటర్ ప్రణాళికలో నిర్వచించబడిన **fallback** దశ కోసం తనిఖీ చేస్తుంది:

- **Fallback available** — fallback దశను వెంటనే ప్రయత్నిస్తుంది. ఇది విజయవంతమైతే, ఎగ్జిక్యూషన్ కొనసాగుతుంది. ఇది కూడా విఫలమైతే, ఆ దశ `failed`గా గుర్తించబడుతుంది మరియు తదుపరి దశతో ఎగ్జిక్యూషన్ కొనసాగుతుంది.
- **No fallback** — ఆ దశ `failed`గా గుర్తించబడుతుంది. అత్యంత అవసరం లేని దశలు దాటవేయబడతాయి (skipped); అత్యంత అవసరమైన దశలు (required: true అని గుర్తించబడినవి) ప్రస్తుత phaseను ఆపివేసి, phase-స్థాయి రికవరీ ప్రయత్నాన్ని ట్రిగ్గర్ చేస్తాయి.

ఏజెంట్ అన్ని వైఫల్యాలను తుది ప్రణాళిక సారాంశంలో నివేదిస్తుంది మరియు కోలుకోలేని లోపాల కోసం మాన్యువల్ పరిష్కార దశలను సూచించవచ్చు.

---

## Site Plan Abilities {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

సహజ భాషా లక్ష్యం వివరణ నుండి ఒక క్రమబద్ధమైన site planను రూపొందిస్తుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | కావాల్సిన వెబ్‌సైట్ యొక్క సహజ భాషా వివరణ |
| `style` | string | No | విజువల్ స్టైల్ ప్రాధాన్యత: `minimal`, `bold`, `professional`, `playful`. డిఫాల్ట్: ఏజెంట్ లక్ష్యం ఆధారంగా ఎంచుకుంటుంది |
| `plugins` | array | No | ప్రణాళికలో చేర్చవలసిన plugin slugs. అవసరమైన pluginsను ఆర్కెస్ట్రేటర్ ఆటోమేటిక్‌గా జోడిస్తుంది. |
| `dry_run` | boolean | No | ఇది `true` అయితే, సేవ్ చేయకుండా లేదా ఎగ్జిక్యూట్ చేయకుండా plan JSONను తిరిగి ఇస్తుంది. డిఫాల్ట్ `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

గతంలో రూపొందించిన site planను అమలు చేయడం ప్రారంభిస్తుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | అమలు చేయవలసిన plan ID |
| `auto_install_plugins` | boolean | No | ఇది `true` అయితే, ధృవీకరణ లేకుండా అవసరమైన pluginsను ఆటోమేటిక్‌గా ఇన్‌స్టాల్ చేస్తుంది. డిఫాల్ట్ `false` |
| `max_retries` | integer | No | ముందుకు కదలడానికి ముందు విఫలమైన దశను ఎన్నిసార్లు ప్రయత్నించాలో సంఖ్య. డిఫాల్ట్ `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

site plan యొక్క ప్రస్తుత ఎగ్జిక్యూషన్ స్థితిని తిరిగి ఇస్తుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ప్రశ్నించవలసిన Plan ID |

**Returns** పైన [Progress Tracking](#4-progress-tracking) లో వివరించబడిన progress object.

---

### `handle_plan_error` {#handleplanerror}

విఫలమైన దశను మాన్యువల్‌గా పరిష్కరించి, తదుపరి దశ నుండి plan ఎగ్జిక్యూషన్‌ను పునఃప్రారంభించండి. ఆటోమేటిక్ రికవరీ సాధ్యం కానప్పుడు మరియు మీరు జోక్యం చేసుకోవాలనుకున్నప్పుడు దీనిని ఉపయోగించండి.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID |
| `step_id` | string | Yes | విఫలమైన దశ ID |
| `resolution` | string | Yes | `skip` (దాటవేయండి మరియు కొనసాగించండి), `retry` (దశను వెంటనే మళ్లీ ప్రయత్నించండి), లేదా `mark_done` (మళ్లీ రన్ చేయకుండా విజయవంతమైనట్లుగా పరిగణించండి) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 మరియు v2 పోలిక {#comparing-v1-and-v2}

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

ఒక goal వివరణ నుండి site planను రూపొందిస్తుంది.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

గతంలో రూపొందించిన planను అమలు చేస్తుంది.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

ఎగ్జిక్యూట్ అవుతున్న లేదా పూర్తయిన plan యొక్క ప్రస్తుత పురోగతిని చూపుతుంది.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

అన్ని site plans (pending, in-progress, మరియు completed) జాబితాను చూపుతుంది.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

విఫలమైన planను `pending`కి రీసెట్ చేస్తుంది, తద్వారా దానిని మొదటి నుండి మళ్లీ ఎగ్జిక్యూట్ చేయవచ్చు.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
