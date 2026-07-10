---
title: Orchestrarea Site Builder v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orchestrarea Site-ului cu Constructorul v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (introducție în Gratis AI Agent v1.4.0) este motorul care alimentează crearea de site-uri web cu mai multe etape. Când îi ceri agentului să „construiască un site pentru un restaurant” sau să „creeze un portofoliu cu un blog”, orchestratorul descompune acest obiectiv de nivel înalt într-un **plan** structurat, descoperă plugin-urile necesare pentru a-l îndeplini, execută fiecare pas în ordine, urmărește progresul și se recuperează autonom de erori.

---

## Cum Funcționează {#how-it-works}

### 1. Generarea Planului {#1-plan-generation}

Când agentul primește o instrucțiune de construire a unui site, apelează abilitatea `create_site_plan` pentru a produce un **plan de site** în format JSON. Planul descrie:

- **Obiectiv (Goal)** — ce ar trebui să facă site-ul final
- **Faze (Phases)** — grupuri ordonate de pași (de exemplu, _Setup_, _Tipuri de Conținut_, _Design_, _Conținut_)
- **Pași (Steps)** — apeluri individuale de abilități în cadrul fiecărei faze
- **Cerințe de plugin** — plugin-uri care trebuie să fie active pentru ca anumite pași să ruleze
- **Planuri de rezervă (Fallbacks)** — pași alternativi dacă un pas principal eșuează

**Exemplu de plan (abreviat)**

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

### 2. Descoperirea Plugin-urilor {#2-plugin-discovery}

Înainte de a începe execuția, orchestratorul scanează `plugin_requirements` din plan și verifică ce plugin-uri sunt deja active. Pentru plugin-urile lipsă, el:

1. Căută în registru folosind `recommend_plugin` cea mai bună potrivire
2. Solicită agentului confirmarea recomandării
3. Declanșează instalarea dacă este aprobat (sau dacă auto-instalarea este activată în setări)

Eșecurile de descoperire a plugin-urilor nu sunt fatale — orchestratorul marchează pașii afectați ca `skipped` (sărit) și continuă cu restul planului.

### 3. Execuția Planului {#3-plan-execution}

Orchestratorul apelează `execute_site_plan` cu ID-ul planului. Execuția se desfășoară fază cu fază, pas cu pas:

- **Referințe de pași** (`__ref:` prefix) — pașii pot face referire la rezultatele pașilor anteriori. În exemplul de mai sus, `__ref:create_menu.menu_id` este rezolvat la `menu_id` returnat de pasul `create_menu`.
- **Pași paraleli** — pașii din aceeași fază care nu au dependențe între ei sunt trimși în mod concomitent atunci când este setat flag-ul `parallel`.
- **Timeout pas** — fiecare pas are un timeout individual (implicit: setarea `Ability Timeout`). Un pas care expiră este marcat ca `failed` (eșuat) și planul continuă.

### 4. Urmărirea Progresului {#4-progress-tracking}

Apelează `get_plan_progress` în orice moment pentru a verifica starea execuției:

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

Utilizatorii WP-CLI pot monitoriza progresul cu:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Recuperarea de Erori {#5-error-recovery}

Când un pas eșuează, orchestratorul verifică dacă există un pas de **rezervă (fallback)** definit în plan:

- **Fallback disponibil** — pasul de rezervă este încercat imediat. Dacă reușește, execuția continuă. Dacă și acesta eșuează, pasul este marcat ca `failed` și execuția continuă cu pasul următor.
- **Fără fallback** — pasul este marcat ca `failed`. Pașii ne-critici sunt săriți; pașii critici (marcați ca `required: true`) opresc fața curentă și declanșează o încercare de recuperare la nivel de fază.

Agentul raportează toate eșecurile în rezumatul final al planului și poate sugera pași de remediere manuală pentru erorile irecuperabile.

---

## Abilitățile Planului de Site {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Generează un plan de site structurat dintr-o descriere de obiectiv în limbaj natural.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `goal` | string | Da | Descriere în limbaj natural a site-ului dorit |
| `style` | string | Nu | Preferința de stil vizual: `minimal`, `bold`, `professional`, `playful`. Implicit: agentul alege pe baza obiectivului |
| `plugins` | array | Nu | Slug-uri de plugin de inclus în plan. Orchestratorul adaugă automat plugin-urile necesare. |
| `dry_run` | boolean | Nu | Dacă este `true`, returnează JSON-ul planului fără a salva sau executa nimic. Implicit `false` |

**Returnează** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Începe executarea unui plan de site generat anterior.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `plan_id` | string | Da | ID-ul planului de execuție |
| `auto_install_plugins` | boolean | Nu | Dacă este `true`, instalează automat plugin-urile necesare fără confirmare. Implicit `false` |
| `max_retries` | integer | Nu | Numărul de ori în care se va încerca din nou un pas eșuat înainte de a trece mai departe. Implicit `1` |

**Returnează** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Returnează starea curentă de execuție a unui plan de site.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `plan_id` | string | Da | ID-ul planului de interogare |

**Returnează** obiectul de progres descris la [Urmărirea Progresului](#4-urmărirea-progresului) de mai sus.

---

### `handle_plan_error` {#handleplanerror}

Rezolvă manual un pas eșuat și reia execuția planului de la pasul următor. Folosește acest lucru când recuperarea automată nu a fost posibilă și vrei să intervii.

**Parametri**

| Parametru | Tip | Obligatoriu | Descriere |
|---|---|---|---|
| `plan_id` | string | Da | ID-ul planului |
| `step_id` | string | Da | ID-ul pasului eșuat |
| `resolution` | string | Da | Unul dintre `skip` (sărit și continuă), `retry` (încercare imediată a pasului) sau `mark_done` (tratează ca reușit fără a rula din nou) |

**Returnează** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Compararea v1 și v2 {#comparing-v1-and-v2}

| Funcționalitate | v1 | v2 |
|---|---|---|
| Planuri cu mai multe faze | Nu | Da |
| Referințe de rezultate ale pașilor (`__ref:`) | Nu | Da |
| Descoperirea plugin-urilor | Manuală | Automatică |
| API de urmărire a progresului | Nu | Da |
| Recuperarea erorilor | Eșuează și oprește | Fallback + continuă |
| Execuția pașilor paraleli | Nu | Da (opțional per fază) |
| Comenzi plan WP-CLI | Nu | Da |
| Integrarea benchmark-ului | Nu | Da (`q-restaurant-website`) |

---

## Comenzi Plan WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Generează un plan de site dintr-o descriere de obiectiv.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Execută un plan generat anterior.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Arată progresul curent pentru un plan în execuție sau completat.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Listează toate planurile de site (în așteptare, în progres și completate).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Resetează un plan eșuat la starea `pending` (în așteptare) pentru a putea fi reexecutat de la început.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
