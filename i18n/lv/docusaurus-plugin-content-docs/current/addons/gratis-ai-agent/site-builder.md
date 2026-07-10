---
title: Vietnes veidotāja orķestrācija v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (ieviests Gratis AI Agent v1.4.0) ir dzinis, kas nodrošina vairāku soļu vietņu izveidi. Kad lūdzat agentam “izveidot restorāna vietni” vai “izveidot portfolio ar emuāru”, orchestrator sadala šo augsta līmeņa mērķi strukturētā **plānā**, atrod pluginus, kas nepieciešami tā izpildei, izpilda katru soli secīgi, seko progresam un autonomi atkopjas pēc kļūdām.

---

## Kā tas darbojas {#how-it-works}

### 1. Plāna ģenerēšana {#1-plan-generation}

Kad agents saņem vietnes izveides norādījumu, tas izsauc `create_site_plan` spēju, lai izveidotu JSON **vietnes plānu**. Plāns apraksta:

- **Mērķis** — ko pabeigtajai vietnei vajadzētu darīt
- **Fāzes** — sakārtotas soļu grupas (piem., _Iestatīšana_, _Satura tipi_, _Dizains_, _Saturs_)
- **Soļi** — atsevišķi spēju izsaukumi katrā fāzē
- **Pluginu prasības** — plugini, kuriem jābūt aktīviem, lai noteikti soļi varētu darboties
- **Atkāpšanās varianti** — alternatīvi soļi, ja primārais solis neizdodas

**Plāna piemērs (saīsināts)**

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

### 2. Pluginu atklāšana {#2-plugin-discovery}

Pirms izpildes sākuma orchestrator pārskata plāna `plugin_requirements` un pārbauda, kuri plugini jau ir aktīvi. Trūkstošajiem pluginiem tas:

1. Meklē reģistrā, izmantojot `recommend_plugin`, lai atrastu labāko atbilstību
2. Aicina agentu apstiprināt ieteikumu
3. Aktivizē instalēšanu, ja tas ir apstiprināts (vai ja iestatījumos ir iespējota automātiskā instalēšana)

Pluginu atklāšanas kļūmes nav fatālas — orchestrator atzīmē ietekmētos soļus kā `skipped` un turpina ar pārējo plāna daļu.

### 3. Plāna izpilde {#3-plan-execution}

Orchestrator izsauc `execute_site_plan` ar plāna ID. Izpilde notiek pa fāzēm, soli pa solim:

- **Soļu atsauces** (`__ref:` prefikss) — soļi var atsaukties uz iepriekšējo soļu izvadi. Iepriekš minētajā piemērā `__ref:create_menu.menu_id` tiek atrisināts uz `menu_id`, ko atgriež `create_menu` solis.
- **Paralēlie soļi** — soļi vienā un tajā pašā fāzē, kuriem nav savstarpēju atkarību, tiek palaisti vienlaikus, ja ir iestatīts `parallel` karodziņš.
- **Soļa taimauts** — katram solim ir individuāls taimauts (noklusējums: `Ability Timeout` iestatījums). Solis, kam beidzies taimauts, tiek atzīmēts kā `failed`, un plāns turpinās.

### 4. Progresa izsekošana {#4-progress-tracking}

Izsauciet `get_plan_progress` jebkurā laikā, lai pārbaudītu izpildes statusu:

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

WP-CLI lietotāji var uzraudzīt progresu ar:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Kļūdu atkopšana {#5-error-recovery}

Kad solis neizdodas, orchestrator pārbauda, vai plānā ir definēts **atkāpšanās** solis:

- **Pieejams atkāpšanās variants** — atkāpšanās solis tiek mēģināts nekavējoties. Ja tas izdodas, izpilde turpinās. Ja arī tas neizdodas, solis tiek atzīmēts kā `failed`, un izpilde turpinās ar nākamo soli.
- **Nav atkāpšanās varianta** — solis tiek atzīmēts kā `failed`. Nekritiski soļi tiek izlaisti; kritiski soļi (atzīmēti ar `required: true`) aptur pašreizējo fāzi un aktivizē fāzes līmeņa atkopšanas mēģinājumu.

Agents ziņo par visām kļūmēm galīgajā plāna kopsavilkumā un var ieteikt manuālus novēršanas soļus neatkopjamām kļūdām.

---

## Vietnes plāna spējas {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Ģenerē strukturētu vietnes plānu no dabiskās valodas mērķa apraksta.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Vēlamās vietnes apraksts dabiskā valodā |
| `style` | string | No | Vizuālā stila preference: `minimal`, `bold`, `professional`, `playful`. Noklusējums: agents izvēlas, pamatojoties uz mērķi |
| `plugins` | array | No | Plaginu slugi, ko iekļaut plānā. Orchestrator automātiski pievieno nepieciešamos pluginus. |
| `dry_run` | boolean | No | Ja `true`, atgriež plāna JSON, to nesaglabājot un neizpildot. Noklusējums `false` |

**Atgriež** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Sāk izpildīt iepriekš ģenerētu vietnes plānu.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `plan_id` | string | Jā | Izpildāmā plāna ID |
| `auto_install_plugins` | boolean | Nē | Ja `true`, automātiski instalē nepieciešamos plugins bez apstiprinājuma. Noklusējums `false` |
| `max_retries` | integer | Nē | Reižu skaits, cik atkārtoti mēģināt neveiksmīgu soli pirms turpināšanas. Noklusējums `1` |

**Atgriež** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Atgriež pašreizējo site plāna izpildes statusu.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `plan_id` | string | Jā | Plāna ID vaicāšanai |

**Atgriež** iepriekš sadaļā [Progresa izsekošana](#4-progress-tracking) aprakstīto progresa objektu.

---

### `handle_plan_error` {#handleplanerror}

Manuāli atrisina neveiksmīgu soli un atsāk plāna izpildi no nākamā soļa. Izmantojiet šo, kad automātiska atkopšana nebija iespējama un vēlaties iejaukties.

**Parametri**

| Parametrs | Tips | Obligāts | Apraksts |
|---|---|---|---|
| `plan_id` | string | Jā | Plāna ID |
| `step_id` | string | Jā | Neveiksmīgā soļa ID |
| `resolution` | string | Jā | Viens no `skip` (izlaist un turpināt), `retry` (nekavējoties atkārtot soli) vai `mark_done` (uzskatīt par veiksmīgu bez atkārtotas palaišanas) |

**Atgriež** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 un v2 salīdzinājums {#comparing-v1-and-v2}

| Funkcija | v1 | v2 |
|---|---|---|
| Vairāku fāžu plāni | Nē | Jā |
| Soļa izvades atsauces (`__ref:`) | Nē | Jā |
| Plugin atklāšana | Manuāla | Automātiska |
| Progresa izsekošanas API | Nē | Jā |
| Kļūdu atkopšana | Neizdodas un apstājas | Rezerves risinājums + turpināt |
| Paralēla soļu izpilde | Nē | Jā (pēc izvēles katrai fāzei) |
| WP-CLI plāna komandas | Nē | Jā |
| Benchmark integrācija | Nē | Jā (`q-restaurant-website`) |

---

## WP-CLI plāna komandas {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Ģenerē site plānu no mērķa apraksta.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Izpilda iepriekš ģenerētu plānu.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Parāda pašreizējo progresu izpildāmam vai pabeigtam plānam.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Uzskaita visus site plānus (gaidošos, procesā esošos un pabeigtos).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Atiestata neveiksmīgu plānu uz `pending`, lai to varētu atkārtoti izpildīt no sākuma.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
