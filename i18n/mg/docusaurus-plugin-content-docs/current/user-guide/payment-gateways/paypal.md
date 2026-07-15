---
title: Fanomezana an-tanana ny PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Fanamboana ny Gateway PayPal (v2)

_**FANAMARIANA MANAN-DANJA: Ity lahatsoratra ity dia manondro ny Ultimate Multisite version 2.x.**_

Afaka mampiasa fomba fandoavam-bola adiam-bohy efatra ianao amin'ny pejy fandrindrana fandoavam-bola (payment settings) anay: Stripe, Stripe Checkout, PayPal ary Manokana (Manual). Amin'ity lahatsoratra ity dia hojerena ny fomba hampifandraisana amin'ny **PayPal** isika.

Tahaka ny Stripe, tena be mpampiasa ny PayPal ho fandoavam-bola an-tserasera, indrindra ireo tranonkala WordPress. Ity lahatsoratra ity dia hitarika anao amin'ny fomba hampiasana ny PayPal ho fomba fandoavam-bola azo ampiasaina ao amin'ny tambajakao (network).

Tandremo fa mila manana **kaonty Business PayPal** ianao mba hahazoana ny API credential ilainao ho an'ity fifandraisana ity.

## Fanondroana ny PayPal eo amin'ny tambajakanareo {#enabling-paypal-on-your-network}

Mba hampandehanana ny PayPal ho fomba fandoavam-bola azo ampiasaina ao amin'ny tambajakanareo, dia mandehin'ny **Ultimate Multisite > Settings > Payments** ary tsindrio ilay boky (box) eo anilan'ny PayPal.

![Fanondroana ny PayPal ao amin'ny gateway fandoavam-bola mavitrika](/img/config/settings-payment-gateways.png)

## Fampiasana ny wizard fanamboarana natoraly (guided setup wizard) {#using-the-guided-setup-wizard}

Ny Ultimate Multisite 2.10.0 dia manampy wizard fanamboarana PayPal natoraly eo amin'ny fandrindrana gateway fandoavam-bola. Rehefa mampandeha ianao, dia ampiasao ilay wizard ao amin'ny **Ultimate Multisite > Settings > Payments** mba hisafidianana ny fomba tianao hampifandraisana ny gateway ary hanamafisana ireo credential izay mila anao mbola alohan'ny hitahirizana (saving).

Maneho lalana fanamboarana roa ity wizard ity:

* **Fampidirana ny fampidirana antontan-taratasy manokana (Manual credential entry)**: Ampiasao ity lalana ity raha efa manana antontan-taratasy API an'ny PayPal ianao, raha tsy misy fomba OAuth ho azo atao ho an'ny kaontinao, na raha tianao ny mankopy ireo antontan-taratasy avy amin'ny PayPal ianao. Ampidiro ny API Username, API Password ary API Signature ao amin'ny toerana PayPal, dia ataovy ny fitehirizana (save) ny fandrindrana famatsiana (payment settings).
* **Varavarana fifandraisana OAuth**: Ampiasao ity lalana ity raha misy safidy OAuth sy azo ampiharina ho an'ny fanoratana (install) anao. Ny wizard dia mampiseho ny fomba fiasan'ny OAuth ao ambadiky ny feature flag, ka ireo tambajotra tsy manana ilay flag dia mitohy mampiasa ireo toerana fampidirana antontan-taratasy manokana.

Raha tsy mahita ny safidy OAuth ao amin'ny wizard ianao, dia vita aloha ny fomba fampidirana antontan-taratasy manokana eto. Ny gateway dia miasa mampiasa ireo antontan-taratasy PayPal Business API mitovy amin'ireo fiverenana Ultimate Multisite 2.x teo aloha.

## Fandraisana ny antontan-taratasy PayPal API {#getting-the-paypal-api-credentials}

Rehefa voafidy ho gateway famatsiana (payment gateway) ny PayPal, dia mila mameno ireo toerana ho an'ny **Username** an'ny PayPal API , **Password** an'ny PayPal API ary **Signature** an'ny PayPal API ianao.

Afaka mahazo izany amin'ny alalan'ny fidirana ao amin'ny kaontinao [Live](https://www.paypal.com/home) na [Sandbox](https://www.sandbox.paypal.com/home).

(Tadidio fa afaka mampiasa ny **sandbox mode** ianao mba hanandehana ny famatsiana sy hahitana raha voarafitra tsara ny gateway. Azafady, dia ataovy an-tsipika (toggle on) ilay fizarana mifandraika.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Mba hanomezana ny API Signature na ireo antontan-taratasy Certificate ho an'ny kaontinao PayPal:

  1. Mandehana any amin'ny [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) anao.

  2. Ao amin'ny fizarana **API access**, tsindrio ny **Update**.
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

3. **NVP/SOAP API integration (Classic)** eo ambara amin'ny **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Raha efa nanao API Signature na Certificate ianao, dia ho tonga amin'ny pejy iray izay afaka mitady ny fampahalalana anao momba ireo zavatra ireo ianao.

     * _**Fanamarihana:** Raha toa ka misy fangatahana mba hanamarina ny kaontinao PayPal, dia arahina ny toromarika eo amin'ny efijery._

  4. Safidio _iray_ amin'ireto safidy ireto, avy eo tsindrio **Agree and Submit**.

     * **Request API Signature** – Safidio raha ho an'ny fanamarinana API Signature ianao.

     * **Request API Certificate** – Safidio raha ho an'ny fanamarinana API Certificate ianao.

  5. Ny PayPal dia mamorona ny fampahalalana API anao toy izao:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** dia ahitana API Username, API Password ary Signature, izay tsy mandeha (tsy miova). Azo atao ny manafina ireo sandan'ity zavatra ity amin'ny fomba ankapobeny mba hanomezana fiarovana bebe kokoa. Tsindrio **Show/Hide** mba hampandehanana sy hamerenana azy ireo. Rehefa vita, tsindrio **Done**.

     * **API Certificate credentials** dia ahitana API Username, API Password ary Certificate, izay mandeha ho lany ho azy aorian'ny telo taona. Tsindrio **Download Certificate** mba hitahirizana ny API Certificate anao amin'ny solosainao (desktop).

Izany no fiafarana, vita ny fampidirana fandoavam-bola PayPal anao!

Raha manana fanontaniana momba ny fandrindrana PayPal ianao, dia afaka mankany amin'ny [Help Center] an'i PayPal ianao.
