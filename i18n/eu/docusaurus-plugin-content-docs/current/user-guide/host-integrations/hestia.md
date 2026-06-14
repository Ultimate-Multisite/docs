---
title: Hestia Control Panel Integrazioa
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Integrazioa

Haugiakoki irudien dokumentuaren espezioa da Ultimate Multisite Hestia integrazioa konfiguratzeko, denbora erdatu (mapped) domain-ek network-an dagoen ari dira automatikoki Hestia-ren Web Domain Aliases gisa jodezkatzen (eta haurtzen) duela.

- Hestia CLI referentzia: v-add-web-domain-alias / v-delete-web-domain-alias
- Ofiziala REST API dokumentazioa: https://hestiacp.com/docs/server-administration/rest-api.html

## Zer egin du?
- Ultimate Multisite-an domain bat erdatu (mapped) da, integrazioak Hestia API-ra allintzen du eta hauek jarraitzen du:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain mapping bat haurtzen da, hauek jarraitzen du:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain Mapping konfiguratzean dagoen "Auto-create www subdomain" (www. subdomini automatikoki jodezkatzea) aukeraren arabera, `www.` aliasa haurtu edo haurtzen da.

## Aurreratutako kondizioak
- WordPress instalazioan dagoen Hestia Web Domain bat duela. Integrazioak aliases hauek hori domain bazterako (base domain) haurtuko dira.
- Hestia API zehatza (access) aktiboa izan behar da. Pasordiko edo API hash/token batekin autentikatu dezakezu.

API zehatzak eta autentifikazio detaliak erabiliz:
https://hestiacp.com/docs/server-administration/rest-api.html

- `WU_HESTIA_API_URL` (besitzak)
  - Base API endpoint, den beste `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (besitzak)
  - Hestia user, den du für API-kommando bruchsch (oft `admin`).
- `WU_HESTIA_API_PASSWORD` edo `WU_HESTIA_API_HASH` (labas bat)
  - Aleguna autentikazio metodo ustea: paslori edo API hash/token.
- `WU_HESTIA_ACCOUNT` (besitzak)
  - Hestia-ren kontua (propietari), Web Domain-aren; hau da zure CLI-ren lehen argumenta.
- `WU_HESTIA_WEB_DOMAIN` (besitzak)
  - Web Domain esistente, den WordPress-i ematen du (alias-ekoa hiri ezarri da huan).
- `WU_HESTIA_RESTART` (labas bat; default `yes`)
  - Zerren nahi du zerbituak berriren alias-ekoa ondoren restart/reload egin edo ez?

Ezin duzu hauek konstante hauek `wp-config.php`-le injectatu, edo manuazki definatu dezakezu.

## Verifikazioa
- Wizard-en "Testing" iragazian, plugin-ekoa API-aren `v-list-web-domains <WU_HESTIA_ACCOUNT> json` eratu egiten du. Onerak hasterrera eta autentikazioa konpondu da.
- Domain bat mapatuta gabe, Hestia-ean kontrolatu: Web > base domain > Aliases. Berria alias-ekoa hartzen duzu.

## Nota eta Consejos
- Ezin duzu `WU_HESTIA_WEB_DOMAIN` ez dagoela eta `WU_HESTIA_ACCOUNT`-ek soilik den dela.
- SSL behar bada, sertifikatua Hestia-ean jartzen duzu. Integrazioak orain alias-ekoa soilik maneia da.
- Zure Domain Mapping "www subdomain" aukera ondoren `www.<domain>` hartzea edo hartzea ere egin dezake.

## API Erroren Oinarria (cURL)
Arau bat konseptual gisa da (zure erabilera ondorekin aukeratu duzu). Erreguntzakaren kontua referiatu duzu.

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

Biderazpen, boratzen ari zaitu, `cmd=v-delete-web-domain-alias` eta berrekiko argumenduak erabili.

## Problema iruditzen (Troubleshooting)
- API-z betetzen HTTP error: jartzen dituzteko da `WU_HESTIA_API_URL`-a eta `/api` edo beste batzuk hartzeko.
- Autentikazio errorrak: jartzen dituzteko da `WU_HESTIA_API_USER` eta `WU_HESTIA_API_PASSWORD` edo `WU_HESTIA_API_HASH`.
- Logs-ek "Missing account/base domain" (Kontua/Base domain ez dago) iruditzen: jartzen dituzteko da `WU_HESTIA_ACCOUNT` eta `WU_HESTIA_WEB_DOMAIN`-ek Hestia-ean zehatz eta balioz jakinarazitzea.

## Referentziak
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Referentzia (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
