---
title: Indstillingsreference
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Indstillingsreference {#settings-reference}

Denne side registrerer indstillinger, der påvirker den daglige administration og nylige ændringer i adfærd i Ultimate Multisite.

## Andre muligheder {#other-options}

Området **Andre muligheder** vises under **Ultimate Multisite > Settings > Login & Registration**.

| Indstilling | Beskrivelse |
|---|---|
| **Aktivér Jumper** | Viser Jumper-hurtignavigationsværktøjet i admin-området. Brug det til at hoppe direkte til Ultimate Multisite-skærme, netværksobjekter og understøttede admin-destinationer. Deaktivér det, hvis du ikke ønsker, at denne genvej skal være synlig. |

## Fejlrapportering og telemetri {#error-reporting-and-telemetry}

Den tidligere opt-in-indstilling for fejlrapportering er blevet fjernet fra indstillingssiden. Anonym telemetri er deaktiveret, og der er ingen UI-til/fra-knap til at aktivere det.

Hvis du vedligeholder interne runbooks eller skærmbilleder for indstillingssiden, skal du fjerne henvisninger til det gamle opt-in-felt for fejlrapportering, så administratorer ikke leder efter en indstilling, der ikke længere findes.

## Import-/eksportindstillinger {#importexport-settings}

Fanen **Import/Export**-indstillinger beskriver, hvilke indstillinger den styrer, og linker direkte til **Ultimate Multisite > Site Export** for site- og netværksarkiver. Brug indstillingsfanen til import-/eksportkonfiguration, brug **Tools > Export & Import** til arbejdsgangen for eksport/import af et enkelt site, og brug Site Export-værktøjet, når du har brug for et komplet Network Export-arkiv.

## Domain Seller HostAfrica-saldoadvarsel {#domain-seller-hostafrica-balance-warning}

Når Domain Seller-tilføjelsen er forbundet til HostAfrica, ser netværksadministratorer nu en advarsel om lav saldo, der kan afvises, når saldoen på reseller-kontoen er for lav til pålidelig behandling af domæneregistreringer eller fornyelser.

Behandl denne meddelelse som en driftsadvarsel: fyld HostAfrica reseller-saldoen op, før du accepterer flere betalte domæneregistreringer, og vend derefter tilbage til Domain Seller-indstillingerne eller skærmen til domæneovervågning for at bekræfte, at registreringer og fornyelser kan fortsætte normalt.

## Indstillinger for AI-providerconnector {#ai-provider-connector-settings}

Indstillingerne for AI-providerconnector viser nu kun de understøttede OAuth-kontopuljer:

| Provider | Opsætningsflow |
|---|---|
| **Anthropic Max** | Forbind én eller flere Anthropic Max-konti med OAuth-knappen. Brug den manuelle OAuth-reserveløsning, når en sandboxed browser ikke kan fuldføre omdirigeringen automatisk. |
| **OpenAI ChatGPT/Codex** | Forbind ChatGPT-konti gennem den samme OAuth-puljearbejdsgang. Connector-understøttede handlinger kan bruge ChatGPT Codex-værktøjskald, efter kontoen er forbundet. |
| **Google AI Pro** | Forbind Google AI Pro-konti gennem OAuth, og opdater derefter connectoren, hvis kontolisten ikke opdateres med det samme. |

Cursor Pro er ikke længere en understøttet provider. Fjern gamle interne skærmbilleder, runbooks eller onboarding-trin, der nævner Cursor Pro-opsætningsfelter eller connector-stier.

Når du tilføjer eller fjerner provider-konti, skal du indtaste en gyldig e-mailadresse for den konto, der opdateres eller slettes, og gemme provider-indstillingerne, før du tester connector-understøttede handlinger.
