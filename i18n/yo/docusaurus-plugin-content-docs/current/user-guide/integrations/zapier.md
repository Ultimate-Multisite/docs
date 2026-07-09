---
title: Ìṣepọ̀ Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ṣíṣe àkópọ̀ Ultimate Multisite pẹ̀lú Zapier {#integrating-ultimate-multisite-with-zapier}

Nínú ọ̀kan lára àwọn àpilẹ̀kọ, a ti jiròrò [Webhooks](webhooks.md) àti bí a ṣe lè lò wọ́n láti ṣe àkópọ̀ pẹ̀lú àwọn ìṣàfilọ́lẹ̀ ẹni-kẹta.

Lílo webhooks díẹ̀ nira nítorí ó nílò ìmọ̀ tó ti gòkè nínú kóòdù kíkọ àti gbígbà payloads. Lílo **Zapier** jẹ́ ọ̀nà fún ọ láti yí ìṣòro yẹn ká.

Zapier ní àkópọ̀ pẹ̀lú ju 5000+ apps lọ, èyí tó mú kí ìbánisọ̀rọ̀ láàárín àwọn ìṣàfilọ́lẹ̀ ọ̀tọ̀ọ̀tọ̀ rọrùn síi.

O lè ṣẹ̀dá **Triggers** tí yóò bẹ̀rẹ̀ nígbà tí àwọn ìṣẹ̀lẹ̀ bá ṣẹlẹ̀ lórí nẹ́tíwọ́ọ̀kì rẹ (àp. Account kan ṣẹ̀dá, ó sì fa ìṣẹ̀lẹ̀ account_create) tàbí ṣẹ̀dá **Actions** lórí nẹ́tíwọ́ọ̀kì rẹ tí ń dáhùn sí àwọn ìṣẹ̀lẹ̀ òde (àp. ṣẹ̀dá membership Account tuntun nínú nẹ́tíwọ́ọ̀kì Ultimate Multisite rẹ).

Èyí ṣeé ṣe nítorí pé **Ultimate Multisite Zapier's triggers** àti actions ni [REST API](https://developer.ultimatemultisite.com/api/docs/) ń ṣiṣẹ́ fún.

## Bí a ṣe lè bẹ̀rẹ̀ {#how-to-start}

Kọ́kọ́, wá Ultimate Multisite nínú àtòkọ app Zapier. Ní yíyàn mìíràn, o lè tẹ [ìjápọ̀ yìí](https://zapier.com/apps/wp-ultimo/integrations).

Lọ sí dashboard rẹ kí o sì tẹ bọ́tìnì **+** **Create Zap** ní sidebar òsì láti ṣètò Zap tuntun.

![Dashboard Zapier pẹ̀lú bọ́tìnì Create Zap](/img/admin/webhooks-list.png)

A ó darí rẹ sí ojú-ìwé ìṣẹ̀dá Zap.

Nínú àpótí ìwádìí tẹ "wp ultimo". Tẹ láti yan aṣayan ẹ̀dà **Beta**.

![Wíwá WP Ultimo nínú àtòkọ app Zapier](/img/admin/webhooks-list.png)

Lẹ́yìn yíyan app wa, yan ìṣẹ̀lẹ̀ tó wà: **New Ultimate Multisite Event**.

![Yíyan trigger New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Báyìí a nílò láti fún Zapier ní ààyè sí **nẹ́tíwọ́ọ̀kì rẹ**. Títẹ **Sign in** yóò ṣí fèrèsé tuntun tí ń béèrè **API credentials**.

![Ìbéèrè Sign in Zapier fún API credentials](/img/admin/webhooks-list.png)

Lọ sí panel admin nẹ́tíwọ́ọ̀kì rẹ kí o sì lọ sí **Ultimate Multisite > Settings** > **API & Webhooks** kí o wá apá API Settings.

Yan aṣayan **Enable API** bí ó ṣe jẹ́ dandan fún ìsopọ̀ yìí láti ṣiṣẹ́.

![Àwọn ètò API àti Webhooks pẹ̀lú àwọn aṣayan API Settings àti Enable API](/img/admin/settings-api-webhooks.png)

Lo aami **Copy to Clipboard** lórí àwọn pápá API Key àti API Secret kí o sì lẹ̀ mọ́ àwọn iye wọ̀nyẹn lórí iboju àkópọ̀.

Lórí pápá URL, fi URL kikún nẹ́tíwọ́ọ̀kì rẹ sí, pẹ̀lú protocol (HTTP tàbí HTTPS).

![Iboju àkópọ̀ Zapier pẹ̀lú àwọn pápá API Key, Secret, àti URL](/img/admin/webhooks-list.png)

Tẹ bọ́tìnì **Yes, Continue** láti lọ sí ìgbésẹ̀ tó kàn. Bí ohun gbogbo bá ṣiṣẹ́, ó yẹ kí Account tuntun tí a ti sopọ̀ rẹ kí ọ! Tẹ láti **Continue** láti ṣẹ̀dá trigger tuntun.

## Bí a ṣe lè ṣẹ̀dá Trigger tuntun {#how-to-create-a-new-trigger}

Báyìí tí Account rẹ ti sopọ̀, o lè rí àwọn ìṣẹ̀lẹ̀ tó wà. Jẹ́ ká yan ìṣẹ̀lẹ̀ **payment_received** fún ìkọ́ni yìí.

![Yíyan ìṣẹ̀lẹ̀ payment_received nínú trigger Zapier](/img/admin/webhooks-list.png)

Nígbà tí a bá ti yan ìṣẹ̀lẹ̀ náà, tí o sì tẹ láti **continue** , **ìgbésẹ̀ ìdánwò** kan yóò hàn.

![Ìgbésẹ̀ ìdánwò Zapier fún trigger náà](/img/admin/webhooks-list.png)

Ní ìpele yìí, Zapier yóò dán wò bóyá Zap rẹ lè **fa payload pàtó sí ìṣẹ̀lẹ̀ yẹn**. Nínú àwọn ìṣẹ̀lẹ̀ ọjọ́ iwájú tí irú rẹ̀ bá jọra, a ó rán ìwífún pẹ̀lú ètò àkópọ̀ yìí kan náà.

![Ìdánwò trigger Zapier parí ní àṣeyọrí pẹ̀lú payload](/img/admin/webhooks-list.png)

Nínú ìkọ́ni wa, ìdánwò náà **parí ní àṣeyọrí** ó sì dá ìwífún àpẹẹrẹ payload padà. Ìwífún àpẹẹrẹ yìí yóò wúlò láti tọ́ wa sọ́nà nígbà tí a bá ń ṣẹ̀dá actions. Trigger rẹ ti ṣẹ̀dá báyìí, ó sì ti ṣetán láti sopọ̀ mọ́ àwọn ìṣàfilọ́lẹ̀ míì.

## Bí a ṣe lè ṣẹ̀dá Actions {#how-to-create-actions}

Actions máa ń lo ìwífún láti àwọn triggers míì láti ṣẹ̀dá àwọn àkọsílẹ̀ tuntun nínú nẹ́tíwọ́ọ̀kì rẹ.

Nínú **ìgbésẹ̀ ṣíṣe action** o máa yan Ultimate Multisite **Beta** àti aṣayan **Create Items on Ultimate Multisite**.

![Ṣíṣe action pẹ̀lú Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Nínú ìgbésẹ̀ tó kàn, o máa ṣẹ̀dá authentication rẹ, gẹ́gẹ́ bí a ṣe ṣe nínú **Bí a ṣe lè bẹ̀rẹ̀** , tàbí yan authentication tí a ti ṣẹ̀dá. Nínú ìkọ́ni yìí a máa yan authentication kan náà tí a ṣẹ̀dá tẹ́lẹ̀.

![Yíyan authentication fún action Zapier](/img/admin/webhooks-list.png)

### Ṣíṣètò Action náà {#setting-up-the-action}

Èyí ni **ìgbésẹ̀ pàtàkì ti action náà** àti níbí àwọn nǹkan yàtọ̀ díẹ̀. Ìwífún àkọ́kọ́ tí o máa yan ni **Item**. Item ni **àwoṣe ìwífún** ti nẹ́tíwọ́ọ̀kì rẹ bíi **Customers, Payments, Sites, Emails** àti àwọn míì.

![Yíyan irú Item fún action Zapier](/img/admin/webhooks-list.png)

Nígbà tí o bá ń yan item kan, fọ́ọ̀mù náà yóò **tún ara rẹ ṣètò láti mú àwọn pápá tó jẹ́ dandan àti aṣayan** fún item tí a yan.

Fún àpẹẹrẹ, nígbà tí o bá yan item **Customer** , àwọn pápá fọ́ọ̀mù yóò mú gbogbo ohun tó jẹ́ dandan láti fọwọ́ sí láti ṣẹ̀dá Customer tuntun nínú nẹ́tíwọ́ọ̀kì náà.

![Àwọn pápá item Customer nínú ṣíṣètò action Zapier](/img/admin/webhooks-list.png)

Lẹ́yìn fífi gbogbo pápá tí a samisi gẹ́gẹ́ bí **required** kún àti títẹ continue, iboju ìkẹyìn yóò fi àwọn pápá tí o ti kún àti àwọn pápá tí a fi sílẹ̀ láìkún hàn ọ.

![Ìdánwò action Zapier tó ń fi àwọn pápá tí a kún àti tí a kò kún hàn](/img/admin/webhooks-list.png)

Ní kété tí ìdánwò rẹ bá parí tí ó sì ṣàṣeyọrí, action rẹ ti ṣàtúnṣe. Ó tún ṣe pàtàkì láti ṣàyẹ̀wò lórí nẹ́tíwọ́ọ̀kì rẹ bóyá a ṣẹ̀dá item náà pẹ̀lú ìdánwò action rẹ.
