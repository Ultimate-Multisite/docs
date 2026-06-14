---
title: Integratio Paneli Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integrare con el Panel de Control Hestia

Esta guía explica cómo configurar la integración de Ultimate Multisite Hestia para que los dominios mapeados en tu red se añadan (y se eliminen) automáticamente como Alias de Dominio Web en Hestia.

- Referencia CLI de Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Documentación oficial de la REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Qué Hace
- Cuando se mapea un dominio en Ultimate Multisite, la integración llama a la API de Hestia para ejecutar:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Cuando se elimina el mapeo de un dominio, ejecuta:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opcionalmente añade/elimina el alias `www.` dependiendo de tu configuración de "Auto-create www subdomain" en la configuración de Mapeo de Dominios.

## Requisitos Previos
- Un Dominio Web de Hestia existente que ya apunte a tu instalación de WordPress. La integración adjuntará aliases a este dominio base.
- Acceso a la API de Hestia habilitado. Puedes autenticarte usando una contraseña o un hash/token de API.

Consulta la documentación de la REST API de Hestia para habilitar el acceso a la API y los detalles de autenticación:
https://hestiacp.com/docs/server-administration/rest-api.html

## Configuración (Asistente → Integraciones → Hestia)
Proporciona los siguientes valores:

- `WU_HESTIA_API_URL` (requisitum)
  - Elixium terminus API, admodo usque ad `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (requisitum)
  - Usus Hestiae ad commandas API ( saepe `admin`).
- `WU_HESTIA_API_PASSWORD` aut `WU_HESTIA_API_HASH` (aliter)
  - Eligite unum modum authenticationis: password vel hash/token API.
- `WU_HESTIA_ACCOUNT` (requisitum)
  - Computus (dominium) del Domini Web in Hestia; hoc est primum argumentum ad CLI.
- `WU_HESTIA_WEB_DOMAIN` (requisitum)
  - Dominium Web existerne in Hestia quod tuum WordPress servit (alias hic attachabuntur).
- `WU_HESTIA_RESTART` (opcionale; default `yes`)
  - Si servitia post mutationes alias redi/recarge.

Possueris hoc constantias in `wp-config.php` injectare per wizard, vel manu definire.

## Verificatio Configuratio
- In step “Testing” del wizard, plugin vocat `v-list-web-domains <WU_HESTIA_ACCOUNT> json` per API. Responsum success confirmat connectivitatem et authenticationem.
- Post mappam domini, verifica in Hestia: Web > dominium primum > Aliases. Novum alias debet videri additum.

## Notae & Conseilia
- Assura te quod `WU_HESTIA_WEB_DOMAIN` iam existeret et a `WU_HESTIA_ACCOUNT` possidetur.
- Si SSL necesse est, certifica in Hestia. Hoc integratio nunc solum alias maneat.
- Plugin etiam `www.<domain>` addere/removeri potest, secundum optionem mappae Domini tuam “www subdomain”.

## Exemplum Vocis API (cURL)
Hic est exemplum conceptuale (ad tuum environem adaptare). Ad documentum officium referte ad parametra exactos.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (vel `&hash=YOUR_API_HASH`)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias addebitum)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Ad deletio, uti `cmd=v-delete-web-domain-alias` et eadem argum.

## Solutio Problematum (Troubleshooting)
- Error HTTP ex API: verifica si `WU_HESTIA_API_URL` est accessibilis et includit `/api`.
- Errores authenticationis: confirma `WU_HESTIA_API_USER` et utrumque `WU_HESTIA_API_PASSWORD` vel `WU_HESTIA_API_HASH`.
- “Account/domini basis missing” in logibus: assura te quod `WU_HESTIA_ACCOUNT` et `WU_HESTIA_WEB_DOMAIN` sunt definiti et validi in Hestia.

## Referentiae (References)
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Referentia CLI Hestia (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
