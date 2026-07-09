---
title: Ihuriro ry'ibikorwa bya Site Builder v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (yatangijwe muri Gratis AI Agent v1.4.0) ni moteri iha imbaraga irema ry’urubuga rw’intambwe nyinshi. Iyo usabye agent "kubaka urubuga rwa restaurant" cyangwa "gukora portfolio ifite blog", orchestrator igabanya iyo ntego rusange mo **gahunda** itunganijwe, ikavumbura plugins zikenewe kugira ngo iyuzuze, igakora buri ntambwe ku murongo, igakurikirana aho bigeze, kandi ikisubiza mu buryo bwikora iyo habaye amakosa.

---

## Uko Bikora {#how-it-works}

### 1. Gukora Gahunda {#1-plan-generation}

Iyo agent yakiriye amabwiriza yo kubaka urubuga, ihamagara ubushobozi bwa `create_site_plan` kugira ngo ikore **gahunda y’urubuga** ya JSON. Gahunda isobanura:

- **Intego** — icyo urubuga rurangiye rugomba gukora
- **Ibyiciro** — amatsinda y’intambwe akurikiranye (urugero: _Setup_, _Ubwoko bw’Ibirimo_, _Igishushanyo_, _Ibirimo_)
- **Intambwe** — ihamagarwa ry’ubushobozi rimwe-rimwe muri buri cyiciro
- **Ibisabwa bya plugin** — plugins zigomba kuba zikora kugira ngo intambwe runaka zikore
- **Ibisimbura** — intambwe zindi zikoreshwa iyo intambwe y’ibanze yananiwe

**Urugero rwa gahunda (rwagabanyijwe)**

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

### 2. Kuvumbura Plugin {#2-plugin-discovery}

Mbere y’uko gukora bitangira, orchestrator isikana `plugin_requirements` za gahunda ikagenzura plugins zisanzwe zikora. Ku plugins zibura, ikora ibi:

1. Ishakisha mu bubiko ikoresheje `recommend_plugin` kugira ngo ibone ihuye neza
2. Isaba agent kwemeza icyo yasabye
3. Itangiza iyinjizwamo niba byemejwe (cyangwa niba auto-install ishoboye muri settings)

Kunanirwa kuvumbura plugin si ikosa rihagarika byose — orchestrator ishyira intambwe zagizweho ingaruka nka `skipped` maze igakomeza indi gahunda isigaye.

### 3. Gukora Gahunda {#3-plan-execution}

Orchestrator ihamagara `execute_site_plan` ikoresheje ID ya gahunda. Gukora bikomeza icyiciro ku kindi, intambwe ku yindi:

- **References z’intambwe** (`__ref:` prefix) — intambwe zishobora kwifashisha ibisubizo byavuye mu ntambwe zabanje. Mu rugero ruri hejuru, `__ref:create_menu.menu_id` ihindurwa `menu_id` yasubijwe n’intambwe ya `create_menu`.
- **Intambwe zibangikanye** — intambwe ziri mu cyiciro kimwe zidafite aho zishingiranye zoherezwa icyarimwe iyo akamenyetso ka `parallel` kashyizweho.
- **Igihe ntarengwa cy’intambwe** — buri ntambwe igira igihe ntarengwa cyayo (mburabuzi: setting ya `Ability Timeout`). Intambwe irengeje igihe ishyirwa nka `failed` kandi gahunda igakomeza.

### 4. Gukurikirana Aho Bigeze {#4-progress-tracking}

Hamagara `get_plan_progress` igihe icyo ari cyo cyose kugira ngo ugenzure uko gukora bihagaze:

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

