---
title: PayPal-i seadistamine
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal-portaal konfiguratsioon (v2)

_**TÄHTIS NOTE: See artikli viitab Ultimate Multisite versioonile 2.x.**_

Võite aktiveerida kuni nelja maksutrimme maksukonfiguratsioonil: Stripe, Stripe Checkout, PayPal ja Manuaalne. Selle artiklis näeme, kuidas **PayPaliga** integreerida.

Samuti nagu Stripe, on PayPal laialt kasutatav veebimaksude jaoks, eriti WordPress-veebilehtadel. See artikkel juhendab teid selle üle, kuidas kasutada Paypali maksutrimme kui võimalust teie võrku maksutrimmekuna.

Päraste on teada, et vajad **PayPal Business konti**, et saada API-kõrgustamiseks vajalikud kreditaalid selle integreerimise jaoks.

## PayPal aktiveerimine oma võrku poolt {#enabling-paypal-on-your-network}

Et aktivere PayPal kasutamata maksutrimmekuna kui võimalus oma võrku poolt, külastage **Ultimate Multisite > Settings > Payments** tabit ja lühike laukuse (tick box) kõrval PayPali.

![PayPal-iga aktiveerimine aktiivset maksutrimmekonfiguratsioonides](/img/config/settings-payment-gateways.png)

## Juhendatud seadistusjuhendi kasutamine {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 lisab juhendatud PayPal-seadistusjuhendi maksutrimmekonfiguratsiooni asetesse. Kui aktiveerite Paypali, kasutage juhendatud seadistusjuhendit **Ultimate Multisite > Settings > Payments**'is valima, kuidas soovite konfiguratsiooni lahendada ja kinnitada, millised kreditaalid veel vajavad salvestamise enne.

Juhend on toetab kaks seadistusviisi:

* **Manua brändtud kasutamine**: Kasutage seda tegelema, kui teil on juba PayPal API kinnitused, kui OAuth-seavitust ei ole teie kontole saadaval või kui lemmatega soovite kinnitusi itse koopiida PayPalist. Sisendage API Username, API Password ja API Signature PayPali väljeldustesse ja salvestage siis maksukonfiguratsioonid.
* **OAuth ühenduse värav**: Kasutage seda tegelema ainult siis, kui OAuth-välja valik on saadaval ja aktiveeritud teie installile. Wizard näitab OAuth-voolu feature flagi taga, seetõuda võrgustel ilma sellele flagiga, jätkavad kasutajad manua brändtud kasutamise väljelduste kasutamist.

Kui ei näha OAuth-välja wizardis, täiendage allpool oleva manua brändtud kasutamise vool. Gateway töötab sama PayPal Business API kinnitustega kui eelmine Ultimate Multisite 2.x versioon.

## PayPal API kinnituste omandamine {#getting-the-paypal-api-credentials}

Kuna PayPal on aktiveeritud maksukonfiguratsioonina, peate täitmise väljeldusi PayPal API **Username**, PayPal API **Password** ja PayPal API **Signature**.

Saate selle selle poolt logi sisse oma PayPal [Live](https://www.paypal.com/home) või [Sandbox](https://www.sandbox.paypal.com/home) kontole.

(Määritage, et saate kasutada **sandbox režiimi** maksude testimiseks ja kontrollida, kas gateway on õigesti seadistatud. Lülitage lihtsalt vastava osi sisse.)

![PayPal API kinnituste väljad ja sandbox režiimi lülitamine](/img/config/settings-payment-gateways.png)

API Signature või sertifikaadi kinnituste palgimiseks oma PayPal kontole:

  1. Minenda oma [Kontode seadistustesse](https://www.paypal.com/businessmanage/account/accountAccess).

  2. **API access** osas klõpsake **Update**-le.
![PayPal Kontode seadistused API access osaga](/img/config/settings-payment-gateways.png)

3. **NVP/SOAP API ühendamise all (Classic)** klõpsake **Manage API credentials**-ile.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Kui olete juba API Signature või Sertifikaat genereerinud, suunatakse teid lehelile, kus saate oma ühendusandmeid leida.

     * _**Märkus:** Kui teil on nõutud PayPali kontakti kinnitamise eest, siis järgige ekraanil esitatud juhiseid._

  4. Valige **ühi** järgmise valikust ja klõpsake **Agree and Submit**.

     * **Request API Signature** – Valige API Signature autentimiseks.

     * **Request API Certificate** – Valige API Sertifikaat autentimiseks.

  5. PayPal genereerib teie API ühendusandmed järgi:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature ühendusanded** sisaldavad API kasutajatunnuse, API parooli ja Signatuuri, mis ei luba endest lahti. Need väärtused on oletuks varjatud turvalisuse tagamiseks. Klõpsake **Show/Hide**, et neid sisse või välja lülitada. Lõpetamise korral klõpsake **Done**.

     * **API Sertifikaat ühendusanded** sisaldavad API kasutajatunnuse, API parooli ja Sertifikaati, mis luba endest automaatselt pärast kolme aasta jooksul. Klõpsake **Download Certificate**, et salvestada API Sertifikaat oma pultile.

See on kõik! Teie PayPal maksukontroll on lõpetatud!

Kui teil on küsimusi PayPali seadistustega, saate viidata PayPali [Help Center](https://www.paypal.com/br/smarthelp/home) lehele.
