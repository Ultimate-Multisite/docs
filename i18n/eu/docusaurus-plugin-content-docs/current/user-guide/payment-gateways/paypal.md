---
title: PayPal-a konpondu
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal-aren konponbidea (v2)

_**GIZKONTU NOTE ZERRE GIZKONTU: Hau artikulu Ultimate Multisite bertsio 2.x-era referentzia egiten du.**_

Paymenta kontuak batiz, Stripe, Stripe Checkout, PayPal eta Manual metodo bat lehenen kontuaren konponbidea (settings) daitezke aktibatu egin dezakezu. Hau artikuluan, **PayPal**arekin nola integratzen da ikusten daitezke.

Stripe baten besteak garrantzitsuak bezala, PayPal-k online paymentak erabiliz leku handi da, batez ere WordPress websteinuetan. Hau artikuluak guiaradu egiten du PayPal-a kontuaren network-an disponible metodo bat gisa nola erabiliz da.

Ez dago ezberdina, hori integrazioari beharrezkoa den API credentialak aurkitzeko **PayPal Business account** bat du behar duzu.

## PayPal aktibatu dezakezu kontuaren network-an {#enabling-paypal-on-your-network}

PayPal-a kontuaren network-an disponible metodo bat gisa aktibatu dezakezu, **Ultimate Multisite > Settings > Payments** tabera jarraitu eta PayPal-aren ondoreko kotakkoa (box) markatu duzu.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Guia kontuarekin erabiliz {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0-ek kontuaren konponbidea (settings) arau PayPal setup wizard bat gehitu du. PayPal aktibatu egin ondoren, Ultimate Multisite > Settings > Payments-an guiaraduak erabildu eta zer moduan konektatzea nahi duzu eta saldatu aurretik beharrezkoa den credentialak zehazteko kontua (confirm) egiten duzu.

Guia bat perruta konponbidea (setup paths) bi bidea suportatzen du:

* **Manual credential entry**: Erabatu hau erabiltzen duzu, horrek PayPal API identifikazioak aldi bat izango duzenean, OAuth konfiguratzea ez dagoenean kontua daiteke, edo PayPal-etik kopioa egiteko preferatu duzenean. PayPal lekuetan API Username, API Password eta API Signature sortuți, eta galduak saldatu.
* **OAuth connection gate**: Hau erabiltzen duzu horrek OAuth opszioa available eta aktiboa izango denean diartzi. Ez dago flag bat gainean daiteke ezagutzeko, nonetxeak flag ez dagoeneko kontualde hauek manual credential entry galduak erabiltzen jarraitu behar dira.

Ez ikusten du OAuth opszioa wizard-an, aipatutako manual credential entry prozesua amaituu. Gateway-ak Ultimate Multisite 2.x irudinetasunaren lehen editiak beste PayPal Business API identifikazioakarekin funtzionatzen du.

## PayPal API identifikazioak hartzea {#getting-the-paypal-api-credentials}

PayPal-a labengatuta payment gateway gisa aktiboa egin ondoren, PayPal API **Username**, PayPal API **Password** eta PayPal API **Signature** galduak pleratu behar duzu.

Hau aldatzeko, PayPal [Live](https://www.paypal.com/home) edo [Sandbox](https://www.sandbox.paypal.com/home) kontuan logiindu daiteke.

(Ez utzi ezberdinetza moduarekin (sandbox mode) erabil dezakezu galduak egiaztatzeko eta gateway-ak legez batez konfiguratuta dagoela ikusteko. Berria seksioun aktiboa egin behar duzu.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

PayPal kontuaren API Signature edo Sertifikat identifikazioak eskatzeko:

  1. [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) funtziokoan jarraitu.

  2. **API access** seksioun, **Update** (Aldatu) klikatu.
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

3. **NVP/SOAP API integrazioan (Classic)**-ean, **Manage API credentials**-ra klikatu duzu.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * API Signature edo Sertifikat generatu duzu, horrek zure kredentzialak aurkitu ditu beharko duzun laperaren artean ireki da.

     * _**Nota:** PayPal kontua bertsioa eskatzen dutenean, ezarritutako jakinarazpenak jarraitu._

  4. Horrela, zehaztu **bat** opszioa, gaur **Agree and Submit**-ra klikatu duzu.

     * **Request API Signature** – API Signature autentifikazioa eratzeko aukera.

     * **Request API Certificate** – API Sertifikat autentifikazioa eratzeko aukera.

  5. PayPal iradokitzen zure API kredentzialak hoberako moduan:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature kredentzialak** arautzen du API Username, API Password eta Signature, eta hori ez aukeratzen da. Hor hauek segurtasun handiagoa emateko, default batean horiek gizituta dago. Horrek onartu edo ezarri dezakezu (Show/Hide) klikatu behar duzu. Maitzen dutenean, **Done**-ra klikatu.

     * **API Certificate kredentzialak** arautzen du API Username, API Password eta Sertifikat, eta hori salbetzeko iradokitzen da hiru urtean auto-sortu egiten da. API Sertifikatua desktop-le salbetzeko, **Download Certificate**-ra klikatu behar duzu.

Horrak dela, PayPal erabilera konplikatua da!

PayPal hedatuak nola dagozkarekin, PayPalaren [Help Center](https://www.paypal.com/br/smarthelp/home) zuzen dituzu.
