---
title: Dnevnik sprememb merjenih paketov
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Dnevnik sprememb za Metered Plans

Različica 1.1.0 - Izdano 2026-05-05
- Novo: Obračunavanje AI tokenov za multisite podmesta — spremljajte in obračunavajte porabo AI tokenov na spletnih mestih strank z nastavljivimi cenami na token
- Novo: Uveljavljanje povezovalnikov je bilo ponovno zgrajeno z dinamičnim odkrivanjem omejitev in zapisovanjem skozi, kar zagotavlja natančnost v realnem času v vseh povezovalnikih
- Popravek: Nadgradnje tabel baze podatkov so zdaj pravilno usklajene z definicijami sheme BerlinDB, kar preprečuje napake pri nadgradnji pri novih namestitvah
- Popravek: Povratni klici nadgradnje baze podatkov so pretvorjeni v pravilno obliko, kar odpravlja tihe napake pri nadgradnji
- Popravek: Decimalne vrednosti so zdaj sprejete v vnosnem polju AI Usage Overage Markup
- Popravek: Odpravljene so bile usodne napake in težave z dvojno inicializacijo ob nalaganju vtičnika
- Izboljšano: Dodan je bil npm script check-env, da se razvojna okolja ob prvem zagonu sama konfigurirajo

### 1.0.3
* Posodobljeno na Plugin Update Checker v5
* Dodane sodobne glave WordPress vtičnika
* Izboljšana združljivost z najnovejšimi različicami WordPress
* Izboljšana zmogljivost spremljanja porabe

### 1.0.2
* Popravki napak in izboljšave zmogljivosti
* Izboljšano poročanje o porabi

### 1.0.0
* Prva izdaja
* Osnovna funkcionalnost merjenega obračunavanja
* Spremljanje porabe in izračun prekoračitev
* Samodejno ustvarjanje računov
