---
title: Cydgysylltu Adeiladwr Safle v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Trefniant Adeiladydd Gwefan v2

Trefniant Adeiladydd Gwefan v2 (a gyflwynwyd yn Gratis AI Agent v1.4.0) yw'r peiriant sy'n pweru creu gwefannau aml-gam. Pan ofynnwch i'r agent "adeiladu gwefan bwyty" neu "creu portffolio gyda blog", mae'r orchestrator yn torri'r nod lefel uchel hwnnw'n **gynllun** strwythuredig, yn darganfod y plugins sydd eu hangen i'w gyflawni, yn gweithredu pob cam mewn trefn, yn olrhain cynnydd, ac yn adfer o wallau'n annibynnol.

---

## Sut Mae'n Gweithio

### 1. Cynhyrchu Cynllun

Pan fydd yr agent yn derbyn cyfarwyddyd adeiladu gwefan, mae'n galw'r gallu `create_site_plan` i gynhyrchu **cynllun gwefan** JSON. Mae'r cynllun yn disgrifio:

- **Nod** — beth ddylai'r wefan orffenedig ei wneud
- **Cyfnodau** — grwpiau trefnedig o gamau (e.e. _Gosod_, _Mathau Cynnwys_, _Dylunio_, _Cynnwys_)
- **Camau** — galwadau gallu unigol o fewn pob cyfnod
- **Gofynion plugin** — plugins y mae'n rhaid iddynt fod yn weithredol er mwyn i gamau penodol redeg
- **Dewisiadau wrth gefn** — camau amgen os bydd cam cynradd yn methu

