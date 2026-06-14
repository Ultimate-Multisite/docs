---
title: Multi-tenancy de Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-tenancy de Hostinger

Ultimate Multisite: Multi-Tenancy 1.2.0 añade una capacidad de multi-tenancy de Hostinger para que los dominios alojados puedan participar en la provisión de inquilinos soberanos junto con la integración existente de mapeo de dominios de Hostinger.

Utiliza esta capacidad cuando los dominios de inquilino e infraestructura de inquilino aislada se gestionan a través de hPanel de Hostinger.

## Notas de configuración

1. Configura la integración principal de Hostinger en **Ultimate Multisite > Settings > Host Integrations**.
2. Confirma que el token API de Hostinger puede gestionar el dominio o subdominio objetivo.
3. Habilita el addon de Multi-Tenancy.
4. Configura la estrategia de aislamiento del inquilino antes de publicar al inquilino.
5. Ejecuta el flujo de trabajo de verificación de migración antes de enviar tráfico de producción al inquilino.

La capacidad de Hostinger utiliza la conexión compartida de Hostinger para las operaciones del lado del host. El DNS todavía debe apuntar a la cuenta correcta de Hostinger, y los límites de la cuenta de hPanel siguen aplicándose.

## Cambios específicos de la capacidad

- Se pueden crear inquilinos soberanos con operaciones de dominio conscientes del host.
- Las cadenas de host de base de datos en la misma máquina se normalizan antes de conceder la verificación.
- Los inquilinos gestionados por Hostinger deben usar el valor del host de la base de datos que se muestra en hPanel a menos que el entorno de ejecución de WordPress requiera una anulación local.
- Las visitas SSO dependen de que el dominio del inquilino resuelva al inquilino alojado por Hostinger.

## Solución de problemas de inquilinos de Hostinger

- Si la instalación de un inquilino falla, verifica que el dominio ya esté adjunto a la cuenta de Hostinger.
- Si la verificación de la base de datos falla, compara el nombre de usuario de la DB del inquilino, el nombre de la base de datos y la vinculación del host con hPanel.
- Si **Visit (SSO)** falla, confirma que el DNS y el SSL estén activos para el dominio del inquilino.
- Si la desinstalación deja recursos del host pendientes, elimina cualquier base de datos, usuario o carpeta restante de hPanel después de confirmar las copias de seguridad.
