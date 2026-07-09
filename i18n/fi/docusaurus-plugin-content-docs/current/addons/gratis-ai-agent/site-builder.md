---
title: Sivustonrakentajan orkestrointi v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Sivuston rakentamisen orkestrointi v2

Sivuston rakentamisen orkestrointi v2 (esitelty Gratis AI Agent v1.4.0:ssa) on moottori, joka mahdollistaa monivaiheisen verkkosivustojen luomisen. Kun pyydät agenttia "rakentamaan ravintolasivuston" tai "luomaan portfolion blogilla", orkestroija pilkkoo tämän korkean tason tavoitteen rakenteiseksi **suunnitelmaksi**, löytää sen toteuttamiseen tarvittavat pluginit, suorittaa jokaisen vaiheen järjestyksessä, seuraa edistymistä ja palautuu virheistä itsenäisesti.

---

## Kuinka se toimii

### 1. Suunnitelman luonti

Kun agentti vastaanottaa sivuston rakentamisohjeen, se kutsuu `create_site_plan`-kykyä tuottaakseen JSON-muotoisen **sivustosuunnitelman**. Suunnitelma kuvaa:

- **Tavoite** — mitä valmiin sivuston pitäisi tehdä
- **Vaiheet** — järjestetyt askelryhmät (esim. _Käyttöönotto_, _Sisältötyypit_, _Ulkoasu_, _Sisältö_)
- **Askeleet** — yksittäiset kykyn kutsut kussakin vaiheessa
- **Plugin-vaatimukset** — pluginit, joiden on oltava aktiivisia tiettyjen askelten suorittamiseksi
- **Vararatkaisut** — vaihtoehtoiset askeleet, jos ensisijainen askel epäonnistuu

**Esimerkkisuunnitelma (lyhennetty)**

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

### 2. Pluginien löytäminen

Ennen suorituksen alkamista orkestroija käy läpi suunnitelman `plugin_requirements`-kohdan ja tarkistaa, mitkä pluginit ovat jo aktiivisia. Puuttuville plugineille se:

1. Hakee rekisteristä parasta osumaa `recommend_plugin`-toiminnolla
2. Pyytää agenttia vahvistamaan suosituksen
3. Käynnistää asennuksen, jos se hyväksytään (tai jos automaattinen asennus on käytössä asetuksissa)

Pluginien löytämisen epäonnistumiset eivät ole kohtalokkaita — orkestroija merkitsee kyseiset askeleet tilaan `skipped` ja jatkaa muun suunnitelman kanssa.

### 3. Suunnitelman suoritus

Orkestroija kutsuu `execute_site_plan`-toimintoa suunnitelman tunnuksella. Suoritus etenee vaihe vaiheelta, askel askeleelta:

- **Askelviittaukset** (`__ref:`-etuliite) — askeleet voivat viitata aiempien askelten tulosteisiin. Yllä olevassa esimerkissä `__ref:create_menu.menu_id` ratkaistaan arvoksi `menu_id`, jonka `create_menu`-askel palautti.
- **Rinnakkaiset askeleet** — saman vaiheen askeleet, joilla ei ole keskinäisiä riippuvuuksia, lähetetään suoritettaviksi samanaikaisesti, kun `parallel`-lippu on asetettu.
- **Askeleen aikakatkaisu** — jokaisella askeleella on yksilöllinen aikakatkaisu (oletus: `Ability Timeout`-asetus). Aikakatkaistu askel merkitään tilaan `failed`, ja suunnitelma jatkuu.

### 4. Edistymisen seuranta

Kutsu `get_plan_progress` milloin tahansa tarkistaaksesi suorituksen tilan:

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

WP-CLI-käyttäjät voivat seurata edistymistä komennolla:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Virheistä palautuminen

Kun askel epäonnistuu, orkestroija tarkistaa, onko suunnitelmassa määritelty **vararatkaisuaskel**:

- **Vararatkaisu saatavilla** — vararatkaisuaskelta yritetään välittömästi. Jos se onnistuu, suoritus jatkuu. Jos sekin epäonnistuu, askel merkitään tilaan `failed` ja suoritus jatkuu seuraavaan askeleeseen.
- **Ei vararatkaisua** — askel merkitään tilaan `failed`. Ei-kriittiset askeleet ohitetaan; kriittiset askeleet (merkitty `required: true`) pysäyttävät nykyisen vaiheen ja käynnistävät vaihetason palautumisyrityksen.

