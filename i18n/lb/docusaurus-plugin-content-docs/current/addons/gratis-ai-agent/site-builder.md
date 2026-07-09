---
title: Säite-Builder-Orchestratioun v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestratioun v2

Site Builder Orchestratioun v2 (agefouert am Gratis AI Agent v1.4.0) ass d'Engine, déi d'Erstelle vu Websäiten a méi Schrëtt udréit. Wann Dir den Agent freet, eng "Restaurant-Websäit ze bauen" oder "e Portfolio mat engem Blog ze erstellen", deelt den Orchestrator dat iwwergeuerdent Zil an e strukturéierte **Plang** op, fënnt déi Plugins, déi néideg sinn, fir en ëmzesetzen, féiert all Schrëtt der Rei no aus, verfollegt de Fortschrëtt a recuperéiert autonom vu Feeler.

---

## Wéi Et Funktionéiert

### 1. Planggeneréierung

Wann den Agent eng Uweisung kritt, fir eng Websäit ze bauen, rifft en d'`create_site_plan`-Fäegkeet op, fir e JSON-**Site-Plang** ze produzéieren. De Plang beschreift:

- **Zil** — wat déi fäerdeg Websäit maache soll
- **Phasen** — geuerdent Gruppe vu Schrëtt (z. B. _Ariichtung_, _Inhaltstypen_, _Design_, _Inhalt_)
- **Schrëtt** — eenzel Fäegkeetsopriff bannent all Phas
- **Plugin-Ufuerderungen** — Plugins, déi aktiv musse sinn, fir datt verschidde Schrëtt lafe kënnen
- **Fallbacks** — alternativ Schrëtt, wann e primäre Schrëtt feelgeschléit

**Beispillplang (verkierzt)**

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

### 2. Plugin-Entdeckung

Ier d'Ausféierung ufänkt, scannt den Orchestrator d'`plugin_requirements` vum Plang a kontrolléiert, wéi eng Plugins schonn aktiv sinn. Fir feelend Plugins mécht en Folgendes:

1. Sicht am Registry iwwer `recommend_plugin` no der beschter Iwwereenstëmmung
2. Freet den Agent, d'Empfeelung ze bestätegen
3. Léist d'Installatioun aus, wann se guttgeheescht gëtt (oder wann automatesch Installatioun an den Astellungen aktivéiert ass)

Feeler bei der Plugin-Entdeckung si net fatal — den Orchestrator markéiert déi betraffe Schrëtt als `skipped` a fiert mam Rescht vum Plang weider.

### 3. Plangausféierung

Den Orchestrator rifft `execute_site_plan` mat der Plang-ID op. D'Ausféierung leeft Phas fir Phas, Schrëtt fir Schrëtt:

