---
title: Kurongeka kweMuvaki weSaiti v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Kuronga kweSite Builder v2

Kuronga kweSite Builder v2 (kwakaunzwa muGratis AI Agent v1.4.0) ndiyo injini inopa simba kugadzirwa kwewebsite kwematanho mazhinji. Paunokumbira agent kuti "ivake website yeresitorendi" kana "igadzire portfolio ine blog", orchestrator inopatsanura chinangwa icho chepamusoro kuita **plan** yakarongwa, inoona plugins dzinodiwa kuti ichizadzise, inoita nhanho imwe neimwe zvichitevedzana, inotevera kufambira mberi, uye inopora kubva kuzvikanganiso yakazvimirira.

---

## Mashandiro Azvinoita {#how-it-works}

### 1. Kugadzirwa kwePlan {#1-plan-generation}

Kana agent yagamuchira rairo yekuvaka site, inodana kugona kwe`create_site_plan` kuti ibudise JSON **site plan**. Plan inotsanangura:

- **Chinangwa** — zvinoitwa nesite yakapedzwa
- **Zvikamu** — mapoka akarongwa enhanho (semuenzaniso _Setup_, _Mhando dzeZviri mukati_, _Dhizaini_, _Zviri mukati_)
- **Nhanho** — kudanwa kwekugona kwega kwega mukati mechikamu chimwe nechimwe
- **Zvinodiwa zveplugin** — plugins dzinofanira kunge dziri kushanda kuti dzimwe nhanho dzimhanye
- **Zvekutsiva** — nhanho dzimwe kana nhanho huru ikakundikana

**Muenzaniso weplan (wakapfupikiswa)**

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

### 2. Kuwanikwa kwePlugin {#2-plugin-discovery}

Kuitwa kusati kwatanga, orchestrator inoongorora `plugin_requirements` dzeplan uye inotarisa kuti ndeapi plugins atova kushanda. Kune plugins dzisipo, ino:

1. Tsvaga muregistry kuburikidza ne`recommend_plugin` kuti iwane inoenderana zvakanyanya
2. Inokumbira agent kusimbisa kurudziro
3. Inotanga kuiswa kana zvabvumidzwa (kana kana auto-install yakabatidzwa muzvirongwa)

Kukundikana kwekuwanikwa kwePlugin hakupedzi basa — orchestrator inotara nhanho dzakanganiswa se`skipped` uye inoenderera mberi nechimwe chikamu cheplan.

### 3. Kuitwa kwePlan {#3-plan-execution}

Orchestrator inodana `execute_site_plan` neID yeplan. Kuitwa kunoenderera chikamu-ne-chikamu, nhanho-ne-nhanho:

- **Mareferensi enhanho** (`__ref:` prefix) — nhanho dzinogona kureferensa zvabuda kubva kunhanho dzapfuura. Mumuenzaniso uri pamusoro, `__ref:create_menu.menu_id` inogadziriswa ku`menu_id` yakadzorerwa nenhanho ye`create_menu`.
- **Nhanho dzepamwe chete** — nhanho dziri muchikamu chimwe chete dzisina kudyidzana pakati padzo dzinotumirwa panguva imwe kana flag ye`parallel` yaiswa.
- **Nguva yekupera kwenhanho** — nhanho imwe neimwe ine nguva yayo yekupera (default: chigadziriso che`Ability Timeout`). Nhanho yapera nguva inotarwa se`failed` uye plan inoenderera.

### 4. Kutevera Kufambira Mberi {#4-progress-tracking}

Dana `get_plan_progress` chero nguva kuti utarise mamiriro ekuitwa:

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

