---
title: Òkestrasyon Konstriksyon Sit v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Òkestrasyon Site Builder v2

Site Builder Orchestration v2 (ki te prezante nan Gratis AI Agent v1.4.0) se motè ki alimante kreyasyon sit entènèt an plizyè etap. Lè ou mande agent la pou "bati yon sit entènèt restoran" oswa "kreye yon pòtfolyo ak yon blog", orchestrator la divize objektif wo nivo sa a an yon **plan** estriktire, li dekouvri plugins ki nesesè pou reyalize li, li egzekite chak etap youn apre lòt, li swiv pwogrè, epi li rekipere apre erè poukont li.

---

## Kijan Li Fonksyone {#how-it-works}

### 1. Jenerasyon Plan {#1-plan-generation}

Lè agent la resevwa yon enstriksyon pou bati yon sit, li rele kapasite `create_site_plan` pou pwodui yon **plan sit** JSON. Plan an dekri:

- **Objektif** — sa sit fini an ta dwe fè
- **Faz** — gwoup etap ki òdone (pa egzanp _Konfigirasyon_, _Kalite Kontni_, _Konsepsyon_, _Kontni_)
- **Etap** — apèl kapasite endividyèl nan chak faz
- **Kondisyon plugin** — plugins ki dwe aktif pou sèten etap ka kouri
- **Solisyon ranplasman** — etap altènatif si yon etap prensipal echwe

**Egzanp plan (abreje)**

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

### 2. Dekouvèt Plugin {#2-plugin-discovery}

Anvan egzekisyon kòmanse, orchestrator la analize `plugin_requirements` plan an epi li tcheke ki plugins ki deja aktif. Pou plugins ki manke, li:

1. Chèche nan rejis la atravè `recommend_plugin` pou jwenn pi bon korespondans lan
2. Mande agent la konfime rekòmandasyon an
3. Deklanche enstalasyon si yo apwouve li (oswa si enstalasyon otomatik aktive nan paramèt yo)

Echèk dekouvèt plugin yo pa fatal — orchestrator la make etap ki afekte yo kòm `skipped` epi li kontinye ak rès plan an.

### 3. Egzekisyon Plan {#3-plan-execution}

Orchestrator la rele `execute_site_plan` ak ID plan an. Egzekisyon an kontinye faz pa faz, etap pa etap:

- **Referans etap** (prefiks `__ref:`) — etap yo ka fè referans ak rezilta etap anvan yo. Nan egzanp ki anwo a, `__ref:create_menu.menu_id` rezoud pou vin `menu_id` etap `create_menu` a retounen.
- **Etap paralèl** — etap ki nan menm faz la ki pa gen entèdepandans yo lanse an menm tan lè drapo `parallel` la fikse.
- **Delè etap** — chak etap gen yon delè endividyèl (default: paramèt `Ability Timeout` la). Yon etap ki depase delè li make kòm `failed` epi plan an kontinye.

### 4. Swivi Pwogrè {#4-progress-tracking}

Rele `get_plan_progress` nenpòt ki lè pou tcheke estati egzekisyon an:

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

Itilizatè WP-CLI yo ka siveye pwogrè ak:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Rekiperasyon Erè {#5-error-recovery}

Lè yon etap echwe, orchestrator la tcheke si gen yon etap **fallback** ki defini nan plan an:

- **Fallback disponib** — etap fallback la eseye imedyatman. Si li reyisi, egzekisyon an kontinye. Si li echwe tou, etap la make kòm `failed` epi egzekisyon an kontinye ak pwochen etap la.
- **Pa gen fallback** — etap la make kòm `failed`. Etap ki pa kritik yo sote; etap kritik yo (ki make `required: true`) kanpe faz aktyèl la epi deklanche yon tantativ rekiperasyon nan nivo faz.

Agent la rapòte tout echèk nan rezime final plan an epi li ka sijere etap reparasyon manyèl pou erè yo pa ka rekipere.

---

## Kapasite Plan Sit {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Jenere yon plan sit estriktire apati yon deskripsyon objektif an lang natirèl.

**Paramèt**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Deskripsyon an lang natirèl pou sit entènèt ou vle a |
| `style` | string | No | Preferans estil vizyèl: `minimal`, `bold`, `professional`, `playful`. Default: agent la chwazi selon objektif la |
| `plugins` | array | No | Slugs plugin pou mete nan plan an. Orchestrator la ajoute plugins obligatwa yo otomatikman. |
| `dry_run` | boolean | No | Si `true`, li retounen JSON plan an san li pa sove oswa egzekite li. Default `false` |

**Retounen** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Kòmanse egzekite yon plan sit ki te jenere deja.

**Paramèt**

| Paramèt | Kalite | Obligatwa | Deskripsyon |
|---|---|---|---|
| `plan_id` | string | Wi | ID plan pou egzekite a |
| `auto_install_plugins` | boolean | Non | Si se `true`, li enstale plugins obligatwa yo otomatikman san konfimasyon. Defo `false` |
| `max_retries` | integer | Non | Kantite fwa pou reeseye yon etap ki echwe anvan ou kontinye. Defo `1` |

**Retounen** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Retounen estati egzekisyon aktyèl yon plan sit.

**Paramèt**

| Paramèt | Kalite | Obligatwa | Deskripsyon |
|---|---|---|---|
| `plan_id` | string | Wi | ID plan pou mande enfòmasyon sou li |

**Retounen** objè pwogrè ki dekri nan [Swivi Pwogrè](#4-progress-tracking) pi wo a.

---

### `handle_plan_error` {#handleplanerror}

Rezoud yon etap ki echwe manyèlman epi rekòmanse egzekisyon plan an apati pwochen etap la. Sèvi ak sa lè rekiperasyon otomatik pa t posib epi ou vle entèvni.

**Paramèt**

| Paramèt | Kalite | Obligatwa | Deskripsyon |
|---|---|---|---|
| `plan_id` | string | Wi | ID plan |
| `step_id` | string | Wi | ID etap ki echwe a |
| `resolution` | string | Wi | Youn nan `skip` (sote epi kontinye), `retry` (reeseye etap la touswit), oswa `mark_done` (trete l kòm reyisi san relanse l) |

**Retounen** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Konparezon v1 ak v2 {#comparing-v1-and-v2}

| Fonksyonalite | v1 | v2 |
|---|---|---|
| Plan ki gen plizyè faz | Non | Wi |
| Referans sòti etap (`__ref:`) | Non | Wi |
| Dekouvèt plugin | Manyèl | Otomatik |
| API swivi pwogrè | Non | Wi |
| Rekiperasyon erè | Echwe-epi-sispann | Solisyon sekou + kontinye |
| Egzekisyon etap an paralèl | Non | Wi (aktive sou chwa pou chak faz) |
| Kòmand plan WP-CLI | Non | Wi |
| Entegrasyon benchmark | Non | Wi (`q-restaurant-website`) |

---

## Kòmand Plan WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Jenere yon plan sit apati yon deskripsyon objektif.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Egzekite yon plan ki te deja jenere.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Montre pwogrè aktyèl pou yon plan k ap egzekite oswa ki fini.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Lis tout plan sit yo (annatant, ankou, ak fini).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Reyajiste yon plan ki echwe pou li tounen `pending` pou li ka re-egzekite depi nan kòmansman.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
