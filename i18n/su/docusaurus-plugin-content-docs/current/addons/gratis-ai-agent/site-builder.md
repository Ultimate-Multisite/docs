---
title: Orkestrasi Pangwangun Situs v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orkestrasi Pangwangun Situs v2

Orkestrasi Pangwangun Situs v2 (diwanohkeun dina Gratis AI Agent v1.4.0) nyaéta mesin anu ngagerakkeun nyieun website multi-léngkah. Nalika anjeun ménta agent pikeun "ngawangun website réstoran" atawa "nyieun portofolio jeung blog", orchestrator ngabagi tujuan tingkat luhur éta jadi **rencana** anu terstruktur, manggihan plugin anu diperlukeun pikeun ngalaksanakeunana, ngajalankeun unggal léngkah sacara runtuyan, ngalacak kamajuan, sarta cageur tina kasalahan sacara mandiri.

---

## Kumaha Gawéna {#how-it-works}

### 1. Nyieun Rencana {#1-plan-generation}

Nalika agent narima paréntah ngawangun situs, éta nyauran kamampuhan `create_site_plan` pikeun ngahasilkeun **rencana situs** JSON. Rencana ngajelaskeun:

- **Tujuan** — naon anu kudu dilakukeun ku situs anu geus réngsé
- **Fase** — kelompok léngkah anu diurutkeun (contona _Setup_, _Jinis Eusi_, _Desain_, _Eusi_)
- **Léngkah** — panggero kamampuhan individu dina unggal fase
- **Sarat plugin** — plugin anu kudu aktip sangkan léngkah tangtu bisa dijalankeun
- **Fallback** — léngkah alternatif lamun léngkah utama gagal

**Conto rencana (disingget)**

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

### 2. Manggihkeun Plugin {#2-plugin-discovery}

Saméméh palaksanaan dimimitian, orchestrator nyeken `plugin_requirements` dina rencana jeung mariksa plugin mana anu geus aktip. Pikeun plugin anu leungit, éta:

1. Néangan dina registry liwat `recommend_plugin` pikeun cocog anu pangalusna
2. Ménta agent pikeun mastikeun rekomendasi
3. Micu pamasangan lamun disatujuan (atawa lamun auto-install diaktipkeun dina setélan)

Kagagalan manggihkeun plugin henteu fatal — orchestrator nandaan léngkah anu kapangaruhan salaku `skipped` sarta neruskeun kana sésa rencana.

### 3. Palaksanaan Rencana {#3-plan-execution}

Orchestrator nyauran `execute_site_plan` kalayan ID rencana. Palaksanaan lumangsung fase-demi-fase, léngkah-demi-léngkah:

- **Rujukan léngkah** (awalan `__ref:`) — léngkah bisa ngarujuk kana kaluaran tina léngkah saméméhna. Dina conto di luhur, `__ref:create_menu.menu_id` diréngsékeun jadi `menu_id` anu dibalikeun ku léngkah `create_menu`.
- **Léngkah paralel** — léngkah dina fase anu sarua anu teu boga katergantungan silih antara léngkah dikirim sacara babarengan nalika flag `parallel` disetél.
- **Timeout léngkah** — unggal léngkah boga timeout sorangan (standar: setélan `Ability Timeout`). Léngkah anu timed-out ditandaan `failed` sarta rencana neruskeun.

### 4. Ngalacak Kamajuan {#4-progress-tracking}

Sauran `get_plan_progress` iraha waé pikeun mariksa status palaksanaan:

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

Pamaké WP-CLI bisa ngawas kamajuan kalayan:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Pamulihan Kasalahan {#5-error-recovery}

Nalika hiji léngkah gagal, orchestrator mariksa naha aya léngkah **fallback** anu ditetepkeun dina rencana:

- **Fallback sadia** — léngkah fallback dicobaan langsung. Lamun hasil, palaksanaan neruskeun. Lamun éta ogé gagal, léngkah ditandaan `failed` sarta palaksanaan neruskeun ka léngkah salajengna.
- **Teu aya fallback** — léngkah ditandaan `failed`. Léngkah non-kritis dilewatan; léngkah kritis (ditandaan `required: true`) ngeureunkeun fase ayeuna sarta micu usaha pamulihan tingkat fase.

Agent ngalaporkeun sakabéh kagagalan dina ringkesan rencana ahir sarta bisa nyarankeun léngkah perbaikan manual pikeun kasalahan anu teu bisa dipulihkeun.

---

## Kamampuhan Rencana Situs {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Ngahasilkeun rencana situs terstruktur tina pedaran tujuan dina basa alami.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Pedaran basa alami ngeunaan website anu dipikahayang |
| `style` | string | No | Karesep gaya visual: `minimal`, `bold`, `professional`, `playful`. Standar: agent milih dumasar kana tujuan |
| `plugins` | array | No | Slug plugin pikeun diasupkeun kana rencana. Orchestrator nambahkeun plugin anu diperlukeun sacara otomatis. |
| `dry_run` | boolean | No | Lamun `true`, mulangkeun JSON rencana tanpa nyimpen atawa ngajalankeunana. Standar `false` |

**Mulangkeun** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Ngamimitian ngajalankeun rencana situs anu geus dihasilkeun saméméhna.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID tina plan anu rék dijalankeun |
| `auto_install_plugins` | boolean | No | Lamun `true`, otomatis masang plugin anu diperlukeun tanpa konfirmasi. Standar `false` |
| `max_retries` | integer | No | Jumlah kali pikeun nyobaan deui léngkah anu gagal saméméh neruskeun. Standar `1` |

**Ngabalikeun** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Ngabalikeun status palaksanaan ayeuna tina plan situs.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID pikeun ditaroskeun |

**Ngabalikeun** objék kamajuan anu dijelaskeun dina [Ngalacak Kamajuan](#4-progress-tracking) di luhur.

---

### `handle_plan_error` {#handleplanerror}

Ngabéréskeun sacara manual léngkah anu gagal sarta neruskeun palaksanaan plan ti léngkah salajengna. Paké ieu nalika pamulihan otomatis teu mungkin sarta anjeun rék campur tangan.

**Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID |
| `step_id` | string | Yes | ID tina léngkah anu gagal |
| `resolution` | string | Yes | Salah sahiji tina `skip` (ngaliwatan sarta nuluykeun), `retry` (nyobaan deui léngkahna langsung), atawa `mark_done` (dianggap hasil tanpa dijalankeun deui) |

**Ngabalikeun** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Ngabandingkeun v1 jeung v2 {#comparing-v1-and-v2}

| Fitur | v1 | v2 |
|---|---|---|
| Plan multi-fase | No | Yes |
| Rujukan kaluaran léngkah (`__ref:`) | No | Yes |
| Panemuan plugin | Manual | Automatic |
| API ngalacak kamajuan | No | Yes |
| Pamulihan kasalahan | Gagal-sarta-eureun | Fallback + nuluykeun |
| Palaksanaan léngkah paralel | No | Yes (opt-in per fase) |
| Paréntah plan WP-CLI | No | Yes |
| Integrasi benchmark | No | Yes (`q-restaurant-website`) |

---

## Paréntah Plan WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Ngahasilkeun plan situs tina pedaran tujuan.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Ngalaksanakeun plan anu geus dihasilkeun saméméhna.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Mintonkeun kamajuan ayeuna pikeun plan anu keur dijalankeun atawa geus réngsé.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Mintonkeun daptar sakabéh plan situs (nungguan, keur diprosés, jeung geus réngsé).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Ngareset plan anu gagal jadi `pending` sangkan bisa dijalankeun deui ti mimiti.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
