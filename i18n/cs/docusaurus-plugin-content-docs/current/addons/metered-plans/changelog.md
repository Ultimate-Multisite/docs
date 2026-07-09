---
title: Změny v plánu měření
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Změnový deník plánů s měřením {#metered-plans-changelog}

Verze 1.1.0 - Uvedeno dne 2026-05-05
- Nové: Fakturace AI tokenů pro multisite podstránky – sleduje a fakturuje využití AI tokenů napříč zákaznickými stránkami s konfigurovatelnými sazby za token
- Nové: Implementace konektorů byla přeorganizována s dynamickým zjišťováním limitů a zápisem v reálném čase (write-through), což zajišťuje přesnost v reálném čase napříč všemi konektory
- Oprava: Aktualizace tabulek databáze jsou nyní správně synchronizovány se schématem BerlinDB, což zabraňuje selhání aktualizace při nových instalacích
- Oprava: Volání zpět při aktualizaci databáze (Database upgrade callbacks) byly převedeny na správný formát, čímž je vyřešeno neviditelné selhání aktualizace
- Oprava: Zlomkové hodnoty jsou nyní přijímány v poli pro přirážku za překročení limitu AI Usage Overage Markup
- Oprava: Vyřešeno fatální chyby a problémy s dvojitou inicializací při načítání pluginu
- Vylepšeno: Přidán npm skript check-env, takže prostředí pro vývojáře se konfigurovat sama při prvním spuštění

### 1.0.3 {#103}
* Aktualizováno na Plugin Update Checker v5
* Přidány moderní hlavičky pluginů WordPress
* Vylepšena kompatibilita s nejnovějšími verzemi WordPress
* Zlepšeno zpracování sledování využití

### 1.0.2 {#102}
* Opravy chyb a vylepšení výkonu
* Vylepšená reportáž využití

### 1.0.0 {#100}
* První vydání
* Základní funkce měřené fakturace
* Sledování využití a výpočet překročení limitu
* Automatické generování faktur
