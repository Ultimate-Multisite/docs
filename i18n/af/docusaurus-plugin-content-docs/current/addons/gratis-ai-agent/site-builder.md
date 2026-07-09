---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orkestrasie v2 {#site-builder-orchestration-v2}

Site Builder Orkestrasie v2 (geïntroduseer in Gratis AI Agent v1.4.0) is die enigieme wat die meerstappe webwerfskepsel aandryf. Wanneer jy die agent vra om 'n "restaurantwebwerf te bou" of "'n portfolio met 'n blog te skep", breek die orkestrateur daardie hoëvlakdoel af in 'n gestruktureerde **plan**, ontdek die plugins wat nodig is om dit te vervul, voer elke stap in volgorde uit, spoor vordering by, en herstel outonoom van foute.

---

## Hoe Dit Werk {#how-it-works}

### 1. Plan Generasie {#1-plan-generation}

Wanneer die agent 'n webwerfbou-opdrag ontvang, roep dit die `create_site_plan` vermoë aan om 'n JSON **webwerfplan** te genereer. Die plan beskryf:

- **Doel** — wat die voltooide webwerf moet doen
- **Fases** — geordende groepe stappe (bv. _Opstelling_, _Inhoudsoorte_, _Ontwerp_, _Inhoud_)
- **Stappe** — individuele vermoë-aanroepe binne elke fase
- **Plugin vereistes** — plugins wat aktief moet wees vir sekere stappe om te kan loop
- **Terugvalplanne** — alternatiewe stappe indien 'n primêre stap misluk

**Voorbeeldplan (verkort)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Bou 'n restaurantwebwerf met 'n aanlyn meny, besprekingsvorm en kontakblad",
  "phases": [
    {
      "id": "setup",
      "label": "Opstelling",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Meny Item", "plural_label": "Meny Items" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Meny Afdeling", "plural_label": "Meny Afdelings", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Ontwerp",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigasie",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Hoofnavigasie", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Meny", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Bespreek 'n Tafel", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Vereis vir die besprekings- en kontakvorms" }
  ]
}
```

### 2. Plugin Ontdekking {#2-plugin-discovery}

Voordat die uitvoering begin, skaan die orkestrateur die plan se `plugin_requirements` en kyk watter plugins reeds aktief is. Vir ontbrekende plugins:

1. Soek die register via `recommend_plugin` vir die beste pasmaat
2. Vra die agent om die aanbeveling te bevestig
3. Trigger installasie indien goedgekeur (of indien outo-installasie in die instellings geaktiveer is)

Plugin ontdekkingsfoute is nie fataal nie — die orkestrateur merk die betrokke stappe as `skipped` en gaan voort met die res van die plan.

### 3. Plan Uitvoering {#3-plan-execution}

Die orkestrateur roep `execute_site_plan` met die plan-ID aan. Die uitvoering vorder fase vir fase, stap vir stap:

- **Stap verwysings** (`__ref:` voorsetsel) — stappe kan verwys na uitkomste van vorige stappe. In die voorbeeld hierbo word `__ref:create_menu.menu_id` opgelos na die `menu_id` wat deur die `create_menu` stap geretourneer word.
- **Parallelle stappe** — stappe binne dieselfde fase wat geen onderlinge afhanklikhede het nie, word gelyktydig uitgestuur wanneer die `parallel` vlag gestel word.
- **Stap tydslimiet** — elke stap het 'n individuele tydslimiet (standaard: die `Ability Timeout` instelling). 'n Stap wat tydslimiet bereik, word gemerk as `failed` en die plan gaan voort.

### 4. Voortgangsbegroting {#4-progress-tracking}

Roep `get_plan_progress` enige tyd aan om die uitvoeringsstatus te nagaan:

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

WP-CLI gebruikers kan vordering monitor met:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Foutherstel {#5-error-recovery}

Wanneer 'n stap misluk, kyk die orkestrateur na 'n **terugvalplan** wat in die plan gedefinieer is:

- **Terugvalplan beskikbaar** — die terugvalstap word onmiddellik probeer. Indien dit slaag, gaan die uitvoering voort. Indien dit ook misluk, word die stap gemerk as `failed` en die uitvoering gaan voort met die volgende stap.
- **Geen terugvalplan nie** — die stap word gemerk as `failed`. Nie-kritieke stappe word ogeslaan; kritieke stappe (gemerk as `required: true`) staak die huidige fase en trigger 'n fase-vlak herstelpoging.

Die agent rapporteer alle foute in die finale planopsomming en kan handmatige herstelstappe vir onherstelbare foute voorstel.

---

## Site Plan Vermoë {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Genereer 'n gestruktureerde webwerfplan uit 'n natuurlike taaldoelbeskrywing.

**Parameters**

| Parameter | Type | Vereis | Beskrywing |
|---|---|---|---|
| `goal` | string | Ja | Natuurlike taalbeskrywing van die gewenste webwerf |
| `style` | string | Nee | Visuele stylvoorkeur: `minimal`, `bold`, `professional`, `playful`. Standaard: agent kies op grond van die doel |
| `plugins` | array | Nee | Plugin slugs om in die plan in te sluit. Die orkestrateur voeg vereiste plugins outomaties by. |
| `dry_run` | boolean | Nee | Indien `true`, keer die plan JSON terug sonder om dit te stoor of uit te voer. Standaard `false` |

**Keer terug** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Begin met die uitvoering van 'n voorheen gegenereerde webwerfplan.

**Parameters**

| Parameter | Type | Vereis | Beskrywing |
|---|---|---|---|
| `plan_id` | string | Ja | ID van die plan wat uitgevoer moet word |
| `auto_install_plugins` | boolean | Nee | Indien `true`, installeer vereiste plugins outomaties sonder bevestiging. Standaard `false` |
| `max_retries` | integer | Nee | Aantal kere om 'n mislukte stap te probeer voordat jy voortgaan. Standaard `1` |

**Keer terug** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Keer die huidige uitvoeringsstatus van 'n webwerfplan terug.

**Parameters**

| Parameter | Type | Vereis | Beskrywing |
|---|---|---|---|
| `plan_id` | string | Ja | Plan ID om te navraag te doen |

**Keer terug** die vorderingsvoorwerp wat hierbo in [Voortgangsbegroting](#4-voortgangsbegroting) beskryf word.

---

### `handle_plan_error` {#handleplanerror}

Los 'n mislukte stap handmatig op en skakel planuitvoering vanaf die volgende stap voort. Gebruik dit wanneer outomatiese herstel nie moontlik was nie en jy wil ingryp.

**Parameters**

| Parameter | Type | Vereis | Beskrywing |
|---|---|---|---|
| `plan_id` | string | Ja | Plan ID |
| `step_id` | string | Ja | ID van die mislukte stap |
| `resolution` | string | Ja | Een van `skip` (overslaan en voortgaan), `retry` (die stap onmiddellik probeer) of `mark_done` (behandel as geslaag sonder heruitvoering) |

**Keer terug** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Vergelyking v1 en v2 {#comparing-v1-and-v2}

| Funksie | v1 | v2 |
|---|---|---|
| Meer-fase planne | Nee | Ja |
| Stapuitkomste verwysings (`__ref:`) | Nee | Ja |
| Plugin ontdekking | Handmatig | Outomaties |
| Voortgangsbegroting API | Nee | Ja |
| Foutherstel | Misluk-en-stop | Terugvalplan + voortgaan |
| Parallelle stapuitvoering | Nee | Ja (opt-in per fase) |
| WP-CLI plan kommando's | Nee | Ja |
| Benchmark integrasie | Nee | Ja (`q-restaurant-website`) |

---

## WP-CLI Plan Kommando's {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Genereer 'n webwerfplan uit 'n doelbeskrywing.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Voer 'n voorheen gegenereerde plan uit.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Toon huidige vordering vir 'n uitvoerende of voltooide plan.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Lys alle webwerfplanne (hangend, in-progress, en voltooide).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Reset 'n mislukte plan na `pending` sodat dit van die begin af heruitgevoer kan word.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
