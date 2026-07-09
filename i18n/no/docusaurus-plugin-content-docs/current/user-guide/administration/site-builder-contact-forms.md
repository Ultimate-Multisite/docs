---
title: Kontakt skjemaer for nettstedbygger
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontakt skjemaer med Site Builder {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 legger til muligheten til å opprette kontakt skjemaer direkte fra chat-grensesnittet ved hjelp av Site Builder-agenten. Dette lar deg legge til fullt funksjonelle kontakt skjemaer på hvilken som helst side uten å forlate chatten.

## Oversikt {#overview}

Site Builder-funksjonaliteten for kontakt skjemaer (`create_contact_form`) oppdager automatisk hvilket skjema-plugin du har installert, og oppretter et kontakt skjema ved hjelp av pluginens innebygde funksjonalitet. Støttede skjema-plugins inkluderer:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Assistenten velger automatisk det beste tilgjengelige skjema-pluginet på nettstedet ditt og genererer et kontakt skjema som er skreddersydd for akkurat det pluginet.

## Oppretting av et kontakt skjema {#creating-a-contact-form}

For å opprette et kontakt skjema ved hjelp av Site Builder:

1. Åpne chat-panelet for **Gratis AI Agent** i WordPress-administrasjonen.
2. Bytt til **Site Builder**-agenten ved å klikke på agent-ikonet i chat-overskriften.
3. Beskriv det kontakt skjemaet du ønsker å opprette. For eksempel:

   > "Legg til et kontakt skjema på Kontaktsiden med felt for navn, e-post, melding og telefonnummer."

   Eller enkelt:

   > "Opprett et kontakt skjema for Kontaktsiden."

4. Site Builder vil generere kontakt skjemaet og returnere en shortcode som er klar til å settes inn.

## Bruk av den genererte shortcoden {#using-the-generated-shortcode}

Etter at Site Builder har opprettet kontakt skjemaet, returnerer den en shortcode (for eksempel, `[contact-form-7 id="123"]`). Du kan:

1. **Sete det inn i en side eller et innlegg** — Kopier shortcoden og lim den inn i hvilken som helst side eller innlegg ved hjelp av blokkredigereren eller klassisk redigerer.
2. **Legge det til via Site Builder** — Be Site Builder om å legge til skjemaet på en spesifikk side automatisk:

   > "Legg til kontakt skjemaet på Kontaktsiden."

3. **Bruke det i en mal** — Hvis du er komfortabel med PHP, kan du legge til shortcoden i en tema-malfil.

## Tilpasning av kontakt skjemaet {#customizing-the-contact-form}

Etter at Site Builder har opprettet kontakt skjemaet, kan du tilpasse det videre:

### Via chat-grensesnittet {#via-the-chat-interface}

Be Site Builder om å endre skjemaet:

> "Oppdater kontakt skjemaet for å legge til et emnefelt og gjøre meldingsfeltet obligatorisk."

Site Builder vil oppdatere skjemaet og returnere den oppdaterte shortcoden.

### Via skjema-pluginens administrasjonsgrensesnitt {#via-the-form-plugins-admin-interface}

Du kan også tilpasse skjemaet direkte i innstillingene til skjema-pluginet ditt:

1. Gå til **Contact Form 7** (eller ditt installerte skjema-plugin) i WordPress-administrasjonen.
2. Finn skjemaet som ble opprettet av Site Builder.
3. Rediger skjema-feltene, valideringsreglene og e-postvarslene etter behov.

## Skjema-plugins og kompatibilitet {#form-plugins-and-compatibility}

Site Builder oppdager automatisk hvilket skjema-plugin som er installert på nettstedet ditt og bruker det til å opprette kontakt skjemaet. Hvis flere skjema-plugins er installert, prioriterer Site Builder dem i følgende rekkefølge:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Hvis ingen av disse pluginene er installert, vil Site Builder anbefale å installere et før det oppretter kontakt skjemaet.

## E-postvarsler {#email-notifications}

Kontakt skjemaer opprettet av Site Builder er satt opp til å sende e-postvarsler til nettstedadministratoren som standard. Du kan tilpasse mottakerens e-postadresse og varslingsmelding:

1. Gå til administrasjonsgrensesnittet til skjema-pluginet ditt.
2. Finn skjemaet som ble opprettet av Site Builder.
3. Rediger innstillingene for e-postvarsler.

For detaljerte instruksjoner, se i dokumentasjonen til skjema-pluginet ditt:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Eksempler på bruksscenarioer {#example-use-cases}

### Enkelt kontakt skjema {#simple-contact-form}

> "Opprett et enkelt kontakt skjema med felt for navn, e-post og melding."

### Flertrinns skjema {#multi-step-form}

> "Opprett et kontakt skjema med et første trinn for kontaktinformasjon og et andre trinn for melding og foretrukket kontaktmåte."

### Skjema med betinget logikk {#form-with-conditional-logic}

> "Opprett et kontakt skjema som viser forskjellige felt basert på brukerens valg i en nedtrekksmeny."

### Skjema med filopplasting {#form-with-file-upload}

> "Opprett et kontakt skjema som lar brukere laste opp en fil eller vedlegg."

:::note
Oppretting av kontakt skjemaer er tilgjengelig i Superdav AI Agent v1.10.0 og nyere. Site Builder-agenten må være aktiv for å bruke denne funksjonaliteten.
:::
