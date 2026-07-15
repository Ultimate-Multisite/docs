---
title: Kev sib txuas ua ke rau ntau tus neeg xauj siv
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Kev Sib Xyaw Rau Kev Muaj Ntau Tus Neeg Xauj

Ultimate Multisite: Kev Muaj Ntau Tus Neeg Xauj 1.2.0 hloov ntau qhov chaw sib txuas rau cov neeg xauj ywj pheej, kev txheeb xyuas kev tsiv teb tsaws, thiab kev ua kom lub neej voj voog ntawm tus neeg xauj khiav tau nws tus kheej.

## Txoj kev pib tus neeg xauj {#tenant-bootstrap-flow}

Cov kev sib xyaw uas tsim lossis hloov cov neeg xauj yuav tsum ua raws li qhov kev txiav txim no:

1. Nrhiav cov ntaub ntawv sau npe tus neeg xauj thiab tus qauv cais.
2. Tsim lossis txheeb xyuas tus sau ntawv rau lub database ntawm tus neeg xauj.
3. Pib lub schema ntawm tus neeg xauj.
4. Npaj cov neeg siv rau tus neeg xauj.
5. Sau npe kev coj kev thiab cov path ntawm filesystem rau tus neeg xauj.
6. Khiav kev txheeb xyuas kev tsiv teb tsaws ua ntej qhib tus neeg xauj rau siv.

Tsis txhob xav tias ib tus neeg xauj ywj pheej siv tau kev txuas network database rov qab. Siv tenant registry thiab writer abstractions uas qhov ntxiv muab.

## SSO thiab REST hooks {#sso-and-rest-hooks}

Kev autologin rau tus neeg xauj uas tsis khaws xeev siv cov token uas nyob luv luv nrog purpose claim, JTI replay protection, expiry cap, thiab origin pinning. Cov kev sib xyaw uas ntxiv khawm nkag lossis link tswj deb yuav tsum tsim kev mus saib tus neeg xauj los ntawm SSO flow uas txhawb lawm es tsis txhob tsim tenant login URLs ncaj qha.

Cov API audit events thiab daily summaries sab network muaj rau cov sovereign tenant gateways. Siv cov log ntawd thaum debug cov system sab nraud uas hu rau tenant lifecycle endpoints.

## Cov URL rau kev ua ntawm tus customer ywj pheej {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 coj cov kev ua ntawm customer rau sovereign-tenant rov qab mus rau main site rau account, checkout, billing, invoice, site, template-switching, thiab domain-mapping flows. Cov kev sib xyaw uas tso tawm cov link tswj nyob sab tenant yuav tsum taw cov kev ua ntawd mus rau main-site customer panel thiab suav nrog return target uas tau txheeb xyuas lawm thaum tus neeg siv yuav tsum rov qab mus tau rau tenant tom qab ua tiav qhov kev ua.

Siv core SSO wrapper rau cov link tswj hla domain:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL uas tsim tawm tseem filter tau los ntawm `wu_sso_url`, uas tau txais SSO URL, tus neeg siv tam sim no, target site ID, thiab redirect context. Cov add-ons siv tau filter ntawd los ntxiv context tshwj xeeb rau provider lossis hloov broker URL thaum tseem khaws Ultimate Multisite txoj kev txheeb xyuas token cia.

Tsis txhob luam dua membership, invoice, billing-address, template, lossis domain-management state rau hauv tus neeg xauj ywj pheej. Saib tenant dashboard ua qhov chaw pib, thiab saib main-site customer panel ua system of record rau cov kev ua uas tswj.

## Kev txheeb xyuas kev tsiv teb tsaws {#migration-verification}

Tom qab ib qho kev tsiv teb tsaws lossis lifecycle integration hloov tenant data, khiav cov verification gates:

- `wp tenant verify-no-legacy --site=<site-id>` lees paub tias tus neeg xauj tsis vam khom cov path qub nyob sab network lawm.
- `wp tenant verify-sovereign-push --site=<site-id>` lees paub tias sovereign push jobs ua tau thiab drain tau.

Cov kev sib xyaw yuav tsum saib kev txheeb xyuas uas poob ua deployment blocker thiab zam tsis txhob cim tus neeg xauj tias live kom txog thaum qhov ua tsis tiav ntawd raug kho.

## Kev rho tawm tus neeg xauj {#tenant-deletion}

Cov deletion flows yuav tsum hu rau addon teardown path kom cov credentials rau tenant database raug ntxuav tawm. Cov kev sib xyaw sab nraud yuav tshem tau provider resources tom qab teardown ua tiav, tab sis yuav tsum tsis txhob rho tawm host databases lossis folders thaum kev txheeb xyuas lossis async push jobs tseem tab tom khiav.

## Database router uas tsis pom zoo siv lawm {#deprecated-database-router}

Tus `Database_Router` qub tau raug hloov los ntawm deprecation stub. Cov kev sib xyaw tshiab yuav tsum nrhiav cov neeg xauj los ntawm current site router thiab tenant registry APIs es tsis txhob vam khom router class qub.
