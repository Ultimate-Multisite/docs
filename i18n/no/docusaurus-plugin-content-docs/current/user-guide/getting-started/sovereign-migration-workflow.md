---
title: Sovereign Migrasjonsflyt
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Sovereign Migrasjonsflyt

Ultimate Multisite: Multi-Tenancy 1.2.0 legger til migrasjonsverifikasjonsportaler for å flytte en standard underside over til suveren leietilbyderinfrastruktur.

## Før du starter {#before-you-start}

Bekreft at du har:

- En gjeldende sikkerhetskopi av kildesiden.
- Multi-Tenancy-tilleggene aktive.
- Destinasjonsleietilbyderdatabasen, filsystemets rot og domenet klare.
- En databasevertbinding som samsvarer med destinasjonsmiljøet.
- Tilgang til å kjøre WP-CLI-kommandoer for nettverket.

## Anbefalt flyt {#recommended-workflow}

1. Forbered destinasjonsleietilbyderdatabasen og filsystemet.
2. Registrer eller oppdater leietilbyderisolasjoninnstillingene.
3. Kjør migrasjonen av leietilbyderen.
4. Sett opp eller verifiser leietilbyderbrukere.
5. Tøm asynkrone migrasjonsjobber.
6. Kjør suveren migrasjonsverifikasjon.
7. Besøk leietilbyderen med SSO.
8. Bytt DNS eller ruting først etter at verifikasjonen er bestått.

## Verifikasjonsportaler {#verification-gates}

Verifikasjonsflyten sjekker migrasjonen fra flere vinkler:

- Leietilbyderens skjema eksisterer og kan skrives av leietilbyderdatabasen.
- Den konfigurerte databaseverten har gyldige tildelinger (grants).
- Leietilbyderbrukere er til stede og samsvarer med forventet antall suveren installerte brukere.
- Asynkron kø kan tømmes vellykket.
- Eldre nettverksbaserte datastier er ikke lenger nødvendige for den suverene leietilbyderen.

Behandle verifikasjonsfeil som hindringer før lansering. Fiks det rapporterte database-, bruker-, kø- eller rutingproblemet, og kjør deretter verifikasjonen på nytt før du eksponerer leietilbyderen for kunder.

## Første produksjonsbesøk {#first-production-visit}

Etter at verifikasjonen er bestått, bruk **Besøk (SSO)** fra administrasjonsskjermen for det første administrative besøket. Dette bekrefter leietilbyderens ruting, håndtering av SSO-tokens, opprinnelsesfeste (origin pinning) og brukerprovisjon på leietilbyder-siden i ett kontrollert steg.
