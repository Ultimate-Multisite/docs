---
title: Verifikado de Sovrana Migrado
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migra Verifikado

Ultimate Multisite: Multi-Tenancy 1.2.0 inkluz WP-CLI verifikacondos por migracio de tenant souverain. Uzuwch ilin, kun tenant migration, vizit SSO aŭ izolita instalado ne funkcias kiel esperas.

## Komandoj por fari {#commands-to-run}

Faites la verifikado de la instalado WordPress de la retoj:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Uzuwch la ID de la site por la tenant ki vi migras. La unua komando kontrolas ke la tenant ne dependas pli de dataj de la retoj antaŭe (legacy). La dua komando verifikas ke joboj de sovereign push povas procesi kaj dreni.

## Komuna malsuktoj {#common-failures}

### Grantoj de bazda dato ne korespondant la hosto {#database-grants-do-not-match-the-host}

Se la verifikado raportas malsuktojn en grantoj aŭ writer-user, kontrolu la konfiguraitan bazda hoston. `localhost`, `127.0.0.1` kaj nomo de serva kontena estas malsamaj MySQL grant hostoj. Modernizu la ligo de la host tenant aŭ la grantoj de bazda dato, tan ripare verifikadon.

### Bedrock aŭ lokaj instaloj ne povas konekti {#bedrock-or-local-installs-cannot-connect}

Bedrock kaj lokaj socket instaloj povas raporti la bazdan daton kiel `localhost` dum la runtime konektas per normaligita adreson. Versio 1.2.0 normaligas homa stringojn de host sur la sama makina, sed personalaj host-overrides povas malfari kun grantoj de bazda dato.

### Asinchro push queue ne drenas {#async-push-queue-does-not-drain}

Se `verify-sovereign-push` ne finas, kontrolu Action Scheduler aŭ la konfiguraitan asinchro runner. Limas (clear) malsuktaj jobojn nur post kounvi ki ili estas segur por riprovi aŭ eliri.

### La cesto de uzantoj tenant estas malbona {#tenant-user-count-is-wrong}

La migrado devas provizi uzantojn por la tenant souverain. Se la esperita instalita uzanto mankas, ripare la paŝton de provizio de uzantoj antaŭ reoffri SSO.

### Vizito SSO estas rejeita {#sso-visit-is-rejected}

La auto-login de tenants sin estado requiere que el dominio del tenant, el pin de origen (origin pin), el propósito del token, el nonce y la fecha de expiración coincidan. Confirme que la URL del tenant es correcta y que se intentará iniciar sesión poco después de generar la visita SSO.

## Cuándo reintentar {#when-to-retry}

Reintente la verificación después de cada cambio en la infraestructura. No cambie el tráfico de producción, elimine los datos de origen ni elimine las credenciales de migración hasta que todas las comprobaciones de verificación pasen.
