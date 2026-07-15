---
title: Kubatanidzwa kwekushandiswa nevazhinji
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Kubatanidza Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 inoshandura nzvimbo dzinoverengeka dzekubatanidza dzevaridzi vakazvimirira, kusimbisa kutamiswa, uye otomatiki yehupenyu hwemuridzi.

## Kuyerera kwekutanga muridzi {#tenant-bootstrap-flow}

Kubatanidza kunogadzira kana kugadzirisa varidzi kunofanira kutevera hurongwa uhu:

1. Tsvaga rekodhi yeregistry yemuridzi uye modhi yekuparadzanisa.
2. Gadzira kana simbisa munyori wedhatabhesi remuridzi.
3. Tanga schema yemuridzi.
4. Govera vashandisi vemuridzi.
5. Nyoresa nzira dzekufambisa dzemuridzi uye nzira dzefilesystem.
6. Mhanyisa kusimbisa kutamiswa usati waburitsa muridzi.

Usafungidzira kuti muridzi akazvimirira anogona kushandisazve kubatana kwedhatabhesi renetwork. Shandisa registry yemuridzi uye maabstraction emunyori anopihwa neaddon.

## SSO uye REST hooks {#sso-and-rest-hooks}

Autologin yemuridzi isina mamiriro inoshandisa tokens dzinorarama nguva pfupi dzine purpose claim, JTI replay protection, muganhu wekupera, uye origin pinning. Kubatanidza kunowedzera mabhatani ekupinda kana malink ekutonga ari kure kunofanira kugadzira kushanya kwemuridzi kuburikidza nekuyerera kweSSO kunotsigirwa panzvimbo pekuvaka maURL ekupinda emuridzi zvakananga.

Zviitiko zvekuongorora API padivi renetwork uye pfupiso dzezuva nezuva zviripo kumagedhi evaridzi vakazvimirira. Shandisa malog iwayo pakugadzirisa masisitimu ekunze anodana endpoints dzehupenyu hwemuridzi.

## MaURL ezviito zvemutengi akazvimirira {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 inodzosa zviito zvemutengi wemuridzi akazvimirira kusaiti huru yezviitiko zveaccount, checkout, billing, invoice, saiti, kuchinja template, uye domain-mapping. Kubatanidza kunoratidza malink ekutonga padivi remuridzi kunofanira kunangisa zviito izvozvo kupaneli yemutengi yesaiti huru uye kusanganisira chinangwa chekudzoka chakasimbiswa kana mushandisi achifanira kukwanisa kudzokera kumuridzi mushure mekupedza chiito.

Shandisa core SSO wrapper kumalink ekutonga anoyambuka domain:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL yakagadzirwa inoramba ichikwanisa kusefwa kuburikidza ne`wu_sso_url`, iyo inogamuchira SSO URL, mushandisi aripo, ID yesaiti yakanangwa, uye mamiriro ekudzosera. Maadd-on anogona kushandisa filter iyoyo kuwedzera mamiriro akanangana nemupi kana kutsiva broker URL uku achichengetedza kusimbiswa kwetoken kweUltimate Multisite.

Usadzokorore mamiriro emembership, invoice, billing-address, template, kana domain-management mukati memuridzi akazvimirira. Bata dashboard yemuridzi semutangisi uye paneli yemutengi yesaiti huru sesisitimu yerekodhi yezviito zvinotungamirirwa.

## Kusimbisa kutamiswa {#migration-verification}

Mushure mekunge kutamiswa kana kubatanidza kwehupenyu hwechikamu kuchinja data remuridzi, mhanyisa magedhi ekusimbisa:

- `wp tenant verify-no-legacy --site=<site-id>` inosimbisa kuti muridzi haachatsamiri panzira dzechinyakare padivi renetwork.
- `wp tenant verify-sovereign-push --site=<site-id>` inosimbisa kuti mabasa e sovereign push anogona kugadzirisa uye kupedza.

Kubatanidza kunofanira kubata kusimbisa kwakundikana sechinovhara deployment uye kudzivisa kumaka muridzi seari live kusvikira kukundikana kwagadziriswa.

## Kudzima muridzi {#tenant-deletion}

Kuyerera kwekudzima kunofanira kudana nzira yeaddon teardown kuitira kuti credentials dzedhatabhesi remuridzi dzicheneswe. Kubatanidza kwekunze kunogona kubvisa zviwanikwa zvemupi mushure mekunge teardown yabudirira, asi hakufaniri kudzima madhatabhesi kana maforodha ehost apo kusimbisa kana mabasa easync push achiri kumhanya.

## Database router yakare {#deprecated-database-router}

`Database_Router` yekare yatsiviwa ne deprecation stub. Kubatanidza kutsva kunofanira kutsvaga varidzi kuburikidza ne current site router uye tenant registry APIs panzvimbo pekutsamira pakirasi yerouter yekare.
