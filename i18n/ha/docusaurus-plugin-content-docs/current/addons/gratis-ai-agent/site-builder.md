---
title: Tsarawa da Gudanar da Mai Gina Shafin Yanar Gizo v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (wanda aka gabatar a Gratis AI Agent v1.4.0) shi ne injin da ke ba da ƙarfin ƙirƙirar gidan yanar gizo mai matakai da yawa. Lokacin da ka nemi agent ya "gina gidan yanar gizo na gidan abinci" ko "ƙirƙiri portfolio tare da blog", orchestrator yana raba wannan babban buri zuwa **tsari** mai tsari, yana gano plugins da ake buƙata don cika shi, yana aiwatar da kowane mataki a jere, yana bin diddigin ci gaba, kuma yana murmurewa daga kurakurai kai tsaye.

---

## Yadda Yake Aiki

### 1. Samar da Tsari

Lokacin da agent ya karɓi umarnin gina site, yana kiran ƙwarewar `create_site_plan` don samar da JSON **tsarin site**. Tsarin yana bayyana:

- **Buri** — abin da site ɗin da aka kammala ya kamata ya yi
- **Matakai** — rukunan matakai masu jeri (misali _Saitawa_, _Nau'ikan Abun ciki_, _Zane_, _Abun ciki_)
- **Matakai ƙanana** — kiran ƙwarewa guda-guda a cikin kowane mataki
- **Bukatun plugin** — plugins da dole su kasance masu aiki don wasu matakai su gudana
- **Madadin mafita** — matakai na daban idan babban mataki ya gaza

**Misalin tsari (an taƙaita)**

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

### 2. Gano Plugin

Kafin aiwatarwa ya fara, orchestrator yana duba `plugin_requirements` na tsarin kuma yana bincika waɗanne plugins ne suka riga suka kasance masu aiki. Ga plugins da suka ɓace, yana:

1. Bincika registry ta `recommend_plugin` don mafi dacewa
2. Sa agent ya tabbatar da shawarar
3. Tada shigarwa idan an amince (ko idan an kunna auto-install a cikin saituna)

Gazawar gano plugin ba ta da kisa — orchestrator yana yi wa matakan da abin ya shafa alama da `skipped` kuma yana ci gaba da sauran tsarin.

### 3. Aiwatar da Tsari

Orchestrator yana kiran `execute_site_plan` tare da ID na tsarin. Aiwatarwa yana gudana mataki-bayan-mataki, ƙaramin-mataki-bayan-ƙaramin-mataki:

- **Nassoshin mataki** (prefix `__ref:`) — matakai na iya yin nuni da sakamako daga matakan baya. A misalin da ke sama, `__ref:create_menu.menu_id` ana warware shi zuwa `menu_id` da matakin `create_menu` ya dawo da shi.
- **Matakai na lokaci guda** — matakai a cikin mataki ɗaya da ba su da dogaro da juna ana tura su a lokaci guda idan an saita alamar `parallel`.
- **Ƙarewar lokacin mataki** — kowane mataki yana da iyakar lokacinsa na kansa (tsoho: saitin `Ability Timeout`). Matakin da lokacinsa ya ƙare ana yi masa alama `failed` kuma tsarin yana ci gaba.

### 4. Bibiyar Ci gaba

Kira `get_plan_progress` a kowane lokaci don duba matsayin aiwatarwa:

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

Masu amfani da WP-CLI na iya sa ido kan ci gaba da:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Farfadowa daga Kuskure

Lokacin da mataki ya gaza, orchestrator yana duba ko akwai matakin **madadin mafita** da aka ayyana a cikin tsarin:

- **Akwai madadin mafita** — ana gwada matakin madadin nan take. Idan ya yi nasara, aiwatarwa yana ci gaba. Idan shi ma ya gaza, ana yi wa matakin alama `failed` kuma aiwatarwa yana ci gaba da mataki na gaba.
- **Babu madadin mafita** — ana yi wa matakin alama `failed`. Ana tsallake matakan da ba su da muhimmanci; matakai masu muhimmanci (da aka yi wa alama `required: true`) suna dakatar da matakin yanzu kuma suna tayar da ƙoƙarin farfadowa a matakin mataki.

Agent yana bayar da rahoton duk gazawa a cikin taƙaitaccen tsarin ƙarshe kuma yana iya ba da shawarar matakan gyara da hannu ga kurakuran da ba za a iya murmurewa daga gare su ba.

---

## Ƙwarewar Tsarin Site

### `create_site_plan`

Yana samar da tsarin site mai tsari daga bayanin buri a harshen halitta.

**Sigogi**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Bayanin harshen halitta na gidan yanar gizon da ake so |
| `style` | string | No | Zaɓin salon gani: `minimal`, `bold`, `professional`, `playful`. Tsoho: agent yana zaɓa bisa ga burin |
| `plugins` | array | No | Slugs na plugin da za a haɗa a cikin tsarin. Orchestrator yana ƙara plugins da ake buƙata kai tsaye. |
| `dry_run` | boolean | No | Idan `true`, yana dawo da JSON na tsarin ba tare da adanawa ko aiwatar da shi ba. Tsoho `false` |

**Yana dawo da** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Yana fara aiwatar da tsarin site da aka samar a baya.

**Sigogi**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID na shirin da za a aiwatar |
| `auto_install_plugins` | boolean | No | Idan `true`, yana shigar da plugins da ake buƙata ta atomatik ba tare da tabbatarwa ba. Tsoho `false` |
| `max_retries` | integer | No | Yawan lokutan sake gwada mataki da ya gaza kafin a ci gaba. Tsoho `1` |

**Yana dawo da** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Yana dawo da matsayin aiwatarwa na yanzu na shirin shafi.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID na shirin da za a tambaya |

**Yana dawo da** abin progress da aka bayyana a cikin [Bibiyar Ci gaba](#4-progress-tracking) a sama.

---

### `handle_plan_error`

Yana warware matakin da ya gaza da hannu kuma yana ci gaba da aiwatar da shiri daga mataki na gaba. Yi amfani da wannan lokacin da farfadowa ta atomatik ba ta yiwu ba kuma kana son shiga tsakani.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID na shiri |
| `step_id` | string | Yes | ID na matakin da ya gaza |
| `resolution` | string | Yes | Ɗaya daga cikin `skip` (tsallake ka ci gaba), `retry` (sake gwada matakin nan take), ko `mark_done` (ɗauka a matsayin ya yi nasara ba tare da sake gudanarwa ba) |

**Yana dawo da** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Kwatanta v1 da v2

| Fasali | v1 | v2 |
|---|---|---|
| Shirye-shirye masu matakai da yawa | A'a | I |
| Nassoshin fitarwar mataki (`__ref:`) | A'a | I |
| Gano plugin | Da hannu | Ta atomatik |
| API na bibiyar ci gaba | A'a | I |
| Farfadowa daga kuskure | Gaza-kuma-tsaya | Madadin hanya + ci gaba |
| Aiwatar da matakai a lokaci guda | A'a | I (zaɓi ne a kowane lokaci) |
| Umarnin shiri na WP-CLI | A'a | I |
| Haɗin benchmark | A'a | I (`q-restaurant-website`) |

---

## Umarnin Shiri na WP-CLI

### `wp gratis-ai-agent plan create`

Yana samar da shirin shafi daga bayanin buri.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Yana aiwatar da shirin da aka riga aka samar.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Yana nuna ci gaban yanzu na shirin da ake aiwatarwa ko wanda aka kammala.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Yana lissafa dukkan shirye-shiryen shafi (masu jiran aiki, masu gudana, da waɗanda aka kammala).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Yana sake saita shirin da ya gaza zuwa `pending` domin a iya sake aiwatar da shi daga farko.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
