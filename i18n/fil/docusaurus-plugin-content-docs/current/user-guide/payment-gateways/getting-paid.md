---
title: Pagtanggap ng Bayad
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Pagbabayad (v2) {#getting-paid-v2}

_**MAHALAGANG TALA: Tinutukoy ng artikulong ito ang Ultimate Multisite version 2.x.**_

May built-in na sistema ng membership at billing ang Ultimate Multisite. Para gumana ang aming sistema ng billing, isinama namin ang pinakakaraniwang payment gateways na ginagamit sa e-commerce. Ang default na payment gateways sa Ultimate Multisite ay _Stripe_ , _PayPal_ , at Manual Payment. Maaari mo ring gamitin ang _WooCommerce_ , _GoCardless_ at _Payfast_ para tumanggap ng mga bayad sa pamamagitan ng pag-install ng kani-kanilang add-ons.

## Mga Pangunahing Setting {#basic-settings}

Maaari mong i-configure ang alinman sa mga payment gateway na ito sa ilalim ng payment settings ng Ultimate Multisite. Mahahanap mo ito sa pagpunta sa **Ultimate Multisite menu > Settings > Payments.**

![Pahina ng payments settings sa Ultimate Multisite na nagpapakita ng panel ng Payments](/img/config/payments-settings-page.png)

Bago mo i-setup ang iyong payment gateway, pakitingnan ang mga pangunahing payment settings na maaari mong i-configure:

**Puwersahin ang auto-rene** **w:** Sisiguraduhin nito na awtomatikong mauulit ang bayad sa dulo ng bawat billing cycle depende sa billing frequency na pinili ng user.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Sinusuri ng Ultimate Multisite v2.13.0 kung may reusable renewal credential ang aktibong gateway bago i-save ang recurring membership na naka-enable ang auto-renewal. Ang renewal credential ay maaaring gateway subscription, billing agreement, saved vault token, o katumbas na reusable payment method. Kung iniulat ng gateway na walang magagamit na credential, ise-save ng Ultimate Multisite ang membership ngunit io-off ang auto-renewal at itatala ang missing-credential state para maaaring hingin ng administrator o support flow sa customer na muling pahintulutan ang bayad bago ang renewal date.

Pinipigilan nito ang isang membership na magmukhang nag-auto-renew kapag one-time payments lang ang kayang kolektahin ng gateway. Dapat kumpirmahin ng mga gateway add-on na nag-iimbak ng reusable credential ang recurring checkouts, lalo na kapag sinusuportahan ng gateway ang parehong one-time capture at vaulted/subscription payment modes.

**Payagan ang trials nang walang payment** **method:** Kapag naka-enable ang opsyong ito, hindi na kailangang magdagdag ng iyong client ng anumang impormasyong pinansyal habang nasa proseso ng registration. Kakailanganin lang ito kapag nag-expire na ang trial period.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Magpadala ng invoice sa payment confirmation:** Binibigyan ka nito ng opsyon kung magpapadala o hindi ng invoice pagkatapos ng bayad. Tandaan na magkakaroon ng access ang mga user sa kanilang payment history sa ilalim ng kanilang subsite dashboard. Hindi nalalapat ang opsyong ito sa Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Scheme ng pagnunumero ng invoice:** Dito, maaari kang pumili ng payment reference code o sequential number scheme. Kung pipiliin mong gumamit ng payment reference code para sa iyong mga invoice, wala kang kailangang i-configure. Kung pipiliin mong gumamit ng sequential number scheme, kakailanganin mong i-configure ang **susunod na invoice number** (Gagamitin ang numerong ito bilang invoice number para sa susunod na invoice na mabubuo sa sistema. Nadadagdagan ito ng isa sa bawat pagkakataong may bagong invoice na nalilikha. Maaari mo itong baguhin at i-save para i-reset ang invoice sequential number sa isang partikular na value) at ang **invoice number prefix.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Saan mahahanap ang mga gateway: {#where-to-find-the-gateways}

Maaari mong i-setup ang mga payment gateway sa parehong pahina ( **Ultimate Multisite > Settings > Payments**). Sa mismong ibaba ng **active payment gateways** , makikita mo ang: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ at _Manual_.

![Seksyon ng Active Payment Gateways na naglilista ng Stripe, Stripe Checkout, PayPal at Manual](/img/config/payments-active-gateways.png)

Mayroon kaming nakalaang artikulo para sa bawat payment gateway na gagabay sa iyo sa mga hakbang ng pag-setup nito na mahahanap mo sa mga link sa ibaba.

Maaari mong tingnan at i-edit ang mga detalye ng bayad:

![Interface sa pag-edit ng bayad](/img/admin/payment-edit.png)

Narito ang buong view ng pahina ng pag-edit ng bayad:

![Buong interface ng pag-edit ng bayad](/img/admin/payment-edit-full.png)

Narito rin ang buong view ng settings ng mga payment gateway:

![Buong pahina ng settings ng mga payment gateway](/img/config/settings-payments-gateways-full.png)

**Pag-setup ng Stripe gateway**

**Pag-setup ng PayPal gateway**** **

**Pag-setup ng manual payments**

Ngayon, kung gusto mong gamitin ang _WooCommerce_ , _GoCardless_ o _Payfast_ bilang iyong payment gateway, kakailanganin mong **i-install at i-configure ang kanilang add-ons**.

### Paano i-install ang WooCommerce add-on: {#how-to-install-the-woocommerce-add-on}

Nauunawaan namin na hindi available ang _Stripe_ at _PayPal_ sa ilang bansa na naglilimita o humahadlang sa mga user ng Ultimate Multisite na epektibong magamit ang aming plugin. Kaya gumawa kami ng add-on para i-integrate ang _WooCommerce,_ na isang napakasikat na e-commerce plugin. Gumawa ang mga developer sa buong mundo ng add-ons para i-integrate ang iba't ibang payment gateways dito. Sinamantala namin ito para palawakin ang payment gateways na maaari mong gamitin sa billing system ng Ultimate Multisite.

_**MAHALAGA:** Kinakailangan ng Ultimate Multisite: WooCommerce Integration na naka-activate ang WooCommerce kahit man lang sa iyong main site._

Una, pumunta sa pahina ng add-ons. Mahahanap mo ito sa pagpunta sa **Ultimate Multisite > Settings**. Dapat mong makita ang **Add-ons** table. I-click ang **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Pagkatapos i-click ang **Check our Add-ons** , ire-redirect ka sa pahina ng add-ons. Dito mahahanap mo ang lahat ng Ultimate Multisite add-ons. I-click ang **Ultimate Multisite: WooCommerce Integration** add-on.

![Pahina ng add-ons na naglilista ng Ultimate Multisite add-ons kabilang ang WooCommerce Integration](/img/addons/addons-page.png)

May lalabas na window na may mga detalye ng add-on. I-click lang ang **I-install Ngayon**.

<!-- Hindi available ang screenshot: dialog ng mga detalye ng Ultimate Multisite WooCommerce Integration add-on na may button na I-install Ngayon -->

Pagkatapos ng pag-install, ire-redirect ka sa pahina ng mga karagdagang programa. Dito, i-click lang ang **I-activate sa Network** at maa-activate ang WooCommerce add-on sa iyong network.

<!-- Hindi available ang screenshot: pahina ng mga karagdagang programa na may link na I-activate sa Network para sa WooCommerce Integration add-on -->

Pagkatapos itong i-activate, kung wala ka pa ring WooCommerce na karagdagang programa na naka-install at naka-activate sa iyong website, makakatanggap ka ng paalala.

<!-- Hindi available ang screenshot: abiso ng admin na nagpapaalala sa tagapamahala na i-install at i-activate ang WooCommerce na karagdagang programa -->

Para magbasa pa tungkol sa WooCommerce Integration add-on, **i-click dito**.

### Paano i-install ang GoCardless add-on: {#how-to-install-the-gocardless-add-on}

Ang mga hakbang para i-install ang _GoCardless_ add-on ay halos kapareho ng sa _WooCommerce_ add-on. Mangyaring pumunta sa pahina ng mga add-on at piliin ang **Ultimate Multisite: GoCardless Gateway** add-on.

<!-- Hindi available ang screenshot: pahina ng mga add-on na naka-highlight ang Ultimate Multisite GoCardless Gateway add-on -->

Lalabas ang window ng add-on. I-click ang **I-install Ngayon**.

<!-- Hindi available ang screenshot: dialog ng mga detalye ng Ultimate Multisite GoCardless Gateway add-on na may button na I-install Ngayon -->

Pagkatapos ng pag-install, ire-redirect ka sa pahina ng mga karagdagang programa. Dito, i-click lang ang **I-activate sa Network** at maa-activate ang _GoCardless_ add-on sa iyong network.

<!-- Hindi available ang screenshot: pahina ng mga karagdagang programa na may link na I-activate sa Network para sa GoCardless Gateway add-on -->

Para matutunan kung paano magsimula sa _GoCardless_ gateway, **basahin ang artikulong ito**.

### Paano i-install ang Payfast add-on: {#how-to-install-the-payfast-add-on}

Pumunta sa pahina ng mga add-on at piliin ang **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Hindi available ang screenshot: pahina ng mga add-on na naka-highlight ang Ultimate Multisite Payfast Gateway add-on -->

Lalabas ang window ng add-on. I-click ang **I-install Ngayon.**

<!-- Hindi available ang screenshot: dialog ng mga detalye ng Ultimate Multisite Payfast Gateway add-on na may button na I-install Ngayon -->

Pagkatapos ng pag-install, ire-redirect ka sa pahina ng mga karagdagang programa. Dito, i-click lang ang **I-activate sa Network** at maa-activate ang _Payfast_ add-on sa iyong network.

<!-- Hindi available ang screenshot: pahina ng mga karagdagang programa na may link na I-activate sa Network para sa Payfast Gateway add-on -->
