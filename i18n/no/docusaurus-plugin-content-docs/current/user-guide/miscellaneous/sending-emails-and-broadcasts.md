---
title: Sende e-poster og utsendelser
sidebar_position: 11
_i18n_hash: 2c1041bf76187ffc82978d1fa966fb23
---
# Sende e-poster og kringkastinger (v2)

_**VIKTIG MERKNAD: Denne artikkelen gjelder Ultimate Multisite versjon 2.x.**_

Ultimate Multisite har en funksjon som lar deg kommunisere med kundene dine ved å sende e-post til en bestemt bruker eller en gruppe brukere, samt vise varsler på admin-dashbordet deres for å kringkaste kunngjøringer.

## Legg til admin-varsler på kundenes dashboard med kringkastinger

Med kringkastingsfunksjonen i Ultimate Multisite kan du legge til **admin-varsler** på brukernes subsite admin-dashboard.

Dette er svært nyttig hvis du trenger å gi beskjed om for eksempel systemvedlikehold eller tilby nye produkter eller tjenester til eksisterende brukere. Slik vil admin-varselet se ut på brukerens dashboard.

![Admin-varsel fra kringkasting vist på kundens dashboard](/img/admin/broadcasts-list.png)

For å opprette et admin-varsel, gå til nettverkets admin-dashboard og under **Ultimate Multisite**-menyen finner du **Broadcasts**-valget.

![Broadcasts-meny i Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Fra denne siden klikker du på **Add Broadcast**-knappen øverst.

Dette åpner Add broadcast-vinduet der du kan velge hvilken type kringkasting du ønsker å sende.

Velg **Message** og klikk deretter på **Next Step**-knappen.

![Add broadcast-vindu med Message-type valgt](/img/admin/broadcasts-list.png)

Det neste vinduet ber deg om enten **Target customer** eller **Target product**. Merk at du kan velge mer enn én bruker eller mer enn ett produkt.

For å søke etter enten en brukerkonto eller et produkt må du begynne å skrive søkeordet i feltet.

Under **Message type**-feltet kan du velge fargen på varselet. Dette vil fremheve hvor viktig meldingen er.

Deretter kan du klikke **Next Step**.

![Valg av målkunde og produkt for kringkasting](/img/admin/broadcasts-list.png)

Det neste vinduet er der du kan begynne å skrive meldingen din ved å fylle inn emne og innholdet/meldingen du ønsker å kringkaste til brukerne.

![Emne og innholdsredigering for kringkastingsmelding](/img/admin/broadcasts-list.png)

Når du har skrevet meldingen, kan du trykke på **Send**-knappen.

Og det var det. Admin-varselet skal umiddelbart vises på brukerens dashboard.

## Send e-poster til kundene dine

Med kringkastingsfunksjonen i Ultimate Multisite kan du sende e-post til brukerne dine. Du har mulighet til å sende e-posten kun til bestemte brukere eller målrette mot en bestemt brukergruppe basert på produktet eller planen de abonnerer på.

For å starte en e-postkringkasting, gå til nettverkets admin-dashboard og under Ultimate Multisite-menyen finner du Broadcast-valget.

![Broadcasts-siden i Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Fra denne siden klikker du på **Add broadcast**-knappen øverst.

Dette åpner Add broadcast-vinduet der du kan velge hvilken type kringkasting du ønsker å sende. Velg **Email** og klikk deretter på **Next Step**-knappen.

![Add broadcast-vindu med Email-type valgt](/img/admin/broadcasts-list.png)

Det neste vinduet ber deg om enten **Target customer** eller **Target product**. Merk at du kan velge mer enn én bruker eller mer enn ett produkt.

For å søke etter enten en brukerkonto eller et produkt må du begynne å skrive søkeordet i feltet.

Når målgruppen er valgt, kan du klikke **Next Step**.

![Valg av målkunde og produkt for e-postkringkasting](/img/admin/broadcasts-list.png)

Det neste vinduet er der du kan begynne å skrive e-posten din ved å fylle inn emne og innholdet/meldingen du ønsker å sende til brukerne.

![Emne og innholdsredigering for e-postkringkasting](/img/admin/broadcasts-list.png)

Når du har skrevet meldingen, kan du trykke på **Send**-knappen.

Og så enkelt er det å sende en e-post til sluttbrukerne dine ved hjelp av kringkastingsfunksjonen.

## System-e-poster

System-e-poster i Ultimate Multisite er de **automatiske varslene** som sendes av systemet etter bestemte handlinger som registrering, betaling, domenetilkobling osv. Disse e-postene kan redigeres eller endres fra Ultimate Multisite-innstillingene. Det finnes også en funksjon som lar deg tilbakestille og importere eksisterende innstillinger fra en annen Ultimate Multisite-installasjon.

### Tilbakestilling og importering

Nye Ultimate Multisite-versjoner, samt tillegg, kan og vil registrere nye e-poster fra tid til annen.

For å unngå konflikter og andre problemer **vil vi ikke legge til de nye e-postmalene som system-e-poster automatisk på installasjonen din**, med mindre de er avgjørende for at en gitt funksjon skal fungere korrekt.

Superadministratorer og agenter kan imidlertid importere disse nylig registrerte e-postene via importverktøyet. Denne prosessen oppretter en ny system-e-post med innholdet og konfigurasjonen fra den nye e-postmalen, slik at superadministratoren kan gjøre eventuelle endringer eller beholde dem som de er.

#### Slik importerer du system-e-poster

Gå til Ultimate Multisite-innstillingssiden og naviger til **Emails**-fanen.

![Emails-fanen i Ultimate Multisite-innstillinger](/img/config/settings-emails.png)

Deretter klikker du på **Customize System Emails**-knappen i sidepanelet.

![Customize System Emails-knappen i sidepanelet](/img/config/settings-emails.png)

På System Emails-siden ser du **Reset & Import**-handlingsknappen øverst. Ved å klikke på denne knappen åpnes import- og tilbakestillingsvinduet.

![Reset and Import-handlingsknapp på System Emails-siden](/img/config/settings-emails.png)

Deretter kan du slå på Import Emails-alternativene for å se hvilke system-e-poster som er tilgjengelige for import.

![Import Emails-alternativer som viser tilgjengelige system-e-poster](/img/config/settings-emails.png)

#### Tilbakestille system-e-poster

Noen ganger vil du oppdage at endringene du har gjort i en e-postmal ikke lenger fungerer for deg, og du ønsker å tilbakestille den til **standardtilstanden**.

I slike tilfeller har du to alternativer: du kan ganske enkelt slette system-e-posten og importere den på nytt (ved å følge instruksjonene ovenfor) – dette vil slette sendestatistikk og andre ting, noe som gjør denne metoden minst foretrukket.

Eller du kan bruke **Reset & Import-verktøyet** for å tilbakestille den e-postmalen.

For å tilbakestille en e-postmal kan du følge trinnene ovenfor til du kommer til Reset & Import-verktøyet, og deretter slå på **Reset**-alternativet og velge e-postene du vil tilbakestille til standardinnholdet.

![Reset-alternativ for å gjenopprette e-postmaler til standardinnstillinger](/img/config/settings-emails.png)
