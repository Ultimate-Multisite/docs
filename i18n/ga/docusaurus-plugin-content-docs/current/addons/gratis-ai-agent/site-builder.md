---
title: Comhordú Tógálaí Suímh v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orchestrú Tógálaí Suíomh v2

Is é Orchestrú Tógálaí Suíomh v2 (a tugadh isteach in Gratis AI Agent v1.4.0) an t-inneall a chumhachtaíonn cruthú suíomhanna gréasáin ilchéime. Nuair a iarrann tú ar an agent "suíomh gréasáin bialainne a thógáil" nó "punann le blag a chruthú", briseann an t-orchestrator an sprioc ardleibhéil sin síos ina **phlean** struchtúrtha, aimsíonn sé na breiseáin atá ag teastáil chun é a chomhlíonadh, ritheann sé gach céim in ord, rianaíonn sé dul chun cinn, agus téann sé i mbun téarnaimh ó earráidí go huathrialach.

---

## Conas a Oibríonn Sé

### 1. Giniúint Plean

Nuair a fhaigheann an agent treoir chun suíomh a thógáil, glaonn sé ar an gcumas `create_site_plan` chun **plean suímh** JSON a tháirgeadh. Déanann an plean cur síos ar:

- **Sprioc** — cad ba chóir don suíomh críochnaithe a dhéanamh
- **Céimeanna móra** — grúpaí ordaithe céimeanna (m.sh. _Socrú_, _Cineálacha Ábhair_, _Dearadh_, _Ábhar_)
- **Céimeanna** — glaonna cumais aonair laistigh de gach céim mhór
- **Riachtanais bhreiseán** — breiseáin nach mór a bheith gníomhach chun céimeanna áirithe a rith
- **Roghanna cúltaca** — céimeanna malartacha má theipeann ar phríomhchéim

**Plean samplach (giorraithe)**

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

### 2. Aimsiú Breiseán

Sula dtosaíonn an rith, scanann an t-orchestrator `plugin_requirements` an phlean agus seiceálann sé cé na breiseáin atá gníomhach cheana. Maidir le breiseáin atá in easnamh, déanann sé:

1. Cuardaíonn sé an chlárlann trí `recommend_plugin` don mheaitseáil is fearr
2. Iarrann sé ar an agent an moladh a dhearbhú
3. Spreagann sé suiteáil má cheadaítear é (nó má tá uathshuiteáil cumasaithe sna socruithe)

Ní bhíonn teipeanna aimsiú breiseán marfach — marcálann an t-orchestrator na céimeanna lena mbaineann mar `skipped` agus leanann sé ar aghaidh leis an gcuid eile den phlean.

### 3. Rith an Phlean

Glaonn an t-orchestrator ar `execute_site_plan` leis an aitheantas plean. Leanann an rith ar aghaidh céim mhór ar chéim mhór, céim ar chéim:

- **Tagairtí céime** (réimír `__ref:`) — is féidir le céimeanna tagairt a dhéanamh d’aschuir ó chéimeanna roimhe seo. Sa sampla thuas, réitítear `__ref:create_menu.menu_id` go dtí an `menu_id` a d’fhill an chéim `create_menu`.
- **Céimeanna comhthreomhara** — seoltar céimeanna laistigh den chéim mhór chéanna nach bhfuil idirspleáchais eatarthu go comhuaineach nuair atá an bhratach `parallel` socraithe.
- **Teorainn ama céime** — tá teorainn ama aonair ag gach céim (réamhshocrú: an socrú `Ability Timeout`). Marcáiltear céim a ritheann thar am mar `failed` agus leanann an plean ar aghaidh.

### 4. Rianú Dul Chun Cinn

Glaoigh ar `get_plan_progress` am ar bith chun stádas rite a sheiceáil:

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

Is féidir le húsáideoirí WP-CLI dul chun cinn a mhonatóiriú le:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Téarnamh ó Earráidí

Nuair a theipeann ar chéim, seiceálann an t-orchestrator an bhfuil céim **chúltaca** sainithe sa phlean:

