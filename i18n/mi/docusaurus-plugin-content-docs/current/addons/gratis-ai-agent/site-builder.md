---
title: Whakaruruku Kaihanga Pae v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Ko Site Builder Orchestration v2 (i whakaurua ki Gratis AI Agent v1.4.0) te pūkaha e whakakaha ana i te waihanga paetukutuku ā-taahiraa maha. Ina tono koe i te agent kia "hangaia he paetukutuku wharekai", kia "waihangatia he kohinga mahi me tētahi rangitaki" rānei, ka wāwāhia e te orchestrator taua whāinga taumata-runga hei **mahere** hanganga, ka kimi i ngā plugins e hiahiatia ana hei whakatutuki, ka whakahaere i ia taahiraa ā-raupapa, ka whai i te ahunga whakamua, ā, ka whakaora aunoa i ngā hapa.

---

## Me Pēhea Te Mahi {#how-it-works}

### 1. Te Waihanga Mahere {#1-plan-generation}

Ina whiwhi te agent i tētahi tohutohu hanga pae, ka karanga ia i te āheinga `create_site_plan` hei whakaputa i tētahi **mahere pae** JSON. Ka whakaahua te mahere i:

- **Whāinga** — he aha te mahi mā te pae kua oti
- **Wāhanga** — ngā rōpū taahiraa kua raupapatia (hei tauira _Whakarite_, _Momo Ihirangi_, _Hoahoa_, _Ihirangi_)
- **Taahiraa** — ngā karanga āheinga takitahi i roto i ia wāhanga
- **Whakaritenga plugin** — ngā plugins me kaha mō ētahi taahiraa kia rere
- **Kōwhiringa kē** — ngā taahiraa kē mēnā ka rahua tētahi taahiraa matua

**Tauira mahere (kua whakarāpopototia)**

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

### 2. Te Kimi Plugin {#2-plugin-discovery}

I mua i te tīmatanga o te whakahaere, ka matawai te orchestrator i ngā `plugin_requirements` o te mahere, ā, ka tirohia ko ēhea plugins kua kaha kē. Mō ngā plugins e ngaro ana, ka:

1. Rapu i te rēhita mā `recommend_plugin` mō te ōritenga pai rawa
2. Tono i te agent kia whakaū i te tūtohutanga
3. Whakaoho i te tāutanga mēnā ka whakaaetia (mēnā rānei kua whakahohea te tāuta-aunoa i ngā tautuhinga)

Ehara ngā rahunga kimi plugin i te mea whakamutu — ka tohu te orchestrator i ngā taahiraa kua pāngia hei `skipped`, ā, ka haere tonu me te toenga o te mahere.

### 3. Te Whakahaere Mahere {#3-plan-execution}

Ka karanga te orchestrator i `execute_site_plan` me te ID mahere. Ka ahu te whakahaere ā-wāhanga, ā-taahiraa:

- **Tohutoro taahiraa** (`__ref:` prefix) — ka taea e ngā taahiraa te tohutoro i ngā putanga mai i ngā taahiraa o mua. I te tauira i runga ake nei, ka whakatauria a `__ref:create_menu.menu_id` ki te `menu_id` i whakahokia mai e te taahiraa `create_menu`.
- **Taahiraa whakarara** — ko ngā taahiraa i roto i te wāhanga kotahi kāore he whakawhirinakitanga ki a rātou anō, ka tukuna ngātahitia ina tautuhia te haki `parallel`.
- **Wāhiki taahiraa** — he wāhiki takitahi tō ia taahiraa (taunoa: te tautuhinga `Ability Timeout`). Ka tohua tētahi taahiraa kua pau te wā hei `failed`, ā, ka haere tonu te mahere.

### 4. Te Aroturuki Ahunga Whakamua {#4-progress-tracking}

Karangatia `get_plan_progress` i ngā wā katoa hei tirotiro i te tūnga whakahaere:

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