Vashandisi veWP-CLI vanogona kutevera kufambira mberi ne:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Kupora kubva Kuzvikanganiso {#5-error-recovery}

Kana nhanho ikakundikana, orchestrator inotarisa **fallback** nhanho yakatsanangurwa muplan:

- **Fallback iripo** — nhanho yefallback inoedzwa pakarepo. Kana ikabudirira, kuitwa kunoenderera. Kana ikakundikanawo, nhanho inotarwa se`failed` uye kuitwa kunoenderera nenhanho inotevera.
- **Hapana fallback** — nhanho inotarwa se`failed`. Nhanho dzisiri dzakakosha dzinosvetukwa; nhanho dzakakosha (dzakatarwa `required: true`) dzinomisa chikamu chiripo uye dzinotanga kuedza kupora pachikamu-level.

Agent inoshuma kukundikana kwese mupfupiso yekupedzisira yeplan uye inogona kukurudzira nhanho dzekugadzirisa nemaoko kuzvikanganiso zvisingapori.

---

## Kugona kweSite Plan {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Inogadzira site plan yakarongwa kubva kutsananguro yechinangwa yemutauro wechisikigo.

**Maparamita**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Tsananguro yemutauro wechisikigo yewebsite inodiwa |
| `style` | string | No | Sarudzo yechimiro chekuoneka: `minimal`, `bold`, `professional`, `playful`. Default: agent inosarudza zvichienderana nechinangwa |
| `plugins` | array | No | Plugin slugs dzekusanganisa muplan. Orchestrator inowedzera plugins dzinodiwa otomatiki. |
| `dry_run` | boolean | No | Kana iri `true`, inodzosa JSON yeplan pasina kuichengeta kana kuiita. Default `false` |

**Inodzosa** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Inotanga kuita site plan yakambogadzirwa kare.

**Maparamita**

| Paramita | Rudzi | Zvinodiwa | Tsananguro |
|---|---|---|---|
| `plan_id` | string | Hongu | ID yehurongwa huchaitwa |
| `auto_install_plugins` | boolean | Kwete | Kana `true`, inoisa otomatiki zvekuwedzera zvinodiwa pasina kusimbiswa. Zvakagara zviri `false` |
| `max_retries` | integer | Kwete | Nhamba yenguva dzekuedzazve danho rakundikana usati waenderera. Zvakagara zviri `1` |

**Inodzosa** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Inodzosa mamiriro azvino ekuitwa kwehurongwa hwesaiti.

**Maparamita**

| Paramita | Rudzi | Zvinodiwa | Tsananguro |
|---|---|---|---|
| `plan_id` | string | Hongu | ID yehurongwa yekubvunza |

**Inodzosa** chinhu chekufambira mberi chatsanangurwa mu[Kutevera Kufambira Mberi](#4-progress-tracking) pamusoro.

---

### `handle_plan_error` {#handleplanerror}

Inogadzirisa nemaoko danho rakundikana uye inotangazve kuitwa kwehurongwa kubva padanho rinotevera. Shandisa izvi kana kugadzirisa otomatiki kwanga kusingaiti uye uchida kupindira.

**Maparamita**

| Paramita | Rudzi | Zvinodiwa | Tsananguro |
|---|---|---|---|
| `plan_id` | string | Hongu | ID yehurongwa |
| `step_id` | string | Hongu | ID yedanho rakundikana |
| `resolution` | string | Hongu | Chimwe chezvi: `skip` (svetuka uye uenderere), `retry` (edzazve danho ipapo), kana `mark_done` (ritore sekuti rabudirira pasina kurimhanyisa zvakare) |

**Inodzosa** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Kuenzanisa v1 ne v2 {#comparing-v1-and-v2}

| Chimiro | v1 | v2 |
|---|---|---|
| Hurongwa hwematanho mazhinji | Kwete | Hongu |
| Mareferensi ezvinobuda padanho (`__ref:`) | Kwete | Hongu |
| Kuwanikwa kwezvekuwedzera | Nemaoko | Otomatiki |
| API yekutevera kufambira mberi | Kwete | Hongu |
| Kugadzirisa zvikanganiso | Kundikana-uye-kumira | Imwe nzira + enderera |
| Kuitwa kwematanho panguva imwe chete | Kwete | Hongu (sarudzo pachikamu chimwe nechimwe) |
| Mirairo yehurongwa yeWP-CLI | Kwete | Hongu |
| Kubatanidzwa kwebenchmark | Kwete | Hongu (`q-restaurant-website`) |

---

## Mirairo yehurongwa yeWP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Inogadzira hurongwa hwesaiti kubva mutsananguro yechinangwa.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Inoita hurongwa hwakambogadzirwa kare.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Inoratidza kufambira mberi kwazvino kwehurongwa huri kuitwa kana hwapedzwa.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Inonyora hurongwa hwese hwemasaiti (hwakamirira, huri kuitwa, uye hwapedzwa).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Inodzoreredza hurongwa hwakundikana ku `pending` kuitira kuti hugone kuitwazve kubva pakutanga.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
