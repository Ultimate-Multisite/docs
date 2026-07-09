---
title: Isku-duwidda Dhisaha Goobta v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Isku-dubaridka Site Builder v2

Isku-dubaridka Site Builder v2 (lagu soo bandhigay Gratis AI Agent v1.4.0) waa matoorka awood siiya abuurista website-ka ee tallaabooyin badan. Marka aad agent-ka ka codsato inuu "dhiso website makhaayad" ama "abuuro portfolio leh blog", orchestrator-ku wuxuu yoolkaas heerka sare ah u kala jebinayaa **qorshe** habaysan, wuxuu ogaadaa plugins-ka loo baahan yahay si loo fuliyo, tallaabo kasta ayuu si taxane ah u fuliyaa, horumarka ayuu la socdaa, khaladaadkana si iskiis ah ayuu uga soo kabtaa.

---

## Sida Ay U Shaqeyso

### 1. Abuurista Qorshaha

Marka agent-ku helo tilmaam dhisidda site-ka ah, wuxuu wacaa awoodda `create_site_plan` si uu u soo saaro JSON **qorshe site**. Qorshuhu wuxuu qeexayaa:

- **Yool** — waxa site-ka dhammaaday laga rabo inuu qabto
- **Marxalado** — kooxo tallaabooyin ah oo nidaamsan (tusaale _Dejinta_, _Noocyada Nuxurka_, _Naqshad_, _Nuxur_)
- **Tallaabooyin** — wicitaanno awood oo gaar-gaar ah gudaha marxalad kasta
- **Shuruudaha plugin-ka** — plugins ay tahay inay firfircoon yihiin si tallaabooyin gaar ah u socdaan
- **Beddello** — tallaabooyin kale haddii tallaabada koowaad fashilanto

**Qorshe tusaale ah (la soo gaabiyey)**

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

### 2. Ogaanshaha Plugin-ka

Ka hor inta fulintu bilaaban, orchestrator-ku wuxuu baarayaa `plugin_requirements`-ka qorshaha wuxuuna hubinayaa plugins-ka hore u firfircoon. Plugins-ka maqan, wuxuu:

1. Ka raadiyaa diiwaanka isaga oo adeegsanaya `recommend_plugin` si uu u helo kuwa ugu habboon
2. Wuxuu agent-ka weydiiyaa inuu xaqiijiyo talada
3. Wuxuu kiciyaa rakibidda haddii la oggolaado (ama haddii rakibid otomaatig ah laga hawlgeliyey settings-ka)

Fashilka ogaanshaha plugin-ku ma aha mid dilaa ah — orchestrator-ku tallaabooyinka ay saameeyeen wuxuu u calaamadeeyaa `skipped` wuxuuna sii wadaa inta kale ee qorshaha.

### 3. Fulinta Qorshaha

Orchestrator-ku wuxuu wacaa `execute_site_plan` isagoo adeegsanaya aqoonsiga qorshaha. Fulintu waxay u socotaa marxalad-marxalad, tallaabo-tallaabo:

- **Tixraacyada tallaabada** (`__ref:` prefix) — tallaabooyinku waxay tixraaci karaan natiijooyinka tallaabooyin hore. Tusaalaha kore, `__ref:create_menu.menu_id` waxaa loo xallinayaa `menu_id`-ga ay soo celisay tallaabada `create_menu`.
- **Tallaabooyin is-barbar socda** — tallaabooyinka isla marxaladda ku jira ee aan lahayn isku-tiirsanaan waxaa si isku mar ah loo diraa marka calanka `parallel` la dejiyo.
- **Waqtiga-dhaafka tallaabada** — tallaabo kasta waxay leedahay waqti-dhaaf gaar ah (asal: settings-ka `Ability Timeout`). Tallaabo waqtigeedu dhammaado waxaa loo calaamadeeyaa `failed`, qorshuhuna wuu sii socdaa.

### 4. La-socodka Horumarka

Wac `get_plan_progress` waqti kasta si aad u hubiso xaaladda fulinta:

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

Isticmaalayaasha WP-CLI waxay horumarka kula socon karaan:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Ka-soo-kabashada Khaladka

Marka tallaabo fashilanto, orchestrator-ku wuxuu hubiyaa tallaabo **fallback** ah oo lagu qeexay qorshaha:

- **Fallback waa la heli karaa** — tallaabada fallback-ka ah isla markiiba ayaa la isku dayaa. Haddii ay guulaysato, fulintu way sii socotaa. Haddii ay iyaduna fashilanto, tallaabada waxaa loo calaamadeeyaa `failed`, fulintuna waxay sii socotaa tallaabada xigta.
- **Fallback ma jiro** — tallaabada waxaa loo calaamadeeyaa `failed`. Tallaabooyinka aan muhiimka ahayn waa la dhaafaa; tallaabooyinka muhiimka ah (lagu calaamadeeyey `required: true`) waxay joojiyaan marxaladda hadda jirta waxayna kiciyaan isku-day ka-soo-kabasho heer-marxaladeed ah.

Agent-ku wuxuu dhammaan fashillada ku soo sheegaa soo-koobidda ugu dambaysa ee qorshaha, wuxuuna soo jeedin karaa tallaabooyin sixid gacanta ah oo loogu talagalay khaladaadka aan laga soo kaban karin.

---

## Awoodaha Qorshaha Site-ka

### `create_site_plan`

Waxay ka abuurtaa qorshe site oo habaysan sharaxaad yool oo luqad dabiici ah ku qoran.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Sharaxaad luqad dabiici ah oo ku saabsan website-ka la doonayo |
| `style` | string | No | Doorbidka qaabka muuqaalka: `minimal`, `bold`, `professional`, `playful`. Asal: agent-ku wuxuu doortaa iyadoo lagu salaynayo yoolka |
| `plugins` | array | No | Slugs-ka plugin-ka ee lagu darayo qorshaha. Orchestrator-ku plugins-ka loo baahan yahay si otomaatig ah ayuu ugu daraa. |
| `dry_run` | boolean | No | Haddii `true`, wuxuu soo celiyaa JSON-ka qorshaha isaga oo aan kaydin ama fulin. Asal `false` |

**Waxay soo celisaa** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Waxay bilaabaysaa fulinta qorshe site oo hore loo soo saaray.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID-ga qorshaha la fulinayo |
| `auto_install_plugins` | boolean | No | Haddii `true`, si otomaatig ah ayuu u rakibaa plugins-ka loo baahan yahay iyadoo aan xaqiijin la weydiin. Default `false` |
| `max_retries` | integer | No | Tirada jeer ee dib loogu dayayo tallaabo fashilantay ka hor inta aan la sii socon. Default `1` |

**Soo celiyaa** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Soo celiyaa xaaladda fulinta hadda ee qorshaha site.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID-ga qorshaha la weydiinayo |

**Soo celiyaa** shayga horumarka ee lagu sharraxay [Raad-raaca Horumarka](#4-progress-tracking) ee kore.

---

### `handle_plan_error`

Gacanta ayuu u xalliyaa tallaabo fashilantay wuxuuna dib uga bilaabaa fulinta qorshaha tallaabada xigta. Isticmaal tan marka soo-kabashada otomaatiga ahi aysan suurtagal ahayn oo aad rabto inaad farageliso.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID-ga qorshaha |
| `step_id` | string | Yes | ID-ga tallaabada fashilantay |
| `resolution` | string | Yes | Mid ka mid ah `skip` (ka bood oo sii wad), `retry` (isla markiiba dib ugu day tallaabada), ama `mark_done` (u tixgeli inay guulaysatay adigoon mar kale socodsiin) |

**Soo celiyaa** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Isbarbardhigga v1 iyo v2

| Astaanta | v1 | v2 |
|---|---|---|
| Qorshayaal wejiyo badan leh | Maya | Haa |
| Tixraacyada wax-soo-saarka tallaabada (`__ref:`) | Maya | Haa |
| Helitaanka plugin | Gacan-ku-samayn | Otomaatig |
| API-ga raad-raaca horumarka | Maya | Haa |
| Soo-kabashada khaladka | Fashil-oo-joogso | Beddel kale + sii wad |
| Fulinta tallaabooyin isbarbar socda | Maya | Haa (ikhtiyaar wejiba) |
| Amarada qorshaha WP-CLI | Maya | Haa |
| Isdhexgalka benchmark | Maya | Haa (`q-restaurant-website`) |

---

## Amarada Qorshaha WP-CLI

### `wp gratis-ai-agent plan create`

Waxay ka dhalisaa qorshe site sharraxaad yool.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Waxay fulisaa qorshe hore loo sameeyay.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Waxay muujisaa horumarka hadda ee qorshe socda ama dhammaaday.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Waxay taxdaa dhammaan qorshayaasha site (sugaya, socda, iyo dhammaaday).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Waxay dib ugu celisaa qorshe fashilmay `pending` si dib looga fulin karo bilowga.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
