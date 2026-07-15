---
title: Innstillingsreferanse
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Innstillingsreferanse

Denne siden sporer innstillinger som påvirker daglig administrasjon og nylige atferdsendringer i Ultimate Multisite.

## Andre alternativer {#other-options}

Området **Andre alternativer** vises under **Ultimate Multisite > Settings > Login & Registration**.

| Innstilling | Beskrivelse |
|---|---|
| **Aktiver Jumper** | Viser Jumper-hurtignavigasjonsverktøyet i adminområdet. Bruk det til å hoppe direkte til Ultimate Multisite-skjermer, nettverksobjekter og støttede admindestinasjoner. Deaktiver det hvis du ikke vil at denne snarveien skal være synlig. |

## Feilrapportering og telemetri {#error-reporting-and-telemetry}

Den tidligere opt-in-innstillingen for feilrapportering er fjernet fra innstillingssiden. Anonym telemetri er deaktivert, og det finnes ingen UI-bryter for å aktivere det.

Hvis du vedlikeholder interne runbooks eller skjermbilder for innstillingssiden, fjern referanser til det gamle opt-in-feltet for feilrapportering slik at administratorer ikke leter etter en innstilling som ikke lenger finnes.

## Import-/eksportinnstillinger {#importexport-settings}

Fanen for **Import/Export**-innstillinger beskriver hvilke innstillinger den kontrollerer og lenker direkte til **Ultimate Multisite > Site Export** for nettsted- og nettverksarkiver. Bruk innstillingsfanen for import-/eksportkonfigurasjon, bruk **Tools > Export & Import** for arbeidsflyten for eksport/import av enkeltnettsted, og bruk Site Export-verktøyet når du trenger et fullstendig Network Export-arkiv.

## Domain Seller HostAfrica-saldovarsel {#domain-seller-hostafrica-balance-warning}

Når Domain Seller-tillegget er koblet til HostAfrica, ser nettverksadministratorer nå et avvisbart varsel om lav saldo når saldoen på forhandlerkontoen er for lav for pålitelig behandling av domeneregistrering eller fornyelse.

Behandle dette varselet som en driftsadvarsel: fyll på HostAfrica-forhandlersaldoen før du godtar flere betalte domeneregistreringer, og gå deretter tilbake til Domain Seller-innstillingene eller domeneovervåkingsskjermen for å bekrefte at registreringer og fornyelser kan fortsette som normalt.

## Innstillinger for AI provider connector {#ai-provider-connector-settings}

Innstillinger for AI provider connector viser nå bare de støttede OAuth-kontopuljene:

| Leverandør | Oppsettflyt |
|---|---|
| **Anthropic Max** | Koble til én eller flere Anthropic Max-kontoer med OAuth-knappen. Bruk den manuelle OAuth-reserveløsningen når en sandboxed nettleser ikke kan fullføre omdirigeringen automatisk. |
| **OpenAI ChatGPT/Codex** | Koble til ChatGPT-kontoer gjennom den samme OAuth-puljearbeidsflyten. Connector-støttede operasjoner kan bruke ChatGPT Codex-verktøykall etter at kontoen er koblet til. |
| **Google AI Pro** | Koble til Google AI Pro-kontoer gjennom OAuth, og oppdater deretter connector hvis kontolisten ikke oppdateres umiddelbart. |

Cursor Pro er ikke lenger en støttet leverandør. Fjern gamle interne skjermbilder, runbooks eller onboarding-trinn som nevner Cursor Pro-oppsettsfelt eller connector-stier.

Når du legger til eller fjerner leverandørkontoer, skriv inn en gyldig e-postadresse for kontoen som oppdateres eller slettes, og lagre leverandørinnstillingene før du tester connector-støttede operasjoner.
