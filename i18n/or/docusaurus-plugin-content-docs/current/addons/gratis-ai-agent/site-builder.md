---
title: ସାଇଟ୍ ନିର୍ମାତା ସମନ୍ୱୟ v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# ସାଇଟ୍ ନିର୍ମାତା ସମନ୍ୱୟ v2

ସାଇଟ୍ ନିର୍ମାତା ସମନ୍ୱୟ v2 (Gratis AI Agent v1.4.0 ରେ ପରିଚିତ) ହେଉଛି ବହୁ-ପଦକ୍ଷେପ ୱେବସାଇଟ୍ ତିଆରିକୁ ଚାଳନା କରୁଥିବା ଇଞ୍ଜିନ୍। ଆପଣ agentକୁ "ଏକ ରେଷ୍ଟୁରାଣ୍ଟ ୱେବସାଇଟ୍ ତିଆରି କର" କିମ୍ବା "ବ୍ଲଗ୍ ସହିତ ଏକ ପୋର୍ଟଫୋଲିଓ ତିଆରି କର" ବୋଲି କହିଲେ, orchestrator ସେହି ଉଚ୍ଚ-ସ୍ତରୀୟ ଲକ୍ଷ୍ୟକୁ ଏକ ସଂରଚିତ **ଯୋଜନା**ରେ ଭାଗ କରେ, ତାହା ପୂରଣ ପାଇଁ ଆବଶ୍ୟକ pluginଗୁଡ଼ିକୁ ଖୋଜେ, ପ୍ରତ୍ୟେକ ପଦକ୍ଷେପକୁ କ୍ରମକ୍ରମେ କାର୍ଯ୍ୟକରେ, ପ୍ରଗତି ଟ୍ରାକ୍ କରେ, ଏବଂ ତ୍ରୁଟିରୁ ସ୍ୱୟଂଚାଳିତ ଭାବେ ସୁଧାରେ।

---

## ଏହା କିପରି କାମ କରେ

### 1. ଯୋଜନା ତିଆରି

agent ଯେତେବେଳେ ସାଇଟ୍ ତିଆରି ନିର୍ଦ୍ଦେଶ ପାଏ, ସେ ଏକ JSON **ସାଇଟ୍ ଯୋଜନା** ତିଆରି କରିବାକୁ `create_site_plan` କ୍ଷମତାକୁ ଡାକେ। ଯୋଜନା ବର୍ଣ୍ଣନା କରେ:

- **ଲକ୍ଷ୍ୟ** — ସମ୍ପୂର୍ଣ୍ଣ ସାଇଟ୍ କ’ଣ କରିବା ଉଚିତ
- **ପର୍ଯ୍ୟାୟ** — ପଦକ୍ଷେପଗୁଡ଼ିକର କ୍ରମବଦ୍ଧ ଗୋଷ୍ଠୀ (ଯଥା _ସେଟଅପ୍_, _ସାମଗ୍ରୀ ପ୍ରକାର_, _ଡିଜାଇନ୍_, _ସାମଗ୍ରୀ_)
- **ପଦକ୍ଷେପ** — ପ୍ରତ୍ୟେକ ପର୍ଯ୍ୟାୟ ଭିତରେ ଅଲଗା କ୍ଷମତା ଡାକ
- **Plugin ଆବଶ୍ୟକତା** — ନିର୍ଦ୍ଦିଷ୍ଟ ପଦକ୍ଷେପ ଚାଲିବା ପାଇଁ ସକ୍ରିୟ ରହିବା ଦରକାର ଥିବା pluginଗୁଡ଼ିକ
- **ବିକଳ୍ପ** — ମୁଖ୍ୟ ପଦକ୍ଷେପ ବିଫଳ ହେଲେ ବିକଳ୍ପ ପଦକ୍ଷେପ

**ଉଦାହରଣ ଯୋଜନା (ସଂକ୍ଷିପ୍ତ)**

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

### 2. Plugin ଖୋଜ

କାର୍ଯ୍ୟାନ୍ବୟନ ଆରମ୍ଭ ହେବା ପୂର୍ବରୁ, orchestrator ଯୋଜନାର `plugin_requirements` ସ୍କାନ୍ କରେ ଏବଂ କେଉଁ plugin ପୂର୍ବରୁ ସକ୍ରିୟ ଅଛି ଯାଞ୍ଚ କରେ। ଅନୁପସ୍ଥିତ plugin ପାଇଁ, ଏହା:

1. ସର୍ବୋତ୍ତମ ମେଳ ପାଇଁ `recommend_plugin` ମାଧ୍ୟମରେ ରେଜିଷ୍ଟ୍ରିରେ ଖୋଜେ
2. ସୁପାରିଶ ନିଶ୍ଚିତ କରିବାକୁ agentକୁ ପଚାରେ
3. ଅନୁମୋଦନ ହେଲେ ସ୍ଥାପନ ଆରମ୍ଭ କରେ (କିମ୍ବା ସେଟିଂସ୍‌ରେ ସ୍ୱୟଂ-ସ୍ଥାପନ ସକ୍ରିୟ ଥିଲେ)

