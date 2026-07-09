---
title: Kgokahanyo ea Sehahi sa Saete v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Tsamaiso ya Kaho ya Sebaka v2

Tsamaiso ya Kaho ya Sebaka v2 (e hlahisitsweng ho Gratis AI Agent v1.4.0) ke enjine e matlafatsang ho bopa webosaete ka mehato e mengata. Ha o kopa agent hore e "hahe webosaete ya resturante" kapa "e bope potefolio e nang le blog", orchestrator e arola sepheo seo sa boemo bo hodimo hore e be **moralo** o hlophisitsweng, e fumana di-plugin tse hlokahalang ho se phethahatsa, e phetha mohato ka mong ka tatellano, e sala morao tswelopele, mme e itokisa diphosong ka boikemelo.

---

## Kamoo e Sebetsang Kateng

### 1. Ho Hlahisa Moralo

Ha agent e amohela taelo ya ho aha sebaka, e bitsa bokgoni ba `create_site_plan` ho hlahisa **moralo wa sebaka** wa JSON. Moralo o hlalosa:

- **Sepheo** — seo sebaka se phethilweng se lokelang ho se etsa
- **Mekhahlelo** — dihlopha tsa mehato tse hlophisitsweng (mohl. _Tlhophiso_, _Mefuta ya Dikahare_, _Moralo_, _Dikahare_)
- **Mehato** — mehala ya bokgoni ka bonngwe kahara mokhahlelo ka mong
- **Ditlhoko tsa plugin** — di-plugin tse lokelang ho sebetsa hore mehato e itseng e sebetse
- **Mekgwa ya tshohanyetso** — mehato e meng haeba mohato wa sehlooho o hloleha

**Mohlala wa moralo (o kgutsufaditsweng)**

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

### 2. Ho Fumana Plugin

Pele phethahatso e qala, orchestrator e sekaseka `plugin_requirements` tsa moralo mme e hlahloba hore na ke di-plugin dife tse seng di sebetsa. Bakeng sa di-plugin tse haellang, e:

1. Batla ho registry ka `recommend_plugin` bakeng sa papiso e molemo ka ho fetisisa
2. Kopa agent ho netefatsa kgothaletso
3. Qalisa ho kenya haeba ho dumellwa (kapa haeba ho ikenya ka boiketsetso ho butswe ho disetting)

Ho hloleha ha ho fumana plugin ha ho fedise tshebetso — orchestrator e tshwaya mehato e amehileng e le `skipped` mme e tswela pele ka karolo e setseng ya moralo.

### 3. Phethahatso ya Moralo

Orchestrator e bitsa `execute_site_plan` ka ID ya moralo. Phethahatso e tswela pele mokhahlelo ka mokhahlelo, mohato ka mohato:

- **Ditshupiso tsa mohato** (sehlongwapele sa `__ref:`) — mehato e ka supa diphetho tse tswang mehatong e fetileng. Mohlaleng o ka hodimo, `__ref:create_menu.menu_id` e rarollwa ho `menu_id` e kgutlisitsweng ke mohato wa `create_menu`.
- **Mehato e tsamaeang ka nako e le nngwe** — mehato e kahara mokhahlelo o le mong e se nang dikamano tsa ho ithekga e romelwa ka nako e le nngwe ha folaga ya `parallel` e setilwe.
- **Nako ya ho felloa ke mohato** — mohato ka mong o na le nako ya wona ya ho felloa (ya kamehla: setting ya `Ability Timeout`). Mohato o felletsweng ke nako o tshwauwa `failed` mme moralo o tswela pele.

### 4. Ho Sala Tswelopele Morao

Bitsa `get_plan_progress` neng kapa neng ho hlahloba boemo ba phethahatso:

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

Basebedisi ba WP-CLI ba ka lekola tswelopele ka:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Ho Itokisa Diphosong

Ha mohato o hloleha, orchestrator e hlahloba mohato wa **mokgwa wa tshohanyetso** o hlalositsweng morerong:

- **Mokgwa wa tshohanyetso o teng** — mohato wa mokgwa wa tshohanyetso o lekwang hanghang. Haeba o atleha, phethahatso e tswela pele. Haeba le wona o hloleha, mohato o tshwauwa `failed` mme phethahatso e tswela pele ka mohato o latelang.
- **Ha ho mokgwa wa tshohanyetso** — mohato o tshwauwa `failed`. Mehato e seng ya bohlokwa e a tlolwa; mehato ya bohlokwa (e tshwailweng `required: true`) e emisa mokhahlelo wa jwale mme e qala teko ya ho itokisa boemong ba mokhahlelo.

