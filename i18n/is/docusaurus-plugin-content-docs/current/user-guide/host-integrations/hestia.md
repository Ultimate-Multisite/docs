---
title: Integuation í Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Samning við Hestia Control Panel

Þessi leiðferð útskýrir hvernig þú getur sett upp samning með Ultimate Multisite og Hestia svo að dómagnir sem eru mappa í nýtingu þín séu sjálfvirkt sagt í (og fjarlægð) sem Web Domain Aliases í Hestia.

- Samning við Hestia CLI: v-add-web-domain-alias / v-delete-web-domain-alias
- Officiell REST API skjalði: https://hestiacp.com/docs/server-administration/rest-api.html

## Hvað þetta gerir
- Þegar dómagnir eru mappa í Ultimate Multisite, kallar samningur á Hestia API til að framkvæma eftirfarandi:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Þegar mappa dómagnarsamningur er fjarlægð, framkvæmdast þetta:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Valfræðarlega sagt í/fjarlægja `www.` alias eftir settum „Auto-create www subdomain“ (Sjá uppsetningu fyrir dómagnarsamningar).

## Skilyrði fyrir framkvæmd
- Eitt núverandi Hestia Web Domain sem þegar er mappa á WordPress innreiðingu þinni. Samningurinn mun setja aliases á þennan grunn-dómagn.
- Hestia API aðgangur er sett upp. Þú getur staðfest þig með styrknum eða tokeni API-sins.

Sjá Hestias REST API skjalði fyrir að opna API aðgang og staðfestingstauða:
https://hestiacp.com/docs/server-administration/rest-api.html

## Uppsetning (Wizard → Integrations → Hestia)
Gjöf eftirfarandi gildi:

- `WU_HESTIA_API_URL` (nødvendig)
  - Grunnleggjande API-endepunkt, vanlegvis `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (nødvendig)
  - Hestia-brukarinnenn sem blir brukt til API-kommandoar (ofte `admin`).
- `WU_HESTIA_API_PASSWORD` eller `WU_HESTIA_API_HASH` (minst éin)
  - Vel ein autentiseringsmetode: passord eller API-hash/token.
- `WU_HESTIA_ACCOUNT` (nødvendig)
  - Kontoen (eigaren) til Web Domainet i Hestia; dette er det første argumentet til CLI-programmet.
- `WU_HESTIA_WEB_DOMAIN` (nødvendig)
  - Det eksisterande Hestia Web Domainet som tener WordPress ditt (alias vil bli knytt her).
- `WU_HESTIA_RESTART` (valfritt; standardverdi `yes`)
  - Om du skal starte på nytt/laste inn tenester etter endringar i alias.

Du kan la magiske verktøyet injisere desse konstanteverdiane i `wp-config.php`, eller definere dei manuelt.

## Verifisering av oppsettet
- I magiske verktøyets «Testing»-steg kallar pluginet `v-list-web-domains <WU_HESTIA_ACCOUNT> json` via API-en. Eit suksessrespons stadfestar tilkopling og autentisering.
- Etter at du har mappa eit domene, sjekk i Hestia: Web > grunnleggjande domene > Alias. Du skal sjå den nye aliasen lagt til.

## Merknader & tips
- Sør for at `WU_HESTIA_WEB_DOMAIN` allereie eksisterer og er eigd av `WU_HESTIA_ACCOUNT`.
- Om SSL er nødvendig, administrer sertifikat i Hestia. Denne integrasjonen handterer berre alias no.
- Pluginet kan òg legge til/fjerne `www.<domain>` avhengig av innstillinga di for domenenavmapping «www subdomain».

## Eksempel på API-kall (cURL)
Her er eit konseptuelt eksempel (juster etter miljøet ditt). Sjå den offisielle dokumentasjonen for nøyaktige parameterar.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (eða &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias að við bætir í)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Til fjarlægja nota `cmd=v-delete-web-domain-alias` og sama argument.

## Feilanfjölgun
- HTTP villur frá API: skoða, hvort er `WU_HESTIA_API_URL` aðgengileg og innihalda `/api`.
- Inndýpisvillur (Auth errors): staðfesta `WU_HESTIA_API_USER` og eða `WU_HESTIA_API_PASSWORD` eða `WU_HESTIA_API_HASH`.
- „Missing account/base domain” í loggum: saksafni, hvort er `WU_HESTIA_ACCOUNT` og `WU_HESTIA_WEB_DOMAIN` sett og viðeigandi í Hestia.

## Viðmiðlar
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Viðmið (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
