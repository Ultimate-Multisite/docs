---
title: Integració de multiarrendament
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integració de multiarrendament {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 canvia diversos punts de contacte d’integració per a arrendataris sobirans, verificació de migracions i automatització del cicle de vida dels arrendataris.

## Flux d’arrencada de l’arrendatari {#tenant-bootstrap-flow}

Les integracions que creen o modifiquen arrendataris haurien de seguir aquest ordre:

1. Resoldre el registre del registre d’arrendataris i el model d’aïllament.
2. Crear o verificar l’escriptor de la base de dades de l’arrendatari.
3. Inicialitzar l’esquema de l’arrendatari.
4. Proveir usuaris de l’arrendatari.
5. Registrar l’encaminament de l’arrendatari i els camins del sistema de fitxers.
6. Executar la verificació de la migració abans d’exposar l’arrendatari.

No assumeixis que un arrendatari sobirà pot reutilitzar la connexió a la base de dades de la xarxa. Utilitza el registre d’arrendataris i les abstraccions d’escriptor proporcionades pel complement.

## SSO i hooks REST {#sso-and-rest-hooks}

L’autoinici de sessió sense estat de l’arrendatari utilitza tokens de curta durada amb una declaració de propòsit, protecció contra repetició JTI, un límit de caducitat i fixació d’origen. Les integracions que afegeixen botons d’inici de sessió o enllaços de gestió remota haurien de generar visites a l’arrendatari mitjançant el flux SSO admès en lloc de construir directament URL d’inici de sessió de l’arrendatari.

Els esdeveniments d’auditoria de l’API del costat de la xarxa i els resums diaris estan disponibles per a passarel·les d’arrendataris sobirans. Utilitza aquests registres quan depuris sistemes externs que criden endpoints del cicle de vida de l’arrendatari.

## URL d’accions de client sobirà {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 encamina les accions de client d’arrendataris sobirans cap al lloc principal per als fluxos de compte, checkout, facturació, factura, lloc, canvi de plantilla i mapatge de domini. Les integracions que renderitzen enllaços de gestió del costat de l’arrendatari haurien d’apuntar aquestes accions al panell de client del lloc principal i incloure una destinació de retorn validada quan l’usuari hagi de poder tornar a l’arrendatari després de completar l’acció.

Utilitza l’embolcall SSO del nucli per als enllaços de gestió entre dominis:

```php
$url = wu_with_sso($main_site_customer_url);
```

L’URL generada continua sent filtrable mitjançant `wu_sso_url`, que rep l’URL SSO, l’usuari actual, l’ID del lloc de destinació i el context de redirecció. Els complements poden utilitzar aquest filtre per afegir context específic del proveïdor o per substituir l’URL del bròker tot preservant la validació de tokens d’Ultimate Multisite.

No dupliquis l’estat de membresia, factura, adreça de facturació, plantilla o gestió de domini dins de l’arrendatari sobirà. Tracta el tauler de l’arrendatari com el llançador i el panell de client del lloc principal com el sistema de registre per a les accions gestionades.

## Verificació de migració {#migration-verification}

Després que una migració o una integració de cicle de vida canviï dades de l’arrendatari, executa les portes de verificació:

- `wp tenant verify-no-legacy --site=<site-id>` confirma que l’arrendatari ja no depèn de camins heretats del costat de la xarxa.
- `wp tenant verify-sovereign-push --site=<site-id>` confirma que les tasques de push sobirà es poden processar i buidar.

Les integracions haurien de tractar una verificació fallida com un bloqueig de desplegament i evitar marcar un arrendatari com a actiu fins que la fallada estigui resolta.

## Supressió de l’arrendatari {#tenant-deletion}

Els fluxos de supressió haurien de cridar el camí de desmuntatge del complement perquè es netegin les credencials de la base de dades de l’arrendatari. Les integracions externes poden eliminar recursos del proveïdor després que el desmuntatge tingui èxit, però no haurien de suprimir bases de dades ni carpetes de l’amfitrió mentre la verificació o les tasques de push asíncrones encara s’estiguin executant.

## Encaminador de base de dades obsolet {#deprecated-database-router}

El `Database_Router` heretat ha estat substituït per un stub de deprecació. Les integracions noves haurien de resoldre els arrendataris mitjançant les API actuals de l’encaminador de lloc i del registre d’arrendataris en lloc de dependre de l’antiga classe d’encaminador.
