---
title: Verificació de migració soberana
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verificació de Migració Soberana

Ultimate Multisite: Multi-Tenancy 1.2.0 inclou comandes de verificació WP-CLI per a migracions de tenants soberans. Ús-les quan una migració de tenant, una visita SSO o una instal·lació isolada no se comportin com esperes.

## Comandes a executar {#commands-to-run}

Executa la verificació des de l'instal·lació WordPress de la xarxa:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Utilitza el site ID del tenant que estàs migrant. La primera comanda comprueba que el tenant ja no depèn de dades legals del servei de la xarxa. La segona comanda verifica que els trabajos de *sovereign push* puguen processar i drenar.

## Fallides comunes {#common-failures}

### Els grants de la base de dades no coincideixen amb l'host {#database-grants-do-not-match-the-host}

Si la verificació reporta fallides en grants o en el nom d'usuari escrit (*writer-user*), comprueba l'host de la base de dades configurat. `localhost`, `127.0.0.1` i un nom de servei de conteneur són hosts MySQL de grants diferents. Actualitza la vinculació de l'host del tenant o els grants de la base de dades, i vuelve a executar la verificació.

### Les instal·lacions Bedrock o locals no poden connectar-se {#bedrock-or-local-installs-cannot-connect}

Les instal·lacions Bedrock i les sockets locals poden reportar la base de dades com `localhost` mentre el *runtime* es connecta mitjançant una adreça normalitzada. La versió 1.2.0 normalitza les strings d'host de mateix servei, però els sobrescrits d'host personal encara poden col·lidir amb els grants de la base de dades.

### La cola asíncrona de *push* no es drena {#async-push-queue-does-not-drain}

Si `verify-sovereign-push` no finalitza, comprueba Action Scheduler o el *runner* asíncron configurat. Cleua els trabajos fallats només després de confirmar que són segurs per a ser intentats de nou o descartats.

### El compte d'usuari del tenant és incorrecte {#tenant-user-count-is-wrong}

La migració ha de provisionar usuaris per al tenant soberan. Si falta l'usuari d'instal·lació esperat, vuelve a executar el pas de provisionament d'usuari abans de tornar a intentar SSO.

### La visita SSO és rebutjada {#sso-visit-is-rejected}

El login automàtic de tenants *stateless* (sense estado) requereix que el domini del tenant, el *origin pin*, el propòsit del token, el *nonce* i la data d'expiració s coincidin. Confirma que l'URL del tenant és correcta i que es intenta el login poc després de generar la visita SSO.

## Quan repetir {#when-to-retry}

Repete la verificació després de cada canvi d'infraestructura. No canvies el tràfic de producció, no eliminis els dades de origen ni no removes les credencials de migració fins que tots els controls de verificació passin.
