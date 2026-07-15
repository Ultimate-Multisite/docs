---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

A Site Builder Orchestration v2 (belevezetése a Gratis AI Agent v1.4.0-ban) az üzemmotor, amely a több lépéses weboldal létrehozását biztosítja. Amikor az agentet arra kéri, hogy „építsen egy éttermi weboldalt” vagy „alkalmazzon egy bloggal rendelkező portfóliót”, az orchestrator (koordinátor) szétválasztja ezt a magas szintű célt egy strukturált **tervbe**, felfedezi az ahhoz szükséges plugin-okat, sorrendben végrehajtja minden lépést, nyomon követi a haladást, és autonómusan helyreállítja az hibákból.

---

## Hogyan működik {#how-it-works}

### 1. Tervgenerálás {#1-plan-generation}

Amikor az agent egy weboldal építésének utasítását kap, az `create_site_plan` ability-t hívja meg, hogy egy JSON **weboldaltervet** hozzon létre. A terv a következőket írja le:

- **Cél** — amit a kész weboldalnek kell csinálnia
- **Fázisok** — sorrendben elhelyezett lépések csoportjai (pl. _Beállítás_, _Tartalomtípusok_, _Design_, _Tartalom_)
- **Lépések** — egyedi ability hívások minden fázisban
- **Plugin követelmények** — azok a plugin-ok, amelyeknek aktívnek kell lenniük bizonyos lépések futtatásához
- **Visszártérítők (Fallbacks)** — alternatív lépések, ha egy elsődleges lépés sikertelenül végrehajtódik

**Példa terv (rövidített)**

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

### 2. Plugin felfedezés {#2-plugin-discovery}

Mielőtt a végrehajtás elkezdődne, az orchestrator áttekinti a terv `plugin_requirements` részét, és ellenőrzi, hogy mely plugin-ok aktívak. Az hiányzó plugin-ok esetén:

1.  A `recommend_plugin` segítségével keresi meg a legjobb találatot a registry-ben.
2.  Kérdezést tesz az agenttől a javaslat megerősítéséről.
3.  Elindítja a telepítést, ha jóváhagyják (vagy ha a beállításokban engedélyezve van az automatikus telepítés).

A plugin felfedezési sikertelenítése nem kritikus — az orchestrator jelöli meg az érintett lépéseket `skipped` (eltörölt) státuszban, és folytatja a terv többi részével.

### 3. Terv végrehajtása {#3-plan-execution}

Az orchestrator a `execute_site_plan` ability-t hívja meg a terv ID-jával. A végrehajtás fázisok szerint, lépésről lépésre halad.

- **Lépés hivatkozások** (`__ref:` előfix): A lépések hivatkozhatnak korábbi lépések kimenetére. A fenti példában az `__ref:create_menu.menu_id` a `create_menu` lépés által visszatérített `menu_id`-re hivatkozik.
- **Parallel lépések**: A ugyanazon fázisban lévő, egymástól független lépések egyszerre kerülnek végrehajtásra, ha a `parallel` flag-et beállítják.
- **Lépés időkorlátozása**: Minden lépésnek saját időkorlátozója van (alapértelmezett: az `Ability Timeout` beállítás). Egy időkorlátozással sikertelen lépést `failed` (sikertelen) státuszban jelöl, és a terv tovább halad.

### 4. Haladás nyomon követése {#4-progress-tracking}

A `get_plan_progress` hívása bármikor ellenőrizhető a végrehajtási státuszt:

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

