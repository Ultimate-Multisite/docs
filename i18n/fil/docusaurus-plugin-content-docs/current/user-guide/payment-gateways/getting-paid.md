---
title: Pagbabayad
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# Pagtanggap ng Bayad (v2)

_**MAHALAGANG PAALALA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite version 2.x.**_

Ang Ultimate Multisite ay may built-in na sistema ng membership at pagsingil. Para gumana ang aming sistema ng pagsingil, nag-integrate kami ng mga pinakakaraniwang payment gateway na ginagamit sa e-commerce. Ang mga default na payment gateway sa Ultimate Multisite ay _Stripe_, _PayPal_, at Manual Payment. Maaari mo ring gamitin ang _WooCommerce_, _GoCardless_ at _Payfast_ para tumanggap ng bayad sa pamamagitan ng pag-install ng kani-kanilang mga add-on.

## Mga Pangunahing Setting

Maaari mong i-configure ang alinman sa mga payment gateway na ito sa ilalim ng payment settings ng Ultimate Multisite. Makikita mo ito sa pamamagitan ng pagpunta sa **Ultimate Multisite menu > Settings > Payments.**

![Pahina ng payment settings sa Ultimate Multisite](/img/config/settings-payment-gateways.png)

Bago mo i-setup ang iyong payment gateway, tingnan muna ang mga pangunahing payment setting na maaari mong i-configure:

**Force auto-renew:** Titiyakin nito na awtomatikong mag-uulit ang pagbabayad sa katapusan ng bawat billing cycle depende sa billing frequency na pinili ng user.

