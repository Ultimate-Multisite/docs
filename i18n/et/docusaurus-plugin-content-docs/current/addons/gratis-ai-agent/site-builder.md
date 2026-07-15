---
title: Saidiehitaja orkestreerimine v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builderi orkestreerimine v2

Site Builderi orkestreerimine v2 (kasutusele võetud Gratis AI Agent v1.4.0-s) on mootor, mis võimaldab mitmesammulist veebisaidi loomist. Kui palud agendil „luua restorani veebisait” või „luua portfoolio koos blogiga”, jagab orkestreerija selle kõrgetasemelise eesmärgi struktureeritud **plaaniks**, leiab selle täitmiseks vajalikud pluginad, käivitab iga sammu järjest, jälgib edenemist ja taastub vigadest autonoomselt.

---

## Kuidas see töötab {#how-it-works}

### 1. Plaani genereerimine {#1-plan-generation}

Kui agent saab saidi loomise juhise, kutsub see välja `create_site_plan` võimekuse, et luua JSON **saidiplaan**. Plaan kirjeldab:

- **Eesmärk** — mida valmis sait peaks tegema
- **Faasid** — järjestatud sammurühmad (nt _Seadistamine_, _Sisutüübid_, _Disain_, _Sisu_)
- **Sammud** — üksikud võimekuse väljakutsed igas faasis
- **Pluginate nõuded** — pluginad, mis peavad teatud sammude käivitamiseks aktiivsed olema
- **Varuvariandid** — alternatiivsed sammud, kui põhisamm ebaõnnestub

**Näidisplaan (lühendatud)**

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

### 2. Pluginate avastamine {#2-plugin-discovery}

Enne käivitamise algust skannib orkestreerija plaani `plugin_requirements` ja kontrollib, millised pluginad on juba aktiivsed. Puuduvate pluginate puhul see:

1. Otsib registrist `recommend_plugin` kaudu parimat vastet
2. Palub agendil soovituse kinnitada
3. Käivitab paigalduse, kui see heaks kiidetakse (või kui automaatne paigaldus on seadetes lubatud)

Pluginate avastamise tõrked ei ole fataalsed — orkestreerija märgib mõjutatud sammud olekuga `skipped` ja jätkab ülejäänud plaaniga.

### 3. Plaani täitmine {#3-plan-execution}

Orkestreerija kutsub plaani ID-ga välja `execute_site_plan`. Täitmine toimub faaside kaupa, samm-sammult:

- **Sammuviited** (`__ref:` prefiks) — sammud saavad viidata eelmiste sammude väljunditele. Ülaltoodud näites lahendatakse `__ref:create_menu.menu_id` väärtuseks `menu_id`, mille tagastab samm `create_menu`.
- **Paralleelsed sammud** — sama faasi sammud, millel puuduvad omavahelised sõltuvused, saadetakse samaaegselt käivitamiseks, kui `parallel` lipp on määratud.
- **Sammu ajalõpp** — igal sammul on eraldi ajalõpp (vaikimisi: `Ability Timeout` seade). Ajalõpu saanud samm märgitakse olekuga `failed` ja plaan jätkub.

### 4. Edenemise jälgimine {#4-progress-tracking}

Kutsu igal ajal välja `get_plan_progress`, et kontrollida täitmise olekut:

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

WP-CLI kasutajad saavad edenemist jälgida käsuga:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Vigadest taastumine {#5-error-recovery}

Kui samm ebaõnnestub, kontrollib orkestreerija, kas plaanis on määratletud **varuvariant**:

- **Varuvariant saadaval** — varusammu proovitakse kohe. Kui see õnnestub, täitmine jätkub. Kui ka see ebaõnnestub, märgitakse samm olekuga `failed` ja täitmine jätkub järgmise sammuga.
- **Varuvarianti pole** — samm märgitakse olekuga `failed`. Mittekriitilised sammud jäetakse vahele; kriitilised sammud (märgitud `required: true`) peatavad praeguse faasi ja käivitavad faasitaseme taastamiskatse.

Agent raporteerib kõik tõrked lõplikus plaani kokkuvõttes ja võib soovitada käsitsi parandamise samme taastamatute vigade jaoks.

---

## Saidiplaani võimekused {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Genereerib loomulikus keeles eesmärgikirjeldusest struktureeritud saidiplaani.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `goal` | string | Jah | Soovitud veebisaidi loomulikus keeles kirjeldus |
| `style` | string | Ei | Visuaalse stiili eelistus: `minimal`, `bold`, `professional`, `playful`. Vaikimisi: agent valib eesmärgi põhjal |
| `plugins` | array | Ei | Plaani kaasatavate pluginate slugid. Orkestreerija lisab nõutavad pluginad automaatselt. |
| `dry_run` | boolean | Ei | Kui `true`, tagastab plaani JSON-i ilma seda salvestamata või täitmata. Vaikimisi `false` |

**Tagastab** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Alustab varem genereeritud saidiplaani täitmist.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `plan_id` | string | Jah | Käivitatava plaani ID |
| `auto_install_plugins` | boolean | Ei | Kui `true`, paigaldab nõutavad lisandmoodulid automaatselt ilma kinnituseta. Vaikimisi `false` |
| `max_retries` | integer | Ei | Kordade arv, mitu korda ebaõnnestunud sammu uuesti proovida enne edasi liikumist. Vaikimisi `1` |

**Tagastab** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Tagastab saidi plaani praeguse käivitamise oleku.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `plan_id` | string | Jah | Päringu tegemiseks kasutatav plaani ID |

**Tagastab** edenemise objekti, mida on kirjeldatud ülal jaotises [edenemise jälgimine](#4-progress-tracking).

---

### `handle_plan_error` {#handleplanerror}

Lahendab ebaõnnestunud sammu käsitsi ja jätkab plaani käivitamist järgmisest sammust. Kasutage seda siis, kui automaatne taastamine ei olnud võimalik ja soovite sekkuda.

**Parameetrid**

| Parameeter | Tüüp | Nõutav | Kirjeldus |
|---|---|---|---|
| `plan_id` | string | Jah | Plaani ID |
| `step_id` | string | Jah | Ebaõnnestunud sammu ID |
| `resolution` | string | Jah | Üks järgmistest: `skip` (jäta vahele ja jätka), `retry` (proovi sammu kohe uuesti) või `mark_done` (käsitle õnnestununa ilma uuesti käivitamata) |

**Tagastab** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 ja v2 võrdlus {#comparing-v1-and-v2}

| Funktsioon | v1 | v2 |
|---|---|---|
| Mitmefaasilised plaanid | Ei | Jah |
| Sammuväljundi viited (`__ref:`) | Ei | Jah |
| Lisandmoodulite tuvastamine | Käsitsi | Automaatne |
| Edenemise jälgimise API | Ei | Jah |
| Vigadest taastumine | Ebaõnnestub ja peatub | Varuvariant + jätkamine |
| Sammude paralleelne käivitamine | Ei | Jah (faasipõhiselt valitav) |
| WP-CLI plaani käsud | Ei | Jah |
| Võrdlustesti integratsioon | Ei | Jah (`q-restaurant-website`) |

---

## WP-CLI plaani käsud {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Loob eesmärgikirjelduse põhjal saidi plaani.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Käivitab varem loodud plaani.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Kuvab käivitatava või lõpetatud plaani praeguse edenemise.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Loetleb kõik saidi plaanid (ootel, töös ja lõpetatud).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Lähtestab ebaõnnestunud plaani olekusse `pending`, et seda saaks algusest uuesti käivitada.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
