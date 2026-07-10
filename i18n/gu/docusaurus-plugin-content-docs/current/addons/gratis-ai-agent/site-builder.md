---
title: સાઇટ બિલ્ડર ઓર્કેસ્ટ્રેશન v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (જે Gratis AI Agent v1.4.0 માં રજૂ કરવામાં આવ્યું છે) એ એન્જિન છે જે મલ્ટી-સ્ટેપ વેબસાઇટ બનાવવાની પ્રક્રિયાને સંભાળે છે. જ્યારે તમે એજન્ટને "રેસ્ટોરન્ટની વેબસાઇટ બનાવો" અથવા "બ્લોગ સાથે પોર્ટફોલિયો બનાવો" એમ કહો છો, ત્યારે આ ઓર્કેસ્ટ્રેટર (orchestrator) તે મોટા લક્ષ્યને એક માળખાગત **યોજના (plan)** માં તોડી નાખે છે, તેને પૂર્ણ કરવા માટે જરૂરી પ્લગઇન્સ શોધી કાઢે છે, દરેક સ્ટેપને ક્રમમાં એક્ઝિક્યુટ કરે છે, પ્રગતિને ટ્રેક કરે છે, અને ભૂલોમાંથી આપોઆપ પુનઃપ્રાપ્ત થાય છે.

---

## તે કેવી રીતે કામ કરે છે {#how-it-works}

### ૧. યોજના બનાવવી (Plan Generation) {#1-plan-generation}

જ્યારે એજન્ટને વેબસાઇટ બનાવવાનો આદેશ મળે છે, ત્યારે તે JSON **સાઇટ પ્લાન** બનાવવા માટે `create_site_plan` એબિલિટીને કોલ કરે છે. આ યોજના નીચેની વિગતોનું વર્ણન કરે છે:

- **લક્ષ્ય (Goal)** — તૈયાર થયેલી સાઇટને શું કરવું જોઈએ
- **તબક્કાઓ (Phases)** — સ્ટેપ્સના ક્રમમાં ગોઠવાયેલા જૂથો (દા.ત., _Setup_, _Content Types_, _Design_, _Content_)
- **સ્ટેપ્સ (Steps)** — દરેક તબક્કાની અંદરની વ્યક્તિગત એબિલિટી કોલ્સ
- **પ્લગઇન જરૂરિયાતો (Plugin requirements)** — અમુક સ્ટેપ્સ ચલાવવા માટે કયા પ્લગઇન્સ સક્રિય હોવા જોઈએ
- **ફોલબેક (Fallbacks)** — જો કોઈ મુખ્ય સ્ટેપ નિષ્ફળ જાય તો વૈકલ્પિક સ્ટેપ્સ

**ઉદાહરણ યોજના (সংক্ষিপ্ত)**

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

### ૨. પ્લગઇન શોધ (Plugin Discovery) {#2-plugin-discovery}

એક્ઝેક્યુશન શરૂ થાય તે પહેલાં, ઓર્કેસ્ટ્રેટર યોજનાના `plugin_requirements` ને સ્કેન કરે છે અને તપાસે છે કે કયા પ્લગઇન્સ પહેલેથી સક્રિય છે. ખૂટતા પ્લગઇન્સ માટે, તે:

૧. શ્રેષ્ઠ મેચ શોધવા માટે `recommend_plugin` દ્વારા રજિસ્ટ્રીમાં શોધ કરે છે
૨. ભલામણની પુષ્ટિ કરવા માટે એજન્ટને પ્રોમ્પ્ટ કરે છે
૩. મંજૂરી આપવામાં આવે તો ઇન્સ્ટોલેશન શરૂ કરે છે (અથવા જો સેટિંગ્સમાં auto-install સક્ષમ હોય તો)

પ્લગઇન શોધ નિષ્ફળતા ગંભીર નથી — ઓર્કેસ્ટ્રેટર અસરગ્રસ્ત સ્ટેપ્સને `skipped` તરીકે માર્ક કરે છે અને યોજનાના બાકીના ભાગ સાથે આગળ વધે છે.