Plugin ଖୋଜ ବିଫଳତା ଗୁରୁତର ନୁହେଁ — orchestrator ପ୍ରଭାବିତ ପଦକ୍ଷେପଗୁଡ଼ିକୁ `skipped` ଭାବେ ଚିହ୍ନଟ କରେ ଏବଂ ଯୋଜନାର ବାକି ଅଂଶ ସହିତ ଆଗକୁ ବଢ଼େ।

### 3. ଯୋଜନା କାର୍ଯ୍ୟାନ୍ବୟନ

orchestrator ଯୋଜନା ID ସହିତ `execute_site_plan` ଡାକେ। କାର୍ଯ୍ୟାନ୍ବୟନ ପର୍ଯ୍ୟାୟ ପରେ ପର୍ଯ୍ୟାୟ, ପଦକ୍ଷେପ ପରେ ପଦକ୍ଷେପ ଆଗକୁ ବଢ଼େ:

- **ପଦକ୍ଷେପ ସନ୍ଦର୍ଭ** (`__ref:` prefix) — ପଦକ୍ଷେପଗୁଡ଼ିକ ପୂର୍ବ ପଦକ୍ଷେପର ଆଉଟପୁଟ୍‌କୁ ସନ୍ଦର୍ଭ କରିପାରେ। ଉପର ଉଦାହରଣରେ, `__ref:create_menu.menu_id` କୁ `create_menu` ପଦକ୍ଷେପ ଫେରାଇଥିବା `menu_id` ଭାବେ ସମାଧାନ କରାଯାଏ।
- **ସମାନ୍ତର ପଦକ୍ଷେପ** — ସମାନ ପର୍ଯ୍ୟାୟ ଭିତରେ ପରସ୍ପର ନିର୍ଭରଶୀଳତା ନଥିବା ପଦକ୍ଷେପଗୁଡ଼ିକୁ `parallel` ଫ୍ଲାଗ୍ ସେଟ୍ ଥିଲେ ଏକାସାଥି ପଠାଯାଏ।
- **ପଦକ୍ଷେପ ସମୟସୀମା** — ପ୍ରତ୍ୟେକ ପଦକ୍ଷେପର ଅଲଗା ସମୟସୀମା ରହେ (ଡିଫଲ୍ଟ: `Ability Timeout` ସେଟିଂ)। ସମୟସୀମା ଅତିକ୍ରମ କରିଥିବା ପଦକ୍ଷେପକୁ `failed` ଭାବେ ଚିହ୍ନଟ କରାଯାଏ ଏବଂ ଯୋଜନା ଚାଲୁ ରହେ।

### 4. ପ୍ରଗତି ଟ୍ରାକିଂ

କାର୍ଯ୍ୟାନ୍ବୟନ ସ୍ଥିତି ଯାଞ୍ଚ କରିବାକୁ ଯେକୌଣସି ସମୟରେ `get_plan_progress` ଡାକନ୍ତୁ:

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

WP-CLI ବ୍ୟବହାରକାରୀମାନେ ଏହା ସହିତ ପ୍ରଗତି ନିରୀକ୍ଷଣ କରିପାରିବେ:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. ତ୍ରୁଟି ପୁନରୁଦ୍ଧାର

ପଦକ୍ଷେପ ବିଫଳ ହେଲେ, orchestrator ଯୋଜନାରେ ନିର୍ଦ୍ଦିଷ୍ଟ **ବିକଳ୍ପ** ପଦକ୍ଷେପ ଯାଞ୍ଚ କରେ:

- **ବିକଳ୍ପ ଉପଲବ୍ଧ** — ବିକଳ୍ପ ପଦକ୍ଷେପକୁ ତୁରନ୍ତ ଚେଷ୍ଟା କରାଯାଏ। ଏହା ସଫଳ ହେଲେ, କାର୍ଯ୍ୟାନ୍ବୟନ ଚାଲୁ ରହେ। ଏହା ମଧ୍ୟ ବିଫଳ ହେଲେ, ପଦକ୍ଷେପକୁ `failed` ଭାବେ ଚିହ୍ନଟ କରାଯାଏ ଏବଂ ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ସହିତ କାର୍ଯ୍ୟାନ୍ବୟନ ଚାଲୁ ରହେ।
- **କୌଣସି ବିକଳ୍ପ ନାହିଁ** — ପଦକ୍ଷେପକୁ `failed` ଭାବେ ଚିହ୍ନଟ କରାଯାଏ। ଅଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ପଦକ୍ଷେପ ଛାଡ଼ାଯାଏ; ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ପଦକ୍ଷେପ (`required: true` ଭାବେ ଚିହ୍ନିତ) ବର୍ତ୍ତମାନ ପର୍ଯ୍ୟାୟକୁ ଅଟକାଇ ଦେଇ ପର୍ଯ୍ୟାୟ-ସ୍ତରୀୟ ପୁନରୁଦ୍ଧାର ଚେଷ୍ଟା ଆରମ୍ଭ କରେ।

