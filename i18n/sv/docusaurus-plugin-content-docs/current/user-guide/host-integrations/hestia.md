---
title: Hestia Control Panel-integration
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia-kontrollpanelintegration

Den här guiden förklarar hur du konfigurerar Ultimate Multisites Hestia-integration så att mappade domäner i ditt nätverk automatiskt läggs till (och tas bort) som webbdomänalias i Hestia.

- Hestia CLI-referens: v-add-web-domain-alias / v-delete-web-domain-alias
- Officiell REST API-dokumentation: https://hestiacp.com/docs/server-administration/rest-api.html

## Vad den gör
- När en domän mappas i Ultimate Multisite anropar integrationen Hestias API för att köra:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- När en domänmappning tas bort körs:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Lägger valfritt till/tar bort `www.`-aliaset beroende på din inställning "Skapa www-subdomän automatiskt" i inställningarna för domänmappning.

## Förutsättningar
- En befintlig Hestia-webbdomän som redan pekar mot din WordPress-installation. Integrationen kopplar alias till denna basdomän.
- Hestia API-åtkomst aktiverad. Du kan autentisera med antingen lösenord eller en API-hash/token.

Se Hestias REST API-dokumentation för att aktivera API-åtkomst och autentiseringsdetaljer:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfiguration (Wizard → Integrations → Hestia)
Ange följande värden:

- `WU_HESTIA_API_URL` (obligatorisk)
  - Bas-URL för API:et, vanligtvis `https://din-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (obligatorisk)
  - Hestia-användare som används för API-kommandon (ofta `admin`).
- `WU_HESTIA_API_PASSWORD` eller `WU_HESTIA_API_HASH` (minst en)
  - Välj en autentiseringsmetod: lösenord eller API-hash/token.
- `WU_HESTIA_ACCOUNT` (obligatorisk)
  - Kontot (ägaren) av webbdomänen i Hestia; detta är det första argumentet till CLI:n.
- `WU_HESTIA_WEB_DOMAIN` (obligatorisk)
  - Den befintliga Hestia-webbdomänen som serverar din WordPress (alias kopplas till denna).
- `WU_HESTIA_RESTART` (valfri; standard `yes`)
  - Om tjänster ska startas om/laddas om efter aliasändringar.

Du kan låta wizarden lägga in dessa konstanter i `wp-config.php`, eller definiera dem manuellt.

## Verifiera installationen
- I wizardens "Testing"-steg anropar pluginet `v-list-web-domains <WU_HESTIA_ACCOUNT> json` via API:et. Ett lyckat svar bekräftar anslutning och autentisering.
- Efter att du mappat en domän, kontrollera i Hestia: Web > basdomänen > Aliases. Du bör se det nya aliaset tillagt.

## Anteckningar och tips
- Se till att `WU_HESTIA_WEB_DOMAIN` redan finns och ägs av `WU_HESTIA_ACCOUNT`.
- Om SSL krävs, hantera certifikat i Hestia. Denna integration hanterar för närvarande endast alias.
- Pluginet kan också lägga till/ta bort `www.<domän>` beroende på din inställning för "www-subdomän" i domänmappningen.

## Exempel på API-anrop (cURL)
Nedan är ett konceptuellt exempel (anpassa till din miljö). Se den officiella dokumentationen för exakta parametrar.

```
POST https://din-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=DITT_API_LÖSENORD  (eller &hash=DIN_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=kund-domän.se          (alias att lägga till)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

För borttagning, använd `cmd=v-delete-web-domain-alias` och samma argument.

## Felsökning
- HTTP-fel från API:et: verifiera att `WU_HESTIA_API_URL` är nåbar och innehåller `/api`.
- Autentiseringsfel: bekräfta `WU_HESTIA_API_USER` och antingen `WU_HESTIA_API_PASSWORD` eller `WU_HESTIA_API_HASH`.
- "Missing account/base domain" i loggarna: se till att `WU_HESTIA_ACCOUNT` och `WU_HESTIA_WEB_DOMAIN` är satta och giltiga i Hestia.

## Referenser
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI-referens (Alias): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
