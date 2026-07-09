---
title: Pagdawat og Bayad
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Pagdawat og Bayad (v2) {#getting-paid-v2}

_**MAHINUNGDANONG PAHINUMDOM: Kini nga artikulo nagtumong sa Ultimate Multisite version 2.x.**_

Ang Ultimate Multisite adunay built-in nga membership ug billing system. Aron molihok ang among billing system, gi-integrate namo ang labing kasagarang payment gateways nga gigamit sa e-commerce. Ang default nga payment gateways sa Ultimate Multisite mao ang _Stripe_ , _PayPal_ , ug Manual Payment. Makagamit ka usab og _WooCommerce_ , _GoCardless_ ug _Payfast_ aron modawat og bayad pinaagi sa pag-install sa ilang tagsa-tagsa ka add-ons.

## Batakang Settings {#basic-settings}

Mahimo nimong i-configure ang bisan asa niining payment gateways ubos sa payment settings sa Ultimate Multisite. Makit-an nimo kini pinaagi sa pag-adto sa **Ultimate Multisite menu > Settings > Payments.**

![Panid sa payments settings sa Ultimate Multisite nga nagpakita sa Payments panel](/img/config/payments-settings-page.png)

Sa dili pa nimo i-setup ang imong payment gateway, palihug tan-awa ang batakang payment settings nga mahimo nimong i-configure:

**Pugson ang auto-rene** **w:** Kini magsiguro nga ang bayad awtomatikong mobalik sa katapusan sa matag billing cycle depende sa billing frequency nga gipili sa user.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ang Ultimate Multisite v2.13.0 mosusi kon ang aktibong gateway adunay reusable renewal credential sa dili pa i-save ang recurring membership nga naka-enable ang auto-renewal. Ang renewal credential mahimong gateway subscription, billing agreement, saved vault token, o katumbas nga reusable payment method. Kon i-report sa gateway nga walay magamit nga credential, i-save sa Ultimate Multisite ang membership apan i-off ang auto-renewal ug i-record ang missing-credential state aron ang administrator o support flow makapangayo sa customer sa pag-re-authorize sa bayad sa dili pa ang renewal date.

Kini mopugong sa membership nga makita nga murag mag-auto-renew samtang ang gateway makakolekta ra og one-time payments. Ang gateway add-ons kinahanglan mokumpirma nga ang recurring checkouts mag-store og reusable credential, ilabi na kon ang gateway nagsuporta sa duha ka one-time capture ug vaulted/subscription payment modes.

**Tugoti ang trials nga walay payment** **method:** Uban niining option nga gi-enable, ang imong client dili na kinahanglan modugang og bisan unsang financial information atol sa registration process. Kinahanglanon lang kini sa dihang mo-expire na ang trial period.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Ipadala ang invoice sa payment confirmation:** Kini mohatag kanimo og option kon ipadala ba o dili ang invoice human sa bayad. Timan-i nga ang users adunay access sa ilang payment history ubos sa ilang subsite dashboard. Kini nga option dili mo-apply sa Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Invoice numbering scheme:** Dinhi, makapili ka og payment reference code o sequential number scheme. Kon mopili ka sa paggamit og payment reference code para sa imong invoices, dili na nimo kinahanglan mag-configure og bisan unsa. Kon mopili ka sa paggamit og sequential number scheme, kinahanglan nimo i-configure ang **sunod nga invoice number** (Kini nga number gamiton isip invoice number para sa sunod nga invoice nga i-generate sa system. Kini madugangan og usa matag higayon nga maghimo og bag-ong invoice. Mahimo nimo kini usbon ug i-save aron i-reset ang invoice sequential number ngadto sa espesipikong value) ug ang **invoice number prefix.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Asa pangitaon ang gateways: {#where-to-find-the-gateways}

Mahimo nimong i-setup ang payment gateways sa parehas nga panid ( **Ultimate Multisite > Settings > Payments**). Sa ubos mismo sa **aktibong payment gateways** , makita nimo ang: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ ug _Manual_.

![Seksyon sa Aktibong Payment Gateways nga naglista sa Stripe, Stripe Checkout, PayPal ug Manual](/img/config/payments-active-gateways.png)

Aduna kamiy gipahinungod nga artikulo para sa matag payment gateway nga mogiya kanimo sa mga lakang sa pag-setup niini nga imong makit-an sa mga link sa ubos.

Mahimo nimong tan-awon ug i-edit ang detalye sa bayad:

![Interface sa pag-edit sa bayad](/img/admin/payment-edit.png)

Ania ang kompleto nga tan-aw sa panid sa pag-edit sa bayad:

![Kompleto nga interface sa pag-edit sa bayad](/img/admin/payment-edit-full.png)

Ania usab ang kompleto nga tan-aw sa settings sa payment gateways:

![Kompleto nga panid sa settings sa payment gateways](/img/config/settings-payments-gateways-full.png)

**Pag-setup sa Stripe gateway**

**Pag-setup sa PayPal gateway**** **

**Pag-setup sa manual payments**

Karon, kon gusto nimong gamiton ang _WooCommerce_ , _GoCardless_ o _Payfast_ isip imong payment gateway, kinahanglan nimo **i-install ug i-configure ang ilang add-ons**.

### Unsaon pag-install sa WooCommerce add-on: {#how-to-install-the-woocommerce-add-on}

Nakasabot kami nga ang _Stripe_ ug _PayPal_ dili available sa ubang nasod nga naglimitar o nakababag sa Ultimate Multisite users sa epektibong paggamit sa among plugin. Busa naghimo kami og add-on aron i-integrate ang _WooCommerce,_ nga usa ka sikat kaayo nga e-commerce plugin. Ang developers sa tibuok kalibotan naghimo og add-ons aron i-integrate ang lain-laing payment gateways ngadto niini. Gipahimuslan namo kini aron mapalapad ang payment gateways nga mahimo nimong gamiton uban sa Ultimate Multisite billing system.

_**MAHINUNGDANON:** Ultimate Multisite: WooCommerce Integration nagkinahanglan nga ang WooCommerce ma-activate bisan labing menos sa imong main site._

Una, palihug adto sa add-ons page. Makit-an nimo kini pinaagi sa pag-adto sa **Ultimate Multisite > Settings**. Kinahanglan makita nimo ang **Add-ons** table. I-click ang **Tan-awa ang among Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Human sa pag-click sa **Tan-awa ang among Add-ons** , i-redirect ka ngadto sa add-ons page. Dinhi makit-an nimo ang tanang Ultimate Multisite add-ons. I-click ang **Ultimate Multisite: WooCommerce Integration** add-on.

![Panid sa add-ons nga naglista sa Ultimate Multisite add-ons lakip ang WooCommerce Integration](/img/addons/addons-page.png)

Usa ka bintana ang mogawas nga adunay mga detalye sa dugang. I-klik lang ang **I-install Karon**.

<!-- Walay magamit nga screenshot: dialog sa mga detalye sa Ultimate Multisite WooCommerce Integration nga dugang nga adunay I-install Karon nga button -->

Human mahuman ang pag-install, i-redirect ka ngadto sa panid sa mga plugin. Dinhi, i-klik lang ang **I-activate sa Network** ug ma-activate ang WooCommerce nga dugang sa imong network.

<!-- Walay magamit nga screenshot: Panid sa mga plugin nga adunay link nga I-activate sa Network alang sa WooCommerce Integration nga dugang -->

Human kini ma-activate, kung wala pa gihapon nimo ma-install ug ma-activate ang WooCommerce plugin sa imong website, makadawat ka og pahinumdom.

<!-- Walay magamit nga screenshot: Pahibalo sa admin nga nagpahinumdom sa administrator nga i-install ug i-activate ang WooCommerce plugin -->

Aron makabasa pa og dugang bahin sa WooCommerce Integration nga dugang, **i-klik dinhi**.

### Unsaon pag-install sa GoCardless nga dugang: {#how-to-install-the-gocardless-add-on}

Ang mga lakang sa pag-install sa _GoCardless_ nga dugang halos pareho ra sa _WooCommerce_ nga dugang. Palihog adto sa panid sa mga dugang ug pilia ang **Ultimate Multisite: GoCardless Gateway** nga dugang.

<!-- Walay magamit nga screenshot: Panid sa mga dugang nga gipasiugda ang Ultimate Multisite GoCardless Gateway nga dugang -->

Mogawas ang bintana sa dugang. I-klik ang **I-install Karon**.

<!-- Walay magamit nga screenshot: dialog sa mga detalye sa Ultimate Multisite GoCardless Gateway nga dugang nga adunay I-install Karon nga button -->

Human mahuman ang pag-install, i-redirect ka ngadto sa panid sa mga plugin. Dinhi, i-klik lang ang **I-activate sa Network** ug ma-activate ang _GoCardless_ nga dugang sa imong network.

<!-- Walay magamit nga screenshot: Panid sa mga plugin nga adunay link nga I-activate sa Network alang sa GoCardless Gateway nga dugang -->

Aron makat-on kung unsaon pagsugod sa _GoCardless_ gateway, **basaha kini nga artikulo**.

### Unsaon pag-install sa Payfast nga dugang: {#how-to-install-the-payfast-add-on}

Adto sa panid sa mga dugang ug pilia ang **Ultimate Multisite: Payfast Gateway** nga dugang.

<!-- Walay magamit nga screenshot: Panid sa mga dugang nga gipasiugda ang Ultimate Multisite Payfast Gateway nga dugang -->

Mogawas ang bintana sa dugang. I-klik ang **I-install Karon.**

<!-- Walay magamit nga screenshot: dialog sa mga detalye sa Ultimate Multisite Payfast Gateway nga dugang nga adunay I-install Karon nga button -->

Human mahuman ang pag-install, i-redirect ka ngadto sa panid sa mga plugin. Dinhi, i-klik lang ang **I-activate sa Network** ug ma-activate ang _Payfast_ nga dugang sa imong network.

<!-- Walay magamit nga screenshot: Panid sa mga plugin nga adunay link nga I-activate sa Network alang sa Payfast Gateway nga dugang -->
