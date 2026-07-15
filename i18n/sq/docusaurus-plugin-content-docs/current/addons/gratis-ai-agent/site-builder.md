---
title: Orkestrimi i Ndërtuesit të Faqes v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orkestrimi i Site Builder v2

Orkestrimi i Site Builder v2 (i prezantuar në Gratis AI Agent v1.4.0) është motori që fuqizon krijimin e faqeve të internetit me shumë hapa. Kur i kërkoni agentit të "ndërtojë një faqe interneti për restorant" ose të "krijojë një portofol me blog", orkestruesi e ndan atë qëllim të nivelit të lartë në një **plan** të strukturuar, zbulon plugin-et e nevojshme për ta përmbushur, ekzekuton çdo hap me radhë, gjurmon progresin dhe rikuperohet nga gabimet në mënyrë autonome.

---

## Si Funksionon {#how-it-works}

### 1. Gjenerimi i Planit {#1-plan-generation}

Kur agenti merr një udhëzim për ndërtim faqeje, ai thërret aftësinë `create_site_plan` për të prodhuar një **plan faqeje** JSON. Plani përshkruan:

- **Qëllimi** — çfarë duhet të bëjë faqja e përfunduar
- **Fazat** — grupe të renditura hapash (p.sh. _Konfigurimi_, _Llojet e Përmbajtjes_, _Dizajni_, _Përmbajtja_)
- **Hapat** — thirrje individuale aftësish brenda çdo faze
- **Kërkesat për plugin** — plugin-e që duhet të jenë aktive që disa hapa të ekzekutohen
- **Alternativat** — hapa alternativë nëse një hap kryesor dështon

**Shembull plani (i shkurtuar)**

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

### 2. Zbulimi i Plugin-eve {#2-plugin-discovery}

Para se të fillojë ekzekutimi, orkestruesi skanon `plugin_requirements` të planit dhe kontrollon cilat plugin-e janë tashmë aktive. Për plugin-et që mungojnë, ai:

1. Kërkon në regjistër përmes `recommend_plugin` për përputhjen më të mirë
2. I kërkon agentit të konfirmojë rekomandimin
3. Nis instalimin nëse miratohet (ose nëse instalimi automatik është aktivizuar në cilësime)

Dështimet në zbulimin e plugin-eve nuk janë fatale — orkestruesi i shënon hapat e prekur si `skipped` dhe vazhdon me pjesën tjetër të planit.

### 3. Ekzekutimi i Planit {#3-plan-execution}

Orkestruesi thërret `execute_site_plan` me ID-në e planit. Ekzekutimi vazhdon fazë pas faze, hap pas hapi:

- **Referencat e hapave** (prefiksi `__ref:`) — hapat mund t’u referohen daljeve nga hapat e mëparshëm. Në shembullin më sipër, `__ref:create_menu.menu_id` zgjidhet në `menu_id` të kthyer nga hapi `create_menu`.
- **Hapa paralelë** — hapat brenda së njëjtës fazë që nuk kanë ndërvarësi dërgohen njëkohësisht kur flamuri `parallel` është vendosur.
- **Skadimi i hapit** — çdo hap ka një afat skadimi individual (parazgjedhja: cilësimi `Ability Timeout`). Një hap që skadon shënohet `failed` dhe plani vazhdon.

### 4. Gjurimi i Progresit {#4-progress-tracking}

Thërrisni `get_plan_progress` në çdo kohë për të kontrolluar statusin e ekzekutimit:

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

