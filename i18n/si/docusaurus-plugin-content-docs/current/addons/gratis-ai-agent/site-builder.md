---
title: අඩවි නිර්මාණකරු සම්බන්ධීකරණය v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# අඩවි නිර්මාණ සම්බන්ධීකරණය v2

අඩවි නිර්මාණ සම්බන්ධීකරණය v2 (Gratis AI Agent v1.4.0 හි හඳුන්වා දුන්) බහු-පියවර වෙබ් අඩවි නිර්මාණයට බලය දෙන යන්ත්‍රණයයි. ඔබ agent වෙත "අවන්හලක් සඳහා වෙබ් අඩවියක් සාදන්න" හෝ "බ්ලොගයක් සමඟ portfolio එකක් සාදන්න" යැයි ඉල්ලූ විට, orchestrator එම උසස් මට්ටමේ අරමුණ ව්‍යුහගත **සැලැස්මක්** බවට බෙදයි, එය ඉටු කිරීමට අවශ්‍ය plugins සොයා ගනී, එක් එක් පියවර අනුපිළිවෙළින් ක්‍රියාත්මක කරයි, ප්‍රගතිය නිරීක්ෂණය කරයි, සහ දෝෂවලින් ස්වයංක්‍රීයව යථා තත්ත්වයට පත් වෙයි.

---

## මෙය ක්‍රියා කරන ආකාරය {#how-it-works}

### 1. සැලසුම් ජනනය {#1-plan-generation}

agent වෙත අඩවි නිර්මාණ උපදෙස් ලැබුණු විට, එය JSON **අඩවි සැලැස්මක්** නිපදවීමට `create_site_plan` හැකියාව අමතයි. සැලැස්ම විස්තර කරන්නේ:

- **අරමුණ** — අවසන් වූ අඩවිය කළ යුතු දේ
- **අදියර** — පියවරවල අනුපිළිවෙළ කළ කණ්ඩායම් (උදා. _සැකසුම_, _අන්තර්ගත වර්ග_, _නිර්මාණය_, _අන්තර්ගතය_)
- **පියවර** — එක් එක් අදියර තුළ ඇති තනි හැකියාව ඇමතුම්
- **Plugin අවශ්‍යතා** — යම් පියවර ක්‍රියාත්මක වීමට සක්‍රීය විය යුතු plugins
- **විකල්ප පියවර** — ප්‍රධාන පියවර අසාර්ථක වුවහොත් භාවිත කළ හැකි විකල්ප පියවර

**උදාහරණ සැලැස්ම (සංක්ෂිප්ත)**

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

### 2. Plugin සොයාගැනීම {#2-plugin-discovery}

ක්‍රියාත්මක කිරීම ආරම්භ වීමට පෙර, orchestrator සැලැස්මේ `plugin_requirements` පරීක්ෂා කර දැනටමත් සක්‍රීය plugins මොනවාදැයි බලයි. නැති plugins සඳහා, එය:

1. හොඳම ගැළපීම සඳහා `recommend_plugin` හරහා registry තුළ සොයයි
2. නිර්දේශය තහවුරු කිරීමට agent වෙත ඉල්ලයි
3. අනුමත වුවහොත් (හෝ සැකසුම් තුළ ස්වයංක්‍රීය ස්ථාපනය සක්‍රීය නම්) ස්ථාපනය ආරම්භ කරයි

Plugin සොයාගැනීමේ අසාර්ථකවීම් මාරක නොවේ — orchestrator බලපෑමට ලක් වූ පියවර `skipped` ලෙස සලකුණු කර සැලැස්මේ ඉතිරි කොටස සමඟ ඉදිරියට යයි.

### 3. සැලැස්ම ක්‍රියාත්මක කිරීම {#3-plan-execution}

orchestrator සැලසුම් ID එක සමඟ `execute_site_plan` අමතයි. ක්‍රියාත්මක කිරීම අදියරෙන් අදියරට, පියවරෙන් පියවරට සිදුවේ:

