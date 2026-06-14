---
title: Whakawhanainga PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Whakawhanaungaho i te Gateway o PayPal (v2)

_**Tohutohu WAIPA: Ko tēnei tikanga he tino whakamārama ki Ultimate Multisite v2.x.**_

Ko te mea, e taea ai koe te whakamahi upaere pai takawaenga (up to four methods of payment) i te puta mai o te oneto o āhuatanga o waiata (payment settings page): Stripe, Stripe Checkout, PayPal me Manual. I tēnei tikanga, ka whakaatu atu tātou i te mea he pēteranga ki **PayPal**.

Kia kaha, ko te PayPal he tino whakamahinga mō ngā pēteranga online, he tino pai ana i ngā waka WordPress. Ko tēnei tikanga ka tūmanaki koe i te whakamahi o te PayPal mō pēteranga he tino whai tika ana i runga i tō waka (network).

Kia tino mārama, kua roa koe e hiahia ana i **PayPal Business account** kia pahi i te credential API e pēnei i te whakamahi.

## Whakawhanaungaho i te PayPal i tō waka

Mō te whakawhanaungaho i te PayPal mō pēteranga he tino whai tika ana i runga i tō waka, pono ki te **Ultimate Multisite > Settings > Payments** tab, ā, whakaa koe i te bokoru (tick the box) i runga i te PayPal.

![Whakawhanaungaho i te PayPal i ngā gateway o pēteranga e active](/img/config/settings-payment-gateways.png)

## Whakawhanaungaho i te whakatau (setup wizard)

Ko Ultimate Multisite 2.10.0 e puta mai i te whakamahi i he whakatau (guided setup wizard) mō PayPal i ngā pēteranga o te gateway. I taiao koe i te PayPal, whakamahi tēnei whakatau i **Ultimate Multisite > Settings > Payments** kia whiri i te mea kua tino pai koe ki te whakatō i te gateway me te whakaae i ko atu credential he hiahia ana mō i te whakatō.

Ko te whakatau e pēnei i āhuatanga whakawhanaungaho (setup paths) rua:

* **Te whakamahi mō whakamāhi kura (Manual credential entry)**: Whakarongo ki i te wāhi tēnei i roto i te whenua i heke i eke atu koe ki ngā credentials o PayPal API, i ahau e taea ai te whai whakaaro OAuth mo taku account, he tino pai ana ahau ki te whakopaimahi (copy) ngā credentials noa i PayPal. Whakarongo ki te Username o API, Password o API, me Signature o API i ngā fīka o PayPal, ā, whakatimihia i te whakaritenga o te pēnitanga (payment settings).
* **Pāinga konekarite OAuth (OAuth connection gate)**: Whakarongo ki te wāhi tēnei anō ko i roto i te whenua i heke i eke atu koe ki te whai whakaaro OAuth, i te mea he tino pai ana ahau ki te whai whakaaro OAuth mo taku install. He tino whakamārama ai te wizard (whakawāhi) i te flow o OAuth i runga i he feature flag, ko ngā wāhi e kino ana me ngā flag ei noa i te whai whakaaro kia kaha ki te whakamahi i ngā fīka whakamāhi kura.

Ko te mea kei a koe ka tino pai ahau ki te whakopaimahi (complete) i te flow o manual credential entry i runga i te whenua i kei te tino pai ahau ki te whai whakaaro OAuth i te wizard, he tino pai ana ahau ki te whakamahi ngā credentials o PayPal Business API eke atu i ngā wāhi Ultimate Multisite 2.x pēnitanga (releases) i te parātere.

## Whakarongo i ngā credentials o PayPal API

I tētahi wā, i heke i PayPal mōna pēnitanga (payment gateway), ka tino pai ahau ki te whakatipu i ngā fīka mo **Username** o API o PayPal, **Password** o API o PayPal, me **Signature** o API o PayPal.

Ko koe e taea ai te pahi i tēnei i te papai i runga i taku account [Live](https://www.paypal.com/home) he tino pai ana ahau ki te whai whakaaro Sandbox (Sandbox), ko https://www.sandbox.paypal.com/home.

(He tino whakamārama ai, ka taea e koe te whakamahi te **sandbox mode** mō te whakamāhi pēnitanga me te whakaahua i te mea he tino pai ana ahau ki te whai whakaaro he tino pai ana ahau ki te whakawhiti (toggle) i te sekse e tika ana.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Mō te whero ngā API Signature me ngā credentials o Certificate mo taku account o PayPal:

  1. Pāinga ki te [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) mo taku account.

  2. I te sekse **API access**, whakatipu i **Update**.

3. I roto i **NVP/SOAP API integration (Classic)**, klik ki **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Ko he tino whaiakino koe i te API Signature pe Certificate, ka whakawhanakea ai ki ngā puta mai ki te puta noa ko he wāhi i taea ai koe te māmā i waenga i ngā credentials ahau.

     * _**He whakamārama:** Ko he tino whaiakino koe i te PayPal account ahau, kia whai i ngā hiahia o te puta mai._

  4. Whakarite **taku** optioni e whitu ana, ā, klik ki **Agree and Submit**.

     * **Request API Signature** – Whakarite ko mō authentication API Signature.

     * **Request API Certificate** – Whakarite ko mō authentication API Certificate.

  5. Ko PayPal e whakawhanakea i ngā credentials API ahau i te mea:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** e hoki ana ki he Username API, Password API, me Signature, ko he tino pai ahau (does not expire). Ko ngā wāhi he tino whaiakino ahau i te mea he whakaatanga ahau (hidden by default) mō te tangata tika. Klik ki **Show/Hide** kia whakahou koe i te mea e hoki ana ahau me te whakahou ahau. I te mea ka whakatā, klik ki **Done**.

     * **API Certificate credentials** e hoki ana ki he Username API, Password API, me Certificate, ko he tino pai ahau (expires automatically after three years). Klik ki **Download Certificate** kia whai i te API Certificate ki tō desktop.

He pēpi ahau, ka whakatā koe i tō whakawhiti kōrero PayPal!

Ko he tino whakamārama koe i ngā mea e hoki ana i te whakaritenga o te PayPal, ko he tino pai ahau (refer to PayPal's [Help Center](https://www.paypal.com/br/smarthelp/home)).
