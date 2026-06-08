---
title: Změny v Site Exporteru
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Změnový deník Exporteru webu

Verze: 1.0.6 - Vydáno dne 2026-05-11
* Nové: Exporty webu nyní balí index.php, který se sám spustí, takže ZIP lze nainstalovat na novém hostingu bez samostatné instalace pluginu.
* Nové: Export sítě umožňuje administrátorům exportovat všechny subwebové stránky v jednom archivu přímo ze stránky administrace Site Export.

Verze: 1.0.5 - Vydáno dne 2026-05-05
* Opraveno: Přidáno `__callStatic` do polyfillu WP_CLI stubu, aby zpracovalo nemockované metody jako `get_config`, čímž se zabrání selhání při spuštění testů.

Verze: 1.0.4 - Vydáno dne 2025-11-25

* Opravena kompatibilita s Ultimate Multisite 2.4.

Verze: 1.0.2 - Vydáno dne 2025-09-28

* Změněno předpona na ultimate-multisite; aktualizováno textové domény; zvýšena verze.

### Verze 1.0.1 - Vydáno dne 2023-08-09

* Vylepšeno: Nyní zajišťuje, že je získána správná cesta k souboru importéru.
* Opraveno: Vypnutý cache objektů, aby se zabránilo chybám během importu.
* Opraveno: Opraven problém s nefungujícím odkazem na stahování pluginu importéru.

### Verze 1.0.0 - Vydáno dne 2022-12-23

* Opraveno: Okenní vyskakovací formulář exportu se nenačítal;
* Opraveno: JavaScriptové soubory se nenačítaly na stránce exportu;
* Interní: Nový proces sestavení;

### Verze 1.0.0-beta.4 - Vydáno dne 2022-01-13

* Interní: Přidán generátor hooků a filtrů;
* Interní: Přidány stubs WP Ultimo pro zlepšení kvality života vývojářů;
