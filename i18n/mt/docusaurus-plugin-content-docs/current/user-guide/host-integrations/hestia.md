---
title: Integrazzjoni ta' Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integrazzjoni mal-Hestia Control Panel

Dan it-dira li tispjega kif tista' tgħallma l-integrazzjoni ta' Ultimate Multisite Hestia biex domini ma mappati fil-network tiegħek jiġu aġġojati (u jipparxu) awtomatik bħala Web Domain Aliases f'Hestia.

- Referenza tal-Hestia CLI: v-add-web-domain-alias / v-delete-web-domain-alias
- Dokumentazzjoni uffiċjali tal-REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## X'għandu
- Meta dominu jomm mappat fil-Ultimate Multisite, l-integrazzjoni tiffaċċja l-Hestia API biex tgħmli:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Meta jomm eliminat mappatura tal-dominu, tiffaċċja l-qod:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- B'opzjoni, tiddir/teliminat l-alias `www.` b'mod meta għal impost tiegħek ta "Auto-create www subdomain" f'impostijiet tal-Domain Mapping.

## Prerequisiti
- Web Domain Hestia esistenti li jista' jkollu giàqqa għall-WordPress tiegħek. L-integrazzjoni tiddir alias b'dinja diġà.
- Aċċess għall-Hestia API attivatu. Tista' tiauthentifika b'parola jew b'API hash/token.

Vidi dokumentazzjoni REST API tal-Hestia biex tivveġi l-aċċess API u dettalji ta l-authentifikazzjoni:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigurazzjoni (Wizard → Integrations → Hestia)
Fornis il-valuri fil-mejdan li jipprovvidi:

- `WU_HESTIA_API_URL` (obbligatoriu)
  - Il endpoint base API, tipicamente `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (obbligatoriu)
  - L'utente Hestia usat per i comandi API (spesso `admin`).
- `WU_HESTIA_API_PASSWORD` o `WU_HESTIA_API_HASH` (almeno uno)
  - Scegli un metodo di autentikazzjoni: password o hash/token API.
- `WU_HESTIA_ACCOUNT` (obbligatoriu)
  - L'account (proprietari) del Web Domain f Hestia; questo è il primu argomentu per la CLI.
- `WU_HESTIA_WEB_DOMAIN` (obbligatoriu)
  - Il Web Domain esistenti f Hestia li servix il tuo WordPress (gli alias verranno aggi stampati f'aċċess).
- `WU_HESTIA_RESTART` (opzionale; default `yes`)
  - Se vuoi ripartiri/riloadir is-servizzi dopo i cambi di alias.

Tista' li permetti lill wizard injettare sti constants f `wp-config.php`, jew definirli manualmente.

## Verifika l-Setup
- F'istad "Testing" tal-wizard, il plugin jiddefinis xi `v-list-web-domains <WU_HESTIA_ACCOUNT> json` via l'API. Risposta ta suċċess konferma l-konnettività u l-autentikazzjoni.
- Dopo li mappi un domain, verifica f Hestia: Web > il domain base > Aliases. Dovrent l-alias nuġġi aġixxiat.

## Nota & Consigli
- Assicurati li `WU_HESTIA_WEB_DOMAIN` jkun esistenti u possedut minn `WU_HESTIA_ACCOUNT`.
- Se l-SSL huwa presi, gesti il certificati f Hestia. Il integrazzjoni hija attwali tiegħu għal alias oħra.
- Il plugin xieq jiddejna/jixgħel `www.<domain>` b'modewq li għall-setting tal-Domain Mapping "www subdomain".

## Eżempju Call API (cURL)
Qebla huwa eżempju konseptwali (aġjusta għall-ambiente tiegħek). Riferi l-dokumentazzjoni uffiċjali għall-parament egizi.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (o &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias li għadd)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Biex tal-delete, uż `cmd=v-delete-web-domain-alias` u is-istess argomenti.

## Problemi biex tiffaħu (Troubleshooting)
- Errat HTTP mill-API: verifika li `WU_HESTIA_API_URL` huwa jiddeħħol u jinkludi `/api`.
- Errat ta l-autentikazzjoni: konferma `WU_HESTIA_API_USER` u sia `WU_HESTIA_API_PASSWORD` jew `WU_HESTIA_API_HASH`.
- "Missing account/base domain" fil-logs: assorda li `WU_HESTIA_ACCOUNT` u `WU_HESTIA_WEB_DOMAIN` ma huma setti u validi f'Hestia.

## Referenzi
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Referenza CLI tal-Hestia (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
