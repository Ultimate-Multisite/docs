---
title: Integrazzjoni ta’ Multi-Tenancy
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integrazzjoni ta' Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 jibdel diversi punti ta' kuntatt ta' integrazzjoni għal kerrejja sovrani, verifika tal-migrazzjoni, u awtomazzjoni taċ-ċiklu tal-ħajja tal-kerrejja.

## Fluss tal-bootstrap tal-kerrej {#tenant-bootstrap-flow}

Integrazzjonijiet li joħolqu jew jimmodifikaw kerrejja għandhom isegwu dan l-ordni:

1. Issolvi r-rekord tar-reġistru tal-kerrej u l-mudell ta' iżolament.
2. Oħloq jew ivverifika l-kittieb tad-database tal-kerrej.
3. Ibda l-bootstrap tal-iskema tal-kerrej.
4. Ipprovdi utenti tal-kerrej.
5. Irreġistra r-routing tal-kerrej u l-mogħdijiet tas-sistema tal-fajls.
6. Ħaddem il-verifika tal-migrazzjoni qabel tesponi l-kerrej.

Tassumix li kerrej sovran jista' jerġa' juża l-konnessjoni mad-database tan-netwerk. Uża r-reġistru tal-kerrej u l-astrazzjonijiet tal-kittieb ipprovduti mill-add-on.

## Hooks ta' SSO u REST {#sso-and-rest-hooks}

L-awtologin bla stat tal-kerrej juża tokens ta' ħajja qasira b'pretensjoni ta' skop, protezzjoni kontra ripetizzjoni JTI, limitu ta' skadenza, u rbit mal-oriġini. Integrazzjonijiet li jżidu buttuni tal-login jew links ta' ġestjoni remota għandhom jiġġeneraw żjarat tal-kerrej permezz tal-fluss SSO appoġġjat minflok jibnu URLs tal-login tal-kerrej direttament.

Avvenimenti ta' awditjar tal-API min-naħa tan-netwerk u sommarji ta' kuljum huma disponibbli għal gateways ta' kerrejja sovrani. Uża dawk ir-reġistri meta tiddebuggja sistemi esterni li jsejħu endpoints taċ-ċiklu tal-ħajja tal-kerrej.

## URLs ta' azzjonijiet tal-klijent sovran {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 jirrotta azzjonijiet tal-klijenti ta' kerrejja sovrani lura lejn is-sit ewlieni għal flussi ta' Account, checkout, billing, fattura, sit, bidla ta' template, u mapping tad-domain. Integrazzjonijiet li jirrendu links ta' ġestjoni min-naħa tal-kerrej għandhom jippuntaw dawk l-azzjonijiet lejn il-panel tal-klijent tas-sit ewlieni u jinkludu mira ta' ritorn ivvalidata meta l-utent għandu jkun jista' jinnaviga lura lejn il-kerrej wara li jlesti l-azzjoni.

Uża l-wrapper SSO ewlieni għal links ta' ġestjoni bejn domains:

```php
$url = wu_with_sso($main_site_customer_url);
```

Il-URL iġġenerat jibqa' jista' jiġi ffiltrat permezz ta' `wu_sso_url`, li jirċievi l-URL SSO, l-utent attwali, l-ID tas-sit fil-mira, u l-kuntest tar-redirect. Add-ons jistgħu jużaw dak il-filtru biex iżidu kuntest speċifiku għall-fornitur jew biex jissostitwixxu l-URL tal-broker filwaqt li jippreservaw il-validazzjoni tat-token ta' Ultimate Multisite.

Tidduplikax l-istat tal-membership, fattura, indirizz tal-billing, template, jew ġestjoni tad-domain ġewwa l-kerrej sovran. Ittratta d-dashboard tal-kerrej bħala l-launcher u l-panel tal-klijent tas-sit ewlieni bħala s-sistema tar-rekord għall-azzjonijiet ġestiti.

## Verifika tal-migrazzjoni {#migration-verification}

Wara li integrazzjoni ta' migrazzjoni jew ċiklu tal-ħajja tbiddel id-data tal-kerrej, ħaddem il-gates tal-verifika:

- `wp tenant verify-no-legacy --site=<site-id>` jikkonferma li l-kerrej m'għadux jiddependi fuq mogħdijiet legacy min-naħa tan-netwerk.
- `wp tenant verify-sovereign-push --site=<site-id>` jikkonferma li xogħlijiet ta' push sovran jistgħu jipproċessaw u jitbattlu.

L-integrazzjonijiet għandhom jittrattaw verifika li tfalli bħala ostaklu għad-deployment u jevitaw li jimmarkaw kerrej bħala live sakemm il-falliment jiġi solvut.

## Tħassir tal-kerrej {#tenant-deletion}

Il-flussi tat-tħassir għandhom isejħu l-mogħdija tat-teardown tal-add-on sabiex il-kredenzjali tad-database tal-kerrej jitnaddfu. Integrazzjonijiet esterni jistgħu jneħħu riżorsi tal-fornitur wara li t-teardown jirnexxi, iżda m'għandhomx iħassru databases jew folders tal-host waqt li l-verifika jew xogħlijiet ta' push asinkroni għadhom għaddejjin.

## Router tad-database deprecated {#deprecated-database-router}

Il-legacy `Database_Router` ġie sostitwit bi stub ta' deprecation. Integrazzjonijiet ġodda għandhom isolvu l-kerrejja permezz tar-router tas-sit attwali u l-APIs tar-reġistru tal-kerrej minflok jiddependu fuq il-klassi antika tar-router.
