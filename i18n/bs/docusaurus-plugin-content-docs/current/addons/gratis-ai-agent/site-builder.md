---
title: Orkestracija Izgradnje Sajta v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestracija v2

Site Builder Orchestracija v2 (uvedena sa Gratis AI Agent v1.4.0) je motor koji pokreće kreiranje web stranica u više koraka. Kada agentu kažete da "izgradi restoran web stranicu" ili "kreira portfolio sa blogom", orkestrator razbija taj cilj na visokom nivou u strukturiran **plan**, otkriva pluginove potrebne za njegovo ostvarenje, izvršava svaki korak sekvencijalno, prati napredak i autonomno se oporavlja od grešaka.

---

## Kako Funkcioniše {#how-it-works}

### 1. Generisanje plana {#1-plan-generation}

Kada agent primi uputstvo za izgradnju stranice, on poziva sposobnost `create_site_plan` kako bi proizveo JSON **plan stranice**. Plan opisuje:

- **Cilj** — šta završena stranica treba da radi
- **Faze** — sekvencijalne grupe koraka (npr. _Postavljanje_, _Tipovi sadržaja_, _Dizajn_, _Sadržaj_)
- **Koraci** — pojedinačne pozive sposobnosti unutar svake faze
- **Zahtjevani pluginovi** — pluginovi koji moraju biti aktivni da bi određeni koraci mogli da se izvrše
- **Fallback-ovi** — alternativni koraci ako primarni korak ne uspije

**Primjer plana (skraćeno)**

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

### 2. Otkrivanje pluginova {#2-plugin-discovery}

Prije nego što počne izvršavanje, orkestrator skenira `plugin_requirements` plana i proverava koji su pluginovi već aktivni. Za nedostajuće pluginove, on:

1. Pretražuje registar putem `recommend_plugin` radi najboljeg odgovaranja
2. Traži od agenta potvrdu preporuke
3. Pokreće instalaciju ako je odobreno (ili ako je automatska instalacija omogućena u podešavanjima)

Neuspešnost otkrivanja pluginova nije kritična — orkestrator označava pogođene korake kao `skipped` i nastavlja sa ostatkom plana.

### 3. Izvršavanje plana {#3-plan-execution}

Orkestrator poziva `execute_site_plan` sa ID-jem plana. Izvršavanje se odvija fazom po fazu, korak po korak:

- **Reference koraka** (`__ref:` prefiks) — koraci mogu da se odnose na izlaze prethodnih koraka. U gornjem primjeru, `__ref:create_menu.menu_id` se rješava u `menu_id` koji je vraćen od koraka `create_menu`.
- **Paralelni koraci** — koraci unutar iste faze koji nemaju međusobnih ovisnosti pokreću se istovremeno kada je postavljena oznaka `parallel`.
- **Timeout koraka** — svaki korak ima pojedinačan timeout (podrazumevano: podešavanje `Ability Timeout`). Korak koji je isteklo vrijeme označava se kao `failed` i plan nastavlja.

### 4. Praćenje napretka {#4-progress-tracking}

Pozovite `get_plan_progress` u bilo kojem trenutku da provjerite status izvršavanja:

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

Korisnici WP-CLI mogu pratiti napredak sa:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Oporavak od grešaka {#5-error-recovery}

Kada korak ne uspije, orkestrator provjerava da li postoji **fallback** korak definisan u planu:

- **Fallback je dostupan** — pokušava se fallback korak odmah. Ako uspije, izvršavanje se nastavlja. Ako i on ne uspije, korak se označava kao `failed` i izvršavanje nastavlja sa sljedećim korakom.
- **Nema fallback-a** — korak se označava kao `failed`. Nije kritični koraci preskaču; kritični koraci (označeni `required: true`) zaustavljaju trenutnu fazu i pokreću pokušaj oporavka na nivou faze.

Agent izvještava sve neuspjehe u konačnom sažetku plana i može predložiti ručne korake za rješavanje neopravljivih grešaka.

---

## Sposnosti plana stranice (Site Plan Abilities) {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Generiše strukturirani plan stranice iz opisa cilja na prirodnom jeziku.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Opis cilja web stranice na prirodnom jeziku |
| `style` | string | No | Vizuelni stil: `minimal`, `bold`, `professional`, `playful`. Podrazumevano: agent bira na osnovu cilja |
| `plugins` | array | No | Slugs pluginova koje treba uključiti u plan. Orkestrator automatski dodaje potrebne pluginove. |
| `dry_run` | boolean | No | Ako je `true`, vraća JSON plan bez čuvanja ili izvršavanja. Podrazumevano `false` |

**Vraća** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Pokreće izvršavanje prethodno generisanog plana stranice.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID plana za izvršavanje |
| `auto_install_plugins` | boolean | No | Ako je `true`, automatski instalira potrebne pluginove bez potvrde. Podrazumevano `false` |
| `max_retries` | integer | No | Broj puta za ponovno pokretanje neuspjelog koraka prije nego što se pređe. Podrazumevano `1` |

**Vraća** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Vraća trenutni status izvršavanja plana stranice.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID plana za upit |

**Vraća** objekat napretka opisan u [Praćenje napretka](#4-praćenje-napretka) iznad.

---

### `handle_plan_error` {#handleplanerror}

Ručno rješava neuspješan korak i nastavlja izvršavanje plana od sljedećeg koraka. Koristite ovo kada nije bio moguć automatski oporavak i želite da intervenišete.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID plana |
| `step_id` | string | Yes | ID neuspješnog koraka |
| `resolution` | string | Yes | Jedan od `skip` (preskoči i nastavi), `retry` (ponovi korak odmah), ili `mark_done` (tretiraj kao uspješno bez ponovnog pokretanja) |

**Vraća** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Poređenje v1 i v2 {#comparing-v1-and-v2}

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans | No | Yes |
| Step output references (`__ref:`) | No | Yes |
| Plugin discovery | Manual | Automatic |
| Progress tracking API | No | Yes |
| Error recovery | Fail-and-stop | Fallback + continue |
| Parallel step execution | No | Yes (opt-in per phase) |
| WP-CLI plan commands | No | Yes |
| Benchmark integration | No | Yes (`q-restaurant-website`) |

---

## WP-CLI Komande za Plan {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Generiše plan stranice iz opisa cilja.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Izvršava prethodno generisani plan.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Prikazuje trenutni napredak za izvršavan ili završen plan.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Lista svih planova stranica (u čekanju, u toku i završeni).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Resetuje neuspješan plan na `pending` kako bi ga bilo moguće ponovo izvršiti od početka.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
