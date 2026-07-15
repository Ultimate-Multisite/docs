---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (introduert i Gratis AI Agent v1.4.0) er motoren som driver flertrinnskaps nettsidebygging. Når du ber agenten om å "bygge en restaurantnettside" eller "lage en portefølje med blogg", bryter orkestratoren ned dette høynivåmålet i en strukturert **plan**, oppdager hvilke plugins som trengs for å oppfylle det, utfører hvert trinn i sekvens, sporer fremdrift og gjenoppretter seg autonomt ved feil.

---

## Hvordan det fungerer {#how-it-works}

### 1. Planutvikling (Plan Generation) {#1-plan-generation}

Når agenten mottar en instruksjon om å bygge en nettside, kaller den `create_site_plan`-funksjonaliteten for å produsere en JSON **site plan**. Planen beskriver:

- **Goal** — hva den ferdige nettsiden skal gjøre
- **Phases** — ordnede grupper av trinn (f.eks. _Oppsett_, _Innholdstyper_, _Design_, _Innhold_)
- **Steps** — individuelle ability-kall innenfor hver fase
- **Plugin requirements** — plugins som må være aktive for at visse trinn skal kunne kjøre
- **Fallbacks** — alternative trinn dersom et primært trinn feiler

**Eksempel på plan (forkortet)**

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

Før utførelsen starter, skanner orkestratoren `plugin_requirements` i planen og sjekker hvilke plugins som allerede er aktive. For manglende plugins:

1. Søker den i registeret via `recommend_plugin` etter det beste tilgjengelige alternativet
2. Ber agenten bekrefte anbefalingen
3. Utløser installasjon hvis det godkjennes (eller hvis auto-install er aktivert i innstillingene)

Feil under plugin discovery er ikke kritiske — orkestratoren merker de berørte trinnene som `skipped` og fortsetter med resten av planen.

### 3. Plan Execution {#3-plan-execution}

Orkestratoren kaller `execute_site_plan` med plan-ID-en. Utførelsen skjer fase for fase, trinn for trinn:

- **Step references** (`__ref:` prefiks) — trinn kan referere til utdata fra tidligere trinn. I eksempelet ovenfor blir `__ref:create_menu.menu_id` løst til `menu_id` returnert av `create_menu`-trinnet.
- **Parallel steps** — trinn innenfor samme fase som ikke har avhengigheter av hverandre, sendes ut samtidig når flagget `parallel` er satt.
- **Step timeout** — hvert trinn har en individuell tidsbegrensning (standard: `Ability Timeout`-innstillingen). Et trinn som utløper for tiden, merkes som `failed` og planen fortsetter.

### 4. Progress Tracking {#4-progress-tracking}

Kall `get_plan_progress` når som helst for å sjekke utførelsesstatus:

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

Brukere av WP-CLI kan overvåke fremdriften med:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Error Recovery {#5-error-recovery}

Når et trinn feiler, sjekker orkestratoren etter et **fallback**-trinn definert i planen:

- **Fallback available** — fallback-trinnet forsøkes umiddelbart. Hvis det lykkes, fortsetter utførelsen. Hvis det også feiler, merkes trinnet som `failed` og utførelsen fortsetter med neste trinn.
- **No fallback** — trinnet merkes som `failed`. Ikke-kritiske trinn blir hoppet over; kritiske trinn (merket `required: true`) stopper den nåværende fasen og utløser et forsøk på gjenoppretting på fasenivå.

Agenten rapporterer alle feil i den endelige planoppsummeringen og kan foreslå manuelle utbedringstrinn for uopprettelige feil.

---

## Site Plan Abilities {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Genererer en strukturert site plan fra en naturlig språkbeskrivelse av et mål.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Naturlig språkbeskrivelse av ønsket nettside |
| `style` | string | No | Visuell stilpreferanse: `minimal`, `bold`, `professional`, `playful`. Standard: agent velger basert på målet |
| `plugins` | array | No | Plugin slugs som skal inkluderes i planen. Orkestratoren legger automatisk til nødvendige plugins. |
| `dry_run` | boolean | No | Hvis `true`, returneres plan-JSON uten lagring eller utførelse. Standard `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Starter utførelsen av en tidligere generert site plan.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID-en til planen som skal utføres |
| `auto_install_plugins` | boolean | No | Hvis `true`, installeres nødvendige plugins automatisk uten bekreftelse. Standard `false` |
| `max_retries` | integer | No | Antall ganger et feilet trinn skal forsøkes før man går videre. Standard `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Returnerer gjeldende utførelsesstatus for en site plan.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan-ID å spørre om |

**Returns** progress-objektet beskrevet i [Progress Tracking](#4-progress-tracking) ovenfor.

---

### `handle_plan_error` {#handleplanerror}

Løser manuelt et feilet trinn og gjenopptar planutførelsen fra neste trinn. Bruk dette når automatisk gjenoppretting ikke var mulig, og du ønsker å gripe inn.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan-ID |
| `step_id` | string | Yes | ID-en til det feile trinnet |
| `resolution` | string | Yes | En av `skip` (hoppe over og fortsette), `retry` (prøve trinnet umiddelbart på nytt), eller `mark_done` (behandle som vellykket uten å kjøre på nytt) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Sammenligning av v1 og v2 {#comparing-v1-and-v2}

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

Genererer en site plan fra en målbeskrivelse.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Utfør en tidligere generert plan.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Viser gjeldende fremdrift for en kjørende eller fullført plan.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Lister alle site plans (ventende, i gang og fullførte).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Tilbakestiller en feilet plan til `pending` slik at den kan kjøres på nytt fra begynnelsen.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