![Toggle setting ng Force auto-renew](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** Kapag naka-enable ang opsyong ito, hindi na kailangang magdagdag ng anumang impormasyon sa pagbabayad ang iyong kliyente sa panahon ng registration process. Kakailanganin lang ito kapag nag-expire na ang trial period.

![Toggle ng Allow trials without payment method](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** Nagbibigay ito sa iyo ng opsyon kung magpapadala ba ng invoice pagkatapos ng pagbabayad o hindi. Tandaan na ang mga user ay may access sa kanilang payment history sa ilalim ng kanilang subsite dashboard. Hindi naaangkop ang opsyong ito sa Manual Gateway.

![Toggle ng Send invoice on payment confirmation](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** Dito, maaari kang pumili ng payment reference code o sequential number scheme. Kung pipiliin mong gumamit ng payment reference code para sa iyong mga invoice, hindi mo na kailangang mag-configure ng kahit ano. Kung pipiliin mong gumamit ng sequential number scheme, kakailanganin mong i-configure ang **next invoice number** (Ang numerong ito ang gagamitin bilang invoice number para sa susunod na invoice na malilikha sa sistema. Dinadagdagan ito ng isa tuwing may bagong invoice na nalilikha. Maaari mo itong baguhin at i-save para i-reset ang sequential number ng invoice sa isang partikular na halaga) at ang **invoice number prefix.**

![Pagpili ng invoice numbering scheme](/img/config/settings-payment-gateways.png)

![Mga setting ng sequential invoice number at prefix](/img/config/settings-payment-gateways.png)

## Saan Makikita ang mga Gateway:

Maaari mong i-setup ang mga payment gateway sa parehong pahina (**Ultimate Multisite > Settings > Payments**). Sa ibaba mismo ng **active payment gateways**, makikita mo ang: _Stripe_, _Stripe Checkout_, _PayPal_ at _Manual_.

![Listahan ng mga active payment gateway](/img/config/settings-payment-gateways.png)

Mayroon kaming nakalaang artikulo para sa bawat payment gateway na gagabay sa iyo sa mga hakbang ng pag-setup nito na makikita mo sa mga link sa ibaba.

**Pag-setup ng Stripe gateway**

**Pag-setup ng PayPal gateway**

**Pag-setup ng manual payments**

Ngayon, kung gusto mong gamitin ang _WooCommerce_, _GoCardless_ o _Payfast_ bilang iyong payment gateway, kakailanganin mong **mag-install at mag-configure ng kanilang mga add-on**.

### Paano mag-install ng WooCommerce add-on:

Nauunawaan namin na ang _Stripe_ at _PayPal_ ay hindi available sa ilang bansa na naglilimita o humahadlang sa mga Ultimate Multisite user na epektibong magamit ang aming plugin. Kaya gumawa kami ng add-on para mag-integrate ng _WooCommerce_, na isang napakapopular na e-commerce plugin. Ang mga developer sa buong mundo ay gumawa ng mga add-on para mag-integrate ng iba't ibang payment gateway dito. Sinamantala namin ito para palawakin ang mga payment gateway na magagamit mo sa Ultimate Multisite billing system.

_**MAHALAGA:** Ang Ultimate Multisite: WooCommerce Integration ay nangangailangan na naka-activate ang WooCommerce kahit man lang sa iyong main site._

Una, pumunta sa add-ons page. Makikita mo ito sa pamamagitan ng pagpunta sa **Ultimate Multisite > Settings**. Makikita mo ang **Add-ons** table. I-click ang **Check our Add-ons**.

![Pahina ng settings na may add-ons section](/img/config/settings-general.png)

Pagkatapos i-click ang **Check our Add-ons**, mare-redirect ka sa add-ons page. Dito makikita mo ang lahat ng Ultimate Multisite add-on. I-click ang **Ultimate Multisite: WooCommerce Integration** add-on.

![Add-ons page na nagpapakita ng mga available na add-on](/img/config/settings-general.png)

May lalabas na window na may mga detalye ng add-on. I-click lang ang **Install Now**.

![Dialog ng pag-install ng WooCommerce add-on](/img/config/settings-general.png)

Pagkatapos ng installation, mare-redirect ka sa plugins page. Dito, i-click lang ang **Network Activate** at maa-activate ang WooCommerce add-on sa iyong network.

![Network Activate ang WooCommerce add-on](/img/config/settings-general.png)

Pagkatapos itong i-activate, kung wala ka pang naka-install at naka-activate na WooCommerce plugin sa iyong website, makakatanggap ka ng paalala.

![Paalala tungkol sa pag-activate ng WooCommerce](/img/config/settings-general.png)

Para magbasa pa tungkol sa WooCommerce Integration add-on, **i-click dito**.

### Paano mag-install ng GoCardless add-on:

Ang mga hakbang sa pag-install ng _GoCardless_ add-on ay halos pareho sa _WooCommerce_ add-on. Pumunta sa add-ons page at piliin ang **Ultimate Multisite: GoCardless Gateway** add-on.

![Add-ons page na nagpapakita ng mga available na add-on](/img/config/settings-general.png)

Lalabas ang window ng add-on. I-click ang **Install Now**.

![Dialog ng pag-install ng GoCardless add-on](/img/config/settings-general.png)

Pagkatapos ng installation, mare-redirect ka sa plugins page. Dito, i-click lang ang **Network Activate** at maa-activate ang _GoCardless_ add-on sa iyong network.

![Network Activate ang GoCardless add-on](/img/config/settings-general.png)

Para matutunan kung paano magsimula sa _GoCardless_ gateway, **basahin ang artikulong ito**.

### Paano mag-install ng Payfast add-on:

Pumunta sa add-ons page at piliin ang **Ultimate Multisite: Payfast Gateway** add-on.

![Add-ons page na nagpapakita ng mga available na add-on](/img/config/settings-general.png)

Lalabas ang window ng add-on. I-click ang **Install Now.**

![Dialog ng pag-install ng Payfast add-on](/img/config/settings-general.png)

Pagkatapos ng installation, mare-redirect ka sa plugins page. Dito, i-click lang ang **Network Activate** at maa-activate ang _Payfast_ add-on sa iyong network.

![Network Activate ang Payfast add-on](/img/config/settings-general.png)
