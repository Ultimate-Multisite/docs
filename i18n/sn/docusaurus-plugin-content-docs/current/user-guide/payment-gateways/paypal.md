---
title: Kugadzira PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Kuita Kutiwe (v2) {#setting-up-the-paypal-gateway-v2}

_**CHINARI CHINARI: Iriro iri rinotokozero iri riri Ultimate Multisite v2.x.**_

Unogona kuvaura nzira upfungwa nekuita zvinotevera dzimwe nzira dzehunhu huru pa panyapiro yenyu ye settings ya payment: Stripe, Stripe Checkout, PayPal uye Manual. Muirongo iyi, tichange sei kutanga hunhu ne**PayPal**.

Seunenge zvinhu zveStripe, PayPal inogona kuwanikwa zvakawanda kune zvinotevera kubva munzira dzeonline, nekubvunza mazuva anonyanya kuno WordPress websites. Irongo iyi rinogona kukubatsira sei kuita kuti uone sei kutenda PayPal sehunhu rekuita payment panzira inenge yakaita mu network yako.

Ziva kuti unofanira kuva ne**PayPal Business account** kuti uone API credential inotorewa kune hunhu hwo hwakakosha kune hunhu hwo hwo.

## Kuvaura PayPal munzira yako {#enabling-paypal-on-your-network}

Kuti utangeiwe PayPal sehunhu rekuita payment panzira inenge yakaita mu network yako, ndichida kuti uende ku **Ultimate Multisite > Settings > Payments** tab uye upfungire (tick) box yakanaka nePayPal.

![Kuvaura PayPal munzira dzehunhu dzakaita](/img/config/settings-payment-gateways.png)

## Kuita setup wizard inotevera {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 inopa setup wizard inotevera kune PayPal mu settings ya payment gateway. Apana utangeiwe PayPal, unenge uenda nemazwibu (wizard) munzira **Ultimate Multisite > Settings > Payments** kuti uve sei uchigadzirisa hunhu hwako uye kuti uve sei uchigona kuona zvinotorewa kune hunhu hwo hwakakosha panguva unoreva.

Wizard inogona kubatsira nzira dzehunhu dzimwe:

* **Kutanga kwecredentials manual**: Unoda kuenda pano kana wako uine credentials ya PayPal API, kana usina OAuth setup yakabva kune account yako, kana kana unoda kunyora credentials kubva kune PayPal wese. Ingira Username ya API, Password ya API, uye Signature ya API mu fields dzakarepa dze PayPal, ndipo ndichikumbira ku save payment settings.
* **OAuth connection gate**: Unoda kuenda pano chete kana OAuth option inenge yakaita uye yakabva kune install yako. Wizard inonyora flow ye OAuth pane feature flag, zvichiita kuti networks dzine flag dzaiitei dziri dzinotanga kuenda nefields dze manual credential entry.

Kana usina kuona OAuth option mu wizard, ndichikumbira ukumbire flow ya manual credential entry pano. Gateway inoreva necredentials dze PayPal Business API anogona kuenda nemazuva ano Ultimate Multisite 2.x.

## Kuwana credentials dzapa PayPal API {#getting-the-paypal-api-credentials}

Ngepa iwe wakaita PayPal yakaita gateway ye payment, unoda kuisa fields dze **Username** ya PayPal API, **Password** ya PayPal API uye **Signature** ya PayPal API.

Unogona kuwana izvi nekuenda ku-log in mu account yako ya [Live](https://www.paypal.com/home) kana [Sandbox](https://www.sandbox.paypal.com/home).

(Kumbira kuti unogona kuita **sandbox mode** kuti utese payments uye utange nekuti gateway inenge yakapfuma zvakanaka. Zvinhu rine flag dzaiitei dziri dzinotanga kuenda nefields dze manual credential entry.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Kuti utange kudzidza API Signature kana certificates dze PayPal account yako:

  1. Tendera ku [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) yako.

  2. Mu section ya **API access**, ndichikumbira kuti upereke **Update**.
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

3. Under **NVP/SOAP API integration (Classic)** , nda **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Kana uri wako warauriwe API Signature kana Certificate, unozvabva ku pfungwa inotevera ku peji inozviona zvinogona kuwana credentials dzako.

     * _**Chii:** Kana vachida kuti uviri akauno wako we PayPal, ndichida kuti ufuwe zvinhu zvakaita kune chivimbo chekuti unenge uri munhu anobva naye._

  4. Chigadzira **chimwe** chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka chakanaka ch
