---
title: Orcastradh Neach-togail Làraich v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orcastradh Togail Làraich v2

Is e Orcastradh Togail Làraich v2 (a chaidh a thoirt a-steach ann an Gratis AI Agent v1.4.0) an einnsean a tha a’ cumhachdachadh cruthachadh làraichean-lìn ioma-cheumach. Nuair a dh’iarras tu air an agent “làrach-lìn taigh-bìdh a thogail” no “portfolio le blog a chruthachadh”, brisidh an t-orcastraiche an t-amas àrd-ìre sin sìos gu **plana** structaraichte, lorgaidh e na plugins a tha a dhìth gus a choileanadh, cuiridh e gach ceum an gnìomh ann an òrdugh, cumaidh e sùil air adhartas, agus gheibh e seachad air mearachdan gu fèin-obrachail.

---

## Mar a Dh’obraicheas e

### 1. Gineadh Plana

Nuair a gheibh an agent stiùireadh togail làraich, gairmidh e an comas `create_site_plan` gus **plana làraich** JSON a dhèanamh. Tha am plana a’ mìneachadh:

- **Amas** — dè bu chòir don làrach chrìochnaichte a dhèanamh
- **Ìrean** — buidhnean òrdaichte de cheumannan (m.e. _Suidheachadh_, _Seòrsaichean Susbaint_, _Dealbhadh_, _Susbaint_)
- **Ceumannan** — gairmean comais fa leth taobh a-staigh gach ìre
- **Riatanasan plugin** — plugins a dh’fheumas a bhith gnìomhach airson ceumannan sònraichte a ruith
- **Fallbacks** — ceumannan eile ma dh’fhailicheas prìomh cheum

**Plana eisimpleir (giorraichte)**

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

### 2. Lorg Plugin

Mus tòisich cur-an-gnìomh, sganaidh an t-orcastraiche `plugin_requirements` a’ phlana agus nì e sgrùdadh air dè na plugins a tha gnìomhach mu thràth. Airson plugins a tha a dhìth, nì e:

1. Rannsachadh san registry tro `recommend_plugin` airson a’ mhaids as fheàrr
2. Brosnachadh an agent gus am moladh a dhearbhadh
3. Tòiseachadh stàlaidh ma thèid aontachadh ris (no ma tha auto-install an comas sna roghainnean)

Chan eil fàilligidhean lorg plugin bàsmhor — comharraichidh an t-orcastraiche na ceumannan air a bheil buaidh mar `skipped` agus leanaidh e air leis a’ chòrr den phlana.

### 3. Cur-an-gnìomh a’ Phlana

Gairmidh an t-orcastraiche `execute_site_plan` le ID a’ phlana. Thèid cur-an-gnìomh air adhart ìre air ìre, ceum air cheum:

- **Iomraidhean ceum** (ro-leasachan `__ref:`) — faodaidh ceumannan iomradh a thoirt air toraidhean bho cheumannan roimhe. San eisimpleir gu h-àrd, thèid `__ref:create_menu.menu_id` fhuasgladh gu `menu_id` a thilleas ceum `create_menu`.
- **Ceumannan co-shìnte** — thèid ceumannan taobh a-staigh na h-aon ìre aig nach eil eadar-eisimeileachdan a chur air falbh aig an aon àm nuair a tha am bratach `parallel` suidhichte.
- **Ùine-crìche ceum** — tha ùine-crìche fa leth aig gach ceum (bunaiteach: an roghainn `Ability Timeout`). Ma thèid ceum seachad air an ùine, thèid a chomharrachadh mar `failed` agus leanaidh am plana air.

### 4. Tracadh Adhartais

Gairm `get_plan_progress` uair sam bith gus inbhe cur-an-gnìomh a sgrùdadh:

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

Faodaidh luchd-cleachdaidh WP-CLI sùil a chumail air adhartas le:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Ath-bheothachadh bho Mhearachd

Nuair a dh’fhailicheas ceum, nì an t-orcastraiche sgrùdadh airson ceum **fallback** a tha air a mhìneachadh sa phlana:

- **Fallback ri fhaighinn** — thèid an ceum fallback fheuchainn sa bhad. Ma shoirbhicheas leis, leanaidh cur-an-gnìomh air. Ma dh’fhailicheas e cuideachd, thèid an ceum a chomharrachadh mar `failed` agus leanaidh cur-an-gnìomh air leis an ath cheum.
- **Gun fallback** — thèid an ceum a chomharrachadh mar `failed`. Thèid ceumannan neo-èiginneach a leum; cuiridh ceumannan èiginneach (air an comharrachadh `required: true`) stad air an ìre làithreach agus brosnaichidh iad oidhirp ath-bheothachaidh aig ìre na h-ìre.

