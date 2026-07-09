---
title: Pagtanggap ng Bayad
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Pagbabayad (v2) {#getting-paid-v2}

_**MAHALAGANG TALA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite bersyon 2.x.**_

Ang Ultimate Multisite ay may built-in na sistema para sa membership at billing. Para gumana ang aming sistema ng billing, isinama namin ang pinakakaraniwang mga gateway ng pagbabayad na ginagamit sa e-commerce. Ang mga default na gateway ng pagbabayad sa Ultimate Multisite ay _Stripe_ , _PayPal_ , at Manwal na Pagbabayad. Maaari mo ring gamitin ang _WooCommerce_ , _GoCardless_ at _Payfast_ upang tumanggap ng mga bayad sa pamamagitan ng pag-install ng kani-kanilang mga add-on.

## Mga Pangunahing Setting {#basic-settings}

Maaari mong i-configure ang alinman sa mga gateway ng pagbabayad na ito sa ilalim ng mga setting ng pagbabayad ng Ultimate Multisite. Mahahanap mo ito sa pamamagitan ng pagpunta sa **Ultimate Multisite menu > Settings > Payments.**

![Pahina ng mga setting ng pagbabayad sa Ultimate Multisite na nagpapakita ng panel ng Payments](/img/config/payments-settings-page.png)

Bago mo i-setup ang iyong gateway ng pagbabayad, pakitingnan ang mga pangunahing setting ng pagbabayad na maaari mong i-configure:

**Pilitin ang auto-rene** **w:** Titiyakin nito na awtomatikong mauulit ang pagbabayad sa katapusan ng bawat billing cycle depende sa dalas ng billing na pinili ng user.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Sinusuri ng Ultimate Multisite v2.13.0 kung ang aktibong gateway ay may reusable renewal credential bago i-save ang umuulit na membership na naka-enable ang auto-renewal. Ang renewal credential ay maaaring gateway subscription, billing agreement, naka-save na vault token, o katumbas na reusable na paraan ng pagbabayad. Kung iuulat ng gateway na walang magagamit na credential, ise-save ng Ultimate Multisite ang membership ngunit io-off ang auto-renewal at itatala ang missing-credential state upang makahingi ang administrator o support flow sa customer na muling pahintulutan ang pagbabayad bago ang petsa ng renewal.

Pinipigilan nito ang isang membership na magmukhang mag-a-auto-renew kapag ang gateway ay makakakolekta lamang ng mga one-time payment. Dapat kumpirmahin ng mga gateway add-on na ang mga umuulit na checkout ay nag-iimbak ng reusable credential, lalo na kapag sinusuportahan ng gateway ang parehong one-time capture at vaulted/subscription na mga mode ng pagbabayad.

**Payagan ang mga trial nang walang paraan ng pagbabayad:** Kapag naka-enable ang opsyong ito, hindi na kailangang magdagdag ng iyong client ng anumang impormasyong pinansyal habang nasa proseso ng registration. Kakailanganin lamang ito kapag nag-expire na ang trial period.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Magpadala ng invoice kapag nakumpirma ang pagbabayad:** Binibigyan ka nito ng opsyon kung magpapadala o hindi ng invoice pagkatapos ng pagbabayad. Tandaan na magkakaroon ang mga user ng access sa kanilang kasaysayan ng pagbabayad sa ilalim ng kanilang subsite dashboard. Hindi nalalapat ang opsyong ito sa Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Skema ng pagnunumero ng invoice:** Dito, maaari kang pumili ng alinman sa payment reference code o sequential number scheme. Kung pipiliin mong gumamit ng payment reference code para sa iyong mga invoice, wala kang kailangang i-configure. Kung pipiliin mong gumamit ng sequential number scheme, kakailanganin mong i-configure ang **susunod na numero ng invoice** (Gagamitin ang numerong ito bilang numero ng invoice para sa susunod na invoice na gagawin sa sistema. Nadadagdagan ito ng isa tuwing may bagong invoice na nililikha. Maaari mo itong baguhin at i-save upang i-reset ang sunod-sunod na numero ng invoice sa isang partikular na halaga) at ang **prefix ng numero ng invoice.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Saan mahahanap ang mga gateway: {#where-to-find-the-gateways}

Maaari mong i-setup ang mga gateway ng pagbabayad sa parehong pahina ( **Ultimate Multisite > Settings > Payments**). Sa mismong ibaba ng **mga aktibong gateway ng pagbabayad** , makikita mo ang: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ at _Manual_.

![Seksyon ng mga Aktibong Gateway ng Pagbabayad na naglilista ng Stripe, Stripe Checkout, PayPal at Manual](/img/config/payments-active-gateways.png)

Mayroon kaming nakalaang artikulo para sa bawat gateway ng pagbabayad na gagabay sa iyo sa mga hakbang ng pag-setup nito, na mahahanap mo sa mga link sa ibaba.

Maaari mong tingnan at i-edit ang mga detalye ng pagbabayad:

![Interface ng pag-edit ng pagbabayad](/img/admin/payment-edit.png)

Narito ang buong view ng pahina ng pag-edit ng pagbabayad:

![Buong interface ng pag-edit ng pagbabayad](/img/admin/payment-edit-full.png)

Narito rin ang buong view ng mga setting ng mga gateway ng pagbabayad:

![Buong pahina ng mga setting ng mga gateway ng pagbabayad](/img/config/settings-payments-gateways-full.png)

**Pag-setup ng Stripe gateway**

**Pag-setup ng PayPal gateway**** **

**Pag-setup ng mga manwal na pagbabayad**

Ngayon, kung gusto mong gamitin ang _WooCommerce_ , _GoCardless_ o _Payfast_ bilang iyong gateway ng pagbabayad, kakailanganin mong **i-install at i-configure ang kanilang mga add-on**.

### Paano i-install ang WooCommerce add-on: {#how-to-install-the-woocommerce-add-on}

Nauunawaan namin na ang _Stripe_ at _PayPal_ ay hindi available sa ilang bansa, na naglilimita o nakahahadlang sa mga user ng Ultimate Multisite na epektibong magamit ang aming plugin. Kaya gumawa kami ng add-on upang i-integrate ang _WooCommerce,_ na isang napakasikat na e-commerce plugin. Gumawa ang mga developer sa buong mundo ng mga add-on upang i-integrate dito ang iba’t ibang gateway ng pagbabayad. Sinamantala namin ito upang palawakin ang mga gateway ng pagbabayad na maaari mong gamitin sa sistema ng billing ng Ultimate Multisite.

_**MAHALAGA:** Kinakailangan ng Ultimate Multisite: WooCommerce Integration na naka-activate ang WooCommerce kahit man lang sa iyong pangunahing site._

Una, pumunta sa pahina ng mga add-on. Mahahanap mo ito sa pamamagitan ng pagpunta sa **Ultimate Multisite > Settings**. Dapat mong makita ang talahanayan ng **Add-ons**. I-click ang **Tingnan ang aming mga Add-on**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Pagkatapos i-click ang **Tingnan ang aming mga Add-on** , ire-redirect ka sa pahina ng mga add-on. Dito mo mahahanap ang lahat ng add-on ng Ultimate Multisite. I-click ang **Ultimate Multisite: WooCommerce Integration** add-on.

![Pahina ng mga add-on na naglilista ng mga add-on ng Ultimate Multisite kabilang ang WooCommerce Integration](/img/addons/addons-page.png)

May lalabas na bintana na may mga detalye ng karagdagan. I-click lang ang **I-install Ngayon**.

<!-- Hindi available ang screenshot: dialog ng mga detalye ng karagdagang Ultimate Multisite WooCommerce Integration na may button na I-install Ngayon -->

Pagkatapos ng pag-install, ire-redirect ka sa pahina ng mga pandugtong. Dito, i-click lang ang **I-activate sa Network** at maa-activate ang karagdagang WooCommerce sa iyong network.

<!-- Hindi available ang screenshot: Pahina ng mga pandugtong na may link na I-activate sa Network para sa karagdagang WooCommerce Integration -->

Pagkatapos itong i-activate, kung wala ka pa ring naka-install at naka-activate na pandugtong na WooCommerce sa iyong websayt, makakatanggap ka ng paalala.

<!-- Hindi available ang screenshot: Paunawa ng admin na nagpapaalala sa tagapangasiwa na i-install at i-activate ang pandugtong na WooCommerce -->

Para magbasa pa tungkol sa karagdagang WooCommerce Integration, **i-click dito**.

### Paano i-install ang karagdagang GoCardless: {#how-to-install-the-gocardless-add-on}

Ang mga hakbang para i-install ang karagdagang _GoCardless_ ay halos kapareho ng sa karagdagang _WooCommerce_. Mangyaring pumunta sa pahina ng mga karagdagan at piliin ang karagdagang **Ultimate Multisite: GoCardless Gateway**.

<!-- Hindi available ang screenshot: Pahina ng mga karagdagan na may naka-highlight na karagdagang Ultimate Multisite GoCardless Gateway -->

Lalabas ang bintana ng karagdagan. I-click ang **I-install Ngayon**.

<!-- Hindi available ang screenshot: dialog ng mga detalye ng karagdagang Ultimate Multisite GoCardless Gateway na may button na I-install Ngayon -->

Pagkatapos ng pag-install, ire-redirect ka sa pahina ng mga pandugtong. Dito, i-click lang ang **I-activate sa Network** at maa-activate ang karagdagang _GoCardless_ sa iyong network.

<!-- Hindi available ang screenshot: Pahina ng mga pandugtong na may link na I-activate sa Network para sa karagdagang GoCardless Gateway -->

Para matutunan kung paano magsimula sa gateway na _GoCardless_, **basahin ang artikulong ito**.

### Paano i-install ang karagdagang Payfast: {#how-to-install-the-payfast-add-on}

Pumunta sa pahina ng mga karagdagan at piliin ang karagdagang **Ultimate Multisite: Payfast Gateway**.

<!-- Hindi available ang screenshot: Pahina ng mga karagdagan na may naka-highlight na karagdagang Ultimate Multisite Payfast Gateway -->

Lalabas ang bintana ng karagdagan. I-click ang **I-install Ngayon.**

<!-- Hindi available ang screenshot: dialog ng mga detalye ng karagdagang Ultimate Multisite Payfast Gateway na may button na I-install Ngayon -->

Pagkatapos ng pag-install, ire-redirect ka sa pahina ng mga pandugtong. Dito, i-click lang ang **I-activate sa Network** at maa-activate ang karagdagang _Payfast_ sa iyong network.

<!-- Hindi available ang screenshot: Pahina ng mga pandugtong na may link na I-activate sa Network para sa karagdagang Payfast Gateway -->
