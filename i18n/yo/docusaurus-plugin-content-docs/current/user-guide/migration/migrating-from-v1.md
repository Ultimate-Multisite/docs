---
title: Gbigbe kuro lati V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Gbigbe láti V1 {#migrating-from-v1}

## Ultimate Multisite ti yí padà láti ẹbí ìtújáde 1.x atilẹba rẹ sí ẹbí ìtújáde 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite ẹ̀yà 2.0 àti lókè jẹ́ àtunkọ pátápátá ti ìpilẹ̀ kóòdù, èyí túmọ̀ sí pé díẹ̀ gan-an ni a pín láàárín ẹ̀yà atijọ́ àti tuntun. Nítorí ìdí yẹn, nígbà tí o bá ń ṣe ìgbélárugẹ láti 1.x sí 2.x, a ó ní láti gbe dátà rẹ lọ sí ọna kika tí àwọn ẹ̀yà tuntun lè lóye.

A dúpẹ́, Ultimate Multisite 2.0+ **wá pẹ̀lú ohun-ìgbéyípadà** tí a kọ sínú kóòrù, tí ó lè ṣàwárí dátà láti ẹ̀yà atijọ́ kí ó sì yí i padà sí ọna kika tuntun. Ìgbéyípadà yìí máa ń ṣẹlẹ̀ nígbà **Oluṣeto Ìṣètò** ti ẹ̀yà 2.0+.

Ẹ̀kọ́ yìí ṣàlàyé bí ohun-ìgbéyípadà ṣe ń ṣiṣẹ́, ohun tí a lè ṣe nígbà ìkùnà, àti bí a ṣe lè ṣàtúnṣe àwọn ìṣòro tí ó lè wáyé nígbà ìlànà yìí.

_**PÀTÀKÌ: Kí o tó bẹ̀rẹ̀ ìgbélárugẹ láti ẹ̀yà 1.x sí ẹ̀yà 2.0 jọ̀wọ́ rí i dájú pé o dá àfipamọ́ ti ibi ìpamọ́ dátà sáịtị rẹ sílẹ̀**_

## Àwọn ìgbésẹ̀ àkọ́kọ́ {#first-steps}

Ìgbésẹ̀ àkọ́kọ́ ni láti ṣe ìgbàsílẹ̀ fáìlì .zip ti afikun náà kí o sì fi ẹ̀yà 2.0 sí Dashboard alábòójútó nẹ́tíwọ́ọ̀kì rẹ.

Lẹ́yìn tí o [fi ẹ̀yà 2.0 sílẹ̀ tí o sì mú un ṣiṣẹ́](../getting-started/installing-ultimate-multisite.md), sístẹ́ẹ̀mù náà yóò ṣàwárí láìfọwọ́yí pé Multisite rẹ ń ṣiṣẹ́ lórí ẹ̀yà ogún, ìwọ yóò sì rí ìfẹ́ránṣẹ́ yìí ní òkè ojúewé afikun náà.

_**ÀKÍYÈSÍ:** Tí o bá ti fi Ultimate Multisite 1.x sí Multisite rẹ, ìwọ yóò ní àṣàyàn láti fi ẹ̀yà tí o ṣẹ̀ṣẹ̀ ṣe ìgbàsílẹ̀ rọ́pò afikun náà. Jọ̀wọ́, tẹ̀ síwájú kí o sì tẹ **Fi èyí tí a gbé sókè rọ́pò ti lọ́wọ́lọ́wọ́**._

<!-- Àwòrán iboju kò sí: Ojúewé afikun tí ń fi àṣàyàn hàn láti fi ẹ̀yà v2 tí a gbé sókè rọ́pò v1 -->

Ojúewé tó kàn yóò jẹ́ kí o mọ àwọn afikun ogún tí o ti fi sílẹ̀ pọ̀ mọ́ ẹ̀yà 1.x. Yóò ní àwọn ìtọ́nisọ́nà lórí bóyá ẹ̀yà tí o ń lò bá ẹ̀yà 2.0 mu tàbí bóyá o nílò láti fi ẹ̀yà tí a ti gbé lárugẹ ti afikun náà sílẹ̀ lẹ́yìn ìgbéyípadà náà.

<!-- Àwòrán iboju kò sí: Ìfẹ́ránṣẹ́ ní òkè ojúewé àwọn afikun nípa mímu dojuiwọn sí v2.0, pẹ̀lú àkójọ àwọn afikun tí ó nílò mímu dojuiwọn -->

Nígbà tí o bá ti ṣetán láti tẹ̀ síwájú, o lè tẹ bọ́tìnì tí ó sọ **Ṣàbẹ̀wò sí Olùfisílẹ̀ láti parí ìgbélárugẹ náà**.

<!-- Àwòrán iboju kò sí: Bọ́tìnì tí ó sọ Ṣàbẹ̀wò sí Olùfisílẹ̀ láti parí ìgbélárugẹ náà -->

Lẹ́yìn náà yóò mú ọ wá sí ojúewé olùtọ́nisọ́nà ìfisílẹ̀ pẹ̀lú díẹ̀ lára àwọn ìfẹ́ránṣẹ́ káàbọ̀. O kan nílò láti tẹ **Bẹ̀rẹ̀** láti lọ sí ojúewé tó kàn.

<!-- Àwòrán iboju kò sí: Ojúewé káàbọ̀ Oluṣeto Ìṣètò pẹ̀lú bọ́tìnì Bẹ̀rẹ̀ -->

Lẹ́yìn títẹ **Bẹ̀rẹ̀** , yóò darí rẹ sí Ìyẹ̀wò ṣáájú ìfisílẹ̀_._ Èyí yóò fi Ìwífún Sístẹ́ẹ̀mù rẹ àti ìfisílẹ̀ WordPress hàn ọ, yóò sì sọ fún ọ bóyá ó pàdé **àwọn ohun tí Ultimate Multisite ń bẹ̀rẹ̀**.

<!-- Àwòrán iboju kò sí: Ojúewé Ìyẹ̀wò ṣáájú ìfisílẹ̀ tí ń fi ìmúdájú àwọn ohun tí sístẹ́ẹ̀mù ń bẹ̀rẹ̀ hàn -->

Ìgbésẹ̀ tó kàn ni láti tẹ bọ́tìnì ìwé-àṣẹ Ultimate Multisite rẹ sí i kí o sì mú afikun náà ṣiṣẹ́. Èyí yóò rí i dájú pé gbogbo àwọn àfidámọ̀, pẹ̀lú àwọn afikun, yóò wà lórí sáịtị rẹ.

<!-- Àwòrán iboju kò sí: Ojúewé mímú ìwé-àṣẹ ṣiṣẹ́ pẹ̀lú ààyè ìtẹ̀wọlé bọ́tìnì ìwé-àṣẹ àti bọ́tìnì Gbà kí o sì Mú ṣiṣẹ́ -->

Lẹ́yìn fífi bọ́tìnì rẹ sí i, tẹ **Gbà & Mú ṣiṣẹ́**.

Lẹ́yìn mímú ìwé-àṣẹ ṣiṣẹ́, o lè bẹ̀rẹ̀ ìfisílẹ̀ gangan nípa títẹ **Fi sílẹ̀** lórí ojúewé tó kàn. Èyí yóò dá àwọn fáìlì àti ibi ìpamọ́ dátà tó ṣe pàtàkì tí ẹ̀yà 2.0 nílò láti ṣiṣẹ́ sílẹ̀ láìfọwọ́yí.

<!-- Àwòrán iboju kò sí: Ojúewé ìfisílẹ̀ tí ń fi ohun tí a ó mú dojuiwọn hàn pẹ̀lú bọ́tìnì Fi sílẹ̀ -->

## Ní báyìí, ìgbéyípadà náà {#now-the-migration}

Ohun-ìgbéyípadà náà ní àfidámọ̀ ààbò tí a kọ sínú rẹ, níbi tí yóò ti yẹ gbogbo multisite rẹ wò láti rí i dájú pé gbogbo dátà Ultimate Multisite rẹ lè jẹ́ gbígbéyípadà láìsí ìṣòro kankan. Tẹ bọ́tìnì **Ṣe Ìyẹ̀wò** láti bẹ̀rẹ̀ ìlànà náà.

<!-- Àwòrán iboju kò sí: Ojúewé ìgbéyípadà pẹ̀lú bọ́tìnì Ṣe Ìyẹ̀wò láti jẹ́rìí pé dátà lè jẹ́ yíyípadà -->

Lẹ́yìn ṣíṣe ìyẹ̀wò náà, o ní àṣàyàn méjì: èsì náà lè jẹ́ bóyá **pẹ̀lú** àṣìṣe tàbí **láìsí àṣìṣe**.

### Pẹ̀lú Àṣìṣe {#with-error}

Tí o bá rí ìfẹ́ránṣẹ́ àṣìṣe, ìwọ yóò nílò láti kàn sí ẹgbẹ́ àtìlẹ́yìn wa kí wọ́n lè ràn ọ́ lọ́wọ́ láti tún àṣìṣe náà ṣe. Rí i dájú pé o **pèsè àkọsílẹ̀ àṣìṣe náà** nígbà tí o bá dá tikẹ́ẹ̀tì sílẹ̀. O lè ṣe ìgbàsílẹ̀ àkọsílẹ̀ náà tàbí o lè tẹ líńkì tí ó sọ kàn sí ẹgbẹ́ àtìlẹ́yìn wa. Yóò ṣí wíjẹ́ẹ̀tì ìrànlọ́wọ́ ní apá ọ̀tún ojúewé rẹ pẹ̀lú àwọn ààyè tí a ti kún tẹ́lẹ̀ fún ọ, tí ó ní àwọn àkọsílẹ̀ àṣìṣe lábẹ́ àpejuwe.

_**Níwọ̀n bí sístẹ́ẹ̀mù ti rí àṣìṣe, ìwọ kò ní lè tẹ̀ síwájú láti gbe lọ sí ẹ̀yà 2.0. Lẹ́yìn náà, o lè yí padà sí ẹ̀yà 1.x láti tẹ̀síwájú fífi nẹ́tíwọ́ọ̀kì rẹ ṣiṣẹ́ títí di ìgbà tí a ó fi tún àṣìṣe náà ṣe.**_

### Láìsí Àṣìṣe {#without-error}

Tí sístẹ́ẹ̀mù kò bá rí àṣìṣe kankan, ìwọ yóò rí ìfẹ́ránṣẹ́ àṣeyọrí àti bọ́tìnì **Gbe yípadà** ní ìsàlẹ̀ tí yóò jẹ́ kí o tẹ̀ síwájú pẹ̀lú ìgbéyípadà náà. Lórí ojúewé yìí, a ó rán ọ létí láti dá àfipamọ́ ti ibi ìpamọ́ dátà rẹ sílẹ̀ kí o tó tẹ̀ síwájú, èyí tí a ṣedábàá gan-an. Tẹ **Gbe yípadà** tí o bá ti ní àfipamọ́.

<!-- Àwòrán iboju kò sí: Ojúewé ìgbéyípadà tí ń fi ìfẹ́ránṣẹ́ àṣeyọrí àti ìṣedábàá àfipamọ́ hàn -->

<!-- Àwòrán iboju kò sí: Bọ́tìnì Gbe yípadà ní igun ìsàlẹ̀-ọtún -->

Èyí sì ni gbogbo ohun tí ó gba!

O lè bóyá tẹ̀síwájú láti ṣiṣẹ́ ìṣètò Oluṣeto náà láti mú àmì rẹ àti àwọn ohun míì lórí nẹ́tíwọ́ọ̀kì rẹ dojuiwọn tàbí bẹ̀rẹ̀ sí í kiri inú àkójọ aṣàyàn Ultimate Multisite ẹ̀yà 2.0 rẹ àti àwòṣe tuntun rẹ. Tẹ̀ síwájú kí o sì gbádùn díẹ̀.
