---
title: Změnový deník
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Changelog

## 1.16.0 — Vydáno 2026-05-20

### Novinky

- **Generování SVG loga** — Theme Builder nyní dokáže generovat a vkládat vlastní SVG loga s bezpečným sanitizováním (namespace-safe sanitisation).
- **Nahrání fotky ve studii projištění** — Studii projištění (discovery interview) v Theme Builder nyní obsahuje krok pro nahrání fotografie, což umožňuje bohatší kontext pro design.
- **Validace kontrastu palety** — Zkontrolujte spáry barev na soulad s WCAG před jejich aplikací na téma.
- **Gastronomiční menu** — Theme Builder nyní dokáže generovat strukturované stránky s jídelníkem a nápojovým menu pro podniky v oblasti hostingu.
- **Náhled na desce a mobilu** — Představte si svůj design na desktopu i na mobilních zařízeních během výběru směřování designu.
- **Parametr popisku navigace** — Funkce vytvoření menu (Create Menu) nyní podporuje odlišný `navigation_label`, který je oddělen od názvu stránky.
- **Dostupnost nástroje úrovně 1** — sd-ai-agent/site-scrape je nyní nástroj úrovně 1 (Tier 1 tool) dostupný výchozíně v Theme Builderu.

### Opravy

- **Cache AI klienta** — Nyní je podložena transienty pro udržení stavu napříč požadavky, což zabraňuje ztrátě dat při dlouhodobě běžících úlohách agenta.
- **Odkazy akcí řádku pluginu** — Opraveno a převedeno pro lepší srozumitelnost.

## 1.10.0 — Vydáno 2026-05-05

### Novinky

- **Vyhledávání v internetu Tavily** — Přidáno Tavily jako poskytovatel vyhledávání pro bohatší výsledky internetového vyhledávání vedle Brave Search.
- **Vroučích funkce pro téma** — Block Themes, Classic Themes, Kadence Blocks a průvodce funkcemi pro téma Kadence nyní obsahují plugin.
- **Funkce kontaktního formuláře v site builderu** — Přidejte kontaktní formulář na jakoukoli stránku přímo z chatového rozhraní.

### Vylepšeno

- **Refaktorace integrace WooCommerce** — Nyní používá nativní API WooCommerce pro lepší spolehlivost a kompatibilitu.
- **Automatické obnovování seznamu poskytovatelů** — Když je jakýkoli plugin aktivován nebo deaktivován.

### Opravy

- **Funkce navigate-to** — Opravena nekonečná smyčka obnovení na některých administrátorských stránkách.
- **Funkce list-posts** — Nyní správně vyřešuje názvy kategorií a tagů na slugi.
- **Kommandy WP-CLI** — Obnoveny chybějící aliasy namespace po předchozí refaktorizaci.
- **Automatizace událostí** — Elegante zpracování webů, kde ještě nejsou vytvořeny tabulky pro automatizaci.
- **Funkce memory-save** — Nyní používá správný prefix namespace v konstruktoru systémových instrukcí.
- **Výsledky nástroje Scalar** — Nyní správně obaleny před odesláním zpět do AI.
- **Statistiky použití** — Nyní správně zpracovávají starší formát klíčů funkcí při upgradu ze starších verzí.
