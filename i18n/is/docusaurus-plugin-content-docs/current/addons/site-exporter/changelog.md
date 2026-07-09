---
title: Breytingaskrá vefútflutnings
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporter breytingaskrá

Útgáfa: 1.0.6 - Gefin út 2026-05-11
* Nýtt: Site útflutningar pakka nú með sjálfræsandi index.php svo hægt sé að setja ZIP upp á nýjum hýsli án sérstakrar plugin uppsetningar
* Nýtt: Netútflutningur gerir stjórnendum kleift að flytja út allar undirsíður í einu safni frá Site Export stjórnunarsíðunni

Útgáfa: 1.0.5 - Gefin út 2026-05-05
* Lagfæring: Bætti __callStatic við WP_CLI polyfill stub til að meðhöndla óhermdar aðferðir eins og get_config, sem kemur í veg fyrir bilanir í test bootstrap

Útgáfa: 1.0.4 - Gefin út 2025-11-25

* Lagfæring á samhæfni við Ultimate Multisite 2.4.

Útgáfa: 1.0.2 - Gefin út 2025-09-28

* Endurnefna forskeyti í ultimate-multisite; uppfæra text domain; hækka útgáfunúmer.

### Útgáfa 1.0.1 - Gefin út 2023-08-09

* Bætt: Tryggir nú að rétt skráarslóð innflytjandaskrárinnar fáist.
* Lagað: Slökkti á object cache til að koma í veg fyrir villur við innflutning.
* Lagað: Lagaði vandamálið með að niðurhalstengill innflytjanda-plugin virkaði ekki.

### Útgáfa 1.0.0 - Gefin út 2022-12-23

* Lagað: Sprettigluggi útflutningsforms hleðst ekki;
* Lagað: Javascript skrár hlaðast ekki á útflutningssíðunni;
* Innra: Nýtt byggingarferli;

### Útgáfa 1.0.0-beta.4 - Gefin út 2022-01-13

* Innra: Bætti við hooks og filters generator;
* Innra: Bætti við WP Ultimo stubs fyrir bætt lífsgæði þróunaraðila;
