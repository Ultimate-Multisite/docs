---
title: Orkestrazzjoni tal-Bennej tas-Sit v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orkestrazzjoni tal-Bennej tas-Sit v2

Site Builder Orchestration v2 (introdotta f'Gratis AI Agent v1.4.0) hija l-magna li tħaddem il-ħolqien ta' websajts f'diversi passi. Meta titlob lill-agent biex "jibni websajt ta' restorant" jew "joħloq portfolio b'blog", l-orkestratur jaqsam dak l-għan ta' livell għoli fi **pjan** strutturat, jiskopri l-plugins meħtieġa biex iwettqu, jeżegwixxi kull pass f'sekwenza, isegwi l-progress, u jirkupra minn żbalji b'mod awtonomu.

---

## Kif Jaħdem

### 1. Ġenerazzjoni tal-Pjan

Meta l-agent jirċievi istruzzjoni għall-bini ta' sit, isejjaħ il-kapaċità `create_site_plan` biex jipproduċi **pjan tas-sit** JSON. Il-pjan jiddeskrivi:

- **Għan** — x'għandu jagħmel is-sit lest
- **Fażijiet** — gruppi ordnati ta' passi (eż. _Setup_, _Tipi ta' Kontenut_, _Disinn_, _Kontenut_)
- **Passi** — sejħiet individwali ta' kapaċitajiet fi ħdan kull fażi
- **Rekwiżiti tal-plugin** — plugins li jridu jkunu attivi biex ċerti passi jitħaddmu
- **Fallbacks** — passi alternattivi jekk pass primarju jfalli

**Eżempju ta' pjan (imqassar)**

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

### 2. Skoperta tal-Plugin

Qabel ma tibda l-eżekuzzjoni, l-orkestratur jiskennja l-`plugin_requirements` tal-pjan u jiċċekkja liema plugins huma diġà attivi. Għal plugins nieqsa, huwa:

1. Ifittex fir-reġistru permezz ta' `recommend_plugin` għall-aħjar qbil
2. Jitlob lill-agent jikkonferma r-rakkomandazzjoni
3. Jiskatta l-installazzjoni jekk tiġi approvata (jew jekk l-installazzjoni awtomatika tkun attivata fis-settings)

Fallimenti fl-iskoperta tal-plugin mhumiex fatali — l-orkestratur jimmarka l-passi affettwati bħala `skipped` u jkompli bil-bqija tal-pjan.

### 3. Eżekuzzjoni tal-Pjan

L-orkestratur isejjaħ `execute_site_plan` bl-ID tal-pjan. L-eżekuzzjoni timxi fażi b'fażi, pass pass:

- **Referenzi tal-passi** (prefiss `__ref:`) — il-passi jistgħu jirreferu għal outputs minn passi preċedenti. Fl-eżempju ta' hawn fuq, `__ref:create_menu.menu_id` jiġi solvut għall-`menu_id` ritornat mill-pass `create_menu`.
- **Passi paralleli** — passi fi ħdan l-istess fażi li m'għandhomx interdipendenzi jintbagħtu fl-istess ħin meta l-bandiera `parallel` tkun issettjata.
- **Timeout tal-pass** — kull pass għandu timeout individwali (default: is-setting `Ability Timeout`). Pass li jaqbeż il-ħin jiġi mmarkat bħala `failed` u l-pjan ikompli.

### 4. Segwitu tal-Progress

Sejjaħ `get_plan_progress` fi kwalunkwe ħin biex tiċċekkja l-istatus tal-eżekuzzjoni:

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

L-utenti ta' WP-CLI jistgħu jimmonitorjaw il-progress b':

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Irkupru minn Żbalji

Meta pass ifalli, l-orkestratur jiċċekkja għal pass **fallback** definit fil-pjan:

- **Fallback disponibbli** — il-pass fallback jiġi ppruvat minnufih. Jekk jirnexxi, l-eżekuzzjoni tkompli. Jekk dan ukoll ifalli, il-pass jiġi mmarkat bħala `failed` u l-eżekuzzjoni tkompli bil-pass li jmiss.
- **L-ebda fallback** — il-pass jiġi mmarkat bħala `failed`. Passi mhux kritiċi jinqabżu; passi kritiċi (immarkati `required: true`) iwaqqfu l-fażi attwali u jiskattaw tentattiv ta' rkupru fil-livell tal-fażi.