### ૩. યોજનાનું એક્ઝેક્યુશન (Plan Execution) {#3-plan-execution}

ઓર્કેસ્ટ્રેટર પ્લાન ID સાથે `execute_site_plan` ને કોલ કરે છે. એક્ઝેક્યુશન તબક્કા-દર-તબક્કો, સ્ટેપ-દર-સ્ટેપ આગળ વધે છે:

- **સ્ટેપ રેફરન્સ** (`__ref:` પ્રીફિક્સ) — સ્ટેપ્સ અગાઉના સ્ટેપ્સના આઉટપુટનો સંદર્ભ આપી શકે છે. ઉપરના ઉદાહરણમાં, `__ref:create_menu.menu_id` ને `create_menu` સ્ટેપ દ્વારા પરત કરાયેલ `menu_id` માં રિઝોલ્વ કરવામાં આવે છે.
- **સમાંતર સ્ટેપ્સ (Parallel steps)** — એક જ તબક્કાની અંદરના સ્ટેપ્સ જે એકબીજા પર નિર્ભર નથી, જ્યારે `parallel` ફ્લેગ સેટ કરવામાં આવે છે ત્યારે તે એકસાથે (concurrently) ડિસ્પેચ થાય છે.
- **સ્ટેપ ટાઇમઆઉટ (Step timeout)** — દરેક સ્ટેપનો વ્યક્તિગત ટાઇમઆઉટ હોય છે (ડિફોલ્ટ: `Ability Timeout` સેટિંગ). ટાઇમઆઉટ થયેલા સ્ટેપને `failed` તરીકે માર્ક કરવામાં આવે છે અને યોજના આગળ વધે છે.

### ૪. પ્રગતિ ટ્રેકિંગ (Progress Tracking) {#4-progress-tracking}

એક્ઝેક્યુશન સ્ટેટસ તપાસવા માટે કોઈપણ સમયે `get_plan_progress` ને કોલ કરો:

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

WP-CLI યુઝર્સ નીચેનાથી પ્રગતિનું નિરીક્ષણ કરી શકે છે:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### ૫. ભૂલમાંથી પુનઃપ્રાપ્તિ (Error Recovery) {#5-error-recovery}

જ્યારે કોઈ સ્ટેપ નિષ્ફળ જાય છે, ત્યારે ઓર્કેસ્ટ્રેટર યોજનામાં વ્યાખ્યાયિત **ફોલબેક (fallback)** સ્ટેપ તપાસે છે:

- **ફોલબેક ઉપલબ્ધ** — ફોલબેક સ્ટેપનો તાત્કાલિક પ્રયાસ કરવામાં આવે છે. જો તે સફળ થાય, તો એક્ઝેક્યુશન ચાલુ રહે છે. જો તે પણ નિષ્ફળ જાય, તો સ્ટેપને `failed` તરીકે માર્ક કરવામાં આવે છે અને એક્ઝેક્યુશન આગલા સ્ટેપ સાથે ચાલુ રહે છે.
- **કોઈ ફોલબેક નહીં** — સ્ટેપને `failed` તરીકે માર્ક કરવામાં આવે છે. બિન-નિર્ણાયક (non-critical) સ્ટેપ્સને સ્કીપ કરવામાં આવે છે; નિર્ણાયક સ્ટેપ્સ (જેને `required: true` તરીકે માર્ક કરવામાં આવ્યા છે) વર્તમાન તબક્કાને રોકી દે છે અને તબક્કા-સ્તરની પુનઃપ્રાપ્તિનો પ્રયાસ કરે છે.

એજન્ટ અંતિમ પ્લાન સારાંશમાં તમામ નિષ્ફળતાઓનો અહેવાલ આપે છે અને પુનઃપ્રાપ્ત ન થઈ શકે તેવી ભૂલો માટે મેન્યુઅલ સુધારાના પગલાં સૂચવી શકે છે.

