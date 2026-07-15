---
title: Site-eksport
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Eksport av nettsted

Administrasjonssiden **Site Export** lar nettverksadministratorer pakke ett nettsted, eller hele nettverket, inn i en nedlastbar arkivfil for migrering, sikkerhetskopiering eller overlevering.

## Eksportering av ett nettsted {#exporting-one-site}

Gå til **Ultimate Multisite > Site Export** og velg **Generate new Site Export**. Velg undernettstedet du vil eksportere, og deretter velg om arkivet skal inkludere opplastinger, plugins og temaer.

Når eksporten er ferdig, last ned ZIP-filen fra listen over **Existing Exports**. Eksport-ZIP-filene inkluderer nå en selvstarter `index.php` og en `readme.txt`, slik at arkivet kan lastes opp til en ny vert og starte uten først å installere et separat importeringsplugin.

## Eksportering av hele nettverket {#exporting-the-whole-network}

Bruk **Network Export** på Site Export-siden når du trenger ett enkelt arkiv som inneholder alle undernettstedene i nettverket. Dette er nyttig før vertmigreringer, øvelser i katastrofegjenoppretting, eller staging-gjenoppbygginger der hvert undernettsted må flyttes sammen.

Siden en nettverks-eksportering kan være mye større enn en enkeltstående nettsted-eksportering, kjør den i en periode med lav trafikk, og bekreft at mål-lagringen har nok ledig plass til opplastinger, plugins, temaer og genererte ZIP-filer.

### Nettverksimport-pakker (Network Import Bundles) {#network-import-bundles}

Fra Ultimate Multisite 2.12.0 kan Site Exporter generere **network import bundles** – spesialiserte arkiver designet for strømlinjeformet gjenoppretting av nettstedet. En network import bundle inneholder alle nødvendige filer og metadata for å gjenopprette flere nettsteder til en ny nettverksinstallasjon.

#### Generering av en Network Import Bundle {#generating-a-network-import-bundle}

1. Gå til **Ultimate Multisite > Site Export**
2. Klikk på **Generate new Network Export**
3. Velg **Network Import Bundle** som eksporttype
4. Velg om du vil inkludere opplastinger, plugins og temaer
5. Klikk på **Generate**
6. Last ned bundle ZIP-filen fra listen over **Existing Exports**

#### Gjenoppretting fra en Network Import Bundle {#restoring-from-a-network-import-bundle}

For å gjenopprette nettsteder fra en network import bundle:

1. Installer Ultimate Multisite på mål-verten din
2. Fullfør multisite-oppsettguiden
3. Gå til **Ultimate Multisite > Site Export** på det nye nettverket
4. Klikk på **Import Network Bundle**
5. Last opp network import bundle ZIP-filen
6. Følg instruksjonene for import på skjermen
7. Importprosessen vil gjenopprette alle nettsteder, deres innhold og konfigurasjoner

Network import bundles bevarer:
- Nettstedinnhold (innlegg, sider, custom post types)
- Nettinnstillinger og -alternativer
- Brukerroller og -tillatelser
- Plugins og temaer (hvis inkludert i bundle)
- Medieopplastinger (hvis inkludert i bundle)
- Tilpassede database-tabeller og data

## Installasjon av en selvstarter eksport ZIP {#installing-a-self-booting-export-zip}

For å gjenopprette en selvstarter ZIP på en ny vert:

1. Last opp innholdet i den eksporterte ZIP-filen til mål-webrot.
2. Åpne den opplastede `index.php` i en nettleser.
3. Følg installasjonsinstruksjonene på skjermen fra den pakkede eksportpakken.
4. Gå gjennom den pakkede `readme.txt` for eksportspesifikke merknader før du fjerner midlertidige filer.

For detaljer om addon-spesifikk installasjon og import, se [Site Exporter addon documentation](/addons/site-exporter).

For verktøyet for enkeltnettsteder som ble lagt til i Ultimate Multisite 2.9.0, se [Export & Import](/user-guide/administration/export-import).
