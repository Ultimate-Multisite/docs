---
title: Amalachadh Ioma-mhàladaireachd
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Amalachadh Multi-Tenancy

Ultimate Multisite: Bidh Multi-Tenancy 1.2.0 ag atharrachadh grunn phuingean-amalachaidh airson màladairean uachdaranach, dearbhadh imrich, agus fèin-obrachadh cuairt-beatha màladair.

## Sruth tòiseachaidh màladair {#tenant-bootstrap-flow}

Bu chòir do dh’amalachaidhean a chruthaicheas no a dh’atharraicheas màladairean an t-òrdugh seo a leantainn:

1. Fuasgail clàr clàraidh a’ mhàladair agus am modail dealachaidh.
2. Cruthaich no dearbhaich sgrìobhadair stòr-dàta a’ mhàladair.
3. Tòisich sgeama a’ mhàladair.
4. Ullachaich luchd-cleachdaidh a’ mhàladair.
5. Clàraich sligheachadh a’ mhàladair agus slighean an t-siostaim-fhaidhlichean.
6. Ruith dearbhadh imrich mus nochd thu am màladair.

Na gabh ris gun urrainn do mhàladair uachdaranach ceangal stòr-dàta an lìonraidh ath-chleachdadh. Cleachd clàradh a’ mhàladair agus eas-tharraingichean an sgrìobhadair a tha an tuilleadan a’ toirt seachad.

## SSO agus dubhain REST {#sso-and-rest-hooks}

Bidh fèin-logadh a-steach màladair gun staid a’ cleachdadh tokens geàrr-bheò le tagradh adhbhair, dìon ath-chluich JTI, crìoch crìochnachaidh, agus prìneadh tùs. Bu chòir do dh’amalachaidhean a chuireas putanan logaidh a-steach no ceanglaichean riaghlaidh iomallach ris tursan màladair a ghineadh tron t-sruth SSO le taic an àite URLan logaidh a-steach màladair a thogail gu dìreach.

Tha tachartasan sgrùdaidh API air taobh an lìonraidh agus geàrr-chunntasan làitheil rim faighinn airson geataichean màladair uachdaranaich. Cleachd na logaichean sin nuair a bhios tu a’ dì-bhugachadh shiostaman taobh a-muigh a bhios a’ gairm endpointan cuairt-beatha màladair.

## URLan gnìomh teachdaiche uachdaranaich {#sovereign-customer-action-urls}

Bidh Ultimate Multisite v2.13.0 a’ sligheachadh ghnìomhan teachdaiche màladair-uachdaranaich air ais chun phrìomh làraich airson sruthan Account, checkout, bileachaidh, fàirdeal, làraich, atharrachadh teamplaid, agus mapadh raoin. Bu chòir do dh’amalachaidhean a nì ceanglaichean riaghlaidh air taobh a’ mhàladair na gnìomhan sin a stiùireadh gu pannal teachdaiche a’ phrìomh làraich agus targaid tilleadh dhearbhaichte a ghabhail a-steach nuair a bu chòir don neach-cleachdaidh a bhith comasach air seòladh air ais chun mhàladair às dèidh dha an gnìomh a chrìochnachadh.

Cleachd an còmhdach SSO bunaiteach airson ceanglaichean riaghlaidh thar-raoin:

```php
$url = wu_with_sso($main_site_customer_url);
```

Tha an URL a thèid a ghineadh fhathast comasach a shìoladh tro `wu_sso_url`, a gheibh an URL SSO, an neach-cleachdaidh làithreach, ID na làraich targaide, agus co-theacsa ath-stiùiridh. Faodaidh tuilleadain an criathrag sin a chleachdadh gus co-theacsa sònraichte don t-solaraiche a chur ris no gus URL a’ bhròcaire a chur na àite fhad ’s a ghlèidheas iad dearbhadh token Ultimate Multisite.

Na dùblaich staid ballrachd, fàirdeal, seòladh-bileachaidh, teamplaid, no riaghladh raoin am broinn a’ mhàladair uachdaranaich. Làimhsich dashboard a’ mhàladair mar an lòinsear agus pannal teachdaiche a’ phrìomh làraich mar shiostam a’ chlàir airson gnìomhan riaghlaichte.

## Dearbhadh imrich {#migration-verification}

Às dèidh do dh’imrich no amalachadh cuairt-beatha dàta màladair atharrachadh, ruith na geataichean dearbhaidh:

- `wp tenant verify-no-legacy --site=<site-id>` dearbhaidh e nach eil am màladair an urra tuilleadh ri slighean dìleabach air taobh an lìonraidh.
- `wp tenant verify-sovereign-push --site=<site-id>` dearbhaidh e gun urrainn do dh’obraichean putaidh uachdaranaich giullachd agus drèanadh.

Bu chòir do dh’amalachaidhean dearbhadh a dh’fhàillig a làimhseachadh mar bhacadh foillseachaidh agus seachnadh màladair a chomharrachadh beò gus am bi am fàilligeadh air a rèiteachadh.

## Sguabadh às màladair {#tenant-deletion}

Bu chòir do shruthan sguabaidh às slighe leagail an tuilleadain a ghairm gus an tèid teisteanasan stòr-dàta a’ mhàladair a ghlanadh. Faodaidh amalachadh taobh a-muigh goireasan solaraiche a thoirt air falbh às dèidh don leagail soirbheachadh, ach cha bu chòir dhaibh stòran-dàta no pasganan aoigheachd a sguabadh às fhad ’s a tha dearbhadh no obraichean putaidh async fhathast a’ ruith.

## Router stòr-dàta a chaidh a chur à cleachdadh {#deprecated-database-router}

Chaidh stub dì-mholachaidh a chur an àite an `Database_Router` dhìleabaich. Bu chòir do dh’amalachaidhean ùra màladairean fhuasgladh tro na APIan router làraich làithrich agus clàraidh màladair seach a bhith an urra ris an t-seann chlas router.
