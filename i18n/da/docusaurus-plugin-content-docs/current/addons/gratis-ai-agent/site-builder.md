---
title: Webstedsbygger-orkestrering v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (introduceret i Gratis AI Agent v1.4.0) er motoren, der driver oprettelse af websites i flere trin. Når du beder agenten om at "bygge et restaurant-website" eller "oprette en portefølje med en blog", opdeler orkestratoren det overordnede mål i en struktureret **plan**, finder de plugins, der er nødvendige for at opfylde det, udfører hvert trin i rækkefølge, sporer fremskridt og gendanner autonomt efter fejl.

---

## Sådan fungerer det {#how-it-works}

### 1. Plangenerering {#1-plan-generation}

Når agenten modtager en instruktion om at bygge et site, kalder den `create_site_plan`-evnen for at producere en JSON-**site-plan**. Planen beskriver:

- **Mål** — hvad det færdige site skal gøre
- **Faser** — ordnede grupper af trin (f.eks. _Opsætning_, _Indholdstyper_, _Design_, _Indhold_)
- **Trin** — individuelle evnekald inden for hver fase
- **Plugin-krav** — plugins, der skal være aktive, for at visse trin kan køre
- **Fallbacks** — alternative trin, hvis et primært trin mislykkes

**Eksempelplan (forkortet)**

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

### 2. Plugin-opdagelse {#2-plugin-discovery}

Før udførelsen begynder, scanner orkestratoren planens `plugin_requirements` og kontrollerer, hvilke plugins der allerede er aktive. For manglende plugins:

1. Søger den i registreringsdatabasen via `recommend_plugin` efter det bedste match
2. Beder den agenten om at bekræfte anbefalingen
3. Udløser den installation, hvis den godkendes (eller hvis automatisk installation er aktiveret i indstillingerne)

Fejl ved plugin-opdagelse er ikke-fatale — orkestratoren markerer de berørte trin som `skipped` og fortsætter med resten af planen.

### 3. Planudførelse {#3-plan-execution}

Orkestratoren kalder `execute_site_plan` med plan-id'et. Udførelsen fortsætter fase for fase, trin for trin:

- **Trinreferencer** (`__ref:`-præfiks) — trin kan referere til output fra tidligere trin. I eksemplet ovenfor løses `__ref:create_menu.menu_id` til det `menu_id`, der returneres af `create_menu`-trinnet.
- **Parallelle trin** — trin inden for samme fase, der ikke har indbyrdes afhængigheder, afsendes samtidigt, når `parallel`-flaget er sat.
- **Tidsgrænse for trin** — hvert trin har en individuel tidsgrænse (standard: indstillingen `Ability Timeout`). Et trin, der overskrider tidsgrænsen, markeres som `failed`, og planen fortsætter.

### 4. Fremskridtssporing {#4-progress-tracking}

Kald `get_plan_progress` når som helst for at kontrollere udførelsesstatus:

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

WP-CLI-brugere kan overvåge fremskridt med:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Fejlgendannelse {#5-error-recovery}

Når et trin mislykkes, kontrollerer orkestratoren, om der er defineret et **fallback**-trin i planen:

- **Fallback tilgængelig** — fallback-trinnet forsøges straks. Hvis det lykkes, fortsætter udførelsen. Hvis det også mislykkes, markeres trinnet som `failed`, og udførelsen fortsætter med næste trin.
- **Ingen fallback** — trinnet markeres som `failed`. Ikke-kritiske trin springes over; kritiske trin (markeret `required: true`) stopper den aktuelle fase og udløser et gendannelsesforsøg på faseniveau.

Agenten rapporterer alle fejl i den endelige planoversigt og kan foreslå manuelle afhjælpningstrin for fejl, der ikke kan gendannes fra.

---

## Site-plan-evner {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Genererer en struktureret site-plan ud fra en målbeskrivelse i naturligt sprog.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Beskrivelse i naturligt sprog af det ønskede website |
| `style` | string | No | Visuel stilpræference: `minimal`, `bold`, `professional`, `playful`. Standard: agenten vælger baseret på målet |
| `plugins` | array | No | Plugin-slugs, der skal medtages i planen. Orkestratoren tilføjer automatisk påkrævede plugins. |
| `dry_run` | boolean | No | Hvis `true`, returneres planens JSON uden at gemme eller udføre den. Standard `false` |

**Returnerer** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Begynder at udføre en tidligere genereret site-plan.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `plan_id` | string | Ja | ID for planen, der skal udføres |
| `auto_install_plugins` | boolean | Nej | Hvis `true`, installeres påkrævede plugins automatisk uden bekræftelse. Standard `false` |
| `max_retries` | integer | Nej | Antal gange et mislykket trin skal forsøges igen, før der fortsættes. Standard `1` |

**Returnerer** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Returnerer den aktuelle udførelsesstatus for en webstedsplan.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `plan_id` | string | Ja | Plan-ID, der skal forespørges |

**Returnerer** fremdriftsobjektet beskrevet i [Fremdriftssporing](#4-progress-tracking) ovenfor.

---

### `handle_plan_error` {#handleplanerror}

Løser manuelt et mislykket trin og genoptager planudførelsen fra næste trin. Brug dette, når automatisk gendannelse ikke var mulig, og du vil gribe ind.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `plan_id` | string | Ja | Plan-ID |
| `step_id` | string | Ja | ID for det mislykkede trin |
| `resolution` | string | Ja | En af `skip` (spring over og fortsæt), `retry` (prøv trinnet igen med det samme) eller `mark_done` (behandl som gennemført uden at køre igen) |

**Returnerer** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Sammenligning af v1 og v2 {#comparing-v1-and-v2}

| Funktion | v1 | v2 |
|---|---|---|
| Flerfasede planer | Nej | Ja |
| Referencer til trinoutput (`__ref:`) | Nej | Ja |
| Plugin-registrering | Manuel | Automatisk |
| API til fremdriftssporing | Nej | Ja |
| Fejlgendannelse | Fejl og stop | Fallback + fortsæt |
| Parallel trinudførelse | Nej | Ja (tilvalg pr. fase) |
| WP-CLI-plankommandoer | Nej | Ja |
| Benchmark-integration | Nej | Ja (`q-restaurant-website`) |

---

## WP-CLI-plankommandoer {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Genererer en webstedsplan ud fra en målbeskrivelse.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Udfører en tidligere genereret plan.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Viser aktuel fremdrift for en plan, der udføres eller er fuldført.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Viser alle webstedsplaner (afventende, i gang og fuldførte).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Nulstiller en mislykket plan til `pending`, så den kan udføres igen fra begyndelsen.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
