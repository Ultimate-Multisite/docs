---
title: Integratie van het Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Integratie

Deze gids legt uit hoe je de Ultimate Multisite Hestia-integratie configureert zodat toegewezen domeinen in je netwerk automatisch worden toegevoegd (en verwijderd) als Web Domain Aliases in Hestia.

- Hestia CLI reference: v-add-web-domain-alias / v-delete-web-domain-alias
- Official REST API doc: https://hestiacp.com/docs/server-administration/rest-api.html

## Wat het doet
- Wanneer een domein wordt toegewezen in Ultimate Multisite, roept de integratie de Hestia API aan om uit te voeren:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Wanneer een domeinvermelding wordt verwijderd, voert het uit:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Optioneel voegt/verwijdert het `www.` alias afhankelijk van je instelling “Auto-create www subdomain” in de Domain Mapping-instellingen.

## Voorwaarden
- Een bestaand Hestia Web Domain dat al naar je WordPress-installatie wijst. De integratie zal aliassen koppelen aan dit basisdomein.
- Hestia API-toegang ingeschakeld. Je kunt authenticeren met een wachtwoord of een API-hash/token.

Zie de REST API-documentatie van Hestia voor het inschakelen van API-toegang en authenticatiegegevens:
https://hestiacp.com/docs/server-administration/rest-api.html

## Configuratie (Wizard → Integrations → Hestia)
Geef de volgende waarden op:

- `WU_HESTIA_API_URL` (required)
  - Het basis-API-eindpunt, meestal `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (required)
  - Hestia-gebruiker gebruikt voor API-commando's (meestal `admin`).
- `WU_HESTIA_API_PASSWORD` or `WU_HESTIA_API_HASH` (at least one)
  - Kies één authenticatiemethode: wachtwoord of API-hash/token.
- `WU_HESTIA_ACCOUNT` (required)
  - Het account (eigenaar) van het Web Domain in Hestia; dit is het eerste argument voor de CLI.
- `WU_HESTIA_WEB_DOMAIN` (required)
  - Het bestaande Hestia Web Domain dat je WordPress bedient (aliassen worden hier aan gekoppeld).
- `WU_HESTIA_RESTART` (optional; default `yes`)
  - Of services opnieuw moeten worden gestart/gereload na aliaswijzigingen.

Je kunt de wizard laten injecteren in `wp-config.php`, of ze handmatig definiëren.

## Controle van de installatie
- In de wizard “Testing” stap roept de plugin `v-list-web-domains <WU_HESTIA_ACCOUNT> json` via de API aan. Een succesvolle reactie bevestigt de connectiviteit en authenticatie.
- Na het toewijzen van een domein, controleer in Hestia: Web > het basisdomein > Aliases. Je zou het nieuwe alias moeten zien toegevoegd.

## Opmerkingen & Tips
- Zorg ervoor dat `WU_HESTIA_WEB_DOMAIN` al bestaat en eigendom is van `WU_HESTIA_ACCOUNT`.
- Als SSL vereist is, beheer certificaten in Hestia. Deze integratie behandelt momenteel alleen aliassen.
- De plugin kan ook `www.<domain>` toevoegen/verwijderen afhankelijk van je Domain Mapping “www subdomain” instelling.

## Voorbeeld API-aanroep (cURL)
Hieronder een conceptueel voorbeeld (pas aan je omgeving). Raadpleeg de officiële documentatie voor exacte parameters.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Voor verwijderen, gebruik `cmd=v-delete-web-domain-alias` en dezelfde argumenten.

## Probleemoplossing
- HTTP-fout van API: controleer of `WU_HESTIA_API_URL` bereikbaar is en `/api` bevat.
- Authenticatiefouten: bevestig `WU_HESTIA_API_USER` en ofwel `WU_HESTIA_API_PASSWORD` of `WU_HESTIA_API_HASH`.
- “Missing account/base domain” in logs: zorg ervoor dat `WU_HESTIA_ACCOUNT` en `WU_HESTIA_WEB_DOMAIN` zijn ingesteld en geldig zijn in Hestia.

## Referenties
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
