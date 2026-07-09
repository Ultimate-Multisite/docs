---
title: Ìmúdájú Ìṣílọ Olómìnira
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Ìjẹ́rìísí Ìṣílọ Aládàáṣe

Ultimate Multisite: Ìfaragbé-Púpọ̀ 1.2.0 ní àwọn àṣẹ ìjẹ́rìísí WP-CLI fún àwọn ìṣílọ ayálégbé aládàáṣe. Lò wọ́n nígbà tí ìṣílọ ayálégbé, ìbẹ̀wò SSO, tàbí ìfisí tí a yà sọ́tọ̀ kò bá hùwà bí a ti retí.

## Àwọn àṣẹ láti ṣiṣẹ́

Ṣiṣẹ́ ìjẹ́rìísí láti inú ìfisí WordPress nẹ́tíwọ́ọ̀kì:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Lo ID ojúlé fún ayálégbé tí o ń ṣí lọ. Àṣẹ àkọ́kọ́ ṣàyẹ̀wò pé ayálégbé náà kò gbára lé dátà atijọ́ ní ẹgbẹ́ nẹ́tíwọ́ọ̀kì mọ́. Àṣẹ kejì jẹ́rìí pé àwọn iṣẹ́ push aládàáṣe lè ṣiṣẹ́ kí wọ́n sì ṣofo.

## Àwọn ìkùnà tí ó wọ́pọ̀

### Àwọn ìyọ̀nda ibi ìpamọ́-dátà kò bá host mu

Bí ìjẹ́rìísí bá ròyìn ìkùnà ìyọ̀nda tàbí olumulo-onkọwe, ṣàyẹ̀wò host ibi ìpamọ́-dátà tí a ti ṣètò. `localhost`, `127.0.0.1`, àti orúkọ iṣẹ́ container jẹ́ àwọn host ìyọ̀nda MySQL tí ó yàtọ̀. Ṣe àfikún ìdìpọ̀ host ayálégbé tàbí àwọn ìyọ̀nda ibi ìpamọ́-dátà, lẹ́yìn náà tún ìjẹ́rìísí ṣiṣẹ́.

### Bedrock tàbí àwọn ìfisí agbègbè kò lè sopọ̀

Bedrock àti àwọn ìfisí socket agbègbè lè ròyìn ibi ìpamọ́-dátà gẹ́gẹ́ bí `localhost` nígbà tí runtime ń sopọ̀ nípasẹ̀ àdírẹ́sì tí a ti ṣe déédéé. Ẹ̀dà 1.2.0 ń ṣe àwọn ọ̀rọ̀ host ẹrọ kan náà déédéé, ṣùgbọ́n àwọn àtúnkọjá host àdáṣe ṣì lè tako àwọn ìyọ̀nda ibi ìpamọ́-dátà.

### Ìlà push async kò ṣofo

Bí `verify-sovereign-push` kò bá parí, ṣàyẹ̀wò Action Scheduler tàbí runner async tí a ti ṣètò. Pa àwọn iṣẹ́ tó kùnà rẹ́ nìkan lẹ́yìn tí o bá jẹ́rìí pé ó dáa láti tún wọn gbìyànjú tàbí sọ wọ́n nù.

### Ìyẹ̀ àwọn olumulo ayálégbé kò tọ́

Ìṣílọ náà gbọ́dọ̀ pèsè àwọn olumulo fún ayálégbé aládàáṣe. Bí olumulo ìfisí tí a retí bá sọnù, tún ìgbésẹ̀ pípèsè olumulo ṣiṣẹ́ kí o tó tún SSO gbìyànjú.

### A kọ ìbẹ̀wò SSO

Ìwọlé aládàáṣiṣẹ́ ayálégbé aláìní-ipò nílò kí domain ayálégbé, origin pin, ìdí token, nonce, àti ìparí àkókò bá ara wọn mu. Jẹ́rìí pé URL ayálégbé tọ́ àti pé a gbìyànjú ìwọlé náà láìpẹ́ lẹ́yìn ṣíṣe ìbẹ̀wò SSO.

## Ìgbà wo ni a tún gbìyànjú

Tún ìjẹ́rìísí gbìyànjú lẹ́yìn ìyípadà infrastructure kọ̀ọ̀kan. Má ṣe yí traffic production padà, pa dátà orísun rẹ́, tàbí yọ àwọn ẹ̀rí ìfọwọ́sí ìṣílọ kúrò títí gbogbo àwọn àyẹ̀wò ìjẹ́rìísí yóò fi kọjá.
