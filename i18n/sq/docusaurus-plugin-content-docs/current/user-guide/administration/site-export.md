---
title: Eksport i faqes së internetit
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Eksportimi i Siti

Paga e admin për **Site Export** ju lejon administratorët e rrjetit të paketojnë një site, ose të gjithë rrjetin, në një arkiv që mund të shkarkohet për migrim, bكرpim (backup) ose punë transferimi.

## Eksportimi i një siti {#exporting-one-site}

Shkoni te **Ultimate Multisite > Site Export** dhe zgjidhni **Generate new Site Export**. Zgjidhni sub-sitin që dëshironi të eksportoni, pastaj zgjidhni nëse arkivi duhet të përfshijë ngarkimet (uploads), pluginet dhe temat.

Kur eksportimi përfundon, shkarkoni ZIP-in nga lista **Existing Exports**. ZIP-et e eksportuara tani përfshijnë një `index.php` që mund të fillojë vetë (self-booting) dhe një `readme.txt`, kështu që arkivi mund të ngarkohet në një host të ri dhe të fillojë pa instaluar së pari një plugin importues të veçantë.

## Eksportimi i gjithë rrjetit {#exporting-the-whole-network}

Përdorni **Network Export** te faqen Site Export kur keni nevojë për një arkiv të vetëm që përmban të gjitha sub-sitet në rrjet. Kjo është e dobishme para migrimeve të host-it, ushtrimeve të rikuperimit nga katastrofa (disaster-recovery drills) ose ndërtimeve të stajngut (staging rebuilds) ku secili sub-site duhet të marrë përfshirje së bashku.

Duke qenë se një eksport rrjeti mund të jetë shumë më i madh se një eksporti i një siti vetëm, ekzekutoni atë gjatë një periudhe me trafik të ulët dhe konfirmojeni që magazinimi i synuar ka mjaftues hapësirë të lirë për ngarkime, pluginet, temat dhe skedarët ZIP të gjeneruar.

### Network Import Bundles (Paketimet e Importit të Rrjetit) {#network-import-bundles}

Nga Ultimate Multisite 2.12.0, Site Exporter mund të gjenerojë **network import bundles** — arkive specializuara të dizajnuara për rikuperimin e ndryshëm të sitit në nivel rrjeti. Një network import bundle përmban të gjitha skedarët dhe metadatumet e nevojshme për të rikuperuar disa site-e në një instalim të ri të rrjetit.

#### Gjenerimi i një Network Import Bundle {#generating-a-network-import-bundle}

1. Shko në **Ultimate Multisite > Site Export**
2. Kliko në **Generate new Network Export**
3. Zgjidh **Network Import Bundle** si lloj i ekzimit (export type)
4. Zgjidh nëse dëshiron të përfshini ngarkimet (uploads), pluginet dhe temat (themes)
5. Kliko në **Generate**
6. Shkarko ZIP-in e bundle nga lista **Existing Exports**

#### Rikonfigurimi nga një Network Import Bundle {#restoring-from-a-network-import-bundle}

Për të rikuperuar site nga një network import bundle:

1. Instalo Ultimate Multisite te hosti juaj i synuar (target host)
2. Përfundoni procesin e ndihmës (wizard) për konfigurimin e multisite
3. Shko në **Ultimate Multisite > Site Export** te rrjeti i ri
4. Kliko në **Import Network Bundle**
5. Ngarko ZIP-in e bundle të importit të rrjetit
6. Follow instruktimeve të instalimit nga ekranet

Procesi i importit do të rikthejë të gjitha sitet, përmbajtjen e tyre dhe konfigurimet

Network import bundles ruajnë:
- Përmbajtjen e situsës (postat, faqet, custom post types)
- Cilësimet dhe opsionet e situsës
- Roli dhe lejet e përdoruesve (user roles and permissions)
- Pluginet dhe temat (nëse janë të përfshira në bundle)
- Ngarkimet e mediave (nëse janë të përfshira në bundle)
- Tabela dhe të dhënat e bazës së të dhënave të ndryshme

## Instalimi i ZIP-it të ekzimit që starton vetë {#installing-a-self-booting-export-zip}

Për të rikuperuar një ZIP që starton vetë (self-booting) te një hosti i ri:

1. Ngarko përmbajtjen e ZIP-it të ekzimit në rrënjën (web root) të vendit të synuar
2. Hap `index.php` të ngarkuar në një browser
3. Follow instruktimeve të instalimit nga ekranet e paketës së ekzimit që është përfshirë (bundled export package).
4. Kontrollo `readme.txt` të përfshirur për shënime specifike të ekzimit para se të fshini skedarët e përkohshëm.

Për detaje më specifike të instalimit dhe importit për addon-et, shiko dokumentacionin [Site Exporter addon](/addons/site-exporter).

Për mjetin e një-shtëpisë (single-site tool) i shtuar në Ultimate Multisite 2.9.0, shiko [Export & Import](/user-guide/administration/export-import).
