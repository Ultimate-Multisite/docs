---
title: Verificatio Migratio Sovranorum
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verificación de Migración Soberana {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 incluye comandos de verificación WP-CLI para migraciones de inquilinos soberanos. Úsalos cuando una migración de inquilino, una visita SSO o una instalación aislada no se comporten como se espera.

## Comandos a ejecutar {#commands-to-run}

Ejecuta la verificación desde la instalación de WordPress en la red:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Usa el ID del sitio para el inquilino que estás migrando. El primer comando comprueba que el inquilino ya no dependa de datos heredados del lado de la red. El segundo comando verifica que los trabajos de empuje soberano puedan procesarse y drenarse.

## Fallos comunes {#common-failures}

### Los permisos de la base de datos no coinciden con el host {#database-grants-do-not-match-the-host}

Si la verificación reporta fallos en los permisos o en el usuario escritor, comprueba el host de la base de datos configurado. `localhost`, `127.0.0.1` y un nombre de servicio de contenedor son hosts de MySQL diferentes para permisos. Actualiza la vinculación del host del inquilino o los permisos de la base de datos, y luego vuelve a ejecutar la verificación.

### Las instalaciones Bedrock o locales no pueden conectarse {#bedrock-or-local-installs-cannot-connect}

Las instalaciones Bedrock y de socket local pueden reportar la base de datos como `localhost` mientras que el tiempo de ejecución se conecta a través de una dirección normalizada. La versión 1.2.0 normaliza las cadenas de host de la misma máquina, pero las anulaciones de host personalizadas aún pueden entrar en conflicto con los permisos de la base de datos.

### La cola de empuje asíncrono no se drena {#async-push-queue-does-not-drain}

Si `verify-sovereign-push` no termina, comprueba Action Scheduler o el ejecutor asíncrono configurado. Borra los trabajos fallidos solo después de confirmar que es seguro reintentarlos o descartarlos.

### El número de usuarios del inquilino es incorrecto {#tenant-user-count-is-wrong}

La migración debe provisionar usuarios para el inquilino soberano. Si falta el usuario de instalación esperado, vuelve a ejecutar el paso de provisión de usuarios antes de volver a intentar el SSO.

### La visita SSO es rechazada {#sso-visit-is-rejected}

Autologin senex (tenant) non-stateless exigent autologin requirit ut dominum senex, origin pin, turpuro tokenis, nonce et expiratio concordant. Confirmare est ut URL senex sit rectus et ut login post generationem visit SSO probetur brevis tempore.

## Cum rediit {#when-to-retry}
Rediit verificationem post omnem mutationem infrastructurae. Non mutare trafficum productionis, non deletum datum fontis, neque remuovere credentiales migrationis donec omnia verificatio check passant.
