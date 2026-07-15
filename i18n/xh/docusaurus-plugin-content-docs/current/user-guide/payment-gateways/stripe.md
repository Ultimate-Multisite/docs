---
title: Ukuseta Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Ukuseta i-Stripe Gateway (v2)

_**INQAKU ELIBALULEKILEYO: Eli nqaku libhekisa ku-Ultimate Multisite inguqulelo 2.x.**_

Ungavula ukuya kutsho kwiindlela ezine zentlawulo kwiphepha lethu lezicwangciso zentlawulo: Stripe, Stripe Checkout, PayPal kunye neNtlawulo Yesandla. Kweli nqaku, siza kubona indlela yokudibanisa ne-**Stripe**.

## Ukuvula i-Stripe {#enabling-stripe}

Ukuze uvule i-Stripe njengendawo ekhoyo yentlawulo kwinethiwekhi yakho, yiya ku-**Ultimate Multisite > Izicwangciso > Iintlawulo** uze uphawule iqhosha lokutshintsha elisecaleni kwe-**Stripe** okanye **Stripe Checkout** kwicandelo lamaSango eNtlawulo Asebenzayo.

![Ukuvula i-Stripe kumasango entlawulo asebenzayo](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Le ndlela iya kubonisa indawo yokufaka inombolo yekhadi letyala ngexesha lokuhlawula.

![Intsimi yekhadi letyala ye-Stripe engaphakathi ngexesha lokuhlawula](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Le ndlela iya kuthumela umthengi kwiphepha le-Stripe Checkout ngexesha lokuhlawula.

![Iphepha lokuthunyelwa kwakhona le-Stripe Checkout ngexesha lokuhlawula](/img/config/settings-payment-gateways.png)

Ukufumana amaqhosha akho e-Stripe API

Nje ukuba i-Stripe ivulwe njengendawo yentlawulo, kuya kufuneka ugcwalise iintsimi ze-**Qhosha elipapashwayo le-Stripe** kunye **neQhosha eliyimfihlo le-Stripe** . Ungakufumana oku ngokungena kwi-akhawunti yakho ye-Stripe.

_**Qaphela:** ungavula **imo ye-Sandbox** ukuze uvavanye ukuba indlela yentlawulo iyasebenza._

![Iintsimi zeqhosha le-Stripe API kunye neqhosha lokutshintsha imo ye-sandbox](/img/config/settings-payment-gateways.png)

Kwi-Stripe Dashboard yakho, cofa **Abaphuhlisi** kwikona ephezulu ekunene, emva koko **Amaqhosha e-API** kwimenyu esekhohlo.

![Icandelo labaPhuhlisi kwi-Stripe Dashboard elinamaQhosha e-API](/img/config/settings-payment-gateways.png)

Ungasebenzisa **Idatha yovavanyo** (ukuvavanya ukuba ukudityaniswa kuyasebenza kwisiza sakho semveliso) okanye ungayisebenzisi. Ukutshintsha oku, jika iqhosha lokutshintsha le-**Ukujonga idatha yovavanyo**.

![Iqhosha lokutshintsha le-Stripe lokujonga idatha yovavanyo](/img/config/settings-payment-gateways.png)

Kopa ixabiso elivela kwi-**qhosha elipapashwayo** kunye **neqhosha eliyimfihlo** , kwikholamu ye-**Token** uze ulincamathisele kwiintsimi ze-Ultimate Multisite Stripe Gateway. Emva koko cofa ku-**Gcina Utshintsho**.

![Amaxabiso eqhosha elipapashwayo kunye neliyimfihlo le-Stripe](/img/config/settings-payment-gateways.png)

![Ukuncamathisela amaqhosha e-Stripe kwizicwangciso ze-Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Ukuseta i-Stripe Webhook {#setting-up-stripe-webhook}

I-Stripe ithumela iziganeko ze-webhook ezazisa i-Ultimate Multisite ngalo naliphi na ixesha isiganeko sisenzeka **kwi-akhawunti yakho ye-stripe**.

Cofa **Abaphuhlisi** uze ukhethe into ethi **Webhooks** kwimenyu esekhohlo. Emva koko kwicala lasekunene cofa **Yongeza endpoint** *.*

![Iphepha le-Stripe Webhooks elineqhosha lokongeza endpoint](/img/config/settings-payment-gateways.png)

Uya kufuna **i-URL ye-endpoint** *.* Ultimate Multisite ivelisa ngokuzenzekelayo i-URL ye-endpoint onokuyifumana kanye ngezantsi kwentsimi ye-**URL yoMmameli we-Webhook** kwicandelo le-**Ultimate Multisite Stripe Gateway**_._

![Intsimi ye-URL yoMmameli we-Webhook kwizicwangciso ze-Stripe gateway](/img/config/settings-payment-gateways.png)

**Kopa** i-URL ye-endpoint uze **uyincamathisele** kwintsimi ye-Stripe **URL ye-endpoint**.

![Ukuncamathisela i-URL ye-endpoint kuseto lwe-Stripe webhook](/img/config/settings-payment-gateways.png)

Okulandelayo kukukhetha **Isiganeko** *.* Phantsi kolu khetho, kufuneka nje uphawule ibhokisi ethi **Khetha zonke iziganeko** uze ucofe ku-**Yongeza iziganeko**. Emva koko cofa **Yongeza Endpoint** ukugcina utshintsho.

![Ukukhetha zonke iziganeko nokongeza i-Stripe endpoint](/img/config/settings-payment-gateways.png)

Kuphelele apho, ukudityaniswa kwentlawulo yakho ye-Stripe kugqityiwe!