- **පියවර යොමු** (`__ref:` prefix) — පියවරවලට පෙර පියවරවල ප්‍රතිදාන යොමු කළ හැක. ඉහත උදාහරණයේ, `__ref:create_menu.menu_id` යනු `create_menu` පියවරෙන් ආපසු දෙන `menu_id` බවට විසඳේ.
- **සමාන්තර පියවර** — එකම අදියර තුළ අන්‍යෝන්‍ය රඳාපවතින සම්බන්ධතා නැති පියවර, `parallel` flag එක සකසා ඇති විට එකවර යවනු ලැබේ.
- **පියවර කල්ඉකුත් වීම** — එක් එක් පියවරට තනි කල්ඉකුත් කාලයක් ඇත (පෙරනිමිය: `Ability Timeout` සැකසුම). කල්ඉකුත් වූ පියවරක් `failed` ලෙස සලකුණු වන අතර සැලැස්ම ඉදිරියට යයි.

### 4. ප්‍රගති නිරීක්ෂණය {#4-progress-tracking}

ක්‍රියාත්මක කිරීමේ තත්ත්වය පරීක්ෂා කිරීමට ඕනෑම වේලාවක `get_plan_progress` අමතන්න:

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

WP-CLI පරිශීලකයින්ට මෙසේ ප්‍රගතිය නිරීක්ෂණය කළ හැක:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. දෝෂ යථා තත්ත්වයට පත් කිරීම {#5-error-recovery}

පියවරක් අසාර්ථක වූ විට, orchestrator සැලැස්මේ අර්ථ දක්වා ඇති **විකල්ප** පියවරක් තිබේදැයි පරීක්ෂා කරයි:

- **විකල්පයක් ඇත** — විකල්ප පියවර වහාම උත්සාහ කෙරේ. එය සාර්ථක වුවහොත්, ක්‍රියාත්මක කිරීම ඉදිරියට යයි. එයත් අසාර්ථක වුවහොත්, පියවර `failed` ලෙස සලකුණු කර ඊළඟ පියවර සමඟ ක්‍රියාත්මක කිරීම ඉදිරියට යයි.
- **විකල්පයක් නැත** — පියවර `failed` ලෙස සලකුණු කෙරේ. අත්‍යවශ්‍ය නොවන පියවර මඟ හැරේ; අත්‍යවශ්‍ය පියවර (`required: true` ලෙස සලකුණු කළ) වත්මන් අදියර නවතා අදියර මට්ටමේ යථා තත්ත්වයට පත් කිරීමේ උත්සාහයක් ආරම්භ කරයි.

අවසාන සැලසුම් සාරාංශයේදී agent සියලු අසාර්ථකවීම් වාර්තා කරන අතර, යථා තත්ත්වයට පත් කළ නොහැකි දෝෂ සඳහා අතින් කළ හැකි පිළියම් පියවර යෝජනා කළ හැක.

---

## අඩවි සැලසුම් හැකියාවන් {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

ස්වාභාවික භාෂා අරමුණු විස්තරයකින් ව්‍යුහගත අඩවි සැලැස්මක් ජනනය කරයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `goal` | string | ඔව් | අවශ්‍ය වෙබ් අඩවිය පිළිබඳ ස්වාභාවික භාෂා විස්තරය |
| `style` | string | නැත | දෘශ්‍ය ශෛලි කැමැත්ත: `minimal`, `bold`, `professional`, `playful`. පෙරනිමිය: අරමුණ මත පදනම්ව agent තෝරා ගනී |
| `plugins` | array | නැත | සැලැස්මට ඇතුළත් කළ යුතු Plugin slugs. orchestrator අවශ්‍ය plugins ස්වයංක්‍රීයව එක් කරයි. |
| `dry_run` | boolean | නැත | `true` නම්, සැලසුම් JSON එක සුරැකීම හෝ ක්‍රියාත්මක කිරීම නැතිව ආපසු දෙයි. පෙරනිමිය `false` |

**ආපසු දේ** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

කලින් ජනනය කළ අඩවි සැලැස්මක් ක්‍රියාත්මක කිරීම ආරම්භ කරයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `plan_id` | string | ඔව් | ක්‍රියාත්මක කළ යුතු සැලැස්මේ ID |
| `auto_install_plugins` | boolean | නැත | `true` නම්, තහවුරු කිරීමක් නොමැතිව අවශ්‍ය ප්ලගින ස්වයංක්‍රීයව ස්ථාපනය කරයි. පෙරනිමිය `false` |
| `max_retries` | integer | නැත | ඉදිරියට යාමට පෙර අසාර්ථක පියවරක් නැවත උත්සාහ කරන වාර ගණන. පෙරනිමිය `1` |

**ආපසු ලබා දෙයි** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

අඩවි සැලැස්මක වත්මන් ක්‍රියාත්මක කිරීමේ තත්ත්වය ආපසු ලබා දෙයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `plan_id` | string | ඔව් | විමසීමට සැලැස්මේ ID |

**ආපසු ලබා දෙයි** ඉහත [ප්‍රගති නිරීක්ෂණය](#4-progress-tracking) තුළ විස්තර කළ ප්‍රගති වස්තුව.

---

### `handle_plan_error` {#handleplanerror}

අසාර්ථක පියවරක් අතින් විසඳා, ඊළඟ පියවරෙන් සැලැස්ම ක්‍රියාත්මක කිරීම නැවත ආරම්භ කරයි. ස්වයංක්‍රීය ප්‍රතිසාධනය කළ නොහැකි වූ විට ඔබට මැදිහත් වීමට අවශ්‍ය නම් මෙය භාවිත කරන්න.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `plan_id` | string | ඔව් | සැලැස්මේ ID |
| `step_id` | string | ඔව් | අසාර්ථක පියවරේ ID |
| `resolution` | string | ඔව් | `skip` (මඟහැර ඉදිරියට යන්න), `retry` (පියවර වහාම නැවත උත්සාහ කරන්න), හෝ `mark_done` (නැවත ධාවනය නොකර සාර්ථක වූ ලෙස සලකන්න) අතරින් එකක් |

**ආපසු ලබා දෙයි** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 සහ v2 සැසඳීම {#comparing-v1-and-v2}

| විශේෂාංගය | v1 | v2 |
|---|---|---|
| බහු-අදියර සැලසුම් | නැත | ඔව් |
| පියවර ප්‍රතිදාන යොමු (`__ref:`) | නැත | ඔව් |
| ප්ලගින සොයාගැනීම | අතින් | ස්වයංක්‍රීය |
| ප්‍රගති නිරීක්ෂණ API | නැත | ඔව් |
| දෝෂ ප්‍රතිසාධනය | අසාර්ථක වී නවත්වන්න | විකල්ප ක්‍රියාව + ඉදිරියට යන්න |
| සමාන්තර පියවර ක්‍රියාත්මක කිරීම | නැත | ඔව් (අදියරකට වෙන වෙනම තෝරා සක්‍රිය කළ හැක) |
| WP-CLI සැලැස්ම් විධාන | නැත | ඔව් |
| මිණුම් ලකුණු ඒකාබද්ධ කිරීම | නැත | ඔව් (`q-restaurant-website`) |

---

## WP-CLI සැලැස්ම් විධාන {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

ඉලක්ක විස්තරයකින් අඩවි සැලැස්මක් ජනනය කරයි.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

පෙර ජනනය කළ සැලැස්මක් ක්‍රියාත්මක කරයි.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

ක්‍රියාත්මක වන හෝ සම්පූර්ණ වූ සැලැස්මක වත්මන් ප්‍රගතිය පෙන්වයි.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

සියලු අඩවි සැලසුම් ලැයිස්තුගත කරයි (බලාපොරොත්තුවෙන් ඇති, ක්‍රියාත්මක වෙමින් ඇති, සහ සම්පූර්ණ වූ).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

අසාර්ථක සැලැස්මක් ආරම්භයේ සිට නැවත ක්‍රියාත්මක කළ හැකි ලෙස `pending` වෙත නැවත සකසයි.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
