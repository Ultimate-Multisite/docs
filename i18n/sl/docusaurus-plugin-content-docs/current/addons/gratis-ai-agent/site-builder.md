---
title: Orkestracija Site Builder v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orkestracija Site Builder v2

Orkestracija Site Builder v2 (uvedena v Gratis AI Agent v1.4.0) je pogon, ki omogoča večstopenjsko ustvarjanje spletnih mest. Ko agenta prosite, naj »zgradi spletno mesto za restavracijo« ali »ustvari portfelj z blogom«, orkestrator razdeli ta cilj na visoki ravni v strukturiran **načrt**, odkrije plugine, potrebne za njegovo izpolnitev, izvede vsak korak zaporedoma, spremlja napredek in se samostojno obnovi po napakah.

---

## Kako deluje {#how-it-works}

### 1. Ustvarjanje načrta {#1-plan-generation}

Ko agent prejme navodilo za gradnjo spletnega mesta, pokliče zmožnost `create_site_plan`, da ustvari JSON **načrt spletnega mesta**. Načrt opisuje:

- **Cilj** — kaj naj končano spletno mesto počne
- **Faze** — urejene skupine korakov (npr. _Nastavitev_, _Vrste vsebine_, _Oblikovanje_, _Vsebina_)
- **Koraki** — posamezni klici zmožnosti znotraj vsake faze
- **Zahteve za plugine** — plugini, ki morajo biti aktivni, da se lahko določeni koraki izvedejo
- **Nadomestni koraki** — alternativni koraki, če primarni korak ne uspe

**Primer načrta (skrajšan)**

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

### 2. Odkrivanje pluginov {#2-plugin-discovery}

Pred začetkom izvedbe orkestrator pregleda `plugin_requirements` načrta in preveri, kateri plugini so že aktivni. Za manjkajoče plugine:

1. Preišče register prek `recommend_plugin` za najboljše ujemanje
2. Pozove agenta, da potrdi priporočilo
3. Sproži namestitev, če je odobrena (ali če je v nastavitvah omogočena samodejna namestitev)

Neuspehi pri odkrivanju pluginov niso usodni — orkestrator označi prizadete korake kot `skipped` in nadaljuje z ostankom načrta.

### 3. Izvedba načrta {#3-plan-execution}

Orkestrator pokliče `execute_site_plan` z ID-jem načrta. Izvedba poteka po fazah, korak za korakom:

- **Sklici na korake** (predpona `__ref:`) — koraki se lahko sklicujejo na izhode iz prejšnjih korakov. V zgornjem primeru se `__ref:create_menu.menu_id` razreši v `menu_id`, ki ga vrne korak `create_menu`.
- **Vzporedni koraki** — koraki znotraj iste faze, ki nimajo medsebojnih odvisnosti, se ob nastavljeni zastavici `parallel` pošljejo sočasno.
- **Časovna omejitev koraka** — vsak korak ima posamezno časovno omejitev (privzeto: nastavitev `Ability Timeout`). Korak, ki preseže časovno omejitev, je označen kot `failed` in načrt se nadaljuje.

### 4. Spremljanje napredka {#4-progress-tracking}

Kadar koli pokličite `get_plan_progress`, da preverite stanje izvedbe:

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

Uporabniki WP-CLI lahko spremljajo napredek z:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Obnova po napakah {#5-error-recovery}

Ko korak ne uspe, orkestrator preveri, ali je v načrtu definiran **nadomestni** korak:

- **Nadomestni korak je na voljo** — nadomestni korak se poskusi takoj. Če uspe, se izvedba nadaljuje. Če tudi ta ne uspe, je korak označen kot `failed` in izvedba se nadaljuje z naslednjim korakom.
- **Brez nadomestnega koraka** — korak je označen kot `failed`. Nekritični koraki se preskočijo; kritični koraki (označeni z `required: true`) ustavijo trenutno fazo in sprožijo poskus obnove na ravni faze.

Agent v končnem povzetku načrta poroča o vseh neuspehih in lahko predlaga ročne korake za odpravo nepopravljivih napak.

---

## Zmožnosti načrta spletnega mesta {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Ustvari strukturiran načrt spletnega mesta iz opisa cilja v naravnem jeziku.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Opis želenega spletnega mesta v naravnem jeziku |
| `style` | string | No | Prednostni vizualni slog: `minimal`, `bold`, `professional`, `playful`. Privzeto: agent izbere glede na cilj |
| `plugins` | array | No | Slugi pluginov, ki jih je treba vključiti v načrt. Orkestrator samodejno doda zahtevane plugine. |
| `dry_run` | boolean | No | Če je `true`, vrne JSON načrta brez shranjevanja ali izvedbe. Privzeto `false` |

**Vrne** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Začne izvajati predhodno ustvarjen načrt spletnega mesta.

**Parametri**

| Parameter | Vrsta | Obvezno | Opis |
|---|---|---|---|
| `plan_id` | string | Da | ID načrta za izvedbo |
| `auto_install_plugins` | boolean | Ne | Če je `true`, samodejno namesti zahtevane vtičnike brez potrditve. Privzeto `false` |
| `max_retries` | integer | Ne | Število ponovitev neuspešnega koraka pred nadaljevanjem. Privzeto `1` |

**Vrne** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Vrne trenutno stanje izvajanja načrta spletnega mesta.

**Parametri**

| Parameter | Vrsta | Obvezno | Opis |
|---|---|---|---|
| `plan_id` | string | Da | ID načrta za poizvedbo |

**Vrne** objekt napredka, opisan zgoraj v [Sledenje napredku](#4-progress-tracking).

---

### `handle_plan_error` {#handleplanerror}

Ročno razreši neuspešen korak in nadaljuje izvajanje načrta od naslednjega koraka. Uporabite to, ko samodejna obnovitev ni bila mogoča in želite posredovati.

**Parametri**

| Parameter | Vrsta | Obvezno | Opis |
|---|---|---|---|
| `plan_id` | string | Da | ID načrta |
| `step_id` | string | Da | ID neuspešnega koraka |
| `resolution` | string | Da | Ena od vrednosti `skip` (preskoči in nadaljuj), `retry` (takoj znova poskusi korak) ali `mark_done` (obravnavaj kot uspešno brez ponovnega zagona) |

**Vrne** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Primerjava v1 in v2 {#comparing-v1-and-v2}

| Funkcija | v1 | v2 |
|---|---|---|
| Večfazni načrti | Ne | Da |
| Sklici na izhod koraka (`__ref:`) | Ne | Da |
| Odkrivanje vtičnikov | Ročno | Samodejno |
| API za sledenje napredku | Ne | Da |
| Obnovitev po napaki | Neuspeh in ustavitev | Rezervna možnost + nadaljevanje |
| Vzporedno izvajanje korakov | Ne | Da (izbirno po fazi) |
| Ukazi WP-CLI za načrte | Ne | Da |
| Integracija benchmarka | Ne | Da (`q-restaurant-website`) |

---

## Ukazi WP-CLI za načrte {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Ustvari načrt spletnega mesta iz opisa cilja.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Izvede predhodno ustvarjen načrt.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Prikaže trenutni napredek za načrt, ki se izvaja ali je dokončan.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Navede vse načrte spletnih mest (čakajoče, v teku in dokončane).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Ponastavi neuspešen načrt na `pending`, da ga je mogoče znova izvesti od začetka.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
