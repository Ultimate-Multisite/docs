---
title: Hestia kontrollpanel-integrasjon
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel-integrasjon

Denne guiden forklarer hvordan du konfigurerer Hestia-integrasjonen i Ultimate Multisite, slik at tilordnede domener i nettverket ditt automatisk legges til (og fjernes) som Web Domain Aliases i Hestia.

- Hestia CLI-referanse: v-add-web-domain-alias / v-delete-web-domain-alias
- Offisiell REST API-dokumentasjon: https://hestiacp.com/docs/server-administration/rest-api.html

## Hva den gjør
- Når et domene tilordnes i Ultimate Multisite, kaller integrasjonen Hestia-APIet for å kjøre:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Når en domenetilordning fjernes, kjører den:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Legger eventuelt til/fjerner `www.`-aliaset avhengig av innstillingen «Auto-create www subdomain» i Domain Mapping-innstillingene.

## Forutsetninger
- Et eksisterende Hestia Web Domain som allerede peker til WordPress-installasjonen din. Integrasjonen vil knytte aliaser til dette basedomenet.
- Hestia API-tilgang aktivert. Du kan autentisere med enten passord eller en API-hash/token.

Se Hestias REST API-dokumentasjon for aktivering av API-tilgang og autentiseringsdetaljer:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigurasjon (Wizard → Integrations → Hestia)
Oppgi følgende verdier:

- `WU_HESTIA_API_URL` (obligatorisk)
  - Basis-API-endepunktet, vanligvis `https://din-hestia-vert:8083/api/`.
- `WU_HESTIA_API_USER` (obligatorisk)
  - Hestia-brukeren som brukes for API-kommandoer (ofte `admin`).
- `WU_HESTIA_API_PASSWORD` eller `WU_HESTIA_API_HASH` (minst én)
  - Velg én autentiseringsmetode: passord eller API-hash/token.
- `WU_HESTIA_ACCOUNT` (obligatorisk)
  - Kontoen (eieren) av Web Domain i Hestia; dette er det første argumentet til CLI-kommandoen.
- `WU_HESTIA_WEB_DOMAIN` (obligatorisk)
  - Det eksisterende Hestia Web Domain som betjener WordPress-installasjonen din (aliaser knyttes til dette).
- `WU_HESTIA_RESTART` (valgfri; standard `yes`)
  - Om tjenester skal restartes/lastes inn på nytt etter aliasendringer.

Du kan la veiviseren sette inn disse konstantene i `wp-config.php`, eller definere dem manuelt.

## Verifisere oppsettet
- I veiviserens «Testing»-trinn kaller utvidelsen `v-list-web-domains <WU_HESTIA_ACCOUNT> json` via APIet. Et vellykket svar bekrefter tilkobling og autentisering.
- Etter at du har tilordnet et domene, sjekk i Hestia: Web > basedomenet > Aliases. Du bør se det nye aliaset lagt til.

## Merknader og tips
- Sørg for at `WU_HESTIA_WEB_DOMAIN` allerede eksisterer og eies av `WU_HESTIA_ACCOUNT`.
- Hvis SSL er påkrevd, administrer sertifikater i Hestia. Denne integrasjonen håndterer for øyeblikket kun aliaser.
- Utvidelsen kan også legge til/fjerne `www.<domene>` avhengig av innstillingen for «www subdomain» i Domain Mapping.

## Eksempel på API-kall (cURL)
Nedenfor er et konseptuelt eksempel (tilpass til ditt miljø). Se den offisielle dokumentasjonen for nøyaktige parametere.

```
POST https://din-hestia-vert:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=DITT_API_PASSORD  (eller &hash=DIN_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=nettverk.eksempel.no   (WU_HESTIA_WEB_DOMAIN)
&arg3=kundedomene.no         (alias som legges til)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

For sletting, bruk `cmd=v-delete-web-domain-alias` med de samme argumentene.

## Feilsøking
- HTTP-feil fra API: verifiser at `WU_HESTIA_API_URL` er tilgjengelig og inkluderer `/api`.
- Autentiseringsfeil: bekreft `WU_HESTIA_API_USER` og enten `WU_HESTIA_API_PASSWORD` eller `WU_HESTIA_API_HASH`.
- «Missing account/base domain» i loggene: sørg for at `WU_HESTIA_ACCOUNT` og `WU_HESTIA_WEB_DOMAIN` er satt og gyldige i Hestia.

## Referanser
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI-referanse (Aliaser): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