- **Schrëttreferenzen** (`__ref:`-Prefix) — Schrëtt kënnen op Ausgaben aus virdrunne Schrëtt referenzéieren. Am Beispill hei uewen gëtt `__ref:create_menu.menu_id` op d'`menu_id` opgeléist, déi vum `create_menu`-Schrëtt zeréckginn ass.
- **Parallel Schrëtt** — Schrëtt bannent derselwechter Phas, déi keng géigesäiteg Ofhängegkeeten hunn, ginn gläichzäiteg dispatchéiert, wann de `parallel`-Fändel gesat ass.
- **Schrëtt-Timeout** — all Schrëtt huet en individuellen Timeout (Standard: d'`Ability Timeout`-Astellung). E Schrëtt, deen duerch Timeout ofleeft, gëtt als `failed` markéiert an de Plang fiert weider.

### 4. Fortschrëttsverfollegung

Rufft `get_plan_progress` zu all Moment op, fir den Ausféierungsstatus ze kontrolléieren:

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

WP-CLI-Benotzer kënnen de Fortschrëtt iwwerwaache mat:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Feelerrecuperatioun

Wann e Schrëtt feelgeschléit, kontrolléiert den Orchestrator, ob e **Fallback**-Schrëtt am Plang definéiert ass:

- **Fallback verfügbar** — de Fallback-Schrëtt gëtt direkt probéiert. Wann en erfollegräich ass, geet d'Ausféierung weider. Wann en och feelgeschléit, gëtt de Schrëtt als `failed` markéiert an d'Ausféierung geet mam nächste Schrëtt weider.
- **Kee Fallback** — de Schrëtt gëtt als `failed` markéiert. Net-kritesch Schrëtt ginn iwwersprongen; kritesch Schrëtt (markéiert als `required: true`) halen déi aktuell Phas un a léisen e Recuperatiounsversuch um Phasenniveau aus.

Den Agent mellt all Feeler an der leschter Plang-Zesummefaassung a kann manuell Schrëtt fir d'Beuechtung vu Feeler virschloen, déi net automatesch behuewe kënne ginn.

---

## Site-Plang-Fäegkeeten

### `create_site_plan`

Generéiert e strukturéierte Site-Plang aus enger Zilbeschreiwung an natierlecher Sprooch.

**Parameteren**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Beschreiwung vun der gewënschter Websäit an natierlecher Sprooch |
| `style` | string | No | Visuell Stilpreferenz: `minimal`, `bold`, `professional`, `playful`. Standard: den Agent wielt op Basis vum Zil |
| `plugins` | array | No | Plugin-Slugs, déi an de Plang opgeholl solle ginn. Den Orchestrator füügt erfuerderlech Plugins automatesch derbäi. |
| `dry_run` | boolean | No | Wann `true`, gëtt de Plang-JSON zeréckginn, ouni en ze späicheren oder auszeféieren. Standard `false` |

**Gëtt zeréck** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Fänkt un, e virdru generéierte Site-Plang auszeféieren.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `plan_id` | string | Jo | ID vum Plang, deen ausgefouert soll ginn |
| `auto_install_plugins` | boolean | Nee | Wann `true`, ginn erfuerderlech plugins automatesch ouni Confirmatioun installéiert. Standard `false` |
| `max_retries` | integer | Nee | Unzuel u Mol, déi e feelgeschloene Schrëtt nach eng Kéier probéiert gëtt, ier et weidergeet. Standard `1` |

**Gëtt zeréck** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Gëtt den aktuelle Ausféierungsstatus vun engem Site-Plang zeréck.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `plan_id` | string | Jo | Plang-ID fir ofzefroen |

**Gëtt zeréck** de Fortschrëttsobjet, deen uewen an [Fortschrëttsverfolgung](#4-progress-tracking) beschriwwe gëtt.

---

### `handle_plan_error`

Léist e feelgeschloene Schrëtt manuell a setzt d'Ausféierung vum Plang beim nächste Schrëtt fort. Benotzt dat, wann eng automatesch Erhuelung net méiglech war an Dir wëllt agräifen.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `plan_id` | string | Jo | Plang-ID |
| `step_id` | string | Jo | ID vum feelgeschloene Schrëtt |
| `resolution` | string | Jo | Ee vun `skip` (iwwersprangen a weiderfueren), `retry` (de Schrëtt direkt nach eng Kéier probéieren) oder `mark_done` (als erfollegräich behandelen ouni nei auszeféieren) |

**Gëtt zeréck** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Verglach vu v1 a v2

| Funktioun | v1 | v2 |
|---|---|---|
| Pläng mat méi Phasen | Nee | Jo |
| Referenze op Schrëtt-Ausgaben (`__ref:`) | Nee | Jo |
| Plugin-Entdeckung | Manuell | Automatesch |
| API fir Fortschrëttsverfolgung | Nee | Jo |
| Feeler-Erhuelung | Feelgeschloen-a-stoppen | Fallback + weiderfueren |
| Parallel Ausféierung vu Schrëtt | Nee | Jo (opt-in pro Phas) |
| WP-CLI Plang-Befehler | Nee | Jo |
| Benchmark-Integratioun | Nee | Jo (`q-restaurant-website`) |

---

## WP-CLI Plang-Befehler

### `wp gratis-ai-agent plan create`

Generéiert e Site-Plang aus enger Zilbeschreiwung.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Féiert e virdru generéierte Plang aus.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Weist den aktuelle Fortschrëtt fir e Plang, deen ausgefouert gëtt oder ofgeschloss ass.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Lëscht all Site-Pläng op (waardend, amgaang an ofgeschloss).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Setzt e feelgeschloene Plang op `pending` zeréck, fir datt en nach eng Kéier vun Ufank un ausgefouert ka ginn.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
