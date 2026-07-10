---
title: Ukusetha i-Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Ukusetha i-Stripe Gateway (v2) {#setting-up-the-stripe-gateway-v2}

_**INOTHI ELIBALULEKILE: Lesi sihloko sibhekisela ku-Ultimate Multisite inguqulo 2.x.**_

Ungavula izindlela zokukhokha ezifika kwezine ekhasini lethu lezilungiselelo zokukhokha: Stripe, Stripe Checkout, PayPal kanye nokukhokha okwenziwa ngesandla. Kulesi sihloko, sizobona ukuthi singahlanganisa kanjani ne-**Stripe**.

## Ukuvula i-Stripe {#enabling-stripe}

Ukuze uvule i-Stripe njengendlela yokukhokha etholakalayo kunethiwekhi yakho, iya ku-**Ultimate Multisite > Izilungiselelo > Izinkokhelo** bese umaka i-toggle eseduze kwe-**Stripe** noma **Stripe Checkout** esigabeni sama-Gateway Okukhokha Asebenzayo.

![Ukuvula i-Stripe kuma-gateway okukhokha asebenzayo](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Le ndlela izobonisa indawo yokufaka inombolo yekhadi lesikweletu ngesikhathi sokukhokha.

![Inkambu yekhadi lesikweletu ye-Stripe inline ngesikhathi sokukhokha](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Le ndlela izoqondisa kabusha ikhasimende ekhasini le-Stripe Checkout ngesikhathi sokukhokha.

![Ikhasi lokuqondisa kabusha le-Stripe Checkout ngesikhathi sokukhokha](/img/config/settings-payment-gateways.png)

Ukuthola okhiye bakho be-Stripe API

Uma i-Stripe isivuliwe njengendlela yokukhokha, kuzodingeka ugcwalise izinkambu ze-**Stripe Publishable Key** kanye ne-**Stripe Secret Key** . Ungakuthola lokhu ngokungena ku-Account yakho ye-Stripe.

_**Qaphela:** ungavula **imodi ye-Sandbox** ukuze uhlole ukuthi indlela yokukhokha iyasebenza yini._

![Izinkambu zokhiye be-Stripe API kanye ne-toggle yemodi ye-sandbox](/img/config/settings-payment-gateways.png)

Ku-dashboard yakho ye-Stripe, chofoza **Developers** ekhoneni eliphezulu kwesokudla, bese uchofoza **API Keys** kumenyu engakwesobunxele.

![Isigaba se-Developers ku-dashboard ye-Stripe esinama-API Keys](/img/config/settings-payment-gateways.png)

Ungasebenzisa **Test Data** (ukuhlola ukuthi ukuhlanganiswa kuyasebenza yini kusayithi lakho lokukhiqiza) noma ungakusebenzisi. Ukuze ushintshe lokhu, shintsha i-toggle ye-**Viewing test data**.

![I-toggle ye-Stripe Viewing test data](/img/config/settings-payment-gateways.png)

Kopisha inani elivela ku-**Publishable key** kanye ne-**Secret key** , kukholomu ye-**Token** bese ulinamathisela ezinkambini ze-Ultimate Multisite Stripe Gateway. Bese uchofoza ku-**Save Changes**.

![Amanani e-publishable key ne-secret key e-Stripe](/img/config/settings-payment-gateways.png)

![Ukunamathisela okhiye be-Stripe kuzilungiselelo ze-Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Ukusetha i-Stripe Webhook {#setting-up-stripe-webhook}

I-Stripe ithumela imicimbi ye-webhook eyazisa i-Ultimate Multisite noma nini lapho kwenzeka umcimbi ku-**akhawunti yakho ye-stripe**.

Chofoza **Developers** bese ukhetha into ethi **Webhooks** kumenyu engakwesobunxele. Bese ohlangothini lwesokudla uchofoze **Add endpoint** *.*

![Ikhasi le-Stripe Webhooks elinenkinobho ye-Add endpoint](/img/config/settings-payment-gateways.png)

Uzodinga **Endpoint URL** *.* I-Ultimate Multisite ikhiqiza ngokuzenzakalelayo i-endpoint URL ongayithola ngezansi nje kwenkambu ye-**Webhook Listener URL** esigabeni se-**Ultimate Multisite Stripe Gateway**_._

![Inkambu ye-Webhook Listener URL kuzilungiselelo ze-Stripe gateway](/img/config/settings-payment-gateways.png)

**Kopisha** i-endpoint URL bese **uyinamathisela** enkambini ye-Stripe **Endpoint URL**.

![Ukunamathisela i-endpoint URL ekusetheni i-Stripe webhook](/img/config/settings-payment-gateways.png)

Okulandelayo ukukhetha **Event** *.* Ngaphansi kwale nketho, udinga nje ukumaka ibhokisi elithi **Select all events** bese uchofoza ku-**Add events**. Ngemuva kwalokho chofoza **Add Endpoint** ukuze ulondoloze izinguquko.

![Ukukhetha yonke imicimbi nokwengeza i-Stripe endpoint](/img/config/settings-payment-gateways.png)

Yilokho kuphela, ukuhlanganiswa kwakho kokukhokha kwe-Stripe sekuqediwe!