agent ଅନ୍ତିମ ଯୋଜନା ସାରାଂଶରେ ସମସ୍ତ ବିଫଳତା ରିପୋର୍ଟ କରେ ଏବଂ ଅପୁନରୁଦ୍ଧାରଣୀୟ ତ୍ରୁଟି ପାଇଁ ହାତେ କରିବାକୁ ଥିବା ସୁଧାର ପଦକ୍ଷେପ ସୁପାରିଶ କରିପାରେ।

---

## ସାଇଟ୍ ଯୋଜନା କ୍ଷମତା

### `create_site_plan`

ସ୍ୱାଭାବିକ ଭାଷାର ଲକ୍ଷ୍ୟ ବର୍ଣ୍ଣନାରୁ ଏକ ସଂରଚିତ ସାଇଟ୍ ଯୋଜନା ତିଆରି କରେ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବର୍ଣ୍ଣନା |
|---|---|---|---|
| `goal` | string | ହଁ | ଚାହିଁଥିବା ୱେବସାଇଟ୍‌ର ସ୍ୱାଭାବିକ ଭାଷା ବର୍ଣ୍ଣନା |
| `style` | string | ନା | ଦୃଶ୍ୟ ଶୈଳୀ ପସନ୍ଦ: `minimal`, `bold`, `professional`, `playful`। ଡିଫଲ୍ଟ: agent ଲକ୍ଷ୍ୟ ଆଧାରରେ ବାଛେ |
| `plugins` | array | ନା | ଯୋଜନାରେ ସମ୍ମିଳିତ କରିବାକୁ plugin slugଗୁଡ଼ିକ। orchestrator ଆବଶ୍ୟକ pluginଗୁଡ଼ିକୁ ସ୍ୱୟଂଚାଳିତ ଭାବେ ଯୋଡ଼େ। |
| `dry_run` | boolean | ନା | `true` ହେଲେ, ସଞ୍ଚୟ କିମ୍ବା କାର୍ଯ୍ୟାନ୍ବୟନ ନକରି ଯୋଜନା JSON ଫେରାଇଦିଏ। ଡିଫଲ୍ଟ `false` |

**ଫେରାଏ** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

ପୂର୍ବରୁ ତିଆରି ହୋଇଥିବା ସାଇଟ୍ ଯୋଜନାକୁ କାର୍ଯ୍ୟାନ୍ବୟନ ଆରମ୍ଭ କରେ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର୍ | ପ୍ରକାର | ଆବଶ୍ୟକ | ବର୍ଣ୍ଣନା |
|---|---|---|---|
| `plan_id` | string | ହଁ | କାର୍ଯ୍ୟକାରୀ କରିବାକୁ ଥିବା ଯୋଜନାର ID |
| `auto_install_plugins` | boolean | ନା | ଯଦି `true`, ନିଶ୍ଚିତିକରଣ ବିନା ଆବଶ୍ୟକ ପ୍ଲଗିନ୍‌ଗୁଡ଼ିକୁ ସ୍ୱୟଂଚାଳିତ ଭାବେ ଇନ୍‌ଷ୍ଟଲ୍ କରେ। ଡିଫଲ୍ଟ `false` |
| `max_retries` | integer | ନା | ଆଗକୁ ବଢ଼ିବା ପୂର୍ବରୁ ବିଫଳ ପଦକ୍ଷେପକୁ ପୁଣି ଚେଷ୍ଟା କରିବାର ସଂଖ୍ୟା। ଡିଫଲ୍ଟ `1` |

**ଫେରାଏ** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

ଏକ ସାଇଟ୍ ଯୋଜନାର ବର୍ତ୍ତମାନ କାର୍ଯ୍ୟନ୍ୱୟନ ସ୍ଥିତି ଫେରାଏ।

**ପାରାମିଟର୍‌ଗୁଡ଼ିକ**

| ପାରାମିଟର୍ | ପ୍ରକାର | ଆବଶ୍ୟକ | ବର୍ଣ୍ଣନା |
|---|---|---|---|
| `plan_id` | string | ହଁ | ପଚାରିବାକୁ ଥିବା ଯୋଜନା ID |

