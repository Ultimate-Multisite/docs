---
title: Orchestrácia tvorcu stránok v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orchestrácia tvorby stránok v2

Orchestrácia tvorby stránok v2 (uvedená v Gratis AI Agent v1.4.0) je engine, ktorý poháňa viac-krokovú tvorbu webových stránok. Keď požiadate agenta, aby „vytvoril webovú stránku reštaurácie“ alebo „vytvoril portfólio s blogom“, orchestrator rozdelí tento vysokoúrovňový cieľ na štruktúrovaný **plán**, zistí pluginy potrebné na jeho splnenie, vykoná každý krok v poradí, sleduje priebeh a autonómne sa zotaví z chýb.

---

## Ako to funguje {#how-it-works}

### 1. Generovanie plánu {#1-plan-generation}

Keď agent dostane pokyn na tvorbu stránky, zavolá schopnosť `create_site_plan`, aby vytvoril JSON **plán stránky**. Plán opisuje:

- **Cieľ** — čo má hotová stránka robiť
- **Fázy** — zoradené skupiny krokov (napr. _Nastavenie_, _Typy obsahu_, _Dizajn_, _Obsah_)
- **Kroky** — jednotlivé volania schopností v rámci každej fázy
- **Požiadavky na pluginy** — pluginy, ktoré musia byť aktívne, aby sa mohli spustiť určité kroky
- **Záložné postupy** — alternatívne kroky, ak primárny krok zlyhá

**Príklad plánu (skrátený)**

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

### 2. Vyhľadanie pluginov {#2-plugin-discovery}

Pred začiatkom vykonávania orchestrator prehľadá `plugin_requirements` v pláne a skontroluje, ktoré pluginy sú už aktívne. Pri chýbajúcich pluginoch:

1. Vyhľadá v registri cez `recommend_plugin` najlepšiu zhodu
2. Požiada agenta o potvrdenie odporúčania
3. Spustí inštaláciu, ak je schválená (alebo ak je v nastaveniach povolená automatická inštalácia)

Zlyhania pri vyhľadávaní pluginov nie sú fatálne — orchestrator označí dotknuté kroky ako `skipped` a pokračuje so zvyškom plánu.

### 3. Vykonanie plánu {#3-plan-execution}

Orchestrator zavolá `execute_site_plan` s ID plánu. Vykonávanie pokračuje po fázach, krok za krokom:

- **Referencie krokov** (prefix `__ref:`) — kroky môžu odkazovať na výstupy z predchádzajúcich krokov. V príklade vyššie sa `__ref:create_menu.menu_id` vyhodnotí ako `menu_id` vrátené krokom `create_menu`.
- **Paralelné kroky** — kroky v rámci rovnakej fázy, ktoré nemajú vzájomné závislosti, sa pri nastavení príznaku `parallel` odosielajú súbežne.
- **Časový limit kroku** — každý krok má individuálny časový limit (predvolene: nastavenie `Ability Timeout`). Krok, ktorému vyprší čas, sa označí ako `failed` a plán pokračuje.

### 4. Sledovanie priebehu {#4-progress-tracking}

Kedykoľvek zavolajte `get_plan_progress`, aby ste skontrolovali stav vykonávania:

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

Používatelia WP-CLI môžu sledovať priebeh pomocou:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Zotavenie z chýb {#5-error-recovery}

Keď krok zlyhá, orchestrator skontroluje, či je v pláne definovaný **záložný** krok:

- **Záložný postup dostupný** — záložný krok sa vyskúša okamžite. Ak uspeje, vykonávanie pokračuje. Ak zlyhá aj on, krok sa označí ako `failed` a vykonávanie pokračuje ďalším krokom.
- **Bez záložného postupu** — krok sa označí ako `failed`. Nekritické kroky sa preskočia; kritické kroky (označené `required: true`) zastavia aktuálnu fázu a spustia pokus o zotavenie na úrovni fázy.

Agent nahlási všetky zlyhania v záverečnom súhrne plánu a môže navrhnúť manuálne kroky nápravy pri neobnoviteľných chybách.

---

## Schopnosti plánu stránky {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Generuje štruktúrovaný plán stránky z opisu cieľa v prirodzenom jazyku.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Opis požadovanej webovej stránky v prirodzenom jazyku |
| `style` | string | No | Preferencia vizuálneho štýlu: `minimal`, `bold`, `professional`, `playful`. Predvolene: agent vyberie podľa cieľa |
| `plugins` | array | No | Slugy pluginov, ktoré sa majú zahrnúť do plánu. Orchestrator automaticky pridá požadované pluginy. |
| `dry_run` | boolean | No | Ak je `true`, vráti JSON plánu bez jeho uloženia alebo vykonania. Predvolene `false` |

**Vracia** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Začne vykonávať predtým vygenerovaný plán stránky.

**Parametre**

| Parameter | Typ | Povinné | Popis |
|---|---|---|---|
| `plan_id` | string | Áno | ID plánu na vykonanie |
| `auto_install_plugins` | boolean | Nie | Ak je `true`, automaticky nainštaluje požadované pluginy bez potvrdenia. Predvolené `false` |
| `max_retries` | integer | Nie | Počet opakovaní neúspešného kroku pred pokračovaním ďalej. Predvolené `1` |

**Vracia** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Vracia aktuálny stav vykonávania plánu stránky.

**Parametre**

| Parameter | Typ | Povinné | Popis |
|---|---|---|---|
| `plan_id` | string | Áno | ID plánu na dotazovanie |

**Vracia** objekt priebehu opísaný vyššie v časti [Sledovanie priebehu](#4-progress-tracking).

---

### `handle_plan_error` {#handleplanerror}

Manuálne vyrieši neúspešný krok a obnoví vykonávanie plánu od nasledujúceho kroku. Použite to, keď automatické obnovenie nebolo možné a chcete zasiahnuť.

**Parametre**

| Parameter | Typ | Povinné | Popis |
|---|---|---|---|
| `plan_id` | string | Áno | ID plánu |
| `step_id` | string | Áno | ID neúspešného kroku |
| `resolution` | string | Áno | Jedna z možností `skip` (preskočiť a pokračovať), `retry` (okamžite zopakovať krok) alebo `mark_done` (považovať za úspešné bez opätovného spustenia) |

**Vracia** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Porovnanie v1 a v2 {#comparing-v1-and-v2}

| Funkcia | v1 | v2 |
|---|---|---|
| Viacfázové plány | Nie | Áno |
| Referencie na výstup kroku (`__ref:`) | Nie | Áno |
| Vyhľadávanie pluginov | Manuálne | Automatické |
| API na sledovanie priebehu | Nie | Áno |
| Obnovenie po chybe | Zlyhanie a zastavenie | Záložné riešenie + pokračovanie |
| Paralelné vykonávanie krokov | Nie | Áno (voliteľné pre každú fázu) |
| Príkazy plánu WP-CLI | Nie | Áno |
| Integrácia benchmarku | Nie | Áno (`q-restaurant-website`) |

---

## Príkazy plánu WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Generuje plán stránky z opisu cieľa.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Vykoná predtým vygenerovaný plán.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Zobrazí aktuálny priebeh pre vykonávaný alebo dokončený plán.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Vypíše všetky plány stránok (čakajúce, prebiehajúce a dokončené).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Resetuje neúspešný plán na `pending`, aby ho bolo možné znova vykonať od začiatku.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
