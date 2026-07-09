---
title: Site Builder samhæfing v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder-samhæfing v2 {#site-builder-orchestration-v2}

Site Builder-samhæfing v2 (kynnt í Gratis AI Agent v1.4.0) er vélin sem knýr fjölþrepa vefsíðugerð. Þegar þú biður agent-inn um að „byggja vefsíðu fyrir veitingastað“ eða „búa til ferilskrá með bloggi“ brýtur samhæfirinn þetta hástigsmarkmið niður í skipulagða **áætlun**, finnur plugin sem þarf til að uppfylla hana, framkvæmir hvert skref í röð, fylgist með framvindu og jafnar sig sjálfkrafa á villum.

---

## Hvernig það virkar {#how-it-works}

### 1. Gerð áætlunar {#1-plan-generation}

Þegar agent-inn fær leiðbeiningu um vefsíðugerð kallar hann á `create_site_plan`-getuna til að búa til JSON **vefsíðuáætlun**. Áætlunin lýsir:

- **Markmið** — hvað fullbúna vefsíðan á að gera
- **Áfangar** — raðaðir hópar skrefa (t.d. _Uppsetning_, _Efnistegundir_, _Hönnun_, _Efni_)
- **Skref** — einstök getuköll innan hvers áfanga
- **Plugin-kröfur** — plugin sem þurfa að vera virk til að ákveðin skref geti keyrt
- **Varaúrræði** — önnur skref ef aðalskref mistekst

**Dæmi um áætlun (stytt)**

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

### 2. Plugin-leit {#2-plugin-discovery}

Áður en framkvæmd hefst skannar samhæfirinn `plugin_requirements` áætlunarinnar og athugar hvaða plugin eru þegar virk. Fyrir plugin sem vantar gerir hann eftirfarandi:

1. Leitar í skránni með `recommend_plugin` að bestu samsvöruninni
2. Biður agent-inn um að staðfesta meðmælin
3. Ræsir uppsetningu ef samþykkt (eða ef sjálfvirk uppsetning er virkjuð í stillingum)

Bilun í plugin-leit er ekki banvæn — samhæfirinn merkir viðkomandi skref sem `skipped` og heldur áfram með restina af áætluninni.

### 3. Framkvæmd áætlunar {#3-plan-execution}

Samhæfirinn kallar á `execute_site_plan` með áætlunarauðkenninu. Framkvæmd fer fram áfanga fyrir áfanga, skref fyrir skref:

- **Tilvísanir í skref** (`__ref:` forskeyti) — skref geta vísað í úttök úr fyrri skrefum. Í dæminu hér að ofan er `__ref:create_menu.menu_id` leyst yfir í `menu_id` sem `create_menu`-skrefið skilar.
- **Samhliða skref** — skref innan sama áfanga sem hafa engar innbyrðis háðir eru send af stað samtímis þegar `parallel`-flaggið er stillt.
- **Tímamörk skrefs** — hvert skref hefur sín eigin tímamörk (sjálfgefið: `Ability Timeout`-stillingin). Skref sem rennur út á tíma er merkt `failed` og áætlunin heldur áfram.

### 4. Framvindueftirlit {#4-progress-tracking}

Kallaðu á `get_plan_progress` hvenær sem er til að athuga stöðu framkvæmdar:

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

WP-CLI-notendur geta fylgst með framvindu með:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Villumeðhöndlun {#5-error-recovery}

Þegar skref mistekst athugar samhæfirinn hvort **varaúrræðisskref** sé skilgreint í áætluninni:

- **Varaúrræði tiltækt** — reynt er strax við varaúrræðisskrefið. Ef það tekst heldur framkvæmd áfram. Ef það mistekst einnig er skrefið merkt `failed` og framkvæmd heldur áfram með næsta skref.
- **Ekkert varaúrræði** — skrefið er merkt `failed`. Skref sem eru ekki mikilvæg eru sleppt; mikilvæg skref (merkt `required: true`) stöðva núverandi áfanga og ræsa tilraun til endurheimtar á áfangastigi.

Agent-inn tilkynnir allar bilanir í lokayfirliti áætlunarinnar og gæti lagt til handvirk úrbótarskref fyrir villur sem ekki er hægt að laga sjálfkrafa.

---

## Getur vefsíðuáætlunar {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Býr til skipulagða vefsíðuáætlun út frá markmiðslýsingu á náttúrulegu máli.

**Færibreytur**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Lýsing á náttúrulegu máli á æskilegri vefsíðu |
| `style` | string | No | Val á sjónrænum stíl: `minimal`, `bold`, `professional`, `playful`. Sjálfgefið: agent-inn velur út frá markmiðinu |
| `plugins` | array | No | Plugin-slugs sem á að hafa með í áætluninni. Samhæfirinn bætir nauðsynlegum plugin sjálfkrafa við. |
| `dry_run` | boolean | No | Ef `true`, skilar áætlunar-JSON án þess að vista eða framkvæma hana. Sjálfgefið `false` |

**Skilar** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Byrjar að framkvæma áður gerða vefsíðuáætlun.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `plan_id` | string | Já | ID áætlunarinnar sem á að keyra |
| `auto_install_plugins` | boolean | Nei | Ef `true`, setur nauðsynleg plugin sjálfkrafa upp án staðfestingar. Sjálfgefið `false` |
| `max_retries` | integer | Nei | Fjöldi skipta sem reyna á misheppnað skref aftur áður en haldið er áfram. Sjálfgefið `1` |

**Skilar** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Skilar núverandi keyrslustöðu vefáætlunar.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `plan_id` | string | Já | ID áætlunar sem á að spyrja um |

**Skilar** framvinduhlutnum sem lýst er í [Framvindurakningu](#4-progress-tracking) hér að ofan.

---

### `handle_plan_error` {#handleplanerror}

Leysir misheppnað skref handvirkt og heldur keyrslu áætlunar áfram frá næsta skrefi. Notaðu þetta þegar sjálfvirk endurheimt var ekki möguleg og þú vilt grípa inn í.

**Færibreytur**

| Færibreyta | Tegund | Nauðsynlegt | Lýsing |
|---|---|---|---|
| `plan_id` | string | Já | ID áætlunar |
| `step_id` | string | Já | ID misheppnaða skrefsins |
| `resolution` | string | Já | Eitt af `skip` (sleppa og halda áfram), `retry` (reyna skrefið strax aftur), eða `mark_done` (meðhöndla sem heppnað án þess að keyra aftur) |

**Skilar** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Samanburður á v1 og v2 {#comparing-v1-and-v2}

| Eiginleiki | v1 | v2 |
|---|---|---|
| Margfasa áætlanir | Nei | Já |
| Tilvísanir í úttak skrefs (`__ref:`) | Nei | Já |
| Plugin-uppgötvun | Handvirk | Sjálfvirk |
| API fyrir framvindurakningu | Nei | Já |
| Villuendurheimt | Mistakast og stöðvast | Varaleið + halda áfram |
| Samhliða keyrsla skrefa | Nei | Já (valkvætt fyrir hvern fasa) |
| WP-CLI áætlunarskipanir | Nei | Já |
| Samþætting við viðmiðunarpróf | Nei | Já (`q-restaurant-website`) |

---

## WP-CLI áætlunarskipanir {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Býr til vefáætlun út frá markmiðslýsingu.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Keyrir áður útbúna áætlun.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Sýnir núverandi framvindu fyrir áætlun sem er í keyrslu eða lokið.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Listar allar vefáætlanir (í bið, í vinnslu og loknar).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Endurstillir misheppnaða áætlun í `pending` svo hægt sé að keyra hana aftur frá upphafi.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
