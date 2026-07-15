---
title: Orkestrasi Pambangun Situs v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orkestrasi Panggawe Situs v2

Orkestrasi Panggawe Situs v2 (dikenalake ing Gratis AI Agent v1.4.0) yaiku mesin sing nguwasani panggawe situs web kanthi pirang-pirang langkah. Nalika sampeyan njaluk agen kanggo "nggawe situs web restoran" utawa "nggawe portofolio nganggo blog", orkestrator mecah tujuan tingkat dhuwur kuwi dadi **rencana** terstruktur, nemokake tambahan sing dibutuhake kanggo ngrampungake, nglakokake saben langkah kanthi urut, nglacak kemajuan, lan mulihake saka kasalahan kanthi otonom.

---

## Cara Kerjane {#how-it-works}

### 1. Nggawe Rencana {#1-plan-generation}

Nalika agen nampa pandhuan panggawe situs, agen kasebut nelpon kemampuan `create_site_plan` kanggo ngasilake **rencana situs** JSON. Rencana kasebut nerangake:

- **Tujuan** — apa sing kudu ditindakake situs sing wis rampung
- **Fase** — klompok langkah sing diurutake (umpamane _Pangaturan_, _Jinis Konten_, _Desain_, _Konten_)
- **Langkah** — panggilan kemampuan individu ing saben fase
- **Syarat tambahan** — tambahan sing kudu aktif supaya langkah tartamtu bisa mlaku
- **Fallback** — langkah alternatif yen langkah utama gagal

**Tuladha rencana (dicekak)**

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

### 2. Nemokake Tambahan {#2-plugin-discovery}

Sadurunge eksekusi diwiwiti, orkestrator mindhai `plugin_requirements` ing rencana lan mriksa tambahan endi sing wis aktif. Kanggo tambahan sing kurang, iki bakal:

1. Nggoleki registri liwat `recommend_plugin` kanggo cocog sing paling apik
2. Njaluk agen kanggo ngonfirmasi rekomendasi
3. Micu instalasi yen disetujoni (utawa yen pasang otomatis diaktifake ing setelan)

Kegagalan nemokake tambahan ora fatal — orkestrator menehi tandha langkah sing kena pengaruh minangka `skipped` lan nerusake sisa rencana.

### 3. Eksekusi Rencana {#3-plan-execution}

Orkestrator nelpon `execute_site_plan` nganggo ID rencana. Eksekusi mlaku fase demi fase, langkah demi langkah:

- **Rujukan langkah** (prefiks `__ref:`) — langkah bisa ngrujuk output saka langkah sadurunge. Ing tuladha ing ndhuwur, `__ref:create_menu.menu_id` dirampungake dadi `menu_id` sing dibalekake dening langkah `create_menu`.
- **Langkah paralel** — langkah ing fase sing padha sing ora nduweni ketergantungan antarane siji lan sijine dikirim bebarengan nalika panji `parallel` disetel.
- **Wates wektu langkah** — saben langkah nduweni wates wektu individu (gawan: setelan `Ability Timeout`). Langkah sing ngluwihi wektu diwenehi tandha `failed` lan rencana nerusake.

### 4. Nglacak Kemajuan {#4-progress-tracking}

Telpon `get_plan_progress` kapan wae kanggo mriksa status eksekusi:

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

