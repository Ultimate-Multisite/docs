---
title: Innstillingar PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Innreiðing PayPal-gætimótli (v2) {#setting-up-the-paypal-gateway-v2}

_**VIÐVÖGUN: Þessi grein er tengd Ultimate Multisite v2.x.**_

Þú getur aktivert upp til fjórar betalingsformhæðir á sínum betalingsþáttumstillingum í settum **Ultimate Multisite**: Stripe, Stripe Checkout, PayPal og Handamál. Í þessari greinin sjáum hvernig við tengjum okkur **PayPal**.

Þ eins og hjá Stripe er PayPal mjög notað fyrir netbætur, sérstaklega á WordPress vísítendum. Þessi grein mun leiða þig í hvernig þú getur notað PayPal sem betalingsformhæðir sem er til að ganga á nýtingu í nálgunni þinni.

Litið það að þú þarft **PayPal Business account** til að fá API-kennileika sem er nauðsynleg fyrir þennan tengingu.

## Aktiva PayPal á nálgunni þinni {#enabling-paypal-on-your-network}

Til að aktiva PayPal sem tilfyllt betalingsformhæðir á nálgunni þinni, ferðu yfir í **Ultimate Multisite > Settings > Payments** tab og vickingja af boksins við PayPal.

![Aktiva PayPal í virkum betalingsgætimótli](/img/config/settings-payment-gateways.png)

## Notkun leiðarstefnu uppsetningar {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 hefur lagt á leiðarstefnu uppsetningu PayPal í settum betalingsgætimótli. Eftir að þú aktiva PayPal, nota leiðarstefnuna á **Ultimate Multisite > Settings > Payments** til að velja hvernig þú vilt tengja gætimótlið og staðfesta hvort kennileiki eru enn nauðsynlegar áður en þú hefur lagt farið.

Leiðarstefnan stendur fyrir tveimjum uppsetjastengdum:

* **Manuell innfæringu av legitimasjonar**: Bruk denne stien viss du allereie har PayPal API-legitimasjonar, om OAuth-innstilling ikkje er tilgjengeleg for kontoen din, eller viss du føretrekkjer å kopiera legitimasjonane sjølv frå PayPal. Skriv inn API Username, API Password og API Signature i dei relevante feltene i PayPal, og lagre så betalingsinnstillingane.
* **OAuth-tilkopling (connection gate)**: Bruk denne stien berre viss OAuth-alternativet er tilgjengeleg og aktivert for installasjonen din. Veilederen viser OAuth-flyten bak ein feature flag, så nettverk utan flagget held fram med å bruke feltene for manuell innfærling av legitimasjonar.

Viss du ikkje ser OAuth-alternativet i veilederen, fullfør den manuelle innfæringsprosessen nedanfor. Gatewayen fungerer med dei same PayPal Business API-legitimasjonane som tidlegare Ultimate Multisite 2.x utgåver.

## Få tilgang til PayPal API-legitimasjonar {#getting-the-paypal-api-credentials}

Når du har aktivert PayPal som betalingsgateway, må du fylle ut feltene for PayPal API **Username**, PayPal API **Password** og PayPal API **Signature**.

Du kan få dette ved å logge deg inn på din PayPal [Live](https://www.paypal.com/home) eller [Sandbox](https://www.sandbox.paypal.com/home) konto.

(Hugs at du kan bruke **sandbox-modus** til å teste betalingar og sjå om gatewayen er korrekt sett opp. Berre slå på den aktuelle delen.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

For å be om API Signature eller sertifikatlegitimasjonar for PayPal-kontoen din:

  1. Gå til [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. I seksjonen **API access**, klikk på **Update**.

3. Under **NVP/SOAP API integration (Classic)**, klikk på **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Ef þú hefur jáð gerst API Signature eða Certificate, verður þú leiðréttur til yfir landsena með að finna gögnum þínum.

     * _**Athugi:** Ef þú ert leitt í því að staðfesta PayPal reikninginn þinn, fylgja þá skýrslum á skjámyndinni._

  4. Veldu **eina** af eftirfarandi valkostna, svo klikkaðu á **Agree and Submit**.

     * **Request API Signature** – Veldu fyrir vinnslu með API Signature authentication.

     * **Request API Certificate** – Veldu fyrir vinnslu með API Certificate authentication.

  5. PayPal gerir þínum API gögnum eins og eftirfarandi:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** fylgja með API Username, API Password og Signature, sem ekki fer á úldu. Þessar gildi eru í raun hýrt af raunverulegum gögnum fyrir öryggi. Klikkaðu á **Show/Hide** til að slá þau á og af. Þegar du ert færdurður, klikkaðu á **Done**.

     * **API Certificate credentials** fylgja með API Username, API Password og Certificate, sem fer sjálft á úldu eftir þrjú ár. Klikkaðu á **Download Certificate** til að safna API Certificate í skráninguna þinni.

Það er allt, þín PayPal betalingssamþætting er fullfærð!

Ef þér eru spurningar um innstillingar PayPal, geturðu skoða [Help Center](https://www.paypal.com/br/smarthelp/home) PayPal-sida.
