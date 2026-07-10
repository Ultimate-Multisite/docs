---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestratie v2 {#site-builder-orchestration-v2}

Site Builder Orchestratie v2 (geïntroduceerd in Gratis AI Agent v1.4.0) is de motor die multi-step websitecreatie aandrijft. Wanneer u de agent vraagt om bijvoorbeeld "een restaurantwebsite te bouwen" of "een portfolio met een blog te creëren", breekt de orkestrator dat hoogwaardige doel op in een gestructureerd **plan**, ontdekt de benodigde plugins om dit te realiseren, voert elke stap in volgorde uit, houdt de voortgang bij en herstelt autonoom van fouten.

---

## Hoe Het Werkt {#how-it-works}

### 1. Plan Generatie {#1-plan-generation}

Wanneer de agent een instructie voor het bouwen van een website ontvangt, roept deze de `create_site_plan` functionaliteit aan om een JSON **site plan** te produceren. Het plan beschrijft:

- **Goal** — wat de afgeronde site moet doen
- **Phases** — geordende groepen stappen (bijv. _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — individuele functionaliteit-aanroepen binnen elke fase
- **Plugin requirements** — plugins die actief moeten zijn om bepaalde stappen uit te voeren
- **Fallbacks** — alternatieve stappen als een primaire stap mislukt

**Voorbeeldplan (verkort)**

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

Voordat de uitvoering begint, scant de orkestrator de `plugin_requirements` van het plan en controleert welke plugins al actief zijn. Voor ontbrekende plugins:

1. Zoekt het in het register via `recommend_plugin` naar de beste match
2. Vraagt de agent om de aanbeveling te bevestigen
3. Start de installatie als dit wordt goedgekeurd (of als auto-installatie is ingeschakeld in de instellingen)

Mislukkingen bij het ontdekken van plugins zijn niet fataal — de orkestrator markeert de getroffen stappen als `skipped` en gaat verder met de rest van het plan.

### 3. Plan Uitvoering {#3-plan-execution}

De orkestrator roept `execute_site_plan` aan met de plan ID. De uitvoering verloopt fase voor fase, stap voor stap:

- **Step references** (`__ref:` prefix) — stappen kunnen verwijzen naar de output van eerdere stappen. In het bovenstaande voorbeeld wordt `__ref:create_menu.menu_id` opgelost naar de `menu_id` die door de `create_menu` stap wordt geretourneerd.
- **Parallel steps** — stappen binnen dezelfde fase die geen onderlinge afhankelijkheden hebben, worden gelijktijdig uitgevoerd wanneer de vlag `parallel` is ingesteld.
- **Step timeout** — elke stap heeft een individuele timeout (standaard: de `Ability Timeout` instelling). Een stap die time-out gaat, wordt gemarkeerd als `failed` en het plan gaat verder.

### 4. Voortgangsregistratie {#4-progress-tracking}

Roep `get_plan_progress` op elk moment om de uitvoeringsstatus te controleren:

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

WP-CLI gebruikers kunnen de voortgang monitoren met:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Foutopsporing (Error Recovery) {#5-error-recovery}

Als een stap mislukt, controleert de orkestrator op een **fallback** stap die in het plan is gedefinieerd:

- **Fallback beschikbaar** — de fallback stap wordt onmiddellijk geprobeerd. Als deze slaagt, gaat de uitvoering door. Als deze ook mislukt, wordt de stap gemarkeerd als `failed` en gaat de uitvoering door naar de volgende stap.
- **Geen fallback** — de stap wordt gemarkeerd als `failed`. Niet-kritieke stappen worden overgeslagen; kritieke stappen (gemarkeerd als `required: true`) stoppen de huidige fase en starten een herstelpoging op niveau van de fase.

De agent rapporteert alle fouten in de uiteindelijke plan samenvatting en kan suggesties doen voor handmatige herstelstappen bij onherstelbare fouten.

---

## Site Plan Abilities {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Genereert een gestructureerd site plan op basis van een natuurlijke taal beschrijving van een doel.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Natuurlijke taal beschrijving van de gewenste website |
| `style` | string | No | Visuele stijlvoorkeur: `minimal`, `bold`, `professional`, `playful`. Standaard: de agent kiest op basis van het doel |
| `plugins` | array | No | Plugin slugs om op te nemen in het plan. De orkestrator voegt automatisch de vereiste plugins toe. |
| `dry_run` | boolean | No | Als `true`, retourneert het het plan JSON zonder het op te slaan of uit te voeren. Standaard `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Start met de uitvoering van een eerder gegenereerd site plan.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID van het plan dat uitgevoerd moet worden |
| `auto_install_plugins` | boolean | No | Als `true`, installeert het automatisch de vereiste plugins zonder bevestiging. Standaard `false` |
| `max_retries` | integer | No | Aantal keer proberen om een mislukte stap opnieuw uit te voeren voordat verder wordt gegaan. Standaard `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Retourneert de huidige uitvoeringsstatus van een site plan.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID om te raadplegen |

**Returns** het progress object beschreven in [Voortgangsregistratie](#4-voortgangsregistratie) hierboven.

---

### `handle_plan_error` {#handleplanerror}

Lost een mislukte stap handmatig op en hervat de planuitvoering vanaf de volgende stap. Gebruik dit wanneer automatisch herstel niet mogelijk was en u wilt ingrijpen.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID |
| `step_id` | string | Yes | ID van de mislukte stap |
| `resolution` | string | Yes | Een van `skip` (overslaan en doorgaan), `retry` (de stap onmiddellijk opnieuw proberen), of `mark_done` (behandelen als geslaagd zonder opnieuw uit te voeren) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Vergelijking v1 en v2 {#comparing-v1-and-v2}

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans | Nee | Ja |
| Step output references (`__ref:`) | Nee | Ja |
| Plugin discovery | Handmatig | Automatisch |
| Progress tracking API | Nee | Ja |
| Error recovery | Misluk en stop | Fallback + doorgaan |
| Parallel step execution | Nee | Ja (opt-in per fase) |
| WP-CLI plan commands | Nee | Ja |
| Benchmark integration | Nee | Ja (`q-restaurant-website`) |

---

## WP-CLI Plan Commando's {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Genereert een site plan op basis van een doelbeschrijving.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Voert een eerder gegenereerd plan uit.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Toont de huidige voortgang van een uitvoerend of voltooid plan.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Lijst alle site plans (wachtend, in uitvoering en voltooid).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Reset een mislukt plan naar `pending` zodat het opnieuw uitgevoerd kan worden vanaf het begin.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
