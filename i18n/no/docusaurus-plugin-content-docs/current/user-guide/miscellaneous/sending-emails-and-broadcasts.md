---
title: Sende e-poster og utsendelser
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Sende e-poster og kringkastinger (v2) {#sending-emails-and-broadcasts-v2}

_**VIKTIG MERKNAD: Denne artikkelen viser til Ultimate Multisite versjon 2.x.**_

Ultimate Multisite leveres med en funksjon som lar deg kommunisere med kundene dine ved å sende en e-post til en målrettet bruker eller en gruppe brukere, samt sende varsler på admin Dashboard for å kringkaste kunngjøringer

## Legg til adminvarsler på kundenes Dashboard med kringkastinger {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Ved å bruke kringkastingsfunksjonen i Ultimate Multisite kan du legge til **adminvarsler** på brukerens admin Dashboard for undernettstedet.

Dette er svært nyttig hvis du trenger å komme med en kunngjøring, som systemvedlikehold eller tilbud om nye produkter eller tjenester til eksisterende brukere. Slik vil adminvarselet se ut på brukerens Dashboard.

<!-- Skjermbilde utilgjengelig: Adminvarsel-kringkasting vist på en kundes Dashboard for undernettsted -->

For å starte et adminvarsel går du til nettverkets admin Dashboard, og under **Ultimate Multisite**-menyen finner du alternativet **Kringkastinger**.

![Liste over kringkastinger i Ultimate Multisite-admin](/img/admin/broadcasts-list.png)

Du kan også redigere eksisterende kringkastinger:

![Redigeringsgrensesnitt for kringkasting](/img/admin/broadcast-edit.png)

Fra denne siden klikker du på **Legg til kringkasting**-knappen øverst.

Dette åpner modalvinduet Legg til kringkasting, der du kan velge hvilken type kringkasting du vil sende.

Velg **Melding**, og klikk deretter på **Neste trinn**-knappen.

![Modalvindu for å legge til kringkasting med Melding-alternativet valgt](/img/admin/broadcast-add-message.png)

Det neste vinduet ber deg om enten **Målkunde** eller **Målprodukt**. Merk at du kan velge mer enn én bruker eller mer enn ett produkt.

For å søke etter enten en brukerkonto eller et produkt må du begynne å skrive nøkkelordet i feltet.

Under **Meldingstype**-feltet kan du velge fargen på varselet. Dette vil fremheve hvor viktig meldingen din er.

Deretter kan du klikke på **Neste trinn**.

![Felter for målkunder, målprodukt og meldingstype for en Melding-kringkasting](/img/admin/broadcast-message-targets.png)

Det neste vinduet er der du kan begynne å skrive meldingen din ved å angi emnet og innholdet/meldingen du vil kringkaste til brukerne.

![Emne- og innholdsredigerer for kringkastingsmelding i skrive-trinnet](/img/admin/broadcast-edit.png)

Etter at du har opprettet meldingen, kan du trykke på **Send**-knappen.

Og det var det. Adminvarselet skal umiddelbart vises på brukerens Dashboard.

## Send e-poster til kundene dine {#send-emails-to-your-customers}

Ved å bruke kringkastingsfunksjonen i Ultimate Multisite kan du sende en e-post til brukerne dine. Du har mulighet til å sende e-posten bare til bestemte brukere eller målrette mot en bestemt brukergruppe basert på produktet eller planen de abonnerer på.

For å starte en e-postkringkasting går du til nettverkets admin Dashboard, og under Ultimate Multisite-menyen finner du alternativet Kringkasting.

![Liste over kringkastinger brukt som startpunkt for en e-postkringkasting](/img/admin/broadcasts-list.png)

Fra denne siden klikker du på **Legg til kringkasting**-knappen øverst.

Dette åpner modalvinduet Legg til kringkasting, der du kan velge hvilken type kringkasting du vil sende. Velg **E-post**, og klikk deretter på **Neste trinn**-knappen.

![Modalvindu for å legge til kringkasting med E-post-alternativet valgt](/img/admin/broadcast-add-email.png)

Det neste vinduet ber deg om enten **Målkunde** eller **Målprodukt**. Merk at du kan velge mer enn én bruker eller mer enn ett produkt.

For å søke etter enten en brukerkonto eller et produkt må du begynne å skrive nøkkelordet i feltet.

Når målgruppen din er valgt, kan du klikke på **Neste trinn**.

![Valg av målkunder og målprodukt for en E-post-kringkasting](/img/admin/broadcast-email-targets.png)

Det neste vinduet er der du kan begynne å skrive e-posten din ved å angi emnet og innholdet/meldingen du vil sende til brukerne.

<!-- Skjermbilde utilgjengelig: Emne- og innholdsredigerer for e-postkringkasting i skrive-trinnet -->

Etter at du har opprettet meldingen, kan du trykke på **Send**-knappen.

Og så enkelt er det å sende en e-post til sluttbrukerne dine ved hjelp av kringkastingsfunksjonen.

## System-e-poster {#system-emails}

System-e-poster i Ultimate Multisite er de **automatiske varslene** som sendes av systemet etter bestemte handlinger som registrering, betaling, domenetilknytning osv. Disse e-postene kan redigeres eller endres fra Ultimate Multisite-innstillingene. Det følger også med en funksjon som lar deg tilbakestille og importere eksisterende innstillinger fra en annen Ultimate Multisite-installasjon.

### Tilbakestilling og import {#resetting--importing}

Nye Ultimate Multisite-versjoner, samt tillegg, kan og vil registrere nye e-poster fra tid til annen.

For å unngå konflikter og andre problemer **legger vi ikke til de nye e-postmalene som System-e-poster i installasjonen din automatisk** , med mindre de er avgjørende for at en gitt funksjon skal fungere korrekt.

Superadministratorer og agenter kan imidlertid importere disse nylig registrerte e-postene via importverktøyet. Denne prosessen oppretter en ny system-e-post med innholdet og konfigurasjonen fra den nye e-postmalen, slik at superadministratoren kan gjøre eventuelle endringer de ønsker, eller beholde dem som de er.

#### Slik importerer du system-e-poster {#how-to-import-system-emails}

Gå til Ultimate Multisite-innstillingssiden din og gå til **E-poster**-fanen.

![E-poster-fanen i Ultimate Multisite-innstillinger som viser System-e-poster-seksjonen](/img/config/settings-emails-tab.png)

Deretter klikker du på **Tilpass System-e-poster**-knappen i sidefeltet.

<!-- Skjermbilde utilgjengelig: Tilpass System-e-poster-knappen i sidefeltpanelet for System-e-poster -->

På System-e-poster-siden ser du handlingsknappen **Tilbakestill og importer** øverst. Når du klikker på den knappen, skal import- og tilbakestillingsvinduet åpnes.

![Handlingsknapp for tilbakestilling eller import på admin-siden for System-e-poster](/img/admin/system-emails-reset-import.png)

Deretter kan du slå på alternativene for Importer e-poster for å se hvilke system-e-poster som er tilgjengelige for import.

<!-- Skjermbilde utilgjengelig: Reset and Import-modal med Import Emails-alternativene utvidet -->

#### Tilbakestilling av system-e-poster {#reseting-system-emails}

Andre ganger vil du innse at endringene du gjorde i en bestemt e-postmal, ikke lenger fungerer for deg, og du vil tilbakestille den til **standardtilstanden**.

I slike tilfeller har du to alternativer: Du kan ganske enkelt slette system-e-posten og importere den tilbake (ved å bruke instruksjonene ovenfor) – noe som vil slette sendingsmålinger og andre ting, og som gjør denne metoden minst foretrukket.

Eller du kan bruke **Reset & Import-verktøyet** for å tilbakestille den e-postmalen.

For å tilbakestille en e-postmal kan du følge trinnene ovenfor til du kommer til Reset & Import-verktøyet, og deretter slå på **Reset**-alternativet og velge e-postene du vil tilbakestille til standardinnholdet.

<!-- Skjermbilde utilgjengelig: Reset and Import-modal med Reset Emails-alternativene utvidet -->
