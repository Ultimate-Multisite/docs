---
title: Webwerf Eksport
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Witwis-uitvoer

Die **Site Export** administrasiebladsy laat netwerkadministrateurs toe om een witwis, of die hele netwerk, in 'n aflaaibare argief te pak vir migrasie, 'n agtergrond, of oordragwerk.

## Witwis uitvoer

Gaan na **Ultimate Multisite > Site Export** en kies **Generate new Site Export**. Kies die subwerf wat jy wil uitvoer, en kies dan of die argief laadevandelaars, plugins en temas moet insluit.

Wanneer die uitvoer voltooi is, laai die ZIP van die **Existing Exports** lys af. Uitvoer ZIP's sluit nou 'n self-boot `index.php` en 'n `readme.txt` in, sodat die argief op 'n nuwe werf opgelaai en begin kan word sonder om eers 'n aparte importer-plugin te installeer.

## Die hele netwerk uitvoer

Gebruik **Network Export** op die Site Export bladsy wanneer jy 'n enkele argief benodig wat al die subwerwe in die netwerk bevat. Dit is nuttig voor werfmigrasies, rampherstel-oefeninge, of staging-herbou waar elke subwerf saam moet reis.

Aangesien 'n netwerkuitvoer baie groter kan wees as 'n enkele-witwis-uitvoer, voer dit uit tydens 'n lae-verkeer venster en bevestig dat die teikenopbergruimte genoeg vrye plek het vir laadevandelaars, plugins, temas en gegenereerde ZIP-lêers.

### Netwerk-import-bundels

Vanaf Ultimate Multisite 2.12.0 kan Site Exporter **network import bundles** genereer — gespesialiseerde argiewe wat ontwerp is vir gestroomlyn netwerk-wyd witwisherstel. 'n Netwerk-import-bundel bevat al die nodige lêers en metadata om verskeie werwe na 'n nuwe netwerk-installasie te herstel.

#### Genereer 'n Netwerk-import-bundel

1. Gaan na **Ultimate Multisite > Site Export**
2. Klik op **Generate new Network Export**
3. Kies **Network Import Bundle** as die uitvoer tipe
4. Kies of jy laadevandelaars, plugins en temas wil insluit
5. Klik op **Generate**
6. Laai die bundel ZIP van die **Existing Exports** lys af

#### Herstel vanaf 'n Netwerk-import-bundel

Om werwe uit 'n netwerk-import-bundel te herstel:

1. Installeer Ultimate Multisite op jou teikenwerf
2. Voltooi die multisite-opspruitgids
3. Gaan na **Ultimate Multisite > Site Export** op die nuwe netwerk
4. Klik op **Import Network Bundle**
5. Laai die netwerk-import-bundel ZIP-lêer op
6. Volg die instruksies op die skerm vir die import
7. Die importproses sal al die werwe, hul inhoud en konfigurasies herstel

Netwerk-import-bundels bewaar:
- Witwisinhoud (plaaslikes, bladsye, aangepaste plaaslike tipe)
- Witwisinstellings en opsies
- Gebruikerrolle en -vermoë
- Plugins en temas (indien ingesluit in die bundel)
- Media-laadevandelaars (indien ingesluit in die bundel)
- Aangepaste databasis-tabels en data

## Installeer 'n self-boot uitvoer ZIP

Om 'n self-boot ZIP op 'n nuwe werf te herstel:

1. Laai die uitgevoerde ZIP-inhaldes op na die teiken-webwortel.
2. Maak die opgelaaide `index.php` in 'n browser oop.
3. Volg die instruksies van die ingebalde uitvoerpakket.
4. Raadpleeg die ingebalde `readme.txt` vir uitvoer-spesifieke notas voordat jy tydelike lêers verwyder.

Vir add-on-spesifieke installasie- en importbesonderhede, sien die [Site Exporter add-on dokumentasie](/addons/site-exporter).

Vir die enkele-witwis-hulpmiddel wat in Ultimate Multisite 2.9.0 bygevoeg is, sien [Export & Import](/user-guide/administration/export-import).
