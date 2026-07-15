---
title: Orkestrado de Reteja Konstruilo v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (enkondukita en Gratis AI Agent v1.4.0) estas la motoro, kiu funkciigas plurpaŝan retejan kreadon. Kiam vi petas la agenton "konstrui restoracian retejon" aŭ "krei biletujon kun blogo", la orkestrilo disrompas tiun altnivelan celon en strukturitan **planon**, malkovras la kromprogramojn bezonatajn por plenumi ĝin, plenumas ĉiun paŝon sinsekve, spuras progreson, kaj aŭtonome resaniĝas post eraroj.

---

## Kiel Ĝi Funkcias {#how-it-works}

### 1. Plangenerado {#1-plan-generation}

Kiam la agento ricevas retejo-konstruan instrukcion, ĝi vokas la kapablon `create_site_plan` por produkti JSON **retejan planon**. La plano priskribas:

- **Celon** — kion la finita retejo devas fari
- **Fazojn** — ordigitajn grupojn de paŝoj (ekz. _Agordo_, _Enhavotipoj_, _Dezajno_, _Enhavo_)
- **Paŝojn** — individuajn kapablovokojn ene de ĉiu fazo
- **Kromprogramajn postulojn** — kromprogramojn, kiuj devas esti aktivaj por ke certaj paŝoj ruliĝu
- **Rezervajn solvojn** — alternativajn paŝojn se ĉefa paŝo malsukcesas

**Ekzempla plano (mallongigita)**

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

### 2. Kromprograma Malkovro {#2-plugin-discovery}

Antaŭ ol plenumado komenciĝas, la orkestrilo skanas la `plugin_requirements` de la plano kaj kontrolas kiuj kromprogramoj jam estas aktivaj. Por mankantaj kromprogramoj, ĝi:

1. Serĉas la registron per `recommend_plugin` por la plej bona kongruo
2. Petas la agenton konfirmi la rekomendon
3. Ekigas instaladon se aprobite (aŭ se aŭtomata instalado estas ebligita en agordoj)

Malsukcesoj de kromprograma malkovro ne estas fatalaj — la orkestrilo markas la trafitajn paŝojn kiel `skipped` kaj daŭrigas kun la resto de la plano.

### 3. Plenumado de Plano {#3-plan-execution}

La orkestrilo vokas `execute_site_plan` kun la plano-ID. Plenumado progresas fazo-post-fazo, paŝo-post-paŝo:

- **Paŝaj referencoj** (`__ref:` prefikso) — paŝoj povas referenci eligojn de antaŭaj paŝoj. En la supra ekzemplo, `__ref:create_menu.menu_id` estas solvita al la `menu_id` redonita de la paŝo `create_menu`.
- **Paralelaj paŝoj** — paŝoj ene de la sama fazo, kiuj ne havas interdependecojn, estas sendataj samtempe kiam la flago `parallel` estas agordita.
- **Paŝa tempolimo** — ĉiu paŝo havas individuan tempolimon (defaŭlte: la agordo `Ability Timeout`). Paŝo kies tempo elĉerpiĝis estas markita `failed` kaj la plano daŭrigas.

### 4. Progresospurado {#4-progress-tracking}

Voku `get_plan_progress` iam ajn por kontroli plenumostaton:

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

WP-CLI uzantoj povas kontroli progreson per:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Erara Resaniĝo {#5-error-recovery}

Kiam paŝo malsukcesas, la orkestrilo kontrolas ĉu estas **rezerva** paŝo difinita en la plano:

- **Rezervo disponebla** — la rezerva paŝo estas provita tuj. Se ĝi sukcesas, plenumado daŭrigas. Se ĝi ankaŭ malsukcesas, la paŝo estas markita `failed` kaj plenumado daŭrigas per la sekva paŝo.
- **Neniu rezervo** — la paŝo estas markita `failed`. Nekritikaj paŝoj estas transsaltitaj; kritikaj paŝoj (markitaj `required: true`) haltigas la nunan fazon kaj ekigas faz-nivelan resaniĝan provon.

La agento raportas ĉiujn malsukcesojn en la fina plana resumo kaj povas sugesti manajn riparajn paŝojn por neresanigeblaj eraroj.

---

## Retejplanaj Kapabloj {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Generas strukturitan retejan planon el naturlingva cela priskribo.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `goal` | string | Jes | Naturlingva priskribo de la dezirata retejo |
| `style` | string | Ne | Vida stilprefero: `minimal`, `bold`, `professional`, `playful`. Defaŭlte: la agento elektas laŭ la celo |
| `plugins` | array | Ne | Kromprogramaj slugs por inkluzivi en la plano. La orkestrilo aŭtomate aldonas bezonatajn kromprogramojn. |
| `dry_run` | boolean | Ne | Se `true`, redonas la planan JSON sen konservi aŭ plenumi ĝin. Defaŭlte `false` |

**Redonas** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Komencas plenumi antaŭe generitan retejan planon.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `plan_id` | ĉeno | Jes | ID de la plano por plenumi |
| `auto_install_plugins` | bulea | Ne | Se `true`, aŭtomate instalas bezonatajn kromprogramojn sen konfirmo. Defaŭlte `false` |
| `max_retries` | entjero | Ne | Nombro da fojoj por reprovi malsukcesintan paŝon antaŭ ol pluiri. Defaŭlte `1` |

**Redonas** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Redonas la nunan plenuman staton de reteja plano.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `plan_id` | ĉeno | Jes | Plano-ID por pridemandi |

**Redonas** la progresan objekton priskribitan en [Progresa Spurado](#4-progress-tracking) supre.

---

### `handle_plan_error` {#handleplanerror}

Permane solvas malsukcesintan paŝon kaj rekomencas planan plenumadon de la sekva paŝo. Uzu tion kiam aŭtomata reakiro ne eblis kaj vi volas interveni.

**Parametroj**

| Parametro | Tipo | Deviga | Priskribo |
|---|---|---|---|
| `plan_id` | ĉeno | Jes | Plano-ID |
| `step_id` | ĉeno | Jes | ID de la malsukcesinta paŝo |
| `resolution` | ĉeno | Jes | Unu el `skip` (preterlasi kaj daŭrigi), `retry` (reprovi la paŝon tuj), aŭ `mark_done` (trakti kiel sukcesintan sen reruli) |

**Redonas** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Komparado de v1 kaj v2 {#comparing-v1-and-v2}

| Trajto | v1 | v2 |
|---|---|---|
| Plurfazaj planoj | Ne | Jes |
| Paŝaj eligaj referencoj (`__ref:`) | Ne | Jes |
| Malkovro de kromprogramoj | Permana | Aŭtomata |
| API por progresa spurado | Ne | Jes |
| Erara reakiro | Malsukcesi-kaj-halti | Rezerva solvo + daŭrigi |
| Paralela paŝa plenumado | Ne | Jes (laŭvole per fazo) |
| WP-CLI plan-komandoj | Ne | Jes |
| Benchmark-integriĝo | Ne | Jes (`q-restaurant-website`) |

---

## WP-CLI Plan-Komandoj {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Generas retejan planon el cela priskribo.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Plenumas antaŭe generitan planon.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Montras nunan progreson por plenumata aŭ kompletigita plano.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Listigas ĉiujn retejajn planojn (atendantajn, en-progresajn kaj kompletigitajn).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Restarigas malsukcesintan planon al `pending` por ke ĝi povu esti re-plenumita de la komenco.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