Aithrisidh an agent a h-uile fàilligeadh ann an geàrr-chunntas deireannach a’ phlana agus dh’fhaodadh e ceumannan làimhe airson fuasgladh a mholadh airson mearachdan nach gabh ath-bheothachadh.

---

## Comasan Plana Làraich

### `create_site_plan`

Gineas plana làraich structaraichte bho thuairisgeul amas ann an cànan nàdarra.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `goal` | string | Tha | Tuairisgeul ann an cànan nàdarra air an làrach-lìn a thathar ag iarraidh |
| `style` | string | Chan eil | Roghainn stoidhle lèirsinneach: `minimal`, `bold`, `professional`, `playful`. Bunaiteach: taghaidh an agent stèidhichte air an amas |
| `plugins` | array | Chan eil | Slugs plugin ri ghabhail a-steach sa phlana. Cuiridh an t-orcastraiche plugins riatanach ris gu fèin-obrachail. |
| `dry_run` | boolean | Chan eil | Ma tha `true`, tillidh e JSON a’ phlana gun a shàbhaladh no a chur an gnìomh. Bunaiteach `false` |

**Tillidh** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Tòisichidh e air plana làraich a chaidh a ghineadh roimhe a chur an gnìomh.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `plan_id` | string | Tha | ID a' phlana ri chur an gnìomh |
| `auto_install_plugins` | boolean | Chan eil | Ma tha `true`, stàlaichidh e na plugain riatanach gu fèin-obrachail gun dearbhadh. Bun-roghainn `false` |
| `max_retries` | integer | Chan eil | Àireamh nan turasan a dh’fheuchas e ceum a dh’fhàillig a-rithist mus gluais e air adhart. Bun-roghainn `1` |

**Tillidh** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Tillidh e inbhe cur-an-gnìomh làithreach plana làraich.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `plan_id` | string | Tha | ID a' phlana ri cheasnachadh |

**Tillidh** an nì adhartais a tha air a mhìneachadh ann an [Tracadh Adhartais](#4-progress-tracking) gu h-àrd.

---

### `handle_plan_error`

Fuasglaidh e ceum a dh’fhàillig le làimh agus tòisichidh e cur-an-gnìomh a’ phlana a-rithist bhon ath cheum. Cleachd seo nuair nach robh faighinn seachad air gu fèin-obrachail comasach agus tha thu airson eadar-theachd a dhèanamh.

**Paramadairean**

| Paramadair | Seòrsa | Riatanach | Tuairisgeul |
|---|---|---|---|
| `plan_id` | string | Tha | ID a' phlana |
| `step_id` | string | Tha | ID a' cheuma a dh’fhàillig |
| `resolution` | string | Tha | Aon de `skip` (leum seachad air agus lean air adhart), `retry` (feuch an ceum a-rithist sa bhad), no `mark_done` (làimhsich mar shoirbheachail gun ruith a-rithist) |

**Tillidh** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## A’ dèanamh coimeas eadar v1 agus v2

| Feart | v1 | v2 |
|---|---|---|
| Planaichean ioma-ìre | Chan eil | Tha |
| Iomraidhean air toradh ceuma (`__ref:`) | Chan eil | Tha |
| Lorg plugain | Le làimh | Fèin-obrachail |
| API tracadh adhartais | Chan eil | Tha |
| Faighinn seachad air mearachdan | Fàillig is stad | Roghainn-tèarainte + lean air adhart |
| Cur-an-gnìomh cheumannan co-shìnte | Chan eil | Tha (taghadh-a-steach gach ìre) |
| Òrdughan plana WP-CLI | Chan eil | Tha |
| Amalachadh slat-tomhais | Chan eil | Tha (`q-restaurant-website`) |

---

## Òrdughan Plana WP-CLI

### `wp gratis-ai-agent plan create`

Ginidh e plana làraich bho thuairisgeul amais.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Cuiridh e an gnìomh plana a chaidh a ghineadh roimhe.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Seallaidh e an t-adhartas làithreach airson plana a tha ga chur an gnìomh no a tha crìochnaichte.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Liostaichidh e a h-uile plana làraich (ri feitheamh, a’ dol air adhart, agus crìochnaichte).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Ath-shuidhichidh e plana a dh’fhàillig gu `pending` gus an gabh a chur an gnìomh a-rithist bhon toiseach.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
