---
title: Site Exporter Endringslogg
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporter Endringslogg {#site-exporter-changelog}

Versjon: 1.0.6 - Utgitt den 2026-05-11
* Nytt: Site-eksport pakker nå med en selvstartende index.php, slik at ZIP-filen kan installeres på en ny vert uten separat plugin-installasjon
* Nytt: Nettverks-eksport lar administratorer eksportere alle undernettsteder i én enkelt arkivfil fra Site Export admin-siden

Versjon: 1.0.5 - Utgitt den 2026-05-05
* Feilretting: Lagt til __callStatic i WP_CLI polyfill stub for å håndtere u-mockede metoder som get_config, og dermed forhindre feil under test-oppstarten

Versjon: 1.0.4 - Utgitt den 2025-11-25

* Feilretting: Sikrer kompatibilitet med Ultimate Multisite 2.4.

Versjon: 1.0.2 - Utgitt den 2025-09-28

* Omdøpte prefikset til ultimate-multisite; oppdaterte tekstdomenet; økte versjonsnummeret.

### Versjon 1.0.1 - Utgitt den 2023-08-09 {#version-101---released-on-2023-08-09}

* Forbedret: Sikrer nå at riktig filsti for importfilen blir hentet.
* Feilretting: Deaktiverte objektcachen for å forhindre feil under import.
* Feilretting: Rettet problemet med at nedlastingslenken for import-pluginet ikke fungerte.

### Versjon 1.0.0 - Utgitt den 2022-12-23 {#version-100---released-on-2022-12-23}

* Feilretting: Popup for eksportskjema lastet ikke;
* Feilretting: Javascript-filer lastet ikke på eksport-siden;
* Internt: Ny byggeprosess;

### Versjon 1.0.0-beta.4 - Utgitt den 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Internt: Lagt til generator for hooks og filtre;
* Internt: Lagt til WP Ultimo stubs for å forbedre utvikleropplevelsen;
