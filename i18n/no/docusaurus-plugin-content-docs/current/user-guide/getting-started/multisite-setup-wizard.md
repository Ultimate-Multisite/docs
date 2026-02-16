---
title: Multisite-oppsettsveiviser
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Veiviser for oppsett av Multisite

Ultimate Multisite inkluderer en innebygd veiviser som automatisk konverterer en standard WordPress-installasjon til et WordPress Multisite-nettverk. Dette gjør at du slipper å redigere `wp-config.php` manuelt eller kjøre databasekommandoer.

:::tip
Hvis WordPress-installasjonen din allerede kjører som et Multisite-nettverk, kan du hoppe over dette steget. Veiviseren vises kun når Multisite ikke er aktivert.
:::

## Når vises veiviseren?

Når du aktiverer Ultimate Multisite på en standard WordPress-installasjon (uten Multisite), oppdager utvidelsen at Multisite ikke er aktivert og omdirigerer deg automatisk til veiviseren for Multisite-oppsett i stedet for den vanlige oppsettsveiviseren.

Du kan også gå direkte til **WP Admin > Ultimate Multisite > Multisite Setup**.

## Forutsetninger

Før du kjører veiviseren, må du sørge for at:

- Du har **administratortilgang** til WordPress-installasjonen din
- Serverens `wp-config.php`-fil er **skrivbar** for webserveren
- Du har en **fersk sikkerhetskopi** av filene og databasen din

:::warning
Veiviseren endrer `wp-config.php`-filen din og oppretter nye databasetabeller. Ta alltid en sikkerhetskopi før du fortsetter.
:::

## Steg 1: Velkommen

Den første skjermen forklarer hva WordPress Multisite er og hva veiviseren vil gjøre:

- Aktivere Multisite-funksjonen i WordPress-konfigurasjonen din
- Opprette de nødvendige nettverksdatabasetabellene
- Legge til de påkrevde multisite-konstantene i `wp-config.php`
- Nettverksaktivere Ultimate Multisite på tvers av nettverket

![Veiviser for Multisite-oppsett – Velkomststeg](/img/installation/multisite-wizard/wizard-welcome.png)

Klikk **Fortsett** for å gå videre.

## Steg 2: Nettverkskonfigurasjon

I dette steget konfigurerer du nettverksinnstillingene dine.

### Nettstedsstruktur

Velg hvordan nettstedene i nettverket ditt skal organiseres:

- **Underdomener** (Anbefalt) — Nettsteder får sitt eget underdomene, f.eks. `site1.dittdomene.no`
- **Undermapper** — Nettsteder opprettes som stier, f.eks. `dittdomene.no/site1`

:::note
Hvis du velger underdomener, må du konfigurere **wildcard DNS** og et **wildcard SSL-sertifikat** for domenet ditt. De fleste administrerte WordPress-verter håndterer dette automatisk. Se [Ultimate Multisite 101](./ultimate-multisite-101) for en detaljert sammenligning.
:::

### Nettverkstittel

Skriv inn et navn for nettverket ditt. Dette settes som standard til gjeldende nettstedstittel med «Network» lagt til. Du kan endre dette senere i nettverksinnstillingene.

### E-post for nettverksadministrator

E-postadressen som brukes for nettverksadministrasjonsvarsler. Denne settes som standard til e-postadressen til den nåværende brukeren.

![Veiviser for Multisite-oppsett – Nettverkskonfigurasjon](/img/installation/multisite-wizard/wizard-network-configuration.png)

Når du har fylt inn feltene, klikker du **Fortsett** for å gå videre.

## Steg 3: Installasjon

Klikk på **Installer**-knappen for å starte. Veiviseren utfører fem automatiserte steg i rekkefølge, og hvert steg viser fremdriften i sanntid:

