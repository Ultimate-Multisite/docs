---
title: Pagbayad
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Pagbayad (v2)

_**MAHINUNGAN: Kini nga artikulo nagtumong sa Ultimate Multisite version 2.x.**_

Ang Ultimate Multisite adunay built-in nga membership ug billing system. Aron molihok ang among billing system, gipagsama namo ang labing kasagaran nga payment gateways nga gigamit sa e-commerce. Ang default nga mga payment gateway sa Ultimate Multisite mao ang _Stripe_, _PayPal_, ug Manual Payment. Mahimo usab nimo gamiton ang _WooCommerce_, _GoCardless_, ug _Payfast_ aron makadawat og bayad pinaagi sa pag-install sa ilang mga add-ons.

## Basic Settings

Mahimo nimong i-configure bisan unsa niini nga mga payment gateway ubos sa Ultimate Multisite payment settings. Mahimo nimo kini pangitaon pinaagi sa pagadto sa **Ultimate Multisite menu > Settings > Payments.**

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Sa dili pa mo mag-setup sa imong payment gateway, palihog tan-awa ang basic payment settings nga mahimo nimong i-configure:

**Force auto-rene** **w:** Kini siguruha nga ang bayad awtomatikong molungtad paghuman sa matag billing cycle depende sa frequency sa billing nga gipili sa user.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ang Ultimate Multisite v2.13.0 nag-check kung ang active gateway adunay reusable renewal credential sa dili pa magsave og recurring membership nga naay auto-renewal enabled. Ang renewal credential mahimong subscription sa gateway, billing agreement, saved vault token, o katumbas nga reusable payment method. Kung ang gateway magreport nga walay gamiton nga credential, ang Ultimate Multisite magsave sa membership apan i-off ang auto-renewal ug ierekord ang estado nga kulang og credential aron mahimong mangayo ang administrator o support flow sa customer nga mag-re-authorize pagbalik sa bayad sa dili pa ang petsa sa renewal.

Nipig-ot ni kini aron dili magpakita nga awtomatikong mag-renew ang membership kung ang gateway mahimong makolekta lang og usa ka higayon nga bayad. Kinahanglan kumpirmahon sa Gateway add-ons nga ang recurring checkouts nag-iimbak og reusable credential, labi na kung ang gateway suportado ang parehas nga one-time capture ug vaulted/subscription payment modes.

**Allow trials without payment method (Pahilayon alang sa mga trial nga walay pamaagi sa bayad)** **method:** Kung i-enable ninyo kining option, dili kinahanglan nga maghatag og bisan unsang impormasyon bahin sa kwarta ang inyong client panahon sa registration. Kinahanglan lang kini kung matapos na ang trial period.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Send invoice on payment confirmation (Pagpadala og invoice paghuman sa kumpirmasyon sa bayad):** Naghatag ni kaninyo og option kung ipadala ba ninyo ang invoice human sa bayad o dili. Ampoa nga ang mga user makakita sa ilang payment history ubos sa dashboard sa ilang subsite. Kini nga option dili magamit sa Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Invoice numbering scheme (Sistema sa pagnumero sa invoice):** Dinhi, pwede kamo mopili og payment reference code o usa ka sequential number scheme. Kung magpili mo nga gamiton ang payment reference code para sa inyong mga invoice, dili ninyo kinahanglan i-configure bisan unsa. Kung magpili mo og sequential number scheme, kinahanglan ninyong i-configure ang **next invoice number** (Kini nga numero gigamit isip invoice number alang sa sunod nga invoice nga gi-generate sa system. Kini gidaghanon og usa kada paghimo og bag-ong invoice. Mahimo ninyong usbon kini ug i-save aron ma-reset ang sequential number sa invoice ngadto sa usa ka piho nga value) ug ang **invoice number prefix**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Asa kung asa makita ang mga gateway:

Mahimo nimo i-setup ang payment gateways sa parehas nga page ( **Ultimate Multisite > Settings > Payments**). Sa ubos ra sa **active payment gateways**, makita nimo ang: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ ug _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Naa mi usa ka dedicated article para sa matag payment gateway nga maggiya nimo sa mga lakang sa pag-setup niini, nga makita nimo sa mga link sa ubos.

Makakita ug makapag-edit ka sa detalye sa bayad:

![Payment edit interface](/img/admin/payment-edit.png)

Ania ang bug-os nga tan-aw sa payment edit page:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Ania usab ang bug-os nga tan-aw sa settings sa payment gateways:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Pag-setup sa Stripe gateway**

**Pag-setup sa PayPal gateway**** **

**Pag-setup sa manual payments**

Karon, kung gusto nimo gamiton ang _WooCommerce_ , _GoCardless_ o _Payfast_ isip imong payment gateway, kinahanglan nimo **i-install ug i-configure ang ilang mga add-on**.

### Unsaon pag-install sa WooCommerce add-on:

Nakasabot mi nga ang _Stripe_ ug _PayPal_ dili available sa pipila ka mga nasud nga naglimita o makapugong sa Ultimate Multisite users nga epektibong mogamit sa among plugin. Busa, naghimo kami og add-on aron i-integrate ang _WooCommerce_, nga usa ka sikat kaayo nga e-commerce plugin. Ang mga developer sa tibuok kalibutan naghimo og add-ons aron i-integrate ang lain-laing payment gateways niini. Gigamit namo kini aron mapalawom ang mga payment gateway nga imong magamit uban sa Ultimate Multisite billing system.

_**IMPORTANTE:** Ang Ultimate Multisite: WooCommerce Integration nagkinahanglan nga ang WooCommerce na aktibo sa imong main site._

Una, palihog pumunta sa add-ons page. Mahimo nimo kini maabot pinaagi sa pagadto sa **Ultimate Multisite > Settings**. Makita nimo ang **Add-ons** table. I-click ang **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Pagkahuman sa pag-click sa **Check our Add-ons**, i-redirect ka sa add-ons page. Dinhi nimo makita ang tanang Ultimate Multisite add-ons. I-click ang add-on nga **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

Magsulod usa ka window nga adunay detalye sa add-on. I-click lang ang **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

Human matapos ang instalasyon, i-redirect ka sa plugins page. Dinhi, i-click lang ang **Network Activate** ug ang WooCommerce add-on ma-activate na sa imong network.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

Human ma-activate kini, kung wala pa gihapon ka'y WooCommerce plugin nga gi-install ug na-activate sa imong website, makadawat ka og reminder.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

Para makabasa og dugang bahin bahin sa WooCommerce Integration add-on, **i-click diri**.

### Unsaon pag-install sa GoCardless add-on:

Ang mga lakang para mag-install sa _GoCardless_ add-on halos pareho lang sa _WooCommerce_ add-on. Pumunta lang sa page sa add-ons ug piliha ang **Ultimate Multisite: GoCardless Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Magsulod na ang window sa add-on. I-click ang **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Pagkahuman ma-install, i-redirect ka sa plugins page. Diha lang i-click ang **Network Activate** ug ang _GoCardless_ add-on na mag-activate sa imong network.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Para malaman kung unsaon pagmo-start gamit ang _GoCardless_ gateway, **basa kining article**.

### Unsaon pag-install sa Payfast add-on:

Pumunta sa page sa add-ons ug piliha ang **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Magsulod na ang window sa add-on. I-click ang **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Pagkahuman ma-install, i-redirect ka sa plugins page. Diha lang i-click ang **Network Activate** ug ang _Payfast_ add-on na mag-activate sa imong network.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