Agentti raportoi kaikki epäonnistumiset lopullisessa suunnitelman yhteenvedossa ja voi ehdottaa manuaalisia korjaustoimia virheille, joista ei voi palautua.

---

## Sivustosuunnitelman kyvyt

### `create_site_plan`

Luo rakenteisen sivustosuunnitelman luonnollisen kielen tavoitekuvauksesta.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `goal` | string | Kyllä | Luonnollisen kielen kuvaus halutusta verkkosivustosta |
| `style` | string | Ei | Visuaalisen tyylin mieltymys: `minimal`, `bold`, `professional`, `playful`. Oletus: agentti valitsee tavoitteen perusteella |
| `plugins` | array | Ei | Suunnitelmaan sisällytettävien pluginien slug-tunnisteet. Orkestroija lisää vaaditut pluginit automaattisesti. |
| `dry_run` | boolean | Ei | Jos `true`, palauttaa suunnitelman JSON-muodossa tallentamatta tai suorittamatta sitä. Oletus `false` |

**Palauttaa** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Aloittaa aiemmin luodun sivustosuunnitelman suorittamisen.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `plan_id` | string | Kyllä | Suoritettavan suunnitelman ID |
| `auto_install_plugins` | boolean | Ei | Jos `true`, asentaa tarvittavat plugin-lisäosat automaattisesti ilman vahvistusta. Oletus `false` |
| `max_retries` | integer | Ei | Kuinka monta kertaa epäonnistunutta vaihetta yritetään uudelleen ennen jatkamista. Oletus `1` |

**Palauttaa** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Palauttaa sivustosuunnitelman nykyisen suoritustilan.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `plan_id` | string | Kyllä | Kyseltävän suunnitelman ID |

**Palauttaa** edistymisobjektin, joka on kuvattu yllä kohdassa [Edistymisen seuranta](#4-progress-tracking).

---

### `handle_plan_error`

Ratkaisee epäonnistuneen vaiheen manuaalisesti ja jatkaa suunnitelman suorittamista seuraavasta vaiheesta. Käytä tätä, kun automaattinen palautuminen ei ollut mahdollista ja haluat puuttua tilanteeseen.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `plan_id` | string | Kyllä | Suunnitelman ID |
| `step_id` | string | Kyllä | Epäonnistuneen vaiheen ID |
| `resolution` | string | Kyllä | Yksi seuraavista: `skip` (ohita ja jatka), `retry` (yritä vaihetta heti uudelleen) tai `mark_done` (käsittele onnistuneena suorittamatta uudelleen) |

**Palauttaa** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1:n ja v2:n vertailu

| Ominaisuus | v1 | v2 |
|---|---|---|
| Monivaiheiset suunnitelmat | Ei | Kyllä |
| Vaiheen tulosteviittaukset (`__ref:`) | Ei | Kyllä |
| Plugin-lisäosien haku | Manuaalinen | Automaattinen |
| Edistymisen seurannan API | Ei | Kyllä |
| Virheistä palautuminen | Epäonnistuu ja pysähtyy | Vararatkaisu + jatka |
| Vaiheiden rinnakkainen suoritus | Ei | Kyllä (vaihekohtaisesti käyttöön otettava) |
| WP-CLI-suunnitelmakomennot | Ei | Kyllä |
| Benchmark-integraatio | Ei | Kyllä (`q-restaurant-website`) |

---

## WP-CLI-suunnitelmakomennot

### `wp gratis-ai-agent plan create`

Luo sivustosuunnitelman tavoitekuvauksesta.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Suorittaa aiemmin luodun suunnitelman.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Näyttää suoritettavan tai valmistuneen suunnitelman nykyisen edistymisen.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Listaa kaikki sivustosuunnitelmat (odottavat, käynnissä olevat ja valmistuneet).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Palauttaa epäonnistuneen suunnitelman tilaan `pending`, jotta se voidaan suorittaa uudelleen alusta.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