Abakoresha WP-CLI bashobora gukurikirana aho bigeze bakoresheje:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Kwisubiza mu Makosa {#5-error-recovery}

Iyo intambwe inaniwe, orchestrator igenzura niba hari intambwe **isimbura** yasobanuwe muri gahunda:

- **Ibisimbura bihari** — intambwe isimbura igeragezwa ako kanya. Niba ishoboye, gukora birakomeza. Niba nayo inaniwe, intambwe ishyirwa nka `failed` maze gukora bigakomeza ku ntambwe ikurikira.
- **Nta gisimbura** — intambwe ishyirwa nka `failed`. Intambwe zitari ingenzi zirasimbukwa; intambwe z’ingenzi (zashyizweho `required: true`) zihagarika icyiciro kiriho kandi zigatangiza igerageza ryo kwisubiza ku rwego rw’icyiciro.

Agent itanga raporo y’ukunánirwa kose mu ncamake ya nyuma ya gahunda kandi ishobora gutanga inama z’intambwe zo gukosora intoki ku makosa adashobora gukosorwa mu buryo bwikora.

---

## Ubushobozi bwa Gahunda y’Urubuga {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Ikora gahunda y’urubuga itunganijwe ivuye ku nsobanuro y’intego mu rurimi rusanzwe.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Inyandiko mu rurimi rusanzwe isobanura urubuga rwifuzwa |
| `style` | string | No | Icyifuzo cy’imisusire igaragara: `minimal`, `bold`, `professional`, `playful`. Mburabuzi: agent ihitamo ishingiye ku ntego |
| `plugins` | array | No | Plugin slugs zo gushyira muri gahunda. Orchestrator yongeramo plugins zisabwa mu buryo bwikora. |
| `dry_run` | boolean | No | Niba ari `true`, isubiza JSON ya gahunda itayibitse cyangwa ngo iyikore. Mburabuzi ni `false` |

**Isubiza** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Itangira gukora gahunda y’urubuga yari yarakozwe mbere.

**Parameters**

| Ikigenderwaho | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `plan_id` | string | Yego | ID ya gahunda yo gushyira mu bikorwa |
| `auto_install_plugins` | boolean | Oya | Niba ari `true`, ihita ishyiraho ibyongerwamo bikenewe nta kwemeza. Agaciro mburabuzi ni `false` |
| `max_retries` | integer | Oya | Umubare w'inshuro zo kongera kugerageza intambwe yanze mbere yo gukomeza. Agaciro mburabuzi ni `1` |

**Bisubiza** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Bisubiza imiterere igezweho y'ishyirwa mu bikorwa rya gahunda y'urubuga.

**Ibipimo**

| Ikigenderwaho | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `plan_id` | string | Yego | ID ya gahunda yo kubaza |

**Bisubiza** ikintu cy'iterambere gisobanuwe muri [Gukurikirana Iterambere](#4-progress-tracking) hejuru.

---

### `handle_plan_error` {#handleplanerror}

Gikemura n'intoki intambwe yanze maze kigakomeza gushyira mu bikorwa gahunda guhera ku ntambwe ikurikira. Koresha ibi igihe gusubirana byikora bitashobotse kandi ushaka kugira icyo ukora.

**Ibipimo**

| Ikigenderwaho | Ubwoko | Birakenewe | Ibisobanuro |
|---|---|---|---|
| `plan_id` | string | Yego | ID ya gahunda |
| `step_id` | string | Yego | ID y'intambwe yanze |
| `resolution` | string | Yego | Kimwe muri `skip` (gusimbuka ugakomeza), `retry` (kongera kugerageza intambwe ako kanya), cyangwa `mark_done` (kubifata nk'ibyagenze neza utongera kubikoresha) |

**Bisubiza** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Kugereranya v1 na v2 {#comparing-v1-and-v2}

| Ikiranga | v1 | v2 |
|---|---|---|
| Gahunda z'ibyiciro byinshi | Oya | Yego |
| Amarebero y'ibisohoka by'intambwe (`__ref:`) | Oya | Yego |
| Kuvumbura ibyongerwamo | Bikorwa n'intoki | Byikora |
| API yo gukurikirana iterambere | Oya | Yego |
| Gusubirana nyuma y'ikosa | Kunanirwa no guhagarara | Ubundi buryo + gukomeza |
| Gushyira mu bikorwa intambwe zibangikanye | Oya | Yego (kwihitiramo kuri buri cyiciro) |
| Amabwiriza ya gahunda ya WP-CLI | Oya | Yego |
| Kwinjizamo benchmark | Oya | Yego (`q-restaurant-website`) |

---

## Amabwiriza ya Gahunda ya WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Bikora gahunda y'urubuga bivuye ku bisobanuro by'intego.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Bishyira mu bikorwa gahunda yari yarakozwe mbere.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Byerekana iterambere rigezweho rya gahunda iri gushyirwa mu bikorwa cyangwa yarangiye.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Bitondeka gahunda zose z'urubuga (izitegereje, iziri gukorwa, n'izarangiye).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Bisubiza gahunda yanze kuri `pending` kugira ngo ishobore kongera gushyirwa mu bikorwa guhera mu ntangiriro.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
