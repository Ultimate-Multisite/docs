---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (introducerad i Gratis AI Agent v1.4.0) är motorn som driver flerstegswebbplatskonstruktion. När du ber agenten att "bygga en restaurangwebbplats" eller "skapa en portfolio med blogg" bryter orkestratorn ner det övergripande målet i en strukturerad **plan**, upptäcker de plugins som behövs för att slutföra det, exekverar varje steg i sekvens, spårar framsteg och återhämtar sig från fel autonomt.

---

## Hur det fungerar

### 1. Plangenerering

När agenten får en instruktion om webbplatsbyggande anropar den förmågan `create_site_plan` för att producera en JSON **webbplatsplan**. Planen beskriver:

- **Mål** — vad den färdiga webbplatsen ska göra
- **Faser** — ordnade grupper av steg (t.ex. _Setup_, _Content Types_, _Design_, _Content_)
- **Steg** — individuella förmåganrop inom varje fas
- **Pluginkrav** — plugins som måste vara aktiva för att vissa steg ska kunna köras
- **Återfall** — alternativa steg om ett primärt steg misslyckas

**Exempel på plan (förenklat)**

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

### 2. Plugin Discovery

Innan exekveringen påbörjas skannar orkestratorn `plugin_requirements` i planen och kontrollerar vilka plugins som redan är aktiva. För saknade plugins:

1.  Söker i registret via `recommend_plugin` efter bästa matchningen
2.  Ber agenten bekräfta rekommendationen
3.  Utlöser installation om det godkänns (eller om automatisk installation är aktiverad i inställningarna)

Fel vid pluginupptäckt är inte kritiska — orkestratorn markerar de berörda stegen som `skipped` och fortsätter med resten av planen.

### 3. Plan Execution

Orkestratorn anropar `execute_site_plan` med plan-ID:t. Exekveringen går igenom fas för fas, steg för steg:

- **Stegreferenser** (`__ref:` prefix) — steg kan referera till utdata från tidigare steg. I exemplet ovan löses `__ref:create_menu.menu_id` till `menu_id` som returnerades av steget `create_menu`.
- **Parallella steg** — steg inom samma fas som inte har några beroenden skickas ut samtidigt när flaggan `parallel` är satt.
- **Stegtidsgräns** — varje steg har en individuell tidsgräns (standard: inställningen `Ability Timeout`). Ett steg som löper ut markeras som `failed` och planen fortsätter.

### 4. Progress Tracking

Anropa `get_plan_progress` när som helst för att kontrollera exekveringsstatus:

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

Användare av WP-CLI kan övervaka framsteg med:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Error Recovery

När ett steg misslyckas kontrollerar orkestratorn efter ett **återfall**-steg definierat i planen:

- **Återfall tillgängligt** — återfallsteget försöks omedelbart. Om det lyckas fortsätter exekveringen. Om det också misslyckas markeras steget som `failed` och exekveringen fortsätter till nästa steg.
- **Inget återfall** — steget markeras som `failed`. Icke-kritiska steg hoppas över; kritiska steg (markerade med `required: true`) stoppar den aktuella fasen och utlöser ett återhämtningsförsök på fasnivå.

Agenten rapporterar alla fel i den slutliga planöversikten och kan föreslå manuella åtgärder för oåterkalleliga fel.

---

## Site Plan Abilities

### `create_site_plan`

Genererar en strukturerad webbplatsplan från en naturlig språkbeskrivning av ett mål.

**Parametrar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Naturlig språkbeskrivning av önskad webbplats |
| `style` | string | No | Visuell stilpreferens: `minimal`, `bold`, `professional`, `playful`. Standard: agent väljer baserat på målet |
| `plugins` | array | No | Plugin-slugs som ska inkluderas i planen. Orkestratorn lägger automatiskt till nödvändiga plugins. |
| `dry_run` | boolean | No | Om `true`, returneras plan-JSON utan att sparas eller exekveras. Standard `false` |

**Returnerar** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Påbörjar exekveringen av en tidigare genererad webbplatsplan.

**Parametrar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID för planen som ska exekveras |
| `auto_install_plugins` | boolean | No | Om `true`, installeras nödvändiga plugins automatiskt utan bekräftelse. Standard `false` |
| `max_retries` | integer | No | Antal gånger ett misslyckat steg ska försöka igen innan man går vidare. Standard `1` |

**Returnerar** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Returnerar den aktuella exekveringsstatusen för en webbplatsplan.

**Parametrar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan-ID att fråga efter |

**Returnerar** progress-objektet som beskrivs i [Progress Tracking](#4-progress-tracking) ovan.

---

### `handle_plan_error`

Löser manuellt ett misslyckat steg och återupptar planexekveringen från nästa steg. Använd detta när automatisk återhämtning inte var möjlig och du vill ingripa.

**Parametrar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan-ID |
| `step_id` | string | Yes | ID för det misslyckade steget |
| `resolution` | string | Yes | Ett av `skip` (hoppa över och fortsätt), `retry` (försök steget omedelbart igen), eller `mark_done` (behandla som lyckat utan att köra om) |

**Returnerar** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Jämförelse v1 och v2

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans | Nej | Ja |
| Stegutdata-referenser (`__ref:`) | Nej | Ja |
| Plugin discovery | Manuell | Automatisk |
| Progress tracking API | Nej | Ja |
| Error recovery | Misslyckas och stoppar | Återfall + fortsätter |
| Parallel step execution | Nej | Ja (valfritt per fas) |
| WP-CLI plan commands | Nej | Ja |
| Benchmark integration | Nej | Ja (`q-restaurant-website`) |

---

## WP-CLI Plan Commands

### `wp gratis-ai-agent plan create`

Genererar en webbplatsplan från en målbeskrivning.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Exekverar en tidigare genererad plan.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Visar nuvarande framsteg för en exekverande eller slutförd plan.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Listar alla webbplatsplaner (väntande, pågående och slutförda).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Återställer en misslyckad plan till `pending` så att den kan exekveras från början.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
