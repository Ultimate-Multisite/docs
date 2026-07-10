---
title: Saýt Gurnaýjy sazlaşdyrmasy v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (Gratis AI Agent v1.4.0-de girizildi) köp basgançakly websaýt döretmegi herekete getirýän hereketlendirijidir. Siz agentden "restoran websaýtyny gurmagy" ýa-da "blogly portfolio döretmegi" soranyňyzda, orkestrator şol ýokary derejeli maksady gurluşly **plana** bölýär, ony ýerine ýetirmek üçin gerek plugin-leri tapýar, her ädimi yzygiderli ýerine ýetirýär, ösüşi yzarlaýar we ýalňyşlyklardan özbaşdak dikeldilýär.

---

## Ol nähili işleýär {#how-it-works}

### 1. Plan döretmek {#1-plan-generation}

Agent site gurmak boýunça görkezme alanda, JSON **site planyny** öndürmek üçin `create_site_plan` ukybyny çagyrýar. Plan şulary beýan edýär:

- **Maksat** — tamamlanan site näme etmeli
- **Fazalar** — ädimleriň tertiplenen toparlary (meselem, _Gurnama_, _Mazmun görnüşleri_, _Dizaýn_, _Mazmun_)
- **Ädimler** — her fazanyň içindäki aýratyn ukyp çagyryşlary
- **Plugin talaplary** — belli ädimleriň işlemegi üçin işjeň bolmaly plugin-ler
- **Ätiýaç çözgütler** — esasy ädim şowsuz bolsa alternatiw ädimler

**Mysal plan (gysgaldylan)**

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

### 2. Plugin tapmak {#2-plugin-discovery}

Ýerine ýetiriş başlamazdan öň, orkestrator planyň `plugin_requirements` sanawyny barlaýar we haýsy plugin-leriň eýýäm işjeňdigini anyklaýar. Ýetmeýän plugin-ler üçin ol:

1. Iň laýyk gabat gelmäni tapmak üçin `recommend_plugin` arkaly reýestrde gözleýär
2. Maslahaty tassyklamak üçin agentden sorar
3. Tassyklansa (ýa-da sazlamalarda awtomatik gurnama işledilen bolsa) gurnamany başladýar

Plugin tapmakdaky şowsuzlyklar ölümcil däl — orkestrator täsir eden ädimleri `skipped` diýip belleýär we planyň galan bölegi bilen dowam edýär.

### 3. Plany ýerine ýetirmek {#3-plan-execution}

Orkestrator plan ID-si bilen `execute_site_plan` çagyrýar. Ýerine ýetiriş faza-faza, ädim-ädim dowam edýär:

- **Ädim salgylanmalary** (`__ref:` prefiksi) — ädimler öňki ädimleriň netijelerine salgylanyp biler. Ýokardaky mysalda, `__ref:create_menu.menu_id` `create_menu` ädimi tarapyndan gaýtarylan `menu_id` bahasyna çözülýär.
- **Parallel ädimler** — şol bir fazanyň içinde özara baglylygy bolmadyk ädimler `parallel` baýdagy goýlanda bir wagtda iberilýär.
- **Ädim timeout-y** — her ädimiň aýratyn timeout-y bar (deslapky: `Ability Timeout` sazlamasy). Wagty geçen ädim `failed` diýip bellenýär we plan dowam edýär.

### 4. Ösüşi yzarlamak {#4-progress-tracking}

Ýerine ýetiriş ýagdaýyny barlamak üçin islendik wagt `get_plan_progress` çagyryň:

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

