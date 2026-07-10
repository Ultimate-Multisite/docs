---
title: Integratio multitenantiae
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integratio Multi-Tenancy {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 complura puncta integrationis mutat pro inquilinis sui iuris, verificatione migrationis, et automatione cycli vitae inquilini.

## Fluxus initialis inquilini {#tenant-bootstrap-flow}

Integrationes quae inquilinos creant aut mutant hunc ordinem sequi debent:

1. Resolve commentarium registri inquilini et exemplar isolationis.
2. Crea aut verifica scriptorem basis datorum inquilini.
3. Initia schema inquilini.
4. Praebe usores inquilini.
5. Registra itinera inquilini et semitas systematis fasciculorum.
6. Exsequere verificationem migrationis antequam inquilinus exponatur.

Noli praesumere inquilinum sui iuris nexum basis datorum retis iterum uti posse. Utere registro inquilini et abstractionibus scriptoris ab additamento praebitis.

## SSO et hooks REST {#sso-and-rest-hooks}

Autologin inquilini sine statu utitur signis brevis vitae cum declaratione propositi, tutela contra repetitionem JTI, limite exspirationis, et fixatione originis. Integrationes quae globulos intrandi aut nexus administrationis remotae addunt visitationes inquilini per fluxum SSO sustentatum generare debent, non URL intrandi inquilini directe construere.

Eventa auditionis API ex parte retis et summaria cotidiana praesto sunt portis inquilinorum sui iuris. Utere illis actis cum systemata externa quae endpoints cycli vitae inquilini vocant investigas.

## URL actionum emptoris sui iuris {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 actiones emptoris inquilini sui iuris ad situm principale reducit pro Account, solutione emptionis, rationibus solutionis, syngrapha, situ, commutatione exemplaris, et fluxibus coniunctionis dominii. Integrationes quae nexus administrationis ex parte inquilini reddunt debent illas actiones ad tabulam emptoris situs principalis dirigere et destinatum reditus validatum includere cum usor post actionem completam ad inquilinum redire posse debeat.

Utere involucro SSO principali pro nexibus administrationis inter dominia:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL generata manet filtrabilis per `wu_sso_url`, quod accipit URL SSO, usorem praesentem, ID situs destinati, et contextum redirectionis. Additamenta illo filtro uti possunt ut contextum proprium praebitoris adiungant aut URL internuntii substituant, validatione signi Ultimate Multisite servata.

Noli statum sodalitatis, syngraphae, inscriptionis ad rationes, exemplaris, aut administrationis dominii intra inquilinum sui iuris duplicare. Habe Dashboard inquilini ut emissorem et tabulam emptoris situs principalis ut systema authenticum actionum administratarum.

## Verificatio migrationis {#migration-verification}

Postquam migratio aut integratio cycli vitae data inquilini mutat, portas verificationis exsequere:

- `wp tenant verify-no-legacy --site=<site-id>` confirmat inquilinum iam non pendere a semitis hereditariis ex parte retis.
- `wp tenant verify-sovereign-push --site=<site-id>` confirmat opera impulsus sui iuris processus facere et exhauriri posse.

Integrationes verificationem defectam velut obicem deployment tractare debent et vitare ne inquilinum vivum notent donec defectus solvatur.

## Deletio inquilini {#tenant-deletion}

Fluxus deletionis viam dissolutionis additamenti vocare debent ut credentialia basis datorum inquilini purgentur. Integrationes externae facultates praebitoris removere possunt postquam dissolutio feliciter succedit, sed bases datorum hospitis aut folders delere non debent dum verificatio aut opera impulsus asynchrona adhuc currunt.

## Router basis datorum obsoletus {#deprecated-database-router}

Hereditarius `Database_Router` substitutus est stipite deprecationis. Novae integrationes inquilinos per hodiernum router situs et API registri inquilini resolvere debent potius quam a vetere classe router pendere.
