---
title: Forúkọsílẹ̀ API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Endpoint API ìforúkọsílẹ̀ Ultimate Multisite {#the-ultimate-multisite-register-api-endpoint}

Nínú ìkọ́ni yìí, ìwọ yóò kọ́ bí a ṣe ń lo endpoint API /register ti Ultimate Multisite láti dá gbogbo ìlànà onboarding fún oníbàárà tuntun sínú nẹ́tíwọ́ọ̀kì rẹ àti bí a ṣe lè ṣe é pẹ̀lú Zapier.

Endpoint náà ń lo ọ̀nà POST, URL _**https://yoursite.com/wp-json/wu/v2/register**_ sì ni a fi ń pè é. Nínú ìpè yìí, ìlànà 4 ni yóò ṣiṣẹ́ nínú nẹ́tíwọ́ọ̀kì rẹ:

  * Olùlò WordPress tuntun tàbí ìdánimọ̀ rẹ nípasẹ̀ ID olùlò ni a ó dá.

  * Oníbàárà tuntun nínú Ultimate Multisite tàbí ìdánimọ̀ rẹ nípasẹ̀ ID oníbàárà ni a ó dá.

  * A ó dá sáìtì tuntun kan lórí nẹ́tíwọ́ọ̀kì WordPress.

  * Ní ìparí, a ó dá Membership tuntun kan nínú Ultimate Multisite.

Fún ìlànà yìí, ìwọ yóò nílò àwọn ìwé-ẹ̀rí API rẹ. Láti rí wọn, lọ sí pánẹ́ẹ̀lì alákóso nẹ́tíwọ́ọ̀kì rẹ, lọ sí **Ultimate Multisite > Settings** > **API & Webhooks,** kí o sì wá abala API Settings.

![Abala API Settings nínú Ultimate Multisite](/img/config/settings-api.png)

Èyí ni ìwòye kíkún ti ojú-ewé ìṣètò API:

![Ojú-ewé kíkún ìṣètò API](/img/config/settings-api-full.png)

Yan **Enable API** kí o sì gba àwọn ìwé-ẹ̀rí API rẹ.

Ní báyìí, ẹ jẹ́ ká ṣàwárí endpoint náà, lẹ́yìn náà ká dá action ìforúkọsílẹ̀ kan sílẹ̀ nínú Zapier.

## Àwọn parameter body endpoint {#endpoint-body-parameters}

Ẹ jẹ́ ká wo àkótán ìwífún tó kere jù tí a nílò láti fi ránṣẹ́ sí endpoint náà. Ní ìparí àpilẹ̀kọ yìí, ìwọ yóò rí ìpè kíkún náà.

### Oníbàárà {#customer}

Èyí ni ìwífún tí ó ṣe pàtàkì fún ìlànà dídá Olùlò àti Oníbàárà Ultimate Multisite:

"customer_id" : integer

Ó ṣeé ṣe láti fi ID oníbàárà tí a ti dá nínú nẹ́tíwọ́ọ̀kì rẹ ránṣẹ́. Bí a kò bá fi í ránṣẹ́, ìwífún tó wà ní ìsàlẹ̀ yìí ni a ó lò láti dá oníbàárà tuntun àti olùlò WordPress tuntun. ID olùlò tún lè jẹ́ fífi ránṣẹ́ ní ọ̀nà kan náà bí ID oníbàárà.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Ìwífún kan ṣoṣo tí a nílò nínú ohun yìí ni Ìpò Membership.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Àwọn ọjà** {#products}

A máa ń fún àwọn ọjà ní array pẹ̀lú ID ọjà 1 tàbí púpọ̀ sí i láti inú nẹ́tíwọ́ọ̀kì rẹ. Ṣọ́ra, endpoint yìí kì í dá àwọn ọjà. Ṣàyẹ̀wò ìwé ìtọ́sọ́nà Ultimate Multisite láti lóye endpoint dídá ọjà dáadáa.

**"products" : [1,2],**

### Ìsanwó {#payment}

Bíi ti Membership, ìpò nìkan ni a nílò.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Sáìtì {#site}

Àti láti parí body náà, a nílò URL àti Àkọlé sáìtì náà, méjèèjì nínú ohun Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Ìdáhùn láti endpoint register yóò jẹ́ array pẹ̀lú ìwífún membership tuntun tí a ṣẹ̀ṣẹ̀ dá.

## Dídá action kan sílẹ̀ nínú Zapier {#creating-an-action-in-zapier}

Pẹ̀lú ìfihàn endpoint dídá account tuntun yìí tí ó lágbára sí i, ìwọ yóò tún ní ìráyè sí action tuntun kan nínú Zapier.

Ṣé o mọ bí a ṣe ń lo àti gbádùn gbogbo ohun tí ẹ̀dà tuntun Zapier ń pèsè? Kọ́ sí i níbí. (link?)

### Dídá action kan sílẹ̀ {#creating-an-action}

Láti ṣàfihàn dáadáa bí a ṣe ń lo endpoint ìforúkọsílẹ̀ pẹ̀lú Zapier, ẹ jẹ́ ká dá ìṣepọ̀ kan pẹ̀lú Google Forms. Ní gbogbo ìgbà tí a bá fọwọ́sí fọ́ọ̀mù yìí tí a sì fi ìwífún pamọ́ sínú ṣítì ìdáhùn fọ́ọ̀mù náà, membership tuntun ni a ó dá nínú nẹ́tíwọ́ọ̀kì Ultimate Multisite.

Nínú Google Forms, ṣe fọ́ọ̀mù kan pẹ̀lú àwọn field tó kere jù tí ó ṣe pàtàkì láti dá membership tuntun sínú nẹ́tíwọ́ọ̀kì náà.

<!-- Àwòrán iboju kò sí: Fọ́ọ̀mù Google Forms pẹ̀lú àwọn field fún dídá membership tuntun -->

Ní báyìí nínú Zapier, ṣe Zap tuntun kan kí o sì so fọ́ọ̀mù tí a dá nínú Google pọ̀ nípasẹ̀ spreadsheet níbi tí data ti wa ni fipamọ́.

<!-- Àwòrán iboju kò sí: Ìṣètò trigger Zapier tí ń sopọ̀ mọ́ spreadsheet Google Forms -->

Ó ti ṣe! Fọ́ọ̀mù Google Forms náà ti sopọ̀ mọ́ Zapier, ó sì ti ṣetán láti jẹ́ kí a ṣepọ̀ rẹ̀ pẹ̀lú nẹ́tíwọ́ọ̀kì náà. Ní báyìí, ẹ jẹ́ ká lọ sí Action tí yóò jẹ́ àbájáde Trigger tí Google Forms máa ń ṣiṣẹ́ ní gbogbo ìgbà tí a bá fọwọ́sí i.

Wá app Ultimate Multisite tuntun náà kí o sì yan án. Fún irú Zap yìí, yan aṣayan Register.

<!-- Àwòrán iboju kò sí: Yíyan action Zapier tó ń fi app Ultimate Multisite hàn pẹ̀lú aṣayan Register -->

Lẹ́yìn ìgbésẹ̀ àkọ́kọ́ yìí, yan account tí yóò sopọ̀ mọ́ Zap yìí.<!-- Àwòrán iboju kò sí: Ìgbésẹ̀ ìsopọ̀ account Zapier fún Ultimate Multisite -->

Èyí ni apá tó ní ìfarabalẹ̀ jù lọ nínú gbogbo ìlànà náà. A nílò láti bá àwọn field tí ó wá láti Google Forms mu pẹ̀lú àwọn field tó kere jù tí ó ṣe pàtàkì fún endpoint register, gẹ́gẹ́ bí a ṣe fi hàn ní abala tó ṣáájú nínú àpilẹ̀kọ yìí.

Nínú àpẹẹrẹ yìí, a nílò láti ṣètò username, email, password, orúkọ àti URL wẹ́bsáìtì náà nìkan. A fi ìyókù sílẹ̀ gẹ́gẹ́ bí a ti ṣètò rẹ̀ tẹ́lẹ̀ kí gbogbo membership tí a dá lórí Google Forms yìí lè tẹ̀lé àpẹẹrẹ ọjà àti ìpò kan náà.

<!-- Àwòrán iboju kò sí: Mímu field Zapier bá ara wọn mu láàárín Google Forms àti endpoint register Ultimate Multisite -->

Pẹ̀lú ìwífún tí a ti ṣètò, tẹ̀síwájú sí ìdánwò ìkẹyìn. Lórí iboju tó kẹ́yìn, o lè rí gbogbo field tí a ó fi ránṣẹ́ sí endpoint, ìwífún kọọkan wọn àti àwọn field tí a ó fi ránṣẹ́ lọ́fìfo.<!-- Àwòrán iboju kò sí: Iboju ìdánwò Zapier tó ń fi gbogbo field tí a ó fi ránṣẹ́ sí endpoint register hàn -->

Dán Zap tuntun rẹ wò, ó sì yẹ kí ó parí ní aṣeyọrí. Bí aṣìṣe kankan bá ṣẹlẹ̀, ṣàyẹ̀wò gbogbo field àti bóyá wọ́n ń jẹ́ fífi ránṣẹ́ dáadáa. Nítorí ìwífún pọ̀, àwọn ohun kan lè kọjá láìṣe àkíyèsí.

### Àwọn parameter endpoint kíkún {#complete-endpoint-parameters}

Èyí ni ìpè kíkún àti gbogbo àwọn àṣàyàn field tí a lè fi ránṣẹ́.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
