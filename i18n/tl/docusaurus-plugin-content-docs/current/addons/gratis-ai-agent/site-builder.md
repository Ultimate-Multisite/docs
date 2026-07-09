---
title: Orkestrasyon ng Tagabuo ng Site v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Ang Site Builder Orchestration v2 (ipinakilala sa Gratis AI Agent v1.4.0) ay ang engine na nagpapagana sa paggawa ng website na maraming hakbang. Kapag hiniling mo sa agent na "bumuo ng website para sa restawran" o "gumawa ng portfolio na may blog", hinahati ng orchestrator ang mataas na antas na layuning iyon sa isang nakabalangkas na **plano**, tinutuklas ang mga plugin na kailangan upang maisakatuparan ito, isinasagawa ang bawat hakbang nang sunod-sunod, sinusubaybayan ang progreso, at awtonomong bumabawi mula sa mga error.

---

## Paano Ito Gumagana

### 1. Pagbuo ng Plano

Kapag nakatanggap ang agent ng tagubilin sa pagbuo ng site, tinatawag nito ang kakayahang `create_site_plan` upang gumawa ng JSON **plano ng site**. Inilalarawan ng plano ang:

- **Layunin** — kung ano ang dapat gawin ng natapos na site
- **Mga Yugto** — nakaayos na mga pangkat ng mga hakbang (hal. _Pag-setup_, _Mga Uri ng Nilalaman_, _Disenyo_, _Nilalaman_)
- **Mga Hakbang** — indibidwal na mga tawag sa kakayahan sa loob ng bawat yugto
- **Mga kinakailangan sa plugin** — mga plugin na dapat aktibo para tumakbo ang ilang hakbang
- **Mga Fallback** — alternatibong mga hakbang kung mabigo ang pangunahing hakbang

**Halimbawang plano (pinaikli)**

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

### 2. Pagtuklas ng Plugin

Bago magsimula ang pagpapatupad, ini-scan ng orchestrator ang `plugin_requirements` ng plano at sinusuri kung aling mga plugin ang aktibo na. Para sa mga nawawalang plugin, ito ay:

1. Naghahanap sa registry sa pamamagitan ng `recommend_plugin` para sa pinakamahusay na tugma
2. Hinihikayat ang agent na kumpirmahin ang rekomendasyon
3. Nagti-trigger ng instalasyon kung inaprubahan (o kung naka-enable ang auto-install sa settings)

Hindi nakamamatay ang mga kabiguan sa pagtuklas ng plugin — minamarkahan ng orchestrator ang mga apektadong hakbang bilang `skipped` at nagpapatuloy sa natitirang bahagi ng plano.

### 3. Pagpapatupad ng Plano

Tinatawag ng orchestrator ang `execute_site_plan` gamit ang ID ng plano. Nagpapatuloy ang pagpapatupad yugto-sa-yugto, hakbang-sa-hakbang:

- **Mga sanggunian ng hakbang** (`__ref:` prefix) — maaaring sumangguni ang mga hakbang sa mga output mula sa mga naunang hakbang. Sa halimbawa sa itaas, ang `__ref:create_menu.menu_id` ay nireresolba sa `menu_id` na ibinalik ng hakbang na `create_menu`.
- **Mga parallel na hakbang** — ang mga hakbang sa loob ng parehong yugto na walang magkakaugnay na dependency ay ipinapadala nang sabay-sabay kapag nakatakda ang flag na `parallel`.
- **Timeout ng hakbang** — bawat hakbang ay may indibidwal na timeout (default: ang setting na `Ability Timeout`). Ang hakbang na nag-time out ay minamarkahan bilang `failed` at nagpapatuloy ang plano.

### 4. Pagsubaybay sa Progreso

Tawagin ang `get_plan_progress` anumang oras upang suriin ang status ng pagpapatupad:

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

Maaaring subaybayan ng mga gumagamit ng WP-CLI ang progreso gamit ang:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Pagbawi mula sa Error

Kapag nabigo ang isang hakbang, sinusuri ng orchestrator kung may **fallback** na hakbang na tinukoy sa plano:

- **May available na fallback** — agad na sinusubukan ang fallback na hakbang. Kung magtagumpay ito, magpapatuloy ang pagpapatupad. Kung mabigo rin ito, minamarkahan ang hakbang bilang `failed` at magpapatuloy ang pagpapatupad sa susunod na hakbang.
- **Walang fallback** — minamarkahan ang hakbang bilang `failed`. Nilalaktawan ang mga hindi kritikal na hakbang; ang mga kritikal na hakbang (minarkahang `required: true`) ay nagpapatigil sa kasalukuyang yugto at nagti-trigger ng pagtatangkang pagbawi sa antas ng yugto.

Iniuulat ng agent ang lahat ng kabiguan sa huling buod ng plano at maaaring magmungkahi ng mga manu-manong hakbang sa pag-aayos para sa mga error na hindi mabawi.

---

## Mga Kakayahan ng Plano ng Site

### `create_site_plan`

Bumubuo ng nakabalangkas na plano ng site mula sa paglalarawan ng layunin sa natural na wika.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Paglalarawan sa natural na wika ng ninanais na website |
| `style` | string | No | Kagustuhan sa biswal na istilo: `minimal`, `bold`, `professional`, `playful`. Default: pumipili ang agent batay sa layunin |
| `plugins` | array | No | Mga slug ng plugin na isasama sa plano. Awtomatikong idinaragdag ng orchestrator ang mga kinakailangang plugin. |
| `dry_run` | boolean | No | Kung `true`, ibinabalik ang JSON ng plano nang hindi ito sine-save o isinasagawa. Default `false` |

**Ibinabalik** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Nagsisimulang magsagawa ng dati nang nabuong plano ng site.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID ng plan na isasagawa |
| `auto_install_plugins` | boolean | No | Kung `true`, awtomatikong ini-install ang mga kinakailangang plugin nang walang kumpirmasyon. Default `false` |
| `max_retries` | integer | No | Bilang ng mga beses na muling susubukan ang nabigong hakbang bago magpatuloy. Default `1` |

**Nagbabalik** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Ibinabalik ang kasalukuyang status ng pagsasagawa ng isang site plan.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID na iku-query |

**Nagbabalik** ng progress object na inilalarawan sa [Pagsubaybay sa Progreso](#4-progress-tracking) sa itaas.

---

### `handle_plan_error`

Manu-manong nireresolba ang isang nabigong hakbang at ipinagpapatuloy ang pagsasagawa ng plan mula sa susunod na hakbang. Gamitin ito kapag hindi posible ang awtomatikong pagbawi at nais mong makialam.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID |
| `step_id` | string | Yes | ID ng nabigong hakbang |
| `resolution` | string | Yes | Isa sa `skip` (laktawan at magpatuloy), `retry` (muling subukan agad ang hakbang), o `mark_done` (ituring na matagumpay nang hindi muling pinapatakbo) |

**Nagbabalik** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Paghahambing ng v1 at v2

| Feature | v1 | v2 |
|---|---|---|
| Mga plan na maraming yugto | No | Yes |
| Mga sanggunian sa output ng hakbang (`__ref:`) | No | Yes |
| Pagtuklas ng plugin | Manual | Automatic |
| API sa pagsubaybay sa progreso | No | Yes |
| Pagbawi sa error | Mabigo-at-huminto | Fallback + magpatuloy |
| Parallel na pagsasagawa ng hakbang | No | Yes (opt-in bawat yugto) |
| Mga command ng WP-CLI plan | No | Yes |
| Integrasyon ng benchmark | No | Yes (`q-restaurant-website`) |

---

## Mga Command ng WP-CLI Plan

### `wp gratis-ai-agent plan create`

Bumubuo ng site plan mula sa paglalarawan ng layunin.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Isinasagawa ang dating nabuong plan.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Ipinapakita ang kasalukuyang progreso para sa isang isinasagawa o nakumpletong plan.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Inililista ang lahat ng site plan (nakabinbin, kasalukuyang isinasagawa, at nakumpleto).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Nire-reset ang nabigong plan sa `pending` upang maaari itong muling isagawa mula sa simula.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
