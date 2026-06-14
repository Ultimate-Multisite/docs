---
title: Integration med Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integration med Hestia Control Panel

Denne guide forklarer, hvordan du opsætter integrationen mellem Ultimate Multisite og Hestia, så de domæner, der er kortlagt i dit netværk, automatisk tilføjes (og fjernes) som Web Domain Aliases i Hestia.

- Hestia CLI reference: v-add-web-domain-alias / v-delete-web-domain-alias
- Officiel REST API dokumentation: https://hestiacp.com/docs/server-administration/rest-api.html

## Hvad det gør
- Når en domæne kortlægges i Ultimate Multisite, kalder integrationen Hestia API'et til at køre:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Når en domæne kortlægning fjernes, kører den:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Valgfrit tilføjer/fjerner man `www.` aliaset afhængigt af dine indstillinger for "Auto-create www subdomain" i Domain Mapping indstillingerne.

## Forudsætninger
- En eksisterende Hestia Web Domain, der allerede peger på din WordPress-installation. Integrationen vil tilføje aliases til denne basisdomæne.
- Hestia API adgang skal være aktiveret. Du kan autentificere dig ved hjælp af enten et adgangskode eller en API hash/token.

Se Hestias REST API dokumentation for at aktivere API-adgang og se detaljer om autentifikation:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfiguration (Wizard → Integrations → Hestia)
Angiv følgende værdier:

- `WU_HESTIA_API_URL` (krævet)
  - Basispunktet for API'en, typisk `https://din-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (krævet)
  - Hestia-brugeren brugt til API-kommandoer (ofte `admin`).
- `WU_HESTIA_API_PASSWORD` eller `WU_HESTIA_API_HASH` (mindst én)
  - Vælg en autentifikationsmetode: adgangskode eller API hash/token.
- `WU_HESTIA_ACCOUNT` (krævet)
  - Kontoen (ejeren) for Web Domænet i Hestia; dette er det første argument til CLI'en.
- `WU_HESTIA_WEB_DOMAIN` (krævet)
  - Det eksisterende Hestia Web Domain, der hoster dit WordPress (alias vil blive tilføjet her).
- `WU_HESTIA_RESTART` (valgfrit; standard er `yes`)
  - Om at genstarte/genindlæse services efter ændringer i alias.

Du kan lade wizardet indsætte disse konstanter i `wp-config.php`, eller definere dem manuelt.

## Verificering af opsætning
- I wizardets "Test" trin kalder plugin'et `v-list-web-domains <WU_HESTIA_ACCOUNT> json` via API'en. Et succesrespons bekræfter forbindelse og autentifikation.
- Efter at have kortlagt et domæne, tjek i Hestia: Web > det grundlæggende domæne > Alias. Du bør se den nye alias tilføjet.

## Noter & Tips
- Sørg for, at `WU_HESTIA_WEB_DOMAIN` allerede eksisterer og ejes af `WU_HESTIA_ACCOUNT`.
- Hvis SSL er nødvendigt, skal du administrere certifikaterne i Hestia. Denne integration håndterer i øjeblikket kun alias.
- Plugin'et kan også tilføje/fjerne `www.<domain>` afhængigt af dine indstillinger for Domænemapping "www subdomain".

## Eksempel på API-kald (cURL)
Her er et konceptuelt eksempel (juster efter din miljø). Se den officielle dokumentation for de præcise parametre.

For at sletning, skal du bruge `cmd=v-delete-web-domain-alias` og de samme argumenter.

## Fejlfinding
- HTTP-fejl fra API'en: Tjek, om `WU_HESTIA_API_URL` er tilgængelig og inkluderer `/api`.
- Autentificeringsfejl: Bekræft, at du har både `WU_HESTIA_API_USER` og enten `WU_HESTIA_API_PASSWORD` eller `WU_HESTIA_API_HASH`.
- "Manglende konto/grunddomæne" i logs: Sørg for, at `WU_HESTIA_ACCOUNT` og `WU_HESTIA_WEB_DOMAIN` er sat korrekt og gyldige i Hestia.

## Referencer
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
