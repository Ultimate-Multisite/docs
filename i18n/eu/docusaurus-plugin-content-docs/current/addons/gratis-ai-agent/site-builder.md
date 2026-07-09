---
title: Gune-eraikitzailearen orkestrazioa v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (Gratis AI Agent v1.4.0-n sartua) urrats anitzeko webgune-sorkuntza bultzatzen duen motorra da. Agenteari "jatetxe-webgune bat eraiki" edo "sortu bloga duen portfolio bat" eskatzen diozunean, orkestratzaileak goi-mailako helburu hori **plan** egituratu batean zatitzen du, hura betetzeko behar diren pluginak aurkitzen ditu, urrats bakoitza sekuentzian exekutatzen du, aurrerapena jarraitzen du, eta erroreetatik autonomoki berreskuratzen da.

---

## Nola funtzionatzen duen {#how-it-works}

### 1. Planaren sorrera {#1-plan-generation}

Agenteak gunea eraikitzeko jarraibide bat jasotzen duenean, `create_site_plan` gaitasuna deitzen du JSON **gune-plana** sortzeko. Planak hau deskribatzen du:

- **Helburua** — amaitutako guneak zer egin behar duen
- **Faseak** — urratsen talde ordenatuak (adib. _Konfigurazioa_, _Eduki motak_, _Diseinua_, _Edukia_)
- **Urratsak** — fase bakoitzeko gaitasun-dei indibidualak
- **Plugin-eskakizunak** — urrats jakin batzuk exekutatzeko aktibo egon behar duten pluginak
- **Ordezko aukerak** — urrats nagusi batek huts egiten badu erabiltzeko urrats alternatiboak

**Adibideko plana (laburtua)**

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

### 2. Pluginen aurkikuntza {#2-plugin-discovery}

Exekuzioa hasi aurretik, orkestratzaileak planaren `plugin_requirements` eskaneatzen ditu eta zein plugin dagoen dagoeneko aktibo egiaztatzen du. Falta diren pluginetarako, hau egiten du:

1. Erregistroan bilatzen du `recommend_plugin` bidez parekatzerik onena aurkitzeko
2. Agenteari gomendioa berresteko eskatzen dio
3. Instalazioa abiarazten du onartuz gero (edo ezarpenetan auto-instalazioa gaituta badago)

Pluginen aurkikuntzako hutsegiteak ez dira hilgarriak — orkestratzaileak eragindako urratsak `skipped` gisa markatzen ditu eta planaren gainerakoarekin jarraitzen du.

### 3. Planaren exekuzioa {#3-plan-execution}

Orkestratzaileak `execute_site_plan` deitzen du planaren IDarekin. Exekuzioa fasez fase, urratsez urrats doa:

- **Urrats-erreferentziak** (`__ref:` aurrizkia) — urratsek aurreko urratsetako irteerak erreferentzia ditzakete. Goiko adibidean, `__ref:create_menu.menu_id` `create_menu` urratsak itzulitako `menu_id` baliora ebazten da.
- **Urrats paraleloak** — fase bereko urratsak, elkarren arteko mendekotasunik ez badute, aldi berean bidaltzen dira `parallel` bandera ezarrita dagoenean.
- **Urratsaren denbora-muga** — urrats bakoitzak denbora-muga indibiduala du (lehenetsia: `Ability Timeout` ezarpena). Denbora-muga gainditzen duen urratsa `failed` gisa markatzen da eta planak jarraitzen du.

### 4. Aurrerapenaren jarraipena {#4-progress-tracking}

Deitu `get_plan_progress` edozein unetan exekuzio-egoera egiaztatzeko:

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

