---
title: Uratibu wa Mjenzi wa Tovuti v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (iliyotolewa katika Gratis AI Agent v1.4.0) ni injini inayoweka nguvu katika uundaji wa tovuti wenye hatua nyingi. Unapomwomba agent "kuunda tovuti ya mgahawa" au "kuunda portfolio na blogu," mfumo wa kuendesha (orchestrator) hufanya kazi ya kuvunja lengo hilo kubwa kuwa **mpango** wenye muundo, unagundua plugins zinazohitajika kutimiza lengo hilo, hutekeleza kila hatua kwa mpangilio, anafuatilia maendeleo, na anajiponya kiotomatiki kutoka kwa makosa.

---

## Inafanya Kazi Vipi {#how-it-works}

### 1. Kuunda Mpango (Plan Generation) {#1-plan-generation}

Wakati agent anapopokea maelekezo ya ujenzi wa tovuti, anaitisha uwezo wa `create_site_plan` ili kutoa **mpango wa tovuti** wenye muundo wa JSON. Mpango huu unaelezea:

- **Lengo** — tovuti iliyokamilika inapaswa kufanya nini
- **Awamu** — vikundi vilivyopangwa vya hatua (mfano: _Kufunga_, _Aina za Maudhui_, _Muonekano_, _Maudhui_)
- **Hatua** — wito wa uwezo (ability) binafsi ndani ya kila awamu
- **Mahitaji ya Plugins** — plugins ambazo lazima ziwe zimefunguliwa kwa hatua fulani kutekelezwa
- **Njia Mbadala (Fallbacks)** — hatua mbadala ikiwa hatua kuu itashindikana

**Mfano wa mpango (umefupishwa)**

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

### 2. Kugundua Plugins (Plugin Discovery) {#2-plugin-discovery}

Kabla ya kuanza kutekeleza, mfumo wa kuendesha unachanganua `plugin_requirements` ya mpango na kuangalia ni plugins zipi zimefunguliwa tayari. Kwa plugins ambazo hazipo, hufanya yafuatayo:

1. Anatafuta kwenye registry kupitia `recommend_plugin` ili kupata anayofaa zaidi
2. Anamwomba agent athibitisho la mapendekezo hayo
3. Anaanza kusakinisha ikiwa imethibitishwa (au ikiwa auto-install imewashwa katika mipangilio)

Kushindikana kwa kugundua plugins si jambo la kumwacha mpango uisimame — mfumo wa kuendesha huweka hatua zilizoathirika kama `skipped` na kuendelea na sehemu zingine za mpango.

### 3. Kutekeleza Mpango (Plan Execution) {#3-plan-execution}

Mfumo wa kuendesha unaitisha `execute_site_plan` kwa kutumia plan ID. Utekelezaji unaendelea awamu kwa awamu, hatua kwa hatua:

- **Marejeo ya Hatua** (`__ref:` prefix) — hatua zinaweza kurejelea matokeo kutoka kwa hatua za awali. Katika mfano hapo, `__ref:create_menu.menu_id` inarekebishwa kuwa `menu_id` iliyorejeshwa na hatua ya `create_menu`.
- **Hatua za Kufanyika kwa Wakati Mmoja (Parallel steps)** — hatua ndani ya awamu moja ambazo hazina uhusiano wa kutegemeana hupelekwa kwa wakati mmoja wakati bendera ya `parallel` inapowashwa.
- **Muda wa Hatua (Step timeout)** — kila hatua ina muda wake binafsi (kawaida: mipangilio ya `Ability Timeout`). Hatua iliyopita muda huwekwa kama `failed` na mpango unaendelea.

### 4. Ufuatiliaji wa Maendeleo (Progress Tracking) {#4-progress-tracking}

Itisha `get_plan_progress` wakati wowote ili kuangalia hali ya utekelezaji:

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

