---
title: Ukusetha i-PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Ukusetha i-PayPal Gateway (v2) {#setting-up-the-paypal-gateway-v2}

_**INOTHI ELIBALULEKILE: Le athikili ibhekisela ku-Ultimate Multisite version 2.x.**_

Ungavula izindlela zokukhokha ezifika kwezine ekhasini lethu lezilungiselelo zokukhokha: Stripe, Stripe Checkout, PayPal kanye ne-Manual. Kule athikili, sizobona ukuthi singayihlanganisa kanjani ne-**PayPal**.

Njenge-Stripe, i-PayPal isetshenziswa kakhulu ekukhokheni ku-inthanethi, ikakhulukazi kumawebhusayithi e-WordPress. Le athikili izokuqondisa ukuthi uyisebenzisa kanjani i-PayPal njengendlela yokukhokha etholakala kunethiwekhi yakho.

Qaphela ukuthi udinga ukuba ne-**PayPal Business account** ukuze uthole imininingwane ye-API edingekayo kulokhu kuhlanganiswa.

## Ukuvula i-PayPal kunethiwekhi yakho {#enabling-paypal-on-your-network}

Ukuze uvule i-PayPal njengendlela yokukhokha etholakalayo kunethiwekhi yakho, iya kuthebhu ethi **Ultimate Multisite > Settings > Payments** bese umaka ibhokisi eliseduze ne-PayPal.

![Ukuvula i-PayPal kuma-payment gateways asebenzayo](/img/config/settings-payment-gateways.png)

## Ukusebenzisa iwizard yokusetha eqondisiwe {#using-the-guided-setup-wizard}

I-Ultimate Multisite 2.10.0 ingeza iwizard yokusetha i-PayPal eqondisiwe kuzilungiselelo ze-payment gateway. Ngemva kokuvula i-PayPal, sebenzisa iwizard ku-**Ultimate Multisite > Settings > Payments** ukuze ukhethe ukuthi ufuna ukuxhuma kanjani i-gateway futhi uqinisekise ukuthi yimiphi imininingwane esadingeka ngaphambi kokugcina.

Iwizard isekela izindlela ezimbili zokusetha:

* **Ukufaka imininingwane mathupha**: Sebenzisa le ndlela uma usuvele unemininingwane ye-PayPal API, uma ukusetha kwe-OAuth kungatholakali ku-account yakho, noma uma ukhetha ukukopisha imininingwane ku-PayPal ngokwakho. Faka i-API Username, i-API Password, kanye ne-API Signature ezinkambini ze-PayPal, bese ugcina izilungiselelo zokukhokha.
* **Isango lokuxhuma le-OAuth**: Sebenzisa le ndlela kuphela uma inketho ye-OAuth itholakala futhi ivuliwe ekufakweni kwakho. Iwizard ikhombisa ukugeleza kwe-OAuth ngemuva kwe-feature flag, ngakho amanethiwekhi angenayo i-flag aqhubeka nokusebenzisa izinkambu zokufaka imininingwane mathupha.

Uma ungayiboni inketho ye-OAuth kwiwizard, qedela ukugeleza kokufaka imininingwane mathupha ngezansi. I-gateway isebenza ngemininingwane efanayo ye-PayPal Business API njengokukhishwa kwangaphambilini kwe-Ultimate Multisite 2.x.

## Ukuthola imininingwane ye-PayPal API {#getting-the-paypal-api-credentials}

Uma i-PayPal isivuliwe njenge-payment gateway, kuzodingeka ugcwalise izinkambu ze-PayPal API **Username** , PayPal API **Password** kanye ne-PayPal API **Signature**.

Ungakuthola lokhu ngokungena ku-account yakho ye-PayPal [Live](https://www.paypal.com/home) noma [Sandbox](https://www.sandbox.paypal.com/home).

(Khumbula ukuthi ungasebenzisa **sandbox mode** ukuhlola izinkokhelo futhi ubone ukuthi i-gateway isethwe kahle yini. Vele uvule isigaba esihambisanayo.)

![Izinkambu zemininingwane ye-PayPal API kanye ne-toggle ye-sandbox mode](/img/config/settings-payment-gateways.png)

Ukuze ucele i-API Signature noma imininingwane ye-Certificate ye-account yakho ye-PayPal:

  1. Iya ku-[Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) yakho.

  2. Esigabeni se-**API access**, chofoza **Update**.
![PayPal Account Settings enesigaba se-API access](/img/config/settings-payment-gateways.png)

  3. Ngaphansi kwe-**NVP/SOAP API integration (Classic)** , chofoza **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Uma usuvele ukhiqize i-API Signature noma i-Certificate, uzoqondiswa ekhasini lapho ungathola khona imininingwane yakho.

     * _**Qaphela:** Uma ucelwa ukuthi uqinisekise i-account yakho ye-PayPal, landela imiyalelo esesikrinini._

  4. Khetha _eyodwa_ yezinketho ezilandelayo, bese uchofoza **Agree and Submit**.

     * **Request API Signature** – Khetha ukuze uqinisekise nge-API Signature.

     * **Request API Certificate** – Khetha ukuze uqinisekise nge-API Certificate.

  5. I-PayPal ikhiqiza imininingwane yakho ye-API kanje:
![Imininingwane ye-API ekhiqizwe yi-PayPal](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** ifaka i-API Username, i-API Password, kanye ne-Signature, engaphelelwa yisikhathi. Lawa manani afihliwe ngokuzenzakalelayo ukuze kwengezwe ukuphepha. Chofoza **Show/Hide** ukuze uwavule futhi uwavale. Uma usuqedile, chofoza **Done**.

     * **API Certificate credentials** ifaka i-API Username, i-API Password, kanye ne-Certificate, ephelelwa yisikhathi ngokuzenzakalelayo ngemva kweminyaka emithathu. Chofoza **Download Certificate** ukuze ulondoloze i-API Certificate kudeskithophu yakho.

Yilokho-ke, ukuhlanganiswa kwakho kokukhokha nge-PayPal sekuphelile!

Uma unemibuzo mayelana nezilungiselelo ze-PayPal, ungabhekisa ku-[Help Center](https://www.paypal.com/br/smarthelp/home) ye-PayPal.
