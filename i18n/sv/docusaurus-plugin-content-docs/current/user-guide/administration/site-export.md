---
title: Webbplats-export
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exportera webbplats {#site-export}

Admin-sidan **Site Export** låter nätverksadministratörer packa en enskild webbplats, eller hela nätverket, i ett nedladdningsbart arkiv för migrering, backup eller överlämning.

## Exportera en webbplats {#exporting-one-site}

Gå till **Ultimate Multisite > Site Export** och välj **Generate new Site Export**. Välj den subsite du vill exportera, och välj sedan om arkivet ska inkludera uploads, plugins och themes.

När exporten är klar, ladda ner ZIP-filen från listan över **Existing Exports**. Export-ZIP-filer innehåller nu en självstartande `index.php` och en `readme.txt`, så att arkivet kan laddas upp till en ny värd och startas utan att först installera ett separat importer-plugin.

## Exportera hela nätverket {#exporting-the-whole-network}

Använd **Network Export** på sidan Site Export när du behöver ett enda arkiv som innehåller alla subsites i nätverket. Detta är användbart före värd-migrationer, katastrofåterhämtningsövningar eller staging-återuppbyggnader där varje subsite måste flytta tillsammans.

Eftersom en nätverks-export kan bli mycket större än en enskild webbplats-export, kör den under en period med låg trafik och bekräfta att målarabetaget har tillräckligt med ledigt utrymme för uploads, plugins, themes och genererade ZIP-filer.

### Network Import Bundles {#network-import-bundles}

Från Ultimate Multisite 2.12.0 kan Site Exporter generera **network import bundles** – specialiserade arkiv utformade för smidigare nätverksövergripande återställning av webbplatser. Ett network import bundle innehåller alla nödvändiga filer och metadata för att återställa flera webbplatser till en ny nätverksinstallation.

#### Generera ett Network Import Bundle {#generating-a-network-import-bundle}

1. Gå till **Ultimate Multisite > Site Export**
2. Klicka på **Generate new Network Export**
3. Välj **Network Import Bundle** som exporttyp
4. Välj om du vill inkludera uploads, plugins och themes
5. Klicka på **Generate**
6. Ladda ner bundle ZIP-filen från listan över **Existing Exports**

#### Återställa från ett Network Import Bundle {#restoring-from-a-network-import-bundle}

För att återställa webbplatser från ett network import bundle:

1. Installera Ultimate Multisite på din målvärd
2. Slutför multisite-uppsättningsguiden
3. Gå till **Ultimate Multisite > Site Export** på det nya nätverket
4. Klicka på **Import Network Bundle**
5. Ladda upp network import bundle ZIP-filen
6. Följ instruktionerna för import som visas på skärmen
7. Importprocessen kommer att återställa alla webbplatser, deras innehåll och konfigurationer

Network import bundles bevarar:
- Webbplatsinnehåll (inlägg, sidor, custom post types)
- Webbplatsinställningar och alternativ
- Användarroller och behörigheter
- Plugins och themes (om de ingår i bundle)
- Medieuploads (om de ingår i bundle)
- Anpassade databassistabeller och data

## Installera en självstartande export ZIP {#installing-a-self-booting-export-zip}

För att återställa en självstartande ZIP på en ny värd:

1. Ladda upp innehållet i den exporterade ZIP-filen till målets webbrot.
2. Öppna den uppladdade `index.php` i en webbläsare.
3. Följ instruktionerna för installatören som visas på skärmen från det paketerade exportmaterialet.
4. Granska den paketerade `readme.txt` för exportspecifika anteckningar innan du tar bort temporära filer.

För detaljer om installation och import för specifika addons, se [Site Exporter addon documentation](/addons/site-exporter).

För verktyget för enskilda webbplatser som lades till i Ultimate Multisite 2.9.0, se [Export & Import](/user-guide/administration/export-import).