![Veiviser for Multisite-oppsett – Installasjon venter](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Steg | Beskrivelse |
|------|-------------|
| **Aktiver Multisite** | Legger til `WP_ALLOW_MULTISITE`-konstanten i `wp-config.php` |
| **Opprett nettverk** | Oppretter multisite-databasetabellene (`wp_site`, `wp_sitemeta`, `wp_blogs`, osv.) og fyller dem med nettverkskonfigurasjonen din |
| **Oppdater konfigurasjon** | Legger til de endelige multisite-konstantene i `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, osv.) |
| **Fiks informasjonskapsler** | Sikrer at nettadressen er korrekt i nettverksmetadataene for å forhindre autentiseringsproblemer etter aktivering |
| **Nettverksaktiver utvidelse** | Nettverksaktiverer Ultimate Multisite slik at den kjører på tvers av hele nettverket |

Hvert steg viser én av disse statusene:

- **Venter** — Venter på å bli behandlet
- **Installerer...** — Kjører for øyeblikket
- **Fullført!** — Fullført uten problemer
- **Feilmelding** — Det oppsto en feil (meldingen vil beskrive problemet)

Når alle steg er fullført, vil du se en grønn «Fullført!»-status for hvert punkt:

![Veiviser for Multisite-oppsett – Installasjon fullført](/img/installation/multisite-wizard/wizard-installation-complete.png)

Veiviseren vil deretter automatisk gå videre til fullføringsskjermen.

## Steg 4: Fullført

Når installasjonen er fullført, vil du se en suksessmelding som bekrefter at WordPress Multisite er aktivert.

![Veiviser for Multisite-oppsett – Oppsett fullført](/img/installation/multisite-wizard/wizard-complete.png)

Du kan nå fortsette med Ultimate Multisite-oppsettsveiviseren for å konfigurere WaaS-plattformen din (firmadetaljer, standardinnhold, betalingsløsninger osv.).

:::note
Etter at multisite-installasjonen er fullført, vil nettleseren din omdirigere gjennom den nylig aktiverte nettverksadministrasjonen. Du må kanskje logge inn på nytt siden autentiseringsinformasjonskapslene oppdateres for multisite-miljøet.
:::

## Manuelt oppsett som alternativ

Hvis veiviseren ikke kan skrive til `wp-config.php`-filen din (på grunn av filtillatelser eller serverbegrensninger), vil den vise den nøyaktige koden du må legge til manuelt:

1. **wp-config.php-konstantene** som må legges til over linjen `/* That's all, stop editing! */`
2. **Rewrite-reglene for .htaccess** som passer for din valgte nettstedsstruktur (underdomene eller undermappe)

Etter at du har gjort de manuelle endringene, oppdaterer du siden, og veiviseren vil oppdage at multisite nå er aktivt.

## Feilsøking

### Veiviseren sier at wp-config.php ikke er skrivbar

Webserverprosessen trenger skrivetilgang til `wp-config.php`-filen. Du kan enten:

- Midlertidig endre filtillatelsene til `644` eller `666`
- Bruke instruksjonene for manuelt oppsett som veiviseren viser
- Be hostingleverandøren din om hjelp

### Nettsteder er ikke tilgjengelige etter oppsett (underdomener)

Hvis du valgte underdomenestruktur, må du konfigurere **wildcard DNS** for domenet ditt. Legg til en DNS-post:

```
Type: A (eller CNAME)
Host: *
Verdi: [din server-IP]
```

Sjekk med hostingleverandøren din hvis du er usikker på hvordan du konfigurerer dette.

### Autentiseringsproblemer etter oppsett

Hvis du blir logget ut eller opplever feil med informasjonskapsler etter multisite-oppsettet:

1. Tøm nettleserens informasjonskapsler for nettstedet
2. Logg inn igjen på `dittdomene.no/wp-login.php`
3. Hvis problemet vedvarer, sjekk at `wp-config.php` ikke har `COOKIE_DOMAIN` satt til `false` — dette er et kjent problem på underdomene-multisite-installasjoner

### Et steg feilet under installasjonen

Hvis ett av installasjonstegene viser en feil:

1. Noter deg feilmeldingen som vises
2. Gå tilbake til konfigurasjonssteget og prøv igjen
3. Hvis feilen vedvarer, sjekk serverens PHP-feillogg for mer informasjon
4. Steg som allerede er fullført, vil bli hoppet over ved senere kjøringer (installasjonsprogrammet er idempotent)
