---
title: Integración con Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Panel de Control Integración

Esta guía explica cómo configurar la integración Ultimate Multisite Hestia para que los dominios mapeados en su red se añadan (y eliminen) automáticamente como Alias de Dominio Web en Hestia.

- Hestia CLI reference: v-add-web-domain-alias / v-delete-web-domain-alias
- Official REST API doc: https://hestiacp.com/docs/server-administration/rest-api.html

## Qué Hace

- Cuando un dominio se mapea en Ultimate Multisite, la integración llama a la API de Hestia para ejecutar:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Cuando un mapeo de dominio se elimina, ejecuta:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opcionalmente agrega/elimina el alias `www.` dependiendo de su configuración de “Auto-create www subdomain” en la configuración de mapeo de dominios.

## Requisitos Previos

- Un dominio Web de Hestia existente que ya apunte a su instalación de WordPress. La integración adjuntará alias a este dominio base.
- Acceso a la API de Hestia habilitado. Puede autenticarse usando una contraseña o un hash/token de API.

See Hestia’s REST API docs for enabling API access and authentication details:
https://hestiacp.com/docs/server-administration/rest-api.html

## Configuración (Asistente → Integraciones → Hestia)

Proporcione los siguientes valores:

- `WU_HESTIA_API_URL` (required)
  - The base API endpoint, typically `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (required)
  - Hestia user used for API commands (often `admin`).
- `WU_HESTIA_API_PASSWORD` or `WU_HESTIA_API_HASH` (at least one)
  - Choose one authentication method: password or API hash/token.
- `WU_HESTIA_ACCOUNT` (required)
  - The account (owner) of the Web Domain in Hestia; this is the first argument to the CLI.
- `WU_HESTIA_WEB_DOMAIN` (required)
  - The existing Hestia Web Domain that serves your WordPress (aliases will be attached here).
- `WU_HESTIA_RESTART` (optional; default `yes`)
  - Whether to restart/reload services after alias changes.

You can let the wizard inject these constants into `wp-config.php`, or define them manually.

## Verificando la Configuración

- En el paso “Testing” del asistente, el plugin llama a `v-list-web-domains <WU_HESTIA_ACCOUNT> json` a través de la API. Una respuesta exitosa confirma la conectividad y autenticación.
- Después de mapear un dominio, verifique en Hestia: Web > el dominio base > Aliases. Debería ver el nuevo alias agregado.

## Notas y Consejos

- Asegúrese de que `WU_HESTIA_WEB_DOMAIN` ya exista y sea propiedad de `WU_HESTIA_ACCOUNT`.
- Si se requiere SSL, gestione los certificados en Hestia. Esta integración solo maneja alias.
- El plugin también puede agregar/eliminar `www.<domain>` dependiendo de su configuración de “www subdomain” en el mapeo de dominios.

## Ejemplo de Llamada API (cURL)

A continuación se muestra un ejemplo conceptual (ajuste a su entorno). Consulte el documento oficial para los parámetros exactos.

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

Para eliminar, use `cmd=v-delete-web-domain-alias` y los mismos argumentos.

## Solución de Problemas

- Error HTTP de la API: verifique que `WU_HESTIA_API_URL` sea accesible e incluya `/api`.
- Errores de autenticación: confirme que `WU_HESTIA_API_USER` y `WU_HESTIA_API_PASSWORD` o `WU_HESTIA_API_HASH` estén configurados.
- “Missing account/base domain” en los registros: asegúrese de que `WU_HESTIA_ACCOUNT` y `WU_HESTIA_WEB_DOMAIN` estén establecidos y válidos en Hestia.

## Referencias

- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
