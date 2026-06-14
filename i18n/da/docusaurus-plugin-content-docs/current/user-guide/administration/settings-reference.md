---
title: Indstillingsreference
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Indstillinger reference

Denne side sporer indstillinger, der påvirker den daglige administration og nylige adfærdsændringer i Ultimate Multisite.

## Andre muligheder

Området **Andre muligheder** findes under **Ultimate Multisite > Indstillinger > Login & Registrering**.

| Indstilling | Beskrivelse |
|---|---|
| **Aktiver Jumper** | Viser Jumper hurtig navigationsværktøj i adminområdet. Brug det til direkte at springe til Ultimate Multisite-skærme, netværksobjekter og understøttede admin-destinationer. Deaktiver den, hvis du ikke ønsker denne genvej synlig. |

## Fejlrapportering og telemetri

Den tidligere indstilling til opt-in for fejlrapportering er fjernet fra indstillingssiden. Anonym telemetri er deaktiveret, og der er ingen brugergrænsefladeknap til at aktivere den.

Hvis du vedligeholder interne runbooks eller skærmbilleder af indstillingssiden, skal du fjerne henvisninger til det gamle felt for opt-in for fejlrapportering, så administratorer ikke leder efter en indstilling, der ikke længere findes.

## Import/Eksportindstillinger

Fanen **Import/Eksport** beskriver, hvilke indstillinger den styrer, og linker direkte til **Ultimate Multisite > Site Export** for site- og netværksarkiver. Brug indstillingsfanen til import-/eksportkonfiguration, brug **Tools > Export & Import** til workflowet for enkelt-site eksport/import, og brug værktøjet Site Export, når du har brug for et komplet Netværks Eksport arkiv.

## Indstillinger for AI-udbyder-forbindelse

Indstillingerne for AI-udbyder-forbindelsen viser nu kun de understøttede OAuth konto-pools:

| Leverandør | Opsætning |
|---|---|
| **Anthropic Max** | Tilslut én eller flere Anthropic Max-konti med OAuth-knappen. Brug den manuelle OAuth fallback, hvis en sandboxed browser ikke kan fuldføre omdirigeringen automatisk. |
| **OpenAI ChatGPT/Codex** | Tilslut ChatGPT-konti via samme OAuth pool workflow. Connector-understøttede operationer kan bruge ChatGPT Codex tool calls efter konto er tilsluttet. |
| **Google AI Pro** | Tilslut Google AI Pro-konti via OAuth, og opdater derefter connector'en, hvis kontolisten ikke opdateres med det samme. |

Cursor Pro understøttes ikke længere som leverandør. Fjern gamle interne skærmbilleder, runbooks eller onboarding-trin, der nævner opsætningselementer eller connector-stier for Cursor Pro.

Når du tilføjer eller fjerner leverandørkonti, skal du indtaste en gyldig e-mailadresse for den konto, der opdateres eller slettes, og gemme leverandørindstillingerne, før du tester operationer, der er baseret på connector'en.
