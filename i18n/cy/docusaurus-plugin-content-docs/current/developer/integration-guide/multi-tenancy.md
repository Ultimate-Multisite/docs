---
title: Integreiddio Aml-denantiaeth
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integreiddio Aml-Denantiaeth {#multi-tenancy-integration}

Ultimate Multisite: Mae Aml-Denantiaeth 1.2.0 yn newid sawl pwynt cyffwrdd integreiddio ar gyfer tenantiaid sofran, dilysu mudo, ac awtomeiddio cylch bywyd tenantiaid.

## Llif cychwyn tenant {#tenant-bootstrap-flow}

Dylai integreiddiadau sy’n creu neu’n addasu tenantiaid ddilyn y drefn hon:

1. Datrys cofnod cofrestrfa’r tenant a’r model ynysu.
2. Creu neu ddilysu ysgrifennwr cronfa ddata’r tenant.
3. Cychwyn sgema’r tenant.
4. Darparu defnyddwyr y tenant.
5. Cofrestru llwybro’r tenant a llwybrau’r system ffeiliau.
6. Rhedeg dilysu mudo cyn datgelu’r tenant.

Peidiwch â chymryd yn ganiataol y gall tenant sofran ailddefnyddio cysylltiad cronfa ddata’r rhwydwaith. Defnyddiwch gofrestrfa’r tenant a’r haniaethau ysgrifennwr a ddarperir gan yr ategyn.

## Bachau SSO a REST {#sso-and-rest-hooks}

Mae awtofewngofnodi tenant di-gyflwr yn defnyddio tocynnau byrhoedlog gyda hawliad diben, amddiffyniad ailchwarae JTI, cap dod i ben, a phinio tarddiad. Dylai integreiddiadau sy’n ychwanegu botymau mewngofnodi neu ddolenni rheoli o bell gynhyrchu ymweliadau tenant drwy’r llif SSO a gefnogir yn hytrach nag adeiladu URLs mewngofnodi tenant yn uniongyrchol.

Mae digwyddiadau archwilio API ar ochr y rhwydwaith a chrynodebau dyddiol ar gael ar gyfer pyrth tenantiaid sofran. Defnyddiwch y logiau hynny wrth ddadfygio systemau allanol sy’n galw endpoints cylch bywyd tenantiaid.

## URLs gweithredoedd cwsmeriaid sofran {#sovereign-customer-action-urls}

Mae Ultimate Multisite v2.13.0 yn llwybro gweithredoedd cwsmer tenant-sofran yn ôl i’r prif safle ar gyfer llifoedd Account, checkout, bilio, anfoneb, safle, newid templed, a mapio parth. Dylai integreiddiadau sy’n rendro dolenni rheoli ar ochr y tenant gyfeirio’r gweithredoedd hynny at banel cwsmer y prif safle a chynnwys targed dychwelyd wedi’i ddilysu pan ddylai’r defnyddiwr allu llywio’n ôl i’r tenant ar ôl cwblhau’r weithred.

Defnyddiwch y lapio SSO craidd ar gyfer dolenni rheoli traws-barth:

```php
$url = wu_with_sso($main_site_customer_url);
```

Mae’r URL a gynhyrchir yn parhau i fod yn hidladwy drwy `wu_sso_url`, sy’n derbyn yr URL SSO, y defnyddiwr presennol, ID y safle targed, a chyd-destun yr ailgyfeirio. Gall ategion ddefnyddio’r hidlydd hwnnw i atodi cyd-destun sy’n benodol i ddarparwr neu i ddisodli URL y brocer gan gadw dilysu tocyn Ultimate Multisite.

Peidiwch â dyblygu cyflwr aelodaeth, anfoneb, cyfeiriad bilio, templed, neu reoli parth y tu mewn i’r tenant sofran. Triniwch ddangosfwrdd y tenant fel y lanswyr a phanel cwsmer y prif safle fel y system gofnod ar gyfer gweithredoedd a reolir.

## Dilysu mudo {#migration-verification}

Ar ôl i integreiddiad mudo neu gylch bywyd newid data tenant, rhedwch y gatiau dilysu:

- `wp tenant verify-no-legacy --site=<site-id>` yn cadarnhau nad yw’r tenant bellach yn dibynnu ar lwybrau etifeddol ar ochr y rhwydwaith.
- `wp tenant verify-sovereign-push --site=<site-id>` yn cadarnhau y gall swyddi gwthio sofran brosesu a gwagio.

Dylai integreiddiadau drin dilysu aflwyddiannus fel rhwystr i ddefnyddio ac osgoi marcio tenant yn fyw nes bod y methiant wedi’i ddatrys.

## Dileu tenant {#tenant-deletion}

Dylai llifoedd dileu alw llwybr datgomisiynu’r ategyn fel bod manylion mewngofnodi cronfa ddata’r tenant yn cael eu glanhau. Gall integreiddiadau allanol ddileu adnoddau darparwr ar ôl i’r datgomisiynu lwyddo, ond ni ddylent ddileu cronfeydd data na ffolderi’r gwesteiwr tra bod dilysu neu swyddi gwthio anghydamserol yn dal i redeg.

## Llwybrydd cronfa ddata anghymeradwy {#deprecated-database-router}

Mae’r `Database_Router` etifeddol wedi’i ddisodli gan stub anghymeradwyo. Dylai integreiddiadau newydd ddatrys tenantiaid drwy lwybrydd safle presennol ac APIs cofrestrfa tenantiaid yn hytrach na dibynnu ar yr hen ddosbarth llwybrydd.