**ଫେରାଏ** ଉପରେ [ପ୍ରଗତି ଟ୍ରାକିଂ](#4-progress-tracking) ରେ ବର୍ଣ୍ଣିତ ପ୍ରଗତି ଅବଜେକ୍ଟ।

---

### `handle_plan_error`

ବିଫଳ ପଦକ୍ଷେପକୁ ହସ୍ତଚାଳିତ ଭାବେ ସମାଧାନ କରେ ଏବଂ ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପରୁ ଯୋଜନା କାର୍ଯ୍ୟନ୍ୱୟନ ପୁଣି ଆରମ୍ଭ କରେ। ସ୍ୱୟଂଚାଳିତ ପୁନରୁଦ୍ଧାର ସମ୍ଭବ ନଥିଲେ ଏବଂ ଆପଣ ନିଜେ ହସ୍ତକ୍ଷେପ କରିବାକୁ ଚାହୁଁଥିଲେ ଏହା ବ୍ୟବହାର କରନ୍ତୁ।

**ପାରାମିଟର୍‌ଗୁଡ଼ିକ**

| ପାରାମିଟର୍ | ପ୍ରକାର | ଆବଶ୍ୟକ | ବର୍ଣ୍ଣନା |
|---|---|---|---|
| `plan_id` | string | ହଁ | ଯୋଜନା ID |
| `step_id` | string | ହଁ | ବିଫଳ ପଦକ୍ଷେପର ID |
| `resolution` | string | ହଁ | `skip` (ଛାଡ଼ି ଜାରି ରଖନ୍ତୁ), `retry` (ପଦକ୍ଷେପକୁ ସତେଜ ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ), କିମ୍ବା `mark_done` (ପୁଣି ଚଲାଇବା ବିନା ସଫଳ ଭାବେ ଧରନ୍ତୁ) ମଧ୍ୟରୁ ଗୋଟିଏ |

**ଫେରାଏ** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 ଏବଂ v2 ତୁଳନା

| ବୈଶିଷ୍ଟ୍ୟ | v1 | v2 |
|---|---|---|
| ବହୁ-ପର୍ଯ୍ୟାୟ ଯୋଜନା | ନା | ହଁ |
| ପଦକ୍ଷେପ ଆଉଟ୍‌ପୁଟ୍ ସନ୍ଦର୍ଭ (`__ref:`) | ନା | ହଁ |
| ପ୍ଲଗିନ୍ ଖୋଜା | ହସ୍ତଚାଳିତ | ସ୍ୱୟଂଚାଳିତ |
| ପ୍ରଗତି ଟ୍ରାକିଂ API | ନା | ହଁ |
| ତ୍ରୁଟି ପୁନରୁଦ୍ଧାର | ବିଫଳ ହୋଇ ବନ୍ଦ | ବିକଳ୍ପ ପଦ୍ଧତି + ଜାରି |
| ସମାନ୍ତରାଳ ପଦକ୍ଷେପ କାର୍ଯ୍ୟନ୍ୱୟନ | ନା | ହଁ (ପ୍ରତ୍ୟେକ ପର୍ଯ୍ୟାୟରେ ଅପ୍ଟ-ଇନ୍) |
| WP-CLI ଯୋଜନା କମାଣ୍ଡ | ନା | ହଁ |
| ବେଞ୍ଚମାର୍କ ସମାକଳନ | ନା | ହଁ (`q-restaurant-website`) |

---

## WP-CLI ଯୋଜନା କମାଣ୍ଡ

### `wp gratis-ai-agent plan create`

ଲକ୍ଷ୍ୟ ବର୍ଣ୍ଣନାରୁ ଏକ ସାଇଟ୍ ଯୋଜନା ସୃଷ୍ଟି କରେ।

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

ପୂର୍ବରୁ ସୃଷ୍ଟି ହୋଇଥିବା ଯୋଜନାକୁ କାର୍ଯ୍ୟକାରୀ କରେ।

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

କାର୍ଯ୍ୟନ୍ୱୟନ ହେଉଥିବା କିମ୍ବା ସମ୍ପୂର୍ଣ୍ଣ ହୋଇଥିବା ଯୋଜନାର ବର୍ତ୍ତମାନ ପ୍ରଗତି ଦେଖାଏ।

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

ସମସ୍ତ ସାଇଟ୍ ଯୋଜନା (ବାକି ଥିବା, ଚାଲୁଥିବା, ଏବଂ ସମ୍ପୂର୍ଣ୍ଣ) ତାଲିକାଭୁକ୍ତ କରେ।

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

ବିଫଳ ଯୋଜନାକୁ `pending` କୁ ପୁନଃସେଟ୍ କରେ, ଯାହାଦ୍ୱାରା ଆରମ୍ଭରୁ ପୁଣି କାର୍ଯ୍ୟକାରୀ କରାଯାଇପାରେ।

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
