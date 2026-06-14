---
title: Verificación de Migración Soberana
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verificación de Migración Soberana

Ultimate Multisite: Multi-Tenancy 1.2.0 incluye comandos de verificación WP-CLI para migraciones de inquilinos soberanos. Úsalos cuando una migración de inquilino, una visita SSO o una instalación aislada no se comporten como se espera.

## Comandos a ejecutar

Ejecuta la verificación desde la instalación de WordPress en la red:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Usa el ID del sitio para el inquilino que estás migrando. El primer comando comprueba que el inquilino ya no dependa de datos heredados del lado de la red. El segundo comando verifica que los trabajos de empuje soberano puedan procesarse y drenarse correctamente.

## Fallos comunes

### Los permisos de la base de datos no coinciden con el host

Si la verificación reporta fallos en los permisos de `grant` o `writer-user`, comprueba el host de la base de datos configurado. `localhost`, `127.0.0.1` y el nombre del servicio del contenedor son hosts MySQL de `grant` diferentes. Actualiza la vinculación del host del inquilino o los permisos de la base de datos, y vuelve a ejecutar la verificación.

### Las instalaciones Bedrock o locales no pueden conectarse

Las instalaciones Bedrock y las de socket local pueden reportar la base de datos como `localhost` mientras que el tiempo de ejecución se conecta a través de una dirección normalizada. La versión 1.2.0 normaliza las cadenas de host de la misma máquina, pero las anulaciones de host personalizadas aún pueden entrar en conflicto con los permisos de la base de datos.

### La cola de empuje asíncrono no se drena

Si `verify-sovereign-push` no termina, comprueba Action Scheduler o el ejecutor asíncrono configurado. Borra los trabajos fallidos solo después de confirmar que es seguro reintentarlos o descartarlos.

### El número de usuarios del inquilino es incorrecto

La migración debe provisionar usuarios para el inquilino soberano. Si falta el usuario de instalación esperado, vuelve a ejecutar el paso de provisión de usuarios antes de intentar la visita SSO de nuevo.

### La visita SSO es rechazada

O inicio de sesión automático do inquilino *stateless* (sem estado) requiere que o dominio do inquilino, a pin de origem (*origin pin*), o propósito do token, o nonce e a expiraición coincidan. Confirme que a URL do inquilino está correcta e que o intento de inicio de sesión se fará logo después de generar a visita SSO.

## Quando repetir

Repita a verificación após cada cambio na infraestrutura. Non mude o tráfego da producción, non borxe os datos de origem ou non remova as credenciais de migración até que todas as checadas de verificación pasen.
