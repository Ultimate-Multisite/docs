---
title: Kugwirizanitsa kwa Womanga Tsamba v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Kuwongolera kwa Womanga Tsamba v2 {#site-builder-orchestration-v2}

Kuwongolera kwa Womanga Tsamba v2 (koyambitsidwa mu Gratis AI Agent v1.4.0) ndi injini yomwe imayendetsa kupanga mawebusayiti a magawo angapo. Mukapempha agent kuti "apange webusayiti ya malo odyera" kapena "apange portfolio yokhala ndi blog", orchestrator imagawa cholinga chachikulu chimenecho kukhala **dongosolo** lokhazikika, imapeza ma plugin ofunikira kuti akwaniritse, imachita sitepe iliyonse motsatizana, imatsatira kupita patsogolo, ndipo imadzichiritsa yokha ku zolakwika.

---

## Mmene Zimagwirira Ntchito {#how-it-works}

### 1. Kupanga Dongosolo {#1-plan-generation}

Agent ikalandira malangizo omanga tsamba, imayitana luso la `create_site_plan` kuti ipange **dongosolo la tsamba** la JSON. Dongosololi limafotokoza:

- **Cholinga** — zomwe tsamba lomalizidwa liyenera kuchita
- **Magawo** — magulu a masitepe omwe ali m'ndondomeko (mwachitsanzo _Kukhazikitsa_, _Mitundu ya Zomwe Zili_, _Kapangidwe_, _Zomwe Zili_)
- **Masitepe** — kuyitana luso payekha mkati mwa gawo lililonse
- **Zofunikira za plugin** — ma plugin omwe ayenera kukhala akugwira ntchito kuti masitepe ena ayende
- **Zobwerera m'mbuyo** — masitepe ena ngati sitepe yayikulu yalephera

**Chitsanzo cha dongosolo (chofupikitsidwa)**

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

### 2. Kupeza Plugin {#2-plugin-discovery}

Kuchita kusanayambe, orchestrator imasanthula `plugin_requirements` ya dongosololo ndikuwona ma plugin omwe akugwira kale ntchito. Kwa ma plugin omwe akusowa, imachita izi:

1. Imafufuza registry kudzera mu `recommend_plugin` kuti ipeze chofanana kwambiri
2. Imapempha agent kuti itsimikizire malangizowo
3. Imayambitsa kukhazikitsa ngati kwavomerezedwa (kapena ngati auto-install yayatsidwa mu zokonda)

Kulephera kupeza plugin sikupha dongosolo — orchestrator imalemba masitepe okhudzidwawo ngati `skipped` ndipo imapitiriza ndi gawo lotsala la dongosololo.

### 3. Kuchita Dongosolo {#3-plan-execution}

Orchestrator imayitana `execute_site_plan` ndi ID ya dongosolo. Kuchita kumapitirira gawo ndi gawo, sitepe ndi sitepe:

- **Maumboni a sitepe** (`__ref:` prefix) — masitepe angatchule zotuluka kuchokera ku masitepe am'mbuyomu. Mu chitsanzo pamwambapa, `__ref:create_menu.menu_id` imasinthidwa kukhala `menu_id` yobwezedwa ndi sitepe ya `create_menu`.
- **Masitepe ofanana nthawi imodzi** — masitepe mkati mwa gawo lomwelo omwe alibe kudalirana amatumizidwa nthawi imodzi pamene chizindikiro cha `parallel` chakhazikitsidwa.
- **Nthawi yomalira ya sitepe** — sitepe iliyonse ili ndi nthawi yake yomalira (yokhazikika: zokonda za `Ability Timeout`). Sitepe yomwe yatha nthawi imalembedwa kuti `failed` ndipo dongosolo limapitiriza.

### 4. Kutsatira Kupita Patsogolo {#4-progress-tracking}

Yitanani `get_plan_progress` nthawi iliyonse kuti muwone momwe kuchita kulili:

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

Ogwiritsa ntchito WP-CLI angathe kuyang'anira kupita patsogolo ndi:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Kuchira ku Zolakwika {#5-error-recovery}

Sitepe ikalephera, orchestrator imayang'ana sitepe ya **fallback** yofotokozedwa mu dongosolo:

- **Fallback ilipo** — sitepe ya fallback imayesedwa nthawi yomweyo. Ngati yapambana, kuchita kumapitirira. Ngati nayonso yalephera, sitepeyo imalembedwa kuti `failed` ndipo kuchita kumapitiriza ndi sitepe yotsatira.
- **Palibe fallback** — sitepe imalembedwa kuti `failed`. Masitepe osafunikira kwambiri amadumphidwa; masitepe ofunikira kwambiri (olembedwa `required: true`) amaimitsa gawo lomwe lilipo ndipo amayambitsa kuyesa kuchira pa mulingo wa gawo.

Agent imanena zolephera zonse mu chidule chomaliza cha dongosolo ndipo ingapereke masitepe othandizira pamanja pa zolakwika zosatheka kuchira.

---

## Maluso a Dongosolo la Tsamba {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Imapanga dongosolo la tsamba lokhazikika kuchokera ku kufotokoza cholinga m'chinenero chachibadwa.

**Ma parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Kufotokoza m'chinenero chachibadwa kwa webusayiti yomwe ikufunidwa |
| `style` | string | No | Zokonda za mawonekedwe: `minimal`, `bold`, `professional`, `playful`. Zokhazikika: agent imasankha potengera cholinga |
| `plugins` | array | No | Ma slug a plugin oti aphatikizidwe mu dongosolo. Orchestrator imawonjezera ma plugin ofunikira yokha. |
| `dry_run` | boolean | No | Ngati `true`, imabwezera JSON ya dongosolo popanda kuisunga kapena kuichita. Zokhazikika `false` |

**Zobwezera** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Imayamba kuchita dongosolo la tsamba lomwe linapangidwa kale.

**Ma parameter**

| Chizindikiro | Mtundu | Chofunika | Kufotokozera |
|---|---|---|---|
| `plan_id` | string | Yes | ID ya dongosolo loyenera kuyendetsedwa |
| `auto_install_plugins` | boolean | No | Ngati `true`, imayika yokha mapulagini ofunikira popanda kutsimikizira. Chokhazikika ndi `false` |
| `max_retries` | integer | No | Chiwerengero cha nthawi zobwerezeranso sitepe yomwe yalephera musanapitirire. Chokhazikika ndi `1` |

**Imabweza** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Imabweza momwe kuyendetsa dongosolo la tsamba kulili panopa.

**Zizindikiro**

| Chizindikiro | Mtundu | Chofunika | Kufotokozera |
|---|---|---|---|
| `plan_id` | string | Yes | ID ya dongosolo lofunsira |

**Imabweza** chinthu cha kupita patsogolo chomwe chafotokozedwa mu [Kutsatira Kupita Patsogolo](#4-progress-tracking) pamwambapa.

---

### `handle_plan_error` {#handleplanerror}

Imathetsa pamanja sitepe yomwe yalephera ndipo imayambitsanso kuyendetsa dongosolo kuchokera pa sitepe yotsatira. Gwiritsani ntchito izi pamene kubwezeretsa kokha sikunatheke ndipo mukufuna kulowererapo.

**Zizindikiro**

| Chizindikiro | Mtundu | Chofunika | Kufotokozera |
|---|---|---|---|
| `plan_id` | string | Yes | ID ya dongosolo |
| `step_id` | string | Yes | ID ya sitepe yomwe yalephera |
| `resolution` | string | Yes | Chimodzi mwa `skip` (dumpha ndikupitiriza), `retry` (bwerezanso sitepeyo nthawi yomweyo), kapena `mark_done` (iona ngati yapambana popanda kuyiyendetsanso) |

**Imabweza** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Kuyerekezera v1 ndi v2 {#comparing-v1-and-v2}

| Mbali | v1 | v2 |
|---|---|---|
| Madongosolo a magawo ambiri | No | Yes |
| Maumboni a zotuluka pa sitepe (`__ref:`) | No | Yes |
| Kupeza mapulagini | Pamanja | Kokha |
| API yotsatira kupita patsogolo | No | Yes |
| Kubwezeretsa zolakwika | Kulephera-ndi-kuima | Njira ina + pitiriza |
| Kuyendetsa masitepe limodzi | No | Yes (kusankha pa gawo lililonse) |
| Malamulo a dongosolo a WP-CLI | No | Yes |
| Kuphatikiza benchmark | No | Yes (`q-restaurant-website`) |

---

## Malamulo a Dongosolo a WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Imapanga dongosolo la tsamba kuchokera ku kufotokozera kwa cholinga.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Imayendetsa dongosolo lomwe linapangidwa kale.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Imawonetsa kupita patsogolo kwaposachedwa kwa dongosolo lomwe likuyendetsedwa kapena lomalizidwa.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Imalemba madongosolo onse a tsamba (oyembekezera, omwe akuyenda, ndi omalizidwa).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Imabwezeretsa dongosolo lomwe lalephera kukhala `pending` kuti lithe kuyendetsedwanso kuchokera pachiyambi.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
