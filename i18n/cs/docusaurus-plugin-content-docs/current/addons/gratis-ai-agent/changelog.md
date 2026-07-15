---
title: Změnový deník
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog

## 1.9.0 — Vydáno 2026-04-28 {#190--released-on-2026-04-28}

### Novinky {#new}

- **Schopnost `create_contact_form`** — vytváří kontaktní formulář pomocí aktivního pluginu pro formuláře (Contact Form 7, WPForms, Fluent Forms nebo Gravity Forms) a vrací shortcode připravený k vložení do jakéhokoli příspěvku nebo stránky.
- **Schopnost `set_featured_image`** — přiřazuje hlavní obrázek k příspěvku nebo stránce z existujícího ID v médiách nebo z vzdálené URL; automaticky doimporuje obrázek, když je poskytnut URL.
- **Schopnost `batch_create_posts`** — vytváří více příspěvků v jednom volání schopnosti. Podporuje stejné parametry jako `create_post`, hlásí úspěch/neúspěch pro každý příspěvek a má volitelný režim `stop_on_error`.
- **Parametr `page_template`** — přidán do `create_post` a `update_post`. Přiřazuje soubor PHP šablony stránky (např. `page-full-width.php`) při vytváření nebo aktualizaci. Pro `update_post` předáním prázdního řetězce se vrátí k výchozí šabloně tématu.
- **Schopnosti pro snímky obrazovky na klientovi** — `capture_screenshot`, `compare_screenshots` a `review_page_design`. Zachycují snímky obrazovky celé stránky nebo zobrazeného okna živých stránek pomocí server-side headless prohlížeče, porovnávají dva snímky a poskytují AI-generovaný přehled designu, který pokrývá rozložení, typografii, barvu a dostupnost.
- **Pět vestavěných agentů** — Content Writer, Site Builder, Design Studio, Plugin Manager a Support Assistant. Každý agent má vlastní sadu nástrojů, přizpůsobený systémový prompt a výchozí návrhy. Přepínatelné pomocí nového **Agent Picker** v hlavičce chatu. Podívejte se na [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags** — nová záložka **Nastavení → Feature Flags** s přepínači pro kontrolu přístupu (omezeno pro administrátory, omezeno pro administrátory sítě, přístup pro předplatitele, deaktivováno pro nečleny) a možnostmi značení (skrýt atribuci v patičce, vlastní název agenta, skrýt agent picker, použít ikonu stránky jako avatar chatu). Podívejte se na [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Obnovení poslední sady** — panel chatu nyní automaticky načte nejnovější konverzaci při načtení stránky i při otevření widgetu, takže kontext nikdy neunikne při navigaci po stránkách.
- **Odkazy na akce pluginů** — rychlé odkazy na Nastavení a Registr schopností nyní zobrazují na obrazovce **Plugins → Installed Plugins** pod popisem pluginu.

### Vylepřeno {#improved}

- **Pokus o zdroj obrázku** — agent nyní opakuje všechny nakonfigurované zdroje bezplatných obrázků, než se při selhání stahování vrátí k AI-generovanému obrázku.
- **Panel informací o modelu** — je vždy viditelný v hlavičce chatu; už není skrytý po první zprávě.
- **Chování automatického posouvání** — automatické posouvání se zastaví, když uživatel posouvá nahoru, aby četl; zobrazí se a automaticky zmizí plovoucí tlačítko **Scroll to bottom**, když uživatel dosáhne nejnovější zprávy.
- **UI Agent Picker** — přepracováno jako překryvní okno ve formě tabulky s ikonami pro každého agenta, což usnadňuje identifikaci a přepínání agentů pohledem.
- **Lazy-loaded JS chunks** — počáteční JavaScriptový balíček widgetu chatu je nyní rozdělen do lazy-loaded chunků, což snižuje počáteční velikost balíčku o 75–90 %.
- **Přepracování widgetu chatu** — jednotná ikona AI nahrazuje předchozí vlastní avatar; je konzistentní s vestavěným systémem agentů.
- **Linkifikace URL** — URL v systémových zprávách a bublinách s chybovými hlášením jsou nyní vykresleny jako klikatelné odkazy.

### Opraveno {#fixed}

- **Objevitelnost schopností** — opraveny popisy, odkazy v systémovém promptu a uspořádání namespace, takže všechny schopnosti se spolehlivě zobrazují v seznamu nástrojů agenta.
- **Cache poskytovatelů** — poskytovatelé jsou nyní cacheti na úrovni celé stránky pomocí počítadla verzí, což zabraňuje problémům se zastaralými poskytovateli v síti multisite.
- **`ability_invalid_output`** — vyřešeno v 12 ovladačích schopností; všechny nyní vrací správně strukturované JSON odpovědi.
- **Pipeline `pending_client_tool_calls`** — propojeno end-to-end, takže volání nástrojů na klientovi se dokončí správně a vrátí výsledky modelu.
- **Knihovna historie** — změny, které nelze vrátit, jsou vyloučeny ze seznamu zvracení; odkaz **View full history** nyní funguje správně.
- **Systém změn/vrácení** — opraveno pět samostatných chyb a zjednodušeno do nového rozhraní administrátora.
- **Toast pro ukládání nastavení** — notifikace typu snackbar se nyní spolehlivě zobrazí po kliknutí na **Save Settings**.
- **Kontextové menu pro koše** — přidána možnost **Delete Permanently**, takže položky lze trvale smazat bez opuštění pohledu koše.
- **Upravit a odeslat znovu** — kliknutí na ikonu úpravy nyní zahájí režim úpravy pouze pro kliknutou zprávu, ne pro všechny zprávy v konverzaci.
- **Výška rozložení chatu** — panel chatu se přizpůsobí své výšce, když se nad stránkou objeví obsah vložený pluginem (administrační upozornění, bannery), čímž se zabrání posunutí oblasti zadání mimo obrazovku.

---

## 1.4.0 — Vydáno 2026-04-09 {#140--released-on-2026-04-09}

### Novinky {#new-1}

- **Výkonový benchmark WP-CLI** (`wp gratis-ai-agent benchmark`) — spouští sadu benchmarků Agent Capabilities v1 z příkazové řádky pro CI pipeline a pracovní postupy hodnocení modelů. Podporuje běh pro každou otázku, přehazování poskytovatelů/modelů a výstup v formátu JSON/CSV.
- **Sada benchmarků Agent Capabilities v1** — strukturovaná sada komplexních, víceúrovňových promptů, které testují celou plochu schopností, s ohodnocením a hlášením tokenů/trvání.
- **Schopnosti pro vlastní typy příspěvků** — `register_post_type`, `list_post_types`, `delete_post_type`. Registrace přežívá restarty přes tabulku s možnostmi.
- **Schopnosti pro vlastní taksonomie** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Podporuje hierarchické a ploché taksonomie s volitelnými rewrite slugy.
- **Schopnosti pro systém designu** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Zahrnuje pět kurátorovaných přednastaveních: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Schopnosti pro globální styly** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Čte a zapisuje hodnoty theme.json přes WordPress Global Styles API.
- **Schopnost pro správu navigačních menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Podporuje vnořená menu a přiřazení místa tématu.
- **Schopnost pro správu možností** — `get_option`, `set_option`, `delete_option`, `list_options`. Zahrnuje vestavěný bloklist pro ochranu kritických možností WordPress před úpravou.
- **Registr instalovatelných schopností** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Objevujte a aktivujte balíčky schopností distribuované jako pluginy WordPress.
- **Orchestrace Site Builder v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Víceúrovňové plány výstavby webu s objevováním pluginů, referencemi výstupů kroků, sledováním pokroku a autonomní obnovou chyb.
- **Testovací otázka pro restauraci** (`q-restaurant-website`) — end-to-end test pokrývající registraci CPT, systém designu, navigaci a objevování pluginů.
- **Plíseň konektorů AI poskytovatelů** přidána do blueprintů WordPress Playground pro rychlejší lokální nastavení vývoje.

### Vylepřeno {#improved-1}

- README aktualizováno dokumentací a pokyny pro nastavení konektorů AI poskytovatelů.

### Opraveno {#fixed-1}

- Vyřešeno 25 selhání testů PHPUnit na hlavní větvi.
- Opraven formát URL GitHub releases v `blueprint.json`.
- Nové číslování ID úloh, aby se předešlo kolizím se starými ID.

---

## 1.3.x {#13x}

_Poznámky k předchozích verzích jsou uloženy v úložišti pluginu._