**Cynllun enghreifftiol (wedi'i fyrhau)**

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

### 2. Darganfod Plugin

Cyn i weithredu ddechrau, mae'r orchestrator yn sganio `plugin_requirements` y cynllun ac yn gwirio pa plugins sydd eisoes yn weithredol. Ar gyfer plugins coll, mae'n:

1. Chwilio'r gofrestrfa drwy `recommend_plugin` am y paru gorau
2. Annog yr agent i gadarnhau'r argymhelliad
3. Sbarduno gosod os caiff ei gymeradwyo (neu os yw gosod awtomatig wedi'i alluogi yn y gosodiadau)

Nid yw methiannau darganfod plugin yn angheuol — mae'r orchestrator yn marcio'r camau yr effeithir arnynt fel `skipped` ac yn parhau gyda gweddill y cynllun.

### 3. Gweithredu'r Cynllun

Mae'r orchestrator yn galw `execute_site_plan` gyda ID y cynllun. Mae gweithredu'n mynd rhagddo fesul cyfnod, fesul cam:

- **Cyfeiriadau cam** (rhagddodiad `__ref:`) — gall camau gyfeirio at allbynnau o gamau blaenorol. Yn yr enghraifft uchod, caiff `__ref:create_menu.menu_id` ei ddatrys i'r `menu_id` a ddychwelwyd gan y cam `create_menu`.
- **Camau cyfochrog** — caiff camau o fewn yr un cyfnod nad oes ganddynt gyd-ddibyniaethau eu hanfon ar yr un pryd pan fydd y faner `parallel` wedi'i gosod.
- **Terfyn amser cam** — mae gan bob cam derfyn amser unigol (diofyn: y gosodiad `Ability Timeout`). Caiff cam sydd wedi dod i ben o ran amser ei farcio'n `failed` ac mae'r cynllun yn parhau.

### 4. Olrhain Cynnydd

Galwch `get_plan_progress` ar unrhyw adeg i wirio statws gweithredu:

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

Gall defnyddwyr WP-CLI fonitro cynnydd gyda:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Adfer o Wallau

Pan fydd cam yn methu, mae'r orchestrator yn gwirio am gam **wrth gefn** a ddiffinnir yn y cynllun:

- **Dewis wrth gefn ar gael** — rhoddir cynnig ar y cam wrth gefn ar unwaith. Os bydd yn llwyddo, mae gweithredu'n parhau. Os bydd hwnnw hefyd yn methu, caiff y cam ei farcio'n `failed` ac mae gweithredu'n parhau gyda'r cam nesaf.
- **Dim dewis wrth gefn** — caiff y cam ei farcio'n `failed`. Caiff camau nad ydynt yn hanfodol eu hepgor; mae camau hanfodol (wedi'u marcio `required: true`) yn atal y cyfnod cyfredol ac yn sbarduno ymgais adfer ar lefel cyfnod.

Mae'r agent yn adrodd am bob methiant yng nghrynodeb terfynol y cynllun a gall awgrymu camau adfer â llaw ar gyfer gwallau na ellir eu hadfer.

---

## Galluoedd Cynllun Gwefan

### `create_site_plan`

Yn cynhyrchu cynllun gwefan strwythuredig o ddisgrifiad nod mewn iaith naturiol.

**Paramedrau**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Disgrifiad mewn iaith naturiol o'r wefan a ddymunir |
| `style` | string | No | Dewis arddull weledol: `minimal`, `bold`, `professional`, `playful`. Diofyn: mae'r agent yn dewis yn seiliedig ar y nod |
| `plugins` | array | No | Slugs plugin i'w cynnwys yn y cynllun. Mae'r orchestrator yn ychwanegu plugins gofynnol yn awtomatig. |
| `dry_run` | boolean | No | Os yw'n `true`, yn dychwelyd JSON y cynllun heb ei gadw na'i weithredu. Diofyn `false` |

**Yn dychwelyd** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Yn dechrau gweithredu cynllun gwefan a gynhyrchwyd yn flaenorol.

**Paramedrau**

| Paramedr | Math | Angenrheidiol | Disgrifiad |
|---|---|---|---|
| `plan_id` | string | Ie | ID y cynllun i'w weithredu |
| `auto_install_plugins` | boolean | Na | Os yw `true`, mae'n gosod yr ategion gofynnol yn awtomatig heb gadarnhad. Rhagosodiad `false` |
| `max_retries` | integer | Na | Nifer y troeon i ailgeisio cam a fethodd cyn symud ymlaen. Rhagosodiad `1` |

**Yn dychwelyd** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Yn dychwelyd statws gweithredu cyfredol cynllun safle.

**Paramedrau**

| Paramedr | Math | Angenrheidiol | Disgrifiad |
|---|---|---|---|
| `plan_id` | string | Ie | ID y cynllun i'w ymholi |

**Yn dychwelyd** y gwrthrych cynnydd a ddisgrifir yn [Olrhain Cynnydd](#4-progress-tracking) uchod.

---

### `handle_plan_error`

Yn datrys cam a fethodd â llaw ac yn ailddechrau gweithredu'r cynllun o'r cam nesaf. Defnyddiwch hyn pan nad oedd adferiad awtomatig yn bosibl ac rydych am ymyrryd.

**Paramedrau**

| Paramedr | Math | Angenrheidiol | Disgrifiad |
|---|---|---|---|
| `plan_id` | string | Ie | ID y cynllun |
| `step_id` | string | Ie | ID y cam a fethodd |
| `resolution` | string | Ie | Un o `skip` (hepgor a pharhau), `retry` (ailgeisio'r cam ar unwaith), neu `mark_done` (trin fel llwyddiant heb ei ail-redeg) |

**Yn dychwelyd** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Cymharu v1 a v2

| Nodwedd | v1 | v2 |
|---|---|---|
| Cynlluniau aml-gam | Na | Ie |
| Cyfeiriadau at allbwn cam (`__ref:`) | Na | Ie |
| Darganfod ategion | Â llaw | Awtomatig |
| API olrhain cynnydd | Na | Ie |
| Adfer ar ôl gwall | Methu-a-stopio | Dull wrth gefn + parhau |
| Gweithredu camau yn gyfochrog | Na | Ie (dewisol fesul cam) |
| Gorchmynion cynllun WP-CLI | Na | Ie |
| Integreiddio meincnod | Na | Ie (`q-restaurant-website`) |

---

## Gorchmynion Cynllun WP-CLI

### `wp gratis-ai-agent plan create`

Yn cynhyrchu cynllun safle o ddisgrifiad nod.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Yn gweithredu cynllun a gynhyrchwyd yn flaenorol.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Yn dangos cynnydd cyfredol ar gyfer cynllun sy'n cael ei weithredu neu sydd wedi'i gwblhau.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Yn rhestru pob cynllun safle (yn aros, ar y gweill, ac wedi'u cwblhau).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Yn ailosod cynllun a fethodd i `pending` fel y gellir ei ailweithredu o'r dechrau.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
