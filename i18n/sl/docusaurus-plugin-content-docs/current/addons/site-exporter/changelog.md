---
title: Dnevnik sprememb Site Exporter
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Dnevnik sprememb Site Exporter

Različica: 1.0.6 - Izdano 2026-05-11
* Novo: Izvozi spletnih mest zdaj vključujejo samodejno zagonski index.php, zato je ZIP mogoče namestiti na svežega gostitelja brez ločene namestitve plugina
* Novo: Izvoz omrežja administratorjem omogoča izvoz vseh podmest v enem arhivu s strani za administracijo Site Export

Različica: 1.0.5 - Izdano 2026-05-05
* Popravek: Dodan __callStatic v WP_CLI polyfill stub za obravnavo neposnetih metod, kot je get_config, kar preprečuje napake pri zagonu testov

Različica: 1.0.4 - Izdano 2025-11-25

* Popravljena združljivost z Ultimate Multisite 2.4.

Različica: 1.0.2 - Izdano 2025-09-28

* Preimenovan prefix v ultimate-multisite; posodobljen text domain; povišana različica.

### Različica 1.0.1 - Izdano 2023-08-09

* Izboljšano: Zdaj zagotavlja, da je pridobljena pravilna pot datoteke uvoznika.
* Popravljeno: Onemogočen predpomnilnik objektov za preprečevanje napak med uvozom.
* Popravljeno: Odpravljena težava, da povezava za prenos plugina uvoznika ni delovala.

### Različica 1.0.0 - Izdano 2022-12-23

* Popravljeno: Pojavno okno obrazca za izvoz se ni nalagalo;
* Popravljeno: Datoteke Javascript se niso nalagale na strani za izvoz;
* Interno: Nov postopek gradnje;

### Različica 1.0.0-beta.4 - Izdano 2022-01-13

* Interno: Dodan generator hookov in filtrov;
* Interno: Dodani WP Ultimo stubi za boljšo izkušnjo razvijalcev;
