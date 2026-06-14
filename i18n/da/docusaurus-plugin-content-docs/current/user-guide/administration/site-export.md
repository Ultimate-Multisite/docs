---
title: Site Eksport
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Eksport af site

Admin-siden **Site Export** giver netværksadministratorer mulighed for at pakke én site, eller hele netværket, ind i en downloadbar arkiv til migrering, backup eller overdragelsesarbejde.

## Eksport af én site

Gå til **Ultimate Multisite > Site Export** og vælg **Generate new Site Export**. Vælg den subsite, du vil eksportere, og vælg derefter, om arkivet skal indeholde uploads, plugins og themes.

Når eksporten er færdig, download ZIP-filen fra listen **Existing Exports**. Eksport ZIP'erne inkluderer nu en selvstartende `index.php` og en `readme.txt`, så arkivet kan uploade til en frisk host og starte uden først at skulle installere en separat importer plugin.

## Eksport af hele netværket

Brug **Network Export** på Site Export-siden, når du har brug for ét enkelt arkiv, der indeholder alle subsites i netværket. Dette er nyttigt før host-migrationer, katastrofeberedskabsøvelser eller staging genopbygninger, hvor hver subsite skal flyttes sammen.

Da en netværks-eksport kan være meget større end en enkelt-site eksport, skal du køre den i et lavtrafikvindue og bekræfte, at det målrettede lager har nok ledig plads til uploads, plugins, themes og genererede ZIP-filer.

### Network Import Bundles

Fra Ultimate Multisite 2.12.0 kan Site Exporter generere **network import bundles** — specialiserede arkiver designet til strømlinet netværksbred site-genoprettelse. En network import bundle indeholder alle de nødvendige filer og metadata til at genoprette flere sites til en ny netværksinstallation.

#### Generering af en Network Import Bundle

1. Gå til **Ultimate Multisite > Site Export**
2. Klik på **Generate new Network Export** (Generer ny netværks-eksport)
3. Vælg **Network Import Bundle** som eksporttype
4. Vælg, om du vil inkludere uploads, plugins og themes
5. Klik på **Generate** (Generer)
6. Download ZIP-pakken fra listen over **Existing Exports** (Eksisterende eksport).

#### Genoprettelse fra en Network Import Bundle

For at genoprette sider fra en netværksimport-bundle:

1. Installer Ultimate Multisite på din målhost
2. Færdiggør multisite opsætningsguiden
3. Gå til **Ultimate Multisite > Site Export** på det nye netværk
4. Klik på **Import Network Bundle** (Importer netværks-bundle)
5. Upload ZIP-filen med netværksimport-bundle
6. Følg de viste instruktioner på skærmen for importprocessen
7. Importprocessen vil genoprette alle sider, deres indhold og konfigurationer

Netværksimport-bundles bevarer:
- Site content (indlæg, sider, custom post types)
- Site settings og indstillinger
- Brugerroller og rettigheder
- Plugins og themes (hvis de er inkluderet i bundlen)
- Medieuploads (hvis de er inkluderet i bundlen)
- Custom database tables og data

## Installation af en selvstartende eksport ZIP

For at genoprette en selvstartende ZIP på en frisk host:

1. Upload indholdet af den eksporterede ZIP til målwebroden.
2. Åbn den uploadede `index.php` i en browser.
3. Følg de viste installationsinstruktioner fra den bundtede eksportpakke.
4. Gennemgå den bundtede `readme.txt` for eksport-specifikke noter, før du sletter midlertidige filer.

For installation og importdetaljer specifikt for addon findes dokumentationen i [Site Exporter addon documentation](/addons/site-exporter).

For det enkelt-site værktøj tilføjet i Ultimate Multisite 2.9.0, se [Export & Import](/user-guide/administration/export-import).
