---
title: Saidi eksportija muudatuste logi
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporter muudatuste logi

Versioon: 1.0.6 - avaldatud 2026-05-11
* Uus: site ekspordid sisaldavad nüüd isekäivituvat index.php, nii et ZIP-i saab paigaldada värskesse hosti ilma eraldi plugini paigalduseta
* Uus: võrgu eksport võimaldab administraatoritel eksportida kõik alamsaidid ühte arhiivi Site Export admin lehelt

Versioon: 1.0.5 - avaldatud 2026-05-05
* Parandus: lisati __callStatic WP_CLI polyfill stubile, et käsitleda mockimata meetodeid nagu get_config, vältides testide bootstrap tõrkeid

Versioon: 1.0.4 - avaldatud 2025-11-25

* Parandati ühilduvus Ultimate Multisite 2.4-ga.

Versioon: 1.0.2 - avaldatud 2025-09-28

* Nimetati prefix ümber kujule ultimate-multisite; uuendati text domain; versioonitõus.

### Versioon 1.0.1 - avaldatud 2023-08-09

* Täiustatud: nüüd tagab importija faili õige failitee hankimise.
* Parandatud: keelati objektivahemälu, et vältida vigu importimise ajal.
* Parandatud: parandati probleem, mille tõttu importija plugini allalaadimislink ei töötanud.

### Versioon 1.0.0 - avaldatud 2022-12-23

* Parandatud: ekspordivormi hüpikaken ei laadinud;
* Parandatud: Javascripti failid ei laadinud ekspordi lehel;
* Sisemine: uus build process;

### Versioon 1.0.0-beta.4 - avaldatud 2022-01-13

* Sisemine: lisati hooks ja filters generaator;
* Sisemine: lisati WP Ultimo stubs arendaja elukvaliteedi parandamiseks;