A WP-CLI felhasználók a következővel követhetik nyomon a haladást:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Hiba helyreállítása {#5-error-recovery}

Ha egy lépés sikertelenül végrehajtódik, az orchestrator ellenőrzi, hogy van-e a tervben egy **visszártérítő** lépés:

- **Visszártérítő elérhető** — az orchesterator azonnal megpróbálja a visszártérítő lépést. Ha sikeres, a végrehajtás folytatódik. Ha ez is sikertelen, a lépést `failed` státuszban jelöli, és a végrehajtás tovább halad a következő lépéssel.
- **Nincs visszártérítő** — a lépést `failed` státuszban jelöli. A nem kritikus lépéseket elhagyja; a kritikus lépések (az `required: true` jelöléssel) felfüggesztik a jelenlegi fázist, és egy fázis szintű helyreállítási kísérletet indítanak el.

Az agent a végleges terv összefoglalójában összes hibát jelent, és manuális javítási lépéseket javasolhat az elhagyhatatlan hibák esetén.

---

## Site Plan Abilities {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Generál egy strukturált weboldaltervet egy természetes nyelvi célleírás alapján.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `goal` | string | Igen | A kívánt weboldal természetes nyelvi leírása |
| `style` | string | Nem | Vizsga stílus preferenciája: `minimal`, `bold`, `professional`, `playful`. Alapértelmezett: az agent a céltől függően választja |
| `plugins` | array | Nem | Plugin slug-jai, amelyeket a tervbe kell incluirelni. Az orchestrator automatikusan hozzáadja a szükséges plugin-okat. |
| `dry_run` | boolean | Nem | Ha `true`, a terv JSON-ját adja vissza anélküli mentés vagy végrehajtás elvégzésére. Alapértelmezett `false` |

**Visszaadja** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Elindítja egy korábban generált weboldalterv végrehajtását.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `plan_id` | string | Igen | A végrehajtathatón terv ID-je |
| `auto_install_plugins` | boolean | Nem | Ha `true`, automatikusan telepíti a szükséges plugin-okat, anélküli megerősítésnek. Alapértelmezett `false` |
| `max_retries` | integer | Nem | A sikertelen lépés megpróbálkozási száma, mielőtt tovább haladna. Alapértelmezett `1` |

**Visszaadja** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Visszaadja egy weboldalterv aktuális végrehajtási státuszát.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `plan_id` | string | Igen | A lekérdezendő terv ID-je |

**Visszaadja** a [Progress Tracking](#4-progress-tracking) fejezetben leírt haladási objektumot.

---

### `handle_plan_error` {#handleplanerror}

Manuálisan oldja meg egy sikertelen lépést, és folytatja a terv végrehajtását a következő lépéstől. Használja ezt, ha az automatikus helyreállítás nem volt lehetséges, és beavatkozni akar.

**Paraméterek**

| Paraméter | Típus | Kötelező | Leírás |
|---|---|---|---|
| `plan_id` | string | Igen | Terv ID-je |
| `step_id` | string | Igen | A sikertelen lépés ID-je |
| `resolution` | string | Igen | Az `skip` (eltörölt, és folytat), `retry` (azonnali újrapróbálás), vagy `mark_done` (sikertelennek kezelése, anélküli újrafutatásnak) |

**Visszaadja** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 és v2 összehasonlítása {#comparing-v1-and-v2}

| Funkció | v1 | v2 |
|---|---|---|
| Több fázisú tervek | Nem | Igen |
| Lépés kimenetének hivatkozásai (`__ref:`) | Nem | Igen |
| Plugin felfedezés | Manuális | Automatikus |
| Haladás nyomon követési API | Nem | Igen |
| Hiba helyreállítása | Sikertelen és leáll | Visszártérítő + folytatás |
| Parallel lépés végrehajtása | Nem | Igen (opcionális per fázis) |
| WP-CLI terv parancsok | Nem | Igen |
| Benchmark integráció | Nem | Igen (`q-restaurant-website`) |

---

## WP-CLI Terv Parancsok {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Generál egy weboldaltervet egy célleírás alapján.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Végrehajt egy korábban generált tervet.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Megjeleníti a végrehajtás aktuális haladását egy futó vagy befejezett terv esetén.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Listáz minden weboldaltervet (várható, haladás alatt, és befejezett).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Állíthatja vissza egy sikertelen tervet `pending` (várható) állapotba, így újra elindítható a kezdetektől.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
