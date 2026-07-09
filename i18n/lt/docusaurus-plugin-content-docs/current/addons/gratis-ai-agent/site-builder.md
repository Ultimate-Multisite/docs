---
title: Svetainės kūrimo orkestravimas v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Svetainės kūrimo orkestravimas v2

Site Builder Orchestration v2 (pristatytas Gratis AI Agent v1.4.0) yra variklis, valdantis kelių žingsnių svetainių kūrimą. Kai paprašote agento „sukurti restorano svetainę“ arba „sukurti portfelį su tinklaraščiu“, orkestratorius suskaido šį aukšto lygio tikslą į struktūruotą **planą**, aptinka pluginus, reikalingus jam įgyvendinti, paeiliui vykdo kiekvieną žingsnį, seka pažangą ir autonomiškai atsistato po klaidų.

---

## Kaip tai veikia

### 1. Plano generavimas

Kai agentas gauna svetainės kūrimo instrukciją, jis iškviečia `create_site_plan` gebą, kad sukurtų JSON **svetainės planą**. Plane aprašoma:

- **Tikslas** — ką turėtų daryti užbaigta svetainė
- **Fazės** — sutvarkytos žingsnių grupės (pvz., _Sąranka_, _Turinio tipai_, _Dizainas_, _Turinys_)
- **Žingsniai** — atskiri gebų iškvietimai kiekvienoje fazėje
- **Pluginų reikalavimai** — pluginai, kurie turi būti aktyvūs, kad būtų galima vykdyti tam tikrus žingsnius
- **Atsarginiai veiksmai** — alternatyvūs žingsniai, jei pagrindinis žingsnis nepavyksta

**Plano pavyzdys (sutrumpintas)**

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

### 2. Pluginų aptikimas

Prieš pradedant vykdymą, orkestratorius peržiūri plano `plugin_requirements` ir patikrina, kurie pluginai jau aktyvūs. Trūkstamiems pluginams jis:

1. Ieško registre per `recommend_plugin`, kad rastų geriausią atitikmenį
2. Paprašo agento patvirtinti rekomendaciją
3. Paleidžia diegimą, jei patvirtinta (arba jei nustatymuose įjungtas automatinis diegimas)

Pluginų aptikimo klaidos nėra lemtingos — orkestratorius pažymi paveiktus žingsnius kaip `skipped` ir tęsia likusio plano vykdymą.

### 3. Plano vykdymas

Orkestratorius iškviečia `execute_site_plan` su plano ID. Vykdymas vyksta fazė po fazės, žingsnis po žingsnio:

- **Žingsnių nuorodos** (`__ref:` prefiksas) — žingsniai gali nurodyti ankstesnių žingsnių išvestis. Aukščiau pateiktame pavyzdyje `__ref:create_menu.menu_id` išsprendžiama į `menu_id`, grąžintą `create_menu` žingsnio.
- **Lygiagretūs žingsniai** — tos pačios fazės žingsniai, neturintys tarpusavio priklausomybių, išsiunčiami vykdyti vienu metu, kai nustatyta `parallel` žyma.
- **Žingsnio laiko limitas** — kiekvienas žingsnis turi individualų laiko limitą (numatytoji reikšmė: `Ability Timeout` nustatymas). Laiko limitą viršijęs žingsnis pažymimas kaip `failed`, o planas tęsiamas.

### 4. Pažangos sekimas

Bet kuriuo metu iškvieskite `get_plan_progress`, kad patikrintumėte vykdymo būseną:

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

WP-CLI naudotojai gali stebėti pažangą naudodami:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Klaidų atkūrimas

Kai žingsnis nepavyksta, orkestratorius patikrina, ar plane apibrėžtas **atsarginis** žingsnis:

