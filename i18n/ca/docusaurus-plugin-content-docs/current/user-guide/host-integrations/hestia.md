---
title: Integració del painel de control Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integració amb el Panel de Control Hestia {#hestia-control-panel-integration}

Aquesta guia explica com configurar l'integració d'Ultimate Multisite i Hestia perquè els domènis mapejats en la teva xarxa es puguin afegir (i eliminar) automàticament com a Aliases de Dominio Web en Hestia.

- Referència CLI de Hestia: `v-add-web-domain-alias` / `v-delete-web-domain-alias`
- Document oficial de REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Què fa {#what-it-does}
- Quan es mapeja un domini en Ultimate Multisite, l'integració sol la API de Hestia per executar:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Quan es elimina una mappatura de domini, executa:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opcionalment afegir/eliminar l'alias `www.` depenent de la configuració "Auto-create www subdomain" en les Configuracions de Mapeig de Dominis.

## Pré-requisits {#prerequisites}
- Un Domini Web de Hestia existent que ja apuntés a la teva instal·lació de WordPress. L'integració adjuntaran alias a aquest domini base.
- Accés a l'API de Hestia activat. Pots autenticarte utilitzant una contrasenya o un hash/token d'API.

Consulta els documents de REST API de Hestia per activar l'accés a la API i obtenir detalls d'autenticació:
https://hestiacp.com/docs/server-administration/rest-api.html

## Configuració (Wizard → Integracions → Hestia) {#configuration-wizard--integrations--hestia}
Forcs els següents valors:

- `WU_HESTIA_API_URL` (obligatori)
  - El punt d'accés API base, típicament `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (obligatori)
  - L'usuari Hestia que utilitzes per a comandes API (sovint és `admin`).
- `WU_HESTIA_API_PASSWORD` o `WU_HESTIA_API_HASH` (almen una de les dues)
  - Escolteu un mètode d'autenticació: contrasenya o hash/token API.
- `WU_HESTIA_ACCOUNT` (obligatori)
  - L'usuari (proprietari) del Domini Web a Hestia; aquest és el primer argument per al CLI.
- `WU_HESTIA_WEB_DOMAIN` (obligatori)
  - El Domini Web existent a Hestia que serveix el teu WordPress (aquí es atanaran els alias).
- `WU_HESTIA_RESTART` (opcional; valor per defecte `yes`)
  - Si vols reiniciar/recarregar serveis després de canviar els alias.

Pots deixar que l'wizard injecti aquestes constantes en `wp-config.php`, o definir-les manualment.

## Verificació de la configuració {#verifying-setup}
- En el pas "Testing" de l'wizard, el plugin llams `v-list-web-domains <WU_HESTIA_ACCOUNT> json` a través de l'API. Una resposta de èxit confirma la connectivitat i l'autenticació.
- Després d'mapear un domini, verifica a Hestia: Web > el domini base > Aliases. Deures veure l'alias nou afegit.

## Notes i consells {#notes--tips}
- Assoreu que `WU_HESTIA_WEB_DOMAIN` ja existeix i és de propietat de `WU_HESTIA_ACCOUNT`.
- Si es requereixen SSL, gestiona els certifikats a Hestia. Aquesta integració només gestiona alias per ara.
- El plugin pot afegir/eliminar `www.<domain>` depenent de la configuració "www subdomain" del teu Mapeig de Domini.

## Exemple d'appel API (cURL) {#example-api-call-curl}
A qui següent un exemple conceptual (ajusteu al teu entorn). Consulta la documentació oficial per a paràmetres exactes.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (o &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias a afegir)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Per a la eliminació, utilitza `cmd=v-delete-web-domain-alias` i els mateixos paràmetres.

## Problemes comuns (Troubleshooting) {#troubleshooting}
- Error HTTP de l'API: verifica que `WU_HESTIA_API_URL` sigui accessible i inclosa `/api`.
- Errors d'autenticació: confirma que `WU_HESTIA_API_USER` i, o bé `WU_HESTIA_API_PASSWORD` o `WU_HESTIA_API_HASH`, estiguin correctes.
- "Missing account/base domain" en els logs: assegura't que `WU_HESTIA_ACCOUNT` i `WU_HESTIA_WEB_DOMAIN` estiguin setats i valids a Hestia.

## Referències {#references}
- API REST de Hestia: https://hestiacp.com/docs/server-administration/rest-api.html
- Referència CLI de Hestia (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
