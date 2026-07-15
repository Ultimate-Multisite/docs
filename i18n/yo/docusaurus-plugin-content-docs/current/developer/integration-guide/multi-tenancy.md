---
title: Ìṣepọ̀ Ìyálégbé-púpọ̀
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Ìṣepọ̀ Ìyálégbé-púpọ̀

Ultimate Multisite: Ìyálégbé-púpọ̀ 1.2.0 yí ọ̀pọ̀ ibi ìfọwọ́sowọpọ̀ padà fún àwọn ayálégbé aláṣẹ-ara, ìjẹ́rìí ìṣíra, àti adaṣiṣẹ́ ìgbésí-ayé ayálégbé.

## Ìṣàn ìbẹ̀rẹ̀ ayálégbé {#tenant-bootstrap-flow}

Àwọn ìṣepọ̀ tí ó dá tàbí tún àwọn ayálégbé ṣe gbọ́dọ̀ tẹ̀lé ìlànà yìí:

1. Ṣàwárí àkọsílẹ̀ ìforúkọsílẹ̀ ayálégbé àti àwòkọ ìyàsọ́tọ̀.
2. Dá tàbí jẹ́rìí onkọwe ibi ìpamọ́ dátà ayálégbé.
3. Bẹ̀rẹ̀ àwòkọ ibi ìpamọ́ dátà ayálégbé.
4. Pèsè àwọn oníṣe ayálégbé.
5. Forúkọsílẹ̀ ipa-ọ̀nà ayálégbé àti àwọn ipa-ọ̀nà eto fáìlì.
6. Ṣiṣẹ́ ìjẹ́rìí ìṣíra kí o tó fi ayálégbé hàn.

Má ṣe rò pé ayálégbé aláṣẹ-ara lè tún lo ìsopọ̀ ibi ìpamọ́ dátà nẹ́tíwọ́ọ̀kì. Lo ìforúkọsílẹ̀ ayálégbé àti àwọn àgbékalẹ̀ onkọwe tí àfikún náà pèsè.

## SSO àti àwọn REST hooks {#sso-and-rest-hooks}

Ìwọlé aláìní-ipò ayálégbé ń lo àwọn token aláìpẹ́ pẹ̀lú ìbéèrè ìdí, ìdáàbòbò àtúnlò JTI, òpin ìparí, àti ìdìmú orísun. Àwọn ìṣepọ̀ tí ó ṣàfikún àwọn bọ́tìnì ìwọlé tàbí àwọn ìtọ́kasí ìṣàkóso latọ̀ọ̀nà gbọ́dọ̀ dá àwọn ìbẹ̀wò ayálégbé sílẹ̀ nípasẹ̀ ìṣàn SSO tí a ṣe àtìlẹ́yìn fún dípò kí wọ́n kọ àwọn URL ìwọlé ayálégbé taara.

Àwọn ìṣẹ̀lẹ̀ àyẹ̀wò API ní ẹgbẹ́ nẹ́tíwọ́ọ̀kì àti àwọn àkótán ojoojúmọ́ wà fún àwọn ẹnu-ọ̀nà ayálégbé aláṣẹ-ara. Lo àwọn log wọ̀nyẹn nígbà tí o bá ń ṣàtúnṣe àwọn eto ita tí ń pe àwọn endpoint ìgbésí-ayé ayálégbé.

## Àwọn URL ìṣe oníbàárà aláṣẹ-ara {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 ń darí àwọn ìṣe oníbàárà ayálégbé-aláṣẹ-ara padà sí aaye àkọ́kọ́ fún akántì, checkout, ìsanwó, invoice, aaye, yíyí template padà, àti àwọn ìṣàn domain-mapping. Àwọn ìṣepọ̀ tí ó ṣe àfihàn àwọn ìtọ́kasí ìṣàkóso ní ẹgbẹ́ ayálégbé gbọ́dọ̀ tọ́ka àwọn ìṣe wọ̀nyẹn sí pánẹ́ẹ̀lì oníbàárà aaye-àkọ́kọ́, kí wọ́n sì fi ibi ìpadà tí a ti fọwọ́sí kún un nígbà tí oníṣe yẹ kí ó lè lọ padà sí ayálégbé lẹ́yìn tí ó bá parí ìṣe náà.

