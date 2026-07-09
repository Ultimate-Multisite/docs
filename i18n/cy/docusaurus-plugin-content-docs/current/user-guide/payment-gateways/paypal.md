---
title: Cyfluniad PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Ymddio'r Gweithro PayPal (v2) {#setting-up-the-paypal-gateway-v2}

_**NOTIADOLIA CRYTICA: Mae'r ail ddefnyddiol hwn yn cyfeiriad Ultimate Multisite ffurf 2.x.**_

Gallwch chi gwneud cyflwyniad i'r pethau ymdrechion ar gyfer y cyflwyniadau ar gyfer ystafell ymdrechion ein: Stripe, Stripe Checkout, PayPal a Manwl. Yn yr ail ddefnyddiol hwn, byddwn yn gweld sut i gysylltu â **PayPal**.

Fel yr un fel Stripe, mae PayPal yn cael ei defnyddio'n gyffredinol ar gyfer ymdrechion online, yn enwedig ar wefanau WordPress. Bydd y ail ddefnyddiol hwn yn rhoi cyfarwyddiad i chi sut i ddefnyddio PayPal fel ffordd ymdrech ar gael ar eich rheol.

Rhaid i chi gwybod bod chi'n angen **cyfrifyn Business PayPal** i gael y cyfrifyn API sydd ei angen i'r cysylltiad hwnnw.

## Mae'r PayPal yn cael ei chwarae ar eich rheol {#enabling-paypal-on-your-network}

I gwneud y PayPal yn cael ei chwarae fel ffordd ymdrech ar gael ar eich rheol, mynd i **Ultimate Multisite > Settings > Payments** a chwarae'r casg yn y cyfathrebu gyda PayPal.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Defnyddio'r gwyddu cyfarwyddiadol {#using-the-guided-setup-wizard}

Mae Ultimate Multisite 2.10.0 yn ychwanegu gwyddu cyfarwyddiadol i'r setffroi PayPal ar gyfer ymdrechion. Ar ôl i chi chwarae'r PayPal, defnyddiwch y gwyddu ar **Ultimate Multisite > Settings > Payments** i ddwylo sut byddwch yn cysylltu â'r mdrech a sicrwch beth yw'r cyfrifyn sydd ei angen ar ôl قبل i ddefnyddio.

Mae'r gwyddu'n chwanegu ddau llwybr o gyfeiriadau:

* **Ymddio'r cyfraddau manwl**: Defnyddiw y llwybr hwn pan oes gennych chi ddefnyddio cyfraddau PayPal API, pan nid yw setffryd OAuth ar gael i'ch cyfrifol, neu pan mae'n wella'i chi ddodyn y cyfraddau o PayPal eich hun. Rhewch yr Username API, y Password API, a'r Signature API yn y ffeiliaid PayPal, yna gwirddwch y setffryd y cyflwyniadau.
* **Gwaith gysyllti OAuth**: Defnyddiw y llwybr hwn dim ond pan oes opsiwn OAuth ar gael ac wedi ei chynllunio ar gyfer eich install. Mae'r wyliau yn dangos y ffordd OAuth yn y canolbwynt o'r feature flag, felly mae cyd-fyndau heb y flag yn parhau i ddefnyddio ffeiliaid cyfraddau manwl.

Os nad oes gennych chi'r opsiwn OAuth yn y wyliau, gwblhauwch y llwybr cyfraddau manwl isod. Mae'r gateway yn gweithio gyda'r cyfraddau PayPal Business API fellygol o ddefnyddioedd Ultimate Multisite 2.x blaenorol.

## Cynnal y cyfraddau PayPal API {#getting-the-paypal-api-credentials}

Ar ôl i'w chynllunio PayPal fel gateway o chyfalu, byddant yn angen i'ch gwblhau'r ffeiliaid ar gyfer **Username** API PayPal, **Password** API PayPal a **Signature** API PayPal.

Gallwch fynd i hyn drwy ddefnyddio cyflwyniad i eich cyfrifol [Live](https://www.paypal.com/home) neu [Sandbox](https://www.sandbox.paypal.com/home).

(Meddwl bod chi'n gallu defnyddio'r **mode sandbox** i gwneud gwyliau a weld os yw'r gateway wedi'i setffryd yn llawn. Rwy'n ddefnyddio'r sefyn cyflwyniad y cyflwyniad.)

![Feiliaid cyfraddau API PayPal ac mode sandbox](/img/config/settings-payment-gateways.png)

I roeddwch â chwarae cyfraddau API neu cyfraddau sertifig ar gyfer eich cyfrifol PayPal:

  1. Ymddangos i'r [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) eich cyfrifol.

  2. Yn y sefyn **API access**, gwirddwch **Update**.
![Cyfrifol Cyfrifol PayPal gyda sefyn cyffredin API](/img/config/settings-payment-gateways.png)

3. Ond **NVP/SOAP API integration (Classic)**, cloiswch ar **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Os oes gennych chi wedi cyflwyno API Signature neu Certiad, byddwch yn cael eich reiddi i'r dudalen lle gallwch ddodol eich gredynion.

     * _**Noti:** Os mae'n cael ei ddefnyddio eich cyfathrebu PayPal, byddwch yn dilyn y gyfarwyddiadau ar y fardref._

  4. Deiliwch **un** o'r opsiynau canlynol, yna cloiswch **Agree and Submit**.

     * **Request API Signature** – Deiliwch i'r cyflwyno API Signature ar gyfer cyfathrebu API Signature.

     * **Request API Certificate** – Deiliwch i'r cyflwyno API Certificate ar gyfer cyfathrebu API Certificate.

  5. Mae PayPal yn cyflwyno eich gredynion API fel ymlaen:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** mae'n cynnwys Username API, Password API, a Signature, sydd yn cael ei ddefnyddio ac nid yw'n cael ei ddefnyddio eto. Mae'r gwerthau hyn yn cael eu gwneud yn gyferol i sicrwydd ychwanegol. Cloiswch **Show/Hide** i'w chwarae neu ddeallu. Pan fyddwch yn da, cloiswch **Done**.

     * **API Certificate credentials** mae'n cynnwys Username API, Password API, a Certiad, sydd yn cael ei ddefnyddio ac mae'n cael ei ddefnyddio eto ar ôl tri blynedd. Cloiswch **Download Certificate** i sicruddio'r API Certificate ar eich desktop.

Dyma'r fath, mae eich cyfathrebu y PayPal wedi'i gwblhau!

Os oes gennych chi unrhyw cwestiynau am setegau PayPal, gallwch ddilyn y [Help Center](https://www.paypal.com/br/smarthelp/home) o PayPal.
