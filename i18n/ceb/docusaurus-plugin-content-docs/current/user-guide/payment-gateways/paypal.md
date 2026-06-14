---
title: Pag-set up sa PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Pag-set Up sa PayPal Gateway (v2)

_**MAHINUNGAN: Kini nga article nagtumong sa Ultimate Multisite version 2.x.**_

Pwede nimo i-activate hangtod upat ka pamaagi sa pagbayad sa among payment settings page: Stripe, Stripe Checkout, PayPal ug Manual. Niining article, ipakita nato kung unsaon ang pag-integrate uban sa **PayPal**.

Parehas sama sa Stripe, gigamit sab og daghan ang PayPal para sa online payments, ilabi na sa mga WordPress websites. Giya kining article nimo kung unsaon paggamit sa PayPal isip pamaagi sa pagbayad nga available sa imong network.

Palihug hinumdumi nga kinahanglan nimo og **PayPal Business account** aron makakuha sa API credential nga gikinahanglan para niini nga integration.

## Pag-enable sa PayPal sa imong network

Aron ma-enable ang PayPal isip pamaagi sa pagbayad nga available sa imong network, pumunta sa **Ultimate Multisite > Settings > Payments** tab ug i-tick ang kahon sa sunod sa PayPal.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Paggamit sa guided setup wizard

Ang Ultimate Multisite 2.10.0 nagdugang og guided PayPal setup wizard sa payment gateway settings. Human ma-enable nimo ang PayPal, gamita ang wizard sa **Ultimate Multisite > Settings > Payments** aron piliun kung unsaon nimo pag-connect sa gateway ug kumpirmahon kung unsang credentials ang gihangyo pa nga kinahanglan una sa pag-save.

Ang wizard nagsuporta sa duha ka mga dalan sa setup:

* **Manual credential entry**: Gamita ni path ani kung naa kay PayPal API credentials na, kung wala'y available nga OAuth setup para sa imong account, o kung gusto nimo i-copy ang mga credentials gikan mismo sa PayPal. I-enter ang API Username, API Password, ug API Signature sa mga field sa PayPal, unya i-save ang payment settings.
* **OAuth connection gate**: Gamita lang ni path kung available ug enabled na ang OAuth option para sa imong install. Ang wizard nagpakita sa OAuth flow nga naa sa likod og feature flag, busa ang mga network nga walay flag magpadayon sa paggamit sa manual credential entry fields.

Kung wala nimo makita ang OAuth option sa wizard, tapuson ang manual credential entry flow sa ubos. Ang gateway nagtrabaho gamit sa parehas nga PayPal Business API credentials sama sa mga miaging Ultimate Multisite 2.x releases.

## Pagkuha sa PayPal API credentials

Pag-enable na sa PayPal isip payment gateway, kinahanglan nimo pun-on ang mga field para sa PayPal API **Username**, PayPal API **Password** ug PayPal API **Signature**.

Mahimo nimo kini makuha pinaagi sa pag-login sa imong [Live](https://www.paypal.com/home) o [Sandbox](https://www.sandbox.paypal.com/home) account sa PayPal.

(Hinumdumi nga pwede nimo gamiton ang **sandbox mode** para mag-test og mga bayad ug makita kung tama ba ang setup sa gateway. I-toggle lang ang katumbas nga section.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Para mangayo og API Signature o Certificate credentials para sa imong PayPal account:

  1. Adto sa imong [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Sa seksyon nga **API access**, i-click ang **Update**.

3. Sa ilalom sa **NVP/SOAP API integration (Classic)**, i-click ang **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Kung may na-generate ka nang API Signature o Certificate, dadalhin ka sa usa ka pahina diin makita nimo ang imong mga credentials.

     * _**Nota:** Kung gi-prompt ka nga i-verify ang imong PayPal account, sundon lang ang mga instruksyon sa screen._

  4. Pilia ang _usa_ sa mosunod nga mga opsyon, dayon i-click ang **Agree and Submit**.

     * **Request API Signature** – Piliha para sa API Signature authentication.

     * **Request API Certificate** – Piliha para sa API Certificate authentication.

  5. Ang PayPal maghimo sa imong API credentials sa mosunod nga paagi:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** naglakip og API Username, API Password, ug Signature, nga dili mopahimna. Kini nga mga value gi-hide sa default alang sa dugang seguridad. I-click ang **Show/Hide** para i-toggle kini on ug off. Pagkatapos, i-click ang **Done**.

     * **API Certificate credentials** naglakip og API Username, API Password, ug Certificate, nga awtomatikong mopahimna human tulo ka tuig. I-click ang **Download Certificate** para i-save ang API Certificate sa imong desktop.

Naa na, kompleto na ang imong PayPal payment integration!

Kung naa kay bisan unsang pangutana bahin sa mga setting sa PayPal, mahimo nimong magrefer sa [Help Center](https://www.paypal.com/br/smarthelp/home) sa PayPal.
