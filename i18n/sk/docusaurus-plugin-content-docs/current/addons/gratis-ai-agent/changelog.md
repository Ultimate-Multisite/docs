---
title: Zoznam zmien
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Záznam zmien

## 1.9.0 — Vydané 2026-04-28

### Nové

- **Schopnosť `create_contact_form`** — vytvorí kontaktný formulár pomocou aktívneho formulárového pluginu (Contact Form 7, WPForms, Fluent Forms alebo Gravity Forms) a vráti shortcode pripravený na vloženie do ľubovoľného príspevku alebo stránky.
- **Schopnosť `set_featured_image`** — priradí príspevku alebo stránke ilustračný obrázok z existujúceho ID prílohy v knižnici médií alebo zo vzdialenej URL; pri zadaní URL obrázok automaticky importuje.
- **Schopnosť `batch_create_posts`** — vytvorí viacero príspevkov v jednom volaní schopnosti. Podporuje rovnaké parametre ako `create_post`, hlási úspech/neúspech pre každý príspevok a má voliteľný režim `stop_on_error`.
- **Parameter `page_template`** — pridaný do `create_post` a `update_post`. Priradí súbor šablóny stránky PHP (napr. `page-full-width.php`) pri vytváraní alebo aktualizácii. Odovzdajte prázdny reťazec do `update_post`, ak sa chcete vrátiť k predvolenému nastaveniu témy.
- **Schopnosti snímok obrazovky na strane klienta** — `capture_screenshot`, `compare_screenshots` a `review_page_design`. Zachytávajú snímky obrazovky celých živých stránok alebo výrezu cez serverový headless prehliadač, porovnajú dve snímky obrazovky a získajú AI vygenerované hodnotenie dizajnu pokrývajúce rozloženie, typografiu, farbu a prístupnosť.
- **Päť vstavaných agentov** — Content Writer, Site Builder, Design Studio, Plugin Manager a Support Assistant. Každý agent má vyhradenú sadu nástrojov, prispôsobený systémový prompt a úvodné návrhy. Prepínateľné cez nový **Agent Picker** v hlavičke chatu. Pozrite si [Vstavaní agenti](../../user-guide/configuration/built-in-agents).
- **Príznaky funkcií** — nová karta **Nastavenia → Príznaky funkcií** s prepínačmi riadenia prístupu (obmedziť na administrátorov, obmedziť na sieťových administrátorov, prístup pre odberateľov, zakázať pre nečlenov) a možnosťami brandingu (skryť atribúciu v pätičke, vlastný názov agenta, skryť výber agenta, použiť ikonu stránky ako avatar chatu). Pozrite si [Nastavenia Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Obnoviť poslednú reláciu** — panel chatu teraz automaticky znova načíta najnovšiu konverzáciu pri načítaní stránky aj pri otvorení widgetu, takže kontext sa pri navigácii medzi stránkami nikdy nestratí.
- **Odkazy akcií pluginu** — rýchle odkazy na Nastavenia a Register schopností sa teraz zobrazujú na obrazovke WordPress **Pluginy → Nainštalované pluginy** pod popisom pluginu.

### Vylepšené

- **Opakovanie zdroja obrázkov** — agent teraz pri zlyhaní sťahovania skúsi znova všetky nakonfigurované bezplatné zdroje obrázkov predtým, než použije AI vygenerovaný obrázok.
- **Panel informácií o modeli** — vždy viditeľný v hlavičke chatu; po prvej správe už nie je skrytý.
- **Správanie automatického posúvania** — automatické posúvanie sa pozastaví, keď používateľ posunie zobrazenie nahor, aby čítal; zobrazí sa plávajúce tlačidlo **Posunúť nadol** a automaticky zmizne, keď používateľ dosiahne najnovšiu správu.
- **UI Agent Picker** — prepracované ako prekrytie s tabuľkou formulára a ikonami pre jednotlivých agentov, vďaka čomu je jednoduchšie agentov na prvý pohľad identifikovať a prepínať.
- **Lazy-loaded JS chunks** — počiatočný JavaScript balík chat widgetu je teraz rozdelený na lazy-loaded chunks, čím sa počiatočná veľkosť balíka znižuje o 75 – 90 %.
- **Prepracovanie chat widgetu** — jednotná ikona AI nahrádza predchádzajúci vlastný avatar; je konzistentná so systémom vstavaných agentov.
- **Premena URL na odkazy** — URL zobrazené v systémových správach a bublinách chybových správ sa teraz vykresľujú ako klikateľné odkazy.

### Opravené

- **Objaviteľnosť schopností** — opravené popisy, odkazy v systémovom prompte a zarovnanie namespace, aby sa všetky schopnosti spoľahlivo zobrazovali v zozname nástrojov agenta.
- **Cache poskytovateľov** — poskytovatelia sa teraz ukladajú do cache pre celú stránku cez počítadlo verzií, čím sa predchádza problémom so zastaranými poskytovateľmi v sieťach multisite.
- **`ability_invalid_output`** — vyriešené naprieč 12 handlermi schopností; všetky vracajú správne štruktúrované odpovede JSON.
- **Pipeline `pending_client_tool_calls`** — prepojené od začiatku do konca, aby sa volania nástrojov na strane klienta správne dokončili a vrátili výsledky modelu.
- **Panel histórie** — zmeny, ktoré nemožno vrátiť, sú vylúčené zo zoznamu vrátenia; odkaz **Zobraziť celú históriu** teraz funguje správne.
- **Systém zmien/vrátenia** — opravených päť samostatných chýb a zjednotených pod novým administračným rozhraním.
- **Toast Uložiť nastavenia** — snackbar oznámenie sa teraz po kliknutí na **Uložiť nastavenia** zobrazuje spoľahlivo.
- **Kontextové menu koša** — pridaná možnosť **Natrvalo odstrániť**, aby bolo možné položky natrvalo vymazať bez opustenia zobrazenia koša.
- **Upraviť a znova odoslať** — kliknutie na ikonu úprav teraz prepne do režimu úprav iba pre kliknutú správu, nie pre všetky správy vo vlákne.
- **Výška rozloženia chatu** — panel chatu prispôsobuje svoju výšku, keď sa nad stránkou zobrazí obsah vložený pluginom (administrátorské oznámenia, bannery), čím sa zabráni vytlačeniu vstupnej oblasti mimo obrazovky.

---

## 1.4.0 — Vydané 2026-04-09

### Nové

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — spúšťa Agent Capabilities v1 benchmark suite z príkazového riadka pre CI pipelines a pracovné postupy hodnotenia modelov. Podporuje spustenia po jednotlivých otázkach, prepísania poskytovateľa/modelu a výstup JSON/CSV.
- **Agent Capabilities v1 benchmark suite** — štruktúrovaná sada komplexných, viackrokových promptov, ktoré preverujú celý rozsah schopností, so skórovaním a reportovaním tokenov/trvania.
- **Schopnosti Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Registrácie pretrvávajú medzi reštartmi cez tabuľku možností.
- **Schopnosti Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Podporuje hierarchické aj ploché taxonómie s voliteľnými prepísanými slugmi.
- **Schopnosti Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Zahŕňa päť kurátorovaných predvolieb: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Schopnosti Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Číta a zapisuje hodnoty theme.json cez WordPress Global Styles API.
- **Schopnosť správy navigačného menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Podporuje vnorené menu a priradenie umiestnenia theme.
- **Schopnosť správy možností** — `get_option`, `set_option`, `delete_option`, `list_options`. Zahŕňa vstavaný bezpečnostný blokovací zoznam, ktorý chráni kritické možnosti WordPress pred úpravou.
- **Register inštalovateľných schopností** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Objavujte a aktivujte balíky schopností distribuované ako WordPress pluginy.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Viacfázové plány zostavenia stránky s objavovaním pluginov, referenciami na výstupy krokov, sledovaním pokroku a autonómnym zotavením z chýb.
- **Benchmarková otázka pre reštauračný web** (`q-restaurant-website`) — end-to-end test pokrývajúci registráciu CPT, dizajnový systém, navigáciu a objavovanie pluginov.
- **Pluginy konektorov poskytovateľov AI** pridané do WordPress Playground blueprintov na rýchlejšie nastavenie lokálneho vývoja.

### Vylepšené

- README aktualizované o dokumentáciu konektorov poskytovateľov AI a pokyny na nastavenie.

### Opravené

- Vyriešených 25 zlyhaní PHPUnit testov na vetve `main`.
- Opravený formát URL GitHub releases v `blueprint.json`.
- Prečíslovanie ID úloh, aby sa predišlo kolíziám so starými ID.

---

## 1.3.x

_Predchádzajúce poznámky k vydaniu sú udržiavané v repozitári pluginu._
