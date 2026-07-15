---
title: Yekgirtina Pir-Kirêdariyê
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Yekgirtina Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 çend xalên yekgirtinê ji bo tenantên serwer, piştrastkirina koçberiyê, û otomasyona jiyana tenantê diguherîne.

## Herikîna destpêkirina tenantê {#tenant-bootstrap-flow}

Yekgirtinên ku tenantan diafirînin an diguherînin divê vê rêzê bişopînin:

1. Tomara registry ya tenantê û moda veqetandinê çareser bikin.
2. Nivîskarê database ya tenantê biafirînin an piştrast bikin.
3. Şemaya tenantê dest pê bikin.
4. Bikarhênerên tenantê amade bikin.
5. Rêwîtî û rêyên filesystem ên tenantê tomar bikin.
6. Berî eşkerekirina tenantê piştrastkirina koçberiyê bimeşînin.

Wisa nehesibînin ku tenantek serwer dikare girêdana database ya torê ji nû ve bikar bîne. Registry ya tenantê û abstraksiyonên nivîskarê ku ji aliyê addon ve tên peyda kirin bikar bînin.

## Hookên SSO û REST {#sso-and-rest-hooks}

Têketina otomatîk a tenantê ya bê rewş tokenên demkurt bikar tîne, bi îdîaya armancê, parastina dubareya JTI, sînorê qedandinê, û girêdana origin. Yekgirtinên ku bişkokên têketinê an girêdanên rêvebirina dûr zêde dikin divê serdanên tenantê bi herikîna SSO ya piştgirîkirî biafirînin, ne ku URLên têketina tenantê rasterast çêkin.

Bûyerên kontrola API ya aliyê torê û kurteyên rojane ji bo dergehên tenantên serwer hene. Dema ku hûn pergalên derveyî yên ku endpointên jiyana tenantê bang dikin çewtîgirî dikin, wan logan bikar bînin.

## URLên kiryarên kiryarê yên serwer {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 kiryarên kiryarê yên tenantên serwer vedigerîne malpera sereke ji bo herikînên Account, checkout, hesabkirin, fatûre, malper, guhartina şablonê, û nexşandina domainê. Yekgirtinên ku girêdanên rêvebirinê yên aliyê tenantê nîşan didin divê wan kiryaran ber bi panela kiryarê ya malpera sereke ve bibin û dema bikarhêner divê karibe piştî qedandina kiryarê vegere tenantê, armanceke vegerê ya piştrastkirî tê de hebe.

Ji bo girêdanên rêvebirinê yên di navbera domainan de, pêça bingehîn a SSO bikar bînin:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL ya çêkirî hîn jî bi `wu_sso_url` dikare were parzûnkirin; ew URL ya SSO, bikarhênerê heyî, ID ya malpera armancê, û çarçoveya vegerandinê werdigire. Add-on dikarin wê parzûnê bikar bînin da ku çarçoveya taybet a peydakêrê lê zêde bikin an URL ya brokerê biguherînin, di heman demê de piştrastkirina token a Ultimate Multisite biparêzin.

Rewşa endamtiyê, fatûreyê, navnîşana hesabkirinê, şablonê, an rêvebirina domainê di hundirê tenantê serwer de dubare nekin. Dashboard ya tenantê wekî destpêker û panela kiryarê ya malpera sereke wekî pergala tomara kiryarên rêvebirî bibînin.

## Piştrastkirina koçberiyê {#migration-verification}

Piştî ku koçberiyek an yekgirtinek jiyana tenantê daneyên tenantê diguherîne, dergehên piştrastkirinê bimeşînin:

- `wp tenant verify-no-legacy --site=<site-id>` piştrast dike ku tenant êdî xwe dispêre rêyên kevn ên aliyê torê.
- `wp tenant verify-sovereign-push --site=<site-id>` piştrast dike ku karên push ên serwer dikarin bên pêvajokirin û vala bibin.

Yekgirtin divê piştrastkirina têkçûyî wekî astengiyeke belavkirinê bibînin û heta têkçûn çareser nebe, tenantê wekî zindî nîşan nedin.

## Jêbirina tenantê {#tenant-deletion}

Herikînên jêbirinê divê rêya hilweşandina addon bang bikin da ku belgeyên database ya tenantê bên paqijkirin. Yekgirtinên derveyî dikarin piştî ku hilweşandin bi ser bikeve çavkaniyên peydakêrê rakin, lê divê database an peldankên hostê nejêbirin dema ku piştrastkirin an karên push ên async hîn dimeşin.

## Routera database ya kevn bûyî {#deprecated-database-router}

`Database_Router` a kevn bi stubek deprecation hatiye guhertin. Yekgirtinên nû divê tenantan bi riya routera malpera heyî û APIyên registry ya tenantê çareser bikin, ne ku xwe bispêrin pola routera kevn.