Pangguna WP-CLI bisa ngawasi kemajuan nganggo:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Pamulihan Kasalahan {#5-error-recovery}

Nalika langkah gagal, orkestrator mriksa ana ora **fallback** langkah sing ditemtokake ing rencana:

- **Fallback kasedhiya** — langkah fallback dicoba langsung. Yen kasil, eksekusi nerusake. Yen uga gagal, langkah kasebut diwenehi tandha `failed` lan eksekusi nerusake menyang langkah sabanjure.
- **Ora ana fallback** — langkah kasebut diwenehi tandha `failed`. Langkah sing ora kritis dilewati; langkah kritis (ditandhani `required: true`) mandhegake fase saiki lan micu upaya pamulihan tingkat fase.

Agen nglaporake kabeh kegagalan ing ringkesan rencana pungkasan lan bisa nyaranake langkah remediasi manual kanggo kasalahan sing ora bisa dipulihake.

---

## Kemampuan Rencana Situs {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Ngasilake rencana situs terstruktur saka katrangan tujuan basa alami.

**Paramèter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Katrangan basa alami babagan situs web sing dikarepake |
| `style` | string | No | Preferensi gaya visual: `minimal`, `bold`, `professional`, `playful`. Gawan: agen milih adhedhasar tujuan |
| `plugins` | array | No | Slug tambahan sing dilebokake ing rencana. Orkestrator nambah tambahan sing dibutuhake kanthi otomatis. |
| `dry_run` | boolean | No | Yen `true`, mbalekake JSON rencana tanpa nyimpen utawa nglakokake. Gawan `false` |

**Mbalekake** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Miwiti nglakokake rencana situs sing wis digawe sadurunge.

**Paramèter**

| Paramèter | Tipe | Dibutuhake | Katrangan |
|---|---|---|---|
| `plan_id` | string | Ya | ID saka rencana sing arep dieksekusi |
| `auto_install_plugins` | boolean | Ora | Yen `true`, kanthi otomatis masang ekstensi sing dibutuhake tanpa konfirmasi. Gawané `false` |
| `max_retries` | integer | Ora | Cacahé kaping kanggo nyoba maneh langkah sing gagal sadurungé nerusaké. Gawané `1` |

**Ngasilaké** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Ngasilaké status eksekusi saiki saka rencana situs.

**Paramèter**

| Paramèter | Tipe | Dibutuhake | Katrangan |
|---|---|---|---|
| `plan_id` | string | Ya | ID rencana kanggo ditakoni |

**Ngasilaké** objek kemajuan sing diterangaké ing [Pelacakan Kemajuan](#4-progress-tracking) ing ndhuwur.

---

### `handle_plan_error` {#handleplanerror}

Ngrampungaké kanthi manual langkah sing gagal lan nerusaké eksekusi rencana saka langkah sabanjuré. Gunakna iki nalika pamulihan otomatis ora bisa lan sampeyan arep melu campur.

**Paramèter**

| Paramèter | Tipe | Dibutuhake | Katrangan |
|---|---|---|---|
| `plan_id` | string | Ya | ID rencana |
| `step_id` | string | Ya | ID saka langkah sing gagal |
| `resolution` | string | Ya | Salah siji saka `skip` (liwati lan terusaké), `retry` (coba maneh langkah kasebut langsung), utawa `mark_done` (anggep kasil tanpa mbukak maneh) |

**Ngasilaké** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Mbandhingaké v1 lan v2 {#comparing-v1-and-v2}

| Fitur | v1 | v2 |
|---|---|---|
| Rencana multi-fase | Ora | Ya |
| Rujukan output langkah (`__ref:`) | Ora | Ya |
| Panemon ekstensi | Manual | Otomatis |
| API pelacakan kemajuan | Ora | Ya |
| Pamulihan kesalahan | Gagal-lan-mandheg | Fallback + terusaké |
| Eksekusi langkah paralel | Ora | Ya (opt-in saben fase) |
| Prentah rencana WP-CLI | Ora | Ya |
| Integrasi benchmark | Ora | Ya (`q-restaurant-website`) |

---

## Prentah Rencana WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Ngasilaké rencana situs saka katrangan tujuan.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Ngeksekusi rencana sing wis digawé sadurungé.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Nuduhaké kemajuan saiki kanggo rencana sing lagi dieksekusi utawa wis rampung.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Ndhaptar kabèh rencana situs (ngentèni, lagi lumaku, lan rampung).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Ngreset rencana sing gagal dadi `pending` supaya bisa dieksekusi maneh saka wiwitan.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
