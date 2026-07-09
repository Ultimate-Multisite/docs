---
title: Orkestracija alata za izradu web-mjesta v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder orkestracija v2

Site Builder orkestracija v2 (uvedena u Gratis AI Agent v1.4.0) je mehanizam koji pokreće izradu web-stranica u više koraka. Kada od agenta zatražite da "izradi web-stranicu restorana" ili "stvori portfolio s blogom", orkestrator razlaže taj cilj visoke razine u strukturirani **plan**, otkriva pluginove potrebne za njegovo ispunjenje, izvršava svaki korak redom, prati napredak i autonomno se oporavlja od pogrešaka.

---

## Kako funkcionira

### 1. Generiranje plana

Kada agent primi uputu za izradu web-stranice, poziva sposobnost `create_site_plan` kako bi proizveo JSON **plan web-stranice**. Plan opisuje:

- **Cilj** — što bi dovršena web-stranica trebala raditi
- **Faze** — uređene skupine koraka (npr. _Postavljanje_, _Vrste sadržaja_, _Dizajn_, _Sadržaj_)
- **Koraci** — pojedinačni pozivi sposobnosti unutar svake faze
- **Zahtjevi za pluginove** — pluginovi koji moraju biti aktivni da bi se određeni koraci mogli pokrenuti
- **Rezervne opcije** — alternativni koraci ako primarni korak ne uspije

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

### 2. Otkrivanje pluginova

Prije početka izvršavanja, orkestrator skenira `plugin_requirements` plana i provjerava koji su pluginovi već aktivni. Za pluginove koji nedostaju:

1. Pretražuje registar putem `recommend_plugin` za najbolje podudaranje
2. Traži od agenta potvrdu preporuke
3. Pokreće instalaciju ako je odobrena (ili ako je automatska instalacija omogućena u postavkama)

Neuspjesi pri otkrivanju pluginova nisu fatalni — orkestrator označava pogođene korake kao `skipped` i nastavlja s ostatkom plana.

### 3. Izvršavanje plana

Orkestrator poziva `execute_site_plan` s ID-jem plana. Izvršavanje se odvija fazu po fazu, korak po korak:

- **Reference koraka** (`__ref:` prefiks) — koraci mogu referencirati izlaze iz prethodnih koraka. U gornjem primjeru, `__ref:create_menu.menu_id` razrješava se u `menu_id` koji vraća korak `create_menu`.
- **Paralelni koraci** — koraci unutar iste faze koji nemaju međusobne ovisnosti pokreću se istodobno kada je postavljena zastavica `parallel`.
- **Istek vremena koraka** — svaki korak ima zaseban istek vremena (zadano: postavka `Ability Timeout`). Korak kojem je isteklo vrijeme označava se kao `failed` i plan se nastavlja.

### 4. Praćenje napretka

Pozovite `get_plan_progress` u bilo kojem trenutku kako biste provjerili status izvršavanja:

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

Korisnici WP-CLI-ja mogu pratiti napredak pomoću:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Oporavak od pogrešaka

Kada korak ne uspije, orkestrator provjerava postoji li **rezervni** korak definiran u planu:

- **Rezervna opcija dostupna** — rezervni korak pokušava se odmah. Ako uspije, izvršavanje se nastavlja. Ako i on ne uspije, korak se označava kao `failed` i izvršavanje se nastavlja sa sljedećim korakom.
- **Nema rezervne opcije** — korak se označava kao `failed`. Nekritični koraci se preskaču; kritični koraci (označeni s `required: true`) zaustavljaju trenutačnu fazu i pokreću pokušaj oporavka na razini faze.

Agent prijavljuje sve neuspjehe u završnom sažetku plana i može predložiti ručne korake za ispravljanje nepopravljivih pogrešaka.

---

## Sposobnosti plana web-stranice

### `create_site_plan`

Generira strukturirani plan web-stranice iz opisa cilja na prirodnom jeziku.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Opis željene web-stranice na prirodnom jeziku |
| `style` | string | No | Preferencija vizualnog stila: `minimal`, `bold`, `professional`, `playful`. Zadano: agent odabire na temelju cilja |
| `plugins` | array | No | Slugovi pluginova koje treba uključiti u plan. Orkestrator automatski dodaje potrebne pluginove. |
| `dry_run` | boolean | No | Ako je `true`, vraća JSON plana bez spremanja ili izvršavanja. Zadano `false` |

**Vraća** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Počinje izvršavati prethodno generirani plan web-stranice.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `plan_id` | string | Da | ID plana za izvršavanje |
| `auto_install_plugins` | boolean | Ne | Ako je `true`, automatski instalira potrebne dodatke bez potvrde. Zadano `false` |
| `max_retries` | integer | Ne | Broj pokušaja ponavljanja neuspjelog koraka prije nastavka. Zadano `1` |

**Vraća** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Vraća trenutačni status izvršavanja plana web-mjesta.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `plan_id` | string | Da | ID plana za upit |

**Vraća** objekt napretka opisan u [Praćenje napretka](#4-progress-tracking) iznad.

---

### `handle_plan_error`

Ručno rješava neuspjeli korak i nastavlja izvršavanje plana od sljedećeg koraka. Upotrijebite ovo kada automatski oporavak nije bio moguć i želite intervenirati.

**Parametri**

| Parametar | Vrsta | Obavezno | Opis |
|---|---|---|---|
| `plan_id` | string | Da | ID plana |
| `step_id` | string | Da | ID neuspjelog koraka |
| `resolution` | string | Da | Jedno od `skip` (preskoči i nastavi), `retry` (odmah ponovno pokušaj korak) ili `mark_done` (tretiraj kao uspješno bez ponovnog pokretanja) |

**Vraća** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Usporedba v1 i v2

| Značajka | v1 | v2 |
|---|---|---|
| Višefazni planovi | Ne | Da |
| Reference na izlaz koraka (`__ref:`) | Ne | Da |
| Otkrivanje dodataka | Ručno | Automatski |
| API za praćenje napretka | Ne | Da |
| Oporavak od pogreške | Neuspjeh i zaustavljanje | Rezervno rješenje + nastavak |
| Paralelno izvršavanje koraka | Ne | Da (uključuje se po fazi) |
| WP-CLI naredbe plana | Ne | Da |
| Integracija s benchmarkom | Ne | Da (`q-restaurant-website`) |

---

## WP-CLI naredbe plana

### `wp gratis-ai-agent plan create`

Generira plan web-mjesta iz opisa cilja.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Izvršava prethodno generirani plan.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Prikazuje trenutačni napredak za plan koji se izvršava ili je dovršen.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Navodi sve planove web-mjesta (na čekanju, u tijeku i dovršene).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Vraća neuspjeli plan na `pending` kako bi se mogao ponovno izvršiti od početka.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
