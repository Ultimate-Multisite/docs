---
title: የጣቢያ ገንቢ አደራጅነት v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (በGratis AI Agent v1.4.0 ውስጥ ተተክሏል) ብዙ ደረጃዎችን የያዘ የድረ-ገጽ መፍጠሪያን የሚያጎላ ሞተር ነው። ወኪሉን "የሬስቶራንት ድረ-ገጽ ፍጠር" ወይም "በብሎግ የተደገፈ ፖርትፎሊዮ ፍጠር" ብለው ሲጠይቁ፣ አደራጅው (orchestrator) ያንን ከፍተኛ ደረጃ ግብ ወደ መዋቅራዊ **ዕቅድ** ይከፋፍላል፣ ለማሳካት የሚያስፈልጉትን plugins ያገኛል፣ እያንዳንዱን እርምጃ በቅደም ተከተል ያከናውናል፣ እድገትን ይከታተላል፣ እና ስህተቶች ሲፈጠሩ በራሱ ይቋቋማል።

---

## እንዴት ይሰራል

### 1. የዕቅድ መፍጠር (Plan Generation)

ወኪሉ የድረ-ገጽ የመገንባት መመሪያ ሲቀበል፣ የJSON **የድረ-ገጽ ዕቅድ** ለማመንጨት `create_site_plan` የሚል ችሎታ (ability) ይጠራል። ዕቅዱ የሚከተሉትን ይገልጻል፦

- **ግብ (Goal)** — የተጠናቀቀው ድረ-ገጽ ምን ማድረግ እንዳለበት
- **ደረጃዎች (Phases)** — በቅደም ተከተል የተደራጁ የደረጃ ስብስቦች (ለምሳሌ፡ _Setup_፣ _Content Types_፣ _Design_፣ _Content_)
- **እርምጃዎች (Steps)** — በእያንዳንዱ ደረጃ ውስጥ ያሉ 개개 ችሎታ ጥሪዎች
- **የplugin መስፈርቶች (Plugin requirements)** — የተወሰኑ እርምጃዎች እንዲሰሩ የሚያስፈልጉ plugins
- **የተተኪ እርምጃዎች (Fallbacks)** — ዋናው እርምጃ ቢሳሳት የሚሰሩ አማራጭ እርምጃዎች

**የዕቅድ ምሳሌ (አጭር)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "የኦንላይን ምናሌ፣ የቦታ ማስያዣ ቅጽ እና የእውቂያ ገጽ ያለው የሬስቶራንት ድረ-ገጽ መገንባት",
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
    { "slug": "contact-form-7", "reason": "የቦታ ማስያዣ እና የእውቂያ ቅጾች የሚያስፈልጉት" }
  ]
}
```

### 2. የplugin ፍለጋ (Plugin Discovery)

አፈጻጸም ከመጀመሩ በፊት፣ አደራጅው የዕቅዱን `plugin_requirements` ይቃኛል እና የትኞቹ plugins ቀድሞውንም ንቁ (active) መሆናቸውን ይፈትሻል። ለጎደሉ plugins፣ የሚከተሉትን ያደርጋል፦

1.  በ`recommend_plugin` አማካኝነት ምርጥ ተዛማጅነትን ይፈልጋል
2.  የሚመከረውን ነገር ለማረጋገጥ ወኪሉን ይጠይቃል
3.  በተፈቀደበት ጊዜ (ወይም በቅንብሮች ውስጥ አውቶ-ኢንስታል ከተቀመጠ) መጫኑን ያነሳሳል

የplugin ፍለጋ ውድቀቶች አደጋ የማይፈጥሩ ናቸው — አደራጅው የተጎዱትን እርምጃዎች `skipped` (ተዘልቀዋል) ብሎ ምልክት ያደርጋል እና የቀረበውን ዕቅድ ይቀጥላል።

### 3. የዕቅድ አፈጻጸም (Plan Execution)

አደራጅው የዕቅዱን ID በመጠቀም `execute_site_plan` ይጠራል። አፈጻጸሙ በደረጃዎች (phase-by-phase)፣ እርምጃ በየእርምጃ ይጓዛል፦

- **የእርምጃ ማጣቀሻዎች** (`__ref:` ቅድመ-አገናኝ) — እርምጃዎች ከቀደምት እርምጃዎች ውጤቶች ጋር መገናኘት ይችላሉ። በምሳሌው ላይ፣ `__ref:create_menu.menu_id` የሚለው የ`create_menu` እርምጃ የሰጠውን `menu_id` ያገኛል።
- **በአንድነት የሚሰሩ እርምጃዎች (Parallel steps)** — በአንድ ደረጃ ውስጥ ያሉ እና እርስ በርስ መደጋገፍ የሌላቸው እርምጃዎች `parallel` ባንዲራ ከተቀመጠባቸው በአንድነት ይላካሉ።
- **የእርምጃ ጊዜ መቋረጥ (Step timeout)** — እያንዳንዱ እርምጃ የራሱ የሆነ ጊዜ መቋረጥ አለው (በነባሪ፡ የ`Ability Timeout` ቅንብራችን)። ጊዜው ያለፈበት እርምጃ `failed` (ተሳስቷል) ብሎ ምልክት ይደረግበታል እና ዕቅዱ ይቀጥላል።

### 4. የሂደት ክትትል (Progress Tracking)

የአፈጻጸም ሁኔታን ለማየት በማንኛውም ጊዜ `get_plan_progress` ይጠራ፦

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

WP-CLI ተጠቃሚዎች በየሚከተለው ሊከታተሉ ይችላሉ፦

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. ስህተት መቋቋም (Error Recovery)

አንድ እርምጃ ሲሳሳት፣ አደራጅው በዕቅዱ ውስጥ የተገለጸ **የተተኪ እርምጃ (fallback)** መኖሩን ይፈትሻል፦

- **የተተኪ እርምጃ መገኘት (Fallback available)** — የተተኪው እርምጃ ወዲያውኑ ይሞከራል። ከተሳካ፣ አፈጻጸሙ ይቀጥላል። እሱም ቢሳሳት፣ እርምጃው `failed` ብሎ ምልክት ይደረግበታል እና አፈጻጸሙ በሚቀጥለው እርምጃ ይቀጥላል።
- **የተተኪ እርምጃ አለመኖር (No fallback)** — እርምጃው `failed` ብሎ ምልክት ይደረግበታል። ወሳኝ ያልሆኑ እርምጃዎች ይዘልቃሉ (skipped)፤ ወሳኝ እርምጃዎች (በ`required: true` ምልክት የተደረጉ) የአሁኑን ደረጃ ያቆማሉ እና የደረጃ ደረጃ የመቋቋም ሙከራ ያነሳሳሉ።

ወኪሉ ሁሉንም ውድቀቶች በየመጨረሻው የዕቅድ ማጠቃለያ ዘገባ ያቀርባል እና ሊመለሱ የማይችሉ ስህተቶች ላይ የእጅ ጣልቃ ገብነት የሚያስፈልጋቸውን እርምጃዎች ሊጠቁም ይችላል።

---

## Site Plan Abilities

### `create_site_plan`

ከተፈጥሯዊ ቋንቋ ግብ መግለጫ (natural language goal description) መዋቅራዊ የድረ-ገጽ ዕቅድ ይፈጥራል።

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | የሚፈለገውን የድረ-ገጽ ተፈጥሯዊ ቋንቋ መግለጫ |
| `style` | string | No | የእይታ ዘይቤ ምርጫ፡ `minimal`፣ `bold`፣ `professional`፣ `playful`። በነባሪ፡ ወኪሉ በግብ መሰረት ይመርጣል |
| `plugins` | array | No | በዕቅዱ ውስጥ ለማካተት የሚፈለጉ የplugin slugs። አደራጅው የሚያስፈልጉ plugins በራስ-ሰር ይጨምራል። |
| `dry_run` | boolean | No | `true` ከሆነ፣ ዕቅዱን ሳይያስቀምጥ ወይም ሳይፈጽም የJSON ዕቅዱን ይመልሳል። በነባሪ `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