Lo SSO wrapper pàtàkì fún àwọn ìtọ́kasí ìṣàkóso kọjá-domain:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL tí a dá sílẹ̀ ṣì lè jẹ́ fíltà nípasẹ̀ `wu_sso_url`, èyí tí ó gba URL SSO, oníṣe lọ́wọ́lọ́wọ́, ID aaye ibi-afẹ́, àti àyíká redirect. Àwọn àfikún lè lo fíltà yẹn láti ṣàfikún àyíká pàtó ti olupèsè tàbí láti rọ́pò URL broker nígbà tí wọ́n ń pa ìmúlò ìjẹ́rìí token Ultimate Multisite mọ́.

Má ṣe ṣe ẹ̀dà membership, invoice, àdírẹ́sì-ìsanwó, template, tàbí ipò ìṣàkóso domain sínú ayálégbé aláṣẹ-ara. Ka pẹpẹ iṣakoso ayálégbé sí olùbẹ̀rẹ̀, kí o sì ka pánẹ́ẹ̀lì oníbàárà aaye-àkọ́kọ́ sí eto àkọsílẹ̀ fún àwọn ìṣe tí a ń ṣàkóso.

## Ìjẹ́rìí ìṣíra {#migration-verification}

Lẹ́yìn tí ìṣíra tàbí ìṣepọ̀ ìgbésí-ayé bá yí dátà ayálégbé padà, ṣiṣẹ́ àwọn ẹnu-ọ̀nà ìjẹ́rìí:

- `wp tenant verify-no-legacy --site=<site-id>` jẹ́rìí pé ayálégbé kò tún gbára lé àwọn ipa-ọ̀nà atijọ́ ní ẹgbẹ́ nẹ́tíwọ́ọ̀kì mọ́.
- `wp tenant verify-sovereign-push --site=<site-id>` jẹ́rìí pé àwọn iṣẹ́ ìtì aláṣẹ-ara lè ṣe ìlànà kí wọ́n sì ṣofo.

Àwọn ìṣepọ̀ gbọ́dọ̀ ka ìjẹ́rìí tí ó kùnà sí ohun ìdènà ìgbékalẹ̀, kí wọ́n sì yẹra fún mímàríkì ayálégbé gẹ́gẹ́ bí alààyè títí di ìgbà tí a bá yanjú ìkùnà náà.

## Pípa ayálégbé rẹ́ {#tenant-deletion}

Àwọn ìṣàn pípa rẹ́ gbọ́dọ̀ pe ipa-ọ̀nà teardown àfikún náà kí a lè nu àwọn ìwé-ẹ̀rí ibi ìpamọ́ dátà ayálégbé. Àwọn ìṣepọ̀ ita lè yọ àwọn ohun èlò olupèsè kúrò lẹ́yìn tí teardown bá ṣàṣeyọrí, ṣùgbọ́n wọn kò gbọ́dọ̀ pa àwọn ibi ìpamọ́ dátà agbalejo tàbí àwọn folda rẹ́ nígbà tí ìjẹ́rìí tàbí àwọn iṣẹ́ ìtì async ṣì ń ṣiṣẹ́.

## Router ibi ìpamọ́ dátà tí a ti yọ́ sílẹ̀ {#deprecated-database-router}

`Database_Router` atijọ́ ni a ti rọ́pò pẹ̀lú stub ìyọkúrò. Àwọn ìṣepọ̀ tuntun gbọ́dọ̀ ṣàwárí àwọn ayálégbé nípasẹ̀ router aaye lọ́wọ́lọ́wọ́ àti àwọn API ìforúkọsílẹ̀ ayálégbé dípò kí wọ́n gbára lé kiláàsì router atijọ́.
