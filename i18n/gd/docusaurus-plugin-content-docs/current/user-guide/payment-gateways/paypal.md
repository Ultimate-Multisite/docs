---
title: A' chlàradh PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# A' Chlàradhach an Gathairt a'n PayPal (v2)

_**NOTE CRUCIAL: Tha an article seo fhaighinn air Ultimate Multisite version 2.x.**_

Is eadar thuig a chàir a'chòmhnaidh curachdaidhean tairmhe sinneachd ar fad ar pàstaiche pàirtich: Stripe, Stripe Checkout, PayPal agus Manual. San eil seo a'n article a' chlàradhnuibh gur eadar-ghinneachadh le **PayPal**.

Mar a tha's a' chlàradh a'n Stripe, tha PayPal a' chàir a'chòmhnaidh a' chàir a'chòmhnaidh ar pàirtiche online, gu sònraichte ar fàilteichean WordPress. Bidh an article seo a' chlàradhnuibh gur eadar-ghinneachadh le PayPal mar tairmhe sinneachd a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chàir a' chà

* **Intsealladh cridheann manual**: Rinn an amadh seo gu bheil thu'n deiceall cridheann PayPal, gu bheil OAuth setup ann anail don eartas, no gu bheil thu'n lorg a' chlàradh cridheann a' chlàradh a' chlàradh a' chlàradh a' chlàradh. Rinn an Username API, an Password API, agus an Signature API anns na fhaighinnachanna PayPal, agus tosaich an setadh deiceall.
* **Porta OAuth**: Rinn amadh seo gu bheil an option OAuth ann agus a' chlàradh ann airson an install agad. A tha an seòl a' sgair a' chlàradh OAuth a' chlàradh a' chlàradh a' chlàradh a' chlàradh, mar a tha eanailan fada a' chlàradh a' chlàradh a' chlàradh a' chlàradh.

Chan eil thu a' faic an option OAuth anns an seòl, tosaich an amadh cridheann manual a' chlàradh a' chlàradh a' chlàradh a' chlàradh. Bidh an gateway a' obrachadh gu am beag cridheann PayPal Business API a tha ann an t-seòlaichean Ultimate Multisite 2.x a' chlàradh.

## A bhith a' faighinn cridheann PayPal API {#enabling-paypal-on-your-network}

Chan eil thu a' faighinn na fhaighinnachanna airson **Username API** a' chlàradh, **Password API** a' chlàradh, agus **Signature API** a' chlàradh gu bheil PayPal ann an t-seòlaichean.

Is e cheann thu a faicinn seo gu bheil thu a' chlàradh anns an t-seòlaichean [Live](https://www.paypal.com/home) no [Sandbox](https://www.sandbox.paypal.com/home).

(Tusgaidh gu bheil thu a' chlàradh a' faighinn **mode sandbox** airson a' chlàradh agus a' faicinn gu sònraich a tha an gateway a' chlàradh. Rinn an seòl a' chlàradh ann.)

![Fhaighinnachanna cridheann PayPal API agus mode sandbox](/img/config/settings-payment-gateways.png)

 airson a' faighinn Signature API no cridheann Certificat airson do chidheann PayPal:

  1. Rinn gu an t-seòlaichean [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. An **API access** a' chlàradh, tosaich **Update**.

3. Daile **NVP/SOAP API integration (Classic)**, cluich **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Se u h-e dè anrìoir API Signature a'n cridheartach (Certificate), thu rinn a'chùladh daire a' chlàradh gu leat a' chlàradh e dìreach a' chlàradh.

     * _**Nota:** Se tha thu a' chlàradh an tòiseachadh air a' chlàradh PayPal, thànaidh thu a' chlàradh an drochdair a' chlàradh._

  4. Thànaidh **un** oifach a'mhaigh, aile uisge **Agree and Submit**.

     * **Request API Signature** – Thànaidh a' mhaigh airson authentication API Signature.

     * **Request API Certificate** – Thànaidh a' mhaigh airson authentication API Certificate.

  5. PayPal a' tòiseachadh do chlàradh API gu leise:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** a' tòiseachadh Username API, Password API, agus Signature, a tha a' tòiseachadh an tòiseachadh (does not expire). Tha sinn a' chlàradh sealltainn gu leise airson sgàil air a bhith a' chlàradh. Cluich **Show/Hide** chun iad a' chlàradh a' tòiseachadh agus a' tòiseachadh. Nuair a thànaidh thu, cluich **Done**.

     * **API Certificate credentials** a' tòiseachadh Username API, Password API, agus Certificate, a tha a' tòiseachadh gu leat an tòiseachadh (expires automatically) an uair a tha e dìreach a' chlàradh. Cluich **Download Certificate** chun an API Certificate a' chlàradh air do deascail.

Tha sin an tòiseachadh, tha thu seachdaidh a' chlàradh PayPal!

Se u h-e dè a' chlàradh PayPal, thu leide a' chlàradh [Help Center] a PayPal.
