---
title: Kuphatikiza kwa Kukhala ndi Obwereka Ambiri
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Kuphatikiza kwa Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 imasintha malo angapo olumikizirana pa ma tenant odziyimira pawokha, kutsimikizira kusamuka, ndi automation ya moyo wa tenant.

## Njira yoyambitsa tenant

Kuphatikizana komwe kumapanga kapena kusintha ma tenant kuyenera kutsatira dongosolo ili:

1. Pezani mbiri ya registry ya tenant ndi mtundu wa isolation.
2. Pangani kapena tsimikizirani writer wa database ya tenant.
3. Yambitsani schema ya tenant.
4. Konzani ogwiritsa ntchito a tenant.
5. Lembetsani routing ya tenant ndi njira za filesystem.
6. Thamangitsani kutsimikizira kusamuka musanawonetse tenant.

Musaganize kuti tenant wodziyimira pawokha angagwiritsenso ntchito kulumikizana kwa database ya network. Gwiritsani ntchito registry ya tenant ndi ma abstraction a writer omwe amaperekedwa ndi addon.

## SSO ndi REST hooks

Autologin ya tenant yopanda state imagwiritsa ntchito ma token a nthawi yochepa okhala ndi purpose claim, chitetezo cha JTI replay, malire a kutha ntchito, ndi origin pinning. Kuphatikizana komwe kumawonjezera mabatani olowera kapena ma link a remote management kuyenera kupanga maulendo a tenant kudzera mu njira ya SSO yothandizidwa m'malo mopanga ma URL olowera a tenant mwachindunji.

Zochitika za API audit za mbali ya network ndi zidule za tsiku ndi tsiku zilipo pa ma gateway a tenant odziyimira pawokha. Gwiritsani ntchito ma log amenewo mukamakonza mavuto a machitidwe akunja omwe amaitana ma endpoint a moyo wa tenant.

## Ma URL a zochita za kasitomala wodziyimira pawokha

Ultimate Multisite v2.13.0 imabwezera zochita za kasitomala wa tenant wodziyimira pawokha ku site yaikulu pa ma flow a account, checkout, billing, invoice, site, kusintha template, ndi domain-mapping. Kuphatikizana komwe kumawonetsa ma link a management kumbali ya tenant kuyenera kulozera zochita zimenezo ku panel ya kasitomala ya site yaikulu ndipo kuphatikize return target yotsimikiziridwa pamene wogwiritsa ntchito ayenera kukhala ndi mwayi wobwerera ku tenant atamaliza zochitazo.

Gwiritsani ntchito wrapper ya core SSO pa ma link a management a cross-domain:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL yopangidwa imakhalabe yotheka kusefedwa kudzera mu `wu_sso_url`, yomwe imalandira SSO URL, wogwiritsa ntchito wapano, ID ya site yolunjika, ndi redirect context. Ma add-on angagwiritse ntchito filter imeneyo kuwonjezera context yeniyeni ya provider kapena kusintha broker URL pamene akusunga kutsimikizira kwa token kwa Ultimate Multisite.

Musabwereze state ya membership, invoice, billing-address, template, kapena domain-management mkati mwa tenant wodziyimira pawokha. Tengerani dashboard ya tenant ngati launcher ndipo panel ya kasitomala ya site yaikulu ngati system of record ya zochita zoyendetsedwa.

## Kutsimikizira kusamuka

Pambuyo poti kuphatikizana kwa kusamuka kapena moyo kusinthe data ya tenant, thamangitsani verification gates:

- `wp tenant verify-no-legacy --site=<site-id>` imatsimikizira kuti tenant sakudaliranso njira zakale za mbali ya network.
- `wp tenant verify-sovereign-push --site=<site-id>` imatsimikizira kuti ntchito za sovereign push zingathe kukonza ndi kumaliza.

Kuphatikizana kuyenera kutenga kutsimikizira kolephera ngati cholepheretsa deployment ndipo kupewa kulemba tenant ngati live mpaka kulepherako kutathetsedwa.

## Kuchotsa tenant

Ma flow ochotsa ayenera kuyitana njira ya teardown ya addon kuti zikalata zolowera za database ya tenant zichotsedwe bwino. Kuphatikizana kwakunja kungachotse zinthu za provider pambuyo poti teardown yapambana, koma sikuyenera kuchotsa ma database kapena mafoda a host pamene verification kapena ntchito za async push zikadali zikuyenda.

## Database router yakale

`Database_Router` yakale yasinthidwa ndi deprecation stub. Kuphatikizana kwatsopano kuyenera kupeza ma tenant kudzera mu site router yapano ndi ma API a tenant registry m'malo modalira class yakale ya router.
