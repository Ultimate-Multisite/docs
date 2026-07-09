---
title: Operationes Proprietatis Tenentis
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operatio Tenantorum Sovranorum {#sovereign-tenant-operations}

Ultimate Multisite: Multi-Tenancy 1.2.0 addeat instrumenta operationalia pro tenantibus solebranibus: subsites quae operant cum proprio database, radice systematis et contextu routae propria, dum tamen visibili sunt administratore network.

Ubi hoc opus est quando administras visitas sitos clientium isolatos, transfertiones remotas, vel migrações quae ordinem subsite standardis in infrastructuram solebranem moverunt.

## Quid mutatur pro administratoribus {#what-changes-for-administrators}

- **Autologin tenantis stateless** — Administratory network ad tenantum solebranum visitant sine confendo se in statu sessione longa et communi. Token SSO est permodum limitatus, originem fixus, re-play protectus et limitatus ad brevis finem expirationis.
- **Routatio conscientia solebris** — Network isolatum antiqua et tenantibus solebribus per eadem viam router situi resolventur, quod differntias in bootstrap inter installationes vetustas et novae isolatae minuit.
- **Status migrationis verificatus** — Verificatio migrationis verifica status provisionis utentium, permissiones scriptoris database, status drain queue et absentiam tabularum antiquarum antequam tenantum completum tractatur.
- **Desmantelatio sicura** — Desmantelatio solebris nunc credentiales tenantis pulcher removeat ita ut deleti tenantia accessus in database vetustos non laidet.

## Visitio tenantis solebris {#visiting-a-sovereign-tenant}

1. Aperite **Network Admin > Ultimate Multisite > Sites**.
2. Selectum tenantem solebrum.
3. Ubi est disponibilis, uti **Visit (SSO)** in loco copiandi password vel creandi temporari contas admin.

Fluxus visitio token login brevis pro eo tenanti creavit et eventum SSO in audit trail tenantis registratur. Si buton fallit, verifica ne dominio tenantis ad installationem expectatam resolvatur et ne tenant possit ad endpoint SSO lati network recipere.

## Checklista operationis siti remotas {#remote-site-operations-checklist}

Ante mutatione tenantis solebris vel remotis, confirmare:

- Dominius locat ad hostum qui proprietatem systematis tenentis habet.
- Host database tenentis concordat cum vinculatione hosti configurata pro illam installationem.
- Commandum verificationis migrationis passunt pro tenente.
- Queues migrationis asynchronae purgantur antequam mutatio DNS vel proprietatis faciat.
- Usuarius administrator tenentis est provisoriatus durante migrationem et potest accedere per SSO.

## Deletion tenantium souveraniorum {#deleting-sovereign-tenants}

Delation tenantis souverani est destructiva. Primum confirmate status backup et export, deinde delat ex scriberio managementi situi. Fluxus teardown 1.2.0 removet credentials database tenentis ut parte purgationis, sed administrator debet tamen verificari quod usores database et folder hostium sunt evanescunt cum panelibus hosting externis.

:::warning
Non delat tenantem souveranim dum verificationis migrationis in eo est in curso vel dum jobbus push asynchronae inqueantur. Attendite ad completum verificationem ita ut teardown non removeat credentials necessaria pro jobbus pendentibus.
