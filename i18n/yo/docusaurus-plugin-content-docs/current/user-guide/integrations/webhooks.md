---
title: Àwọn Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Ìwòye Àkọ́kọ́ nípa Webhooks (v2) {#a-first-look-on-webhooks-v2}

_**ÀKÍYÈSÍ: Kíyèsí pé ẹ̀yà yìí tàbí àpilẹ̀kọ yìí jẹ́ fún àwọn oníṣe tó ti ní ìmọ̀ gíga.**_

**webhook** jẹ́ ọ̀nà fún app tàbí software bí Ultimate Multisite láti pèsè ìwífún àkókò-gidi fún àwọn ohun elo mìíràn. Webhook ń fi data tàbí payloads ránṣẹ́ sí àwọn ohun elo mìíràn bí ó ṣe ń ṣẹlẹ̀, èyí túmọ̀ sí pé o **gba data lẹ́sẹ̀kẹsẹ.**

Èyí wúlò bí o bá nílò láti so pọ̀ tàbí láti kọjá data kan láti Ultimate Multisite lọ sí CRM tàbí system mìíràn ní gbogbo ìgbà tí event bá jẹ́ kí ó ṣiṣẹ́. Fún àpẹẹrẹ, o nílò láti fi orúkọ olumulo àti adirẹsi email ránṣẹ́ sí àtòjọ ìfìwéránṣẹ́ ní gbogbo ìgbà tí Account olumulo tuntun bá dá sílẹ̀.

## Bí a ṣe ń dá webhook ṣẹ̀dá {#how-to-create-a-webhook}

Láti dá webhook ṣẹ̀dá, lọ sí dashboard alábòójútó nẹ́tíwọ́ọ̀kì rẹ. Tẹ **Ultimate Multisite > Webhooks > Add New Webhook.**

![Ojúewé àtòjọ Webhooks tó ṣófo pẹ̀lú bọ́tìnì Add New Webhook](/img/admin/webhooks-list-empty.png)

Lẹ́yìn náà o lè ṣàtúnṣe ìṣètò webhook náà:

![Fọ́ọ̀mù Add New Webhook pẹ̀lú àwọn field Name, Event, àti URL](/img/admin/webhook-add-modal.png)

Nígbà tí o bá ń dá webhook tuntun ṣẹ̀dá, a ó béèrè ìwífún bí **Name, URL,** àti **Event** lọ́wọ́ rẹ. O lè lo orúkọ èyíkéyìí tí o bá fẹ́ fún webhook rẹ. Àwọn field tó ṣe pàtàkì jùlọ ni URL àti Event.

![Ìbánisọ̀rọ̀ ṣíṣe àtúnṣe Webhook tó ń fi field URL àti àwòkọ́kọ́ payload hàn](/img/admin/webhook-url-field.png)

URL ni **endpoint tàbí ibi tí a ń lọ sí** tí Ultimate Multisite yóò fi **payload tàbí data** ránṣẹ́ sí. Èyí ni ohun elo tí yóò gba data náà.

Zapier ni ojútùú tó wọ́pọ̀ jùlọ tí olumulo máa ń lò láti mú kí ìsopọ̀ pẹ̀lú ohun elo ẹgbẹ́ kẹta rọrùn. Láìsí pẹpẹ bí Zapier, ìwọ yóò nílò láti dá function àdáni ṣẹ̀dá pẹ̀lú ọwọ́ tí yóò mú data náà, kí ó sì ṣiṣẹ́ lórí rẹ. Wo àpilẹ̀kọ yìí nípa **bí a ṣe lè lo Ultimate Multisite webhook pẹ̀lú Zapier.**

Nínú àpilẹ̀kọ yìí, a ó wo ìmọ̀ ìpilẹ̀ ti bí webhook ṣe ń ṣiṣẹ́ àti àwọn event tó wà nínú Ultimate Multisite. A ó lo site ẹgbẹ́ kẹta kan tí a ń pè ní [requestbin.com](https://requestbin.com/). Site yìí yóò jẹ́ kí a dá endpoint kan ṣẹ̀dá, kí a sì mú payload náà láì ṣe coding kankan. _**Ìkéde ìkìlọ̀: gbogbo ohun tí yóò ṣe ni láti fi hàn wá pé data náà ti jẹ́ gbígbà.**_ Kò ní sí ṣíṣe iṣẹ́ lórí rẹ tàbí ìgbésẹ̀ irú èyíkéyìí tí a ṣe sí payload náà.

Lọ sí [requestbin.com](https://requestbin.com/) kí o sì tẹ Create Request Bin.

Lẹ́yìn tí o bá tẹ bọ́tìnì yẹn, yóò béèrè pé kí o wọlé bí o bá ti ní Account tẹ́lẹ̀ tàbí kí o forúkọ sílẹ̀. Bí o bá ti ní Account tẹ́lẹ̀, yóò mú ọ lọ taara sí dashboard wọn. Lórí dashboard wọn, o máa rí endpoint tàbí URL tí o lè lo ní dídá Ultimate Multisite webhook rẹ lẹ́sẹ̀kẹsẹ.

Tẹ̀síwájú kí o daakọ URL náà, kí o sì padà sí Ultimate Multisite. Fi endpoint náà sí field URL, kí o sì yan event kan láti dropdown. Nínú àpẹẹrẹ yìí, a ó yan **Payment Received**.

Event yìí máa ń jẹ́ kí ó ṣiṣẹ́ nígbàkigbà tí olumulo bá ṣe ìsanwó. Gbogbo àwọn event tó wà, àpèjúwe wọn, àti payloads wọn ni a ṣe àtòjọ sí ìsàlẹ̀ ojúewé náà. Tẹ bọ́tìnì **Add New Webhook** láti fi webhook náà pamọ́.

![Dropdown event Webhook pẹ̀lú Payment Received tí a yan](/img/admin/webhook-event-picker.png)

Báyìí a lè fi event ìdánwò ránṣẹ́ sí endpoint náà kí a lè rí bóyá webhook tí a dá ṣẹ̀dá ń ṣiṣẹ́. A lè ṣe èyí nípa títẹ **Send Test Event** lábẹ́ webhook tí a dá ṣẹ̀dá.

![Àtòjọ Webhooks tó ń fi webhook kan tí a ti ṣètò àti ìgbésẹ̀ Send Test hàn](/img/admin/webhooks-list-populated.png)

Èyí fi fèrèsé ìmúdájú hàn tó ń sọ pé ìdánwò náà ṣàṣeyọrí.

![Èsì event ìdánwò Webhook lẹ́yìn fífi payload ìdánwò ránṣẹ́](/img/admin/webhook-test-result.png)

Báyìí bí a bá padà sí site _Requestbin_ a ó rí pé payload náà ti jẹ́ gbígbà, ó sì ní data ìdánwò díẹ̀ nínú.

Èyí ni ìlànà ìpilẹ̀ ti bí webhook àti endpoints ṣe ń ṣiṣẹ́. Bí o bá fẹ́ dá endpoint àdáni ṣẹ̀dá, ìwọ yóò nílò láti dá function àdáni ṣẹ̀dá láti ṣiṣẹ́ lórí data tí o gba láti Ultimate Multisite.
