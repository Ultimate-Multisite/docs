---
title: Orchestrace webového konstruktora v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orchestrace Site Builder v2

Site Builder Orchestration v2 (zavedeno v Gratis AI Agent v1.4.0) je motor, který pohání vytváření webových stránek v mnoha krocích. Když požádáte agenta, aby „vytvořil web restaurace“ nebo „vytvořil portfolio s blogem“, orchestrátor rozloží tento vysokoúrovňový cíl na strukturovaný **plán**, zjistí potřebné pluginy pro jeho splnění, provede každý krok postupně, sleduje pokrok a autonomně se zkopne z chyb.

---

## Jak to funguje {#how-it-works}

### 1. Generování plánu {#1-plan-generation}

Když agent obdrží instrukci k vytváření webu, zavolá schopnost `create_site_plan` a vytvoří JSON **plán webu**. Plán popisuje:

- **Cíl** — co by dokončený web měl dělat
- **Fáze** — sekvenční skupiny kroků (např. _Nastavení_, _Typy obsahu_, _Design_, _Obsah_)
- **Kroky** — jednotlivé volání schopností v rámci každé fáze
- **Požadavky na pluginy** — pluginy, které musí být aktivní, aby mohly běžet určité kroky
- **Fallbacky** — alternativní kroky, pokud selže primární krok

**Příklad plánu (zkráceno)**

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

### 2. Objevování pluginů {#2-plugin-discovery}

Než začne provedení, orchestrátor skenuje `plugin_requirements` plánu a kontroluje, které pluginy jsou již aktivní. Pokud chybí pluginy, provede následující kroky:

1. Vyhledá v registru pomocí `recommend_plugin` nejlepší shodu
2. Požádá agenta o potvrzení doporučení
3. Spustí instalaci, pokud je to schváleno (nebo pokud je v nastavení povolena automatická instalace)

Selhání při objevování pluginů není kritické — orchestrátor označí ovlivněné kroky jako `skipped` (přeskočeno) a pokračuje s ostatními kroky plánu.

### 3. Provedení plánu {#3-plan-execution}

Orchestrátor zavolá `execute_site_plan` s ID plánu. Provedení probíhá fáze po fázi, krok po kroku:

- **Odkazy na kroky** (`__ref:` prefix) — kroky mohou odkazovat na výstupy z předchozích kroků. V výše uvedeném příkladu je `__ref:create_menu.menu_id` vyřešeno na `menu_id` vrácené krokem `create_menu`.
- **Paralelní kroky** — kroky v rámci stejné fáze, které nemají vzájemné závislosti, jsou spuštěny souběžně, když je nastaveno přepnutí `parallel`.
- **Časový limit kroku** — každý krok má individuální časový limit (výchozí: nastavení `Ability Timeout`). Krok, který vyprší, je označen jako `failed` (selhání) a plán pokračuje.

### 4. Sledování pokroku {#4-progress-tracking}

Volání `get_plan_progress` kdykoli zkontroluje stav provedení:

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

Uživatelé WP-CLI mohou sledovat pokrok pomocí:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Zotavení chyb {#5-error-recovery}

Pokud selže krok, orchestrátor zkontroluje, zda v plánu existuje **fallback** krok:

- **Fallback je k dispozici** — pokusí se o fallback krok ihned. Pokud uspěje, provedení pokračuje. Pokud selže i on, krok je označen jako `failed` a provedení pokračuje dalším krokem.
- **Žádný fallback** — krok je označen jako `failed`. Nekritické kroky jsou přeskočeny; kritické kroky (označeny jako `required: true`) zastaví aktuální fázi a spustí pokus o zotavení na úrovni fáze.

Agent reportuje všechny selhání v konečném souhrnu plánu a může navrhnout manuální kroky k nápravě pro neobnovitelné chyby.

---

## Schopnosti plánu webu (Site Plan Abilities) {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Generuje strukturovaný plán webu z popisu cíle v přirozeném jazyce.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Popis cíle webu v přirozeném jazyce |
| `style` | string | No | Preferovaný vizuální styl: `minimal`, `bold`, `professional`, `playful`. Výchozí: agent zvolí na základě cíle |
| `plugins` | array | No | Slugs pluginů, které mají být zahrnuty do plánu. Orchestrátor automaticky přidá požadované pluginy. |
| `dry_run` | boolean | No | Pokud je `true`, vrátí JSON plán bez ukládání nebo provedení. Výchozí `false` |

**Vrací** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Začne provedení předem vygenerovaného plánu webu.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID plánu k provedení |
| `auto_install_plugins` | boolean | No | Pokud je `true`, automaticky nainstaluje požadované pluginy bez potvrzení. Výchozí `false` |
| `max_retries` | integer | No | Počet pokusů na selžený krok před pokračováním. Výchozí `1` |

**Vrací** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Vrací aktuální stav provedení plánu webu.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID plánu, který se dotazuje |

**Vrací** objekt pokroku popsaný v sekci [Sledování pokroku](#4-progress-tracking) výše.

---

### `handle_plan_error` {#handleplanerror}

Manuálně vyřeší selžený krok a obnoví provedení plánu od dalšího kroku. Použijte to, když automatické zotavení nebylé možné a chcete zasáhnout.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID plánu |
| `step_id` | string | Yes | ID selženého kroku |
| `resolution` | string | Yes | Jeden z následujících: `skip` (přeskočit a pokračovat), `retry` (okamžitě zkusit krok znovu) nebo `mark_done` (zacházet jako úspěšné bez opakování) |

**Vrací** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Porovnání v1 a v2 {#comparing-v1-and-v2}

| Funkce | v1 | v2 |
|---|---|---|
| Plány v mnoha fázích | Ne | Ano |
| Odkazy na výstupy kroků (`__ref:`) | Ne | Ano |
| Objevování pluginů | Ruční | Automatické |
| API pro sledování pokroku | Ne | Ano |
| Zotavení chyb | Selhání a zastavení | Fallback + pokračování |
| Paralelní provedení kroků | Ne | Ano (volitelné na fázi) |
| Příkazy plánu WP-CLI | Ne | Ano |
| Integrace benchmarků | Ne | Ano (`q-restaurant-website`) |

---

## Příkazy plánu WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Generuje plán webu z popisu cíle.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Spustí provedení předem vygenerovaného plánu.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Zobrazí aktuální pokrok pro spouštěný nebo dokončený plán.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Seznam všech plánů webu (outnímající, v průběhu a dokončené).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Resetuje selžený plán na stav `pending`, aby jej bylo možné znovu spustit od začátku.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
