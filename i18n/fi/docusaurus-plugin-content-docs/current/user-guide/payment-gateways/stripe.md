---
title: Stripe-asetusten asettaminen
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe-portaalauksen asennus (v2) {#setting-up-the-stripe-gateway-v2}

_**TÄRKEÄ HUOMIO: Tämä artikkeli viittaa Ultimate Multisite -versioon 2.x.**_

Voit aktivoida jopa neljä maksutapaa maksun asetuksissasi: Stripe, Stripe Checkout, PayPal ja Manuaalinen. Tässä artikkelissa katsomme, miten integroidaan **Stripeen**.

## Stripen aktivoiminen {#enabling-stripe}

Jotta voit käyttää Stripea saatavaksi maksutapaa verkostossasi, siirry kohtaan **Ultimate Multisite > Asetukset > Maksut** ja valitse ruudunvalitsin (toggle) kohdasta **Stripe** tai **Stripe Checkout** Aktiiviset maksutapa-gateway -osiossa.

![Stripen aktivoiminen aktiivisissa maksutapa-gatewayissa](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Tämä menetelmä näyttää tilan, johon voit syöttää luottokorttitiedot kassalla.

![Stripen inline-luottokorttisuunnittelukenttä kassalla](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Tämä menetelmä ohjaa asiakkaan Stripe Checkout -sivulle kassalla.

![Stripen Checkout-ohjattu sivu kassalla](/img/config/settings-payment-gateways.png)

### Stripen API-avaimien hankkiminen {#setting-up-stripe-webhook}

Kun olet aktivoimassa Stripea maksutapa-gateway-näppärinä, sinun on täytettävä kentät **Stripe Publishable Key** ja **Stripe Secret Key** -kentöihin. Voit saada nämä kirjautumalla sisään Stripe-tilillesi.

_**Huom:** Voit aktivoida **Sandbox-tilan** testataksesi, toimivaanko maksutapa._

![Stripen API-avaimien kentät ja sandbox-tilan kytkin](/img/config/settings-payment-gateways.png)

Stripe-paneelissasi klikkaa oikeassa yläkulmassa **Developers** (Kehittäjät), ja sitten vasemmasta valikosta **API Keys**.

![Stripen paneelin Kehittäjät-osio API-avaimilla](/img/config/settings-payment-gateways.png)

Voit käyttää joko **Testidataa** (testataksesi, toimivaanko integraatio tuotantoympäristössäsi) tai olla käyttämättä sitä. Muuttaaksesi tätä kytkettä, vaihda **Viewing test data** -kytkintä.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopioi arvo **Publishable key**- ja **Secret key**-kentistä sekä **Token**-sarakkeesta ja liitä se Ultimate Multisite Stripe Gateway -kenttiin. Klikkaa sitten **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhookin asettelu

Stripe lähettää webhook-tapahtumia, jotka ilmoittavat Ultimate Multisite -järjestelmään aina kun tapahtuu jotain **Stripe-tililläsi**.

Klikkaa **Developers** ja valitse sitten **Webhooks** -kohta vasemmasta valikosta. Sitten oikealla klikkaa **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Tarvitset **Endpoint URL**:ia *.* Ultimate Multisite luo automaattisesti endpointin URL:n, jota löydät heti **Webhook Listener URL** -kentän alapuolelta **Ultimate Multisite Stripe Gateway** -osiossa._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopioi** endpointin URL ja **liitä** se Stripe **Endpoint URL** -kenttään.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Seuraavaksi valitset **Event**-tyypin *.* Tämän vaihtoehdon alla sinun tarvitsee vain merkitä **Select all events** -ruutu ja klikata **Add events**. Sen jälkeen klikkaa **Add Endpoint** tallentaaksesi muutokset.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Tämä on valmis, Stripe-maksut integraasi on kokonaisuudessaan valmis!
