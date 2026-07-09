---
title: Ṣíṣètò Àwọn Ìsanwó Afọwọ́ṣe
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Ṣíṣètò Àwọn Ìsanwó Afọwọ́ṣe (v2) {#setting-up-manual-payments-v2}

_**ÀKÍYÈSÍ PÀTÀKÌ: Àpilẹ̀kọ yìí tọ́ka sí Ultimate Multisite ẹ̀yà 2.x.**_

Àwọn ìsanwó afọwọ́ṣe jẹ́ ọ̀nà fún ọ láti fi àwọn ọ̀nà ìsanwó míì hàn tí **Stripe** tàbí **PayPal** kò bá sí fún àwọn aṣàmúlò rẹ. Ó lè jẹ́ fífi owó ránṣẹ́ nípasẹ̀ waya tàbí báńkì, tàbí ọ̀nà ìsanwó míì tí ó wà fún àwọn aṣàmúlò rẹ ní agbègbè wọn.

## Bí a ṣe ń mú Manual Payments ṣiṣẹ́ {#how-to-enable-manual-payments}

Ṣíṣètò ìsanwó afọwọ́ṣe rọrùn gan-an. O kan nílò láti mú un ṣiṣẹ́ lábẹ́ àwọn ẹnu-ọ̀nà ìsanwó, kí o sì fi àwọn ìtọ́nisọ́nà kíkún sí i nípa bí aṣàmúlò ṣe yẹ kí ó fi ìsanwó ránṣẹ́.

Kọ́kọ́, lọ sí **Ultimate Multisite > Settings > Payments**. Ní ìsàlẹ̀ **Payment Gateways** , tan **Manual** sílẹ̀. Ìwọ yóò rí i pé àpótí **Payment Instructions** yóò farahàn fún ọ.

Fi ìwífún tí oníbàárà rẹ yóò nílò láti ṣe ìsanwó sí àpótí yìí. Ó lè jẹ́ àwọn àlàyé Account báńkì rẹ àti email rẹ kí oníbàárà lè fi ìmúdájú ìsanwó ránṣẹ́ sí ọ, fún àpẹẹrẹ.

![Ìtan-an ẹnu-ọ̀nà ìsanwó afọwọ́ṣe pẹ̀lú agbègbè ọ̀rọ̀ Payment Instructions](/img/config/manual-gateway-expanded.png)

Èyí ni ojúṣe ìṣètò ẹnu-ọ̀nà afọwọ́ṣe:

![Àwọn ìṣètò ẹnu-ọ̀nà afọwọ́ṣe](/img/config/manual-gateway-settings.png)

Lẹ́yìn tí o bá ti ṣètò rẹ, kan tẹ **Save Settings** ó sì ti parí. Nígbà tí àwọn aṣàmúlò bá forúkọ sí nẹ́tíwọ́ọ̀kì rẹ, wọn yóò rí ìfiranṣẹ́ kan tí yóò sọ fún wọn pé wọn yóò gba àwọn ìtọ́nisọ́nà rẹ láti parí ìrà.

![Ìfiranṣẹ́ ìmúdájú ìforúkọsílẹ̀ tí ń sọ fún aṣàmúlò pé wọn yóò gba àwọn ìtọ́nisọ́nà ìsanwó](/img/frontend/registration-manual-notice.png)

Wọn yóò sì tún gba ìfiranṣẹ́ kan lórí ojú-ewé **Thank You** rẹ pẹ̀lú àwọn ìtọ́nisọ́nà ìsanwó rẹ.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Ṣíṣe ìmúdájú àwọn ìsanwó afọwọ́ṣe {#confirming-manual-payments}

Láti jẹ́rìí ìsanwó afọwọ́ṣe, lọ sí akojọ **Payments** lórí ọ̀pá òsì. Ní bẹ̀ o lè rí gbogbo àwọn ìsanwó lórí nẹ́tíwọ́ọ̀kì rẹ àti àwọn àlàyé wọn, pẹ̀lú **status** wọn. Ìsanwó afọwọ́ṣe yóò máa ní **Pending** status títí tí ìwọ yóò fi yí i padà fúnra rẹ.

![Àtòkọ Payments tí ń fi ìsanwó afọwọ́ṣe Pending hàn](/img/admin/payments-list.png)

Wọ ojú-ewé ìsanwó nípa títẹ **reference code**. Lórí ojú-ewé yìí, o ní gbogbo àwọn àlàyé ìsanwó tí ó wà ní Pending, bíi ID ìtọ́kasí, àwọn ọjà, àwọn àsìkò, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ.

![Ojú-ewé àlàyé ìsanwó tí ń fi reference code, àwọn ọjà, àti àwọn àpapọ̀ hàn](/img/admin/payment-edit.png)

Lórí kólọ́ọ̀mù ọ̀tún, o lè yí status ìsanwó náà padà. Yíyí i sí **Completed** àti **títan aṣàyàn Activate Membership** yóò mú kí site oníbàárà rẹ ṣiṣẹ́, membership wọn yóò sì ṣiṣẹ́.

![Ojú-ewé àtúnṣe ìsanwó pẹ̀lú Status tí a ṣètò sí Completed àti ìtan-an Activate Membership](/img/admin/payment-activate-membership.png)
