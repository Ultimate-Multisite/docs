---
title: Operacions de lloguer soberan
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operacions de Tenant Soberan

Ultimate Multisite: Multi-Tenancy 1.2.0 afixant eines operacionals per als tenants soberans: subsits que funcionen amb la seva pròpia base de dades (database), sistema de fitxers (filesystem root) i context de ruteament, mantenint-se visibles des del administrador de la xarxa.

Utilitza aquesta pàgina quan estiguis gestionar fitsits de clients isolats, passades de sites remots o migracions que moven un subsite estàndard cap a infraestructures soberanes.

## Què canvia per als administradors {#what-changes-for-administrators}

- **Autologin del tenant sense estat (Stateless tenant autologin)** — Els administradors de la xarxa poden visitar un tenant soberan sense dependre d'un estat de sessió compartit de llarga durada. El token SSO és limitat al seu propòsit, ancorat a l'origen, protegit contra la repeticció i limitat a una finestra d'expiració curta.
- **Ruteament conscient del tenant soberan (Sovereign-aware routing)** — Les xarxes isolades legacy i els tenants soberans resolen mitjançant la mateixa ruta de ruteament del site, reduint les diferències de bootstrap entre instal·lacions antigues i noves isolades.
- **Estat de migració verificat (Verified migration state)** — La verificació de la migració comprueba el proveïment d'usuari, els permisos de escritors de la base de dades, l'estat del drenatge de la cola (queue drain status) i l'absence de taules legacy abans que es titi el tenant com complet.
- **Desmontatge més segur (Safer teardown)** — El desmontatge soberan ara elimina les credencials del tenant de manera neta perquè els tenants eliminats no queden amb accés residual a la base de dades.

## Visitar un tenant soberan {#visiting-a-sovereign-tenant}

1. Obre **Network Admin > Ultimate Multisite > Sites**.
2. Selecciona el tenant soberan.
3. Utilitza **Visit (SSO)** quan sigui possible en lloc de copiar passwords o crear comptes admin temporals.

El flux de visita crea un token de login de curta durada per a aquell tenant i registra l'esdeveniment SSO al seu audit trail del tenant. Si el bot falla, comprueba que el domini del tenant resuelva a la instal·lació esperada i que el tenant pugui arribar al endpoint SSO del costat de la xarxa.

## Cerca operacionals de sites remots {#remote-site-operations-checklist}

Abans de canviar un tenant soberan o remot, confirma:

El domini del lloguer apunta al host que té el sistema de fitxers del lloguer.
L'host de la base de dades del lloguer coincide amb el vinculació d'host configurada per aquesta instal·lació.
Els comandes de verificació de migració passen per el lloguer.
Les colles de migració asíncrones es desaproven abans de fer canvis de DNS o de propietat.
L'usuari d'administrador del lloguer va ser provisionat durant la migració i pot accedir mitjançant SSO.

## Eliminació de lloguers soberans {#deleting-sovereign-tenants}

Eliminar un lloguer soberan és una operació destructiva. Confirma el estat del backup i de l'export abans, i després elimina des del mànstic de gestió del site. El flux de desmontatge 1.2.0 elimina les credencials de la base de dades del lloguer com part de la neteja, però els administradors encara han de verificar que els usuaris de la base de dades i les carpetes de nivell host es van anular quan s'utilitzen panels d'hostatge externs.

:::warning
No elimine un lloguer soberan mentre estigui en curs la verificació de migració o mentre es queden en cola els trabajos asíncruns de push. Awaita que la verificació es completi perquè el desmontatge no elimini les credencials necessàries per als trabajos pendents.
:::
