---
title: Ihuzwa ry’imikode myinshi
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Ihuzwa rya Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 ihindura ahantu henshi ho guhuriza ibikorwa ku bakodesha bigenga, igenzura ryimurwa, n’iyikora ry’ubuzima bw’umukodesha.

## Uruhererekane rwo gutangiza umukodesha

Ibihuzwa bikora cyangwa bihindura abakodesha bigomba gukurikiza uru rutonde:

1. Shaka inyandiko y’igitabo cy’abakodesha n’uburyo bwo kubatandukanya.
2. Kora cyangwa wemeze umwanditsi w’ububiko bw’amakuru bw’umukodesha.
3. Tangiza imiterere y’amakuru y’umukodesha.
4. Tegura abakoresha b’umukodesha.
5. Andikisha imiyoborere y’inzira z’umukodesha n’inzira za dosiye muri filesystem.
6. Koresha igenzura ryimurwa mbere yo gushyira umukodesha ahagaragara.

Ntukibwire ko umukodesha wigenga ashobora kongera gukoresha ihuriro ry’ububiko bw’amakuru rya network. Koresha igitabo cy’abakodesha n’uburyo bw’abanditsi bitangwa na addon.

## SSO na REST hooks

Autologin y’umukodesha idafite state ikoresha token zimara igihe gito zifite purpose claim, uburinzi bwa JTI replay, umupaka w’igihe cyo kurangira, no guhambira origin. Ibihuzwa byongeramo buto zo kwinjira cyangwa amahuza yo gucunga kure bigomba gukora gusura umukodesha binyuze mu nzira ya SSO ishyigikiwe aho kubaka tenant login URLs mu buryo butaziguye.

Ibyabaye byo kugenzura API ku ruhande rwa network n’incamake za buri munsi biraboneka ku marembo y’abakodesha bigenga. Koresha izo logs igihe ukemura ibibazo bya systems zo hanze zihamagara tenant lifecycle endpoints.

## URLs z’ibikorwa by’umukiriya wigenga

Ultimate Multisite v2.13.0 iyobora ibikorwa by’umukiriya w’umukodesha wigenga ikabisubiza ku rubuga nyamukuru ku nzira za account, checkout, billing, invoice, site, guhindura template, no guhuza domain. Ibihuzwa bigaragaza amahuza yo gucunga ku ruhande rw’umukodesha bigomba kwerekeza ibyo bikorwa ku main-site customer panel kandi bikongeramo intego yo kugaruka yemejwe igihe umukoresha agomba kuba ashobora gusubira ku mukodesha nyuma yo kurangiza igikorwa.

Koresha core SSO wrapper ku mahuriro yo gucunga hagati ya domains:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL yakozwe ikomeza gushobora guhindurwa binyuze muri `wu_sso_url`, yakira SSO URL, umukoresha uriho, target site ID, na redirect context. Add-ons zishobora gukoresha iyo filter kugira ngo zongeremo context yihariye y’umutanga cyangwa zisimbuze broker URL ari nako zigumana igenzura rya token rya Ultimate Multisite.

Ntukopiye state ya membership, invoice, billing-address, template, cyangwa domain-management imbere mu mukodesha wigenga. Fata tenant dashboard nk’ahantu ho gutangiriza ibikorwa, naho main-site customer panel uyifate nka system y’inyandiko yemewe ku bikorwa bicungwa.

## Igenzura ryimurwa

Nyuma y’uko ihimurwa cyangwa ihuzwa ry’ubuzima rihinduye amakuru y’umukodesha, koresha amarembo y’igenzura:

- `wp tenant verify-no-legacy --site=<site-id>` yemeza ko umukodesha atagishingira ku nzira za kera zo ku ruhande rwa network.
- `wp tenant verify-sovereign-push --site=<site-id>` yemeza ko sovereign push jobs zishobora gutunganya no kurangiza umurongo wazo.

Ibihuzwa bigomba gufata igenzura ryananiranye nk’inzitizi yo gushyira ku mugaragaro, kandi bikirinda gushyira umukodesha live kugeza ikibazo gikemutse.

## Gusiba umukodesha

Inzira zo gusiba zigomba guhamagara inzira ya teardown ya addon kugira ngo ibyangombwa by’ububiko bw’amakuru bw’umukodesha bisukukurwe. Ibihuzwa byo hanze bishobora gukuraho resources z’umutanga nyuma y’uko teardown itsinze, ariko ntibigomba gusiba ububiko bw’amakuru cyangwa folders bya host mu gihe igenzura cyangwa async push jobs bikirimo gukora.

## Database router itagikoreshwa

`Database_Router` ya kera yasimbuwe na deprecation stub. Ibihuzwa bishya bigomba gushaka abakodesha binyuze muri APIs za site router iriho ubu n’igitabo cy’abakodesha aho gushingira kuri router class ya kera.