WP-CLI erabiltzaileek aurrerapena monitoriza dezakete honekin:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Erroreetatik berreskuratzea {#5-error-recovery}

Urrats batek huts egiten duenean, orkestratzaileak planean definitutako **ordezko** urratsik dagoen egiaztatzen du:

- **Ordezko aukera eskuragarri** — ordezko urratsa berehala saiatzen da. Arrakastatsua bada, exekuzioak jarraitzen du. Hark ere huts egiten badu, urratsa `failed` gisa markatzen da eta exekuzioak hurrengo urratsarekin jarraitzen du.
- **Ordezko aukerarik ez** — urratsa `failed` gisa markatzen da. Urrats ez-kritikoak saltatzen dira; urrats kritikoek (`required: true` gisa markatuak) uneko fasea gelditzen dute eta fase-mailako berreskuratze-saiakera bat abiarazten dute.

Agenteak azken plan-laburpenean hutsegite guztiak jakinarazten ditu, eta berreskuraezinak diren erroreetarako eskuzko konponketa-urratsak iradoki ditzake.

---

## Gune-planaren gaitasunak {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Gune-plan egituratu bat sortzen du hizkuntza naturaleko helburu-deskribapen batetik.

**Parametroak**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Nahi den webgunearen hizkuntza naturaleko deskribapena |
| `style` | string | No | Ikusizko estiloaren lehentasuna: `minimal`, `bold`, `professional`, `playful`. Lehenetsia: agenteak helburuaren arabera aukeratzen du |
| `plugins` | array | No | Planean sartzeko plugin-slugak. Orkestratzaileak beharrezko pluginak automatikoki gehitzen ditu. |
| `dry_run` | boolean | No | `true` bada, planaren JSONa itzultzen du hura gorde edo exekutatu gabe. Lehenetsia `false` |

**Itzultzen du** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Aurrez sortutako gune-plan bat exekutatzen hasten da.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `plan_id` | string | Bai | Exekutatu beharreko planaren IDa |
| `auto_install_plugins` | boolean | Ez | `true` bada, beharrezko pluginak automatikoki instalatzen ditu berrespenik gabe. Lehenetsia `false` |
| `max_retries` | integer | Ez | Huts egindako urrats bat berriro saiatzeko aldien kopurua aurrera jarraitu aurretik. Lehenetsia `1` |

**Itzultzen du** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Gune-plan baten uneko exekuzio-egoera itzultzen du.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `plan_id` | string | Bai | Kontsultatu beharreko planaren IDa |

**Itzultzen du** goian [Aurrerapenaren jarraipena](#4-progress-tracking) atalean deskribatutako aurrerapen-objektua.

---

### `handle_plan_error` {#handleplanerror}

Huts egindako urrats bat eskuz konpontzen du eta planaren exekuzioa hurrengo urratsetik berrekiten du. Erabili hau berreskuratze automatikoa posible izan ez denean eta esku hartu nahi duzunean.

**Parametroak**

| Parametroa | Mota | Beharrezkoa | Deskribapena |
|---|---|---|---|
| `plan_id` | string | Bai | Planaren IDa |
| `step_id` | string | Bai | Huts egindako urratsaren IDa |
| `resolution` | string | Bai | Hauetako bat: `skip` (saltatu eta jarraitu), `retry` (urratsa berehala berriro saiatu), edo `mark_done` (arrakastatsutzat hartu berriro exekutatu gabe) |

**Itzultzen du** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 eta v2 alderatzea {#comparing-v1-and-v2}

| Ezaugarria | v1 | v2 |
|---|---|---|
| Fase anitzeko planak | Ez | Bai |
| Urratsen irteeraren erreferentziak (`__ref:`) | Ez | Bai |
| Pluginen aurkikuntza | Eskuzkoa | Automatikoa |
| Aurrerapena jarraitzeko APIa | Ez | Bai |
| Erroreen berreskurapena | Huts egin eta gelditu | Ordezko bidea + jarraitu |
| Urratsen exekuzio paraleloa | Ez | Bai (fase bakoitzean aukerakoa) |
| WP-CLI planaren komandoak | Ez | Bai |
| Benchmark integrazioa | Ez | Bai (`q-restaurant-website`) |

---

## WP-CLI planaren komandoak {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Helburuaren deskribapen batetik gune-plan bat sortzen du.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Aurrez sortutako plan bat exekutatzen du.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Exekutatzen ari den edo osatutako plan baten uneko aurrerapena erakusten du.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Gune-plan guztiak zerrendatzen ditu (zain, abian eta osatuta).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Huts egindako plan bat `pending` egoerara berrezartzen du, hasieratik berriro exekutatu ahal izateko.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