Watumiaji wa WP-CLI wanaweza kufuatilia maendeleo kwa kutumia:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Kujiponya Kutokana na Makosa (Error Recovery) {#5-error-recovery}

Wakati hatua inashindikana, mfumo wa kuendesha unachanganya kwa kutafuta **hatua ya mbadala (fallback)** iliyoainishwa katika mpango:

- **Fallback Imeapatikana** — hatua ya mbadala inajaribiwa mara moja. Ikiwa inefanikiwa, utekelezaji unaendelea. Ikiwa pia inashindikana, hatua huwekwa kama `failed` na utekelezaji unaendelea na hatua inayofuata.
- **Hakuna Fallback** — hatua huwekwa kama `failed`. Hatua zisizo muhimu huachwa; hatua muhimu (zinazoonyesha `required: true`) huzuia awamu ya sasa na kuanzisha jaribio la kuponya kwa kiwango cha awamu.

Agent anaripoti kushindikana kwa makosa yote katika muhtasari wa mwisho wa mpango na anaweza kupendekeza hatua za kurekebisha kwa mikono kwa makosa ambayo hayapoweza kupatikana.

---

## Uwezo wa Mpango wa Tovuti (Site Plan Abilities) {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Hutengeneza mpango wa tovuti wenye muundo kutoka kwa maelezo ya lengo kwa lugha ya kawaida.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Maelezo kwa lugha ya kawaida ya tovuti inayotakiwa |
| `style` | string | No | Mapendeleo ya mtindo wa kuonekana: `minimal`, `bold`, `professional`, `playful`. Kiwango cha chini: agent anachagua kulingana na lengo |
| `plugins` | array | No | Slugs za plugins za kuingizwa katika mpango. Mfumo wa kuendesha unaongeza plugins muhimu kiotomatiki. |
| `dry_run` | boolean | No | Ikiwa `true`, inarudisha JSON ya mpango bila kuifungua au kuitekeleza. Kiwango cha chini: `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Inaanza kutekeleza mpango wa tovuti uliotengenezwa hapo awali.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID ya mpango wa kutekeleza |
| `auto_install_plugins` | boolean | No | Ikiwa `true`, inasakinisha plugins muhimu kiotomatiki bila uthibitisho. Kiwango cha chini: `false` |
| `max_retries` | integer | No | Idadi ya mara za kujaribu hatua iliyoshindikana kabla ya kuendelea. Kiwango cha chini: `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Inarudisha hali ya utekelezaji ya sasa ya mpango wa tovuti.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID ya kuuliza |

**Returns** object ya maendeleo iliyoainishwa katika [Progress Tracking](#4-progress-tracking) hapo juu.

---

### `handle_plan_error` {#handleplanerror}

Inarekebisha kwa mikono hatua iliyoshindikana na kuendeleza utekelezaji wa mpango kutoka hatua inayofuata. Tumia hii wakati urejesho wa kiotomatiki haukuwazekana na unataka kuingilia.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID |
| `step_id` | string | Yes | ID ya hatua iliyoshindikana |
| `resolution` | string | Yes | Moja kati ya `skip` (kupita na kuendelea), `retry` (kujaribu hatua mara moja), au `mark_done` (kutibu kama imefanikiwa bila kuifanya upya) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Kulinganisha v1 na v2 {#comparing-v1-and-v2}

| Kipengele | v1 | v2 |
|---|---|---|
| Mifumo ya hatua nyingi | Hapana | Ndiyo |
| Marejeo ya matokeo ya hatua (`__ref:`) | Hapana | Ndiyo |
| Kugundua Plugins | Kwa mikono | Kiotomatiki |
| API ya Ufuatiliaji wa Maendeleo | Hapana | Ndiyo |
| Kujiponya Kutokana na Makosa | Kushindwa na kusimama | Fallback + kuendelea |
| Utekelezaji wa Hatua kwa Wakati Mmoja | Hapana | Ndiyo (kwa awamu) |
| Amri za WP-CLI za mpango | Hapana | Ndiyo |
| Ujumuishaji wa Benchmark | Hapana | Ndiyo (`q-restaurant-website`) |

---

## Amri za WP-CLI za Mpango {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Inatengeneza mpango wa tovuti kutoka kwa maelezo ya lengo.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Inatekeleza mpango uliotengenezwa hapo awali.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Inaonyesha maendeleo ya sasa kwa mpango unaotekelezwa au uliokamilika.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Inaorodhesha mifumo yote ya mipango ya tovuti (inangojea, inafanywa, na iliyokamilika).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Inarejesha mpango ulioshindikana kuwa `pending` ili uweze kutekelezwa upya tangu mwanzo.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