---

## Site Plan Abilities {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

કુદરતી ભાષાના લક્ષ્ય વર્ણનમાંથી માળખાગત સાઇટ પ્લાન જનરેટ કરે છે.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | ઇચ્છિત વેબસાઇટનું કુદરતી ભાષાનું વર્ણન |
| `style` | string | No | વિઝ્યુઅલ સ્ટાઇલ પસંદગી: `minimal`, `bold`, `professional`, `playful`. ડિફોલ્ટ: એજન્ટ લક્ષ્યના આધારે પસંદ કરે છે |
| `plugins` | array | No | પ્લાનમાં શામેલ કરવા માટે પ્લગઇન સ્લગ્સ. ઓર્કેસ્ટ્રેટર જરૂરી પ્લગઇન્સ આપમેળે ઉમેરે છે. |
| `dry_run` | boolean | No | જો `true` હોય, તો તે પ્લાન JSON પરત કરે છે, તેને સેવ કે એક્ઝિક્યુટ કર્યા વિના. ડિફોલ્ટ `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

પહેલા જનરેટ કરેલા સાઇટ પ્લાનનું એક્ઝેક્યુશન શરૂ કરે છે.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | એક્ઝેક્યુટ કરવા માટેની યોજનાની ID |
| `auto_install_plugins` | boolean | No | જો `true` હોય, તો પુષ્ટિ વિના જરૂરી પ્લગઇન્સ આપમેળે ઇન્સ્ટોલ કરે છે. ડિફોલ્ટ `false` |
| `max_retries` | integer | No | આગળ વધતા પહેલા નિષ્ફળ સ્ટેપનો ફરીથી પ્રયાસ કરવાની સંખ્યા. ડિફોલ્ટ `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

સાઇટ પ્લાનનો વર્તમાન એક્ઝેક્યુશન સ્ટેટસ પરત કરે છે.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ક્વેરી કરવા માટેની પ્લાન ID |

**Returns** ઉપરના [Progress Tracking](#4-progress-tracking) માં વર્ણવેલ પ્રગતિ ઓબ્જેક્ટ.

---

### `handle_plan_error` {#handleplanerror}

મેન્યુઅલી નિષ્ફળ સ્ટેપનું નિરાકરણ લાવે છે અને આગલા સ્ટેપથી પ્લાન એક્ઝેક્યુશન ફરી શરૂ કરે છે. તેનો ઉપયોગ ત્યારે કરો જ્યારે આપમેળે પુનઃપ્રાપ્તિ શક્ય ન હોય અને તમે દરમિયાનગીરી કરવા માંગતા હો.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | પ્લાન ID |
| `step_id` | string | Yes | નિષ્ફળ સ્ટેપની ID |
| `resolution` | string | Yes | `skip` (સ્કીપ કરીને આગળ વધવું), `retry` (સ્ટેપનો તાત્કાલિક ફરી પ્રયાસ કરવો), અથવા `mark_done` (ફરી ચલાવ્યા વિના સફળ ગણવું) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 અને v2 ની તુલના {#comparing-v1-and-v2}

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

લક્ષ્ય વર્ણનમાંથી સાઇટ પ્લાન જનરેટ કરે છે.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

પહેલા જનરેટ કરેલા પ્લાનનું એક્ઝેક્યુશન કરે છે.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

એક્ઝિક્યુટ થઈ રહેલા અથવા પૂર્ણ થયેલા પ્લાન માટે વર્તમાન પ્રગતિ બતાવે છે.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

તમામ સાઇટ પ્લાન (લंबित, પ્રગતિમાં અને પૂર્ણ થયેલા) ની યાદી આપે છે.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

નિષ્ફળ પ્લાનને `pending` પર રીસેટ કરે છે જેથી તે શરૂઆતથી ફરીથી એક્ઝેક્યુટ થઈ શકે.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
