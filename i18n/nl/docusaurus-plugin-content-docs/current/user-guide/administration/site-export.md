---
title: Site-export
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Site Export

De adminpagina **Site Export** stelt netwerkbeheerders in staat om één site, of het hele netwerk, te verpakken in een downloadbaar archief voor migratie, back-up of overdracht.

## Het exporteren van één site

Ga naar **Ultimate Multisite > Site Export** en kies **Generate new Site Export**. Selecteer de subsite die u wilt exporteren en kies vervolgens of het archief uploads, plugins en themes moet bevatten.

Wanneer de export is voltooid, downloadt u het ZIP-bestand uit de lijst met **Existing Exports**. De export ZIP's bevatten nu een zelfstartend `index.php` en een `readme.txt`, zodat het archief op een nieuwe host kan worden geüpload en gestart zonder eerst een aparte importer plugin te installeren.

## Het exporteren van het hele netwerk

Gebruik **Network Export** op de Site Export pagina wanneer u een enkel archief nodig heeft met alle subsites in het netwerk. Dit is handig vóór hostmigraties, disaster-recovery oefeningen of staging rebuilds waarbij elke subsite samen moet reizen.

Omdat een netwerkexport veel groter kan zijn dan een single-site export, voer deze dan uit tijdens een periode met weinig verkeer en bevestig of de bestemmingsopslag voldoende vrije ruimte heeft voor uploads, plugins, themes en gegenereerde ZIP-bestanden.

### Network Import Bundles

Vanaf Ultimate Multisite 2.12.0 kan Site Exporter **network import bundles** genereren — gespecialiseerde archieven die zijn ontworpen voor een gestroomlijnde netwerkbrede site-herstel. Een network import bundle bevat alle benodigde bestanden en metadata om meerdere sites te herstellen op een nieuwe netwerkinstallatie.

#### Een Network Import Bundle genereren

1. Ga naar **Ultimate Multisite > Site Export**
2. Klik op **Generate new Network Export**
3. Selecteer **Network Import Bundle** als het exporttype
4. Kies of u uploads, plugins en themes wilt opnemen
5. Klik op **Generate**
6. Download de bundle ZIP uit de lijst met **Existing Exports**

#### Herstellen vanuit een Network Import Bundle

Om sites te herstellen vanuit een network import bundle:

1. Installeer Ultimate Multisite op uw doelhost.
2. Voltooi de multisite setup wizard.
3. Ga naar **Ultimate Multisite > Site Export** op het nieuwe netwerk.
4. Klik op **Import Network Bundle**.
5. Upload het network import bundle ZIP-bestand.
6. Volg de instructies voor import op het scherm.
7. Het importproces herstelt alle sites, hun content en configuraties.

Network import bundles bewaren:
- Site content (posts, pages, custom post types)
- Site settings en opties
- User roles en permissies
- Plugins en themes (indien opgenomen in de bundle)
- Media uploads (indien opgenomen in de bundle)
- Custom database tables en data

## Een zelfstartend export ZIP installeren

Om een zelfstartend ZIP op een nieuwe host te herstellen:

1. Upload de geëxporteerde ZIP-inhoud naar de doel web root.
2. Open de geüploade `index.php` in een browser.
3. Volg de instructies voor de installatie van het meegeleverde exportpakket.
4. Bekijk de meegeleverde `readme.txt` op specifieke exportopmerkingen voordat u tijdelijke bestanden verwijdert.

Voor details over de installatie en import van specifieke addons, zie de [Site Exporter addon documentation](/addons/site-exporter).

Voor de single-site tool die is toegevoegd in Ultimate Multisite 2.9.0, zie [Export & Import](/user-guide/administration/export-import).