- **Atsarginis veiksmas prieinamas** — atsarginis žingsnis bandomas nedelsiant. Jei jis pavyksta, vykdymas tęsiamas. Jei jis taip pat nepavyksta, žingsnis pažymimas kaip `failed`, o vykdymas tęsiamas kitu žingsniu.
- **Atsarginio veiksmo nėra** — žingsnis pažymimas kaip `failed`. Nekritiniai žingsniai praleidžiami; kritiniai žingsniai (pažymėti `required: true`) sustabdo dabartinę fazę ir paleidžia fazės lygio atkūrimo bandymą.

Agentas galutinėje plano santraukoje praneša apie visas klaidas ir gali pasiūlyti rankinio taisymo veiksmus neatkuriamoms klaidoms.

---

## Svetainės plano gebos

### `create_site_plan`

Sugeneruoja struktūruotą svetainės planą pagal natūralios kalbos tikslo aprašymą.

**Parametrai**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Pageidaujamos svetainės aprašymas natūralia kalba |
| `style` | string | No | Vizualinio stiliaus pageidavimas: `minimal`, `bold`, `professional`, `playful`. Numatytoji reikšmė: agentas pasirenka pagal tikslą |
| `plugins` | array | No | Pluginų slugai, kuriuos įtraukti į planą. Orkestratorius automatiškai prideda reikalingus pluginus. |
| `dry_run` | boolean | No | Jei `true`, grąžina plano JSON jo neišsaugodamas ir nevykdydamas. Numatytoji reikšmė `false` |

**Grąžina** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Pradeda vykdyti anksčiau sugeneruotą svetainės planą.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `plan_id` | string | Taip | Vykdytino plano ID |
| `auto_install_plugins` | boolean | Ne | Jei `true`, automatiškai įdiegia reikalingus papildinius be patvirtinimo. Numatytoji reikšmė `false` |
| `max_retries` | integer | Ne | Kartų skaičius, kiek bandyti iš naujo nepavykusį veiksmą prieš tęsiant. Numatytoji reikšmė `1` |

**Grąžina** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Grąžina dabartinę svetainės plano vykdymo būseną.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `plan_id` | string | Taip | Plano ID, kurio užklausiama |

**Grąžina** eigos objektą, aprašytą aukščiau skiltyje [Eigos stebėjimas](#4-progress-tracking).

---

### `handle_plan_error`

Rankiniu būdu išsprendžia nepavykusį veiksmą ir atnaujina plano vykdymą nuo kito veiksmo. Naudokite tai, kai automatinis atkūrimas nebuvo įmanomas ir norite įsikišti.

**Parametrai**

| Parametras | Tipas | Privaloma | Aprašymas |
|---|---|---|---|
| `plan_id` | string | Taip | Plano ID |
| `step_id` | string | Taip | Nepavykusio veiksmo ID |
| `resolution` | string | Taip | Vienas iš `skip` (praleisti ir tęsti), `retry` (nedelsiant pakartoti veiksmą) arba `mark_done` (laikyti sėkmingu nepaleidžiant iš naujo) |

**Grąžina** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 ir v2 palyginimas

| Funkcija | v1 | v2 |
|---|---|---|
| Daugiafazių planai | Ne | Taip |
| Veiksmo išvesties nuorodos (`__ref:`) | Ne | Taip |
| Papildinių aptikimas | Rankinis | Automatinis |
| Eigos stebėjimo API | Ne | Taip |
| Klaidų atkūrimas | Nepavykti ir sustoti | Atsarginis variantas + tęsti |
| Lygiagretus veiksmų vykdymas | Ne | Taip (pasirenkama kiekvienai fazei) |
| WP-CLI plano komandos | Ne | Taip |
| Benchmark integracija | Ne | Taip (`q-restaurant-website`) |

---

## WP-CLI plano komandos

### `wp gratis-ai-agent plan create`

Generuoja svetainės planą pagal tikslo aprašymą.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Vykdo anksčiau sugeneruotą planą.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Rodo dabartinę vykdomo arba užbaigto plano eigą.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Išvardija visus svetainės planus (laukiančius, vykdomus ir užbaigtus).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Iš naujo nustato nepavykusį planą į `pending`, kad jį būtų galima vykdyti iš naujo nuo pradžių.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
