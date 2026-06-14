---
title: Pagkakuha ng Bayad
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Pagkolekta ng Bayad (v2)

_**MAHALAGANG PAALALA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite bersyon 2.x.**_

Mayroon ang Ultimate Multisite na built-in na sistema para sa membership at billing. Para gumana ang ating billing system, isinama natin ang pinakakaraniwang payment gateways na ginagamit sa e-commerce. Ang default na mga payment gateway sa Ultimate Multisite ay _Stripe_, _PayPal_, at Manual Payment. Maaari mo ring gamitin ang _WooCommerce_, _GoCardless_ at _Payfast_ para tumanggap ng bayad sa pamamagitan ng pag-install ng kani-kanilang add-ons.

## Mga Pangunahing Setting

Maaari mong i-configure ang alinman sa mga payment gateway na ito sa ilalim ng Ultimate Multisite payment settings. Makikita mo ito sa pamamagitan ng pagpunta sa **Ultimate Multisite menu > Settings > Payments.**

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Bago ka mag-setup ng iyong payment gateway, tingnan muna ang mga pangunahing setting ng bayad na maaari mong i-configure:

**Force auto-rene** **w:** Titiyakin nito na awtomatikong uulit ang bayad sa pagtatapos ng bawat billing cycle depende sa frequency ng billing na pinili ng user.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Sinusuri ng Ultimate Multisite v2.13.0 kung mayroon bang reusable renewal credential ang aktibong gateway bago i-save ang recurring membership na may auto-renewal na naka-enable. Ang renewal credential ay maaaring isang gateway subscription, billing agreement, saved vault token, o katumbas na reusable payment method. Kung ang gateway ay nag-uulat na walang usable credential, ise-save ng Ultimate Multisite ang membership ngunit patayin ang auto-renewal at itatala ang estado ng kulang na credential para mapayuhan ng administrator o support flow ang customer na muling mag-authorize ng bayad bago ang petsa ng renewal.

Pinipigilan nito na lumabas ang isang membership na awtomatikong magre-renew kapag ang gateway ay tumatanggap lamang ng one-time payments. Dapat tiyakin ng mga gateway add-on na ang recurring checkouts ay nag-iimbak ng reusable credential, lalo na kung sinusuportahan ng gateway ang parehong one-time capture at vaulted/subscription payment modes.

**Payagan ang trials nang walang method:** Sa pag-enable ng opsyong ito, hindi na kailangang maglagay ng anumang impormasyong pinansyal ang iyong kliyente sa proseso ng registration. Ito ay kakailanganin lamang kapag natapos ang trial period.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Magpadala ng invoice pagkatapos ng confirmation ng payment:** Nagbibigay ito sa iyo ng opsyon kung magpapadala ka ba ng invoice pagkatapos magbayad o hindi. Tandaan na ang mga user ay magkakaroon ng access sa kanilang payment history sa ilalim ng dashboard ng kanilang subsite. Ang opsyong ito ay hindi naaangkop sa Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Invoice numbering scheme:** Dito, maaari kang pumili ng payment reference code o isang sequential number scheme. Kung pipiliin mong gumamit ng payment reference code para sa iyong mga invoice, hindi mo na kailangang mag-configure ng kahit ano. Kung pipiliin mong gumamit ng sequential number scheme, kailangan mong i-configure ang **next invoice number** (Ang numerong ito ay gagamitin bilang invoice number para sa susunod na invoice na gagawin sa system. Ito ay tataas ng isa bawat paglikha ng bagong invoice. Maaari mo itong baguhin at i-save upang i-reset ang sequential number ng invoice sa isang partikular na halaga) at ang **invoice number prefix**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Ipinapakita ang mga field para sa susunod na numero ng invoice at unan ng numero ng invoice kapag pinili ang Sequential Number -->

## Saan makikita ang mga gateway:

Maaari mong i-setup ang payment gateways sa iisang page ( **Ultimate Multisite > Settings > Payments**). Sa ibaba mismo ng **active payment gateways**, makikita mo ang: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ at _Manual_.

![Seksyon ng Active Payment Gateways na naglilista ng Stripe, Stripe Checkout, PayPal at Manual](/img/config/payments-active-gateways.png)