WP-CLI ulanyjylary ösüşi şu bilen gözegçilik edip biler:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Ýalňyşlykdan dikeldilmek {#5-error-recovery}

Bir ädim şowsuz bolanda, orkestrator planda kesgitlenen **ätiýaç çözgüt** ädiminiň bardygyny barlaýar:

- **Ätiýaç çözgüt bar** — ätiýaç ädim derrew synalýar. Üstünlikli bolsa, ýerine ýetiriş dowam edýär. Ol hem şowsuz bolsa, ädim `failed` diýip bellenýär we ýerine ýetiriş indiki ädim bilen dowam edýär.
- **Ätiýaç çözgüt ýok** — ädim `failed` diýip bellenýär. Möhüm däl ädimler geçilýär; möhüm ädimler (`required: true` diýip bellenen) häzirki fazany saklaýar we faza derejesindäki dikeldiş synanyşygyny işledýär.

Agent ähli şowsuzlyklary ahyrky plan jemlemesinde habar berýär we dikeldip bolmaýan ýalňyşlyklar üçin el bilen düzetmek ädimlerini teklip edip biler.

---

## Site Plan ukyplary {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Tebigy dilde berlen maksat beýanyndan gurluşly site planyny döredýär.

**Parametrler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Islenýän websaýtyň tebigy dilde beýany |
| `style` | string | No | Görnüş stiline isleg: `minimal`, `bold`, `professional`, `playful`. Deslapky: agent maksada görä saýlaýar |
| `plugins` | array | No | Plana goşulmaly plugin slug-lary. Orkestrator zerur plugin-leri awtomatik goşýar. |
| `dry_run` | boolean | No | Eger `true` bolsa, plany saklamazdan ýa-da ýerine ýetirmezden JSON görnüşinde gaýtaryp berýär. Deslapky `false` |

**Gaýtarýar** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Öň döredilen site planyny ýerine ýetirip başlaýar.

**Parametrler**

| Parametr | Görnüşi | Hökmany | Düşündiriş |
|---|---|---|---|
| `plan_id` | string | Hawa | Ýerine ýetirilmeli planyň ID-si |
| `auto_install_plugins` | boolean | Ýok | Eger `true` bolsa, tassyklamazdan zerur goşmaçalary awtomatiki gurnaýar. Deslapky `false` |
| `max_retries` | integer | Ýok | Şowsuz ädimden soň dowam etmezden ozal gaýtadan synanyşyljak gezek sany. Deslapky `1` |

**Gaýtarýar** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Saýt planynyň häzirki ýerine ýetiriş ýagdaýyny gaýtarýar.

**Parametrler**

| Parametr | Görnüşi | Hökmany | Düşündiriş |
|---|---|---|---|
| `plan_id` | string | Hawa | Sorag ediljek plan ID-si |

**Gaýtarýar** ýokardaky [Ösüşi yzarlamak](#4-progress-tracking) bölüminde beýan edilen ösüş obýektini.

---

### `handle_plan_error` {#handleplanerror}

Şowsuz ädimi el bilen çözýär we planyň ýerine ýetirilişini indiki ädimden dowam etdirýär. Muny awtomatiki dikeldiş mümkin bolmadyk ýagdaýynda we özüňiz goşulmak islän wagtyňyz ulanyň.

**Parametrler**

| Parametr | Görnüşi | Hökmany | Düşündiriş |
|---|---|---|---|
| `plan_id` | string | Hawa | Plan ID-si |
| `step_id` | string | Hawa | Şowsuz ädimiň ID-si |
| `resolution` | string | Hawa | `skip` (geçmek we dowam etmek), `retry` (ädimi derrew gaýtadan synanyşmak) ýa-da `mark_done` (gaýtadan işletmezden üstünlikli hasaplamak) görnüşlerinden biri |

**Gaýtarýar** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 bilen v2-ni deňeşdirmek {#comparing-v1-and-v2}

| Aýratynlyk | v1 | v2 |
|---|---|---|
| Köp tapgyrly planlar | Ýok | Hawa |
| Ädimiň çykyş salgylanmalary (`__ref:`) | Ýok | Hawa |
| Goşmaçalary tapmak | El bilen | Awtomatiki |
| Ösüşi yzarlamak API-si | Ýok | Hawa |
| Ýalňyşlykdan dikeldiş | Şowsuz bolmak we durmak | Ätiýaç çözgüt + dowam etmek |
| Parallel ädim ýerine ýetirişi | Ýok | Hawa (her tapgyr üçin islege bagly) |
| WP-CLI plan buýruklary | Ýok | Hawa |
| Benchmark integrasiýasy | Ýok | Hawa (`q-restaurant-website`) |

---

## WP-CLI Plan buýruklary {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Maksat beýanyndan saýt planyny döredýär.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Öň döredilen plany ýerine ýetirýär.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Ýerine ýetirilýän ýa-da tamamlanan plan üçin häzirki ösüşi görkezýär.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Ähli saýt planlaryny sanap görkezýär (garaşýan, dowam edýän we tamamlanan).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Şowsuz plany `pending` ýagdaýyna täzeden sazlaýar, şeýdip ol başyndan gaýtadan ýerine ýetirilip bilner.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