L-agent jirrapporta l-fallimenti kollha fis-sommarju finali tal-pjan u jista' jissuġġerixxi passi manwali ta' rimedju għal żbalji li ma jistgħux jiġu rkuprati.

---

## Kapaċitajiet tal-Pjan tas-Sit

### `create_site_plan`

Jiġġenera pjan tas-sit strutturat minn deskrizzjoni ta' għan b'lingwa naturali.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Deskrizzjoni b'lingwa naturali tal-websajt mixtieqa |
| `style` | string | No | Preferenza tal-istil viżwali: `minimal`, `bold`, `professional`, `playful`. Default: l-agent jagħżel abbażi tal-għan |
| `plugins` | array | No | Slugs tal-plugin li għandhom jiġu inklużi fil-pjan. L-orkestratur iżid il-plugins meħtieġa awtomatikament. |
| `dry_run` | boolean | No | Jekk `true`, jirritorna l-JSON tal-pjan mingħajr ma jsalvah jew jeżegwih. Default `false` |

**Jirritorna** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Jibda jeżegwixxi pjan tas-sit iġġenerat qabel.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `plan_id` | string | Iva | ID tal-pjan li għandu jiġi eżegwit |
| `auto_install_plugins` | boolean | Le | Jekk `true`, jinstalla awtomatikament l-estensjonijiet meħtieġa mingħajr konferma. Default `false` |
| `max_retries` | integer | Le | Numru ta' drabi biex terġa' tipprova pass li falla qabel tkompli. Default `1` |

**Jirritorna** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Jirritorna l-istatus attwali tal-eżekuzzjoni ta' pjan ta' sit.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `plan_id` | string | Iva | ID tal-pjan li għandu jiġi mistoqsi |

**Jirritorna** l-oġġett tal-progress deskritt f'[Traċċar tal-Progress](#4-progress-tracking) hawn fuq.

---

### `handle_plan_error`

Isolvi manwalment pass li falla u jerġa' jibda l-eżekuzzjoni tal-pjan mill-pass li jmiss. Uża dan meta l-irkupru awtomatiku ma kienx possibbli u trid tintervjeni.

**Parametri**

| Parametru | Tip | Meħtieġ | Deskrizzjoni |
|---|---|---|---|
| `plan_id` | string | Iva | ID tal-pjan |
| `step_id` | string | Iva | ID tal-pass li falla |
| `resolution` | string | Iva | Wieħed minn `skip` (aqbeż u kompli), `retry` (erġa' pprova l-pass minnufih), jew `mark_done` (ittrattah bħala li rnexxa mingħajr ma terġa' tħaddmu) |

**Jirritorna** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Tqabbil bejn v1 u v2

| Karatteristika | v1 | v2 |
|---|---|---|
| Pjanijiet b'ħafna fażijiet | Le | Iva |
| Referenzi għall-output tal-passi (`__ref:`) | Le | Iva |
| Skoperta tal-estensjonijiet | Manwali | Awtomatika |
| API għat-traċċar tal-progress | Le | Iva |
| Irkupru minn żbalji | Ifalli u jieqaf | Alternattiva + kompli |
| Eżekuzzjoni parallela tal-passi | Le | Iva (b'għażla għal kull fażi) |
| Kmandi tal-pjan WP-CLI | Le | Iva |
| Integrazzjoni tal-kejl komparattiv | Le | Iva (`q-restaurant-website`) |

---

## Kmandi tal-Pjan WP-CLI

### `wp gratis-ai-agent plan create`

Jiġġenera pjan ta' sit minn deskrizzjoni ta' għan.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Jeżegwixxi pjan iġġenerat qabel.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Juri l-progress attwali għal pjan li qed jiġi eżegwit jew li tlesta.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Jelenka l-pjanijiet kollha tas-siti (pendenti, għaddejjin, u lesti).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Jerġa' jistabbilixxi pjan li falla għal `pending` sabiex ikun jista' jerġa' jiġi eżegwit mill-bidu.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
