---
title: Dnevnik promjena izvoznika web-mjesta
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Dnevnik promjena Site Exporter

Verzija: 1.0.6 - Objavljeno 2026-05-11
* Novo: Izvozi web-mjesta sada uključuju samopokrećući index.php kako bi se ZIP mogao instalirati na svježem hostu bez zasebne instalacije plugin
* Novo: Mrežni izvoz omogućuje administratorima izvoz svih podweb-mjesta u jednoj arhivi sa stranice administracije izvoza web-mjesta

Verzija: 1.0.5 - Objavljeno 2026-05-05
* Ispravak: Dodan __callStatic u WP_CLI polyfill stub za obradu nemockanih metoda poput get_config, čime se sprječavaju neuspjesi pri pokretanju testova

Verzija: 1.0.4 - Objavljeno 2025-11-25

* Ispravak kompatibilnosti s Ultimate Multisite 2.4.

Verzija: 1.0.2 - Objavljeno 2025-09-28

* Preimenovan prefiks u ultimate-multisite; ažurirana tekstualna domena; povećana verzija.

### Verzija 1.0.1 - Objavljeno 2023-08-09 {#version-101---released-on-2023-08-09}

* Poboljšano: Sada osigurava dohvaćanje ispravne putanje datoteke uvoznika.
* Ispravljeno: Onemogućena predmemorija objekata radi sprječavanja pogrešaka tijekom uvoza.
* Ispravljeno: Riješen problem s neispravnom poveznicom za preuzimanje plugin uvoznika.

### Verzija 1.0.0 - Objavljeno 2022-12-23 {#version-100---released-on-2022-12-23}

* Ispravljeno: Skočni prozor obrasca za izvoz se ne učitava;
* Ispravljeno: Javascript datoteke se ne učitavaju na stranici izvoza;
* Interno: Novi proces izgradnje;

### Verzija 1.0.0-beta.4 - Objavljeno 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Interno: Dodan generator kuka i filtara;
* Interno: Dodani WP Ultimo stubovi za kvalitetniji rad programera;