- **Cúltaca ar fáil** — déantar iarracht an chéim chúltaca láithreach. Má éiríonn léi, leanann an rith ar aghaidh. Má theipeann uirthi freisin, marcáiltear an chéim mar `failed` agus leanann an rith ar aghaidh leis an gcéad chéim eile.
- **Gan cúltaca** — marcáiltear an chéim mar `failed`. Scipeáiltear céimeanna neamhchriticiúla; stopann céimeanna criticiúla (marcáilte `required: true`) an chéim mhór reatha agus spreagann siad iarracht téarnaimh ar leibhéal na céime móire.

Tuairiscíonn an agent gach teip san achoimre phlean deiridh agus féadfaidh sé céimeanna láimhe ceartúcháin a mholadh d’earráidí nach féidir téarnamh uathu.

---

## Cumais Plean Suímh

### `create_site_plan`

Gineann sé plean suímh struchtúrtha ó chur síos sprioc i dteanga nádúrtha.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `goal` | string | Tá | Cur síos i dteanga nádúrtha ar an suíomh gréasáin atá ag teastáil |
| `style` | string | Níl | Rogha stíle amhairc: `minimal`, `bold`, `professional`, `playful`. Réamhshocrú: roghnaíonn an agent bunaithe ar an sprioc |
| `plugins` | array | Níl | Slugaí breiseán le cur san áireamh sa phlean. Cuireann an t-orchestrator breiseáin riachtanacha leis go huathoibríoch. |
| `dry_run` | boolean | Níl | Más `true` é, filleann sé JSON an phlean gan é a shábháil ná a rith. Réamhshocrú `false` |

**Filleann sé** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Tosaíonn sé ar phlean suímh a gineadh roimhe seo a rith.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `plan_id` | teaghrán | Tá | ID an phlean le forghníomhú |
| `auto_install_plugins` | booleach | Níl | Más `true`, suiteálann sé na breiseáin riachtanacha go huathoibríoch gan deimhniú. Réamhshocrú `false` |
| `max_retries` | slánuimhir | Níl | Líon na n-uaireanta chun céim theipthe a thriail arís sula mbogtar ar aghaidh. Réamhshocrú `1` |

**Filleann sé** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Filleann sé stádas forghníomhaithe reatha plean suímh.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `plan_id` | teaghrán | Tá | ID plean le ceistiú |

**Filleann sé** an réad dul chun cinn a thuairiscítear in [Rianú Dul Chun Cinn](#4-progress-tracking) thuas.

---

### `handle_plan_error`

Réitíonn sé céim theipthe de láimh agus atosaíonn sé forghníomhú an phlean ón gcéad chéim eile. Úsáid é seo nuair nach raibh aisghabháil uathoibríoch indéanta agus gur mian leat idirghabháil a dhéanamh.

**Paraiméadair**

| Paraiméadar | Cineál | Riachtanach | Cur síos |
|---|---|---|---|
| `plan_id` | teaghrán | Tá | ID plean |
| `step_id` | teaghrán | Tá | ID na céime teipthe |
| `resolution` | teaghrán | Tá | Ceann de `skip` (scipeáil agus lean ar aghaidh), `retry` (triail an chéim arís láithreach), nó `mark_done` (déileáil leis mar rathúil gan é a rith arís) |

**Filleann sé** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Comparáid idir v1 agus v2

| Gné | v1 | v2 |
|---|---|---|
| Pleananna ilphasacha | Níl | Tá |
| Tagairtí d’aschur céime (`__ref:`) | Níl | Tá |
| Fionnachtain breiseán | De láimh | Uathoibríoch |
| API rianaithe dul chun cinn | Níl | Tá |
| Aisghabháil earráidí | Teip-agus-stad | Cúltaca + lean ar aghaidh |
| Forghníomhú céimeanna go comhthreomhar | Níl | Tá (roghnach in aghaidh na pas) |
| Orduithe plean WP-CLI | Níl | Tá |
| Comhtháthú tagarmhairc | Níl | Tá (`q-restaurant-website`) |

---

## Orduithe Plean WP-CLI

### `wp gratis-ai-agent plan create`

Gineann sé plean suímh ó chur síos sprice.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Forghníomhaíonn sé plean a gineadh roimhe seo.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Taispeánann sé an dul chun cinn reatha do phlean atá á fhorghníomhú nó atá críochnaithe.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Liostaíonn sé gach plean suímh (ar feitheamh, ar siúl, agus críochnaithe).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Athshocraíonn sé plean teipthe go `pending` ionas gur féidir é a fhorghníomhú arís ón tús.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
