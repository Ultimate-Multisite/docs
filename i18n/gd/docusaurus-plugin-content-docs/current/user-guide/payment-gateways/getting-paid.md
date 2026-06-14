---
title: Aonach a' chlàradh
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Ailinn a gaisgeadh (v2)

_**NOTE CRUCIAL: Tha seann seo a' tighinn air Ultimate Multisite version 2.x.**_

Tha Ultimate Multisite deiseil airson siostam a' chluainteachd agus a' gaisgeadh. Gus a bhith ag obair an siostam a gaisgeadh, tha sinn a' chluainteachd daoine a' sgrùdadh (payment gateways) a bhios beag. Tha na seannachdan a gaisgeadh a' chluainteachd anns an Ultimate Multisite: _Stripe_, _PayPal_, agus Gaisgeadh Manuil. Is e cudair gu is eadar a lasa _WooCommerce_, _GoCardless_ agus _Payfast_ gus tòiseachadh air a gaisgeadh a' chluainteachd a' sgrùdadh (add-ons) a bhith agad.

## Seannachdan Bhaighmis

Is e gu tric a lasa an seannachdan a gaisgeadh sin air seannachdan a gaisgeadh ann an Ultimate Multisite. Is e gu tric a lasa an seannachdan a gaisgeadh sin air seannachdan a gaisgeadh ann an Ultimate Multisite: **Ultimate Multisite menu > Settings > Payments.**

