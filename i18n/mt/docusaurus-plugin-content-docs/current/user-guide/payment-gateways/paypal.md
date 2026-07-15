---
title: Aħjar PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Aħdat il-Gateway ta PayPal (v2)

_**NOTA IMPORTANTI: Dan l-artiklu jiferix għall Ultimate Multisite bizzjoni 2.x.**_

Tista' attiveri s'għax-x-qiegħda metodijiet tal-pagamenti fuq pajjiċina tal-ippoġġi tagħhom: Stripe, Stripe Checkout, PayPal u Manual. F'dan l-artiklu, nista' nispetta kif tista' integratix x **PayPal**.

F'mod ġenerali bħal Stripe, PayPal jiegħtieħdu għall-pagamenti on-line, speċjalment fuq siti WordPress. Dan l-artiklu jgħinak kif tista' uża PayPal bħala metod ta pagament disponibbli fuq la-netwerk tiegħek.

Nota li għandek **kont PayPal Business** biex tiġi l-API credential li għadte għall-integrazzjoni.

## Attivazzjoni tal-PayPal fuq la-netwerk tiegħek {#enabling-paypal-on-your-network}

Biex tattivazzxi l-PayPal bħala metod ta pagament disponibbli fuq la-netwerk tiegħek, għandi tmur għand **Ultimate Multisite > Settings > Payments** u tagħmel il-tick box li jipprovdi lil PayPal.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Użu tal-wizard ta setup guidat {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 jiddeq wizard ta setup guidat għall-PayPal f'ippoġġi tal-gateway ta pagament. Wara ma attiverti l-PayPal, uża l-wizard fuq **Ultimate Multisite > Settings > Payments** biex tista' tagħżir kif tista' tipprovvidi lil gateway u ti conferma li quali credential għad ikun għadte qabel ma tgħmli save.

Il-wizard jipproxxamma żwiem l-trażi ta setup:

* **Inserimento manual tal-dritt**: Uża dan is-sogħħda l-indirizzjoni meta għandek jograferti żmien PayPal API credentials, meta ma ma disponibblix OAuth għall-account tiegħek, jew meta tista' ti kopja l-credentials min PayPal stess. Inqrib l-API Username, API Password, u API Signature fil-fieldijiet ta PayPal, u poiġġa is-settings tal-pagamenti.
* **Porta konnessjoni OAuth**: Uża dan l-indirizzjoni biss meta l-opzjoni OAuth disponibbli u attivat għall-install tiegħek. Il-wizard juri l-flusso OAuth permezz ta feature flag, quindi networks li ma għandhom il-flag jistgħu jkollhom is-fieldijiet tal-inseriment manuali tal-credentials.

Meta ma tista' tqabbil l-opzjoni OAuth fil-wizard, kumpletta l-flus manual tal-credentials li j segue. Il-gateway jaħdem mal-API credentials ta PayPal Business isiem minn il-rilizzamenti precedenti tal-Ultimate Multisite 2.x.

## Għtieġ l-PayPal API credentials {#getting-the-paypal-api-credentials}

Morniex PayPal ma jkollok biex tiġi popolat il-fieldijiet għall-PayPal API **Username**, PayPal API **Password** u PayPal API **Signature**.

Tista' tgħandu dan billi tgħalog fil-account tiegħek ta PayPal [Live](https://www.paypal.com/home) jew [Sandbox](https://www.sandbox.paypal.com/home).

(Tfakkir li tista' uża l-**sandbox mode** biex ti testja il-pagamenti u tgħleb se l-gateway huwa impostat correttamente. Sempli, attiva sec-sezzjoni.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Biex tawniex l-API Signature jew il-credentials tal-Certificate għall-account tiegħek ta PayPal:

  1. Irrid għal [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) tiegħek.

  2. F'sezzjoni **API access**, iklil **Update**.
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

3. Ta **NVP/SOAP API integration (Classic)**, għal-click fuq **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Jekk għandek giàt generat API Signature jew Certificate, titwaddir għalna una pjan li tista tfittex il-credentials tiegħek.

     * _**Nota:** Jekk titien b'verifika l-account PayPal tiegħek, poli segwi l-istruzzjonijiet fuq is-sikkaw._

  4. Sigli **una** mill-opzioni tal-foljiqos, u poi għal-click fuq **Agree and Submit**.

     * **Request API Signature** – Sigli għall-API Signature authentication.

     * **Request API Certificate** – Sigli għall-API Certificate authentication.

  5. PayPal jġenera l-credentials tiegħek tal-API kif seguew:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** inklużaw API Username, API Password, u Signature, li ma tiffajxux. Il-valuri homm nascosti b'default għall-aġġuri ta sicurezza aggiemati. Click fuq **Show/Hide** biex tiġi attivat u disattivata. Meta tgħmlit, click fuq **Done**.

     * **API Certificate credentials** inklużaw API Username, API Password, u Certificate, li tiffajxu awtomatik wara tliet snin. Click fuq **Download Certificate** biex ti savi l-API Certificate fuq desktop tiegħek.

Għal-click, il-integrazzjoni tal-pagamenti PayPal tiegħek għad jkollita!

Jekk għandek maqlħol questioni dwar is-settings ta PayPal, tista riferiri għall- [Help Center](https://www.paypal.com/br/smarthelp/home) ta PayPal.