Mayroon kaming nakalaang article para sa bawat payment gateway na gagabay sa iyo sa mga hakbang ng pag-set up nito na matatagpuan mo sa mga link sa ibaba.

Maaari mong tingnan at i-edit ang mga detalye ng bayad:

![Payment edit interface](/img/admin/payment-edit.png)

Narito ang buong tanawin ng payment edit page:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Narito rin ang buong tanawin ng mga setting ng payment gateways:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Pag-set up ng Stripe gateway**

**Pag-set up ng PayPal gateway**** **

**Pag-set up ng manual payments**

Ngayon, kung gusto mong gamitin ang _WooCommerce_ , _GoCardless_ o _Payfast_ bilang iyong payment gateway, kailangan mo munang **i-install at i-configure ang kanilang mga add-on**.

### Paano mag-install ng WooCommerce add-on:

Naiintindihan namin na hindi available ang _Stripe_ at _PayPal_ sa ilang bansa na naglilimita o humahadlang sa Ultimate Multisite users na epektibong gamitin ang aming plugin. Kaya gumawa kami ng isang add-on para i-integrate ang _WooCommerce_, na isa ring napakasikat na e-commerce plugin. Ang mga developer sa buong mundo ay gumagawa ng mga add-on upang i-integrate ang iba't ibang payment gateway dito. Ginagamit namin ito upang palawakin ang mga payment gateway na maaari mong gamitin kasama ang Ultimate Multisite billing system.

_**MAHALAGANG PA:** Ang Ultimate Multisite: WooCommerce Integration ay nangangailangan na ang WooCommerce ay naka-activate kahit sa iyong pangunahing site._

Una, pumunta ka muna sa page ng add-ons. Makikita mo ito sa pamamagitan ng pagpunta sa **Ultimate Multisite > Settings**. Dapat makakita ka ng talahanayan ng **Add-ons**. I-click ang **Check our Add-ons**.

<!-- Screenshot unavailable: Talahanayan ng mga Add-on sa Ultimate Multisite Settings sidebar na may link na Check our Add-ons -->

Pagkatapos mag-click sa **Check our Add-ons**, i-redirect ka sa add-ons page. Dito mo makikita ang lahat ng Ultimate Multisite add-on. I-click ang add-on na **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page na naglilista ng mga Ultimate Multisite add-on kasama ang WooCommerce Integration](/img/addons/addons-page.png)

May lalabas na window na may detalye ng add-on. I-click mo lang ang **Install Now**.

<!-- Screenshot unavailable: Dialog ng detalye ng Ultimate Multisite WooCommerce Integration add-on na may Install Now button -->

Pagkatapos ma-install, i-redirect ka sa plugins page. Dito, i-click mo lang ang **Network Activate** at a-activate ang WooCommerce add-on sa iyong network.

<!-- Screenshot unavailable: Plugins page na may link na Network Activate para sa WooCommerce Integration add-on -->

Pagkatapos ma-activate ito, kung wala ka pa ring installed at naka-activate na WooCommerce plugin sa iyong website, makakatanggap ka ng paalala.

<!-- Screenshot unavailable: Admin notice na nagpapaalala sa administrator na mag-install at i-activate ang WooCommerce plugin -->

Para sa mas maraming impormasyon tungkol sa WooCommerce Integration add-on, **i-click mo rito**.

### Paano mag-install ng GoCardless add-on:

Ang mga hakbang para i-install ang _GoCardless_ add-on ay halos pareho lang sa _WooCommerce_ add-on. Pumunta ka sa page ng add-ons at piliin ang **Ultimate Multisite: GoCardless Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Lalabas ang window ng add-on. I-click ang **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Pagkatapos ma-install, i-redirect ka sa plugins page. Dito lang, i-click mo ang **Network Activate** at aaktibahin na ang _GoCardless_ add-on sa network mo.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Para malaman kung paano magsimula gamit ang _GoCardless_ gateway, **basahin itong artikulo**.

### Paano i-install ang Payfast add-on:

Pumunta ka sa page ng add-ons at piliin ang **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Lalabas ang window ng add-on. I-click ang **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Pagkatapos ma-install, i-redirect ka sa plugins page. Dito lang, i-click mo ang **Network Activate** at aaktibahin na ang _Payfast_ add-on sa network mo.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
