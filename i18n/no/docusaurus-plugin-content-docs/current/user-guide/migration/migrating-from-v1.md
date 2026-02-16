---
title: Migrering fra V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrering fra V1

## Ultimate Multisite har gått fra den opprinnelige 1.x-versjonsserien til 2.x-versjonsserien.

Ultimate Multisite versjon 2.0 og nyere er en fullstendig omskriving av kodebasen, noe som betyr at det er svært lite til felles mellom den gamle og den nye versjonen. Derfor må dataene dine migreres til et format som de nye versjonene kan forstå når du oppgraderer fra 1.x til 2.x.

Heldigvis **har Ultimate Multisite 2.0+ en innebygd migreringsverktøy** i kjernen som kan oppdage data fra den gamle versjonen og konvertere dem til det nye formatet. Denne migreringen skjer under **installasjonsveiviseren** i versjon 2.0+.

Denne leksjonen dekker hvordan migreringsverktøyet fungerer, hva du gjør hvis noe går galt, og hvordan du feilsøker problemer som kan oppstå underveis.

_**VIKTIG: Før du begynner å oppgradere fra versjon 1.x til versjon 2.0, må du sørge for å ta en sikkerhetskopi av nettstedets database**_

## Første steg

Det første steget er å laste ned plugin-ens .zip-fil og installere versjon 2.0 på nettverkets admin-dashboard.

Etter at du [installerer og aktiverer versjon 2.0](../getting-started/installing-ultimate-multisite.md), vil systemet automatisk oppdage at Multisite-installasjonen din kjører på den gamle versjonen, og du vil se denne meldingen øverst på plugin-siden.

_**MERK:** Hvis du har Ultimate Multisite 1.x installert på Multisite-installasjonen din, får du muligheten til å erstatte plugin-en med versjonen du nettopp lastet ned. Klikk gjerne på **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Neste side viser deg hvilke eldre tillegg du har installert sammen med versjon 1.x. Den inneholder instruksjoner om hvorvidt versjonen du bruker er kompatibel med versjon 2.0, eller om du må installere en oppgradert versjon av tillegget etter migreringen.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Når du er klar til å fortsette, kan du klikke på knappen som sier **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Du kommer da til installasjonsveiviserens side med noen velkomstmeldinger. Du trenger bare å klikke **Get Started** for å gå til neste side.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Etter at du klikker **Get Started**, blir du videresendt til forhåndssjekken av installasjonen. Her ser du systeminformasjonen din og WordPress-installasjonen, og du får vite om den oppfyller **kravene til Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Neste steg er å taste inn lisensnøkkelen for Ultimate Multisite og aktivere plugin-en. Dette sikrer at alle funksjoner, inkludert tillegg, blir tilgjengelige på nettstedet ditt.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Etter at du har tastet inn nøkkelen, klikker du **Agree & Activate**.

Etter lisensaktiveringen kan du starte selve installasjonen ved å klikke **Install** på neste side. Dette oppretter automatisk de nødvendige filene og databasen som versjon 2.0 trenger for å fungere.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Nå kommer migreringen

Migreringsverktøyet har en innebygd sikkerhetsfunksjon som sjekker hele Multisite-installasjonen din for å sikre at alle Ultimate Multisite-dataene dine kan migreres uten problemer. Klikk på **Run Check**-knappen for å starte prosessen.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Etter at sjekken er kjørt, er det to mulige utfall: resultatet kan enten være **med** en feil eller **uten feil**.

### Med feil

Hvis du får en feilmelding, må du kontakte supportteamet vårt slik at de kan hjelpe deg med å fikse feilen. Sørg for å **inkludere feilloggen** når du oppretter en henvendelse. Du kan laste ned loggen, eller du kan klikke på lenken som sier kontakt supportteamet vårt. Da åpnes hjelpewidgeten på høyre side av siden din med feltene ferdig utfylt, inkludert feilloggene under beskrivelsen.

_**Siden systemet fant en feil, vil du ikke kunne fortsette migreringen til versjon 2.0. Du kan da rulle tilbake til versjon 1.x for å fortsette å kjøre nettverket ditt til feilen er rettet.**_

### Uten feil

Hvis systemet ikke finner noen feil, vil du se en suksessmelding og en **Migrate**-knapp nederst som lar deg fortsette med migreringen. På denne siden blir du minnet på å ta en sikkerhetskopi av databasen før du går videre, noe vi sterkt anbefaler. Klikk **Migrate** hvis du allerede har tatt en sikkerhetskopi.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

Og det er alt som skal til!

Du kan enten fortsette å kjøre veiviseren for å oppdatere logoen din og andre ting på nettverket, eller begynne å navigere i Ultimate Multisite versjon 2.0-menyen og det nye grensesnittet. Sett i gang og ha det gøy.
