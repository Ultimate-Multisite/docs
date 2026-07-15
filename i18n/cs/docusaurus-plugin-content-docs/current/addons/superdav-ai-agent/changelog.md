---
title: Seznam změn
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Přehled změn

## 1.18.0 — Vydáno 2026-06-29 {#1180--released-on-2026-06-29}

### Nové {#new}

- **Nástroje Google Calendar** — čtou nakonfigurované kalendáře a události pro automatizace zohledňující rozvrh
- **Mapování kontaktů a pomocníci pro účastníky** — párují účastníky kalendáře s uživateli a kontakty webu
- **Brány lidského schválení a záznamy připomínek** — pozastavují automatizace ke kontrole a brání duplicitním oznámením
- **Poskytovatel SMS TextBee** — odesílá nakonfigurovaná oznámení textovými zprávami přes TextBee
- **Pokročilý doprovodný balíček** — přidává nástroje pro souborový systém důvěryhodného vývojáře, databázi, WP-CLI, REST dispatcher, tvorbu pluginů, git snapshot, správu uživatelů a benchmarky, distribuované odděleně od buildu pro WordPress.org

### Vylepšeno {#improved}

- **Nastavení spravované služby Superdav** — přidává endpointy hostované služby a automatické zřízení připojení pro podporované weby
- **Balíčkování vydání** — sestavuje samostatné ZIPy pro core a Advanced, publikuje oba na GitHubu a na WordPress.org odesílá pouze core balíček

### Opraveno {#fixed}

- **Spolehlivost AI požadavků** — vylepšuje výběr modelu, časové limity požadavků, výchozí model nastavení, zpracování reasoning textu a pokyny pro opakování při neplatných voláních nástrojů
- **Zpevnění kalendáře a připomínek** — posiluje Google Calendar tokeny a deduplikaci připomínek
- **Onboarding a obnovení schválení** — opravuje spouštění frontendu onboardingu a obnovení potvrzených schopností
- **Problémy kontroly balíčkování na WordPress.org** — řeší zpětnou vazbu z kontroly balíčkování pro core vydání

## 1.16.0 — Vydáno 2026-05-20 {#1160--released-on-2026-05-20}

### Nové {#new-1}

- **Schopnost Generate Logo SVG** — Theme Builder nyní umí generovat a vkládat vlastní logo SVG s sanitizací bezpečnou pro namespace
- **Nahrání fotografie v úvodním rozhovoru** — úvodní rozhovor Theme Builder nyní obsahuje krok nahrání fotografie pro bohatší návrhový kontext
- **Schopnost Validate Palette Contrast** — kontroluje dvojice barev z hlediska souladu s WCAG před jejich použitím v šabloně
- **Menu pro pohostinství** — Theme Builder nyní umí generovat strukturované stránky jídelních a nápojových lístků pro podniky v pohostinství
- **Vykreslování náhledu pro desktop a mobil** — zobrazte náhled svého návrhu na desktopových a mobilních zařízeních během výběru návrhového směru
- **Parametr popisku navigace** — schopnost Create Menu nyní podporuje samostatný `navigation_label` oddělený od titulku stránky
- **Dostupnost nástroje úrovně 1** — sd-ai-agent/site-scrape je nyní nástroj úrovně 1, ve výchozím stavu dostupný v Theme Builder

### Opraveno {#fixed-1}

- **Mezipaměť AI Client** — nyní je podložena transients pro perzistenci napříč požadavky, což brání ztrátě dat u dlouho běžících úloh agenta
- **Odkazy akcí v řádku pluginu** — opraveny a přejmenovány pro větší srozumitelnost

## 1.10.0 — Vydáno 2026-05-05 {#1100--released-on-2026-05-05}

### Nové {#new-2}

- **Internetové vyhledávání Tavily** — přidává Tavily jako poskytovatele vyhledávání pro bohatší výsledky internetového vyhledávání vedle Brave Search
- **Vestavěné dovednosti zohledňující šablonu** — průvodce dovednostmi pro Block Themes, Classic Themes, Kadence Blocks a Kadence Theme jsou nyní součástí pluginu
- **Schopnost kontaktního formuláře pro tvůrce webu** — přidává kontaktní formulář na libovolnou stránku přímo z chatovacího rozhraní

### Vylepšeno {#improved-1}

- **Integrace WooCommerce refaktorována** — nyní používá nativní WooCommerce API pro lepší spolehlivost a kompatibilitu
- **Seznam poskytovatelů se automaticky obnovuje** — při aktivaci nebo deaktivaci libovolného pluginu

### Opraveno {#fixed-2}

- **Schopnost navigate-to** — opravena nekonečná smyčka opětovného načítání na některých administračních stránkách
- **Schopnost list-posts** — nyní správně převádí názvy kategorií a štítků na slugy
- **Příkazy WP-CLI** — obnoveny chybějící aliasy namespace po předchozím refaktoringu
- **Automatizace událostí** — elegantně zpracovává weby, kde tabulky automatizace ještě nejsou vytvořeny
- **Schopnost memory-save** — nyní používá správnou předponu namespace v sestavovači systémových instrukcí
- **Skalární výsledky nástrojů** — nyní jsou před vrácením AI správně zabaleny
- **Statistiky používání** — nyní při upgradu ze starších verzí správně zpracovávají starší formát klíče schopnosti
