---
title: An t-aonacht PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Set Up an PayPal Gateway (v2)

_**NOTE CRUCIAL: An tairf seo an Ultimate Multisite version 2.x.**_

Is féidir leat activaithe go leat na céad chéim de chuid meánais oileánach ar na stocht de chuid fáilteacht: Stripe, Stripe Checkout, PayPal agus Manual. Ag an tairf seo, beidh munaí chun a bheith ag éifeachtú le **PayPal**.

Is é sin mar Stripe, is é PayPal go leataithe go léir ar cheangailte oileáin, go háirithe ar na webs de WordPress. Beidh an tairf seo ag cur iarracht ar chuid a úsáid PayPal mar chéim fáilteacht ar fáil ar do chuid ngrúpa.

Is é sin ag iarraidh acu cabhrú le **account Business PayPal** chun an cruthú (API credential) a bhí ag teacht ar cheangailte seo.

## Fáilte le PayPal ar do ngrúpa {#enabling-paypal-on-your-network}

Leat a fáil le PayPal mar chéim fáilteacht ar fáil ar do ngrúpa, cur isteach i **Ultimate Multisite > Settings > Payments** agus cur an t-bóca seo ar fáil ar PayPal.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Aistriú le seomra fáilteacht a chur ar fáil {#using-the-guided-setup-wizard}

Tá Ultimate Multisite 2.10.0 ag cur isteach seomra fáilteacht ar fáil do PayPal ag an tairf de chuid meánais oileánach. Tar éis go bhfuil tú ag fáil le PayPal, úsáid an seomra ar **Ultimate Multisite > Settings > Payments** chun a bheith ag éifeachtú le chéile agus chun a chur in iúl conas atá tú ag iarraidh a chomhcheangail an meánais agus chun a chur in iúl conas atá teachtar na cruthú a bhí ag teacht ar cheangailte seo ar fáil ar chuid a chur in iúl.

Tá an seomra ag cur iarracht ar dhá chuid aistriú:

* **Inseán curteacha chuidreacha**: Use an sin féin seo nuair tá tú le curteacha API PayPal, níl mhaith ar fáil OAuth chun an account a bheith ar fáil, nó nuair atá tú ag iarraidh a chur i bhfeicimní ó PayPal go dtí. Déan an Username API, an Password API, agus an Signature API iadú mar chomh maith le curteacha PayPal, agus ansaigh an curteacha pléas.
* **Porta chuid OAuth**: Use an sin féin nuair atá an option OAuth ar fáil agus ar fáil ar fáil chun an install a bheith ar fáil. Taispeán an wizard a thaispeáin an fhluth OAuth ar shonraithe feature flag, mar chuid ngrúpaí níl ag curteacha seo a bhaint ar fáil, níl mhaith ar fáil iadú le curteacha chuidreacha.

Má tá tú níl ag fheiceáil an option OAuth i ngachais an wizard, déan an fhluth inseán curteacha chuidreacha seo a dhéanamh. Tá an gateway ag eolais le curteacha PayPal Business API atá ar fáil mar chuid ngrúpaí Ultimate Multisite 2.x a bheith ar fáil.

## Gníomhartha curteacha API PayPal a fháil {#getting-the-paypal-api-credentials}

Agairm go dtí an t-aonacht PayPal mar gateway deidh, leat ag iarraidh iadú an feidhmanna ar **Username** API PayPal, **Password** API PayPal agus **Signature** API PayPal.

Is féidir leat é seo a fháil le curteáil in ar chuid atá tú ag logáil ina chuid account [Live](https://www.paypal.com/home) nó [Sandbox](https://www.sandbox.paypal.com/home).

(Slán an t-aonacht go bhfuil tú ag úsáid **mode sandbox** chun curteacha a shonraithe agus a fheiceáil an casadh ar fáil. Déan é seo leat ar chuid seachtain.)

![Feidhmanna curteacha API PayPal agus mode sandbox](/img/config/settings-payment-gateways.png)

Ar chuid curteacha API nó curteacha cert ar fáil do account PayPal:

  1. Déan curteáil go dtí an [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. I bhfáthach **API access**, cliceáil ar **Update**.

3. Oirc **NVP/SOAP API integration (Classic)**, cliceáil ar **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Má tá tú an API Signature nó Cert a gnácha ort, beidh tú ag cur isteach ar cur síos a bhfuil do chuid creidheanna agat.

     * _**Note:** Má tá tú ag iarraidh a chuid account PayPal a sholáth, féach ar na nolaí a bhaineann leat._

  4. Déan chun **ceann** ó chomh maith a leat, agus cliceáil ar **Agree and Submit**.

     * **Request API Signature** – Déan é seo chun athbhreithniú API Signature a chur isteach.

     * **Request API Certificate** – Déan é seo chun athbhreithniú API Certificate a chur isteach.

  5. Beidh PayPal ag gnácha do chuid creidheanna API mar sin:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** beidheadh Username API, Password API, agus Signature, a bhíonn an t-amach ar na héifeacht. Beidh an t-amach seo ag cur isteach go dtí an chuid séalaíocht chun spriocáil é ar fáil. Cliceáil ar **Show/Hide** chun é a chur ar fáil nó a shlúin. Nuair atá tú leat, cliceáil ar **Done**.

     * **API Certificate credentials** beidheadh Username API, Password API, agus Certificate, a bhíonn an t-amach ar na héifeacht tar éis trí chuid shaol. Cliceáil ar **Download Certificate** chun an API Certificate a sholáth ar do deascopa.

Tá sé ansin, tá an cur chuimhneacháin cheangailte le PayPal leat beidh.

Má tá tú ag iarraidh aon chruinneamh faoi chuid cur chuimhneacháin PayPal, leat a bheith ag cur isteach ar [Help Center](https://www.paypal.com/br/smarthelp/home) de PayPal.