Ka taea e ngā kaiwhakamahi WP-CLI te aroturuki i te ahunga whakamua mā:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Te Whakaora Hapa {#5-error-recovery}

Ina rahua tētahi taahiraa, ka tirohia e te orchestrator mēnā he taahiraa **kōwhiringa kē** kua tautuhia i te mahere:

- **Kei te wātea he kōwhiringa kē** — ka whakamātauria tonutia te taahiraa kōwhiringa kē. Mēnā ka angitu, ka haere tonu te whakahaere. Mēnā ka rahua hoki, ka tohua te taahiraa hei `failed`, ā, ka haere tonu te whakahaere ki te taahiraa e whai ake nei.
- **Kāore he kōwhiringa kē** — ka tohua te taahiraa hei `failed`. Ka pekehia ngā taahiraa kāore i te tino hira; ko ngā taahiraa hira (kua tohua `required: true`) ka whakatārewa i te wāhanga onāianei, ā, ka whakaoho i tētahi whakamātau whakaora taumata-wāhanga.

Ka pūrongo te agent i ngā rahunga katoa i te whakarāpopototanga mahere whakamutunga, ā, tērā pea ka tūtohu i ngā taahiraa whakatika ā-ringa mō ngā hapa kāore e taea te whakaora.

---

## Ngā Āheinga Mahere Pae {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Ka waihanga i tētahi mahere pae hanganga mai i tētahi whakaahuatanga whāinga reo māori.

**Tawhā**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Whakaahuatanga reo māori o te paetukutuku e hiahiatia ana |
| `style` | string | No | Manakohanga kāhua ā-kitenga: `minimal`, `bold`, `professional`, `playful`. Taunoa: ka kōwhiri te agent i runga i te whāinga |
| `plugins` | array | No | Ngā slugs plugin hei whakauru ki te mahere. Ka tāpiri aunoa te orchestrator i ngā plugins e hiahiatia ana. |
| `dry_run` | boolean | No | Mēnā he `true`, ka whakahoki i te JSON mahere me te kore e tiaki, e whakahaere rānei. Taunoa `false` |

**Whakahoki** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Ka tīmata ki te whakahaere i tētahi mahere pae kua oti kē te waihanga.

**Tawhā**

| Tawhā | Momo | Me whai | Whakaahuatanga |
|---|---|---|---|
| `plan_id` | string | Āe | ID o te mahere hei whakahaere |
| `auto_install_plugins` | boolean | Kāo | Mēnā he `true`, ka tāuta aunoatia ngā monomai e hiahiatia ana, kāore he whakaūnga. Taunoa `false` |
| `max_retries` | integer | Kāo | Te maha o ngā wā hei ngana anō i tētahi hipanga kua rahua i mua i te neke whakamua. Taunoa `1` |

**Ka whakahoki** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Ka whakahoki i te tūnga whakahaere onāianei o tētahi mahere pae.

**Ngā tawhā**

| Tawhā | Momo | Me whai | Whakaahuatanga |
|---|---|---|---|
| `plan_id` | string | Āe | ID mahere hei uiui |

**Ka whakahoki** i te ahanoa kauneke kua whakaahuatia i [Aroturuki Kauneke](#4-progress-tracking) i runga ake nei.

---

### `handle_plan_error` {#handleplanerror}

Ka whakatau ā-ringa i tētahi hipanga kua rahua, ā, ka tīmata anō i te whakahaere mahere mai i te hipanga e whai ake nei. Whakamahia tēnei ina kāore i taea te whakaora aunoa, ā, e hiahia ana koe ki te wawaotanga.

**Ngā tawhā**

| Tawhā | Momo | Me whai | Whakaahuatanga |
|---|---|---|---|
| `plan_id` | string | Āe | ID mahere |
| `step_id` | string | Āe | ID o te hipanga kua rahua |
| `resolution` | string | Āe | Ko tētahi o `skip` (pekea ka haere tonu), `retry` (ngana anō i te hipanga inamata), `mark_done` rānei (whakaarohia kua angitu, kāore e whakahaere anō) |

**Ka whakahoki** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Te whakataurite i te v1 me te v2 {#comparing-v1-and-v2}

| Āhuatanga | v1 | v2 |
|---|---|---|
| Ngā mahere wāhanga-maha | Kāo | Āe |
| Ngā tohutoro putanga hipanga (`__ref:`) | Kāo | Āe |
| Te kimi monomai | Ā-ringa | Aunoa |
| API aroturuki kauneke | Kāo | Āe |
| Whakaora hapa | Rahua-ka-mutu | Ara kē + haere tonu |
| Whakahaere hipanga whakarara | Kāo | Āe (me kōwhiri mō ia wāhanga) |
| Ngā tono mahere WP-CLI | Kāo | Āe |
| Tuitui ine paetae | Kāo | Āe (`q-restaurant-website`) |

---

## Ngā Tono Mahere WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Ka waihanga i tētahi mahere pae mai i tētahi whakaahuatanga whāinga.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Ka whakahaere i tētahi mahere i waihangatia i mua.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Ka whakaatu i te kauneke onāianei mō tētahi mahere e whakahaerehia ana, kua oti rānei.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Ka whakarārangi i ngā mahere pae katoa (e tārewa ana, e haere ana, kua oti hoki).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Ka tautuhi anō i tētahi mahere kua rahua ki `pending` kia taea ai te whakahaere anō mai i te tīmatanga.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