![Seannachdan bhaighmis anns an Ultimate Multisite a' tighinn air an panel Payments](/img/config/payments-settings-page.png)

Tha eadar a lasa seannachdan a gaisgeadh sin air a bhith agad, tha thu a' chluainteachd a' sgrùdadh (payment gateway) a' leum. Tha eadar a lasa seannachdan a gaisgeadh sin air a bhith agad:

**Force auto-rene** **w:** Tha seo ag obair gu bheil an tòiseachadh a' chluainteachd a' tòiseachadh gu fìor air an deugh a tha a' chluainteachd a' sgrùdadh (billing frequency) a tha thu a' tòiseachadh.

<!-- Screenshot unavailable: Seannachdan Force Auto-Renew ar seannachdan bhaighmis -->

Tha Ultimate Multisite v2.13.0 ag ceann a' chluainteachd an seannachdan a gaisgeadh a tha air a bhith agad gu sònach air tòiseachadh a' chluainteachd a' tòiseachadh (reusable renewal credential) a bhith aig an seannachdan a gaisgeadh a tha a' tòiseachadh. Is e cudair a bhith ag obair an seannachdan a gaisgeadh sin air a bhith agad: is e gu tric a lasa an seannachdan a gaisgeadh sin air a bhith agad: _gateway subscription_, _billing agreement_, _saved vault token_, no amh a' chluainteachd a' sgrùdadh a tha a' tòiseachadh. Má dh’ fhaigh an seannachdan a' sgrùdadh innse dh’ fhaigh an tòiseachadh air na h-uile, tha Ultimate Multisite a' gaisgeadh an chluainteachd ach a' tòiseachadh an auto-renewal agus a' gaisgeadh an stat a tha a' tòiseachadh gu faic a' chluainteachd a' sgrùdadh air a bhith agad gu fìor air na h-uile.

Dè a' chàir an tòiseachadh air an WordPress:

Sealltainn seo a' chlàradh an tòiseachadh gu robh seasmhachd a' tòiseachadh air a' rianadh gu robh an gathdhal (gateway) a' faighinn tòiseachadh de fhaighinn a' chàir (auto-renew), nuair a tha an gathdhal ag fhaighinn tòiseachadh de fhaighinn tòiseachadh (one-time payments) gu robh e a' faighinn tòiseachadh de fhaighinn tòiseachadh. Caithedh na addannachaid (add-ons) an gathdhal a stadfadh gu robh a' chàir a' rianadh a' tòiseachadh a' tòiseachadh (recurring checkouts) a' faighinn tòiseachadh de fhaighinn tòiseachadh a' chàir a' rianadh, gu sònraichte nuair a tha an gathdhal a' stadfadh am beathaidhean a' tòiseachadh a' tòiseachadh (one-time capture) agus modhan fhaighinn a' tòiseachadh/subskripsyn (vaulted/subscription payment modes).

**A' chlàradh a' tòiseachadh le fhaighinn:** **Method:** Gu h-aonach seo a' stadfadh, ní pàirt a thigidh a ghràdhachair a' faighinn d'fhaighinn (financial information) gu robh e a' chlàradh. Bidh seo a' tòiseachadh gu robh e a' fhaighinn dìreach an sin air a tha an tòiseachadh a' rianadh a' tòiseachadh (trial period expires).

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**An tòiseachadh a' chlàradh ar fhaighinn a' chàir:** Tha seo a' tòiseachadh gu robh e a' stadfadh an tòiseachadh a' rianadh a' tòiseachadh (invoice) a' faighinn a' chàir. Gheibheann thu an tòiseachadh a' faighinn a' chàir air a' fhaighinn a' chàir a' rianadh a' tòiseachadh (payment history) air a' chàir subsite dashboard. Tha an tòiseachadh seo a' tòiseachadh gu robh e a' stadfadh an gathdhal a' rianadh a' tòiseachadh (Manual Gateway).

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Seasmhachd a' chlàradh:** An tòiseachadh seo, leat a thigidh an tòiseachadh a' rianadh a' tòiseachadh (payment reference code) no seasmhachd sinneachaidh (sequential number scheme). Má thuigidh tu a' chlàradh a' rianadh a' tòiseachadh (payment reference code) a' faighinn air a' chàir, ní fhaodaidh thu a' stadfadh aon rud. Má thuigidh tu a' chlàradh a' rianadh a' tòiseachadh sinneachaidh (sequential number scheme) a' faighinn, rinn thu a' stadfadh an **numbair a' chlàradh a' chlàradh** (This number will be used as the invoice number for the next invoice generated on the system. It is incremented by one every time a new invoice is created. You can change it and save it to reset the invoice sequential number to a specific value) agus an **a' chlàradh a' chlàradh a' chlàradh** (invoice number prefix).

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## O sge thuairteanach a' chluichean:

Is eolra thuairteanach a' chluichean ar fìodh ( **Ultimate Multisite > Settings > Payments**). Tha'm tha thu air a' faighinn: _Stripe_, _Stripe_ _Checkout_, _PayPal_ agus _Manual_ a' chluichean a' tòr a' chluichean.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Tha meartach air an t-aithris airson ùine airson ch eachdair (payment gateway) a tha thu a' faighinn ar earrachdais a tha a' tòr a' chluichean, agus tha thu a' faighinn iad air an liathnan a tha a' tòr a' chluichean.

Tha meartach air an t-aithris airson ch eachdair (payment gateway) a tha thu a' faighinn ar earrachdais a tha a' tòr a' chluichean, agus tha thu a' faighinn iad air an liathnan a tha a' tòr a' chluichean.

**A' chluichean Stripe a thabhairt**

**A' chluichean PayPal a thabhairt**** **

**A' chluichean manual a thabhairt**

An uair a tha thu a' faicinn air _WooCommerce_, _GoCardless_ no'n _Payfast_ a bhith agad airson ch eachdair (payment gateway), rinn thu a' faighinn **a' chluichean agus a' chluichean a thabhairt** riad.

### Fuairt a' chluichean WooCommerce:

Tha sinn a' faicinn gu bheil _Stripe_ agus _PayPal_ ann an t-àiteannach a tha a' leathachadh a' chluichean a' chluichean Ultimate Multisite a' chluichean a' chluichean a' chluichean. Mar sin, rinn sinn a' chluichean airson _WooCommerce_, a tha e plugin e-commerce mòr. Tha deugaidhean air an t-àiteannach a tha a' leathachadh ch eachdair (payment gateway) ùr ri e, agus tha thu a' faighinn iad air a' chluichean a tha a' tòr a' chluichean.

_**IMPORTANT:** Ultimate Multisite: WooCommerce a' chàir a' chùisachadh (activated) mus tric a bhith ag obair ar an sinne agad._

Prìomhach, leud a' chùisich an seòl de 'add-ons'. Is e cheann a tha e a bhith agat gu faiceadh **Ultimate Multisite > Settings**. Bidh thu a' bheachd a bhith agad de 'Add-ons table'. Til cheann ar **Check our Add-ons**.

<!-- Screenshot unavailable: Tabel add-ons ar an seòl de Settings de Ultimate Multisite le link Check our Add-ons -->

An uair a tha thu a' chùisich ar **Check our Add-ons**, bidh thu a' chluichdheachd air an seòl de 'add-ons'. An sin, is e cheann a tha e a' chùisich a h-uile add-ons de Ultimate Multisite. Chluichdheachd ar an add-on **Ultimate Multisite: WooCommerce Integration**.

![Seòl add-ons a' chluichichda Ultimate Multisite add-ons a gleann WooCommerce Integration](/img/addons/addons-page.png)

Bidh seallad a' chùisich le de sealladh an add-on. Chluichdheachd gu **Install Now**.

<!-- Screenshot unavailable: Sealladh de sealladh add-on Ultimate Multisite WooCommerce Integration le nút Install Now -->

An uair a tha an tòisich a' chùisich, bidh thu a' chluichdheachd air an seòl de 'plugins'. Til cheann ar **Network Activate** agus bidh an add-on WooCommerce a' chùisich ag obair ar an sinne agad.

<!-- Screenshot unavailable: Seòl plugins le link Network Activate airson an add-on WooCommerce Integration -->

An uair a tha e a' chùisich, mar a tha thu a' chùisich a bhith ag obair ar an sinne agad, bidh thu a' chùisich air an tòisich.

<!-- Screenshot unavailable: Notice de admin a' chùisich an admin gu obair agus a' chùisich an plugin WooCommerce -->

Tha e cheann a bhith a' faicinn asgaidh air an add-on WooCommerce Integration, **chluichdheachd an sin**.

### Conas a chùisich an add-on GoCardless:

Tha stiùir airson aistalladh an add-on _GoCardless_ gu eil eamh-fhaighinn mar aistalladh an add-on _WooCommerce_. Til cheannach air an sealladh add-ons agus sceil **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Bhaidh sealladh add-on a' chluin. Chluain air **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

An uair a thabhas an aistalladh, byrnoidh thu air an sealladh plugins. Anno, chluain air **Network Activate** agus byrnoidh an add-on _GoCardless_ a' chluin ar tairgse.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Tha earrachd a bhith a' chluin airson a bhith a' seachdainn an _GoCardless_ gateway, **leugh an article seo**.

### Conas aistalladh an add-on Payfast:

Til cheannach air an sealladh add-ons agus sceil **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Bhaidh sealladh add-on a' chluin. Chluain air **Install Now.**

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Tha earrachd a bhith a' chluin airson a bhith a' seachdainn an _Payfast_ add-on ar tairgse.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