Përdoruesit e WP-CLI mund ta monitorojnë progresin me:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Rikuperimi nga Gabimet {#5-error-recovery}

Kur një hap dështon, orkestruesi kontrollon për një hap **alternativ** të përcaktuar në plan:

- **Alternativë e disponueshme** — hapi alternativ provohet menjëherë. Nëse ka sukses, ekzekutimi vazhdon. Nëse dështon gjithashtu, hapi shënohet `failed` dhe ekzekutimi vazhdon me hapin tjetër.
- **Pa alternativë** — hapi shënohet `failed`. Hapat jo kritikë anashkalohen; hapat kritikë (të shënuar `required: true`) ndalojnë fazën aktuale dhe nisin një përpjekje rikuperimi në nivel faze.

Agenti raporton të gjitha dështimet në përmbledhjen përfundimtare të planit dhe mund të sugjerojë hapa manualë korrigjimi për gabime të parikuperueshme.

---

## Aftësitë e Planit të Faqes {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Gjeneron një plan të strukturuar faqeje nga një përshkrim qëllimi në gjuhë natyrore.

**Parametrat**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Përshkrim në gjuhë natyrore i faqes së internetit të dëshiruar |
| `style` | string | No | Preferencë e stilit vizual: `minimal`, `bold`, `professional`, `playful`. Parazgjedhja: agenti zgjedh bazuar në qëllim |
| `plugins` | array | No | Slug-e plugin-esh për t’u përfshirë në plan. Orkestruesi shton automatikisht plugin-et e kërkuara. |
| `dry_run` | boolean | No | Nëse `true`, kthen JSON-in e planit pa e ruajtur ose ekzekutuar. Parazgjedhja `false` |

**Kthen** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Fillon ekzekutimin e një plani faqeje të gjeneruar më parë.

**Parametrat**

| Parametri | Tipi | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `plan_id` | string | Po | ID e planit për t'u ekzekutuar |
| `auto_install_plugins` | boolean | Jo | Nëse `true`, instalon automatikisht plugins e kërkuara pa konfirmim. Parazgjedhja `false` |
| `max_retries` | integer | Jo | Numri i herëve për të riprovuar një hap të dështuar përpara se të vazhdohet më tej. Parazgjedhja `1` |

**Kthen** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Kthen statusin aktual të ekzekutimit të një plani site.

**Parametrat**

| Parametri | Tipi | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `plan_id` | string | Po | ID e planit për t'u pyetur |

**Kthen** objektin e progresit të përshkruar te [Gjurmimi i progresit](#4-progress-tracking) më sipër.

---

### `handle_plan_error` {#handleplanerror}

Zgjidh manualisht një hap të dështuar dhe rifillon ekzekutimin e planit nga hapi pasues. Përdoreni këtë kur rikuperimi automatik nuk ishte i mundur dhe dëshironi të ndërhyni.

**Parametrat**

| Parametri | Tipi | E detyrueshme | Përshkrimi |
|---|---|---|---|
| `plan_id` | string | Po | ID e planit |
| `step_id` | string | Po | ID e hapit të dështuar |
| `resolution` | string | Po | Një nga `skip` (kapërce dhe vazhdo), `retry` (riprovo hapin menjëherë), ose `mark_done` (trajtoje si të suksesshëm pa e ekzekutuar përsëri) |

**Kthen** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Krahasimi i v1 dhe v2 {#comparing-v1-and-v2}

| Veçoria | v1 | v2 |
|---|---|---|
| Plane me shumë faza | Jo | Po |
| Referenca të daljes së hapit (`__ref:`) | Jo | Po |
| Zbulimi i plugin-eve | Manual | Automatik |
| API për gjurmimin e progresit | Jo | Po |
| Rikuperimi nga gabimet | Dështim-dhe-ndalim | Rezervë + vazhdo |
| Ekzekutim paralel i hapave | Jo | Po (me zgjedhje për fazë) |
| Komanda plani WP-CLI | Jo | Po |
| Integrim benchmark | Jo | Po (`q-restaurant-website`) |

---

## Komandat e planit WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Gjeneron një plan site nga një përshkrim qëllimi.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Ekzekuton një plan të gjeneruar më parë.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Shfaq progresin aktual për një plan që po ekzekutohet ose të përfunduar.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Liston të gjitha planet e site (në pritje, në progres dhe të përfunduara).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Rivendos një plan të dështuar në `pending` që të mund të riekzekutohet nga fillimi.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
