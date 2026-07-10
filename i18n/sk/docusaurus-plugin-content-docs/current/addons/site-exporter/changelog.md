---
title: Zoznam zmien exportéra stránok
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Zoznam zmien Site Exporter {#site-exporter-changelog}

Verzia: 1.0.6 - Vydané 2026-05-11
* Nové: Exporty stránok teraz obsahujú samospúšťací index.php, takže ZIP je možné nainštalovať na čerstvý hosting bez samostatnej inštalácie pluginu
* Nové: Sieťový export umožňuje administrátorom exportovať všetky podstránky v jednom archíve zo stránky administrácie Site Export

Verzia: 1.0.5 - Vydané 2026-05-05
* Oprava: Pridané __callStatic do polyfill stubu WP_CLI na spracovanie nemockovaných metód, ako je get_config, čím sa predchádza zlyhaniam testovacieho bootstrapu

Verzia: 1.0.4 - Vydané 2025-11-25

* Oprava kompatibility s Ultimate Multisite 2.4.

Verzia: 1.0.2 - Vydané 2025-09-28

* Premenovanie prefixu na ultimate-multisite; aktualizácia text domain; zvýšenie verzie.

### Verzia 1.0.1 - Vydané 2023-08-09 {#version-101---released-on-2023-08-09}

* Vylepšené: Teraz zabezpečuje získanie správnej cesty k súboru importéra.
* Opravené: Vypnutá object cache, aby sa predišlo chybám počas importu.
* Opravené: Opravený problém s nefunkčným odkazom na stiahnutie pluginu importéra.

### Verzia 1.0.0 - Vydané 2022-12-23 {#version-100---released-on-2022-12-23}

* Opravené: Vyskakovacie okno exportného formulára sa nenačítavalo;
* Opravené: Javascript súbory sa na stránke exportu nenačítavali;
* Interné: Nový proces zostavenia;

### Verzia 1.0.0-beta.4 - Vydané 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Interné: Pridaný generátor hookov a filtrov;
* Interné: Pridané WP Ultimo stuby pre lepšiu kvalitu života vývojárov;