Agent e tlaleha ho hloleha hohle kakaretsong ya ho qetela ya moralo mme e ka sisinya mehato ya tokiso ya letsoho bakeng sa diphoso tse sa kgoneng ho lokiswa.

---

## Bokgoni ba Moralo wa Sebaka

### `create_site_plan`

E hlahisa moralo wa sebaka o hlophisitsweng ho tswa tlhalosong ya sepheo ka puo ya tlhaho.

**Dipharaemitha**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Tlhaloso ka puo ya tlhaho ya webosaete e lakatsehang |
| `style` | string | No | Kgetho ya setaele sa pono: `minimal`, `bold`, `professional`, `playful`. Ya kamehla: agent e kgetha ho ya ka sepheo |
| `plugins` | array | No | Di-slug tsa plugin tse lokelang ho kenyeletswa morerong. Orchestrator e eketsa di-plugin tse hlokahalang ka boiketsetso. |
| `dry_run` | boolean | No | Haeba e le `true`, e kgutlisa JSON ya moralo ntle le ho o boloka kapa ho o phetha. Ya kamehla ke `false` |

**E kgutlisa** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

E qala ho phetha moralo wa sebaka o hlahisitsweng pejana.

**Dipharaemitha**

| Paramethara | Mofuta | E a hlokahala | Tlhaloso |
|---|---|---|---|
| `plan_id` | string | Ee | ID ya moralo o lokelang ho phethahatswa |
| `auto_install_plugins` | boolean | Che | Haeba e le `true`, e kenya dikeketso tse hlokahalang ka boiketsetso ntle le netefatso. Ya kamehla ke `false` |
| `max_retries` | integer | Che | Palo ya makgetlo a ho leka hape mohato o hlolehileng pele ho tswelwa pele. Ya kamehla ke `1` |

**E kgutlisa** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

E kgutlisa boemo ba hajwale ba phethahatso ya moralo wa saete.

**Diparamethara**

| Paramethara | Mofuta | E a hlokahala | Tlhaloso |
|---|---|---|---|
| `plan_id` | string | Ee | ID ya moralo eo o batlang ho e botsa |

**E kgutlisa** ntho ya kgatelopele e hlalositsweng ho [Ho Latedisa Kgatelopele](#4-progress-tracking) ka hodimo.

---

### `handle_plan_error`

E rarolla ka letsoho mohato o hlolehileng mme e tsosolosa phethahatso ya moralo ho tloha mohato o latelang. Sebedisa sena ha ho hlaphoheloa ka boiketsetso ho ne ho sa kgonehe mme o batla ho kena dipakeng.

**Diparamethara**

| Paramethara | Mofuta | E a hlokahala | Tlhaloso |
|---|---|---|---|
| `plan_id` | string | Ee | ID ya moralo |
| `step_id` | string | Ee | ID ya mohato o hlolehileng |
| `resolution` | string | Ee | E nngwe ya `skip` (tlola mme o tswele pele), `retry` (leka mohato hape hanghang), kapa `mark_done` (e nke e atlehile ntle le ho e tsamaisa hape) |

**E kgutlisa** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Ho bapisa v1 le v2

| Karolo | v1 | v2 |
|---|---|---|
| Meralo ya mekgahlelo e mengata | Che | Ee |
| Ditshupiso tsa sephetho sa mohato (`__ref:`) | Che | Ee |
| Ho sibollwa ha dikeketso | Ka letsoho | Ka boiketsetso |
| API ya ho latedisa kgatelopele | Che | Ee |
| Ho hlaphoheloa diphosong | Hloleha-ebe-o-emisa | Mokgwa wa tlatsetso + tswela pele |
| Phethahatso ya mehato ka nako e le nngwe | Che | Ee (ho kgetha ho kenella karolong ka nngwe) |
| Ditaelo tsa moralo tsa WP-CLI | Che | Ee |
| Kopanyo ya benchmark | Che | Ee (`q-restaurant-website`) |

---

## Ditaelo tsa moralo tsa WP-CLI

### `wp gratis-ai-agent plan create`

E hlahisa moralo wa saete ho tswa tlhalosong ya sepheo.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

E phethahatsa moralo o neng o se o hlahisitswe pele.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

E bontsha kgatelopele ya hajwale bakeng sa moralo o ntseng o phethahatswa kapa o phethilweng.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

E thathamisa meralo yohle ya saete (e emetseng, e ntseng e tswela pele, le e phethilweng).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

E seta botjha moralo o hlolehileng hore e be `pending` e le hore o ka phethahatswa hape ho tloha qalong.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
