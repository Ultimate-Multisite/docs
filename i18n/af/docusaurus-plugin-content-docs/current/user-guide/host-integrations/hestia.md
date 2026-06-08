---
title: Hestia Kontrolepaneel Integrasie
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Kontrolepaneel Integrasie

Hierdie gids verduidelik hoe om die Ultimate Multisite Hestia-integrasie te konfigureer sodat gemapte domeine in u netwerk outomaties bygevoeg (en verwyder) word as Web Domein Aliases in Hestia.

- Hestia CLI verwysing: v-add-web-domain-alias / v-delete-web-domain-alias
- Amptelike REST API dokumentasie: https://hestiacp.com/docs/server-administration/rest-api.html

## Wat Dit Doen
- Wanneer 'n domein in Ultimate Multisite gemap word, roep die integrasie die Hestia API aan om te hardloop:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Wanneer 'n domeinmapping verwyder word, hardloop dit:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Voeg opsioneel die `www.` alias by/verwyder dit, afhangende van u “Auto-create www subdomain” instelling in die Domeinmapping-instellings.

## Voorvereistes
- 'n Bestaande Hestia Web Domein wat reeds na u WordPress-installasie wys. Die integrasie sal aliases aan hierdie basisdomein heg.
- Hestia API-toegang is geaktiveer. U kan autentiseer met óf 'n wagwoord óf 'n API hash/token.

Verwys na Hestia se REST API dokumentasie vir die aktivering van API-toegang en autentiseringsbesonderhede:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigurasie (Wizard → Integrations → Hestia)
Verskaf die volgende waardes:

- `WU_HESTIA_API_URL` (verpligtend)
  - Die basis API-eindpunt, tipies `https://u-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (verpligtend)
  - Die Hestia-gebruiker wat vir API-beveiligings gebruik word (dikwels `admin`).
- `WU_HESTIA_API_PASSWORD` of `WU_HESTIA_API_HASH` (minstens een)
  - Kies een autentiseringsmetode: wagwoord of API hash/token.
- `WU_HESTIA_ACCOUNT` (verpligtend)
  - Die rekening (eienaar) van die Web Domein in Hestia; dit is die eerste argument vir die CLI.
- `WU_HESTIA_WEB_DOMAIN` (verpligtend)
  - Die bestaande Hestia Web Domein wat u WordPress bedien (aliases sal hier aangeheg word).
- `WU_HESTIA_RESTART` (opsioneel; standaard `yes`)
  - Of u dienste na aliasveranderinge moet herstart/herlaai.

U kan die wizard laat hierdie konstantes in `wp-config.php` insit, of u kan dit handmatig definieer.

## Opstel Verifieer
- In die wizard se “Testing”-stap, roep die plugin `v-list-web-domains <WU_HESTIA_ACCOUNT> json` via die API aan. 'n Suksesvolle antwoord bevestig die konektiwiteit en autentisering.
- Nadat u 'n domein gemap het, kyk in Hestia: Web > die basisdomein > Aliases. U behoort die nuwe alias bygevoeg te sien.

## Notas & Wenke
- Maak seker dat `WU_HESTIA_WEB_DOMAIN` reeds bestaan en deur `WU_HESTIA_ACCOUNT` geëdig word.
- Indien SSL nodig is, bestuur sertifikate by Hestia. Hierdie integrasie hanteer tans slegs aliases.
- Die plugin kan ook `www.<domein>` by/verwyder, afhangende van u Domeinmapping “www subdomain”-instelling.

## Voorbeeld API Oproep (cURL)
Hieronder is 'n konsepvoorbeeld (pas aan by u omgewing). Verwys na die amptelike dokumentasie vir presiese parameters.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (of &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias om by te voeg)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Vir verwydering, gebruik `cmd=v-delete-web-domain-alias` en dieselfde argumente.

## Foutopsporing
- HTTP fout van API: verifieer dat `WU_HESTIA_API_URL` bereikbaar is en `/api` insluit.
- Autentiseringsfoute: bevestig `WU_HESTIA_API_USER` en óf `WU_HESTIA_API_PASSWORD` óf `WU_HESTIA_API_HASH`.
- “Missing account/base domain” in logboeke: verseker dat `WU_HESTIA_ACCOUNT` en `WU_HESTIA_WEB_DOMAIN` ingestel en geldig is in Hestia.

## Verwysings
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Verwysing (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