ቀደም ብሎ የተፈጠረ የድረ-ገጽ ዕቅድ ማስፈጸም ይጀምራል።

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ሊፈጸም የሚገባው የዕቅድ ID |
| `auto_install_plugins` | boolean | No | `true` ከሆነ፣ ያለ ማረጋገጫ የሚያስፈልጉ plugins በራስ-ሰር ይጫናል። በነባሪ `false` |
| `max_retries` | integer | No | ወደፊት ከመሄድዎ በፊት የተሳሳተ እርምጃ ለመሞከር የሚፈለገው ጊዜ። በነባሪ `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

የድረ-ገጽ ዕቅዱን የአፈጻጸም ሁኔታ ይመልሳል።

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ሊጠየቀው የዕቅድ ID |

**Returns** ከላይ ባለው [Progress Tracking](#4-progress-tracking) ክፍል የተገለጸውን የሂደት ነገር (progress object)።

---

### `handle_plan_error`

የተሳሳተ እርምጃን በእጅ በመፍታት እና ከሚቀጥለው እርምጃ የዕቅድ አፈጻጸምን እንደገና ማስጀመር። አውቶማቲክ መቋቋም ባይቻል እና ጣልቃ መግባት በሚፈልጉበት ጊዜ ይጠቀሙ።

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | የዕቅድ ID |
| `step_id` | string | Yes | የተሳሳተውን እርምጃ ID |
| `resolution` | string | Yes | `skip` (ይዘልቃል እና ይቀጥላል), `retry` (እርምጃውን ወዲያውኑ ይሞከራል), ወይም `mark_done` (እንደተሳካ ይቆጠራል ያለ ዳግም ማስኬድ) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 እና v2 ን ማነጻጸር

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

## WP-CLI Plan Commands

### `wp gratis-ai-agent plan create`

ከየግብ መግለጫ የድረ-ገጽ ዕቅድ ይፈጥራል።

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

ቀደም ብሎ የተፈጠረ ዕቅድ ያከናውናል።

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

የሚፈጸም ወይም የተጠናቀቀ ዕቅድ የአሁኑን እድገት ያሳያል።

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

ሁሉንም የድረ-ገጽ ዕቅዶች (በመጠበቅ ላይ ያሉ፣ እየተከናወኑ ያሉ እና የተጠናቀቁ) ይዘረዝራል።

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

የተሳሳተ ዕቅድን ወደ `pending` በማስቀመጥ ከጅምር እንዲሰራ ያደርገዋል።

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
