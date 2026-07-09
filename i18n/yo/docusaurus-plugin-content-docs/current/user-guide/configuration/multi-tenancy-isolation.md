---
title: Ìyàsọ́tọ̀ Ọ̀pọ̀-Ayálégbé
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Ìyàsọ́tọ̀ Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 ń ṣètìlẹ́yìn fún ìyàsọ́tọ̀ database àti filesystem fún subsite kọ̀ọ̀kan fún àwọn tenant aládàáṣẹ. Èyí ń jẹ́ kí data tenant wà lọ́tọ̀, nígbà tí ó ń pa provisioning, billing, àti ìṣàkóso ipele network mọ́.

## Ọgbọ́n ìyàsọ́tọ̀

Lo ìyàsọ́tọ̀ aládàáṣẹ fún àwọn oníbàárà tí wọ́n nílò ìpínya data tó lágbára jù, ìpamọ́ filesystem tí a yà sọ́tọ̀, tàbí ààlà host tó yàtọ̀.

Tenant aládàáṣẹ kọ̀ọ̀kan yẹ kí ó ní:

- Database tenant tí a yà sọ́tọ̀ tàbí ọgbọ́n prefix database tí host fọwọ́ sí.
- Root filesystem tenant tí a yà sọ́tọ̀.
- Àkọsílẹ̀ tenant registry tó máa so site pọ̀ mọ́ database rẹ̀, root path, hostname, àti model ìyàsọ́tọ̀ rẹ̀.
- Àbájáde migration verification kí a tó ka tenant náà sí live.

## Ìdè host database

Ẹ̀dà 1.2.0 yí ìwà aiyipada ìdè host ẹrọ-kan-náà padà fún àwọn ìfìdí-múlẹ̀ aládàáṣẹ. Àwọn iye ẹrọ-kan-náà bíi `localhost` ni a máa ń ṣe normalize kí Bedrock, FrankenPHP, àti àwọn ìfìdí-múlẹ̀ WordPress tí a fi sínú container lè fúnni àti ṣàyẹ̀wò àwọn ìyọ̀nda lòdì sí okun host tí MySQL rí gan-an.

Nígbà tí o bá ń ṣètò tenant aládàáṣẹ:

1. Ṣètò host database sí iye tí runtime tenant nílò.
2. Lo `localhost` fún àwọn ìfìdí-múlẹ̀ socket agbègbè nígbà tí host bá ń retí àwọn ìsopọ̀ agbègbè.
3. Lo `127.0.0.1` tàbí hostname iṣẹ́ kan nìkan nígbà tí server database bá fún host yẹn ní ànfààní.
4. Ṣe migration verification lẹ́yìn tí o bá yí ìdè host padà.

Tí verification bá jabo àwọn ìkùnà grant, fi àwọn grant user DB tenant wé ìdè host tí a ṣètò. User tí a fún ní grant fún `user@localhost` yàtọ̀ sí `user@127.0.0.1` tàbí `user@%`.

## Root filesystem

Root tenant yẹ kí ó dúró ṣinṣin kọjá àwọn restart àti deployment. Yẹra fún àwọn mount path igba-díẹ̀. Fún àwọn ìfìdí-múlẹ̀ ara Bedrock, jẹ́rìí pé root tenant tọ́ka sí web root WordPress tí tenant bootstrap ń retí, kì í ṣe project root nìkan.

## Ètò provisioning

Fún àwọn tenant aládàáṣẹ tuntun, lo ètò yìí:

1. Ṣẹ̀dá tenant registry entry.
2. Ṣẹ̀dá database tenant àti user database.
3. Bootstrap schema tenant.
4. Provision àwọn user tenant.
5. Ṣètò àwọn path filesystem tenant.
6. Ṣe migration verification.
7. Yí routing tàbí DNS padà lẹ́yìn tí verification bá kọjá.

Ètò yìí dènà kí àwọn tenant tí ìyàsọ́tọ̀ wọn kò pé má gba traffic kí database writer, àwọn user, àti filesystem tó ṣetán.

## Àwọn flow ìṣàkóso oníbàárà aládàáṣẹ

Ultimate Multisite v2.13.0 pa àwọn ìṣe ìṣàkóso oníbàárà mọ́ lórí site àkọ́kọ́ nígbà tí sovereign mode bá ṣiṣẹ́. Tenant kan ṣì lè ṣiṣẹ́ gẹ́gẹ́ bí ìfìdí-múlẹ̀ WordPress tí a yà sọ́tọ̀, ṣùgbọ́n àwọn ìṣe tí oníbàárà ń rí tí ó gbẹ́kẹ̀lé billing network, membership, tàbí data account pínpín yẹ kí ó rán oníbàárà padà sí site àkọ́kọ́ dípò kí ó gbìyànjú láti parí ìṣe náà nínú runtime tenant.

Flow site àkọ́kọ́ kan sí:

- Checkout àti àwọn ìyípadà plan.
- Àkótán Account àti àwọn ìṣe profile oníbàárà.
- Àwọn ìmúdójúìwọ̀n billing address àti àwọn screen ìṣàkóso ìsanwó.
- Àwọn view invoice àti payment-history.
- Àwọn ìṣe ìṣàkóso site bíi fífi àwọn site kún un tàbí pípa site kan rẹ́.
- Yíyí template padà.
- Domain mapping àti àwọn ìyípadà primary-domain.

Nígbà tí oníbàárà bá bẹ̀rẹ̀ ọ̀kan nínú àwọn ìṣe wọ̀nyí láti tenant aládàáṣẹ, Ultimate Multisite máa ń kọ́ URL site àkọ́kọ́ tó bá a mu, ó sì máa ń pa tenant orísun mọ́ gẹ́gẹ́ bí ibi ìpadà nígbà tí ó bá ní ààbò láti ṣe bẹ́ẹ̀. Èyí jẹ́ kí àwọn oníbàárà parí ìṣe tí a ń ṣàkóso lòdì sí àwọn àkọsílẹ̀ network, lẹ́yìn náà kí wọ́n padà sí àyíká tenant láì ṣe ẹ̀dà billing tàbí ipò membership nínú database aládàáṣẹ.

Fún àwọn operator, òfin ìṣe ni: jẹ́ kí billing, account, checkout, invoice, template, àti àwọn ojúewé ìṣàkóso domain wà lórí site àkọ́kọ́ fún àwọn network aládàáṣẹ. Àwọn dashboard tenant lè sopọ̀ sí àwọn ojúewé wọ̀nyí, ṣùgbọ́n site àkọ́kọ́ ni orísun òtítọ́ fún ìṣe náà.
